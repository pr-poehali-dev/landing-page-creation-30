import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface SuccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SuccessModal = ({ open, onOpenChange }: SuccessModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <div className="text-center py-8">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center animate-bounce">
              <Icon name="Check" size={48} className="text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Спасибо за обращение!
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6">
            Мы получили вашу заявку и обязательно свяжемся с вами в течение часа.
          </p>
          
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-purple-800">
              <Icon name="Phone" size={16} className="inline mr-2" />
              Ожидайте звонка от нашего администратора
            </p>
          </div>
          
          <button
            onClick={() => onOpenChange(false)}
            className="w-full bg-gradient-to-r from-primary to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all"
          >
            Закрыть
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
