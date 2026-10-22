# BÁO CÁO CÁ NHÂN & MÃ NGUỒN SINH VIÊN 3 (SV3)
## Học phần: Phát triển ứng dụng Web cơ bản – CSE122
### Trường Đại học Thủy Lợi (TLU) – Khoa Công nghệ thông tin

---

## 1. THÔNG TIN CHUNG
- **Đề tài BTL:** BTL-05 GreenSort – Phân loại rác và điều phối thu gom thông minh
- **Họ và tên sinh viên:** Phạm Thu Trang / Sinh viên 3
- **Mã sinh viên:** *(Điền MSV của bạn)*
- **Lớp:** CSE122_*(Điền mã lớp)*
- **Vai trò phụ trách chính:** **Điều phối viên & Quản trị viên (Coordinator & System Admin)**
- **Trách nhiệm kỹ thuật xuyên suốt:** Tích hợp hệ thống, Bảng điều khiển Kanban SLA + Quản lý phân quyền Strict Role Guard + Biểu đồ Chart.js + Trợ lý gom cụm phân tuyến AI-3
- **Trang chính nộp Giữa kỳ:** `coordinator-request-board.html` *(đồng thời có tệp `index.html` độc lập để nộp bài)*

---

## 2. LIÊN KẾT NỘP BÀI BẮT BUỘC (GIỮA KỲ)
| STT | Hạng mục | Liên kết nộp bài | Ghi chú |
|:---:|---|---|---|
| 1 | **Link Figma** | `https://www.figma.com/design/greensort-coordinator-request-board` | Xem bản thiết kế Desktop Dashboard & Bảng Kanban SLA |
| 2 | **Link GitHub cá nhân** | `https://github.com/your-username/CSE122-GK-SV03-Coordinator` | Repo chứa toàn bộ mã nguồn kiểm tra giữa kỳ |
| 3 | **Link Video OBS (3 phút)** | `https://youtu.be/your-obs-video-sv3` | Video quay mặt sinh viên + Figma + Code + Demo |

---

## 3. DANH SÁCH MÀN HÌNH ĐẢM NHẬN TRONG DỰ ÁN

### A. Phân hệ Điều phối viên (Coordinator)
1. **`coordinator-request-board.html` (Trang chính Giữa kỳ / `index.html`):**
   - Bảng điều phối yêu cầu thu gom thời gian thực theo hạn SLA: Khẩn cấp (<2h), Ưu tiên (<12h), Thường (<48h).
   - Bộ đếm ngược thời gian thực (Real-time SLA Countdown).
   - **Tích hợp tính năng AI-3 (Cluster Auto-dispatch):** Thuật toán tự động gom cụm các đơn hàng theo quận huyện (Đống Đa - Ba Đình -> Tuyến số 02; Hoàn Kiếm - Hai Bà Trưng -> Tuyến số 01) và điều xe một chạm.
   - Chức năng điều phối thủ công qua Modal phân xe/tài xế.
   - Bộ lọc mức độ ưu tiên: P1 Khẩn cấp, P2 Ưu tiên, P3 Thường.
2. **`coordinator-point-management.html`:**
   - Quản lý mạng lưới điểm thu gom công cộng và trạm trung chuyển.
   - Giám sát cảm biến IoT đo mức đầy rác (%) theo thời gian thực.
   - Nút kích hoạt lệnh điều xe khẩn cấp khi cảm biến cảnh báo thùng rác quá tải (>85%).
3. **`coordinator-analytics.html`:**
   - Báo cáo phân tích hiệu suất thực hiện SLA, tỷ lệ tái chế rác đô thị và chỉ số phát thải ESG.
   - Xuất dữ liệu báo cáo ra file Excel (.CSV) trực tiếp bằng JavaScript.

### B. Phân hệ Quản trị viên (Admin)
4. **`admin-dashboard.html`:**
   - Bảng điều khiển KPI điều hành toàn hệ thống: Tổng lượng rác, tỷ lệ xử lý đúng hạn SLA, doanh thu điểm thưởng.
   - Tích hợp biểu đồ **Chart.js 4.4** trực quan hóa số liệu phân loại rác và xu hướng thu gom.
5. **`admin-waste-types.html` (hoặc `admin-waste-type-management.html`):**
   - Quản lý taxonomy danh mục loại rác, màu sắc thùng rác quy chuẩn và hệ số điểm thưởng sinh thái.
   - Thao tác CRUD (Thêm mới, sửa, xóa, lưu trữ) lưu dữ liệu vào LocalStorage.
