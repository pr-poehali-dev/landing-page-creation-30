import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ReviewModal from '@/components/ReviewModal';

interface Review {
  id: number;
  author_name: string;
  rating: number;
  review_text: string;
  pet_type: string;
  created_at: string;
}

const ReviewsPage = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/9e6ec67d-1a42-4bd1-886c-c31b7c7ee10a');
        if (!response.ok) throw new Error('Ошибка загрузки');
        const data = await response.json();
        if (data.reviews && Array.isArray(data.reviews)) {
          setReviews(data.reviews);
        }
      } catch (error) {
        console.error('Ошибка загрузки отзывов:', error);
      } finally {
        setLoading(false);
      }
    };
    loadReviews();
  }, [isReviewModalOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-orange-50">
      <ReviewModal isOpen={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)} />
      
      <div className="container mx-auto px-4 py-16">
        <Button 
          variant="ghost" 
          className="mb-8"
          onClick={() => navigate('/')}
        >
          <Icon name="ArrowLeft" className="mr-2" size={20} />
          Назад на главную
        </Button>

        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4">
            Отзывы клиентов
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Все отзывы</h1>
          <p className="text-xl text-muted-foreground mb-6">
            {loading ? 'Загрузка...' : `${reviews.length} отзывов от наших клиентов`}
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-purple-600 text-white text-lg px-8 hover:shadow-xl transition-all transform hover:scale-105"
            onClick={() => setIsReviewModalOpen(true)}
          >
            <Icon name="MessageSquare" className="mr-2" size={20} />
            Оставить отзыв
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Загрузка отзывов...</p>
          </div>
        ) : reviews.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground text-lg">Отзывов пока нет. Станьте первым!</p>
          </Card>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {reviews.map((review) => (
              <Card key={review.id} className="p-8 hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className={i < review.rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <p className="text-lg mb-6 italic text-muted-foreground">
                  "{review.review_text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {review.author_name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-bold">{review.author_name}</div>
                    {review.pet_type && (
                      <div className="text-sm text-muted-foreground">{review.pet_type}</div>
                    )}
                  </div>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  {new Date(review.created_at).toLocaleDateString('ru-RU')}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsPage;