import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Minh Hoàng",
      role: "Freelancer Content Writer",
      avatar: "👨‍💻",
      content: "Nhờ sử dụng ChatGPT và Jasper AI, tôi đã tăng thu nhập từ 15 triệu lên 45 triệu/tháng trong vòng 6 tháng. Hiệu quả viết content tăng gấp 5 lần!",
      income: "+200% thu nhập",
      timeFrame: "6 tháng"
    },
    {
      name: "Thu Hà",
      role: "Chủ shop online",
      avatar: "👩‍💼",
      content: "Canva AI giúp tôi tạo ra hàng trăm design cho sản phẩm mà không cần thuê designer. Tiết kiệm được 20 triệu/tháng chi phí thiết kế.",
      income: "Tiết kiệm 20tr/tháng",
      timeFrame: "3 tháng"
    },
    {
      name: "Đức Anh",
      role: "Marketing Agency Owner",
      avatar: "👨‍🚀",
      content: "Copy.ai và Notion AI đã revolutionary hóa agency của tôi. Có thể phục vụ gấp 3 lần số lượng khách hàng với cùng team size.",
      income: "+300% doanh thu",
      timeFrame: "1 năm"
    },
    {
      name: "Lan Phương",
      role: "YouTuber & Influencer",
      avatar: "👩‍🎨",
      content: "Midjourney giúp tôi tạo thumbnail và visual content cực kỳ ấn tượng. Channel YouTube tăng từ 10K lên 500K subscribers nhờ content chất lượng cao.",
      income: "+5000% subscribers",
      timeFrame: "8 tháng"
    },
    {
      name: "Quang Minh",
      role: "Digital Marketer",
      avatar: "👨‍💼",
      content: "Automation với AI tools giúp tôi quản lý 20+ campaign cùng lúc. ROI tăng từ 150% lên 400% nhờ tối ưu hóa real-time.",
      income: "+167% ROI",
      timeFrame: "4 tháng"
    },
    {
      name: "Hương Giang",
      role: "E-commerce Entrepreneur",
      avatar: "👩‍💻",
      content: "Sử dụng AI để phân tích data và optimize product listing trên marketplace. Doanh số tăng 250% trong quý đầu tiên.",
      income: "+250% doanh số",
      timeFrame: "3 tháng"
    }
  ];

  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Câu Chuyện Thành Công
          </h2>
          <div className="w-24 h-1 bg-ai-gradient mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Những câu chuyện thật từ những người đã thay đổi cuộc sống nhờ AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="h-full bg-card border border-border/50 hover:shadow-ai-shadow transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    <div className="bg-ai-gradient-soft px-3 py-1 rounded-full border border-primary/20">
                      <span className="text-xs font-medium text-primary">
                        {testimonial.income}
                      </span>
                    </div>
                    <div className="bg-secondary/50 px-3 py-1 rounded-full">
                      <span className="text-xs text-secondary-foreground">
                        {testimonial.timeFrame}
                      </span>
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="mt-4 flex justify-center">
                  <div className="flex text-yellow-400">
                    {"⭐".repeat(5)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card p-8 rounded-xl shadow-ai-shadow border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Câu Chuyện Của Bạn Sẽ Là Gì?
            </h3>
            <p className="text-muted-foreground mb-6">
              Hàng nghìn người đã thay đổi cuộc sống nhờ AI. Bạn cũng có thể là một trong số họ.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">87%</div>
                <div className="text-sm text-muted-foreground">Tăng thu nhập sau 3 tháng</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">92%</div>
                <div className="text-sm text-muted-foreground">Tiết kiệm thời gian đáng kể</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Sẽ recommend cho bạn bè</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;