# KỊCH BẢN CHI TIẾT QUAY 03 VIDEO MINH CHỨNG OBS (ĐIỀU KIỆN SÀN ĐK4 & MỤC 8.1 BAREM V2)
**Học phần:** CSE122 - Phát triển ứng dụng Web cơ bản  
**Bộ môn:** Công nghệ phần mềm – Khoa CNTT, Trường Đại học Thủy Lợi (TLU)  
**Giảng viên chấm thi:** ThS. Kiều Tuấn Dũng & ThS. Tạ Chí Hiếu  
**Đề tài BTL-05:** GreenSort - Hệ thống phân loại & điều phối thu gom thông minh  
**Nhóm sinh viên thực hiện:**
- **SV1 (Nhóm trưởng):** Bùi Văn Nam Cường (MSSV: `2551060590`) – Phân hệ Người dân & Xác thực
- **SV2:** Nguyễn Xuân Hùng – Phân hệ Thu gom viên
- **SV3:** Trần Đức Anh – Phân hệ Điều phối viên & Quản trị viên

---

## 1. QUY CHUẨN KỸ THUẬT QUAY OBS BẮT BUỘC (THEO TRANG 21 BAREM)

> [!IMPORTANT]
> **4 NGUYÊN TẮC SỐNG CÒN KHI QUAY OBS:**
> 1. **Bắt buộc có Webcam:** Khung hình camera góc dưới bên phải hoặc bên trái, **nhìn rõ khuôn mặt** sinh viên từ đầu đến cuối video (Không có webcam = 0.00đ video đó).
> 2. **Giọng nói thật của chính sinh viên:** Nói to, rõ ràng, tự tin (không dùng giọng AI đọc, không quay im lặng).
> 3. **Thời lượng chuẩn:** Mỗi video kéo dài **3 đến 5 phút**.
> 4. **Đủ 8 bước theo barem:**
>    - Bước 1: Giới thiệu bản thân + Webcam.
>    - Bước 2: Mở bản thiết kế Figma/Canva.
>    - Bước 3: Mở mã nguồn trong VS Code.
>    - Bước 4: Giải thích cấu trúc HTML/CSS và logic JavaScript/DOM.
>    - Bước 5: Thực hiện 01 chỉnh sửa trực tiếp (Live code edit).
>    - Bước 6: Chạy thử trên trình duyệt (F12 kiểm tra Responsive Mobile 320px / 768px).
>    - Bước 7: Mở Terminal gõ `git status`, `git add`, `git commit`, `git push`.
>    - Bước 8: Đọc to Task ID, Branch và mã Commit.

---

## 2. KỊCH BẢN VIDEO 1: DÀNH CHO SV1 (BÙI VĂN NAM CƯỜNG - MSSV: 2551060590)
* **Tên file video khi lưu:** `SV1-01-cu-dan-tra-cuu-rac.mp4`
* **Màn hình thực hiện:** `cu-dan-tra-cuu-rac.html` (Trợ lý AI-1) kết hợp `cu-dan-dat-lich-thu-gom.html` (Thuật toán AI-2 SLA).
* **Nhánh Git:** `Bui_Van_Nam_Cuong` | **Task ID:** `GS-RES-07`

### BẢNG KỊCH BẢN THAO TÁC VÀ LỜI THOẠI TỪNG GIÂY (SV1):

