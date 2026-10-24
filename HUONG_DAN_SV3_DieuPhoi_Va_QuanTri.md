# HƯỚNG DẪN DÀNH CHO SINH VIÊN 3 (SV3 - ĐIỀU PHỐI VIÊN & QUẢN TRỊ VIÊN)
**Học phần:** Phát triển ứng dụng Web cơ bản (CSE122) – Khoa CNTT, Trường Đại học Thủy Lợi (TLU)  
**Đề tài BTL:** BTL-05 GreenSort – Hệ thống phân loại rác & điều phối thu gom thông minh  
**Họ và tên sinh viên:** Trần Đức Anh  
**Vai trò phụ trách:** Sinh viên 3 (SV3) – Phân hệ Điều phối viên (Coordinator) & Quản trị viên (Admin)  
**Nhánh GitHub:** `Tran_Duc_Anh`  
**Repository:** [https://github.com/namcuong2910/-GreenSort_Groud5](https://github.com/namcuong2910/-GreenSort_Groud5)  

---

## 1. PHẠM VI CÔNG VIỆC CHUYÊN TRÁCH CỦA SV3

Bạn phụ trách tổng cộng **6 màn hình nghiệp vụ cốt lõi** thuộc 2 vai trò nâng cao của hệ thống:

### Phân hệ Điều phối viên (Coordinator):
1. **`dieu-phoi-bang-yeu-cau.html` (Hàng đợi điều phối & SLA Kanban):**
   - Theo dõi toàn bộ đơn hàng thu gom từ người dân gửi lên theo thời gian thực.
   - Hiển thị mức ưu tiên tính bằng thuật toán AI-2 (P1 Khẩn cấp, P2 Ưu tiên, P3 Tiêu chuẩn).
   - Menu chọn xe và gán tài xế (Xe 01 - Hoàn Kiếm, Xe 02 - Đống Đa, Xe 03 - Cầu Giấy).
   - Tích hợp đồng bộ Real-time đa tab: Khi cư dân đặt lịch ở tab khác, bảng tự động re-render không cần F5!
2. **`dieu-phoi-quan-ly-diem-gom.html` (Giám sát trạm gom & Cảm biến IoT):**
   - Quản lý mạng lưới thùng rác công cộng và trạm thu gom phân loại trên địa bàn Hà Nội.
   - Hiển thị thanh tiến trình mức đầy cảm biến IoT (Xanh < 70%, Vàng 70-85%, Đỏ > 85%).
   - Nút điều xe khẩn cấp khi cảm biến vượt ngưỡng 85%.
3. **`dieu-phoi-thong-ke-bao-cao.html` (Báo cáo SLA & Hiệu suất điều phối):**
   - Biểu đồ cột Chart.js trực quan hóa tỷ lệ hoàn thành đơn theo cam kết thời gian SLA.
   - Thống kê tỷ lệ vi phạm SLA đô thị và khối lượng rác thu gom theo từng ngày.

### Phân hệ Quản trị viên (Admin):
4. **`quan-tri-bang-dieu-khien.html` (Tổng quan điều hành toàn hệ thống):**
   - Bảng Dashboard điều hành cấp cao: Tổng số người dùng, số điểm gom hoạt động, tấn rác thu hồi.
   - Biểu đồ tròn Doughnut Chart.js thể hiện cơ cấu 4 nhóm rác (Tái chế, Hữu cơ, Điện tử, Nguy hại).
   - Bảng 5 đơn hàng mới nhất kèm trạng thái và liên kết nhanh.
5. **`quan-tri-danh-muc-rac.html` (Quản trị danh mục loại rác & Điểm thưởng):**
   - Quản lý danh mục rác: Thêm loại rác mới, chỉnh sửa hệ số điểm thưởng (+điểm/kg), quy định phân loại.
   - Thao tác CRUD đầy đủ lưu trực tiếp vào LocalStorage (`gs_waste_types`).
6. **`quan-tri-nguoi-dung.html` (Quản trị người dùng & Phân quyền RBAC):**
   - Danh sách tài khoản hệ thống phân theo 4 vai trò: `resident`, `collector`, `coordinator`, `admin`.
   - Tìm kiếm theo họ tên, username, số điện thoại; lọc theo vai trò.
   - Chức năng xóa hoặc khóa tài khoản vi phạm.

---

## 2. 10 CÂU HỎI VẤN ĐÁP ĐIỂM 10 DÀNH RIÊNG CHO SV3

### Câu 1: Em hãy trình bày cơ chế phân quyền RBAC và kiểm soát truy cập trong hệ thống?
* **Trả lời:**
  *"Dạ thưa thầy, hệ thống nhóm em cài đặt cơ chế kiểm soát truy cập dựa trên vai trò (Role-Based Access Control) tại file `js/kiem-tra-quyen.js`.
  Hệ thống định nghĩa bảng phân quyền `DANH_SACH_QUYEN_THEO_VAI_TRO` cho 4 vai trò. Khi người dùng truy cập bất kỳ trang nào, hàm `kiemTraQuyenTruyCap()` sẽ đối chiếu `nguoiDungHienTai.role` với tên file hiện tại. Nếu tài khoản không có quyền (ví dụ Người dân cố tình truy cập vào trang Quản trị), hệ thống lập tức chặn lại và chuyển hướng về trang `403.html` kèm thông tin cảnh báo rõ ràng!"*

### Câu 2: Biểu đồ Chart.js ở trang Thống kê và Quản trị hoạt động như thế nào? Dữ liệu lấy từ đâu?
* **Trả lời:**
  *"Dạ thưa thầy, nhóm em sử dụng thư viện `Chart.js` phiên bản 4.4.1 UMD qua CDN.
  Tại hàm `khoiTaoBieuDoThongKe()`, em khởi tạo `new Chart(ctx, config)` với kiểu biểu đồ Doughnut (tròn) hoặc Bar (cột). Dữ liệu được trích xuất động từ `KhoDuLieu.pickupRequests.getAll()` bằng các phương thức xử lý mảng của ES6 như `filter()` và `reduce()` để tổng hợp số lượng rác theo từng nhóm trước khi truyền vào mảng `datasets.data` của Chart.js."*

### Câu 3: Làm thế nào để trang Điều phối tự động cập nhật đơn mới khi Cư dân bấm đặt lịch ở tab khác?
* **Trả lời:**
  *"Dạ thưa thầy, đây là tính năng nâng cao nhóm em tự hào đạt điểm Bonus. Nhóm em sử dụng cơ chế lắng nghe sự kiện `storage` của trình duyệt: `window.addEventListener('storage', ...)`. Khi Cư dân ở Tab 1 tạo đơn mới và ghi vào LocalStorage, trình duyệt sẽ tự động kích hoạt sự kiện `storage` trên tất cả các Tab khác cùng domain. Tại trang `dieu-phoi-bang-yeu-cau.html`, nhóm em bắt sự kiện này và gọi hàm `taiDanhSachYeuCauDieuPhoi()` để nạp lại danh sách hiển thị ngay lập tức mà Điều phối viên không cần phải bấm F5 reload trang!"*

### Câu 4: Em phòng chống tấn công XSS ở bảng danh sách yêu cầu điều phối như thế nào?
* **Trả lời:**
  *"Dạ thưa thầy, ở trang điều phối và quản trị, thông tin tên người gửi, địa chỉ, số điện thoại đều do người dùng nhập từ bên ngoài vào. Nếu chèn trực tiếp vào `innerHTML` thì sẽ bị lỗi XSS nghiêm trọng (vi phạm VP-02).
  Vì vậy, nhóm em đã viết hàm `escapeHTML()` trong `js/du-lieu.js` và `js/kiem-tra-quyen.js` để mã hóa toàn bộ 5 ký tự nguy hiểm: `&`, `<`, `>`, `"`, `'`. Mọi biến dữ liệu người dùng khi render ra bảng đều được bọc qua `${escapeHTML(yeuCau.address)}`, đảm bảo an toàn tuyệt đối trước mọi mã độc script!"*

### Câu 5: Em hãy chỉ ra cấu trúc ngữ nghĩa HTML5 trên trang Quản trị của em?
* **Trả lời:**
  *"Dạ thưa thầy, trang `quan-tri-bang-dieu-khien.html` của em tuân thủ nghiêm ngặt chuẩn HTML5 của barem:
  - Có đúng 1 thẻ `<header>` chứa logo thương hiệu, thanh điều hướng và thông tin người dùng đăng nhập.
  - Có đúng 1 thẻ `<main>` bao bọc toàn bộ nội dung quản trị trung tâm.
  - Có đúng 1 thẻ `<h1>` duy nhất tại dòng 86: `<h1 class="h4 fw-bold text-dark mb-1">Tổng quan Điều hành Toàn hệ thống (System Overview)</h1>`.
  - Có thẻ `<footer>` ở cuối trang."*

---
*Chúc bạn Trần Đức Anh tự tin, nắm vững toàn bộ nghiệp vụ Điều phối & Quản trị để cùng nhóm BTL-05 đạt điểm 10.0 xuất sắc!*
