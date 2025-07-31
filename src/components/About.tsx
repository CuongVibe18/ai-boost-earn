const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Tại Sao Tôi Chia Sẻ Những Công Cụ Này?
            </h2>
            <div className="w-24 h-1 bg-ai-gradient mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Từ Người Trong Cuộc
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Với hơn 5 năm kinh nghiệm trong lĩnh vực công nghệ và marketing online, 
                tôi đã trải nghiệm và thử nghiệm hàng trăm công cụ AI khác nhau.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mục tiêu của tôi là giúp bạn tiết kiệm thời gian tìm kiếm và lựa chọn 
                những công cụ thực sự hiệu quả, đã được kiểm chứng qua thực tế.
              </p>
              <div className="bg-ai-gradient-soft p-6 rounded-xl border border-primary/10">
                <p className="text-primary font-medium">
                  "Mỗi công cụ được giới thiệu đều đã giúp tôi hoặc khách hàng của tôi 
                  tăng thu nhập hoặc cải thiện đáng kể hiệu quả công việc."
                </p>
              </div>
            </div>
            
            <div className="space-y-8 animate-slide-up">
              <div className="bg-card p-6 rounded-xl shadow-ai-shadow border border-border/50">
                <div className="text-3xl mb-4">🎯</div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">Được Tuyển Chọn Kỹ</h4>
                <p className="text-muted-foreground">
                  Chỉ những công cụ thực sự chất lượng, có giá trị mới được giới thiệu
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-ai-shadow border border-border/50">
                <div className="text-3xl mb-4">✅</div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">Đã Kiểm Chứng</h4>
                <p className="text-muted-foreground">
                  Tất cả đều được test thực tế trong các dự án và công việc cụ thể
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-ai-shadow border border-border/50">
                <div className="text-3xl mb-4">🔄</div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">Cập Nhật Liên Tục</h4>
                <p className="text-muted-foreground">
                  Danh sách được cập nhật thường xuyên với những công cụ mới nhất
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;