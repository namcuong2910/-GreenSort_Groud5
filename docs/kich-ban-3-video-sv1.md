# KỊCH BẢN CHI TIẾT 03 VIDEO MINH CHỨNG OBS DÀNH CHO SV1
**Học phần:** CSE122 - Phát triển ứng dụng Web cơ bản (Phiên bản Barem V2 - 2026)  
**Giảng viên chấm thi:** ThS. Kiều Tuấn Dũng & ThS. Tạ Chí Hiếu (TLU)  
**Sinh viên thực hiện:** Bùi Văn Nam Cường – Mã SV: `2551060590`  
**Vai trò:** Sinh viên 1 (SV1 - Nhóm trưởng) – Phân hệ Người dân & Xác thực  
**Nhánh Git làm việc:** `Bui_Van_Nam_Cuong`  
**Repository:** `https://github.com/namcuong2910/-GreenSort_Groud5`  

---

## TỔNG QUAN 03 VIDEO MINH CHỨNG CỦA SV1

| STT | Tên file video chuẩn Barem | Màn hình phụ trách | Mã Task ID | Tính năng kỹ thuật nổi bật |
| :---: | :--- | :--- | :---: | :--- |
| **01** | `SV1-01-cu-dan-tra-cuu-rac.mp4` | `cu-dan-tra-cuu-rac.html` | `GS-RES-07` | Trợ lý phân loại rác AI-1 (NLP), Fallback/Uncertainty UX, chống XSS `escapeHTML()` |
| **02** | `SV1-02-cu-dan-diem-thu-gom.mp4` | `cu-dan-diem-thu-gom.html` | `GS-RES-08` | Mạng lưới điểm thu gom, Cảm biến IoT mức đầy thùng rác, Báo thùng đầy, Chỉ đường GPS |
| **03** | `SV1-03-cu-dan-dat-lich-thu-gom.mp4` | `cu-dan-dat-lich-thu-gom.html` | `GS-RES-09` | Form đặt lịch hẹn, Thuật toán chấm điểm ưu tiên SLA AI-2, Form Validation, Real-time Sync |

> [!IMPORTANT]
> **QUY TẮC BẮT BUỘC TRONG MỖI VIDEO (THEO TRANG 21 BAREM V2):**
> - Bật webcam thấy rõ khuôn mặt sinh viên Bùi Văn Nam Cường từ đầu đến cuối video.
> - Giọng nói thật của Nam Cường (không dùng AI, không để video câm).
> - Mỗi video dài khoảng 3:30 đến 4:30 phút, đi đủ **8 bước chuẩn hóa**.

---

# VIDEO 1: TRA CỨU PHÂN LOẠI RÁC & TRỢ LÝ THÔNG MINH AI-1
* **Tên file lưu trữ:** `SV1-01-cu-dan-tra-cuu-rac.mp4`
* **Màn hình demo:** `cu-dan-tra-cuu-rac.html`
* **Mã công việc:** `GS-RES-07` | **Nhánh:** `Bui_Van_Nam_Cuong`

### KỊCH BẢN THAO TÁC & LỜI THOẠI CHI TIẾT TỪNG GIÂY (VIDEO 1):

