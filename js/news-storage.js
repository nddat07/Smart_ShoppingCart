const NEWS_KEY = "smart_cart_news";

const DEFAULT_NEWS = [
{
    id: 1,
    title: "SMART SHOPPING CART CHÍNH THỨC RA MẮT: MUA SẮM ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN",
    image: "../assets/images/Smart_Shopping_Cart.png",
    description: "Nền tảng thương mại điện tử thế hệ mới giúp bạn mua sắm mọi lúc mọi nơi, thanh toán an toàn và giao hàng tận nơi chỉ trong vài cú click.",
    date: "02/10/2026",
    category: "thongtin",

    content: `
        <p>
            Sau nhiều tháng nghiên cứu và phát triển, <strong>Smart Shopping Cart</strong> chính thức được ra mắt — đánh dấu bước ngoặt trong lĩnh vực thương mại điện tử tại Việt Nam. Đây là nền tảng mua sắm trực tuyến được thiết kế dành riêng cho người dùng Việt, với mục tiêu mang lại trải nghiệm mua sắm đơn giản, nhanh chóng và an toàn tuyệt đối.
        </p>

        <h3>1. Mua sắm đơn giản — chỉ với vài cú click</h3>
        <p>
            Smart Shopping Cart được xây dựng với giao diện thân thiện, dễ sử dụng cho mọi lứa tuổi. Chỉ cần tìm kiếm sản phẩm, thêm vào giỏ hàng và tiến hành thanh toán — toàn bộ quá trình chỉ mất chưa đầy 2 phút. Hệ thống gợi ý thông minh sẽ giúp bạn tìm được sản phẩm phù hợp nhất dựa trên sở thích và lịch sử mua sắm.
        </p>

        <h3>2. Thanh toán an toàn — bảo mật tuyệt đối</h3>
        <p>
            Mọi giao dịch trên Smart Shopping Cart đều được mã hóa theo chuẩn <strong>SSL 256-bit</strong> — tiêu chuẩn bảo mật cao nhất hiện nay. Nền tảng hỗ trợ đa dạng phương thức thanh toán:
        </p>
        <ul>
            <li>Thanh toán khi nhận hàng (COD)</li>
            <li>Chuyển khoản ngân hàng</li>
            <li>Ví điện tử (Momo, ZaloPay, VNPay)</li>
            <li>Thẻ tín dụng / ghi nợ quốc tế</li>
        </ul>

        <h3>3. Giao hàng tận nơi — nhanh chóng và tiện lợi</h3>
        <p>
            Với hệ thống kho vận trải rộng khắp cả nước, Smart Shopping Cart cam kết giao hàng trong vòng <strong>24 giờ</strong> đối với khu vực nội thành và <strong>2-3 ngày</strong> đối với các tỉnh thành khác. Đặc biệt, đơn hàng từ 200.000đ sẽ được <strong>miễn phí vận chuyển toàn quốc</strong>.
        </p>

        <div class="video-wrap">
            <img src="../assets/images/Smart_Shopping_Cart.png"
                 alt="Video giới thiệu Smart Shopping Cart">
        </div>

        <p class="bai-viet-chu-thich">
            Video giới thiệu nền tảng Smart Shopping Cart — trải nghiệm mua sắm thế hệ mới.
        </p>

        <h3>4. Ưu đãi hấp dẫn cho người dùng đầu tiên</h3>
        <p>
            Nhân dịp ra mắt, Smart Shopping Cart dành tặng chương trình khuyến mãi đặc biệt: <strong>giảm ngay 50%</strong> (tối đa 200.000đ) cho đơn hàng đầu tiên từ 300.000đ khi nhập mã <strong>WELCOME50</strong>. Chương trình áp dụng đến hết ngày 31/10/2026.
        </p>

        <h3>5. Cam kết từ Smart Shopping Cart</h3>
        <p>
            Chúng tôi hiểu rằng niềm tin của khách hàng là tài sản quý giá nhất. Vì vậy, Smart Shopping Cart cam kết:
        </p>
        <ul>
            <li>100% sản phẩm chính hãng, có nguồn gốc xuất xứ rõ ràng</li>
            <li>Đổi trả miễn phí trong vòng 30 ngày nếu sản phẩm lỗi</li>
            <li>Hoàn tiền 100% nếu không hài lòng</li>
            <li>Hỗ trợ khách hàng 24/7 qua hotline và chat trực tuyến</li>
        </ul>

        <p>
            Hãy truy cập <strong>Smart Shopping Cart</strong> ngay hôm nay để trải nghiệm mua sắm trực tuyến thế hệ mới — nơi mọi giao dịch đều đơn giản, nhanh chóng và an toàn!
        </p>
    `
},

{
    id: 2,
    title: "KHUYẾN MÃI KHAI TRƯƠNG: GIẢM 50% CHO ĐƠN HÀNG ĐẦU TIÊN",
    image: "../assets/images/sale50.png",
    description: "Chào mừng bạn đến với Smart Shopping Cart! Nhập mã WELCOME50 để được giảm ngay 50% (tối đa 200.000đ) cho đơn hàng đầu tiên từ 300.000đ.",
    date: "01/10/2026",
    category: "khuyenmai",

    content: `
        <p>
            Nhân dịp chính thức ra mắt nền tảng thương mại điện tử thế hệ mới,
            <strong>Smart Shopping Cart</strong> dành tặng chương trình khuyến mãi
            đặc biệt dành cho tất cả khách hàng lần đầu trải nghiệm — giảm ngay
            <strong>50%</strong> cho đơn hàng đầu tiên.
        </p>

        <!-- HỘP MÃ GIẢM GIÁ -->
        <div class="ma-giam-gia">
            <div class="ma-giam-gia-label">Mã giảm giá của bạn</div>
            <div class="ma-giam-gia-code">WELCOME50</div>
            <div class="ma-giam-gia-mota">
                Giảm 50% — Tối đa 200.000đ cho đơn đầu tiên
            </div>
        </div>

        <h3>1. Thông tin chương trình</h3>
        <p>
            Đây là chương trình tri ân đặc biệt dành cho những khách hàng đầu tiên
            đồng hành cùng Smart Shopping Cart. Chương trình áp dụng cho
            <strong>mọi ngành hàng</strong> trên toàn quốc, không giới hạn số lượng
            sản phẩm trong giỏ hàng.
        </p>

        <table class="bang-dieu-kien">
            <tr>
                <th>Mã giảm giá</th>
                <td><strong>WELCOME50</strong></td>
            </tr>
            <tr>
                <th>Mức giảm</th>
                <td>50% giá trị đơn hàng</td>
            </tr>
            <tr>
                <th>Giảm tối đa</th>
                <td>200.000đ</td>
            </tr>
            <tr>
                <th>Đơn hàng tối thiểu</th>
                <td>300.000đ</td>
            </tr>
            <tr>
                <th>Đối tượng áp dụng</th>
                <td>Khách hàng mới, đơn hàng đầu tiên</td>
            </tr>
            <tr>
                <th>Thời gian áp dụng</th>
                <td>Từ 01/10/2026 đến hết 31/10/2026</td>
            </tr>
            <tr>
                <th>Số lần sử dụng</th>
                <td>1 lần / 1 tài khoản</td>
            </tr>
        </table>

        <h3>2. Cách sử dụng mã giảm giá</h3>
        <p>
            Để nhận ưu đãi, bạn chỉ cần thực hiện theo 4 bước đơn giản sau:
        </p>
        <ul>
            <li><strong>Bước 1:</strong> Truy cập Smart Shopping Cart và chọn sản phẩm yêu thích, thêm vào giỏ hàng.</li>
            <li><strong>Bước 2:</strong> Tiến hành thanh toán, đảm bảo tổng giá trị đơn hàng từ <strong>300.000đ</strong> trở lên.</li>
            <li><strong>Bước 3:</strong> Tại ô "Mã giảm giá", nhập chính xác mã <strong>WELCOME50</strong> và bấm "Áp dụng".</li>
            <li><strong>Bước 4:</strong> Hệ thống tự động trừ 50% (tối đa 200.000đ) vào đơn hàng của bạn. Hoàn tất thanh toán!</li>
        </ul>

        <h3>3. Ví dụ minh họa</h3>
        <p>
            Để bạn dễ hình dung mức tiết kiệm, hãy xem một vài ví dụ cụ thể:
        </p>
        <ul>
            <li>Đơn hàng <strong>300.000đ</strong> → Giảm 150.000đ → Chỉ còn <strong>150.000đ</strong></li>
            <li>Đơn hàng <strong>400.000đ</strong> → Giảm 200.000đ (đạt mức tối đa) → Chỉ còn <strong>200.000đ</strong></li>
            <li>Đơn hàng <strong>1.000.000đ</strong> → Giảm 200.000đ (vẫn ở mức tối đa) → Chỉ còn <strong>800.000đ</strong></li>
        </ul>

        <h3>4. Lưu ý quan trọng</h3>
        <p>
            Để đảm bảo quyền lợi của mình, bạn vui lòng lưu ý một số điều sau:
        </p>
        <ul>
            <li>Mã <strong>WELCOME50</strong> chỉ áp dụng cho <strong>đơn hàng đầu tiên</strong> của mỗi tài khoản.</li>
            <li>Không áp dụng đồng thời với các chương trình khuyến mãi khác.</li>
            <li>Không áp dụng cho các sản phẩm đã có giá khuyến mãi đặc biệt.</li>
            <li>Mỗi tài khoản chỉ được sử dụng mã <strong>01 lần duy nhất</strong>.</li>
            <li>Smart Shopping Cart có quyền từ chối các trường hợp gian lận hoặc lạm dụng mã giảm giá.</li>
        </ul>

        <h3>5. Cơ hội nhận thêm ưu đãi</h3>
        <p>
            Ngoài mã WELCOME50, khách hàng còn có cơ hội nhận thêm nhiều ưu đãi hấp dẫn khác:
        </p>
        <ul>
            <li><strong>Freeship toàn quốc</strong> cho đơn từ 200.000đ với mã <strong>SHIPFREE</strong>.</li>
            <li><strong>Săn mã giảm giá mỗi ngày</strong> lên đến 100.000đ khi theo dõi fanpage.</li>
            <li><strong>Flash sale cuối tuần</strong> giảm đến 70% cho hàng ngàn sản phẩm.</li>
            <li><strong>Combo tiết kiệm:</strong> Mua 2 tặng 1 cho phụ kiện điện thoại.</li>
        </ul>

        <p>
            Đừng bỏ lỡ cơ hội mua sắm tiết kiệm ngay từ đơn hàng đầu tiên!
            Hãy đăng ký tài khoản và nhập mã <strong>WELCOME50</strong> ngay hôm nay
            để trải nghiệm mua sắm thông minh cùng Smart Shopping Cart.
        </p>
    `
},


{
    id: 3,
    title: "IPHONE 18 PRO RA MẮT TOÀN CẦU: CHIP A20 PRO 2NM, CAMERA KHẨU ĐỘ BIẾN THIÊN",
    image: "../assets/images/ip18.png",
    description: "Apple vừa trình làng iPhone 18 Pro và Pro Max với chip A20 Pro 2nm, camera chính 48MP khẩu độ biến thiên, pin lên đến 45 giờ phát video.",
    date: "10/09/2026",
    category: "sanpham",

    content: `
        <p>
            Trong sự kiện ra mắt thường niên diễn ra tại Apple Park (Cupertino, Mỹ),
            <strong>Apple</strong> đã chính thức trình làng thế hệ iPhone mới nhất —
            <strong>iPhone 18 Pro</strong> và <strong>iPhone 18 Pro Max</strong>.
            Đây được đánh giá là bước tiến lớn nhất của Apple trong nhiều năm trở lại đây,
            với hàng loạt nâng cấp đột phá về chip xử lý, camera và thời lượng pin.
        </p>

        <!-- HỘP GIÁ -->
        <div class="hop-gia">
            <div>
                <div class="hop-gia-label">Giá khởi điểm tại Mỹ</div>
                <div class="hop-gia-so">1.199 USD</div>
            </div>
            <div class="hop-gia-phu">
                Tương đương ~30.99 triệu đồng<br>
                (chưa bao gồm thuế và phí)
            </div>
        </div>

        <h3>1. Chip A20 Pro 2nm — bước nhảy vọt về hiệu năng</h3>
        <p>
            Trái tim của iPhone 18 Pro là chip <strong>A20 Pro</strong> — chip di động
            đầu tiên trên thế giới được sản xuất trên tiến trình <strong>2nm</strong>.
            So với A19 Pro trên thế hệ trước, A20 Pro mang lại:
        </p>
        <ul>
            <li><strong>Hiệu năng CPU:</strong> tăng 25%</li>
            <li><strong>Hiệu năng GPU:</strong> tăng 30%</li>
            <li><strong>Hiệu năng AI (Neural Engine):</strong> tăng 60%</li>
            <li><strong>Tiết kiệm điện năng:</strong> giảm 35% mức tiêu thụ</li>
        </ul>
        <p>
            Nhờ tiến trình 2nm, Apple không chỉ cải thiện hiệu năng mà còn tối ưu hóa
            đáng kể nhiệt độ và thời lượng pin — điều mà người dùng iPhone luôn mong đợi.
        </p>

        <h3>2. Camera khẩu độ biến thiên — đột phá nhiếp ảnh di động</h3>
        <p>
            Điểm nhấn lớn nhất trên iPhone 18 Pro chính là
            <strong>camera chính 48MP với khẩu độ biến thiên</strong> (variable aperture) —
            công nghệ lần đầu tiên xuất hiện trên iPhone. Người dùng có thể điều chỉnh
            khẩu độ từ <strong>f/1.4 đến f/4.0</strong> để kiểm soát độ sâu trường ảnh
            và lượng ánh sáng vào cảm biến.
        </p>
        <p>
            Camera tele cũng được nâng cấp lên <strong>48MP</strong> với zoom quang học 5x,
            kết hợp cùng camera siêu rộng 48MP cho bộ 3 camera đồng nhất về độ phân giải —
            một lần nữa khẳng định vị thế dẫn đầu của Apple trong lĩnh vực nhiếp ảnh di động.
        </p>

        <h3>3. Pin 45 giờ phát video — kỷ lục mới</h3>
        <p>
            Với viên pin dung lượng lớn hơn và chip A20 Pro tiết kiệm điện,
            iPhone 18 Pro Max đạt thời lượng pin
            <strong>lên đến 45 giờ phát video liên tục</strong> — con số cao nhất từng
            được ghi nhận trên một chiếc iPhone. Phiên bản Pro tiêu chuẩn đạt khoảng
            <strong>38 giờ</strong>.
        </p>
        <p>
            Sạc nhanh cũng được nâng cấp lên <strong>45W có dây</strong> và
            <strong>25W MagSafe không dây</strong>, giúp sạc đầy 50% pin chỉ trong 20 phút.
        </p>

        <h3>4. Thông số kỹ thuật chi tiết</h3>
        <table class="bang-thong-so">
            <tr>
                <th>Màn hình</th>
                <td>6.3 inch (Pro) / 6.9 inch (Pro Max), LTPO OLED, 120Hz ProMotion</td>
            </tr>
            <tr>
                <th>Chip xử lý</th>
                <td>Apple A20 Pro (tiến trình 2nm)</td>
            </tr>
            <tr>
                <th>RAM</th>
                <td>12GB</td>
            </tr>
            <tr>
                <th>Bộ nhớ trong</th>
                <td>256GB / 512GB / 1TB / 2TB</td>
            </tr>
            <tr>
                <th>Camera chính</th>
                <td>48MP, khẩu độ biến thiên f/1.4 – f/4.0, OIS</td>
            </tr>
            <tr>
                <th>Camera tele</th>
                <td>48MP, zoom quang 5x</td>
            </tr>
            <tr>
                <th>Camera siêu rộng</th>
                <td>48MP, góc 120°</td>
            </tr>
            <tr>
                <th>Camera trước</th>
                <td>24MP, autofocus</td>
            </tr>
            <tr>
                <th>Pin</th>
                <td>38 giờ (Pro) / 45 giờ (Pro Max) phát video</td>
            </tr>
            <tr>
                <th>Sạc nhanh</th>
                <td>45W có dây / 25W MagSafe</td>
            </tr>
            <tr>
                <th>Hệ điều hành</th>
                <td>iOS 20</td>
            </tr>
            <tr>
                <th>Chống nước</th>
                <td>IP68</td>
            </tr>
            <tr>
                <th>Chất liệu</th>
                <td>Khung titan, mặt kính Ceramic Shield thế hệ mới</td>
            </tr>
        </table>

        <h3>5. Màu sắc và dung lượng</h3>
        <p>
            iPhone 18 Pro và Pro Max sẽ có mặt trên thị trường với
            <strong>4 tùy chọn màu sắc</strong>:
        </p>
        <ul>
            <li><strong>Titan Đen</strong> (Black Titanium)</li>
            <li><strong>Titan Trắng</strong> (White Titanium)</li>
            <li><strong>Titan Xanh</strong> (Blue Titanium)</li>
            <li><strong>Titan Sa Mạc</strong> (Desert Titanium) — màu mới năm nay</li>
        </ul>
        <p>
            Về dung lượng, người dùng có thể lựa chọn từ <strong>256GB</strong>,
            <strong>512GB</strong>, <strong>1TB</strong> và cao cấp nhất là
            <strong>2TB</strong> — lần đầu tiên xuất hiện trên dòng iPhone Pro.
        </p>

        <h3>6. So sánh nhanh với iPhone 17 Pro</h3>
        <table class="bang-so-sanh">
            <thead>
                <tr>
                    <th>Tiêu chí</th>
                    <th>iPhone 17 Pro</th>
                    <th>iPhone 18 Pro</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Chip</td>
                    <td>A19 Pro (3nm)</td>
                    <td><strong>A20 Pro (2nm)</strong></td>
                </tr>
                <tr>
                    <td>RAM</td>
                    <td>8GB</td>
                    <td><strong>12GB</strong></td>
                </tr>
                <tr>
                    <td>Camera chính</td>
                    <td>48MP, f/1.78 cố định</td>
                    <td><strong>48MP, khẩu độ biến thiên</strong></td>
                </tr>
                <tr>
                    <td>Camera tele</td>
                    <td>12MP, zoom 5x</td>
                    <td><strong>48MP, zoom 5x</strong></td>
                </tr>
                <tr>
                    <td>Pin (Pro Max)</td>
                    <td>33 giờ phát video</td>
                    <td><strong>45 giờ phát video</strong></td>
                </tr>
                <tr>
                    <td>Sạc nhanh</td>
                    <td>27W</td>
                    <td><strong>45W</strong></td>
                </tr>
                <tr>
                    <td>Dung lượng tối đa</td>
                    <td>1TB</td>
                    <td><strong>2TB</strong></td>
                </tr>
            </tbody>
        </table>

        <h3>7. Ngày mở bán và giá tại Việt Nam</h3>
        <p>
            iPhone 18 Pro và iPhone 18 Pro Max sẽ chính thức mở đặt trước từ
            <strong>ngày 15/09/2026</strong> và lên kệ từ
            <strong>ngày 22/09/2026</strong> tại hơn 100 quốc gia và vùng lãnh thổ,
            trong đó có Việt Nam.
        </p>
        <p>Giá bán dự kiến tại thị trường Việt Nam:</p>
        <ul>
            <li><strong>iPhone 18 Pro 256GB:</strong> từ 30.990.000đ</li>
            <li><strong>iPhone 18 Pro 512GB:</strong> từ 34.990.000đ</li>
            <li><strong>iPhone 18 Pro 1TB:</strong> từ 39.990.000đ</li>
            <li><strong>iPhone 18 Pro Max 256GB:</strong> từ 34.990.000đ</li>
            <li><strong>iPhone 18 Pro Max 2TB:</strong> từ 49.990.000đ</li>
        </ul>

        <h3>8. Đánh giá sơ bộ</h3>
        <p>
            Với những nâng cấp vượt trội về chip, camera và pin,
            <strong>iPhone 18 Pro</strong> hứa hẹn sẽ là chiếc flagship đáng mua nhất
            trong năm 2026. Đặc biệt, công nghệ <strong>khẩu độ biến thiên</strong>
            trên camera chính là điểm khác biệt lớn so với các đối thủ Android —
            vốn đã có công nghệ này từ vài năm trước. Việc Apple bổ sung tính năng này
            cho thấy hãng đang ngày càng lắng nghe người dùng và không ngừng đổi mới.
        </p>
        <p>
            Đừng quên theo dõi Smart Shopping Cart để cập nhật những thông tin mới nhất
            về iPhone 18 Pro cũng như các chương trình ưu đãi hấp dẫn khi mở bán!
        </p>
    `
},

{
    id: 4,
    title: "HƯỚNG DẪN THANH TOÁN AN TOÀN TRÊN SMART SHOPPING CART",
    image: "../assets/images/thanhtoanantoan.png",
    date: "27/09/2026",
    category: "thongtin",
    description: "Tìm hiểu các phương thức thanh toán được hỗ trợ: COD, chuyển khoản, ví điện tử và thẻ tín dụng — tất cả đều được mã hóa bảo mật.",
    content: `
        <p>
            Tại <strong>Smart Shopping Cart</strong>, chúng tôi hiểu rằng
            <strong>an toàn thanh toán</strong> là yếu tố quan trọng nhất để bạn
            yên tâm mua sắm trực tuyến. Vì vậy, nền tảng của chúng tôi được xây
            dựng với tiêu chuẩn bảo mật cao nhất, đồng thời hỗ trợ đa dạng
            phương thức thanh toán để phù hợp với mọi nhu cầu của người dùng Việt Nam.
        </p>

        <h3>1. Các phương thức thanh toán được hỗ trợ</h3>
        <p>
            Smart Shopping Cart hiện hỗ trợ <strong>4 phương thức thanh toán</strong>
            phổ biến nhất, đáp ứng nhu cầu của mọi đối tượng khách hàng:
        </p>

        <div class="phuong-thuc-list">
            <div class="phuong-thuc">
                <div class="phuong-thuc-icon icon-cod">💵</div>
                <div class="phuong-thuc-noi-dung">
                    <div class="phuong-thuc-ten">Thanh toán khi nhận hàng (COD)</div>
                    <div class="phuong-thuc-mo-ta">Kiểm tra hàng trước khi trả tiền. An toàn nhất cho người mới mua online.</div>
                </div>
            </div>

            <div class="phuong-thuc">
                <div class="phuong-thuc-icon icon-bank">🏦</div>
                <div class="phuong-thuc-noi-dung">
                    <div class="phuong-thuc-ten">Chuyển khoản ngân hàng</div>
                    <div class="phuong-thuc-mo-ta">Chuyển khoản qua Internet Banking hoặc tại quầy giao dịch.</div>
                </div>
            </div>

            <div class="phuong-thuc">
                <div class="phuong-thuc-icon icon-wallet">📱</div>
                <div class="phuong-thuc-noi-dung">
                    <div class="phuong-thuc-ten">Ví điện tử</div>
                    <div class="phuong-thuc-mo-ta">Hỗ trợ Momo, ZaloPay, VNPay, ShopeePay — thanh toán chỉ trong 5 giây.</div>
                </div>
            </div>

            <div class="phuong-thuc">
                <div class="phuong-thuc-icon icon-card">💳</div>
                <div class="phuong-thuc-noi-dung">
                    <div class="phuong-thuc-ten">Thẻ tín dụng / ghi nợ</div>
                    <div class="phuong-thuc-mo-ta">Visa, Mastercard, JCB — bảo mật 3D Secure, không lo lộ thông tin.</div>
                </div>
            </div>
        </div>

        <h3>2. Quy trình thanh toán an toàn — 4 bước</h3>
        <p>
            Dù bạn chọn phương thức nào, quy trình thanh toán trên Smart Shopping Cart
            đều diễn ra theo 4 bước chuẩn sau:
        </p>

        <div class="cac-buoc">
            <div class="buoc">
                <div class="buoc-so">1</div>
                <div class="buoc-noi-dung">
                    <div class="buoc-tieu-de">Kiểm tra giỏ hàng</div>
                    <div class="buoc-mo-ta">Xem lại sản phẩm, số lượng, kích cỡ, màu sắc. Áp dụng mã giảm giá (nếu có) và kiểm tra tổng tiền trước khi đặt hàng.</div>
                </div>
            </div>

            <div class="buoc">
                <div class="buoc-so">2</div>
                <div class="buoc-noi-dung">
                    <div class="buoc-tieu-de">Nhập thông tin giao hàng</div>
                    <div class="buoc-mo-ta">Điền chính xác họ tên, số điện thoại, địa chỉ nhận hàng. Kiểm tra kỹ để tránh giao sai địa chỉ hoặc thất lạc đơn hàng.</div>
                </div>
            </div>

            <div class="buoc">
                <div class="buoc-so">3</div>
                <div class="buoc-noi-dung">
                    <div class="buoc-tieu-de">Chọn phương thức thanh toán</div>
                    <div class="buoc-mo-ta">Lựa chọn 1 trong 4 phương thức: COD, chuyển khoản, ví điện tử hoặc thẻ tín dụng. Hệ thống sẽ hiển thị hướng dẫn chi tiết cho từng phương thức.</div>
                </div>
            </div>

            <div class="buoc">
                <div class="buoc-so">4</div>
                <div class="buoc-noi-dung">
                    <div class="buoc-tieu-de">Xác nhận và hoàn tất</div>
                    <div class="buoc-mo-ta">Nhấn "Đặt hàng" để hoàn tất. Bạn sẽ nhận được email + SMS xác nhận đơn hàng trong vòng 1 phút. Theo dõi đơn hàng trực tiếp trên website.</div>
                </div>
            </div>
        </div>

        <h3>3. So sánh ưu — nhược điểm các phương thức</h3>
        <p>
            Mỗi phương thức có ưu và nhược điểm riêng. Bảng dưới đây giúp bạn
            chọn phương thức phù hợp nhất:
        </p>

        <table class="bang-so-sanh">
            <thead>
                <tr>
                    <th>Phương thức</th>
                    <th>Ưu điểm</th>
                    <th>Nhược điểm</th>
                    <th>Phù hợp với</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>COD</td>
                    <td>Kiểm tra hàng trước khi trả tiền</td>
                    <td>Phí COD 15.000–30.000đ</td>
                    <td>Người mới mua online</td>
                </tr>
                <tr>
                    <td>Chuyển khoản</td>
                    <td>Không phí, an toàn</td>
                    <td>Phải chờ xác nhận 5–15 phút</td>
                    <td>Khách hàng quen</td>
                </tr>
                <tr>
                    <td>Ví điện tử</td>
                    <td>Nhanh 5 giây, hoàn tiền dễ</td>
                    <td>Cần nạp tiền vào ví trước</td>
                    <td>Người dùng smartphone</td>
                </tr>
                <tr>
                    <td>Thẻ tín dụng</td>
                    <td>Bảo mật 3D Secure, hoàn tiền tự động</td>
                    <td>Cần thẻ quốc tế</td>
                    <td>Khách hàng quốc tế, đơn lớn</td>
                </tr>
            </tbody>
        </table>

        <h3>4. Cam kết bảo mật của Smart Shopping Cart</h3>
        <p>
            Chúng tôi áp dụng nhiều lớp bảo mật để bảo vệ thông tin và tài sản của bạn:
        </p>
        <ul>
            <li><strong>Mã hóa SSL 256-bit:</strong> Toàn bộ dữ liệu truyền tải giữa trình duyệt và máy chủ đều được mã hóa theo chuẩn ngân hàng.</li>
            <li><strong>Chuẩn PCI DSS:</strong> Tuân thủ tiêu chuẩn bảo mật thẻ thanh toán quốc tế — không lưu trữ số thẻ của khách hàng.</li>
            <li><strong>Xác thực 3D Secure:</strong> Mọi giao dịch thẻ đều cần xác thực OTP qua điện thoại.</li>
            <li><strong>Kiểm tra gian lận AI:</strong> Hệ thống AI phát hiện giao dịch bất thường trong vòng 2 giây.</li>
            <li><strong>Hoàn tiền 100%:</strong> Nếu phát hiện giao dịch trái phép, chúng tôi hoàn tiền đầy đủ trong 24 giờ.</li>
        </ul>

        <div class="canh-bao">
            <div class="canh-bao-tieu-de">Cảnh báo an toàn — Bạn cần biết</div>
            <ul>
                <li>Smart Shopping Cart <strong>KHÔNG BAO GIỜ</strong> yêu cầu bạn cung cấp mật khẩu, mã OTP hay số CVV qua điện thoại, email hoặc tin nhắn.</li>
                <li>Chỉ thanh toán trên website chính thức <strong>smartshoppingcart.vn</strong> — kiểm tra kỹ biểu tượng ổ khóa 🔒 trên thanh địa chỉ.</li>
                <li>Không chuyển khoản vào bất kỳ tài khoản cá nhân nào khác ngoài tài khoản công ty được công bố trên website.</li>
                <li>Nếu nhận được cuộc gọi tự xưng là nhân viên Smart Shopping Cart yêu cầu cung cấp thông tin — hãy cúp máy và gọi hotline <strong>1900 xxxx</strong> để xác minh.</li>
            </ul>
        </div>

        <h3>5. Hỗ trợ khách hàng 24/7</h3>
        <p>
            Nếu gặp bất kỳ vấn đề gì trong quá trình thanh toán, đội ngũ hỗ trợ
            của Smart Shopping Cart luôn sẵn sàng giúp đỡ bạn:
        </p>
        <ul>
            <li><strong>Hotline:</strong> 1900 xxxx (hoạt động 24/7, kể cả lễ Tết)</li>
            <li><strong>Email:</strong> hotro@smartshoppingcart.vn</li>
            <li><strong>Live chat:</strong> Trực tiếp trên website, phản hồi trong 30 giây</li>
            <li><strong>Fanpage Facebook:</strong> /SmartShoppingCartVN</li>
        </ul>

        <div class="ghi-chu">
            <strong>💡 Mẹo nhỏ:</strong> Nếu là khách hàng mới, bạn nên chọn phương thức
            <strong>COD</strong> cho đơn hàng đầu tiên để kiểm tra chất lượng sản phẩm.
            Sau khi đã tin tưởng, bạn có thể chuyển sang <strong>ví điện tử</strong>
            để thanh toán nhanh hơn và nhận nhiều ưu đãi hoàn tiền hấp dẫn.
        </div>

        <p>
            Với những cam kết bảo mật nghiêm ngặt và quy trình thanh toán rõ ràng,
            Smart Shopping Cart hy vọng bạn sẽ có những trải nghiệm mua sắm trực tuyến
            an toàn và thoải mái nhất. Hãy yên tâm mua sắm — chúng tôi bảo vệ bạn!
        </p>
    `
},

{
    id: 5,
    title: "FLASH SALE CUỐI TUẦN: GIẢM ĐẾN 70% CHO HÀNG NGÀN SẢN PHẨM",
    image: "../assets/images/sale70cuoituan.png",
    date: "26/09/2026",
    category: "khuyenmai",
    description: "Chỉ diễn ra trong 48 giờ: thời trang, gia dụng, công nghệ giảm giá sốc. Nhanh tay kẻo lỡ!",
    content: `
        <p>
            Smart Shopping Cart chính thức khởi động chương trình
            <strong>Flash Sale cuối tuần</strong> — sự kiện giảm giá lớn nhất
            trong tháng với hàng ngàn sản phẩm được giảm đến <strong>70%</strong>.
            Chương trình chỉ kéo dài trong <strong>48 giờ</strong> duy nhất,
            từ 00:00 thứ Bảy đến 23:59 Chủ Nhật hàng tuần.
        </p>

        <div class="dem-nguoc-wrap">
            <div class="dem-nguoc-label">⏰ Flash Sale kết thúc sau</div>
            <div class="dem-nguoc">
                <div class="dem-nguoc-o">
                    <div class="dem-nguoc-so">01</div>
                    <div class="dem-nguoc-don-vi">Ngày</div>
                </div>
                <div class="dem-nguoc-o">
                    <div class="dem-nguoc-so">12</div>
                    <div class="dem-nguoc-don-vi">Giờ</div>
                </div>
                <div class="dem-nguoc-o">
                    <div class="dem-nguoc-so">45</div>
                    <div class="dem-nguoc-don-vi">Phút</div>
                </div>
                <div class="dem-nguoc-o">
                    <div class="dem-nguoc-so">30</div>
                    <div class="dem-nguoc-don-vi">Giây</div>
                </div>
            </div>
        </div>

        <h3>1. Ba khung giờ vàng — càng sớm càng rẻ</h3>
        <p>
            Flash Sale cuối tuần được chia thành <strong>3 khung giờ vàng</strong>,
            mỗi khung có mức giảm khác nhau. Càng vào sớm, cơ hội săn được giá sốc càng cao:
        </p>

        <div class="khung-gio-vang">
            <div class="khung-gio">
                <div class="khung-gio-thoi-gian">00:00 – 08:00</div>
                <div class="khung-gio-mo-ta">
                    Giảm đến <strong>70%</strong><br>
                    — Khung giờ vàng đặc biệt —
                </div>
            </div>
            <div class="khung-gio">
                <div class="khung-gio-thoi-gian">08:00 – 16:00</div>
                <div class="khung-gio-mo-ta">
                    Giảm đến <strong>50%</strong><br>
                    — Khung giờ tiêu chuẩn —
                </div>
            </div>
            <div class="khung-gio">
                <div class="khung-gio-thoi-gian">16:00 – 24:00</div>
                <div class="khung-gio-mo-ta">
                    Giảm đến <strong>30%</strong><br>
                    — Khung giờ xả hàng —
                </div>
            </div>
        </div>

        <h3>2. Danh mục sản phẩm tham gia</h3>
        <p>
            Flash Sale cuối tuần áp dụng cho <strong>tất cả danh mục</strong>
            trên Smart Shopping Cart, bao gồm:
        </p>
        <ul>
            <li><strong>Thời trang:</strong> Áo, quần, giày dép, túi xách — giảm đến 70%.</li>
            <li><strong>Gia dụng:</strong> Nồi chiên không dầu, máy hút bụi, nồi cơm điện — giảm đến 50%.</li>
            <li><strong>Công nghệ:</strong> Tai nghe, sạc dự phòng, đồng hồ thông minh — giảm đến 60%.</li>
            <li><strong>Làm đẹp:</strong> Mỹ phẩm, skincare, nước hoa — giảm đến 40%.</li>
            <li><strong>Mẹ và bé:</strong> Sữa, bỉm, đồ chơi trẻ em — giảm đến 35%.</li>
        </ul>

        <h3>3. Sản phẩm hot đang giảm giá sốc</h3>
        <p>
            Dưới đây là một số sản phẩm đang được giảm giá mạnh nhất trong khung giờ vàng:
        </p>

        <div class="flash-grid">
            <div class="flash-item">
                <img src="../assets/images/ip18.png" alt="iPhone 18 Pro" class="flash-item-img">
                <div class="flash-giam">-30%</div>
                <div class="flash-item-body">
                    <div class="flash-item-ten">iPhone 18 Pro 256GB — Chính hãng VN/A</div>
                    <div class="flash-gia">
                        <span class="flash-gia-moi">21.690.000đ</span>
                        <span class="flash-gia-cu">30.990.000đ</span>
                    </div>
                    <div class="tien-do-wrap">
                        <div class="tien-do">
                            <div class="tien-do-bar" style="width: 78%;"></div>
                        </div>
                        <div class="tien-do-text">Đã bán 78%</div>
                    </div>
                </div>
            </div>

            <div class="flash-item">
                <img src="../assets/images/s26.png" alt="Samsung Galaxy S26" class="flash-item-img">
                <div class="flash-giam">-25%</div>
                <div class="flash-item-body">
                    <div class="flash-item-ten">Samsung Galaxy S26 5G — Chip Exynos 2600</div>
                    <div class="flash-gia">
                        <span class="flash-gia-moi">19.490.000đ</span>
                        <span class="flash-gia-cu">25.990.000đ</span>
                    </div>
                    <div class="tien-do-wrap">
                        <div class="tien-do">
                            <div class="tien-do-bar" style="width: 65%;"></div>
                        </div>
                        <div class="tien-do-text">Đã bán 65%</div>
                    </div>
                </div>
            </div>

            <div class="flash-item">
                <img src="../assets/images/POCoC95PRO.png" alt="POCO C95 Pro" class="flash-item-img">
                <div class="flash-giam">-40%</div>
                <div class="flash-item-body">
                    <div class="flash-item-ten">POCO C95 Pro — Pin 7.500mAh, sạc nhanh 45W</div>
                    <div class="flash-gia">
                        <span class="flash-gia-moi">3.890.000đ</span>
                        <span class="flash-gia-cu">6.490.000đ</span>
                    </div>
                    <div class="tien-do-wrap">
                        <div class="tien-do">
                            <div class="tien-do-bar" style="width: 92%;"></div>
                        </div>
                        <div class="tien-do-text">Đã bán 92%</div>
                    </div>
                </div>
            </div>

            <div class="flash-item">
                <img src="../assets/images/phukiendienthoai.png" alt="Combo phụ kiện điện thoại" class="flash-item-img">
                <div class="flash-giam">-70%</div>
                <div class="flash-item-body">
                    <div class="flash-item-ten">Combo phụ kiện điện thoại — Sạc + Cáp + Ốp lưng</div>
                    <div class="flash-gia">
                        <span class="flash-gia-moi">89.000đ</span>
                        <span class="flash-gia-cu">299.000đ</span>
                    </div>
                    <div class="tien-do-wrap">
                        <div class="tien-do">
                            <div class="tien-do-bar" style="width: 96%;"></div>
                        </div>
                        <div class="tien-do-text">Đã bán 96%</div>
                    </div>
                </div>
            </div>

            <div class="flash-item">
                <img src="../assets/images/TDKSmartGlasses.png" alt="TDK Smart Glasses" class="flash-item-img">
                <div class="flash-giam">-35%</div>
                <div class="flash-item-body">
                    <div class="flash-item-ten">TDK Smart Glasses — Kính thông minh thế hệ mới</div>
                    <div class="flash-gia">
                        <span class="flash-gia-moi">8.450.000đ</span>
                        <span class="flash-gia-cu">12.990.000đ</span>
                    </div>
                    <div class="tien-do-wrap">
                        <div class="tien-do">
                            <div class="tien-do-bar" style="width: 42%;"></div>
                        </div>
                        <div class="tien-do-text">Đã bán 42%</div>
                    </div>
                </div>
            </div>

            <div class="flash-item">
                <img src="../assets/images/HUAWEIMATE90.png" alt="Huawei Mate90" class="flash-item-img">
                <div class="flash-giam">-20%</div>
                <div class="flash-item-body">
                    <div class="flash-item-ten">Huawei Mate90 — Camera module cảm biến đầu tiên</div>
                    <div class="flash-gia">
                        <span class="flash-gia-moi">15.990.000đ</span>
                        <span class="flash-gia-cu">19.990.000đ</span>
                    </div>
                    <div class="tien-do-wrap">
                        <div class="tien-do">
                            <div class="tien-do-bar" style="width: 38%;"></div>
                        </div>
                        <div class="tien-do-text">Đã bán 38%</div>
                    </div>
                </div>
            </div>
        </div>

        <h3>4. Bí kíp săn Flash Sale thành công</h3>
        <p>Để không bỏ lỡ những sản phẩm giá sốc, bạn hãy áp dụng những mẹo sau:</p>
        <ul>
            <li><strong>Đăng nhập sớm:</strong> Đăng nhập vào tài khoản trước 5 phút để sẵn sàng khi khung giờ vàng mở.</li>
            <li><strong>Thêm vào giỏ hàng trước:</strong> Thêm sản phẩm yêu thích vào giỏ từ trước, khi sale mở chỉ cần bấm "Thanh toán".</li>
            <li><strong>Lưu sẵn địa chỉ giao hàng:</strong> Điền sẵn thông tin nhận hàng để không mất thời gian.</li>
            <li><strong>Dùng ví điện tử:</strong> Thanh toán bằng ví điện tử nhanh hơn 3–5 giây so với COD — đủ để bạn vượt qua người khác.</li>
            <li><strong>Theo dõi fanpage:</strong> Fanpage thường thông báo trước danh sách sản phẩm sale 1 giờ để bạn chuẩn bị.</li>
        </ul>

        <div class="luu-y">
            <strong>📌 Lưu ý quan trọng:</strong> Số lượng sản phẩm Flash Sale có hạn,
            hết hàng sẽ không nhập thêm. Mỗi tài khoản chỉ được mua tối đa
            <strong>2 sản phẩm</strong> cho mỗi mã giảm giá để đảm bảo công bằng
            cho tất cả khách hàng. Các trường hợp gian lận sẽ bị khóa tài khoản vĩnh viễn.
        </div>

        <h3>5. Cách nhận thông báo Flash Sale</h3>
        <p>
            Để không bỏ lỡ bất kỳ khung giờ vàng nào, hãy đăng ký nhận thông báo
            qua các kênh sau:
        </p>
        <ul>
            <li><strong>Bật thông báo đẩy (push notification)</strong> trên ứng dụng Smart Shopping Cart.</li>
            <li><strong>Theo dõi fanpage:</strong> /SmartShoppingCartVN — cập nhật danh sách sale mỗi thứ Sáu.</li>
            <li><strong>Đăng ký nhận email:</strong> Nhận thông báo trước 30 phút khi sale mở.</li>
            <li><strong>Tham gia nhóm Zalo:</strong> Nhóm "Săn Sale Cùng Smart Cart" — chia sẻ mã giảm giá và mẹo săn deal.</li>
        </ul>

        <p>
            Flash Sale cuối tuần là cơ hội tuyệt vời để bạn sở hữu những sản phẩm
            yêu thích với mức giá không thể tốt hơn. Hãy chuẩn bị sẵn sàng và đừng
            bỏ lỡ — vì khi hết hàng, cơ hội sẽ không quay lại!
        </p>
    `
},

{
    id: 6,
    title: "SAMSUNG GALAXY S26 RA MẮT: CHIP EXYNOS 2600 2NM, TÍNH NĂNG AI ĐỘT PHÁ",
    image: "../assets/images/s26.png",
    date: "26/02/2026",
    category: "sanpham",
    description: "Samsung chính thức ra mắt Galaxy S26 với chip Exynos 2600 2nm, NPU tăng 113% hiệu năng AI, màn hình 6.3 inch 120Hz. Giá từ 25.99 triệu đồng.",
    content: `
        <p>
            Tại sự kiện <strong>Galaxy Unpacked 2026</strong> diễn ra ở Seoul
            (Hàn Quốc), Samsung đã chính thức trình làng thế hệ flagship mới nhất —
            <strong>Samsung Galaxy S26</strong>. Đây là chiếc smartphone được Samsung
            kỳ vọng sẽ cạnh tranh trực tiếp với iPhone 18 Pro của Apple, với hàng loạt
            nâng cấp về chip xử lý, AI và camera.
        </p>

        <div class="hop-gia">
            <div>
                <div class="hop-gia-label">Giá khởi điểm tại Việt Nam</div>
                <div class="hop-gia-so">25.990.000đ</div>
            </div>
            <div class="hop-gia-phu">
                Phiên bản 12GB / 256GB<br>
                (đã bao gồm VAT)
            </div>
        </div>

        <h3>1. Chip Exynos 2600 2nm — Samsung lần đầu vượt mặt Qualcomm</h3>
        <p>
            Trái tim của Galaxy S26 là chip <strong>Exynos 2600</strong> — chip di động
            đầu tiên của Samsung được sản xuất trên tiến trình <strong>2nm</strong>
            tại nhà máy Samsung Foundry. Đây là bước ngoặt lớn khi lần đầu tiên Exynos
            có thể cạnh tranh sòng phẳng với Snapdragon và Apple Silicon.
        </p>
        <ul>
            <li><strong>Hiệu năng CPU:</strong> tăng 22% so với Exynos 2500.</li>
            <li><strong>Hiệu năng GPU (Xclipse 960):</strong> tăng 28%.</li>
            <li><strong>NPU (AI):</strong> tăng <strong>113%</strong> — con số ấn tượng nhất.</li>
            <li><strong>Tiết kiệm điện:</strong> giảm 30% mức tiêu thụ.</li>
        </ul>
        <p>
            Với NPU mạnh gấp đôi, Galaxy S26 có thể xử lý các tác vụ AI ngay trên thiết bị
            (on-device AI) mà không cần kết nối internet — bao gồm dịch trực tiếp,
            tóm tắt văn bản, chỉnh sửa ảnh bằng AI và trợ lý ảo thông minh hơn.
        </p>

        <h3>2. Bốn tính năng AI đột phá</h3>
        <p>
            Samsung gọi Galaxy S26 là "chiếc smartphone AI đầu tiên thực sự"
            nhờ bộ tính năng Galaxy AI thế hệ mới:
        </p>

        <div class="tinh-nang-ai">
            <div class="ai-card">
                <div class="ai-card-icon">🌐</div>
                <div class="ai-card-noi-dung">
                    <div class="ai-card-ten">Dịch trực tiếp cuộc gọi</div>
                    <div class="ai-card-mo-ta">
                        Dịch real-time 20 ngôn ngữ trong cuộc gọi, không cần ứng dụng bên thứ ba.
                    </div>
                </div>
            </div>

            <div class="ai-card">
                <div class="ai-card-icon">✏️</div>
                <div class="ai-card-noi-dung">
                    <div class="ai-card-ten">Xóa vật thể trong ảnh</div>
                    <div class="ai-card-mo-ta">
                        Chỉ cần khoanh vùng — AI tự động xóa và lấp đầy nền hoàn hảo.
                    </div>
                </div>
            </div>

            <div class="ai-card">
                <div class="ai-card-icon">📝</div>
                <div class="ai-card-noi-dung">
                    <div class="ai-card-ten">Tóm tắt văn bản thông minh</div>
                    <div class="ai-card-mo-ta">
                        Tóm tắt email, ghi chú, bài báo dài thành 3–5 dòng trong 2 giây.
                    </div>
                </div>
            </div>

            <div class="ai-card">
                <div class="ai-card-icon">🎨</div>
                <div class="ai-card-noi-dung">
                    <div class="ai-card-title">Tạo ảnh AI từ văn bản</div>
                    <div class="ai-card-mo-ta">
                        Nhập mô tả — AI tạo ảnh chất lượng cao ngay trên điện thoại.
                    </div>
                </div>
            </div>
        </div>

        <h3>3. Màn hình 6.3 inch 120Hz — sáng và mượt</h3>
        <p>
            Galaxy S26 sử dụng màn hình <strong>Dynamic AMOLED 2X</strong> kích thước
            6.3 inch, độ phân giải Full HD+, tần số quét <strong>120Hz</strong> thích ứng
            (1Hz–120Hz). Độ sáng tối đa đạt <strong>2.600 nits</strong> — cao nhất trong
            phân khúc, đủ để đọc rõ ngoài trời nắng gắt.
        </p>
        <p>
            Màn hình được phủ kính cường lực <strong>Gorilla Glass Armor 2</strong> —
            thế hệ mới nhất của Corning, giảm 75% vết xước và tăng khả năng chống va đập.
        </p>

        <h3>4. Thông số kỹ thuật chi tiết</h3>
        <table class="bang-thong-so">
            <tbody>
                <tr>
                    <th>Màn hình</th>
                    <td>6.3 inch Dynamic AMOLED 2X, FHD+, 120Hz, 2600 nits</td>
                </tr>
                <tr>
                    <th>Chip xử lý</th>
                    <td>Exynos 2600 (tiến trình 2nm)</td>
                </tr>
                <tr>
                    <th>RAM</th>
                    <td>12GB</td>
                </tr>
                <tr>
                    <th>Bộ nhớ trong</th>
                    <td>256GB / 512GB</td>
                </tr>
                <tr>
                    <th>Camera chính</th>
                    <td>50MP, f/1.8, OIS</td>
                </tr>
                <tr>
                    <th>Camera tele</th>
                    <td>12MP, zoom quang 3x, OIS</td>
                </tr>
                <tr>
                    <th>Camera siêu rộng</th>
                    <td>12MP, góc 120°</td>
                </tr>
                <tr>
                    <th>Camera trước</th>
                    <td>12MP, autofocus</td>
                </tr>
                <tr>
                    <th>Pin</th>
                    <td>4.500 mAh</td>
                </tr>
                <tr>
                    <th>Sạc nhanh</th>
                    <td>45W có dây / 15W không dây</td>
                </tr>
                <tr>
                    <th>Hệ điều hành</th>
                    <td>Android 16 + One UI 8</td>
                </tr>
                <tr>
                    <th>Chống nước</th>
                    <td>IP68</td>
                </tr>
                <tr>
                    <th>Chất liệu</th>
                    <td>Khung nhôm, mặt kính Gorilla Glass Armor 2</td>
                </tr>
            </tbody>
        </table>

        <h3>5. Màu sắc và dung lượng</h3>
        <p>Galaxy S26 ra mắt với <strong>4 màu sắc chính thức</strong>:</p>
        <ul>
            <li><strong>Đen Titan</strong> (Titanium Black).</li>
            <li><strong>Xám Titan</strong> (Titanium Gray).</li>
            <li><strong>Xanh Navy</strong> (Navy Blue).</li>
            <li><strong>Hồng San Hô</strong> (Coral Pink) — màu mới năm nay.</li>
        </ul>
        <p>
            Ngoài ra, Samsung còn độc quyền bán trực tuyến 2 màu:
            <strong>Tím Oải Hương</strong> (Lavender) và
            <strong>Xanh Mint</strong> (Mint) trên Samsung.com.
        </p>

        <h3>6. So sánh trực tiếp với iPhone 18 Pro</h3>
        <table class="bang-so-sanh">
            <thead>
                <tr>
                    <th>Tiêu chí</th>
                    <th>Galaxy S26</th>
                    <th>iPhone 18 Pro</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Chip</td>
                    <td>Exynos 2600 (2nm)</td>
                    <td class="thang">A20 Pro (2nm)</td>
                </tr>
                <tr>
                    <td>RAM</td>
                    <td>12GB</td>
                    <td>12GB</td>
                </tr>
                <tr>
                    <td>Màn hình</td>
                    <td>6.3" 120Hz</td>
                    <td>6.3" 120Hz</td>
                </tr>
                <tr>
                    <td>Độ sáng tối đa</td>
                    <td class="thang">2600 nits</td>
                    <td>2000 nits</td>
                </tr>
                <tr>
                    <td>Camera chính</td>
                    <td>50MP</td>
                    <td class="thang">48MP khẩu độ biến thiên</td>
                </tr>
                <tr>
                    <td>Pin</td>
                    <td>4.500 mAh</td>
                    <td class="thang">4.700 mAh</td>
                </tr>
                <tr>
                    <td>Sạc nhanh</td>
                    <td>45W</td>
                    <td>45W</td>
                </tr>
                <tr>
                    <td>Giá khởi điểm</td>
                    <td class="thang">25.990.000đ</td>
                    <td>30.990.000đ</td>
                </tr>
            </tbody>
        </table>

        <h3>7. Ưu điểm và nhược điểm</h3>
        <div class="uu-nhuoc">
            <div class="uu-diem">
                <div class="uu-nhuoc-tieu-de">✓ Ưu điểm</div>
                <ul>
                    <li>Chip Exynos 2600 2nm mạnh mẽ, hiệu năng AI vượt trội.</li>
                    <li>Màn hình sáng nhất phân khúc (2600 nits).</li>
                    <li>Galaxy AI phong phú, nhiều tính năng độc quyền.</li>
                    <li>Giá rẻ hơn iPhone 18 Pro 5 triệu đồng.</li>
                    <li>Hệ sinh thái Samsung rộng lớn (Galaxy Buds, Watch, Tab).</li>
                </ul>
            </div>
            <div class="nhuoc-diem">
                <div class="uu-nhuoc-tieu-de">✗ Nhược điểm</div>
                <ul>
                    <li>Camera chính 50MP thua iPhone về khẩu độ biến thiên.</li>
                    <li>Pin 4.500 mAh hơi nhỏ so với đối thủ.</li>
                    <li>Exynos vẫn chưa được người dùng Việt tin tưởng bằng Snapdragon.</li>
                    <li>Không có bản 1TB.</li>
                </ul>
            </div>
        </div>

        <h3>8. Ngày mở bán và giá tại Việt Nam</h3>
        <p>
            Galaxy S26 chính thức mở đặt trước từ <strong>ngày 26/02/2026</strong>
            và lên kệ từ <strong>ngày 05/03/2026</strong> tại Việt Nam.
            Khách hàng đặt trước sẽ nhận được nhiều ưu đãi hấp dẫn từ Samsung
            và các nhà bán lẻ.
        </p>
        <p>Giá bán dự kiến tại thị trường Việt Nam:</p>
        <ul>
            <li><strong>Galaxy S26 12GB/256GB:</strong> 25.990.000đ.</li>
            <li><strong>Galaxy S26 12GB/512GB:</strong> 29.990.000đ.</li>
            <li><strong>Galaxy S26+ 12GB/256GB:</strong> 30.990.000đ.</li>
            <li><strong>Galaxy S26 Ultra 12GB/512GB:</strong> 36.990.000đ.</li>
        </ul>

        <h3>9. Đánh giá sơ bộ</h3>
        <p>
            <strong>Samsung Galaxy S26</strong> là một bước tiến đáng kể của Samsung
            trong cuộc đua flagship 2026. Với chip Exynos 2600 2nm, màn hình sáng nhất
            phân khúc và bộ tính năng Galaxy AI phong phú, Galaxy S26 hoàn toàn đủ sức
            cạnh tranh với iPhone 18 Pro — đặc biệt khi giá rẻ hơn đến 5 triệu đồng.
        </p>
        <p>
            Nếu bạn là người dùng yêu thích hệ sinh thái Android, thích tùy biến và cần
            một chiếc flagship mạnh mẽ với nhiều tính năng AI, Galaxy S26 là lựa chọn
            tuyệt vời. Ngược lại, nếu bạn ưu tiên camera và trải nghiệm iOS mượt mà,
            iPhone 18 Pro vẫn là lựa chọn hàng đầu.
        </p>
        <p>
            Đừng quên theo dõi Smart Shopping Cart để cập nhật thông tin mở bán
            và các chương trình ưu đãi hấp dẫn cho Galaxy S26!
        </p>
    `
},

{
    id: 7,
    title: "CHÍNH SÁCH ĐỔI TRẢ MỚI: 30 NGÀY MIỄN PHÍ ĐỔI HÀNG",
    image: "../assets/images/doitra30ngay.png",
    date: "24/09/2026",
    category: "thongtin",
    description: "Smart Shopping Cart nâng cấp chính sách đổi trả lên 30 ngày, miễn phí đổi size, hoàn tiền 100% nếu sản phẩm lỗi từ nhà sản xuất.",
    content: `
        <p>
            Nhằm mang lại trải nghiệm mua sắm an tâm hơn cho khách hàng,
            <strong>Smart Shopping Cart</strong> chính thức nâng cấp chính sách đổi trả
            từ 7 ngày lên <strong>30 ngày</strong> kể từ ngày nhận hàng. Đây là một trong
            những chính sách đổi trả hào phóng nhất trên thị trường thương mại điện tử
            Việt Nam hiện nay.
        </p>

        <h3>1. Thông tin chính sách</h3>
        <table class="bang">
            <tbody>
                <tr>
                    <th>Thời hạn đổi trả</th>
                    <td>30 ngày kể từ ngày nhận hàng</td>
                </tr>
                <tr>
                    <th>Phí đổi trả</th>
                    <td>Miễn phí 100%</td>
                </tr>
                <tr>
                    <th>Điều kiện sản phẩm</th>
                    <td>Còn nguyên tem, hộp, phụ kiện</td>
                </tr>
                <tr>
                    <th>Hoàn tiền</th>
                    <td>100% nếu lỗi từ nhà sản xuất</td>
                </tr>
                <tr>
                    <th>Thời gian hoàn tiền</th>
                    <td>3–5 ngày làm việc</td>
                </tr>
            </tbody>
        </table>

        <h3>2. Các trường hợp được đổi trả</h3>
        <ul>
            <li>Sản phẩm bị lỗi kỹ thuật từ nhà sản xuất.</li>
            <li>Giao sai sản phẩm, sai size, sai màu.</li>
            <li>Sản phẩm bị hư hỏng trong quá trình vận chuyển.</li>
            <li>Không đúng mô tả trên website.</li>
            <li>Đổi size / đổi mẫu (với thời trang).</li>
        </ul>

        <h3>3. Quy trình đổi trả 3 bước</h3>
        <ul>
            <li><strong>Bước 1:</strong> Liên hệ hotline hoặc chat trên website để yêu cầu đổi trả.</li>
            <li><strong>Bước 2:</strong> Đóng gói sản phẩm và gửi lại theo hướng dẫn của nhân viên.</li>
            <li><strong>Bước 3:</strong> Nhận sản phẩm mới hoặc hoàn tiền trong 3–5 ngày.</li>
        </ul>

        <h3>4. Lưu ý</h3>
        <ul>
            <li>Sản phẩm đổi trả phải còn nguyên tem mác, chưa qua sử dụng.</li>
            <li>Không áp dụng cho sản phẩm đã qua sử dụng hoặc hư hỏng do người dùng.</li>
            <li>Mỗi đơn hàng chỉ được đổi trả tối đa 2 lần.</li>
        </ul>

        <p>
            Với chính sách đổi trả 30 ngày, Smart Shopping Cart mong muốn mang đến
            cho bạn sự an tâm tuyệt đối khi mua sắm trực tuyến. Hãy yên tâm đặt hàng —
            chúng tôi bảo vệ quyền lợi của bạn!
        </p>
    `
},

{
    id: 8,
    title: "NVIDIA RTX SPARK CHÍNH THỨC RA MẮT: LAPTOP AI VỚI 128GB RAM, 1 PFLOP AI",
    image: "../assets/images/nvidia-rtx-spark_mid.png",
    date: "07/10/2026",
    category: "sanpham",
    description: "Microsoft và NVIDIA hợp tác ra mắt nền tảng RTX Spark cho laptop sáng tạo, với 6 mẫu từ ASUS, Dell, HP, Lenovo, Microsoft và MSI.",
    content: `
        <p>
            Tại sự kiện công nghệ lớn nhất năm 2026,
            <strong>NVIDIA</strong> và <strong>Microsoft</strong> đã chính thức công bố
            nền tảng <strong>RTX Spark</strong> — dòng laptop AI chuyên dụng dành cho
            nhà sáng tạo nội dung, lập trình viên và chuyên gia AI.
            Đây được xem là bước ngoặt lớn trong lĩnh vực máy trạm di động.
        </p>

        <h3>1. Cấu hình ấn tượng</h3>
        <p>
            RTX Spark trang bị GPU NVIDIA thế hệ mới, mang lại hiệu năng AI lên đến
            <strong>1 PFLOP</strong> (1.000 TFLOP) — tương đương một máy chủ AI cỡ nhỏ.
            Đi kèm là:
        </p>
        <ul>
            <li>RAM lên đến <strong>128GB</strong> LPDDR5X.</li>
            <li>SSD NVMe PCIe Gen5 tối đa <strong>4TB</strong>.</li>
            <li>Chip AI NPU tích hợp, tăng tốc xử lý mô hình ngôn ngữ lớn (LLM) ngay trên máy.</li>
            <li>Hỗ trợ NVIDIA CUDA, TensorRT và các framework AI phổ biến.</li>
        </ul>

        <h3>2. Sáu mẫu laptop từ các hãng lớn</h3>
        <p>
            Nền tảng RTX Spark sẽ có mặt trên 6 mẫu laptop đầu tiên từ các thương hiệu hàng đầu:
        </p>

        <table class="bang">
            <tbody>
                <tr><th>ASUS</th><td>ProArt StudioBook RTX Spark</td></tr>
                <tr><th>Dell</th><td>Precision 5690 Spark Edition</td></tr>
                <tr><th>HP</th><td>ZBook Fury G12 AI</td></tr>
                <tr><th>Lenovo</th><td>ThinkPad P1 Gen 9 Spark</td></tr>
                <tr><th>Microsoft</th><td>Surface Laptop Studio 3 AI</td></tr>
                <tr><th>MSI</th><td>CreatorPro X18 Spark</td></tr>
            </tbody>
        </table>

        <h3>3. Đối tượng hướng đến</h3>
        <ul>
            <li><strong>Nhà sáng tạo nội dung:</strong> dựng video 8K, render 3D, chỉnh màu chuyên nghiệp.</li>
            <li><strong>Lập trình viên AI:</strong> huấn luyện mô hình nhỏ và vừa ngay trên laptop.</li>
            <li><strong>Kiến trúc sư — kỹ sư:</strong> chạy CAD, BIM, mô phỏng kỹ thuật nặng.</li>
            <li><strong>Nghiên cứu sinh:</strong> xử lý dữ liệu lớn, thí nghiệm AI không cần cloud.</li>
        </ul>

        <h3>4. Giá bán và ngày mở bán</h3>
        <p>
            Các mẫu RTX Spark dự kiến mở bán từ <strong>tháng 11/2026</strong> với giá khởi điểm:
        </p>
        <ul>
            <li>Phiên bản phổ thông (32GB RAM): từ <strong>55 triệu đồng</strong>.</li>
            <li>Phiên bản cao cấp (64GB RAM): từ <strong>85 triệu đồng</strong>.</li>
            <li>Phiên bản workstation (128GB RAM): từ <strong>130 triệu đồng</strong>.</li>
        </ul>

        <p>
            RTX Spark hứa hẹn sẽ tạo ra làn sóng mới trong thị trường laptop AI —
            nơi hiệu năng và tính di động không còn phải đánh đổi.
            Đón xem các bài đánh giá chi tiết trên Smart Shopping Cart trong thời gian tới!
        </p>
    `
},

{
    id: 9,
    title: "MÃ GIẢM GIÁ THÁNG 9: FREESHIP TOÀN QUỐC CHO ĐƠN TỪ 200K",
    image: "../assets/images/200kfreeship.png",
    date: "22/09/2026",
    category: "khuyenmai",
    description: "Nhập mã SHIPFREE để được miễn phí vận chuyển toàn quốc cho mọi đơn hàng từ 200.000đ. Áp dụng đến hết 30/09/2026.",
    content: `
        <p>
            Nhằm tri ân khách hàng trong tháng 9,
            <strong>Smart Shopping Cart</strong> tung ra chương trình
            <strong>Freeship toàn quốc</strong> — miễn phí vận chuyển cho mọi đơn hàng
            từ 200.000đ. Chương trình áp dụng cho tất cả tỉnh thành trên cả nước,
            không giới hạn số lần sử dụng.
        </p>

        <div class="ma-giam-gia">
            <div class="label">Mã giảm giá</div>
            <div class="code">SHIPFREE</div>
        </div>

        <h3>1. Thông tin chương trình</h3>
        <table class="bang">
            <tbody>
                <tr><th>Mã giảm giá</th><td><strong>SHIPFREE</strong></td></tr>
                <tr><th>Ưu đãi</th><td>Miễn phí vận chuyển toàn quốc</td></tr>
                <tr><th>Đơn hàng tối thiểu</th><td>200.000đ</td></tr>
                <tr><th>Phạm vi áp dụng</th><td>Toàn quốc (63 tỉnh thành)</td></tr>
                <tr><th>Thời gian</th><td>Đến hết 30/09/2026</td></tr>
                <tr><th>Số lần sử dụng</th><td>Không giới hạn</td></tr>
            </tbody>
        </table>

        <h3>2. Cách sử dụng</h3>
        <ul>
            <li><strong>Bước 1:</strong> Chọn sản phẩm, thêm vào giỏ hàng.</li>
            <li><strong>Bước 2:</strong> Đảm bảo tổng đơn từ 200.000đ trở lên.</li>
            <li><strong>Bước 3:</strong> Nhập mã <strong>SHIPFREE</strong> vào ô mã giảm giá.</li>
            <li><strong>Bước 4:</strong> Phí vận chuyển được miễn hoàn toàn khi thanh toán.</li>
        </ul>

        <h3>3. Lưu ý</h3>
        <ul>
            <li>Áp dụng cho tất cả đơn vị vận chuyển của Smart Shopping Cart.</li>
            <li>Có thể dùng chung với các mã giảm giá khác.</li>
            <li>Không áp dụng cho đơn hàng hoàn trả hoặc đổi trả.</li>
            <li>Chương trình có thể kết thúc sớm nếu hết ngân sách.</li>
        </ul>

        <p>
            Nhanh tay đặt hàng ngay hôm nay để tận hưởng ưu đãi freeship toàn quốc —
            không lo phí vận chuyển, chỉ lo chọn món yêu thích!
        </p>
    `
},

{
    id: 10,
    title: "POCO C95 PRO RA MẮT TẠI VIỆT NAM: PIN 7.500MAH, SẠC NHANH 45W",
    image: "../assets/images/POCoC95PRO.png",
    date: "02/10/2026",
    category: "sanpham",
    description: "Smartphone POCO C95 Pro vừa được ra mắt tại Việt Nam với pin khủng 7.500mAh, màn hình 6.9 inch 120Hz, sạc nhanh 45W. Giá chỉ 6,49 triệu đồng.",
    content: `
        <p>
            <strong>POCO</strong> vừa chính thức trình làng mẫu smartphone mới nhất
            của mình tại thị trường Việt Nam — <strong>POCO C95 Pro</strong>.
            Đây là chiếc điện thoại thuộc phân khúc tầm trung nhưng sở hữu cấu hình
            ấn tượng, đặc biệt là viên pin khủng 7.500mAh — dung lượng lớn nhất
            trong phân khúc dưới 7 triệu đồng.
        </p>

        <h3>1. Điểm nổi bật</h3>
        <ul>
            <li><strong>Pin 7.500mAh</strong> — dùng thoải mái 2–3 ngày, sạc nhanh 45W đầy pin trong 65 phút.</li>
            <li><strong>Màn hình 6.9 inch</strong> LCD, tần số quét 120Hz, độ sáng 650 nits.</li>
            <li><strong>Chip Snapdragon 7s Gen 3</strong> — hiệu năng ổn định, tiết kiệm điện.</li>
            <li><strong>Camera chính 50MP</strong> + camera phụ 2MP, camera trước 8MP.</li>
            <li><strong>Sạc ngược 18W</strong> — dùng như pin dự phòng cho thiết bị khác.</li>
        </ul>

        <h3>2. Thông số kỹ thuật</h3>
        <table class="bang">
            <tbody>
                <tr><th>Màn hình</th><td>6.9 inch LCD, 120Hz, 1080 x 2400 px</td></tr>
                <tr><th>Chip</th><td>Snapdragon 7s Gen 3</td></tr>
                <tr><th>RAM</th><td>8GB / 12GB</td></tr>
                <tr><th>Bộ nhớ</th><td>128GB / 256GB</td></tr>
                <tr><th>Camera sau</th><td>50MP + 2MP</td></tr>
                <tr><th>Camera trước</th><td>8MP</td></tr>
                <tr><th>Pin</th><td>7.500 mAh</td></tr>
                <tr><th>Sạc nhanh</th><td>45W có dây</td></tr>
                <tr><th>Hệ điều hành</th><td>Android 15 + HyperOS 2</td></tr>
                <tr><th>Chống nước</th><td>IP64</td></tr>
            </tbody>
        </table>

        <h3>3. Giá bán tại Việt Nam</h3>
        <ul>
            <li><strong>POCO C95 Pro 8GB/128GB:</strong> 6.490.000đ.</li>
            <li><strong>POCO C95 Pro 12GB/256GB:</strong> 7.490.000đ.</li>
        </ul>

        <p>
            Máy có mặt tại các cửa hàng bán lẻ trên toàn quốc từ ngày
            <strong>05/10/2026</strong> với 3 màu: Đen, Xanh Dương và Bạc.
        </p>

        <h3>4. Đánh giá sơ bộ</h3>
        <p>
            Với mức giá chỉ từ 6,49 triệu đồng, POCO C95 Pro là lựa chọn tuyệt vời
            cho người dùng cần pin trâu, màn hình lớn và hiệu năng ổn định.
            Đây sẽ là đối thủ đáng gờm trong phân khúc tầm trung tại Việt Nam.
        </p>
    `
},

{
    id: 11,
    title: "HUAWEI MATE90 RA MẮT: CAMERA MODULE CẢM BIẾN ĐẦU TIÊN, ZOOM QUANG 10X",
    image: "../assets/images/HUAWEIMATE90.png",
    date: "01/10/2026",
    category: "sanpham",
    description: "Huawei vừa trình làng Mate90 với camera module cảm biến đầu tiên trên thế giới, hỗ trợ zoom quang học liên tục 10x — bước đột phá về nhiếp ảnh di động.",
    content: `
        <p>
            <strong>Huawei</strong> vừa chính thức ra mắt flagship mới nhất của mình —
            <strong>Mate90</strong> — tại sự kiện ở Thâm Quyến (Trung Quốc).
            Đây là chiếc smartphone được giới công nghệ chờ đợi nhất năm 2026 nhờ
            công nghệ camera đột phá chưa từng xuất hiện trên bất kỳ thiết bị di động nào.
        </p>

        <h3>1. Camera module cảm biến — bước đột phá</h3>
        <p>
            Điểm nhấn lớn nhất của Huawei Mate90 là
            <strong>camera module cảm biến đầu tiên trên thế giới</strong>.
            Thay vì dùng thấu kính truyền thống, camera này sử dụng một cảm biến lớn
            có khả năng thay đổi tiêu cự linh hoạt, cho phép
            <strong>zoom quang học liên tục 10x</strong> mà không mất chi tiết.
        </p>
        <p>Ngoài ra, Mate90 còn được trang bị:</p>
        <ul>
            <li>Camera chính <strong>50MP</strong> khẩu độ f/1.4–f/4.0 (biến thiên).</li>
            <li>Camera siêu rộng <strong>40MP</strong> góc 120°.</li>
            <li>Camera tele <strong>48MP</strong> zoom quang 10x.</li>
            <li>Camera trước <strong>13MP</strong> + cảm biến 3D.</li>
        </ul>

        <h3>2. Thông số kỹ thuật</h3>
        <table class="bang">
            <tbody>
                <tr><th>Màn hình</th><td>6.8 inch LTPO OLED, 120Hz, 2.500 nits</td></tr>
                <tr><th>Chip</th><td>Kirin 9100 (tiến trình 3nm)</td></tr>
                <tr><th>RAM</th><td>12GB / 16GB</td></tr>
                <tr><th>Bộ nhớ</th><td>256GB / 512GB / 1TB</td></tr>
                <tr><th>Camera sau</th><td>50MP + 40MP + 48MP (zoom 10x)</td></tr>
                <tr><th>Camera trước</th><td>13MP + 3D sensor</td></tr>
                <tr><th>Pin</th><td>5.200 mAh</td></tr>
                <tr><th>Sạc nhanh</th><td>100W có dây / 50W không dây</td></tr>
                <tr><th>Hệ điều hành</th><td>HarmonyOS 5.0</td></tr>
                <tr><th>Chống nước</th><td>IP68</td></tr>
            </tbody>
        </table>

        <h3>3. Giá bán và ngày mở bán</h3>
        <ul>
            <li><strong>Huawei Mate90 12GB/256GB:</strong> 19.990.000đ.</li>
            <li><strong>Huawei Mate90 16GB/512GB:</strong> 23.990.000đ.</li>
            <li><strong>Huawei Mate90 Pro 16GB/1TB:</strong> 29.990.000đ.</li>
        </ul>
        <p>
            Máy dự kiến mở bán tại thị trường Việt Nam từ
            <strong>tháng 11/2026</strong> với 4 màu: Đen, Trắng, Xanh Lục và Vàng Đồng.
        </p>

        <h3>4. Đánh giá sơ bộ</h3>
        <p>
            Huawei Mate90 là minh chứng cho thấy Huawei vẫn là một trong những hãng
            dẫn đầu về công nghệ camera di động. Camera module cảm biến với zoom quang
            10x liên tục là bước tiến vượt bậc so với các đối thủ. Tuy nhiên, việc thiếu
            dịch vụ Google vẫn là rào cản lớn với người dùng Việt Nam.
        </p>
    `
},

{
    id: 12,
    title: "COMBO TIẾT KIỆM: MUA 2 TẶNG 1 CHO PHỤ KIỆN ĐIỆN THOẠI",
    image: "../assets/images/phukiendienthoai.png",
    date: "19/09/2026",
    category: "khuyenmai",
    description: "Áp dụng cho sạc dự phòng, cáp sạc, ốp lưng, kính cường lực. Mua 2 sản phẩm bất kỳ nhận ngay 1 sản phẩm miễn phí.",
    content: `
        <p>
            <strong>Smart Shopping Cart</strong> mang đến chương trình khuyến mãi cực hot
            cho tất cả khách hàng yêu thích phụ kiện điện thoại:
            <strong>Mua 2 tặng 1</strong>. Chương trình áp dụng cho toàn bộ danh mục
            phụ kiện, không giới hạn số lần mua.
        </p>

        <div class="combo">
            <div class="label">Ưu đãi đặc biệt</div>
            <div class="code">MUA 2 TẶNG 1</div>
        </div>

        <h3>1. Sản phẩm áp dụng</h3>
        <table class="bang">
            <tbody>
                <tr><th>Ốp lưng</th><td>Mọi loại ốp lưng cho iPhone, Samsung, Xiaomi, Oppo</td></tr>
                <tr><th>Kính cường lực</th><td>Kính cường lực full màn hình, chống vân tay</td></tr>
                <tr><th>Cáp sạc</th><td>Cáp Type-C, Lightning, Micro USB</td></tr>
                <tr><th>Sạc dự phòng</th><td>Pin sạc dự phòng 10.000mAh – 20.000mAh</td></tr>
                <tr><th>Củ sạc</th><td>Củ sạc nhanh 20W – 65W</td></tr>
                <tr><th>Giá đỡ điện thoại</th><td>Giá đỡ để bàn, giá đỡ xe hơi</td></tr>
            </tbody>
        </table>

        <h3>2. Cách thức áp dụng</h3>
        <ul>
            <li><strong>Bước 1:</strong> Chọn 2 sản phẩm bất kỳ trong danh mục phụ kiện.</li>
            <li><strong>Bước 2:</strong> Thêm vào giỏ hàng và tiến hành thanh toán.</li>
            <li><strong>Bước 3:</strong> Chọn 1 sản phẩm miễn phí (giá trị bằng hoặc thấp hơn sản phẩm rẻ nhất trong 2 sản phẩm đã chọn).</li>
            <li><strong>Bước 4:</strong> Hệ thống tự động trừ tiền sản phẩm tặng khi xác nhận đơn hàng.</li>
        </ul>

        <h3>3. Lưu ý</h3>
        <ul>
            <li>Sản phẩm tặng có giá trị bằng hoặc thấp hơn sản phẩm rẻ nhất trong 2 sản phẩm đã mua.</li>
            <li>Áp dụng cho tất cả khách hàng, không giới hạn số lần mua.</li>
            <li>Có thể dùng chung với mã freeship SHIPFREE.</li>
            <li>Không áp dụng đồng thời với các chương trình giảm giá khác.</li>
        </ul>

        <h3>4. Ví dụ minh họa</h3>
        <ul>
            <li>Mua ốp lưng 150.000đ + cáp sạc 100.000đ → Tặng kính cường lực 100.000đ.</li>
            <li>Mua sạc dự phòng 500.000đ + củ sạc 200.000đ → Tặng cáp sạc 200.000đ.</li>
            <li>Mua 2 ốp lưng 150.000đ → Tặng 1 ốp lưng 150.000đ.</li>
        </ul>

        <p>
            Chương trình diễn ra đến hết ngày <strong>30/09/2026</strong>.
            Nhanh tay mua sắm để nhận ưu đãi cực hấp dẫn!
        </p>
    `
},

{
    id: 13,
    title: "HỆ THỐNG KHO HÀNG MỚI TẠI TP.HCM: GIAO HÀNG TRONG 2 GIỜ",
    image: "../assets/images/khohang.png",
    date: "18/09/2026",
    category: "thongtin",
    description: "Smart Shopping Cart khai trương kho vận mới tại TP.HCM, rút ngắn thời gian giao hàng nội thành xuống chỉ còn 2 giờ.",
    content: `
        <p>
            <strong>Smart Shopping Cart</strong> chính thức khai trương trung tâm phân phối mới tại
            <strong>Khu công nghệ cao Quận 9, TP.HCM</strong> với tổng diện tích lên đến
            <strong>15.000 m²</strong>. Đây là kho vận lớn nhất của công ty kể từ khi thành lập,
            giúp rút ngắn thời gian giao hàng nội thành TP.HCM xuống chỉ còn <strong>2 giờ</strong>.
        </p>

        <h3>1. Thông tin kho vận mới</h3>
        <table class="bang">
            <tbody>
                <tr><th>Địa chỉ</th><td>Khu Công nghệ cao, Quận 9, TP.HCM</td></tr>
                <tr><th>Diện tích</th><td>15.000 m²</td></tr>
                <tr><th>Công suất</th><td>50.000 đơn hàng/ngày</td></tr>
                <tr><th>Nhân sự</th><td>200+ nhân viên vận hành</td></tr>
                <tr><th>Thời gian giao nội thành</th><td>2 giờ</td></tr>
                <tr><th>Thời gian giao ngoại thành</th><td>4–6 giờ</td></tr>
            </tbody>
        </table>

        <h3>2. Phạm vi giao hàng nhanh 2 giờ</h3>
        <ul>
            <li><strong>Quận 1, 3, 5, 10:</strong> giao trong 2 giờ.</li>
            <li><strong>Quận 2, 7, Bình Thạnh, Phú Nhuận:</strong> giao trong 2–3 giờ.</li>
            <li><strong>Quận 9, Thủ Đức, Tân Bình, Gò Vấp:</strong> giao trong 3–4 giờ.</li>
            <li><strong>Huyện ngoại thành (Củ Chi, Hóc Môn, Bình Chánh):</strong> giao trong 4–6 giờ.</li>
        </ul>

        <h3>3. Lợi ích cho khách hàng</h3>
        <ul>
            <li>Nhận hàng nhanh chóng, đặc biệt với sản phẩm cần gấp.</li>
            <li>Giảm phí vận chuyển cho đơn hàng nội thành.</li>
            <li>Dễ dàng đổi trả trực tiếp tại kho trong trường hợp cần thiết.</li>
            <li>Hỗ trợ giao hàng vào buổi tối (đến 21h) và cuối tuần.</li>
        </ul>

        <h3>4. Mở rộng trong tương lai</h3>
        <p>Sau TP.HCM, Smart Shopping Cart dự kiến sẽ mở thêm 2 kho vận lớn tại:</p>
        <ul>
            <li><strong>Hà Nội:</strong> khai trương tháng 12/2026.</li>
            <li><strong>Đà Nẵng:</strong> khai trương tháng 03/2027.</li>
        </ul>

        <p>
            Với hệ thống kho vận ngày càng mở rộng, Smart Shopping Cart cam kết mang đến
            trải nghiệm mua sắm nhanh chóng, tiện lợi và tiết kiệm nhất cho khách hàng trên toàn quốc.
        </p>
    `
},

{
    id: 14,
    title: "SĂN MÃ GIẢM GIÁ MỖI NGÀY: LÊN ĐẾN 100.000Đ",
    image: "../assets/images/ma100k.png",
    date: "17/09/2026",
    category: "khuyenmai",
    description: "Mỗi ngày, Smart Shopping Cart tung ra 100 mã giảm giá ngẫu nhiên từ 20.000đ đến 100.000đ. Theo dõi fanpage để không bỏ lỡ!",
    content: `
        <p>
            <strong>Smart Shopping Cart</strong> chính thức triển khai chương trình
            <strong>"Săn mã giảm giá mỗi ngày"</strong> — chương trình khuyến mãi dài hạn
            dành cho tất cả khách hàng, với 100 mã giảm giá được phát ngẫu nhiên mỗi ngày,
            giá trị từ 20.000đ đến 100.000đ.
        </p>

        <h3>1. Thông tin chương trình</h3>
        <table class="bang">
            <tbody>
                <tr><th>Số lượng mã/ngày</th><td>100 mã</td></tr>
                <tr><th>Giá trị mã</th><td>20.000đ – 100.000đ</td></tr>
                <tr><th>Hình thức</th><td>Phát ngẫu nhiên qua fanpage và app</td></tr>
                <tr><th>Thời gian phát</th><td>9h, 12h, 15h, 20h mỗi ngày</td></tr>
                <tr><th>Đối tượng</th><td>Tất cả khách hàng đã đăng ký tài khoản</td></tr>
                <tr><th>Thời hạn sử dụng</th><td>7 ngày kể từ khi nhận</td></tr>
            </tbody>
        </table>

        <h3>2. Cách săn mã hiệu quả</h3>
        <ul>
            <li><strong>Theo dõi fanpage:</strong> Bật thông báo "See First" để nhận bài đăng phát mã sớm nhất.</li>
            <li><strong>Cài đặt app:</strong> Bật push notification để nhận thông báo khi có mã mới.</li>
            <li><strong>Đúng giờ:</strong> Vào app/fanpage đúng 4 khung giờ vàng: 9h, 12h, 15h, 20h.</li>
            <li><strong>Nhanh tay:</strong> Mã có số lượng giới hạn, hết trong vòng 1–2 phút.</li>
            <li><strong>Chia sẻ:</strong> Mời bạn bè cùng săn để tăng cơ hội nhận mã giá trị cao.</li>
        </ul>

        <h3>3. Các mệnh giá mã giảm giá</h3>
        <ul>
            <li><strong>Mã 20.000đ:</strong> Áp dụng cho đơn từ 100.000đ.</li>
            <li><strong>Mã 50.000đ:</strong> Áp dụng cho đơn từ 300.000đ.</li>
            <li><strong>Mã 70.000đ:</strong> Áp dụng cho đơn từ 500.000đ.</li>
            <li><strong>Mã 100.000đ:</strong> Áp dụng cho đơn từ 800.000đ.</li>
        </ul>

        <h3>4. Lưu ý</h3>
        <ul>
            <li>Mỗi tài khoản chỉ được nhận tối đa 1 mã/ngày.</li>
            <li>Mã không có giá trị quy đổi thành tiền mặt.</li>
            <li>Không áp dụng đồng thời với các mã giảm giá khác (trừ SHIPFREE).</li>
            <li>Smart Shopping Cart có quyền thay đổi thể lệ mà không cần báo trước.</li>
        </ul>

        <p>
            Đừng bỏ lỡ cơ hội tiết kiệm mỗi ngày! Hãy theo dõi fanpage và bật thông báo
            ngay hôm nay để săn được những mã giảm giá giá trị nhất.
        </p>
    `
},

{
    id: 15,
    title: "TDK TRÌNH DIỄN KÍNH THÔNG MINH ĐẦU TIÊN THẾ GIỚI VỚI CÔNG NGHỆ CHIẾU VÕNG MẠC",
    image: "../assets/images/TDKSmartGlasses.png",
    date: "02/10/2026",
    category: "sanpham",
    description: "TDK giới thiệu kính thông minh sử dụng gương siêu quang học 150nm, chiếu hình ảnh trực tiếp lên võng mạc, bảo vệ quyền riêng tư. Sẽ demo tại CEATEC 2026.",
    content: `
        <p>
            <strong>TDK</strong> vừa gây chấn động giới công nghệ khi công bố nguyên mẫu
            <strong>kính thông minh đầu tiên trên thế giới</strong> sử dụng công nghệ
            <strong>chiếu võng mạc</strong> (retinal projection). Khác với mọi kính AR/VR
            hiện có trên thị trường, thiết bị này chiếu hình ảnh trực tiếp lên võng mạc
            người dùng thông qua gương siêu quang học 150nm — mỏng hơn sợi tóc người.
        </p>

        <h3>1. Công nghệ đột phá</h3>
        <p>Điểm khác biệt lớn nhất của TDK Smart Glasses so với các sản phẩm cùng loại:</p>
        <ul>
            <li><strong>Chiếu trực tiếp lên võng mạc:</strong> Hình ảnh được chiếu thẳng vào mắt, không qua màn hình trung gian.</li>
            <li><strong>Gương siêu quang học 150nm:</strong> Mỏng hơn sợi tóc người 500 lần, cho phép thiết kế kính gọn nhẹ như kính thường.</li>
            <li><strong>Bảo vệ quyền riêng tư tuyệt đối:</strong> Người xung quanh không thể nhìn thấy nội dung bạn đang xem.</li>
            <li><strong>Không gây mỏi mắt:</strong> Hình ảnh ở vô cực, mắt không cần điều tiết — an toàn cho thị lực.</li>
            <li><strong>Tiết kiệm pin:</strong> Tiêu thụ điện năng chỉ bằng 1/10 so với kính AR truyền thống.</li>
        </ul>

        <h3>2. Thông số kỹ thuật</h3>
        <table class="bang">
            <tbody>
                <tr><th>Trọng lượng</th><td>Chỉ 45g (tương đương kính cận thông thường)</td></tr>
                <tr><th>Độ phân giải</th><td>Full HD 1080p cho mỗi mắt</td></tr>
                <tr><th>Tần số quét</th><td>90Hz</td></tr>
                <tr><th>Góc nhìn</th><td>50° (FOV)</td></tr>
                <tr><th>Pin</th><td>8 giờ sử dụng liên tục</td></tr>
                <tr><th>Kết nối</th><td>Bluetooth 5.3, Wi-Fi 6E</td></tr>
                <tr><th>Điều khiển</th><td>Cử chỉ tay, giọng nói, cảm ứng trên gọng kính</td></tr>
                <tr><th>Hệ điều hành</th><td>TDK OS (dựa trên Android)</td></tr>
            </tbody>
        </table>

        <h3>3. Ứng dụng thực tế</h3>
        <ul>
            <li><strong>Y tế:</strong> Bác sĩ phẫu thuật xem thông tin bệnh nhân ngay trong ca mổ.</li>
            <li><strong>Giáo dục:</strong> Học sinh xem bài giảng 3D trực quan, không cần màn hình.</li>
            <li><strong>Công nghiệp:</strong> Kỹ sư xem bản vẽ kỹ thuật ngay tại công trường.</li>
            <li><strong>Giải trí:</strong> Xem phim, chơi game với màn hình ảo 200 inch.</li>
            <li><strong>Du lịch:</strong> Dịch real-time biển hiệu, chỉ đường ngay trước mắt.</li>
        </ul>

        <h3>4. Thời gian ra mắt</h3>
        <p>
            TDK sẽ chính thức trình diễn nguyên mẫu tại triển lãm công nghệ
            <strong>CEATEC 2026</strong> diễn ra tại Tokyo (Nhật Bản) từ ngày 15–18/10/2026.
            Phiên bản thương mại dự kiến ra mắt vào <strong>quý 3/2027</strong> với giá
            tham khảo khoảng <strong>1.500 USD</strong> (~38 triệu đồng).
        </p>

        <h3>5. Đánh giá sơ bộ</h3>
        <p>
            TDK Smart Glasses được xem là bước đột phá trong lĩnh vực kính thông minh.
            Công nghệ chiếu võng mạc không chỉ được kỳ vọng giải quyết vấn đề mỏi mắt
            mà còn mở ra những khả năng mới cho thiết bị đeo thông minh. Nếu TDK giữ
            đúng tiến độ, đây có thể là đối thủ đáng chú ý của Apple Vision Pro và
            Meta Ray-Ban trong tương lai gần.
        </p>
    `
},
];


// Khởi tạo dữ liệu tin tức nếu chưa có trong localStorage
(function khoiTaoTinTuc() {
    const duLieuDaLuu = localStorage.getItem(NEWS_KEY);

    if (duLieuDaLuu === null) {
        localStorage.setItem(
            NEWS_KEY,
            JSON.stringify(DEFAULT_NEWS)
        );

        console.log("Đã khởi tạo dữ liệu tin tức mặc định.");
    }
})();