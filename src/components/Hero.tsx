import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ai-hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-ai-gradient-soft overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-ai-gradient bg-clip-text text-transparent leading-tight">
            Khám Phá Sức Mạnh AI
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">Thay Đổi Cuộc Sống</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Tìm hiểu các công cụ AI hàng đầu giúp bạn tăng năng suất, tối ưu hóa công việc 
            và mở ra cơ hội kiếm tiền online. Được tuyển chọn và đánh giá bởi chuyên gia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-ai-gradient hover:shadow-ai-glow transition-all duration-300 text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById('featured-tools')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Khám Phá Ngay 🚀
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 h-auto border-primary/20 hover:border-primary/40 hover:bg-primary/5"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Tìm Hiểu Thêm
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;