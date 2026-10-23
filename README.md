# 🌿 BÁO CÁO BÀI TẬP LỚN CUỐI KỲ – HỌC PHẦN CSE122
## ĐỀ TÀI: BTL-05 GreenSort – Phân Loại Rác & Điều Phối Thu Gom Thông Minh

> **Học phần:** Phát triển ứng dụng Web cơ bản (CSE122)  
> **Khoa Công nghệ Thông tin - Trường Đại học Thủy Lợi (TLU)**  
> **Nhóm thực hiện:** Nhóm BTL-05  
> **Đường dẫn Repository:** [https://github.com/namcuong2910/-GreenSort_Groud5](https://github.com/namcuong2910/-GreenSort_Groud5)  
> **Website Demo (GitHub Pages):** [https://namcuong2910.github.io/-GreenSort_Groud5/](https://namcuong2910.github.io/-GreenSort_Groud5/)

---

## 👥 THÀNH VIÊN NHÓM VÀ PHÂN CÔNG TRÁCH NHIỆM

| STT | Họ và tên | Mã sinh viên | Tài khoản GitHub | Vai trò đảm nhận trong dự án | Màn hình chính | Trách nhiệm chéo |
|:---:|---|:---:|:---:|---|---|---|
| **1** | **Bùi Văn Nam Cường** *(Trưởng nhóm)* | **2551060590** | `namcuong2910` | **🌿 Người dân (Resident)** & Cụm màn hình xác thực | `cu-dan-tra-cuu-rac.html`<br>`cu-dan-diem-thu-gom.html`<br>`cu-dan-dat-lich-thu-gom.html`<br>`dang-nhap.html`, `dang-ky.html` | Xây dựng Design System, biến màu CSS (`giao-dien.css`), Navigation và AI-1 Waste Classifier |
| **2** | **Nguyễn Xuân Hùng** | Thành viên | `Nguyen_Xuan_Hung` | **🚛 Thu gom viên (Collector)** | `thu-gom-danh-sach-nhiem-vu.html`<br>`thu-gom-lo-trinh-tuyen-duong.html`<br>`thu-gom-chi-tiet-don.html` | Quản lý module dữ liệu trung tâm `du-lieu.js`, LocalStorage CRUD và AI-3 Route Suggestion |
| **3** | **Trần Đức Anh** | Thành viên | `Tran_Duc_Anh` | **📋 Điều phối viên & 🛡️ Quản trị viên** | `dieu-phoi-bang-yeu-cau.html`<br>`dieu-phoi-quan-ly-diem-gom.html`<br>`dieu-phoi-thong-ke-bao-cao.html`<br>`quan-tri-bang-dieu-khien.html`<br>`quan-tri-danh-muc-rac.html`<br>`quan-tri-nguoi-dung.html` | Quản lý kiểm thử Responsive, tích hợp phân quyền `kiem-tra-quyen.js`, phát hành GitHub Pages và AI-2 Priority Scorer |

---

## 📌 1. TỔNG QUAN HỆ THỐNG & 4 VAI TRÒ NGƯỜI DÙNG

Hệ thống **GreenSort** được thiết kế nhằm hiện đại hoá quy trình quản lý rác đô thị thông minh tại nguồn, hỗ trợ người dân dễ dàng phân loại rác và kết nối trực tiếp với đơn vị thu gom, điều phối xe vận hành tối ưu.

Toàn bộ hệ thống được Việt hóa chuẩn mực, hỗ trợ song song cả tên file tiếng Việt và các trang chuyển hướng tự động tiếng Anh để đảm bảo không bao giờ bị lỗi liên kết:

| Vai trò | Tệp tiếng Việt chính thức | Tệp tiếng Anh tương thích | Chức năng nghiệp vụ chính |
|---|---|---|---|
| **Xác thực** | `dang-nhap.html` | `dang-nhap.html` | Đăng nhập hệ thống, chọn nhanh 4 vai trò, lưu phiên |
| **Xác thực** | `dang-ky.html` | `dang-ky.html` | Đăng ký tài khoản người dân mới kèm validation |
| **Xác thực** | `quen-mat-khau.html` | `quen-mat-khau.html` | Khôi phục mật khẩu xác thực qua SĐT |
| **Người dân** | `cu-dan-tra-cuu-rac.html` | `cu-dan-tra-cuu-rac.html` | Tra cứu cách phân loại rác & **AI-1 Waste Classifier** |
| **Người dân** | `cu-dan-diem-thu-gom.html` | `cu-dan-diem-thu-gom.html` | Tìm kiếm trạm thu gom rác & xem mức đầy thùng rác |
| **Người dân** | `cu-dan-dat-lich-thu-gom.html` | `cu-dan-dat-lich-thu-gom.html` | Đặt lịch xe thu gom rác cồng kềnh (Đầy đủ CRUD) |
| **Thu gom viên** | `thu-gom-danh-sach-nhiem-vu.html` | `thu-gom-danh-sach-nhiem-vu.html` | Xem danh sách ca làm việc và nhiệm vụ thu gom hàng ngày |
| **Thu gom viên** | `thu-gom-lo-trinh-tuyen-duong.html` | `thu-gom-lo-trinh-tuyen-duong.html` | Bản đồ lộ trình di chuyển tối ưu hóa bằng **AI-3 Route Suggestion** |
| **Thu gom viên** | `thu-gom-chi-tiet-don.html` | `thu-gom-chi-tiet-don.html` | Check-in hoàn thành, cân khối lượng & chụp ảnh minh chứng |
| **Điều phối viên** | `dieu-phoi-bang-yeu-cau.html` | `dieu-phoi-bang-yeu-cau.html` | Bảng Kanban tiếp nhận, phân công tài xế & **AI-2 Priority Scorer** |
| **Điều phối viên** | `dieu-phoi-quan-ly-diem-gom.html` | `dieu-phoi-quan-ly-diem-gom.html` | Giám sát sức chứa % các điểm gom rác công cộng |
| **Điều phối viên** | `dieu-phoi-thong-ke-bao-cao.html` | `dieu-phoi-thong-ke-bao-cao.html` | Biểu đồ báo cáo khối lượng rác, tỷ lệ hoàn thành SLA |
| **Quản trị viên** | `quan-tri-bang-dieu-khien.html` | `quan-tri-bang-dieu-khien.html` | Bảng điều khiển KPI vận hành toàn diện hệ thống |
| **Quản trị viên** | `quan-tri-danh-muc-rac.html` | `quan-tri-danh-muc-rac.html` | Thêm, sửa, xóa, tìm kiếm danh mục phân loại rác (CRUD) |
| **Quản trị viên** | `quan-tri-nguoi-dung.html` | `quan-tri-nguoi-dung.html` | Quản lý danh sách tài khoản, phân quyền, khóa/mở tài khoản (CRUD) |

---

## 🤖 2. CÁC TÍNH NĂNG TRÍ TUỆ NHÂN TẠO (AI) TRIỂN KHAI PHÍA FRONTEND

GreenSort tích hợp đầy đủ **3 tính năng AI đặc thù** theo đúng quy định đề bài:

1. **AI-1: Trợ lý Phân loại Rác Thông minh (Waste Classifier)**
   - *Vị trí:* `cu-dan-tra-cuu-rac.html`
   - *Quy trình UX:* Người dùng nhập tên vật phẩm/chọn ảnh $\rightarrow$ Trạng thái Đang phân tích (Loading) $\rightarrow$ Kết quả độ tin cậy % $\rightarrow$ Giải thích khoa học & chỉ rõ màu thùng rác $\rightarrow$ Cho phép người dùng Chấp nhận / Sửa thủ công / Báo lỗi.
2. **AI-2: Thuật toán Chấm Điểm Ưu Tiên Thu Gom (Pickup Priority Scorer)**
   - *Vị trí:* `dieu-phoi-bang-yeu-cau.html` & `cu-dan-dat-lich-thu-gom.html`
   - *Quy trình UX:* Tự động tính điểm (0 - 100) dựa trên: tính chất nguy hại của rác (+45đ), cản trở giao thông đô thị (+35đ) và thời gian chờ vượt ngưỡng cam kết SLA (<2h, <12h, <48h).
3. **AI-3: Gợi ý Lộ Trình Tuyến Đường Tối Ưu (Route Suggestion)**
   - *Vị trí:* `thu-gom-lo-trinh-tuyen-duong.html`
   - *Quy trình UX:* Thu gom viên xem các điểm dừng $\rightarrow$ Bấm nút "Tối ưu lộ trình" $\rightarrow$ Hệ thống tính toán sắp xếp thứ tự điểm dừng tuần tự tiết kiệm quãng đường nhất $\rightarrow$ Giải thích lý do $\rightarrow$ Cho phép tài xế áp dụng hoặc đổi thứ tự thủ công.

---

## 🔑 3. TÀI KHOẢN ĐĂNG NHẬP THỬ NGHIỆM ĐỂ CHẤM ĐIỂM

Tại màn hình [`dang-nhap.html`](file:///c:/Users/admin/Downloads/wedtheogiatrinh/baitapchinhthuc/dang-nhap.html), người dùng chỉ cần bấm vào **1 trong 4 thẻ đại diện** ở trên cùng là hệ thống sẽ tự động điền sẵn tài khoản & mật khẩu:

| Vai trò | Tên đăng nhập | Mật khẩu | Trang chuyển hướng sau đăng nhập |
|---|---|---|---|
| **🌿 Người dân** | `nguyenvana` | `password123` | `cu-dan-tra-cuu-rac.html` |
| **🚛 Thu gom viên** | `xe_thu_gom_02` | `password123` | `thu-gom-danh-sach-nhiem-vu.html` |
| **📋 Điều phối viên** | `dieu_phoi_vien_01` | `password123` | `dieu-phoi-bang-yeu-cau.html` |
| **⚙️ Quản trị viên** | `admin` | `password123` | `quan-tri-bang-dieu-khien.html` |

---

## 📂 4. CẤU TRÚC THƯ MỤC MÃ NGUỒN

```text
baitapchinhthuc/
├── README.md                            # Báo cáo tổng quan dự án BTL-05
├── .gitignore                           # Loại trừ file rác hệ điều hành
├── docs/                                # Tài liệu kỹ thuật quy định
│   ├── ai-usage-report.md               # Báo cáo sử dụng AI theo mục 20 đề bài
│   ├── project-proposal.md              # Đề cương dự án
│   ├── roles-and-features.md            # Đặc tả vai trò & tính năng
│   ├── screen-list.md                   # Bảng kiểm kê màn hình đã duyệt
│   └── team-assignment.md               # Bảng phân công 3 thành viên
├── design/
│   ├── figma-link.txt                   # Liên kết thiết kế Figma
│   └── mockups/                         # Ảnh chụp bản vẽ thiết kế giao diện
│
├── css/
│   ├── giao-dien.css                    # CSS thuần Việt, biến màu & chuyển động
│   └── giao-dien.css                        # CSS tương thích
├── js/
│   ├── du-lieu.js                       # Module trung tâm KhoDuLieu (LocalStorage CRUD)
│   ├── kiem-tra-quyen.js                # Auth guard kiểm soát phân quyền 4 vai trò
│   ├── chinh.js                         # Xử lý tương tác giao diện và AI
│   ├── du-lieu.js                           # Alias tương thích ngược
│   ├── kiem-tra-quyen.js                    # Alias tương thích ngược
│   └── chinh.js                          # Alias tương thích ngược
└── assets/
    └── data/
        ├── du-lieu-rac.json             # CSDL danh mục phân loại rác thải
        └── du-lieu-rac.json              # Dữ liệu tương thích
```

---

## 🏆 5. ĐÁNH GIÁ MỨC ĐỘ HOÀN THIỆN THEO ĐỀ BÀI BTL-05

- **Số lượng màn hình hoàn thành:** 15 màn hình giao diện độc lập (vượt mức tối thiểu 12 màn hình) + các trang chuyển hướng tương thích.
- **Vai trò người dùng:** Đủ 4/4 vai trò (Người dân, Thu gom viên, Điều phối viên, Quản trị viên).
- **Tính năng AI:** Đủ 3/3 tính năng AI mô phỏng phía Frontend (AI-1, AI-2, AI-3) có đầy đủ trạng thái Loading, Thành công, Thất bại và Human-in-the-loop.
- **Tính liên kết dữ liệu:** Dữ liệu tạo mới từ Người dân (đặt lịch) ngay lập tức xuất hiện tại Bảng điều phối của Coordinator, được bàn giao cho Thu gom viên và tổng hợp lên Dashboard của Admin thông qua module `KhoDuLieu` lưu trữ trong `LocalStorage`.
- **Thiết kế & Giao diện:** Sử dụng Bootstrap 5.3 kết hợp CSS3 tùy biến, chuẩn Responsive Mobile - Tablet - Desktop, bảng màu sinh thái hài hòa, hiệu ứng mượt mà và tương tác trực quan.
