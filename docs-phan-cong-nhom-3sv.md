# KẾ HOẠCH PHÂN CHIA CÔNG VIỆC NHÓM 3 SINH VIÊN (BTL-05 GREENSORT)
Học phần: Phát triển ứng dụng Web cơ bản – CSE122  
Đề tài: GreenSort – Phân loại rác và điều phối thu gom thông minh

---

## 1. NGUYÊN TẮC BẮT BUỘC KHI CHIA VIỆC (THEO THẦY CÔ YÊU CẦU)
1. **Lát cắt dọc (Vertical Slice):** Mỗi sinh viên **bắt buộc phải tự làm cả HTML + CSS + JavaScript + Git + OBS**. Không được chia theo kiểu "1 người chỉ làm HTML", "1 người chỉ CSS", "1 người chỉ làm Figma/báo cáo".
2. **Khối lượng cân bằng:** Mỗi thành viên phụ trách 1 vai trò chính (chứa các màn hình cốt lõi) + 1 trách nhiệm kỹ thuật xuyên suốt.
3. **Phục vụ cả Giữa kỳ & Cuối kỳ:**
   - **Giữa kỳ (Cá nhân):** Mỗi người chọn đúng **01 trang chính** trong vai trò của mình để quay video 3 phút và lấy điểm 10 cá nhân.
   - **Cuối kỳ (Nhóm):** Tích hợp tất cả các trang thành 1 web hoàn chỉnh đẩy lên repo nhóm.

---

## 2. BẢNG PHÂN CÔNG CHI TIẾT CHO 3 SINH VIÊN

### 👤 SINH VIÊN 1 (SV1) – NHÓM TRƯỞNG: VAI TRÒ NGƯỜI DÂN (RESIDENT)
> **Trang nộp giữa kỳ chọn:** `resident-waste-guide.html`

- **Vai trò nghiệp vụ chính:** Người dân đô thị (Cư dân, Hộ gia đình).
- **Trách nhiệm kỹ thuật xuyên suốt:** Hệ thống thiết kế (Design System) + Điều hướng chung + Khả năng tiếp cận (Accessibility).
- **Các màn hình phụ trách:**
  1. `resident-waste-guide.html`: Hướng dẫn phân loại rác & Tra cứu thời gian thực.
  2. `resident-collection-points.html`: Bản đồ mạng lưới trạm thu gom rác & điểm đổi quà.
  3. `resident-pickup-request.html`: Form gửi yêu cầu thu gom đồ cồng kềnh.
  4. Màn hình dùng chung: `register.html` (Đăng ký tài khoản).
- **Tính năng AI chịu trách nhiệm:**
  - **AI-1: Waste Classifier** (Trợ lý nhận diện và phân loại rác thông minh).
- **Công việc cụ thể cần làm:**
  - Thiết kế Frame Figma cho các trang của Người dân.
  - Viết code HTML semantic + Bootstrap Grid.
  - Viết logic JS cho ô tìm kiếm tức thì, lọc category, mở Modal xem chi tiết rác.
  - Quay video OBS (3 phút) giải thích trang `resident-waste-guide.html`.

---

### 👤 SINH VIÊN 2 (SV2): VAI TRÒ NHÂN VIÊN THU GOM (COLLECTOR)
> **Trang nộp giữa kỳ chọn:** `collector-task-list.html`

- **Vai trò nghiệp vụ chính:** Nhân viên thu gom hiện trường (Tài xế xe gom, Công nhân môi trường).
- **Trách nhiệm kỹ thuật xuyên suốt:** Lập trình JavaScript tương tác + Quản lý Mock Data (JSON & LocalStorage).
- **Các màn hình phụ trách:**
  1. `collector-task-list.html`: Danh sách nhiệm vụ thu gom trong ngày & tiến độ tải xe.
  2. `collector-route-view.html`: Bản đồ lộ trình di chuyển tối ưu giữa các điểm dừng.
  3. `collector-request-detail.html`: Xem chi tiết yêu cầu, ảnh chụp rác và nút xác nhận đã lấy hàng.
  4. Màn hình dùng chung: `login.html` (Trang đăng nhập xác thực tài khoản).
- **Tính năng AI phối hợp:**
  - Phối hợp mô phỏng hiển thị lộ trình gom rác theo thứ tự tối ưu.
