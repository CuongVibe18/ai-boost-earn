import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-ai-gradient bg-clip-text text-transparent">
              AI Tools Hub Vietnam
            </h3>
            <p className="text-secondary-foreground/80 mb-6 max-w-md leading-relaxed">
              Nền tảng chia sẻ và review các công cụ AI hàng đầu, giúp người Việt 
              ứng dụng công nghệ AI để tăng năng suất và thu nhập.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/40">
                📧 Email
              </Button>
              <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/40">
                💬 Telegram
              </Button>
              <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/40">
                📘 Facebook
              </Button>
              <Button variant="outline" size="sm" className="border-primary/20 hover:border-primary/40">
                📺 YouTube
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary-foreground">Danh Mục</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Tất cả công cụ AI</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">AI Content Writing</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">AI Design & Image</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">AI Marketing</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">AI Productivity</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">AI Business</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary-foreground">Tài Nguyên</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Hướng dẫn sử dụng</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Blog & Case Studies</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">AI News</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">Cộng đồng</a></li>
              <li><a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="border-t border-secondary-foreground/20 pt-8 mb-8">
          <div className="bg-secondary-foreground/5 p-6 rounded-lg border border-secondary-foreground/10">
            <h4 className="font-semibold mb-3 text-secondary-foreground">
              📋 Chính Sách Liên Kết (Affiliate Disclosure)
            </h4>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed mb-4">
              Website này tham gia các chương trình tiếp thị liên kết (affiliate marketing). 
              Khi bạn mua sản phẩm/dịch vụ thông qua các link trên website, chúng tôi có thể 
              nhận được commission từ nhà cung cấp mà không ảnh hưởng đến giá bạn phải trả.
            </p>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Chúng tôi cam kết chỉ giới thiệu những công cụ đã được test thực tế và thực sự 
              mang lại giá trị. Mọi review và đánh giá đều dựa trên kinh nghiệm sử dụng thật.
            </p>
          </div>
        </div>

        {/* Newsletter & Stats */}
        <div className="border-t border-secondary-foreground/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-secondary-foreground/80">Công cụ AI được review</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-secondary-foreground/80">Người dùng hàng tháng</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-secondary-foreground/80">Độ hài lòng khách hàng</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-secondary-foreground/60 mb-4 md:mb-0">
            © 2024 AI Tools Hub Vietnam. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
              Điều khoản sử dụng
            </a>
            <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors">
              Liên hệ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;