import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FeaturedTools = () => {
  const tools = [
    {
      name: "ChatGPT Plus",
      category: "Trợ lý AI",
      description: "Công cụ AI đàm thoại mạnh mẽ nhất hiện tại, hỗ trợ viết lách, phân tích và giải quyết vấn đề.",
      benefits: ["Tăng tốc độ viết nội dung 10x", "Hỗ trợ 24/7", "Không giới hạn sử dụng"],
      price: "$20/tháng",
      rating: "⭐⭐⭐⭐⭐",
      affiliateNote: "[Thêm link affiliate vào đây]",
      popular: true
    },
    {
      name: "Midjourney",
      category: "Tạo hình ảnh",
      description: "Công cụ tạo hình ảnh AI chuyên nghiệp, tạo ra các tác phẩm nghệ thuật tuyệt đẹp từ văn bản.",
      benefits: ["Chất lượng hình ảnh cao", "Đa dạng phong cách", "Dễ sử dụng"],
      price: "$10/tháng",
      rating: "⭐⭐⭐⭐⭐",
      affiliateNote: "[Thêm link affiliate vào đây]",
      popular: false
    },
    {
      name: "Notion AI",
      category: "Quản lý công việc",
      description: "Tích hợp AI vào workspace, giúp tổ chức công việc, viết nội dung và phân tích dữ liệu.",
      benefits: ["Quản lý dự án hiệu quả", "Tự động hóa workflow", "Tích hợp nhiều công cụ"],
      price: "$10/tháng",
      rating: "⭐⭐⭐⭐",
      affiliateNote: "[Thêm link affiliate vào đây]",
      popular: false
    },
    {
      name: "Jasper AI",
      category: "Content Marketing",
      description: "Chuyên tạo nội dung marketing, blog post, email và social media với AI.",
      benefits: ["Template đa dạng", "SEO tối ưu", "Nhiều ngôn ngữ"],
      price: "$49/tháng",
      rating: "⭐⭐⭐⭐",
      affiliateNote: "[Thêm link affiliate vào đây]",
      popular: false
    },
    {
      name: "Canva AI",
      category: "Thiết kế",
      description: "Thiết kế đồ họa chuyên nghiệp với sự hỗ trợ của AI, không cần kỹ năng design.",
      benefits: ["Template có sẵn", "Thiết kế tự động", "Export đa định dạng"],
      price: "$15/tháng",
      rating: "⭐⭐⭐⭐⭐",
      affiliateNote: "[Thêm link affiliate vào đây]",
      popular: true
    },
    {
      name: "Copy.ai",
      category: "Copywriting",
      description: "Tạo copy bán hàng, quảng cáo và nội dung marketing hiệu quả với AI.",
      benefits: ["Tăng conversion rate", "Tiết kiệm thời gian", "A/B test tự động"],
      price: "$36/tháng",
      rating: "⭐⭐⭐⭐",
      affiliateNote: "[Thêm link affiliate vào đây]",
      popular: false
    }
  ];

  return (
    <section id="featured-tools" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Công Cụ AI Được Đề Xuất
          </h2>
          <div className="w-24 h-1 bg-ai-gradient mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Những công cụ AI tốt nhất đã được kiểm chứng, giúp bạn tăng năng suất và thu nhập
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card 
              key={index} 
              className={`relative h-full transition-all duration-300 hover:shadow-ai-shadow hover:-translate-y-2 border-border/50 ${
                tool.popular ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              {tool.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-ai-gradient text-white px-4 py-1 text-sm font-medium">
                    Phổ Biến
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {tool.category}
                  </Badge>
                  <span className="text-sm">{tool.rating}</span>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {tool.name}
                </CardTitle>
                <p className="text-lg font-semibold text-primary">{tool.price}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Lợi ích chính:</h4>
                  <ul className="space-y-1">
                    {tool.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 space-y-3">
                  <Button 
                    className="w-full bg-ai-gradient hover:shadow-ai-glow transition-all duration-300"
                    size="lg"
                  >
                    Dùng Thử Ngay 🚀
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center italic">
                    {tool.affiliateNote}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 hover:border-primary/40 hover:bg-primary/5"
          >
            Xem Tất Cả Công Cụ (+50 công cụ)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;