| Thời gian | Bước theo Barem | Hành động trên màn hình máy tính | Lời thoại chi tiết của Nam Cường (Nói vào micro) |
| :---: | :--- | :--- | :--- |
| **0:00 – 0:30** | **Bước 1: Chào hỏi & Nhận diện** | Bật OBS, mở Webcam góc phải. Để màn hình Desktop. | *"Em xin kính chào Thầy Kiều Tuấn Dũng và Thầy Tạ Chí Hiếu! Em tên là Bùi Văn Nam Cường, mã số sinh viên 2551060590, là nhóm trưởng nhóm BTL-05 đề tài GreenSort. Trong video này, em xin trình bày minh chứng quá trình xây dựng màn hình Cư dân tra cứu rác thông minh tích hợp trợ lý AI-1 và đặt lịch thu gom rác cồng kềnh AI-2, mã công việc GS-RES-07 trên nhánh Bui_Van_Nam_Cuong."* |
| **0:30 – 1:00** | **Bước 2: Đối chiếu Figma** | Mở trình duyệt chuyển sang Tab Figma thiết kế GreenSort. Chỉ chuột vào màn hình Tra cứu rác. | *"Đầu tiên, đây là bản thiết kế giao diện trên Figma của em. Bố cục gồm thanh Header điều hướng chuẩn, khung nhập liệu tìm kiếm rác nổi bật, ô hiển thị kết quả phân tích AI, và lưới danh mục 4 nhóm rác theo tiêu chuẩn của Bộ Tài nguyên & Môi trường."* |
| **1:00 – 2:00** | **Bước 3 & 4: Giải thích Code VS Code** | Mở VS Code tệp `cu-dan-tra-cuu-rac.html` và `js/chinh.js`. | *"Tiếp theo, em mở file cu-dan-tra-cuu-rac.html trong VS Code. Về HTML5, trang tuân thủ đúng chuẩn 1 thẻ main duy nhất và 1 thẻ h1 tại tiêu đề chính. Về CSS, em dùng Bootstrap 5.3 kết hợp file giao-dien.css để tạo hiệu ứng bo góc tròn rounded-4 hiện đại.<br>Về JavaScript tại file js/chinh.js: Hàm xuLyGoiYPhanLoai() xử lý nhận diện từ khóa người dùng nhập. Đặc biệt, để chống tấn công XSS theo tiêu chuẩn VP-02 của barem, em đã bọc toàn bộ dữ liệu xuất ra bằng hàm escapeHTML(), đảm bảo mã độc không thể thực thi."* |
| **2:00 – 2:45** | **Bước 5: Chỉnh sửa trực tiếp (Live Edit)** | Trong `cu-dan-tra-cuu-rac.html`, tìm đến ô tìm kiếm hoặc nút bấm, thực hiện sửa 1 chi tiết nhỏ. | *(Vừa gõ vừa nói)*: *"Bây giờ em sẽ thực hiện một chỉnh sửa trực tiếp trên code: Em đổi màu nút Phân tích ngay từ btn-success sang btn-primary và thêm icon tia sét bi-lightning-charge-fill. Em lưu file lại bằng Ctrl+S."* |
| **2:45 – 3:30** | **Bước 6: Chạy thử & Test Responsive** | Mở trình duyệt xem trang `cu-dan-tra-cuu-rac.html`. Bấm F12 chuyển sang Responsive Mobile 320px. Gõ thử 'Pin con thỏ'. | *"Em quay lại trình duyệt, trang đã tự động cập nhật nút màu xanh dương mới. Em nhập thử từ khóa 'Pin con thỏ', bấm phân tích: Hệ thống kích hoạt trạng thái Loading, sau đó hiển thị kết quả Rác nguy hại với độ tin cậy 98.5%.<br>Em nhấn F12 kiểm tra Responsive ở kích thước 320px màn hình điện thoại: Giao diện co giãn mượt mà, không bị vỡ bố cục, chữ đọc rõ ràng."* |
| **3:30 – 4:15** | **Bước 7 & 8: Git Commit & Đọc Task ID** | Mở cửa sổ Terminal trong VS Code, gõ các lệnh Git. | *(Thao tác gõ lệnh)*: <br>`git status`<br>`git add .`<br>`git commit -m "feat(resident): update AI analyze button styling and verify XSS escape"`<br>`git push origin Bui_Van_Nam_Cuong`<br>*(Nói vào micro)*: *"Em đã commit thành công với mã commit vừa tạo, mã công việc Task ID là GS-RES-07, trên nhánh Git Bui_Van_Nam_Cuong. Em xin kết thúc video minh chứng tại đây. Cảm ơn hai thầy đã lắng nghe!"* |

