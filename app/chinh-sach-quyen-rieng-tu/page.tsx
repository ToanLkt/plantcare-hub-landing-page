export const metadata = {
  title: 'Chính sách Quyền riêng tư - PlantCare Hub',
  description: 'Chính sách quyền riêng tư của PlantCare Hub.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f8fbf7]">
      <div className="mx-auto max-w-screen-2xl px-6 py-16 md:px-10 lg:px-14 xl:px-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
              Chính sách Quyền riêng tư
            </h1>
            <p className="text-sm text-muted-foreground">Cập nhật lần cuối: 21/06/2026</p>
          </div>

          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground">
            <section className="space-y-4">
              <p>
                PlantCare Hub (&quot;chúng tôi&quot;, &quot;ứng dụng&quot;) tôn trọng quyền riêng tư của người dùng. Chính sách này mô tả cách chúng tôi thu thập, sử dụng, chia sẻ và bảo vệ thông tin của bạn khi sử dụng ứng dụng. Nếu bạn không đồng ý với nội dung dưới đây, vui lòng không sử dụng ứng dụng. Mọi thắc mắc xin liên hệ:{' '}
                <a href="mailto:plancarehub@gmail.com
" className="font-semibold text-foreground underline underline-offset-4">
                  plancarehub@gmail.com
                </a>
                .
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">Tóm tắt nhanh</h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Chúng tôi thu thập ảnh cây, vị trí (nếu được cấp quyền), và thông tin tài khoản cơ bản.</li>
                <li>Chúng tôi không thu thập thông tin nhạy cảm (sức khỏe, tôn giáo, chính trị...).</li>
                <li>Chúng tôi không bán dữ liệu của bạn cho bên thứ ba.</li>
                <li>Bạn có thể yêu cầu xem, sửa, hoặc xóa dữ liệu của mình bất kỳ lúc nào.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">1. Thông tin chúng tôi thu thập</h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground">Thông tin bạn cung cấp trực tiếp:</p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Email và tên hiển thị khi đăng ký tài khoản.</li>
                    <li>Hình ảnh cây trồng do bạn chụp hoặc tải lên để sử dụng tính năng chẩn đoán bệnh bằng AI và nhật ký phát triển.</li>
                    <li>Thông tin bạn nhập khi quản lý vườn ở Garden Mode (tên lô, số lượng cây, loại vật tư...).</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Thông tin thu thập khi bạn cấp quyền:</p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Vị trí (rental): dùng để gợi ý lịch chăm sóc phù hợp với khí hậu khu vực. Bạn có thể tắt quyền này trong cài đặt thiết bị bất kỳ lúc nào; một số gợi ý theo khí hậu sẽ không khả dụng nếu tắt.</li>
                    <li>Camera/thư viện ảnh: chỉ truy cập khi bạn chủ động chụp hoặc chọn ảnh để sử dụng tính năng AI.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Thông tin thu thập tự động:</p>
                  <p>
                    Một số dữ liệu kỹ thuật cơ bản (loại thiết bị, hệ điều hành) nhằm phục vụ việc khắc phục lỗi và cải thiện ứng dụng.
                  </p>
                  <p>
                    Chúng tôi không thu thập thông tin nhạy cảm như tình trạng sức khỏe, tôn giáo, quan điểm chính trị, hoặc dữ liệu sinh trắc học.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">2. Mục đích sử dụng thông tin</h2>
              <p>Chúng tôi sử dụng thông tin đã thu thập để:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Cung cấp các tính năng cốt lõi: chẩn đoán AI, nhắc lịch chăm sóc, quản lý vườn.</li>
                <li>Cải thiện độ chính xác của mô hình AI theo thời gian.</li>
                <li>Hỗ trợ và phản hồi khi bạn liên hệ với chúng tôi.</li>
                <li>Duy trì an toàn và hoạt động ổn định của ứng dụng.</li>
              </ul>
              <p>Chúng tôi không sử dụng thông tin của bạn cho mục đích quảng cáo nhắm đối tượng (targeted advertising) hoặc bán cho bên thứ ba.</p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">3. Chia sẻ thông tin với bên thứ ba</h2>
              <p>
                Để vận hành ứng dụng, chúng tôi có thể chia sẻ dữ liệu với một số nhà cung cấp dịch vụ kỹ thuật, chỉ trong phạm vi cần thiết để cung cấp tính năng, ví dụ:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Dịch vụ lưu trữ và xác thực tài khoản: Firebase</li>
                <li>Dịch vụ lưu trữ dữ liệu/hình ảnh trên máy chủ đám mây: Firebase</li>
              </ul>
              <p>
                Các bên này chỉ xử lý dữ liệu theo hướng dẫn của chúng tôi và không được sử dụng cho mục đích riêng của họ. Chúng tôi không bán hoặc cho thuê dữ liệu cá nhân của bạn. Trong trường hợp pháp luật yêu cầu, chúng tôi có thể buộc phải tiết lộ thông tin cho cơ quan có thẩm quyền.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">4. Lưu trữ và bảo mật thông tin</h2>
              <p>
                Dữ liệu được lưu trữ trên hệ thống máy chủ/đám mây mà ứng dụng sử dụng, áp dụng các biện pháp bảo mật tiêu chuẩn (mã hóa khi truyền dữ liệu, kiểm soát truy cập). Tuy nhiên, không có hệ thống lưu trữ điện tử nào có thể đảm bảo an toàn tuyệt đối 100% — chúng tôi không thể cam kết loại trừ hoàn toàn rủi ro bị truy cập trái phép.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">5. Thời gian lưu trữ</h2>
              <p>
                Chúng tôi lưu giữ thông tin của bạn trong suốt thời gian bạn còn sử dụng tài khoản. Khi bạn yêu cầu xóa tài khoản, dữ liệu cá nhân sẽ được xóa hoặc ẩn danh hóa, trừ trường hợp cần lưu giữ thêm để tuân thủ nghĩa vụ pháp lý.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">6. Quyền của người dùng</h2>
              <p>Bạn có quyền:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Yêu cầu xem lại thông tin cá nhân chúng tôi đang lưu giữ về bạn.</li>
                <li>Yêu cầu chỉnh sửa thông tin không chính xác.</li>
                <li>Yêu cầu xóa tài khoản và dữ liệu liên quan.</li>
                <li>Rút lại quyền truy cập vị trí hoặc camera bất kỳ lúc nào qua cài đặt thiết bị.</li>
              </ul>
              <p>
                Để thực hiện các quyền trên, vui lòng liên hệ:{' '}
                <a href="mailto:plancarehub@gmail.com" className="font-semibold text-foreground underline underline-offset-4">
                  plancarehub@gmail.com
                </a>
                . Chúng tôi sẽ phản hồi trong thời gian hợp lý.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">7. Quyền riêng tư của trẻ em</h2>
              <p>
                Ứng dụng không hướng đến đối tượng người dùng dưới 13 tuổi. Nếu phát hiện có tài khoản của trẻ em dưới độ tuổi này, chúng tôi sẽ tiến hành xóa thông tin liên quan.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">8. Thay đổi chính sách</h2>
              <p>
                Chính sách này có thể được cập nhật theo thời gian để phản ánh đúng cách ứng dụng hoạt động. Phiên bản mới nhất luôn được đăng tại đường dẫn này, kèm ngày cập nhật ở đầu trang.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-heading text-lg font-semibold text-foreground">9. Liên hệ</h2>
              <p>
                Mọi câu hỏi, góp ý hoặc yêu cầu liên quan đến chính sách này, vui lòng liên hệ:{' '}
                <a href="mailto:plancarehub@gmail.com" className="font-semibold text-foreground underline underline-offset-4">
                  plancarehub@gmail.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
