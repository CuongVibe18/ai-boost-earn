import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ContactModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="lg"
          className="text-lg px-8 py-6 h-auto border-primary/20 hover:border-primary/40 hover:bg-primary/5"
        >
          📞 Liên Hệ
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Liên Hệ Với Tôi
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-ai-gradient rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
              👨‍💻
            </div>
            <h3 className="text-xl font-semibold text-foreground">AI Tools Expert</h3>
            <p className="text-muted-foreground">Chuyên gia tư vấn công cụ AI</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                📧
              </div>
              <div>
                <div className="font-medium text-foreground">Email</div>
                <div className="text-muted-foreground">contact@aitoolshub.vn</div>
                <div className="text-sm text-muted-foreground">[Thay bằng email thật của bạn]</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                💬
              </div>
              <div>
                <div className="font-medium text-foreground">Telegram</div>
                <div className="text-muted-foreground">@aitoolsvn</div>
                <div className="text-sm text-muted-foreground">[Thay bằng username Telegram]</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                📘
              </div>
              <div>
                <div className="font-medium text-foreground">Facebook</div>
                <div className="text-muted-foreground">AI Tools Hub Vietnam</div>
                <div className="text-sm text-muted-foreground">[Thay bằng link Facebook]</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                📱
              </div>
              <div>
                <div className="font-medium text-foreground">Zalo</div>
                <div className="text-muted-foreground">0123 456 789</div>
                <div className="text-sm text-muted-foreground">[Thay bằng số Zalo thật]</div>
              </div>
            </div>
          </div>
          
          <div className="bg-ai-gradient-soft p-4 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-primary mb-2">💡 Tư Vấn Miễn Phí</h4>
            <p className="text-sm text-muted-foreground">
              Liên hệ để được tư vấn miễn phí về việc lựa chọn và sử dụng công cụ AI 
              phù hợp với nhu cầu và ngân sách của bạn.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Thời gian phản hồi: 24-48 giờ | Tư vấn hoàn toàn miễn phí
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;