import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface Review {
  id: number;
  author_name: string;
  rating: number;
  review_text: string;
  pet_type: string;
  is_approved: boolean;
  created_at: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const ADMIN_PASSWORD = 'masha2026';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      loadReviews();
    } else {
      setError('Неверный пароль');
    }
  };

  const loadReviews = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://functions.poehali.dev/c8f6ab06-9563-41da-92b7-c68de21c2c4c');
      const data = await response.json();
      setReviews(data.reviews || []);
    } catch (err) {
      setError('Ошибка загрузки отзывов');
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (id: number) => {
    try {
      const response = await fetch('https://functions.poehali.dev/c8f6ab06-9563-41da-92b7-c68de21c2c4c', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, is_approved: true }),
      });

      if (response.ok) {
        loadReviews();
      }
    } catch (err) {
      setError('Ошибка одобрения отзыва');
    }
  };

  const handleReject = async (id: number) => {
    try {
      const response = await fetch('https://functions.poehali.dev/c8f6ab06-9563-41da-92b7-c68de21c2c4c', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        loadReviews();
      }
    } catch (err) {
      setError('Ошибка удаления отзыва');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-orange-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full p-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-primary mb-2">Админ-панель</h1>
            <p className="text-muted-foreground">Модерация отзывов</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Введите пароль"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-purple-600">
              Войти
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => navigate('/')}
            >
              На главную
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  const pendingReviews = reviews.filter(r => !r.is_approved);
  const approvedReviews = reviews.filter(r => r.is_approved);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-orange-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">Админ-панель</h1>
            <p className="text-muted-foreground">Управление отзывами</p>
          </div>
          <div className="flex gap-3">
            <Button onClick={loadReviews} variant="outline">
              <Icon name="RefreshCw" className="mr-2" size={20} />
              Обновить
            </Button>
            <Button onClick={() => navigate('/')} variant="outline">
              <Icon name="Home" className="mr-2" size={20} />
              На главную
            </Button>
          </div>
        </div>

        {loading && (
          <div className="text-center py-12">
            <Icon name="Loader2" className="animate-spin mx-auto text-primary" size={48} />
            <p className="mt-4 text-muted-foreground">Загрузка отзывов...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl mb-6">
            {error}
          </div>
        )}

        {!loading && (
          <>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-primary">На модерации</h2>
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {pendingReviews.length}
                </span>
              </div>

              {pendingReviews.length === 0 ? (
                <Card className="p-8 text-center">
                  <Icon name="CheckCircle" className="mx-auto text-green-500 mb-4" size={48} />
                  <p className="text-muted-foreground">Нет отзывов на модерации</p>
                </Card>
              ) : (
                <div className="grid gap-6">
                  {pendingReviews.map((review) => (
                    <Card key={review.id} className="p-6 border-l-4 border-orange-500">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="font-bold text-lg mb-1">{review.author_name}</div>
                          <div className="text-sm text-muted-foreground">
                            {review.pet_type && `${review.pet_type} • `}
                            {new Date(review.created_at).toLocaleString('ru-RU')}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={20}
                              className={i < review.rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-6 italic">"{review.review_text}"</p>

                      <div className="flex gap-3">
                        <Button
                          onClick={() => handleApprove(review.id)}
                          className="bg-green-600 hover:bg-green-700 text-white"
                        >
                          <Icon name="Check" className="mr-2" size={20} />
                          Одобрить
                        </Button>
                        <Button
                          onClick={() => handleReject(review.id)}
                          variant="destructive"
                        >
                          <Icon name="X" className="mr-2" size={20} />
                          Отклонить
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold text-primary">Одобренные отзывы</h2>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {approvedReviews.length}
                </span>
              </div>

              {approvedReviews.length === 0 ? (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">Пока нет одобренных отзывов</p>
                </Card>
              ) : (
                <div className="grid gap-6">
                  {approvedReviews.map((review) => (
                    <Card key={review.id} className="p-6 border-l-4 border-green-500">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <div className="font-bold text-lg mb-1">{review.author_name}</div>
                          <div className="text-sm text-muted-foreground">
                            {review.pet_type && `${review.pet_type} • `}
                            {new Date(review.created_at).toLocaleString('ru-RU')}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon
                              key={i}
                              name="Star"
                              size={20}
                              className={i < review.rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-muted-foreground italic">"{review.review_text}"</p>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
