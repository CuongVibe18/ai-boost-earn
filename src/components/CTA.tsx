import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log("Newsletter subscription:", email);
    setEmail("");
    // Show success message or redirect
  };

  return (
    <section className="py-20 bg-ai-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Đừng Bỏ Lỡ Cơ Hội Vàng
            </h2>
            <div className="w-24 h-1 bg-ai-gradient mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Nhận bản tin AI hàng tuần với những công cụ mới nhất, tips & tricks, 
              và cơ hội kiếm tiền online từ chuyên gia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6 text-left animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground">
                Nhận Ngay Bản Tin AI Weekly
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-ai-gradient rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span className="text-muted-foreground">5+ công cụ AI mới mỗi tuần</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-ai-gradient rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span className="text-muted-foreground">Hướng dẫn sử dụng chi tiết</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-ai-gradient rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span className="text-muted-foreground">Case study kiếm tiền thực tế</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-ai-gradient rounded-full flex items-center justify-center text-white text-sm">✓</div>
                  <span className="text-muted-foreground">Ưu đãi độc quyền từ các tool</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Nhập email của bạn..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 text-base"
                  />
                  <Button 
                    type="submit"
                    className="bg-ai-gradient hover:shadow-ai-glow transition-all duration-300 h-12 px-8"
                  >
                    Đăng Ký Ngay 🚀
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  * Miễn phí 100%. Có thể hủy bất cứ lúc nào. Chúng tôi tôn trọng privacy của bạn.
                </p>
              </form>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-ai-shadow border border-border/50 animate-slide-up">
              <h4 className="text-xl font-bold mb-4 text-foreground">Bonus Đặc Biệt 🎁</h4>
              <div className="space-y-4 text-left">
                <div className="bg-ai-gradient-soft p-4 rounded-lg border border-primary/20">
                  <h5 className="font-semibold text-primary mb-2">FREE E-book</h5>
                  <p className="text-sm text-muted-foreground">
                    "50 Cách Kiếm Tiền Online Với AI" - Trị giá 299K
                  </p>
                </div>
                <div className="bg-ai-gradient-soft p-4 rounded-lg border border-primary/20">
                  <h5 className="font-semibold text-primary mb-2">Checklist Premium</h5>
                  <p className="text-sm text-muted-foreground">
                    Danh sách 100+ công cụ AI đã được kiểm chứng
                  </p>
                </div>
                <div className="bg-ai-gradient-soft p-4 rounded-lg border border-primary/20">
                  <h5 className="font-semibold text-primary mb-2">Community Access</h5>
                  <p className="text-sm text-muted-foreground">
                    Tham gia group Discord/Telegram riêng biệt
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Button 
              variant="outline" 
              size="lg"
              className="h-auto p-6 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">📚</div>
                <div className="font-semibold">Xem Toàn Bộ</div>
                <div className="text-sm text-muted-foreground">100+ Công cụ AI</div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="h-auto p-6 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-semibold">Case Studies</div>
                <div className="text-sm text-muted-foreground">Câu chuyện thành công</div>
              </div>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="h-auto p-6 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
            >
              <div className="text-center">
                <div className="text-2xl mb-2">💬</div>
                <div className="font-semibold">Cộng Đồng</div>
                <div className="text-sm text-muted-foreground">Kết nối & học hỏi</div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;