6. **`admin-users.html` (hoặc `admin-user-management.html`):**
   - Quản trị danh sách người dùng toàn hệ thống và phân quyền nghiêm ngặt 4 vai trò (Người dân, Thu gom viên, Điều phối viên, Quản trị viên).
   - Khóa / Mở khóa tài khoản người dùng ngay lập tức.
7. **Màn hình xác thực & dùng chung:**
   - `login.html`, `forgot-password.html`, `403.html`, `404.html`.

---

## 4. PHÂN TÍCH KỸ THUẬT CHUYÊN SÂU TRANG CHÍNH (`coordinator-request-board.html`)

### 4.1. Cấu trúc HTML5 Semantic
- Giao diện được thiết kế dạng **Bảng điều khiển trung tâm (Command Center Dashboard)** chuyên nghiệp trên Desktop:
  - Thẻ `<header>`: Logo GreenSort, huy hiệu vai trò Điều phối viên màu xanh dương (`bg-primary-subtle`), menu điều hướng nhanh giữa Request Board, Point Management và Analytics.
  - Thẻ `<main>`:
    - Khối KPI thời gian thực: Tổng đơn chờ xử lý, số đơn P1 khẩn cấp, thời gian SLA trung bình, số xe đang hoạt động.
    - Thanh công cụ hành động: Nút "Gom cụm & Phân tuyến AI-3", ô tìm kiếm địa chỉ/khu vực, các nút lọc mức độ ưu tiên (P1, P2, P3).
    - Khung hàng đợi yêu cầu: Sử dụng Bootstrap Grid hoặc bảng dữ liệu tương tác thể hiện chi tiết mã đơn, cư dân, loại rác, mức ưu tiên AI, hạn SLA còn lại, và nút "Điều xe".
  - Thẻ `<footer>`: Chân trang chuẩn hóa thông tin học phần CSE122.

### 4.2. Hệ thống CSS & Trực quan hóa Trạng thái SLA
- Sử dụng các lớp CSS chuẩn hóa tiếng Việt:
  - `--mau-phu: #0284c7;` (Màu xanh dương điều phối vận hành)
  - Huy hiệu cảnh báo khẩn cấp P1: Màu đỏ rực (`bg-danger`), hiệu ứng nhấp nháy thu hút sự chú ý của điều phối viên khi đơn sắp quá hạn SLA (< 30 phút).
  - Huy hiệu P2: Màu vàng cam (`bg-warning text-dark`).
  - Huy hiệu P3: Màu xanh dương nhẹ nhàng (`bg-info text-dark`).

### 4.3. Lập trình JavaScript & Thuật toán Phân tuyến AI-3
- **Lấy dữ liệu tập trung qua GreenSortAPI:**
  Đọc toàn bộ đơn hàng lưu trong LocalStorage từ người dân gửi lên:
  ```javascript
  const tatCaYeuCau = GreenSortAPI.pickupRequests.getAll();
  ```
- **Thuật toán gom cụm và phân tuyến tự động AI-3 (`apDungDieuPhoiTuDongAI`):**
  Thuật toán tự động phân tích trường địa chỉ (`address`) của từng đơn hàng đang chờ xử lý:
  - Nếu địa chỉ thuộc khu vực Tây Sơn, Chùa Bộc, Láng Hạ (Quận Đống Đa, Ba Đình) -> Gom vào Tuyến số 02, phân công cho `Xe 02 (Anh Nam)`.
  - Nếu địa chỉ thuộc khu vực Lý Thường Kiệt, Hàng Bài (Quận Hoàn Kiếm, Hai Bà Trưng) -> Gom vào Tuyến số 01, phân công cho `Xe 01 (Anh Hải)`.
  - Cập nhật đồng loạt trạng thái sang `assigned` và ghi nhận mốc thời gian điều phối `dispatchedAt`.
- **Phân công thủ công (Manual Dispatch Modal):** Cho phép điều phối viên chủ động can thiệp bằng cách chọn tài xế từ danh sách và lưu trạng thái.
- **Lọc dữ liệu tức thì (Priority Filter):** Lắng nghe sự kiện click trên các nút lọc P1/P2/P3 để lọc nhanh mảng JavaScript và vẽ lại bảng điều phối.

---

