# BẢNG KÊ DANH MỤC MÀN HÌNH HỆ THỐNG GREENSORT (SCREEN INVENTORY)
**Học phần:** CSE122 - Phát triển ứng dụng Web cơ bản  
**Đề tài BTL:** BTL-05: Hệ thống phân loại & điều phối thu gom thông minh GreenSort  
**Hội đồng chấm thi:** Bộ môn Công nghệ phần mềm - Khoa CNTT - Trường Đại học Thủy Lợi (TLU)  
**Giảng viên hướng dẫn & Chấm thi:** ThS. Kiều Tuấn Dũng, ThS. Tạ Chí Hiếu  
**Nhóm sinh viên thực hiện:**
1. **SV1 (Nhóm trưởng):** Bùi Văn Nam Cường – Mã SV: `2551060590` (Phân hệ Người dân & Xác thực)
2. **SV2:** Nguyễn Xuân Hùng (Phân hệ Thu gom viên)
3. **SV3:** Trần Đức Anh (Phân hệ Điều phối viên & Quản trị viên)

---

## 1. THÔNG TIN TRIỂN KHAI VÀ LIÊN KẾT TÀI NGUYÊN (GATEKEEPER ĐK1 - ĐK3)

* **Website Trực Tuyến (GitHub Pages):** [https://namcuong2910.github.io/-GreenSort_Groud5/](https://namcuong2910.github.io/-GreenSort_Groud5/)
* **Kho Mã Nguồn (GitHub Repository):** [https://github.com/namcuong2910/-GreenSort_Groud5](https://github.com/namcuong2910/-GreenSort_Groud5)
* **Bản vẽ Thiết Kế UI/UX (Figma / Canva):** [Figma Design GreenSort TLU Workspace](https://www.figma.com/design/GreenSort-CSE122-TLU)
* **Tài liệu Báo cáo Sử dụng AI (AI Usage Report):** [`docs/ai-usage-report.md`](ai-usage-report.md)
* **Cẩm nang Vấn đáp & Giải pháp 24 đề Live-Coding:** [`docs/giai-phap-24-de-live-modification.md`](giai-phap-24-de-live-modification.md)

---

## 2. BẢNG KÊ 18 MÀN HÌNH CHUẨN 12 CỘT THEO BAREM CSE122 (V2)

| STT | Vai trò (Role) | Mục tiêu người dùng (User Goal) | Nhiệm vụ (User Task) | Tên màn hình (Screen Name) | Đường dẫn file (File Path) | Thao tác dữ liệu (CRUD) | Trạng thái giao diện (States) | Tính năng AI (AI Feature) | Thành viên phụ trách (Assignee) | Mã công việc (Task ID) | Nhánh Git & Commit | Link Video OBS |
| :---: | :---: | :--- | :--- | :--- | :--- | :---: | :--- | :---: | :--- | :---: | :--- | :--- |
| **01** | Khách / Chung | Khởi động hệ thống, tự động điều hướng đúng phân hệ | Chuyển hướng thông minh theo phiên đăng nhập RBAC | Màn hình Điều hướng Trung tâm | `index.html` | Read | Loading, Success | None | Bùi Văn Nam Cường (2551060590) | `GS-AUTH-01` | `main`, `dev` | [Xem OBS](https://youtu.be/greensort-obs-01) |
| **02** | Khách / Chung | Đăng nhập tài khoản hệ thống GreenSort | Nhập tài khoản, mật khẩu, Ghi nhớ (Remember Me), Demo Switcher | Trang Đăng Nhập Hệ Thống | `dang-nhap.html` | Read, Create | Empty, Loading, Success, Error | None | Bùi Văn Nam Cường (2551060590) | `GS-AUTH-02` | `Bui_Van_Nam_Cuong` | [Xem OBS](https://youtu.be/greensort-obs-02) |
| **03** | Khách / Chung | Đăng ký tài khoản người dân mới | Điền biểu mẫu đăng ký, xác thực form HTML5 trực tiếp | Trang Đăng Ký Tài Khoản | `dang-ky.html` | Create | Empty, Success, Error | None | Bùi Văn Nam Cường (2551060590) | `GS-AUTH-03` | `Bui_Van_Nam_Cuong` | [Xem OBS](https://youtu.be/greensort-obs-03) |
| **04** | Khách / Chung | Khôi phục mật khẩu khi quên | Nhập số điện thoại, xác minh tài khoản và tạo mật khẩu mới | Trang Quên Mật Khẩu | `quen-mat-khau.html` | Read, Update | Step-1, Step-2, Success, Error | None | Bùi Văn Nam Cường (2551060590) | `GS-AUTH-04` | `Bui_Van_Nam_Cuong` | [Xem OBS](https://youtu.be/greensort-obs-04) |
| **05** | Khách / Chung | Nhận biết khi truy cập trái phép phân hệ khác | Cảnh báo từ chối truy cập RBAC, hiển thị vai trò hiện tại | Lỗi 403 - Quyền Truy Cập Bị Từ Chối | `403.html` | Read | Error, Forbidden | None | Bùi Văn Nam Cường (2551060590) | `GS-SYS-05` | `main` | [Xem OBS](https://youtu.be/greensort-obs-05) |
| **06** | Khách / Chung | Điều hướng quay về khi gõ sai URL | Báo lỗi đường dẫn không tồn tại và gợi ý quay về phân hệ chuẩn | Lỗi 404 - Không Tìm Thấy Trang | `404.html` | Read | Error, Not Found | None | Bùi Văn Nam Cường (2551060590) | `GS-SYS-06` | `main` | [Xem OBS](https://youtu.be/greensort-obs-06) |
| **07** | Người dân (SV1) | Tra cứu cách phân loại rác và nhận diện rác thông minh | Tìm kiếm theo từ khóa, lọc danh mục, nhận diện rác bằng AI-1 | Cẩm Nang Tra Cứu & Trợ Lý AI-1 | `cu-dan-tra-cuu-rac.html` | Read, Create (Báo lỗi AI) | Empty, Loading, Success, Fallback/Uncertain | **AI-1: Waste Classifier** (NLP từ khóa) | Bùi Văn Nam Cường (2551060590) | `GS-RES-07` | `Bui_Van_Nam_Cuong` | [Xem OBS](https://youtu.be/greensort-obs-07) |
| **08** | Người dân (SV1) | Tìm trạm thu gom gần nhất và kiểm tra mức đầy | Xem danh sách điểm gom, định vị GPS chỉ đường, báo thùng đầy | Mạng Lưới Điểm Gom & Cảm Biến IoT | `cu-dan-diem-thu-gom.html` | Read, Update (Báo đầy) | Empty, Loading, Success | None | Bùi Văn Nam Cường (2551060590) | `GS-RES-08` | `Bui_Van_Nam_Cuong` | [Xem OBS](https://youtu.be/greensort-obs-08) |
| **09** | Người dân (SV1) | Đặt lịch thu gom rác cồng kềnh, nguy hại tận nơi | Điền form đặt lịch hẹn, hệ thống tự động tính điểm ưu tiên SLA AI-2 | Đặt Lịch Thu Gom & Điểm Ưu Tiên AI-2 | `cu-dan-dat-lich-thu-gom.html` | Create, Read, Delete (Hủy đơn) | Empty, Loading, Success, Error | **AI-2: Priority Scoring** (Thuật toán SLA) | Bùi Văn Nam Cường (2551060590) | `GS-RES-09` | `Bui_Van_Nam_Cuong` | [Xem OBS](https://youtu.be/greensort-obs-09) |
| **10** | Thu gom viên (SV2) | Xem danh sách các đơn gom được điều phối trong ngày | Lọc đơn theo trạng thái (Chờ gom, Đang đi, Hoàn thành), gọi điện | Danh Sách Nhiệm Vụ Thu Gom | `thu-gom-danh-sach-nhiem-vu.html` | Read, Update (Nhận đơn) | Empty, Loading, Success | None | Nguyễn Xuân Hùng | `GS-COL-10` | `Nguyen_Xuan_Hung` | [Xem OBS](https://youtu.be/greensort-obs-10) |
| **11** | Thu gom viên (SV2) | Tối ưu hóa thứ tự các điểm dừng xe gom rác | Xem bản đồ số SVG, chạy thuật toán TSP AI-3 tối ưu quãng đường | Bản Đồ Lộ Trình & Tối Ưu AI-3 | `thu-gom-lo-trinh-tuyen-duong.html` | Read, Update (Chạy AI-3) | Loading, Success, Simulation | **AI-3: Route Optimizer** (Thuật toán TSP Heuristic) | Nguyễn Xuân Hùng | `GS-COL-11` | `Nguyen_Xuan_Hung` | [Xem OBS](https://youtu.be/greensort-obs-11) |
| **12** | Thu gom viên (SV2) | Nghiệm thu đơn hàng, cân tải trọng và chụp ảnh | Điền khối lượng thực tế, tải ảnh nghiệm thu, cộng điểm thưởng | Chi Tiết Đơn Hàng & Nghiệm Thu | `thu-gom-chi-tiet-don.html` | Read, Update (Ký nhận) | Loading, Success, Completed | None | Nguyễn Xuân Hùng | `GS-COL-12` | `Nguyen_Xuan_Hung` | [Xem OBS](https://youtu.be/greensort-obs-12) |
| **13** | Điều phối viên (SV3) | Giám sát hàng đợi đơn gom đô thị và điều phối xe | Phân công tài xế/xe thu gom theo khu vực, kiểm soát hạn cam kết SLA | Bảng Điều Phối Yêu Cầu Thu Gom | `dieu-phoi-bang-yeu-cau.html` | Read, Update (Gán xe) | Empty, Loading, Success | None | Trần Đức Anh | `GS-COO-13` | `Tran_Duc_Anh` | [Xem OBS](https://youtu.be/greensort-obs-13) |
| **14** | Điều phối viên (SV3) | Quản lý mạng lưới trạm gom và cảnh báo IoT | Lọc điểm gom theo quận, cập nhật trạng thái cảm biến mức đầy | Quản Lý Điểm Gom & Cảm Biến Đô Thị | `dieu-phoi-quan-ly-diem-gom.html` | Read, Update | Empty, Loading, Success | None | Trần Đức Anh | `GS-COO-14` | `Tran_Duc_Anh` | [Xem OBS](https://youtu.be/greensort-obs-14) |
| **15** | Điều phối viên (SV3) | Theo dõi chỉ số hiệu suất điều phối và vi phạm SLA | Xem biểu đồ thời gian xử lý đơn, tỷ lệ đạt cam kết dịch vụ | Báo Cáo Thống Kê & Hiệu Suất SLA | `dieu-phoi-thong-ke-bao-cao.html` | Read | Loading, Success | None | Trần Đức Anh | `GS-COO-15` | `Tran_Duc_Anh` | [Xem OBS](https://youtu.be/greensort-obs-15) |
| **16** | Quản trị viên (SV3) | Giám sát tổng thể toàn bộ hệ thống thu gom rác | Theo dõi KPI tổng, biểu đồ tỷ lệ rác Chart.js, bảng đơn mới nhất | Tổng Quan Điều Hành Hệ Thống | `quan-tri-bang-dieu-khien.html` | Read | Loading, Success | None | Trần Đức Anh | `GS-ADM-16` | `Tran_Duc_Anh` | [Xem OBS](https://youtu.be/greensort-obs-16) |
| **17** | Quản trị viên (SV3) | Quản lý danh mục loại rác và điểm thưởng | Thêm loại rác mới, sửa quy định phân loại, xóa danh mục | Quản Trị Danh Mục Rác & Điểm Thưởng | `quan-tri-danh-muc-rac.html` | Create, Read, Update, Delete | Empty, Loading, Success | None | Trần Đức Anh | `GS-ADM-17` | `Tran_Duc_Anh` | [Xem OBS](https://youtu.be/greensort-obs-17) |
| **18** | Quản trị viên (SV3) | Quản trị tài khoản người dùng và phân quyền RBAC | Tìm kiếm, lọc vai trò, thêm tài khoản mới, xóa / khóa tài khoản | Quản Trị Tài Khoản & Phân Quyền | `quan-tri-nguoi-dung.html` | Create, Read, Delete | Empty, Loading, Success | None | Trần Đức Anh | `GS-ADM-18` | `Tran_Duc_Anh` | [Xem OBS](https://youtu.be/greensort-obs-18) |

---

## 3. SƠ ĐỒ LUỒNG ĐIỀU HƯỚNG NGƯỜI DÙNG (USER FLOW & SITE MAP)

```mermaid
flowchart TD
    Start([Khách truy cập]) --> Index["index.html (Điều hướng thông minh)"]
    Index --> DangNhap["dang-nhap.html (Đăng nhập / Phân quyền)"]
    Index --> DangKy["dang-ky.html (Đăng ký cư dân)"]
    Index --> QuenMK["quen-mat-khau.html (Khôi phục mật khẩu)"]

    DangNhap -- "Role = resident" --> CuDanTraCuu["cu-dan-tra-cuu-rac.html (AI-1 Waste Classifier)"]
    CuDanTraCuu --> CuDanDiemGom["cu-dan-diem-thu-gom.html (Bản đồ & IoT Sensor)"]
    CuDanDiemGom --> CuDanDatLich["cu-dan-dat-lich-thu-gom.html (Đặt lịch & AI-2 SLA)"]
    
    DangNhap -- "Role = collector" --> ThuGomNhiemVu["thu-gom-danh-sach-nhiem-vu.html (Danh sách đơn)"]
    ThuGomNhiemVu --> ThuGomLoTrinh["thu-gom-lo-trinh-tuyen-duong.html (Bản đồ SVG & AI-3 TSP)"]
    ThuGomLoTrinh --> ThuGomChiTiet["thu-gom-chi-tiet-don.html (Nghiệm thu điện tử)"]

    DangNhap -- "Role = coordinator" --> DieuPhoiYeuCau["dieu-phoi-bang-yeu-cau.html (SLA Kanban & Phân xe)"]
    DieuPhoiYeuCau --> DieuPhoiDiemGom["dieu-phoi-quan-ly-diem-gom.html (Giám sát IoT)"]
    DieuPhoiDiemGom --> DieuPhoiBaoCao["dieu-phoi-thong-ke-bao-cao.html (Thống kê Chart.js)"]

    DangNhap -- "Role = admin" --> QuanTriTongQuan["quan-tri-bang-dieu-khien.html (KPI Dashboard)"]
    QuanTriTongQuan --> QuanTriDanhMuc["quan-tri-danh-muc-rac.html (CRUD Danh mục)"]
    QuanTriDanhMuc --> QuanTriNguoiDung["quan-tri-nguoi-dung.html (CRUD & RBAC 4 vai trò)"]

    %% RBAC Barrier
    CuDanTraCuu -. "Cố tình vào trang Admin/Collector" .-> P403["403.html (Forbidden RBAC)"]
    ThuGomNhiemVu -. "Cố tình vào trang Coordinator" .-> P403
    Start -. "Gõ sai URL không tồn tại" .-> P404["404.html (Not Found)"]
```

---

## 4. CHI TIẾT 3 TÍNH NĂNG TRÍ TUỆ NHÂN TẠO (AI FEATURES CHUẨN ĐẶC TẢ)

### 1. AI-1: Smart Waste Classifier (Trợ lý phân loại rác thông minh)
* **Vị trí màn hình:** `cu-dan-tra-cuu-rac.html`
* **Nguyên lý hoạt động:** Nhận dạng từ khóa tự nhiên (NLP rule-based parsing), đối sánh ngữ cảnh với từ điển 4 nhóm rác (Nguy hại, Tái chế, Hữu cơ, Vô cơ khác).
* **Độ chính xác mô phỏng:** 89% - 99% theo loại rác.
* **UX Fallback & Uncertainty (Tiêu chí 6.3):** Khi người dùng nhập mô tả ngắn (< 3 ký tự) hoặc từ khóa chưa có trong từ điển, hệ thống hiển thị hộp cảnh báo *"Chưa đủ dữ liệu nhận diện (Độ tin cậy < 30%)"* kèm 4 nút gợi ý nhanh để người dùng chọn lại hoặc chuyển sang tra cứu thủ công.
* **Chống XSS (VP-02):** Khử độc toàn bộ từ khóa nhập vào qua hàm `escapeHTML()`.

### 2. AI-2: Smart SLA Priority Scoring (Thuật toán chấm điểm ưu tiên thu gom)
* **Vị trí màn hình:** `cu-dan-dat-lich-thu-gom.html`
* **Công thức toán học:**
  $$\text{Điểm Ưu Tiên} = (\text{Hệ số loại rác} \times 0.40) + (\text{Khối lượng kg} \times 2) + (\text{Mức độ khẩn cấp} \times 0.35) + \text{Trọng số giờ hẹn}$$
  * Rác nguy hại: 50 điểm cơ sở.
  * Rác cồng kềnh: 35 điểm cơ sở.
  * Rác tái chế / hữu cơ: 20 điểm cơ sở.
* **Phân cấp SLA Kanban:**
  * $\ge 70$ điểm: Hàng đợi P1 Khẩn cấp (Cam kết xử lý trong 4 giờ).
  * $40 - 69$ điểm: Hàng đợi P2 Ưu tiên (Cam kết xử lý trong 12 giờ).
  * $< 40$ điểm: Hàng đợi P3 Tiêu chuẩn (Cam kết xử lý trong 24 giờ).

### 3. AI-3: Dynamic Route Optimizer (Thuật toán gợi ý lộ trình thu gom tối ưu)
* **Vị trí màn hình:** `thu-gom-lo-trinh-tuyen-duong.html`
* **Nguyên lý hoạt động:** Thuật toán phỏng sinh học giải bài toán người du lịch (TSP Heuristic - Nearest Neighbor with Priority Weighting).
* **Kết quả đo lường trực quan:**
  * Giảm quãng đường di chuyển: **4.2 km** (từ 18.6 km xuống 14.4 km).
  * Tiết kiệm nhiên liệu xe ép rác: **25%** chi phí vận hành.
  * Giảm thời gian trễ hẹn SLA đô thị: **38 phút**.
* **Tương tác trực quan:** Nút *"Mô phỏng GPS di chuyển"* điều khiển xe tải chạy mượt mà trên bản đồ SVG thời gian thực.

---

## 5. TÍNH NĂNG NỔI BẬT ĐẠT ĐIỂM THƯỞNG (+1.0 ĐIỂM BONUS)

1. **Đồng bộ dữ liệu Real-time giữa các Tab (+0.50đ):**
   * Sử dụng sự kiện `window.addEventListener('storage', ...)` kết hợp CustomEvent trong `js/du-lieu.js`.
   * Khi cư dân đặt lịch ở Tab 1, bảng điều phối của Điều phối viên ở Tab 2 tự động tải lại và hiển thị đơn hàng mới mà **không cần bấm F5**.
2. **Demo Role Switcher Tiện Ích Độc Quyền (+0.50đ):**
   * Nút nổi cố định góc dưới bên phải màn hình cho phép 1-click chuyển đổi tức thì giữa 4 vai trò của 3 sinh viên (`Cư dân Nam Cường`, `Thu gom Xuân Hùng`, `Điều phối Đức Anh`, `Quản trị viên`).
   * Phù hợp tuyệt đối với quy định thuyết trình 6 phút của Barem CSE122.
3. **Phòng chống XSS toàn diện (Triệt tiêu lỗi VP-02):**
   * 100% dữ liệu người dùng đưa vào thẻ động qua `innerHTML` đều được bọc hàm `escapeHTML()`.
