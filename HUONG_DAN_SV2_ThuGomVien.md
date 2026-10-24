# HƯỚNG DẪN DÀNH CHO SINH VIÊN 2 (SV2 - THU GOM VIÊN)
**Học phần:** Phát triển ứng dụng Web cơ bản (CSE122) – Khoa CNTT, Đại học Thủy Lợi (TLU)  
**Đề tài BTL:** BTL-05 GreenSort – Nền tảng phân loại rác & điều phối thu gom thông minh  
**Họ và tên sinh viên:** Nguyễn Xuân Hùng  
**Vai trò phụ trách:** Sinh viên 2 (SV2) – Phân hệ Thu gom viên (Collector) & Module Dữ liệu trung tâm  
**Nhánh GitHub:** `Nguyen_Xuan_Hung`  
**Repository:** [https://github.com/namcuong2910/-GreenSort_Groud5](https://github.com/namcuong2910/-GreenSort_Groud5)  

---

## 1. PHẠM VI CÔNG VIỆC CHUYÊN TRÁCH CỦA SV2

Căn cứ theo bản phân công nhiệm vụ của nhóm BTL-05 (`docs/team-assignment.md`), bạn đảm nhận chính **3 màn hình giao diện** và **1 module kỹ thuật nền tảng**:

### 3 Màn hình cốt lõi (100% tiếng Việt chuẩn):
1. **`thu-gom-danh-sach-nhiem-vu.html` (Danh sách nhiệm vụ ca làm việc)**
   - Quản lý các điểm hẹn thu gom cần ghé trong ngày của Tuyến xe 02 (khu vực Ba Đình - Đống Đa - Hoàn Kiếm).
   - Thanh tiến độ động: Tính % hoàn thành và tổng khối lượng rác đã chất lên xe so với dung tích tối đa 500 kg.
   - Bộ lọc trạng thái: **Tất cả**, **Chờ / Đang tới**, **Đã xong**.
   - Trạng thái rỗng (Empty State) khi hoàn tất toàn bộ ca.
2. **`thu-gom-lo-trinh-tuyen-duong.html` (Bản đồ lộ trình & Tối ưu hóa AI-3)**
   - Bản đồ số SVG trực quan hiển thị đường phố Hà Nội, các mốc trạm dừng tuần tự và vị trí xe tải ép rác.
   - Nút **Mô phỏng GPS di chuyển**: Xe tải chuyển động thực tế dọc tuyến đường thu gom.
   - **Tính năng AI bắt buộc - AI-3 (AI Route Suggestion & Optimizer)**: Nút bật popup tối ưu tuyến đường bằng thuật toán gom cụm địa lý (Clustering) & quãng đường ngắn nhất. So sánh trực quan trước/sau: tiết kiệm 4.8 km (26%), rút ngắn 35 phút hành trình và cắt giảm 12.4 kg phát thải CO2.
   - Danh sách thứ tự dừng (Itinerary) kèm nút chuyển nhanh tới biên bản đơn hàng.
3. **`thu-gom-chi-tiet-don.html` (Nghiệm thu đơn, cân khối lượng & minh chứng ảnh)**
   - Xem chi tiết thông tin đơn: Người gửi, số điện thoại, địa chỉ, loại rác, điểm ưu tiên hệ thống, khuyến nghị an toàn khi bốc xếp chất thải nguy hại.
   - Biên bản nghiệm thu hiện trường: Nhập số kg cân thực tế, đánh giá chất lượng phân loại của hộ dân (⭐⭐⭐), tính điểm thưởng tích lũy cho dân.
   - Tải ảnh minh chứng hiện trường (Proof of Pickup) với bản xem trước (Image Preview).
   - Nút xác nhận hoàn thành: Cập nhật dữ liệu vào `LocalStorage` và đồng bộ tiến độ trên toàn hệ thống.

### Trách nhiệm chéo kỹ thuật:
- Quản lý module dữ liệu trung tâm `js/du-lieu.js` (`KhoDuLieu` / `GreenSortData`): Cung cấp các hàm CRUD trên `localStorage`, đảm bảo tính toàn vẹn dữ liệu giữa cả 4 phân hệ (Người dân, Thu gom, Điều phối, Quản trị).

---

## 2. THÔNG TIN TÀI KHOẢN ĐỂ TEST & QUAY VIDEO
- **Đăng nhập nhanh:** Mở `dang-nhap.html`, bấm vào thẻ vai trò **"Thu gom viên"** (hệ thống sẽ tự điền thông tin).
- **Hoặc điền thủ công:**
  - Tên đăng nhập: `xe_thu_gom_02`
  - Mật khẩu: `password123`

---

## 3. HƯỚNG DẪN CẤU HÌNH OBS STUDIO (QUAY VIDEO CÓ MẶT SINH VIÊN)

Theo quy định bắt buộc của bộ môn, video báo cáo **phải có hình ảnh webcam trực tiếp khuôn mặt sinh viên** ở một góc màn hình để chống gian lận.

1. **Cài đặt OBS:** Chạy file cài đặt OBS Studio trong thư mục Downloads của máy bạn.
2. **Thêm Source 1 (Màn hình máy tính):**
   - Tại ô **Sources (Nguồn)** -> Bấm dấu `+` -> Chọn **Display Capture (Quay màn hình)** -> Chọn màn hình chính 1920x1080.
3. **Thêm Source 2 (Webcam khuôn mặt):**
   - Tại ô **Sources** -> Bấm dấu `+` -> Chọn **Video Capture Device (Thiết bị quay video)** -> Chọn Webcam của máy bạn.
   - Thu nhỏ khung webcam lại và kéo đặt vào **góc dưới bên phải màn hình**.
4. **Kiểm tra âm thanh:** Nhìn thanh âm lượng **Mic/Aux** nhảy đều khi bạn nói thử là đạt chuẩn.
5. **Độ phân giải & định dạng:** Chọn định dạng xuất file là `.mp4`, độ phân giải Full HD 1080p.

---

## 4. KỊCH BẢN QUAY CHI TIẾT CHO 3 VIDEO CỦA BẠN (2-3 PHÚT / VIDEO)

Bạn cần quay thành 3 video tương ứng với 3 màn hình và đặt tên chuẩn theo danh sách sau:
1. `SV2-01-thu-gom-danh-sach-nhiem-vu.mp4`
2. `SV2-02-thu-gom-lo-trinh-tuyen-duong.mp4`
3. `SV2-03-thu-gom-chi-tiet-don.mp4`

---

### VIDEO 1: `SV2-01-thu-gom-danh-sach-nhiem-vu.mp4`
* **Màn hình thực hiện:** `thu-gom-danh-sach-nhiem-vu.html`
* **Thời lượng mục tiêu:** ~2.5 phút

#### Kịch bản 7 bước chuẩn:
1. **Chào hỏi & giới thiệu (Webcam rõ mặt):**
   > *"Em chào thầy cô, em tên là Nguyễn Xuân Hùng, sinh viên lớp ... khoa Công nghệ thông tin. Trong nhóm BTL-05 đề tài GreenSort, em phụ trách vai trò Sinh viên 2 – Thu gom viên hiện trường trên nhánh GitHub `Nguyen_Xuan_Hung`. Hôm nay em xin trình bày màn hình Danh sách nhiệm vụ ca làm việc của xe thu gom số 02."*
2. **Trình chiếu giao diện tổng quan:**
   - Chỉ chuột vào thanh Header với thẻ vai trò màu vàng cam **Thu gom viên**.
   - Giới thiệu thanh tiến độ động: hiển thị số điểm đã hoàn thành, tổng tải trọng rác trên xe (ví dụ: Đã tải 8.5 kg / 500 kg dung tích xe) và phần trăm hoàn thành.
3. **Thao tác bộ lọc nhiệm vụ:**
   - Bấm nút **"Chờ / Đang tới"**: Danh sách tự động lọc ra các điểm dừng chưa xử lý.
   - Bấm nút **"Đã xong"**: Danh sách lọc ra các đơn đã nghiệm thu hoàn tất có vạch viền xanh lá.
   - Bấm lại nút **"Tất cả"**: Hệ thống hiển thị toàn bộ lộ trình.
4. **Mở mã nguồn trong VS Code:**
   - Mở file `thu-gom-danh-sach-nhiem-vu.html`.
   - Giới thiệu cấu trúc thẻ Semantic chuẩn: `<header>`, `<main>`, `<div id="collectorTasks">`.
   - Giải thích hàm `loadCollectorTasks()` và `setupFilterButtons()` đọc dữ liệu từ `KhoDuLieu.pickupRequests.getAll()`.
5. **Thao tác Live Edit (Chứng minh tự code):**
   - Vào thẻ `<h1 class="h4 fw-bold text-dark mb-0">Nhiệm Vụ Thu Gom Của Tuyến Xe 02</h1>`.
   - Sửa chữ `Tuyến Xe 02` thành `Tuyến Xe 02 - Bác Nam & Xuân Hùng`.
   - Bấm `Ctrl + S`, quay lại trình duyệt bấm `F5` để thầy cô thấy tiêu đề vừa được cập nhật ngay lập tức.
6. **Thao tác Git Terminal:**
   - Mở Terminal trong VS Code, gõ:
     ```bash
     git status
     ```
   - Thầy cô thấy rõ ràng nhánh đang làm việc là `Nguyen_Xuan_Hung`.
7. **Kết thúc video:**
   > *"Màn hình danh sách nhiệm vụ đã hoàn thiện 100% chuẩn responsive, kiểm tra phân quyền RBAC và sẵn sàng vận hành. Em xin kết thúc video thứ nhất."* -> Bấm **Stop Recording** trên OBS.

---

### VIDEO 2: `SV2-02-thu-gom-lo-trinh-tuyen-duong.mp4`
* **Màn hình thực hiện:** `thu-gom-lo-trinh-tuyen-duong.html`
* **Thời lượng mục tiêu:** ~2.5 - 3 phút (Trọng tâm tính năng **AI-3**)

#### Kịch bản 7 bước chuẩn:
1. **Chào hỏi & giới thiệu:**
   > *"Em chào thầy cô, tiếp theo em xin trình bày màn hình thứ 2 của Thu gom viên: Bản đồ lộ trình tuyến đường và tính năng AI cốt lõi AI-3 Route Suggestion."*
2. **Trình diễn bản đồ số SVG & GPS di chuyển:**
   - Giới thiệu bản đồ trực quan với các trục đường chính Hà Nội, Hồ Hoàn Kiếm, sông Hồng và 4 trạm dừng tuần tự.
   - Bấm nút xanh **"Mô phỏng GPS di chuyển"**: Xe tải nhỏ 🚛 di chuyển sinh động giữa các trạm dừng trên màn hình.
3. **Trình diễn tính năng AI-3 (Trọng tâm ăn điểm cao):**
   - Bấm nút màu vàng **"⚡ Tối ưu lộ trình AI-3"**.
   - Popup Modal AI-3 hiện lên: Giới thiệu thuật toán gom cụm địa lý (Clustering) và bài toán tìm đường ngắn nhất (TSP).
   - Chỉ vào bảng thống kê 3 chỉ số xanh:
     + Quãng đường: Giảm từ **17.6 km** xuống **12.8 km** (tiết kiệm 26%).
     + Thời gian: Rút ngắn từ **80 phút** xuống **45 phút** (tiết kiệm 35 phút).
     + Phát thải: Cắt giảm **12.4 kg CO2** bảo vệ môi trường.
   - Giải thích lý do AI đưa điểm REQ-002 lên ưu tiên vì chứa rác nguy hại cần xử lý khẩn cấp trước giờ cao điểm.
   - Bấm nút **"Áp dụng lộ trình tối ưu này"**: Thông báo lưu thành công hiện ra.
4. **Mở mã nguồn trong VS Code:**
   - Mở file `thu-gom-lo-trinh-tuyen-duong.html`.
   - Giới thiệu khối bản đồ `<svg width="100%" height="100%">`, thẻ `<path id="routeLine">` nét đứt di chuyển, và modal `#modalAI3Optimizer`.
5. **Thao tác Live Edit:**
   - Trong thẻ `<small class="text-muted">Phương tiện: Xe ép rác 5 tấn...</small>`, sửa biển số xe hoặc thêm ghi chú `Tài xế: Bác Nam & Nguyễn Xuân Hùng`.
   - Bấm `Ctrl + S`, quay lại trình duyệt bấm `F5` để chứng minh code thay đổi.
6. **Thao tác Responsive F12:**
   - Bấm phím `F12` trên trình duyệt -> Bật chế độ di động (iPhone / Pixel).
   - Kéo lướt để thầy cô thấy bản đồ và danh sách trạm dừng co giãn mượt mà, không bị vỡ layout.
7. **Kết thúc video:**
   > *"Tính năng AI-3 và bản đồ lộ trình đã đáp ứng đầy đủ tiêu chí đề bài BTL-05. Em xin kết thúc video thứ hai."*

---

### VIDEO 3: `SV2-03-thu-gom-chi-tiet-don.mp4`
* **Màn hình thực hiện:** `thu-gom-chi-tiet-don.html`
* **Thời lượng mục tiêu:** ~2.5 phút

#### Kịch bản 7 bước chuẩn:
1. **Chào hỏi & giới thiệu:**
   > *"Em chào thầy cô, em xin trình bày màn hình thứ 3 của phân hệ Thu gom viên: Chi tiết đơn hàng và Biên bản nghiệm thu hiện trường."*
2. **Trình diễn thông tin đơn hàng:**
   - Cột bên trái: Mã đơn hàng REQ-102, loại rác, tên người dân, số điện thoại có thể bấm gọi ngay, địa chỉ thu gom và hộp khuyến nghị an toàn khi bốc xếp rác.
   - Cột bên phải: Biểu mẫu nghiệm thu hiện trường.
3. **Thao tác nghiệm thu thực tế:**
   - Nhập khối lượng cân thực tế: Sửa từ `8.0` kg thành `10.5` kg.
   - Chọn chất lượng phân loại: `⭐⭐⭐ Rất tốt (Phân loại chính xác 100%)`.
   - Bấm vào khung **"Chạm để chụp hoặc chọn ảnh"**: Chọn một file ảnh rác bất kỳ từ máy tính -> Ảnh xem trước hiện ra ngay lập tức bên dưới.
   - Nhập ghi chú của tài xế: *"Đã nhận đủ hàng, gia chủ phân loại rất cẩn thận"*.
   - Bấm nút xanh **"Xác nhận Hoàn tất & Gửi biên bản"**: Popup alert báo thành công và tự động chuyển hướng về trang Danh sách nhiệm vụ.
   - Tại trang Danh sách: Chỉ cho thầy cô thấy đơn hàng đã chuyển sang trạng thái **Đã hoàn thành**, thanh tiến độ tăng lên.
4. **Mở mã nguồn trong VS Code:**
   - Mở file `thu-gom-chi-tiet-don.html`.
   - Giải thích hàm `submitCompletion()`, cách lưu trạng thái vào `KhoDuLieu.pickupRequests.update()`.
5. **Mở file module trung tâm `js/du-lieu.js`:**
   - Mở file `js/du-lieu.js`, chỉ vào khối `yeuCauThuGom` / `pickupRequests`: các hàm `layTatCa()`, `layTheoMa()`, `capNhat()`, `xoa()`.
   - Mở tab **Application** trong F12 trình duyệt -> **Local Storage** -> `gs_pickup_requests` để chứng minh dữ liệu được lưu thật vào máy.
6. **Thao tác Git Commit & Kết thúc:**
   - Trong Terminal gõ:
     ```bash
     git add .
     git commit -m "feat(collector): [SV2] finalize collector workflow and OBS demo"
     git status
     ```
   - Nhìn vào webcam kết luận:
     > *"Toàn bộ 3 màn hình của phân hệ Thu gom viên cùng module dữ liệu trung tâm đã hoàn thiện 100% chuẩn chỉ, không còn file rác tiếng Anh, đáp ứng đầy đủ yêu cầu của đề tài BTL-05. Em xin cảm ơn thầy cô đã theo dõi!"*

---

## 5. QUY TRÌNH NỘP CODE LÊN GITHUB

Toàn bộ code chuẩn đã được đồng bộ lên nhánh của bạn:
- **Branch:** `Nguyen_Xuan_Hung`
- **Tài khoản:** `hunghidaibeti-hihi`

Nếu bạn có sửa đổi thêm gì trên máy trước khi nộp, chỉ cần mở terminal trong thư mục `SV2_ThuGomVien` và chạy 3 lệnh sau:
```bash
git add .
git commit -m "feat(collector): [SV2] hoan thien nghiem thu don va lo trinh AI-3"
git push origin Nguyen_Xuan_Hung
```
Sau đó bạn nhắn lại cho trưởng nhóm Nam Cường để trưởng nhóm gộp (merge) nhánh của bạn vào `main` nhé!