## 5. HƯỚNG DẪN CHẠY THỬ MÃ NGUỒN CÁ NHÂN
1. Mở thư mục bằng **VS Code**.
2. Click chuột phải vào `index.html` (hoặc `coordinator-request-board.html`), chọn **"Open with Live Server"**.
3. Trình duyệt mở ra tại `http://127.0.0.1:5500/index.html`.
4. Trải nghiệm:
   - Thấy danh sách các đơn hàng của cư dân đang ở trạng thái "Chờ xử lý" kèm điểm số ưu tiên AI.
   - Nhấn nút màu xanh dương **"Gom cụm & Phân tuyến AI"** trên góc phải -> Một Modal mở ra hiển thị các tuyến xe đề xuất cùng tải trọng dự kiến.
   - Bấm nút **"Áp dụng điều phối ngay"** -> Hệ thống thông báo tự động điều phối thành công, các đơn hàng lập tức chuyển sang trạng thái "Đã điều xe" kèm tên tài xế.

---

## 6. KỊCH BẢN QUAY VIDEO OBS 03 PHÚT (CHUẨN RUBRIC THẦY CÔ)
- **Tên tệp video theo quy định:** `CSE122-GK-SV03-PhamThuTrang-CoordinatorRequestBoard.mp4`

| Phân đoạn | Thời lượng | Nội dung trình bày cụ thể |
|---|:---:|---|
| **1. Giới thiệu** | 00:00 – 00:30 (30s) | - Bật webcam thấy rõ mặt sinh viên, chào thầy cô.<br>- Giới thiệu họ tên, MSV, học phần CSE122.<br>- Giới thiệu đề tài: BTL-05 GreenSort.<br>- Giới thiệu vai trò: Sinh viên 3 phụ trách vai trò **Điều phối viên & Quản trị hệ thống (Coordinator & Admin)**.<br>- Trang chính thực hiện nộp giữa kỳ: `coordinator-request-board.html`.<br>- Mục đích: Quản trị hàng đợi yêu cầu thu gom, giám sát hạn cam kết SLA và ứng dụng AI tự động hóa phân xe cho tài xế. |
| **2. Trình bày Figma** | 00:30 – 01:00 (30s) | - Mở file Figma thiết kế Dashboard của Điều phối viên trên Desktop.<br>- Chỉ rõ các thành phần chính: Khung KPI 4 chỉ số trên đầu, Thanh tìm kiếm & Lọc mức ưu tiên P1/P2/P3, Bảng dữ liệu hàng đợi có đồng hồ SLA đếm ngược và Modal gợi ý phân tuyến AI-3. |
| **3. Trình bày Web chạy thực tế** | 01:00 – 01:30 (30s) | - Chuyển sang trình duyệt đang chạy web trên cổng Live Server.<br>- Chứng minh giao diện thực tế bám sát thiết kế Figma.<br>- Trình bày khả năng Responsive: Trên Desktop mở rộng tối đa không gian làm việc; trên Tablet tự động thu gọn bảng dữ liệu có thanh cuộn ngang an toàn (`table-responsive`). |
| **4. Giải thích Mã nguồn** | 01:30 – 02:30 (60s) | - Mở mã nguồn trong VS Code:<br>  + **HTML:** Cấu trúc semantic bảng điều khiển, các thẻ Modal phân công xe và Modal gom cụm AI.<br>  + **CSS:** Sử dụng màu sắc phân loại SLA chuẩn (Đỏ P1, Vàng P2, Xanh P3).<br>  + **JavaScript:** Mở hàm `taiDanhSachYeuCauDieuPhoi()`, giải thích logic đọc LocalStorage qua `GreenSortAPI`, hàm đếm ngược hạn SLA và đặc biệt là thuật toán gom cụm phân xe AI-3 (`apDungDieuPhoiTuDongAI`). |
| **5. Trình diễn Demo chức năng** | 02:30 – 03:00 (30s) | - Thực hiện trực tiếp trên trình duyệt:<br>  1. Bấm nút lọc "P1 Khẩn cấp" -> Chỉ lọc ra các đơn nguy hại cần xử lý gấp.<br>  2. Bấm vào nút "Phân xe" trên 1 đơn hàng -> Chọn Xe 02 -> Trạng thái cập nhật thành công.<br>  3. Bấm nút "Gom cụm AI" -> Bấm áp dụng -> Toàn bộ đơn hàng được tự động phân bổ tuyến đường tối ưu.<br>- Kết thúc video, cảm ơn thầy cô đã lắng nghe. |