| Mốc thời gian | Bước theo Barem | Thao tác trên màn hình | Lời thoại chi tiết của Nam Cường (Nói vào micro) |
| :---: | :--- | :--- | :--- |
| **0:00 – 0:30** | **Bước 1: Chào hỏi & Nhận diện** | Bật OBS, mở webcam góc dưới bên phải màn hình. Để màn hình Desktop. | *"Em xin kính chào Thầy Kiều Tuấn Dũng và Thầy Tạ Chí Hiếu! Em tên là Bùi Văn Nam Cường, MSSV 2551060590, là sinh viên 1 kiêm nhóm trưởng nhóm BTL-05 đề tài GreenSort. Trong video đầu tiên này, em xin trình bày minh chứng quá trình phát triển màn hình Cư dân tra cứu phân loại rác thông minh tích hợp Trợ lý AI-1, mã công việc GS-RES-07 trên nhánh Git Bui_Van_Nam_Cuong."* |
| **0:30 – 1:00** | **Bước 2: Đối chiếu Mockup Figma** | Mở trình duyệt, chuyển sang tab Figma thiết kế GreenSort. Phóng to màn hình Cư dân tra cứu rác. | *"Trước hết, đây là bản vẽ thiết kế giao diện trên Figma của em. Bố cục gồm thanh Header chuẩn thương hiệu GreenSort, khu vực trung tâm là khung tìm kiếm trợ lý AI nổi bật với hiệu ứng đổ bóng, và phía dưới là lưới danh mục 4 nhóm rác quy chuẩn của Bộ Tài nguyên & Môi trường."* |
| **1:00 – 2:00** | **Bước 3 & 4: Giải thích Code trong VS Code** | Mở VS Code tệp `cu-dan-tra-cuu-rac.html` và tệp `js/chinh.js`. | *"Tiếp theo, em mở file cu-dan-tra-cuu-rac.html trong VS Code:<br>- Về ngữ nghĩa HTML5: Trang tuân thủ đúng chuẩn của barem với đúng 1 thẻ main tại dòng 165 và đúng 1 thẻ h1 duy nhất tại dòng 175.<br>- Về CSS: Em dùng hệ thống lưới Bootstrap 5.3 kết hợp file giao-dien.css tạo các card bo góc rounded-4 hiện đại.<br>- Về JavaScript trong file js/chinh.js: Hàm xuLyGoiYPhanLoai() xử lý đối sánh từ khóa rác thông minh. Em đặc biệt xử lý trường hợp người dùng nhập dưới 3 ký tự để hiển thị trạng thái Uncertainty UX với 4 nút gợi ý nhanh theo tiêu chí 6.3. Toàn bộ chuỗi hiển thị đều được bọc qua hàm escapeHTML() để chống triệt để lỗ hổng XSS theo quy định VP-02 của thầy."* |
| **2:00 – 2:40** | **Bước 5: Chỉnh sửa trực tiếp (Live Edit)** | Trong `cu-dan-tra-cuu-rac.html` tại dòng 212, tìm nút bấm Phân tích ngay, đổi class từ `btn-success` sang `btn-primary` và thêm icon tia sét. | *(Vừa gõ vừa nói)*: *"Bây giờ em thực hiện chỉnh sửa trực tiếp trên mã nguồn: Em đổi màu nút Phân tích ngay sang class btn-primary màu xanh dương và thêm icon tia sét bi-lightning-charge-fill. Em nhấn Ctrl+S lưu lại."* |
| **2:40 – 3:30** | **Bước 6: Chạy thử & Test Responsive F12** | Mở trình duyệt F5 trang `cu-dan-tra-cuu-rac.html`. Bấm F12 chuyển Responsive 320px. Gõ thử từ khóa. | *"Quay lại trình duyệt: Nút bấm đã cập nhật màu xanh dương mới. Em thử nhập 'Pin con thỏ cũ', bấm Phân tích: Trạng thái loading xuất hiện 900ms rồi hiển thị kết quả Thùng Đỏ Rác Nguy Hại độ tin cậy 98.5%.<br>Em thử gõ chữ 'a' ngắn: Hệ thống lập tức kích hoạt hộp thoại Uncertainty cảnh báo tin cậy thấp kèm 4 gợi ý chuẩn.<br>Em nhấn F12 co về 320px màn hình điện thoại: Giao diện co giãn mượt mà, không bị tràn màn hình."* |
| **3:30 – 4:15** | **Bước 7 & 8: Git Commit & Kết thúc** | Mở Terminal trong VS Code, gõ các lệnh Git. | *(Thao tác gõ lệnh)*: <br>`git status`<br>`git add .`<br>`git commit -m "feat(resident): live edit AI analyze button styling and verify XSS escape"`<br>`git push origin Bui_Van_Nam_Cuong`<br>*(Nói vào micro)*: *"Em đã commit thành công với mã commit vừa tạo, mã công việc Task ID GS-RES-07 trên nhánh Bui_Van_Nam_Cuong. Em xin kết thúc video số 1 tại đây. Cảm ơn hai thầy!"* |

