import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewModal = ({ isOpen, onClose }: ReviewModalProps) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      author_name: formData.get('author_name') as string,
      rating: rating,
      review_text: formData.get('review_text') as string,
      pet_type: formData.get('pet_type') as string,
    };

    try {
      const response = await fetch('https://functions.poehali.dev/9e6ec67d-1a42-4bd1-886c-c31b7c7ee10a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setRating(0);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={onClose}>
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative animate-slide-up" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Icon name="X" size={24} />
        </button>

        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2 text-primary">Оставить отзыв</h2>
          <p className="text-muted-foreground">Ваш отзыв будет опубликован после модерации</p>
        </div>

        {submitStatus === 'success' ? (
          <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl flex items-center gap-3">
            <Icon name="CheckCircle" size={24} className="text-green-600" />
            <div>
              <p className="font-semibold">Спасибо за отзыв!</p>
              <p className="text-sm">Ваш отзыв отправлен на модерацию</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Ваше имя *</label>
              <input
                type="text"
                name="author_name"
                required
                className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Иван Петров"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Вид животного</label>
              <input
                type="text"
                name="pet_type"
                className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Собака, Кошка, и т.д."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Оценка *</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Icon
                      name="Star"
                      size={32}
                      className={`${
                        star <= (hoveredRating || rating)
                          ? 'text-orange-500 fill-orange-500'
                          : 'text-gray-300'
                      } transition-colors`}
                    />
                  </button>
                ))}
              </div>
              {rating === 0 && (
                <p className="text-sm text-muted-foreground mt-2">Пожалуйста, выберите оценку</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Ваш отзыв *</label>
              <textarea
                name="review_text"
                required
                rows={5}
                className="w-full px-4 py-3 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder="Расскажите о вашем опыте..."
              ></textarea>
            </div>

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-xl flex items-center gap-3">
                <Icon name="AlertCircle" size={24} className="text-red-600" />
                <div>
                  <p className="font-semibold">Ошибка отправки</p>
                  <p className="text-sm">Попробуйте еще раз</p>
                </div>
              </div>
            )}

            <div className="flex gap-4">
              <Button
                type="submit"
                disabled={isSubmitting || rating === 0}
                className="flex-1 bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-xl transition-all"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить отзыв'}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="px-8"
              >
                Отмена
              </Button>
            </div>
          </form>
        )}
      </Card>
    </div>
  );
};

export default ReviewModal;
