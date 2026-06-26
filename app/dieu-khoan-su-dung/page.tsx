export const metadata = {
  title: 'Điều khoản Sử dụng - PlantCare Hub',
  description: 'Điều khoản sử dụng của PlantCare Hub.',
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-[#f8fbf7]">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 md:px-10 lg:px-14 xl:px-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
              ĐIỀU KHOẢN SỬ DỤNG (PlantCare Hub)
            </h1>
            <p className="text-sm text-muted-foreground">Cập nhật lần cuối: 21/06/2026</p>
          </div>

          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
            <section className="space-y-4">
              <p>
                Điều khoản này quy định việc bạn sử dụng ứng dụng PlantCare Hub (“Dịch vụ”). Bằng việc truy cập hoặc sử dụng Dịch vụ, bạn đồng ý với toàn bộ nội dung dưới đây. Nếu không đồng ý, vui lòng không tiếp tục sử dụng ứng dụng.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">1. Phạm vi dịch vụ</h2>
              <p>
                PlantCare Hub cung cấp công cụ hỗ trợ chăm sóc cây trồng, bao gồm: chẩn đoán bệnh cây bằng AI, lịch chăm sóc tự động, nhật ký phát triển (Personal Mode), và quản lý vườn theo lô/khu vực/vật tư (Garden Mode).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">2. Tài khoản người dùng</h2>
              <p>Khi tạo tài khoản, bạn cam kết:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Cung cấp thông tin chính xác, đầy đủ khi đăng ký.</li>
                <li>Tự bảo mật thông tin đăng nhập của mình; thông báo cho chúng tôi ngay nếu phát hiện tài khoản bị truy cập trái phép.</li>
                <li>Không sử dụng tên tài khoản vi phạm quyền của người khác hoặc mang nội dung phản cảm.</li>
                <li>Không dùng công cụ tự động (bot, crawler...) để truy cập hoặc khai thác dữ liệu từ Dịch vụ.</li>
              </ul>
              <p>Vi phạm các điều trên có thể dẫn đến việc tài khoản bị tạm khóa hoặc xóa.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">3. Nội dung do người dùng tạo (ảnh, dữ liệu cây)</h2>
              <p>Khi bạn tải ảnh cây hoặc nhập thông tin vào ứng dụng, bạn xác nhận:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Bạn sở hữu hoặc có quyền sử dụng nội dung đó.</li>
                <li>Nội dung không vi phạm quyền của bên thứ ba (bản quyền, quyền riêng tư...).</li>
                <li>Bạn cấp cho chúng tôi quyền sử dụng nội dung đó chỉ trong phạm vi vận hành Dịch vụ, ví dụ: hiển thị lại ảnh cho bạn, dùng để cải thiện mô hình AI. Chúng tôi không công khai chia sẻ ảnh của bạn cho người dùng khác hoặc bên thứ ba ngoài mục đích này.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">4. Giới hạn trách nhiệm đối với kết quả chẩn đoán AI</h2>
              <p>
                Kết quả chẩn đoán bệnh cây từ tính năng AI chỉ mang tính tham khảo, dựa trên phân tích hình ảnh và dữ liệu có sẵn, không thay thế hoàn toàn ý kiến của chuyên gia nông nghiệp hoặc bác sĩ cây trồng. Chúng tôi không đảm bảo độ chính xác tuyệt đối của kết quả chẩn đoán và không chịu trách nhiệm cho thiệt hại phát sinh như cây chết, hư hại do người dùng áp dụng theo gợi ý của ứng dụng trong trường hợp chẩn đoán chưa chính xác.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">5. Gói dịch vụ trả phí (nếu áp dụng)</h2>
              <p>
                Nếu ứng dụng cấp gói trả phí, các điều kiện cụ thể về giá, chu kỳ thanh toán, gia hạn và hủy gói sẽ được hiển thị rõ tại thời điểm bạn đăng ký trong ứng dụng hoặc trên Google Play. Việc thanh toán nếu có được xử lý qua hệ thống của Google Play; chúng tôi không trực tiếp lưu trữ thông tin thẻ/tài khoản thanh toán của bạn.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">6. Liên kết tới bên thứ ba</h2>
              <p>
                Dịch vụ có thể chứa liên kết tới các trang web hoặc dịch vụ của bên thứ ba mà chúng tôi không kiểm soát. Chúng tôi không chịu trách nhiệm về nội dung, chính sách bảo mật, hoặc thiệt hại phát sinh từ việc bạn sử dụng các trang/dịch vụ đó.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">7. Chấm dứt sử dụng</h2>
              <p>
                Chúng tôi có quyền tạm khóa hoặc chấm dứt tài khoản của bạn nếu phát hiện vi phạm điều khoản này, mà không cần thông báo trước trong trường hợp cần thiết để bảo vệ an toàn của Dịch vụ. Bạn có thể ngừng sử dụng và yêu cầu xóa tài khoản bất kỳ lúc nào.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">8. Giới hạn trách nhiệm chung</h2>
              <p>
                Dịch vụ được cung cấp trên cơ sở &quot;hiện trạng&quot; (&quot;as is&quot;), không đảm bảo hoạt động liên tục, không lỗi, hoặc đáp ứng mọi nhu cầu cụ thể của bạn. Trong phạm vi pháp luật cho phép, chúng tôi không chịu trách nhiệm cho các thiệt hại gián tiếp, ngẫu nhiên hoặc hệ quả phát sinh từ việc sử dụng hoặc không thể sử dụng Dịch vụ.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">9. Luật áp dụng</h2>
              <p>
                Điều khoản này được điều chỉnh theo pháp luật Việt Nam. Nếu một điều khoản bất kỳ bị coi là không có hiệu lực, các điều khoản còn lại vẫn được áp dụng bình thường.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">10. Thay đổi điều khoản</h2>
              <p>
                Chúng tôi có thể cập nhật điều khoản này theo thời gian. Việc bạn tiếp tục sử dụng Dịch vụ sau khi điều khoản được cập nhật đồng nghĩa với việc bạn đồng ý với phiên bản mới nhất.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">11. Liên hệ</h2>
              <p>
                Mọi câu hỏi liên quan đến điều khoản này, vui lòng liên hệ:{' '}
                <a href="mailto:plantcarehub@gmail.com" className="font-semibold text-foreground underline underline-offset-4">
                  plantcarehub@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