---

## 7. CÂU HỎI VẤN ĐÁP CỦA GIẢNG VIÊN & CÂU TRẢ LỜI MẪU

### Câu 1: Thuật toán AI-3 gom cụm phân tuyến tự động của em hoạt động dựa trên nguyên lý nào?
- **Trả lời:** Dạ thưa thầy/cô, tính năng AI-3 của em giải quyết bài toán gom tuyến thông minh (Smart Clustering). Thuật toán duyệt qua toàn bộ các đơn hàng chưa hoàn thành, tiến hành bóc tách địa chỉ bằng phương thức xử lý chuỗi (`toLowerCase()`). Các đơn hàng ở cụm Đống Đa - Ba Đình được tự động gộp vào Tuyến 02 của Xe anh Nam; các đơn ở Hoàn Kiếm - Hai Bà Trưng được gộp vào Tuyến 01 của Xe anh Hải. Sau đó hệ thống gọi hàm cập nhật hàng loạt vào LocalStorage, chuyển trạng thái đơn hàng sang `assigned` và thông báo cho tài xế.

### Câu 2: Em xử lý việc kiểm soát phân quyền (Strict Role Guard) như thế nào trong dự án?
- **Trả lời:** Dạ, trong file `js/auth-guard.js`, em xây dựng bảng ma trận phân quyền `ROLE_PERMISSIONS` cho 4 vai trò. Mỗi khi người dùng truy cập một trang web, hàm `checkAuthGuard()` tự động lấy tên trang hiện tại và thông tin người dùng từ LocalStorage. Nếu người dùng chưa đăng nhập, hệ thống sẽ lưu trang đích vào `sessionStorage` và chuyển hướng về `login.html`. Nếu người dùng đăng nhập bằng vai trò Người dân nhưng cố tình gõ link của Điều phối viên hoặc Admin, hệ thống sẽ chặn lại và đẩy sang trang cảnh báo `403.html`.

### Câu 3: Trang của em có chức năng xuất dữ liệu báo cáo ra file Excel không? Cơ chế hoạt động là gì?
- **Trả lời:** Dạ có, trong trang `coordinator-analytics.html`, em xây dựng chức năng xuất báo cáo SLA ra file CSV. Khi người dùng bấm nút "Xuất file Excel", JavaScript sẽ lấy mảng dữ liệu từ LocalStorage, chuyển đổi các đối tượng thành chuỗi định dạng CSV có dấu phẩy ngăn cách và hỗ trợ bảng mã tiếng Việt UTF-8 BOM (`\uFEFF`). Sau đó tạo một đối tượng Blob ảo và kích hoạt thẻ `<a>` ảo để trình duyệt tự động tải tệp tin về máy tính người dùng mà không cần backend.

### Câu 4: Vì sao bảng điều phối (Request Board) của em lại sử dụng định dạng bảng (Table) kết hợp Modal thay vì trang chi tiết riêng?
- **Trả lời:** Dạ, đối với vai trò Điều phối viên, yếu tố quan trọng nhất là tốc độ ra quyết định và cái nhìn bao quát toàn bộ hệ thống (Overview). Bảng dữ liệu giúp hiển thị đồng thời hàng chục đơn hàng với các cột SLA, mức ưu tiên và địa chỉ. Khi cần phân xe, việc mở một cửa sổ Popup (Modal) ngay tại chỗ giúp điều phối viên thao tác nhanh mà không bị gián đoạn hay mất dấu vị trí đang xem như việc phải tải trang mới.

### Câu 5: Nếu người quản trị (Admin) khóa một tài khoản trong trang `admin-users.html`, hệ thống sẽ phản ứng ra sao khi tài khoản đó cố đăng nhập?
- **Trả lời:** Dạ, khi Admin bấm nút "Khóa tài khoản", thuộc tính `disabled: true` sẽ được cập nhật vào đối tượng người dùng đó trong LocalStorage. Khi người dùng đó quay lại trang `login.html` và nhập tài khoản mật khẩu, hàm xác thực kiểm tra cờ `disabled === true` và ngay lập tức dừng quá trình đăng nhập, đồng thời hiển thị thông báo màu đỏ cảnh báo *"Tài khoản đã bị vô hiệu hóa bởi Quản trị viên"*.

---
*Tài liệu được chuẩn bị hoàn chỉnh cho kỳ thi Giữa kỳ và Báo cáo Cuối kỳ môn CSE122.*