---

## 3. KỊCH BẢN VIDEO 2: DÀNH CHO SV2 (NGUYỄN XUÂN HÙNG)
* **Tên file video khi lưu:** `SV2-01-thu-gom-tuyen-duong.mp4`
* **Màn hình thực hiện:** `thu-gom-lo-trinh-tuyen-duong.html` (Bản đồ SVG & AI-3 TSP) kết hợp `thu-gom-danh-sach-nhiem-vu.html`.
* **Nhánh Git:** `Nguyen_Xuan_Hung` | **Task ID:** `GS-COL-11`

### BẢNG KỊCH BẢN THAO TÁC VÀ LỜI THOẠI TỪNG GIÂY (SV2):

| Thời gian | Bước theo Barem | Hành động trên màn hình máy tính | Lời thoại chi tiết của Xuân Hùng (Nói vào micro) |
| :---: | :--- | :--- | :--- |
| **0:00 – 0:30** | **Bước 1: Chào hỏi & Nhận diện** | Bật OBS, mở Webcam góc phải. Để màn hình Desktop. | *"Em xin kính chào Thầy Kiều Tuấn Dũng và Thầy Tạ Chí Hiếu! Em là Nguyễn Xuân Hùng, sinh viên đảm nhận vai trò SV2 trong nhóm BTL-05. Em phụ trách toàn bộ phân hệ Thu gom viên (Collector). Trong video này, em xin trình bày minh chứng màn hình Bản đồ Lộ trình Tuyến đường và thuật toán gợi ý tối ưu AI-3, mã công việc GS-COL-11 trên nhánh Nguyen_Xuan_Hung."* |
| **0:30 – 1:00** | **Bước 2: Đối chiếu Figma** | Mở Figma chuyển sang Frame thiết kế Tuyến đường Thu gom viên. | *"Trên bản vẽ Figma, màn hình này được thiết kế với bản đồ trung tâm hiển thị các trạm dừng thu gom, thanh điều khiển mô phỏng GPS di chuyển và bảng thông số so sánh hiệu quả quãng đường trước và sau khi tối ưu."* |
| **1:00 – 2:00** | **Bước 3 & 4: Giải thích Code VS Code** | Mở file `thu-gom-lo-trinh-tuyen-duong.html` trong VS Code. | *"Trong VS Code, trang thu-gom-lo-trinh-tuyen-duong.html có cấu trúc chuẩn 1 thẻ main và 1 thẻ h1 duy nhất. Bản đồ được em vẽ bằng thẻ SVG thuần với đường dẫn tuyến đường nét đứt và hiệu ứng CSS dashMove chuyển động liên tục.<br>Về thuật toán: Hàm toiUuHoaTuyenDuongAI3() giải bài toán người du lịch TSP Heuristic, tự động sắp xếp lại thứ tự ghé thăm các điểm gom dựa trên khoảng cách và mức độ ưu tiên SLA, giúp tiết kiệm 4.2 km và 25% nhiên liệu cho xe thu gom."* |
| **2:00 – 2:45** | **Bước 5: Chỉnh sửa trực tiếp (Live Edit)** | Trong `thu-gom-lo-trinh-tuyen-duong.html`, tìm đến phần thông số tiết kiệm nhiên liệu, sửa số liệu hoặc class badge. | *(Vừa gõ vừa nói)*: *"Em thực hiện chỉnh sửa trực tiếp trên mã nguồn: Em đổi màu huy hiệu Tiết kiệm nhiên liệu từ bg-success-subtle sang bg-primary-subtle và bổ sung thêm chỉ số giảm phát thải CO2: 1.05 kg CO2. Em nhấn Ctrl+S lưu lại."* |
| **2:45 – 3:30** | **Bước 6: Chạy thử & Test Responsive** | Mở trình duyệt xem trang tuyến đường. Bấm nút 'Tối ưu lộ trình AI-3' và nút 'Mô phỏng GPS di chuyển'. Nhấn F12 co nhỏ màn hình. | *"Em quay lại trình duyệt: Huy hiệu đã đổi sang màu xanh dương kèm chỉ số CO2. Khi em bấm nút 'Mô phỏng GPS di chuyển', xe tải bắt đầu di chuyển qua từng trạm dừng trên bản đồ.<br>Bấm F12 chuyển về kích thước điện thoại 375px: Toàn bộ danh sách trạm dừng và bản đồ tự động xếp chồng dạng cột dọc rất mượt mà, không bị tràn màn hình."* |
| **3:30 – 4:15** | **Bước 7 & 8: Git Commit & Đọc Task ID** | Mở Terminal trong VS Code, gõ các lệnh Git. | *(Thao tác gõ lệnh)*: <br>`git status`<br>`git add .`<br>`git commit -m "feat(collector): update CO2 emission badge and test SVG route responsive"`<br>`git push origin Nguyen_Xuan_Hung`<br>*(Nói vào micro)*: *"Em đã hoàn thành commit và đẩy lên nhánh Nguyen_Xuan_Hung, mã công việc Task ID GS-COL-11. Em xin cảm ơn hai thầy đã theo dõi video của em!"* |