---

# VIDEO 2: MẠNG LƯỚI ĐIỂM THU GOM & CẢM BIẾN IoT THỜI GIAN THỰC
* **Tên file lưu trữ:** `SV1-02-cu-dan-diem-thu-gom.mp4`
* **Màn hình demo:** `cu-dan-diem-thu-gom.html`
* **Mã công việc:** `GS-RES-08` | **Nhánh:** `Bui_Van_Nam_Cuong`

### KỊCH BẢN THAO TÁC & LỜI THOẠI CHI TIẾT TỪNG GIÂY (VIDEO 2):

| Mốc thời gian | Bước theo Barem | Thao tác trên màn hình | Lời thoại chi tiết của Nam Cường (Nói vào micro) |
| :---: | :--- | :--- | :--- |
| **0:00 – 0:30** | **Bước 1: Chào hỏi & Nhận diện** | Bật OBS, mở webcam góc dưới bên phải màn hình. Để màn hình Desktop. | *"Em xin kính chào Thầy Kiều Tuấn Dũng và Thầy Tạ Chí Hiếu! Em là Bùi Văn Nam Cường, MSSV 2551060590, sinh viên 1 của nhóm BTL-05 GreenSort. Trong video thứ 2 này, em xin trình bày minh chứng màn hình Mạng lưới Điểm thu gom và Giám sát cảm biến mức đầy thùng rác IoT thời gian thực, mã công việc GS-RES-08 trên nhánh Bui_Van_Nam_Cuong."* |
| **0:30 – 1:00** | **Bước 2: Đối chiếu Mockup Figma** | Mở Figma chuyển sang Frame thiết kế Mạng lưới điểm thu gom. | *"Trên bản vẽ Figma, màn hình này được em thiết kế trực quan gồm bản đồ số mô phỏng vị trí các trạm thu gom trên địa bàn Hà Nội, bộ lọc theo quận huyện, và danh sách các thẻ trạm gom hiển thị mức đầy cảm biến IoT kèm giờ mở cửa."* |
| **1:00 – 2:00** | **Bước 3 & 4: Giải thích Code trong VS Code** | Mở VS Code tệp `cu-dan-diem-thu-gom.html` và `js/du-lieu.js`. | *"Trong VS Code tệp cu-dan-diem-thu-gom.html:<br>- Cấu trúc HTML5 chuẩn có đúng 1 thẻ main tại dòng 110 và 1 thẻ h1 duy nhất tại dòng 115.<br>- Về JavaScript: Hàm hienThiDanhSachDiemGom() đọc dữ liệu từ KhoDuLieu.collectionPoints. Dữ liệu cảm biến IoT được hiển thị trực quan qua thanh tiến độ progress-bar với 3 dải màu: Xanh lá dưới 70%, Vàng cam từ 70 đến 85%, và Đỏ cảnh báo trên 85%.<br>- Em cài đặt hàm baoCaoThungRacDay() cho phép người dân bấm báo đầy rác, hệ thống sẽ lập tức cập nhật vào LocalStorage và đồng bộ sang màn hình Điều phối viên."* |
| **2:00 – 2:40** | **Bước 5: Chỉnh sửa trực tiếp (Live Edit)** | Trong `cu-dan-diem-thu-gom.html`, tìm đến nhãn hiển thị cảm biến IoT, thêm biểu đồ sóng phát thanh `bi-broadcast` hoặc đổi màu badge. | *(Vừa gõ vừa nói)*: *"Em thực hiện chỉnh sửa trực tiếp trên code: Em thêm huy hiệu 'Cảm biến LoRaWAN IoT v2.0' vào đầu danh sách điểm gom để làm nổi bật công nghệ cảm biến kết nối thời gian thực. Em nhấn Ctrl+S."* |
| **2:40 – 3:30** | **Bước 6: Chạy thử & Test Responsive F12** | Mở trình duyệt F5 trang `cu-dan-diem-thu-gom.html`. Bấm nút 'Báo đầy rác', bấm 'Chỉ đường GPS'. Nhấn F12 co về 375px. | *"Quay lại trình duyệt: Huy hiệu công nghệ LoRaWAN đã hiển thị. Em bấm nút 'Báo đầy rác' tại Điểm thu gom TLU: Mức đầy lập tức tăng lên 95% và thanh chuyển sang màu đỏ báo động.<br>Em bấm nút 'Chỉ đường GPS': Bản đồ điều hướng hiển thị vị trí chuẩn xác.<br>Bấm F12 co màn hình về kích thước điện thoại: Các cột thẻ điểm gom tự động xếp chồng dạng 1 cột đơn, các nút bấm to rõ ràng dễ chạm bằng tay."* |
| **3:30 – 4:15** | **Bước 7 & 8: Git Commit & Kết thúc** | Mở Terminal trong VS Code, gõ các lệnh Git. | *(Thao tác gõ lệnh)*: <br>`git status`<br>`git add .`<br>`git commit -m "feat(resident): add LoRaWAN IoT badge and verify fill-level sensor update"`<br>`git push origin Bui_Van_Nam_Cuong`<br>*(Nói vào micro)*: *"Em đã commit và push thành công lên nhánh Bui_Van_Nam_Cuong, mã công việc GS-RES-08. Em xin kết thúc video số 2. Cảm ơn hai thầy!"* |

