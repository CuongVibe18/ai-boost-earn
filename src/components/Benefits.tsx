const Benefits = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Tăng Năng Suất 10x",
      description: "Tự động hóa các tác vụ lặp đi lặp lại, tiết kiệm hàng giờ mỗi ngày để tập trung vào công việc quan trọng.",
      stats: "Tiết kiệm 4-6 giờ/ngày"
    },
    {
      icon: "💰",
      title: "Tăng Thu Nhập",
      description: "Sử dụng AI để tạo ra nhiều nguồn thu nhập thụ động từ content, design, trading và các dịch vụ online.",
      stats: "Tăng 30-200% thu nhập"
    },
    {
      icon: "🤖",
      title: "Tự Động Hóa Quy Trình",
      description: "Thiết lập hệ thống tự động cho marketing, customer service, data analysis và quản lý dự án.",
      stats: "Giảm 70% thời gian thủ công"
    },
    {
      icon: "🎯",
      title: "Quyết Định Thông Minh",
      description: "Phân tích dữ liệu và đưa ra quyết định kinh doanh chính xác với sự hỗ trợ của AI và machine learning.",
      stats: "Tăng 85% độ chính xác"
    },
    {
      icon: "🚀",
      title: "Đi Trước Đối Thủ",
      description: "Sử dụng công nghệ mới nhất để cạnh tranh và dẫn đầu trong lĩnh vực của bạn.",
      stats: "Nhanh hơn 50% so với đối thủ"
    },
    {
      icon: "📈",
      title: "Scale Doanh Nghiệp",
      description: "Mở rộng quy mô kinh doanh mà không tăng chi phí nhân sự hay hạ tầng tương ứng.",
      stats: "Scale up 300% hiệu quả"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Tại Sao Nên Sử Dụng AI?
          </h2>
          <div className="w-24 h-1 bg-ai-gradient mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Những lợi ích thực tế mà AI mang lại cho công việc và cuộc sống của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-card p-8 rounded-xl shadow-ai-shadow border border-border/50 hover:shadow-ai-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <div className="inline-block bg-ai-gradient-soft px-3 py-1 rounded-full border border-primary/20">
                  <span className="text-sm font-medium text-primary">
                    {benefit.stats}
                  </span>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-ai-gradient-soft p-8 md:p-12 rounded-2xl border border-primary/10">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Bạn Đã Sẵn Sàng Thay Đổi?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Hàng nghìn người đã sử dụng AI để transforming cuộc sống và sự nghiệp của họ. 
              Đến lượt bạn tham gia cuộc cách mạng này.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5000+</div>
                <div className="text-muted-foreground">Người dùng hàng ngày</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Công cụ AI được review</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Độ hài lòng khách hàng</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;