---

## 4. KỊCH BẢN VIDEO 3: DÀNH CHO SV3 (TRẦN ĐỨC ANH)
* **Tên file video khi lưu:** `SV3-01-dieu-phoi-yeu-cau.mp4`
* **Màn hình thực hiện:** `dieu-phoi-bang-yeu-cau.html` (SLA Kanban & Phân xe) kết hợp `quan-tri-bang-dieu-khien.html` (Dashboard Chart.js).
* **Nhánh Git:** `Tran_Duc_Anh` | **Task ID:** `GS-COO-13`

### BẢNG KỊCH BẢN THAO TÁC VÀ LỜI THOẠI TỪNG GIÂY (SV3):

| Thời gian | Bước theo Barem | Hành động trên màn hình máy tính | Lời thoại chi tiết của Đức Anh (Nói vào micro) |
| :---: | :--- | :--- | :--- |
| **0:00 – 0:30** | **Bước 1: Chào hỏi & Nhận diện** | Bật OBS, mở Webcam góc phải. Để màn hình Desktop. | *"Em xin kính chào Thầy Kiều Tuấn Dũng và Thầy Tạ Chí Hiếu! Em là Trần Đức Anh, sinh viên 3 phụ trách phân hệ Điều phối viên và Quản trị viên trong dự án BTL-05 GreenSort. Trong video này, em xin chứng minh quá trình phát triển màn hình Bảng Hàng đợi Điều phối Yêu cầu SLA và Quản trị tổng thể, mã công việc GS-COO-13 trên nhánh Tran_Duc_Anh."* |
| **0:30 – 1:00** | **Bước 2: Đối chiếu Figma** | Mở Figma chuyển sang Frame Bảng điều phối hàng đợi. | *"Trên bản vẽ Figma, màn hình này được bố trí gồm 4 thẻ KPI thống kê số lượng đơn chờ xử lý, bảng hàng đợi đơn hàng theo chuẩn Kanban kèm hạn cam kết SLA và menu phân công tài xế thu gom."* |
| **1:00 – 2:00** | **Bước 3 & 4: Giải thích Code VS Code** | Mở file `dieu-phoi-bang-yeu-cau.html` trong VS Code. | *"Trong mã nguồn dieu-phoi-bang-yeu-cau.html: Trang có đúng 1 thẻ main và 1 thẻ h1 chuẩn HTML5 tại dòng 108.<br>Về JavaScript: Hàm taiDanhSachYeuCauDieuPhoi() lấy dữ liệu từ KhoDuLieu.pickupRequests. Đặc biệt, em đã tích hợp tính năng đồng bộ đa tab Real-time bằng sự kiện window.addEventListener('storage', ...). Khi Cư dân ở tab khác gửi đơn, bảng này sẽ tự động cập nhật ngay lập tức mà không cần F5! Toàn bộ tên cư dân và địa chỉ đều được bảo vệ chống XSS bằng hàm escapeHTML()."* |
| **2:00 – 2:45** | **Bước 5: Chỉnh sửa trực tiếp (Live Edit)** | Trong `dieu-phoi-bang-yeu-cau.html`, tìm thẻ hiển thị mức ưu tiên P1/P2 hoặc số giờ SLA, đổi màu sắc hoặc thêm nhãn. | *(Vừa gõ vừa nói)*: *"Em thực hiện chỉnh sửa trực tiếp trên code: Em thêm icon đồng hồ cát bi-hourglass-split vào nhãn cam kết SLA P1 khẩn cấp để nhấn mạnh thời gian cần xử lý. Em nhấn Ctrl+S lưu lại."* |
| **2:45 – 3:30** | **Bước 6: Chạy thử & Test Responsive** | Mở trình duyệt xem trang điều phối. Thử bấm đổi xe gán cho đơn hàng. Nhấn F12 co màn hình về Mobile/Tablet. | *"Quay lại trình duyệt: Icon đồng hồ cát đã xuất hiện ở các đơn khẩn cấp. Em bấm chọn đổi xe thu gom số 02 sang xe số 01: Trạng thái đơn chuyển sang 'Đã điều xe' ngay lập tức.<br>Bấm F12 kiểm tra Responsive ở màn hình Tablet 768px: Bảng điều phối có thanh cuộn ngang table-responsive mượt mà, các nút bấm điều phối vẫn hiển thị đầy đủ và dễ thao tác bằng ngón tay."* |
| **3:30 – 4:15** | **Bước 7 & 8: Git Commit & Đọc Task ID** | Mở Terminal trong VS Code, gõ các lệnh Git. | *(Thao tác gõ lệnh)*: <br>`git status`<br>`git add .`<br>`git commit -m "feat(coordinator): add SLA hourglass indicator and verify responsive table"`<br>`git push origin Tran_Duc_Anh`<br>*(Nói vào micro)*: *"Em đã commit và push thành công lên nhánh Tran_Duc_Anh, mã công việc Task ID GS-COO-13. Em xin chân thành cảm ơn hai thầy đã lắng nghe!"* |