---

# VIDEO 3: ĐẶT LỊCH THU GOM RÁC CỒNG KỀNH & THUẬT TOÁN AI-2 SLA
* **Tên file lưu trữ:** `SV1-03-cu-dan-dat-lich-thu-gom.mp4`
* **Màn hình demo:** `cu-dan-dat-lich-thu-gom.html`
* **Mã công việc:** `GS-RES-09` | **Nhánh:** `Bui_Van_Nam_Cuong`

### KỊCH BẢN THAO TÁC & LỜI THOẠI CHI TIẾT TỪNG GIÂY (VIDEO 3):

| Mốc thời gian | Bước theo Barem | Thao tác trên màn hình | Lời thoại chi tiết của Nam Cường (Nói vào micro) |
| :---: | :--- | :--- | :--- |
| **0:00 – 0:30** | **Bước 1: Chào hỏi & Nhận diện** | Bật OBS, mở webcam góc dưới bên phải màn hình. Để màn hình Desktop. | *"Em xin kính chào Thầy Kiều Tuấn Dũng và Thầy Tạ Chí Hiếu! Em là Bùi Văn Nam Cường, MSSV 2551060590, sinh viên 1 của nhóm BTL-05 GreenSort. Trong video thứ 3 này, em xin chứng minh quá trình phát triển màn hình Đặt lịch thu gom rác cồng kềnh tích hợp thuật toán chấm điểm ưu tiên SLA AI-2 và đồng bộ đa tab Real-time, mã công việc GS-RES-09 trên nhánh Bui_Van_Nam_Cuong."* |
| **0:30 – 1:00** | **Bước 2: Đối chiếu Mockup Figma** | Mở Figma chuyển sang Frame Đặt lịch thu gom rác cồng kềnh. | *"Trên bản vẽ Figma, màn hình được chia làm 2 cột: Cột bên trái là Form đặt lịch hẹn với ô tính điểm ưu tiên tự động nhảy theo thời gian thực; Cột bên phải là danh sách lịch sử các yêu cầu đã gửi kèm trạng thái xử lý."* |
| **1:00 – 2:00** | **Bước 3 & 4: Giải thích Code trong VS Code** | Mở VS Code tệp `cu-dan-dat-lich-thu-gom.html`. | *"Trong VS Code tệp cu-dan-dat-lich-thu-gom.html:<br>- Cấu trúc HTML5 chuẩn có đúng 1 thẻ main và đúng 1 thẻ h1 duy nhất.<br>- Về thuật toán AI-2: Hàm tinhDiemUuTien() tự động tính điểm theo công thức kết hợp loại rác (Nguy hại 50đ, Cồng kềnh 35đ, Tái chế 20đ) cộng với khối lượng ước tính và mức độ khẩn cấp. Điểm từ 70 trở lên được phân vào luồng P1 Khẩn cấp cam kết thu gom trong 4 giờ.<br>- Về tính năng điểm thưởng Bonus: Em đã cài đặt sự kiện window.addEventListener('storage', ...) để đồng bộ Real-time giữa các tab. Khi người dân đặt lịch ở đây, bảng điều phối ở tab của bạn Đức Anh tự động nhảy đơn mới mà không cần F5."* |
| **2:00 – 2:40** | **Bước 5: Chỉnh sửa trực tiếp (Live Edit)** | Trong `cu-dan-dat-lich-thu-gom.html`, tìm đến ô hiển thị điểm ưu tiên, thêm icon chiếc khiên bảo vệ `bi-shield-check` hoặc chỉnh màu nhãn. | *(Vừa gõ vừa nói)*: *"Em thực hiện chỉnh sửa trực tiếp trên code: Em thêm icon bi-clock-history vào nhãn Hạn cam kết dịch vụ SLA để làm nổi bật thời gian xử lý đơn hàng. Em nhấn Ctrl+S lưu lại."* |
| **2:40 – 3:30** | **Bước 6: Chạy thử & Test Responsive F12** | Mở trình duyệt F5. Thử để trống form bấm Đặt lịch để thấy Validation lỗi đỏ. Điền đủ thông tin và gửi đơn. Bấm F12 co về 320px. | *"Em quay lại trình duyệt:<br>- Trước hết em thử bấm 'Gửi yêu cầu thu gom' khi chưa nhập: Trình duyệt lập tức kích hoạt Form Validation với viền đỏ và thông báo lỗi theo đúng yêu cầu Tiêu chí 5.1.<br>- Giờ em điền tên 'Bùi Văn Nam Cường', số điện thoại, địa chỉ 'Đại học Thủy Lợi', chọn rác 'Thiết bị điện tử cũ': Điểm ưu tiên tự động nhảy lên 88 điểm (P1 Khẩn cấp). Em bấm Gửi: Đơn hàng lập tức xuất hiện ngay vào cột Lịch sử bên cạnh.<br>- Nhấn F12 co về 320px điện thoại: Bố cục 2 cột tự động chuyển thành 1 cột dọc liên tục, hoàn toàn vừa vặn."* |
| **3:30 – 4:15** | **Bước 7 & 8: Git Commit & Kết thúc** | Mở Terminal trong VS Code, gõ các lệnh Git. | *(Thao tác gõ lệnh)*: <br>`git status`<br>`git add .`<br>`git commit -m "feat(resident): add SLA clock indicator and test real-time booking form validation"`<br>`git push origin Bui_Van_Nam_Cuong`<br>*(Nói vào micro)*: *"Em đã hoàn thành commit và push lên nhánh Bui_Van_Nam_Cuong, mã công việc Task ID GS-RES-09. Em xin chân thành cảm ơn hai thầy đã theo dõi toàn bộ 3 video minh chứng của em!"* |

---
*Tài liệu này được biên soạn độc quyền cho sinh viên Bùi Văn Nam Cường (Nhóm trưởng BTL-05 GreenSort - TLU).*