- **Công việc cụ thể cần làm:**
  - Thiết kế Frame Figma cho giao diện Thu gom viên trên Mobile (vì công nhân dùng điện thoại).
  - Viết HTML/CSS các thẻ nhiệm vụ dạng Timeline/Card.
  - Viết logic JS: Cập nhật trạng thái nhiệm vụ (Đang tới → Đã lấy hàng), upload ảnh chụp xác nhận, lưu dữ liệu vào LocalStorage.
  - Đánh giá chéo Pull Request (Review code) của SV1.
  - Quay video OBS (3 phút) giải thích trang `collector-task-list.html`.

---

### 👤 SINH VIÊN 3 (SV3): VAI TRÒ ĐIỀU PHỐI VIÊN & QUẢN TRỊ (COORDINATOR / ADMIN)
> **Trang nộp giữa kỳ chọn:** `coordinator-request-board.html`

- **Vai trò nghiệp vụ chính:** Điều phối viên đơn vị vận hành (Phân công xe, giám sát hạn SLA).
- **Trách nhiệm kỹ thuật xuyên suốt:** Responsive toàn hệ thống + Tích hợp Git/GitHub + Đảm bảo chất lượng (QA/Testing).
- **Các màn hình phụ trách:**
  1. `coordinator-request-board.html`: Bảng Kanban / Hàng đợi phân công yêu cầu thu gom.
  2. `coordinator-point-management.html`: Quản lý các điểm trạm thu gom và sức chứa.
  3. `coordinator-analytics.html` hoặc `admin-dashboard.html`: Báo cáo biểu đồ thống kê rác thải.
  4. Màn hình dùng chung: `404.html` hoặc trang Profile cá nhân.
- **Tính năng AI chịu trách nhiệm:**
  - **AI-2: Priority Scorer** (Tự động chấm điểm ưu tiên yêu cầu P1, P2, P3).
  - **AI-3: Route Suggestion** (Gợi ý thứ tự gom hàng tối ưu theo khu vực).
- **Công việc cụ thể cần làm:**
  - Thiết kế Frame Figma Dashboard dạng bảng điều khiển chuyên nghiệp trên Desktop.
  - Viết HTML Semantic bảng dữ liệu `<table>` hoặc cột Kanban responsive.
  - Viết JS: Thao tác phân công tài xế, đếm ngược hạn SLA, lọc đơn theo mức ưu tiên P1/P2/P3.
  - Quản lý repo Git, kiểm tra không bị xung đột code khi gộp nhánh `dev` vào `main`.
  - Quay video OBS (3 phút) giải thích trang `coordinator-request-board.html`.

---

## 3. BẢNG PHÂN CHIA NHANH DÀNH CHO TRELLO / NOTION

| Thành viên | Vai trò | Trang nộp bài Giữa kỳ | Nhánh Git riêng | Trách nhiệm chính |
|---|---|---|---|---|
| **SV1 (Trưởng nhóm)** | Người dân (Resident) | `resident-waste-guide.html` | `feature/resident-module` | UI Kit, AI Phân loại rác, Tra cứu rác |
| **SV2** | Thu gom viên (Collector) | `collector-task-list.html` | `feature/collector-module` | JS LocalStorage, Nhiệm vụ hiện trường, Mobile UX |
| **SV3** | Điều phối viên (Coordinator) | `coordinator-request-board.html` | `feature/coordinator-module` | Bảng SLA Kanban, AI Gợi ý tuyến, Tích hợp Git |

---

## 4. QUY TRÌNH HỢP TÁC LÀM VIỆC TRÊN GITHUB
1. Nhóm tạo repo chung: `cse122-greensort-teamXX`.
2. Tạo 2 nhánh chính: `main` (sản phẩm chính) và `dev` (nhánh phát triển).
3. Mỗi người checkout nhánh riêng của mình:
   - SV1: `git checkout -b feature/resident-module`
   - SV2: `git checkout -b feature/collector-module`
   - SV3: `git checkout -b feature/coordinator-module`
4. Khi làm xong, tạo **Pull Request (PR)** vào `dev`, người khác vào bấm **Approve (Duyệt chéo)** rồi mới Merge.
5. Mỗi người quay video OBS cá nhân 3 phút mở đúng trang mình phụ trách và giải thích mã nguồn của mình.