---

## 5. KỊCH BẢN PHỐI HỢP DEMO 6 PHÚT TRỰC TIẾP TRÊN PHÒNG THI (TẠI BÀN CHẤM)

Khi bước vào bàn chấm thi, thầy Kiều Tuấn Dũng hoặc thầy Tạ Chí Hiếu sẽ bấm đồng hồ đếm ngược **đúng 6 phút**. 3 bạn phối hợp theo đúng kịch bản sau:

```mermaid
timeline
    title KỊCH BẢN DEMO 6 PHÚT TẠI BÀN CHẤM (CHẶNG 1)
    00:00 - 00:45 : Mở đầu & Định vị Sản phẩm : Nam Cường mở link GitHub Pages, giới thiệu đề tài BTL-05 và mở docs/screen-inventory.md
    00:45 - 02:15 : SV1 Nam Cường Demo Luồng Cư dân : Tìm kiếm rác, Empty State, Form validation đặt lịch, AI-1 & AI-2
    02:15 - 03:45 : SV2 Xuân Hùng Demo Luồng Thu gom : Click Demo Switcher sang Thu gom, xem lộ trình SVG, chạy AI-3 TSP, Nghiệm thu đơn
    03:45 - 05:00 : SV3 Đức Anh Demo Điều phối & Admin : Click Demo Switcher sang Điều phối, chứng minh Real-time Sync đa tab, biểu đồ Chart.js
    05:00 - 06:00 : Kiểm tra Kỹ thuật Chung : F12 co 320px Responsive, phím Tab Accessibility, F5 chứng minh lưu LocalStorage
```

### Chi tiết 5 mốc thời gian:
1. **Mốc 1 (0:00 – 0:45) – Bùi Văn Nam Cường:**
   - Mở sẵn link GitHub Pages: `https://namcuong2910.github.io/-GreenSort_Groud5/`.
   - Giới thiệu 3 câu: *"Kính thưa hai thầy, nhóm em là BTL-05 GreenSort - Hệ thống phân loại và điều phối thu gom thông minh đô thị. Dự án giải quyết bài toán phân loại rác tại nguồn và tối ưu hóa tuyến xe ép rác với 4 vai trò liên thông."*
   - Mở lướt nhanh tab [`docs/screen-inventory.md`](screen-inventory.md) chứng minh nhóm đã hoàn thành đủ 18 màn hình.
2. **Mốc 2 (0:45 – 2:15) – Bùi Văn Nam Cường:**
   - Ở trang `cu-dan-tra-cuu-rac.html`: Gõ từ khóa tìm kiếm rác, gõ từ khóa linh tinh để hiện **Empty State** (có thông báo rõ ràng).
   - Test Trợ lý AI-1: Gõ chữ 'a' (< 3 ký tự) để kích hoạt **Uncertainty UX / Fallback** cảnh báo tin cậy thấp. Sau đó gõ 'Pin con thỏ' để AI phân tích ra Thùng Đỏ Nguy Hại (98.5%).
   - Chuyển sang `cu-dan-dat-lich-thu-gom.html`: Để trống bấm gửi để thấy Validation lỗi đỏ, sau đó điền đủ để tạo đơn hẹn.
3. **Mốc 3 (2:15 – 3:45) – Nguyễn Xuân Hùng:**
   - Nhấp vào nút `⚡ Demo CSE122` ở góc phải, chọn ngay **🚚 SV2: Thu gom (Xuân Hùng)**.
   - Trình duyệt tự nhảy sang `thu-gom-danh-sach-nhiem-vu.html`: Cho thầy thấy đơn vừa tạo đã xuất hiện.
   - Chuyển sang `thu-gom-lo-trinh-tuyen-duong.html`: Bấm nút **Tối ưu lộ trình AI-3** để giải bài toán TSP, chỉ rõ quãng đường giảm 4.2 km và tiết kiệm 25% xăng. Bấm nút **Mô phỏng GPS di chuyển**.
4. **Mốc 4 (3:45 – 5:00) – Trần Đức Anh:**
   - Nhấp Demo Switcher chọn **📋 SV3: Điều phối (Đức Anh)**.
   - Mở song song 2 tab: Cường bấm tạo đơn mới ở Tab 1, tab Điều phối của Đức Anh **tự động hiện đơn mới ngay lập tức không cần F5** (Tính năng Real-time Sync ăn điểm Bonus).
   - Chọn xe điều phối đơn hàng, chuyển tiếp sang `quan-tri-bang-dieu-khien.html` trình diễn biểu đồ Doughnut Chart.js.
5. **Mốc 5 (5:00 – 6:00) – Cả nhóm:**
   - Bấm F12 co màn hình về **320px (Mobile)** và **768px (Tablet)** chứng minh không vỡ giao diện.
   - Bấm phím `Tab` 5 lần liên tiếp trên bàn phím để cho thầy thấy viền xanh `:focus-visible` phục vụ người khuyết tật (Accessibility).
   - Nhấn F5 reload để chứng minh dữ liệu vẫn còn nguyên vẹn trong LocalStorage.
   - Dõng dạc tuyên bố: *"Nhóm em đã hoàn thành phần demo sản phẩm đúng 6 phút, xin mời hai thầy đặt câu hỏi vấn đáp!"*
