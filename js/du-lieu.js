/**
 * GreenSort - Hệ thống phân loại & điều phối thu gom thông minh
 * Tệp JavaScript: Quản lý và lưu trữ dữ liệu (du-lieu.js)
 * 
 * Học phần: CSE122 - Phát triển ứng dụng Web cơ bản
 * Khoa Công nghệ thông tin - Đại học Thủy Lợi (TLU)
 * Nhóm sinh viên thực hiện: BTL-05
 * 
 * Áp dụng kiến thức:
 *   - Chương 5: Vanilla JavaScript (Biến, Kiểu dữ liệu, Mảng, Đối tượng, Hàm)
 *   - Chương 6: Web Storage (localStorage.getItem, localStorage.setItem, JSON.parse, JSON.stringify)
 *   - Chương 8: Cấu trúc dữ liệu JSON và mô phỏng giao thức REST API (GET, POST, PUT, DELETE)
 *   - Chương 9: Tư duy Clean Code (KISS - Giữ code đơn giản, DRY - Tránh lặp code)
 */

// ==========================================================================
// 1. CÁC HÀM TIỆN ÍCH LƯU TRỮ VÀO LOCALSTORAGE (CHƯƠNG 6)
// ==========================================================================

/**
 * Đọc dữ liệu từ bộ nhớ trình duyệt localStorage theo khóa
 * @param {string} khoa - Tên khóa lưu trữ trong localStorage
 * @param {any} giaTriMacDinh - Giá trị mặc định trả về nếu chưa có dữ liệu hoặc gặp lỗi
 * @returns {any} Dữ liệu đã được chuyển đổi từ chuỗi JSON sang đối tượng/mảng JavaScript
 */
function docDuLieu(khoa, giaTriMacDinh = []) {
  try {
    const chuoiDuLieu = localStorage.getItem(khoa);
    if (!chuoiDuLieu) return giaTriMacDinh;
    return JSON.parse(chuoiDuLieu);
  } catch (loi) {
    console.warn(`Lỗi khi đọc dữ liệu khóa "${khoa}":`, loi);
    return giaTriMacDinh;
  }
}

/**
 * Ghi dữ liệu vào bộ nhớ trình duyệt localStorage dưới dạng chuỗi JSON
 * @param {string} khoa - Tên khóa lưu trữ trong localStorage
 * @param {any} duLieu - Dữ liệu cần lưu (mảng hoặc đối tượng)
 */
function ghiDuLieu(khoa, duLieu) {
  try {
    localStorage.setItem(khoa, JSON.stringify(duLieu));
  } catch (loi) {
    console.error(`Lỗi khi ghi dữ liệu khóa "${khoa}":`, loi);
  }
}

/**
 * Tạo mã định danh ngẫu nhiên đơn giản
 * @param {string} tienTo - Tiền tố mã (ví dụ: REQ, cp, wt)
 * @returns {string} Mã định danh duy nhất
 */
function taoMaNgauNhien(tienTo) {
  const duoiThoiGian = Date.now().toString().slice(-6);
  const soNgauNhien = Math.floor(100 + Math.random() * 900);
  return `${tienTo}-${duoiThoiGian}${soNgauNhien}`;
}

// ==========================================================================
// 2. DỮ LIỆU MẪU BAN ĐẦU (SEED DATA)
// ==========================================================================

// Danh sách các điểm thu hồi và trạm trung chuyển rác mẫu
const DANH_SACH_DIEM_THU_GOM_MAU = [
  {
    id: "cp-001",
    name: "Điểm Thu Hồi Pin & Thiết Bị Điện Tử TLU",
    address: "175 Tây Sơn, Đống Đa, Hà Nội",
    district: "Đống Đa",
    type: "hazardous",
    accepts: "Pin, ắc quy, bóng đèn, sạc hỏng",
    acceptedTypes: ["Rác nguy hại", "Pin cũ", "Bóng đèn"],
    hours: "07:30 - 18:00 (Hàng ngày)",
    phone: "(024) 3852 2201",
    status: "open",
    lat: 21.0115,
    lng: 105.8215,
    fillLevel: 42
  },
  {
    id: "cp-002",
    name: "Trạm GreenHub Tái Chế Xanh",
    address: "Số 45 Chùa Bộc, Quang Trung, Đống Đa, Hà Nội",
    district: "Đống Đa",
    type: "recyclable",
    accepts: "Chai nhựa, vỏ lon, giấy báo, bìa",
    acceptedTypes: ["Rác tái chế", "Chai nhựa", "Giấy bìa"],
    hours: "08:00 - 17:00 (Thứ 2 - Thứ 7)",
    phone: "(024) 3851 1234",
    status: "open",
    reward: "Đổi 5kg nhựa = 1 sen đá",
    lat: 21.0085,
    lng: 105.8265,
    fillLevel: 68
  },
  {
    id: "cp-003",
    name: "Trạm Trung Chuyển Rác Cồng Kềnh Hoàng Cầu",
    address: "Ngõ 59 Hoàng Cầu, Ô Chợ Dừa, Đống Đa, Hà Nội",
    district: "Đống Đa",
    type: "heavy",
    accepts: "Bàn ghế hỏng, đệm mút, tủ gỗ cũ, sofa lớn",
    acceptedTypes: ["Rác cồng kềnh", "Đồ gỗ gia dụng", "Đệm mút"],
    hours: "14:00 - 21:00 (Thứ 3 & Thứ 7)",
    phone: "(024) 3856 5678",
    status: "open",
    lat: 21.0165,
    lng: 105.8195,
    fillLevel: 55
  },
  {
    id: "cp-004",
    name: "Nhà Thuốc Xanh Cộng Đồng TLU",
    address: "Trạm Y Tế Đại Học Thủy Lợi, Đống Đa, Hà Nội",
    district: "Đống Đa",
    type: "hazardous",
    accepts: "Thuốc tây hết hạn, vỏ lọ thuốc, bao bì y tế",
    acceptedTypes: ["Rác nguy hại", "Thuốc tây hết hạn", "Vỏ lọ thuốc"],
    hours: "08:00 - 17:30 (Thứ 2 - Thứ 6)",
    phone: "(024) 3857 9999",
    status: "open",
    lat: 21.0125,
    lng: 105.8225,
    fillLevel: 25
  },
  {
    id: "cp-005",
    name: "Trạm Thu Gom Rác Hữu Cơ Cộng Đồng Xã Đàn",
    address: "Ngõ 25 Xã Đàn, Đống Đa, Hà Nội",
    district: "Đống Đa",
    type: "organic",
    accepts: "Thức ăn thừa, vỏ hoa quả, bã cà phê",
    acceptedTypes: ["Rác hữu cơ", "Thức ăn thừa", "Phế phẩm nông sản"],
    hours: "06:00 - 20:00 (Hàng ngày)",
    phone: "(024) 3852 4444",
    status: "open",
    lat: 21.0135,
    lng: 105.8255,
    fillLevel: 78
  },
  {
    id: "cp-006",
    name: "Điểm Tập Kết Rác Cồng Kềnh & Xà Bần Nam Đồng",
    address: "Số 119 Hồ Đắc Di, Nam Đồng, Đống Đa, Hà Nội",
    district: "Đống Đa",
    type: "heavy",
    accepts: "Bàn ghế, tủ gỗ, sofa rách, đệm mút, xà bần",
    acceptedTypes: ["Rác cồng kềnh", "Đồ gỗ", "Đệm sofa"],
    hours: "07:00 - 19:00 (Hàng ngày)",
    phone: "(024) 3853 8899",
    status: "open",
    lat: 21.0128,
    lng: 105.8290,
    fillLevel: 45
  },
  {
    id: "cp-007",
    name: "Trạm Tiếp Nhận Nội Thất & Gỗ Phế Liệu Kim Liên",
    address: "Ngõ 4 Đặng Văn Ngữ, Trung Tự, Đống Đa, Hà Nội",
    district: "Đống Đa",
    type: "heavy",
    accepts: "Tủ, giường, bàn ghế gỗ cũ, đồ điện lạnh lớn",
    acceptedTypes: ["Rác cồng kềnh", "Nội thất gỗ", "Thiết bị lớn"],
    hours: "08:00 - 18:30 (Thứ 2 - Thứ 7)",
    phone: "(024) 3852 6677",
    status: "open",
    lat: 21.0098,
    lng: 105.8340,
    fillLevel: 62
  }
];

// Danh sách các đơn yêu cầu thu gom từ người dân mẫu
const DANH_SACH_YEU_CAU_MAU = [
  {
    id: "REQ-101",
    senderName: "Nguyễn Thị Mai",
    requesterName: "Nguyễn Thị Mai",
    phone: "0912345111",
    address: "175 Tây Sơn, Đống Đa, Hà Nội",
    wasteType: "Pin & Đèn hỏng (Nguy hại)",
    category: "Pin & Đèn hỏng (Nguy hại)",
    pickupDate: "2026-10-18",
    date: "2026-10-18",
    notes: "1 thùng pin cũ & 4 bóng đèn huỳnh quang",
    status: "pending",
    priority: "P1",
    priorityScore: 95,
    slaHours: 4,
    estimatedWeight: 8,
    actualWeight: 8,
    assignedTo: null,
    createdAt: "2026-10-17T08:30:00"
  },
  {
    id: "REQ-102",
    senderName: "Trần Văn Hùng",
    requesterName: "Trần Văn Hùng",
    phone: "0987654222",
    address: "45 Chùa Bộc, Đống Đa, Hà Nội",
    wasteType: "Tủ gỗ cũ cồng kềnh",
    category: "Tủ gỗ cũ cồng kềnh",
    pickupDate: "2026-10-19",
    date: "2026-10-19",
    notes: "Tủ gỗ ép 2 cánh, dài 1m6, để ở tầng 1",
    status: "assigned",
    priority: "P2",
    priorityScore: 68,
    slaHours: 24,
    estimatedWeight: 45,
    actualWeight: 45,
    assignedTo: "Xe 02 (Anh Nam)",
    createdAt: "2026-10-17T09:15:00"
  },
  {
    id: "REQ-103",
    senderName: "Lê Hoàng Long",
    requesterName: "Lê Hoàng Long",
    phone: "0933221333",
    address: "Ngõ 59 Hoàng Cầu, Đống Đa, Hà Nội",
    wasteType: "50kg Giấy & Bìa carton",
    category: "50kg Giấy & Bìa carton",
    pickupDate: "2026-10-17",
    date: "2026-10-17",
    notes: "Bìa carton đã gấp gọn, để trước cửa",
    status: "completed",
    priority: "P3",
    priorityScore: 42,
    slaHours: 48,
    estimatedWeight: 50,
    actualWeight: 52,
    assignedTo: "Xe 01 (Anh Hải)",
    completedAt: "2026-10-17T14:00:00",
    createdAt: "2026-10-16T10:00:00"
  },
  {
    id: "REQ-104",
    senderName: "Phạm Hương Giang",
    requesterName: "Phạm Hương Giang",
    phone: "0905112444",
    address: "Số 8 ngõ 25 Xã Đàn, Đống Đa, Hà Nội",
    wasteType: "Đệm mút / Sofa cũ",
    category: "Đệm mút / Sofa cũ",
    pickupDate: "2026-10-20",
    date: "2026-10-20",
    notes: "Đệm lò xo 1m8 cũ, khá nặng",
    status: "pending",
    priority: "P2",
    priorityScore: 72,
    slaHours: 24,
    estimatedWeight: 30,
    actualWeight: 30,
    assignedTo: null,
    createdAt: "2026-10-17T10:45:00"
  },
  {
    id: "REQ-105",
    senderName: "Vũ Đức Minh",
    requesterName: "Vũ Đức Minh",
    phone: "0918776555",
    address: "12 Tôn Đức Thắng, Đống Đa, Hà Nội",
    wasteType: "Thiết bị điện máy cũ (Máy giặt)",
    category: "Thiết bị điện máy cũ (Máy giặt)",
    pickupDate: "2026-10-18",
    date: "2026-10-18",
    notes: "Máy giặt LG 8kg hỏng bo mạch",
    status: "in-progress",
    priority: "P1",
    priorityScore: 88,
    slaHours: 8,
    estimatedWeight: 60,
    actualWeight: 60,
    assignedTo: "Xe 02 (Anh Nam)",
    createdAt: "2026-10-17T07:20:00"
  },
  {
    id: "REQ-106",
    senderName: "Đỗ Thanh Hà",
    requesterName: "Đỗ Thanh Hà",
    phone: "0922334666",
    address: "Ngõ 35 Cát Linh, Đống Đa, Hà Nội",
    wasteType: "Cành cây to / Cây cảnh gãy đổ",
    category: "Cành cây to / Cây cảnh gãy đổ",
    pickupDate: "2026-10-21",
    date: "2026-10-21",
    notes: "3 cành cây bàng gãy do bão",
    status: "cancelled",
    priority: "P3",
    priorityScore: 35,
    slaHours: 48,
    estimatedWeight: 25,
    actualWeight: 25,
    assignedTo: null,
    cancelledAt: "2026-10-17T11:00:00",
    cancelReason: "Đã tự xử lý",
    createdAt: "2026-10-16T16:00:00"
  },
  {
    id: "REQ-107",
    senderName: "Hoàng Minh Tuấn",
    requesterName: "Hoàng Minh Tuấn",
    phone: "0966554777",
    address: "88 Nguyễn Lương Bằng, Đống Đa, Hà Nội",
    wasteType: "Pin & Đèn hỏng (Nguy hại)",
    category: "Pin & Đèn hỏng (Nguy hại)",
    pickupDate: "2026-10-18",
    date: "2026-10-18",
    notes: "20 cục pin AA cũ + 2 pin laptop hỏng",
    status: "pending",
    priority: "P1",
    priorityScore: 91,
    slaHours: 4,
    estimatedWeight: 5,
    actualWeight: 5,
    assignedTo: null,
    createdAt: "2026-10-17T11:30:00"
  },
  {
    id: "REQ-108",
    senderName: "Ngô Bích Ngọc",
    requesterName: "Ngô Bích Ngọc",
    phone: "0944889888",
    address: "Số 6 Khâm Thiên, Đống Đa, Hà Nội",
    wasteType: "Đồ gỗ / Tủ / Bàn ghế cũ",
    category: "Đồ gỗ / Tủ / Bàn ghế cũ",
    pickupDate: "2026-10-19",
    date: "2026-10-19",
    notes: "1 bàn gỗ + 4 ghế nhựa cũ",
    status: "assigned",
    priority: "P2",
    priorityScore: 55,
    slaHours: 24,
    estimatedWeight: 28,
    actualWeight: 28,
    assignedTo: "Xe 01 (Anh Hải)",
    createdAt: "2026-10-17T12:00:00"
  }
];

// Danh sách tuyến đường thu gom mẫu
const DANH_SACH_TUYEN_MAU = [
  {
    id: "route-001",
    name: "Tuyến Đống Đa Bắc - Sáng",
    vehicle: "Xe 01 (Anh Hải)",
    date: "2026-10-18",
    status: "active",
    stops: ["REQ-101", "REQ-108"],
    totalKm: 8.5,
    estimatedTime: "2h30",
    completedStops: 0,
    createdAt: "2026-10-17T06:00:00"
  },
  {
    id: "route-002",
    name: "Tuyến Đống Đa Nam - Sáng",
    vehicle: "Xe 02 (Anh Nam)",
    date: "2026-10-18",
    status: "active",
    stops: ["REQ-102", "REQ-105"],
    totalKm: 6.2,
    estimatedTime: "1h45",
    completedStops: 0,
    createdAt: "2026-10-17T06:00:00"
  },
  {
    id: "route-003",
    name: "Tuyến Đống Đa - Chiều qua",
    vehicle: "Xe 01 (Anh Hải)",
    date: "2026-10-17",
    status: "completed",
    stops: ["REQ-103"],
    totalKm: 4.1,
    estimatedTime: "1h",
    completedStops: 1,
    completedAt: "2026-10-17T15:30:00",
    createdAt: "2026-10-17T12:00:00"
  }
];

// Danh sách nhiệm vụ hiện trường của tài xế mẫu
const DANH_SACH_NHIEM_VU_MAU = [
  {
    id: "task-001",
    requestId: "REQ-101",
    routeId: "route-001",
    collector: "Xe 01 (Anh Hải)",
    address: "175 Tây Sơn, Đống Đa, Hà Nội",
    description: "Thu gom 1 thùng pin cũ & 4 bóng đèn huỳnh quang",
    status: "pending",
    priority: "P1",
    estimatedArrival: "09:30",
    notes: "",
    photoUrl: null,
    createdAt: "2026-10-17T06:00:00"
  },
  {
    id: "task-002",
    requestId: "REQ-102",
    routeId: "route-002",
    collector: "Xe 02 (Anh Nam)",
    address: "45 Chùa Bộc, Đống Đa, Hà Nội",
    description: "Thu gom 1 tủ gỗ ép 2 cánh cồng kềnh",
    status: "in-progress",
    priority: "P2",
    estimatedArrival: "10:15",
    notes: "Đang trên đường tới",
    photoUrl: null,
    createdAt: "2026-10-17T06:00:00"
  },
  {
    id: "task-003",
    requestId: "REQ-103",
    routeId: "route-003",
    collector: "Xe 01 (Anh Hải)",
    address: "Ngõ 59 Hoàng Cầu, Đống Đa, Hà Nội",
    description: "Thu gom 50kg Giấy & Bìa carton",
    status: "completed",
    priority: "P3",
    estimatedArrival: "14:00",
    completedAt: "2026-10-17T14:15:00",
    notes: "Đã thu gom xong, ký xác nhận",
    photoUrl: "photo_confirmed.jpg",
    createdAt: "2026-10-17T12:00:00"
  },
  {
    id: "task-004",
    requestId: "REQ-105",
    routeId: "route-002",
    collector: "Xe 02 (Anh Nam)",
    address: "12 Tôn Đức Thắng, Đống Đa, Hà Nội",
    description: "Thu gom 1 máy giặt LG 8kg hỏng",
    status: "in-progress",
    priority: "P1",
    estimatedArrival: "11:00",
    notes: "Cần 2 người khiêng",
    photoUrl: null,
    createdAt: "2026-10-17T06:00:00"
  },
  {
    id: "task-005",
    requestId: "REQ-108",
    routeId: "route-001",
    collector: "Xe 01 (Anh Hải)",
    address: "Số 6 Khâm Thiên, Đống Đa, Hà Nội",
    description: "Thu gom 1 bàn gỗ + 4 ghế nhựa cũ",
    status: "pending",
    priority: "P2",
    estimatedArrival: "11:30",
    notes: "",
    photoUrl: null,
    createdAt: "2026-10-17T06:00:00"
  }
];

// Danh mục phân loại rác mẫu
const DANH_SACH_LOAI_RAC_MAU = [
  {
    id: "wt-001",
    name: "Rác Hữu Cơ",
    code: "organic",
    color: "#16a34a",
    colorCode: "success",
    binColor: "Xanh Lá / Nâu",
    icon: "bi-flower1",
    description: "Thức ăn thừa, rau củ quả, lá cây, bã cà phê",
    examples: ["Vỏ chuối", "Xương gà", "Bã cà phê", "Lá cây rụng"],
    destination: "Nhà máy ủ compost vi sinh",
    disposalGuide: "Chắt ráo nước canh, dùng túi phân hủy sinh học",
    pointsPerKg: 15,
    status: "active",
    createdAt: "2026-01-01"
  },
  {
    id: "wt-002",
    name: "Rác Tái Chế",
    code: "recyclable",
    color: "#0284c7",
    colorCode: "primary",
    binColor: "Xanh Dương",
    icon: "bi-recycle",
    description: "Vỏ lon, chai nhựa, giấy báo, bìa carton, kim loại",
    examples: ["Vỏ lon nhôm", "Chai PET", "Bìa carton", "Sách báo cũ"],
    destination: "Nhà máy tái chế tuần hoàn",
    disposalGuide: "Rửa sạch cặn bẩn, dẫm bẹp vỏ lon chai trước khi vứt",
    pointsPerKg: 20,
    status: "active",
    createdAt: "2026-01-01"
  },
  {
    id: "wt-003",
    name: "Rác Nguy Hại",
    code: "hazardous",
    color: "#dc2626",
    colorCode: "danger",
    binColor: "Đỏ / Trạm riêng",
    icon: "bi-radioactive",
    description: "Pin cũ, ắc quy, bóng đèn, thuốc hết hạn, hóa chất",
    examples: ["Pin AA/AAA", "Bóng đèn compact", "Thuốc hết hạn", "Sơn/hóa chất"],
    destination: "Khu xử lý chất thải nguy hại chuyên dụng",
    disposalGuide: "Bọc kín cực pin, giao nộp tại trạm riêng biệt",
    pointsPerKg: 30,
    status: "active",
    createdAt: "2026-01-01"
  },
  {
    id: "wt-004",
    name: "Rác Vô Cơ Khác",
    code: "other",
    color: "#64748b",
    colorCode: "secondary",
    binColor: "Xám / Đen",
    icon: "bi-trash3",
    description: "Hộp xốp dính dầu, túi nilon bẩn, sành sứ vỡ, tã lót",
    examples: ["Hộp xốp dính mỡ", "Túi nilon bẩn", "Gốm sứ vỡ", "Bỉm tã"],
    destination: "Nhà máy điện rác hoặc bãi chôn lấp hợp vệ sinh",
    disposalGuide: "Buộc chặt túi, giao theo lịch gom rác thông thường",
    pointsPerKg: 5,
    status: "active",
    createdAt: "2026-01-01"
  },
  {
    id: "wt-005",
    name: "Rác Cồng Kềnh",
    code: "bulky",
    color: "#d97706",
    colorCode: "warning",
    binColor: "Theo lịch hẹn",
    icon: "bi-box-seam",
    description: "Đồ nội thất cũ, đệm, thiết bị điện lớn",
    examples: ["Tủ gỗ", "Sofa", "Máy giặt cũ", "Đệm mút"],
    destination: "Trạm trung chuyển rác cồng kềnh",
    disposalGuide: "Đặt lịch hẹn xe thu gom qua website hoặc đem tới trạm gom",
    pointsPerKg: 25,
    status: "active",
    createdAt: "2026-01-01"
  }
];

// ==========================================================================
// 3. KHỞI TẠO VÀ ĐỒNG BỘ DỮ LIỆU BAN ĐẦU
// ==========================================================================

function khoiTaoDuLieuMau(khoa, duLieuGoc) {
  const duLieuHienCo = docDuLieu(khoa, null);
  if (!duLieuHienCo || !Array.isArray(duLieuHienCo) || duLieuHienCo.length === 0) {
    ghiDuLieu(khoa, duLieuGoc);
    return;
  }

  // Tự động đồng bộ các trường tương thích
  if (khoa === 'gs_pickup_requests') {
    let coThayDoi = false;
    duLieuHienCo.forEach(don => {
      if (!don.senderName && don.requesterName) { don.senderName = don.requesterName; coThayDoi = true; }
      if (!don.requesterName && don.senderName) { don.requesterName = don.senderName; coThayDoi = true; }
      if (!don.wasteType && don.category) { don.wasteType = don.category; coThayDoi = true; }
      if (!don.category && don.wasteType) { don.category = don.wasteType; coThayDoi = true; }
      if (!don.pickupDate && don.date) { don.pickupDate = don.date; coThayDoi = true; }
      if (!don.date && don.pickupDate) { don.date = don.pickupDate; coThayDoi = true; }
      if (don.estimatedWeight === undefined) { don.estimatedWeight = 15; coThayDoi = true; }
      if (don.actualWeight === undefined) { don.actualWeight = don.estimatedWeight; coThayDoi = true; }
    });
    if (coThayDoi) ghiDuLieu(khoa, duLieuHienCo);
  }

  // Bổ sung các điểm thu gom mới nếu chưa có
  if (khoa === 'gs_collection_points') {
    let coThayDoi = false;
    duLieuGoc.forEach(diemGoc => {
      const daTonTai = duLieuHienCo.find(d => d.id === diemGoc.id);
      if (!daTonTai) {
        duLieuHienCo.push(diemGoc);
        coThayDoi = true;
      }
    });
    if (coThayDoi) ghiDuLieu(khoa, duLieuHienCo);
  }

  // Bổ sung thuộc tính loại rác
  if (khoa === 'gs_waste_types') {
    let coThayDoi = false;
    duLieuGoc.forEach(loaiGoc => {
      const loai = duLieuHienCo.find(l => l.id === loaiGoc.id);
      if (loai && (!loai.colorCode || !loai.pointsPerKg || !loai.disposalGuide)) {
        loai.colorCode = loai.colorCode || loaiGoc.colorCode;
        loai.pointsPerKg = loai.pointsPerKg || loaiGoc.pointsPerKg;
        loai.disposalGuide = loai.disposalGuide || loaiGoc.disposalGuide;
        coThayDoi = true;
      }
    });
    if (coThayDoi) ghiDuLieu(khoa, duLieuHienCo);
  }
}

function khoiTaoToanBoDuLieu() {
  khoiTaoDuLieuMau('gs_collection_points', DANH_SACH_DIEM_THU_GOM_MAU);
  khoiTaoDuLieuMau('gs_pickup_requests', DANH_SACH_YEU_CAU_MAU);
  khoiTaoDuLieuMau('gs_routes', DANH_SACH_TUYEN_MAU);
  khoiTaoDuLieuMau('gs_tasks', DANH_SACH_NHIEM_VU_MAU);
  khoiTaoDuLieuMau('gs_waste_types', DANH_SACH_LOAI_RAC_MAU);
}

// ==========================================================================
// 4. ĐỐI TƯỢNG QUẢN LÝ DỮ LIỆU TẬP TRUNG (KHO DỮ LIỆU GREENSORT)
// ==========================================================================

const KhoDuLieu = {
  // Hàm khởi tạo dữ liệu
  khoiTao: khoiTaoToanBoDuLieu,
  init: khoiTaoToanBoDuLieu,

  // Quản lý Danh mục rác
  loaiRac: {
    layTatCa: function() {
      return docDuLieu('gs_waste_types', []);
    },
    layTheoMa: function(ma) {
      const danhSach = docDuLieu('gs_waste_types', []);
      return danhSach.find(item => item.id === ma) || null;
    },
    them: function(vatPham) {
      const danhSach = docDuLieu('gs_waste_types', []);
      vatPham.id = vatPham.id || taoMaNgauNhien('wt');
      vatPham.status = vatPham.status || 'active';
      vatPham.createdAt = vatPham.createdAt || new Date().toISOString();
      danhSach.push(vatPham);
      ghiDuLieu('gs_waste_types', danhSach);
      return vatPham;
    },
    capNhat: function(ma, duLieuMoi) {
      const danhSach = docDuLieu('gs_waste_types', []);
      const viTri = danhSach.findIndex(item => item.id === ma);
      if (viTri === -1) return null;
      danhSach[viTri] = { ...danhSach[viTri], ...duLieuMoi, updatedAt: new Date().toISOString() };
      ghiDuLieu('gs_waste_types', danhSach);
      return danhSach[viTri];
    },
    xoa: function(ma) {
      const danhSach = docDuLieu('gs_waste_types', []);
      const sauKhiLoc = danhSach.filter(item => item.id !== ma);
      ghiDuLieu('gs_waste_types', sauKhiLoc);
      return sauKhiLoc.length < danhSach.length;
    },
    // Bí danh tương thích
    getAll: function() { return this.layTatCa(); },
    getById: function(id) { return this.layTheoMa(id); },
    create: function(item) { return this.them(item); },
    update: function(id, data) { return this.capNhat(id, data); },
    delete: function(id) { return this.xoa(id); },
    remove: function(id) { return this.xoa(id); }
  },

  // Quản lý Điểm thu gom
  diemThuGom: {
    layTatCa: function() {
      return docDuLieu('gs_collection_points', []);
    },
    layTheoMa: function(ma) {
      const danhSach = docDuLieu('gs_collection_points', []);
      return danhSach.find(item => item.id === ma) || null;
    },
    them: function(diemMoi) {
      const danhSach = docDuLieu('gs_collection_points', []);
      diemMoi.id = diemMoi.id || taoMaNgauNhien('cp');
      diemMoi.status = diemMoi.status || 'open';
      diemMoi.fillLevel = diemMoi.fillLevel || 20;
      danhSach.push(diemMoi);
      ghiDuLieu('gs_collection_points', danhSach);
      return diemMoi;
    },
    capNhat: function(ma, duLieuMoi) {
      const danhSach = docDuLieu('gs_collection_points', []);
      const viTri = danhSach.findIndex(item => item.id === ma);
      if (viTri === -1) return null;
      danhSach[viTri] = { ...danhSach[viTri], ...duLieuMoi, updatedAt: new Date().toISOString() };
      ghiDuLieu('gs_collection_points', danhSach);
      return danhSach[viTri];
    },
    xoa: function(ma) {
      const danhSach = docDuLieu('gs_collection_points', []);
      const sauKhiLoc = danhSach.filter(item => item.id !== ma);
      ghiDuLieu('gs_collection_points', sauKhiLoc);
      return sauKhiLoc.length < danhSach.length;
    },
    // Bí danh tương thích
    getAll: function() { return this.layTatCa(); },
    getById: function(id) { return this.layTheoMa(id); },
    create: function(item) { return this.them(item); },
    update: function(id, data) { return this.capNhat(id, data); },
    delete: function(id) { return this.xoa(id); },
    remove: function(id) { return this.xoa(id); }
  },

  // Quản lý Yêu cầu thu gom
  yeuCauThuGom: {
    layTatCa: function() {
      return docDuLieu('gs_pickup_requests', []);
    },
    layTheoMa: function(ma) {
      const danhSach = docDuLieu('gs_pickup_requests', []);
      return danhSach.find(item => item.id === ma) || null;
    },
    them: function(donMoi) {
      const danhSach = docDuLieu('gs_pickup_requests', []);
      donMoi.id = donMoi.id || ('REQ-' + (danhSach.length + 101));
      donMoi.senderName = donMoi.senderName || donMoi.requesterName || 'Người dân';
      donMoi.requesterName = donMoi.requesterName || donMoi.senderName;
      donMoi.wasteType = donMoi.wasteType || donMoi.category || 'Rác tái chế';
      donMoi.category = donMoi.category || donMoi.wasteType;
      donMoi.pickupDate = donMoi.pickupDate || donMoi.date || new Date().toISOString().slice(0, 10);
      donMoi.date = donMoi.date || donMoi.pickupDate;
      donMoi.status = donMoi.status || 'pending';
      donMoi.priorityScore = donMoi.priorityScore || 50;
      donMoi.estimatedWeight = donMoi.estimatedWeight || 10;
      donMoi.actualWeight = donMoi.actualWeight || donMoi.estimatedWeight;
      donMoi.createdAt = donMoi.createdAt || new Date().toISOString();

      danhSach.unshift(donMoi); // Đưa đơn mới nhất lên đầu danh sách
      ghiDuLieu('gs_pickup_requests', danhSach);
      return donMoi;
    },
    capNhat: function(ma, duLieuMoi) {
      const danhSach = docDuLieu('gs_pickup_requests', []);
      const viTri = danhSach.findIndex(item => item.id === ma);
      if (viTri === -1) return null;
      danhSach[viTri] = { ...danhSach[viTri], ...duLieuMoi, updatedAt: new Date().toISOString() };
      ghiDuLieu('gs_pickup_requests', danhSach);
      return danhSach[viTri];
    },
    xoa: function(ma) {
      const danhSach = docDuLieu('gs_pickup_requests', []);
      const sauKhiLoc = danhSach.filter(item => item.id !== ma);
      ghiDuLieu('gs_pickup_requests', sauKhiLoc);
      return sauKhiLoc.length < danhSach.length;
    },
    huy: function(ma, lyDo) {
      return this.capNhat(ma, {
        status: 'cancelled',
        cancelReason: lyDo,
        cancelledAt: new Date().toISOString()
      });
    },
    hoanThanh: function(ma) {
      return this.capNhat(ma, {
        status: 'completed',
        completedAt: new Date().toISOString()
      });
    },
    layTheoTrangThai: function(trangThai) {
      const danhSach = docDuLieu('gs_pickup_requests', []);
      return danhSach.filter(item => item.status === trangThai);
    },
    layThongKe: function() {
      const tatCa = docDuLieu('gs_pickup_requests', []);
      return {
        total: tatCa.length,
        pending: tatCa.filter(r => r.status === 'pending').length,
        assigned: tatCa.filter(r => r.status === 'assigned').length,
        inProgress: tatCa.filter(r => r.status === 'in-progress').length,
        completed: tatCa.filter(r => r.status === 'completed').length,
        cancelled: tatCa.filter(r => r.status === 'cancelled').length
      };
    },
    // Bí danh tương thích
    getAll: function() { return this.layTatCa(); },
    getById: function(id) { return this.layTheoMa(id); },
    create: function(item) { return this.them(item); },
    update: function(id, data) { return this.capNhat(id, data); },
    delete: function(id) { return this.xoa(id); },
    remove: function(id) { return this.xoa(id); },
    cancel: function(id, reason) { return this.huy(id, reason); },
    complete: function(id) { return this.hoanThanh(id); },
    getByStatus: function(status) { return this.layTheoTrangThai(status); },
    getPending: function() { return this.layTheoTrangThai('pending'); },
    getStats: function() { return this.layThongKe(); }
  },

  // Quản lý Tuyến đường
  tuyenDuong: {
    layTatCa: function() {
      return docDuLieu('gs_routes', []);
    },
    layTheoMa: function(ma) {
      const danhSach = docDuLieu('gs_routes', []);
      return danhSach.find(item => item.id === ma) || null;
    },
    them: function(tuyenMoi) {
      const danhSach = docDuLieu('gs_routes', []);
      tuyenMoi.id = tuyenMoi.id || taoMaNgauNhien('route');
      danhSach.push(tuyenMoi);
      ghiDuLieu('gs_routes', danhSach);
      return tuyenMoi;
    },
    capNhat: function(ma, duLieuMoi) {
      const danhSach = docDuLieu('gs_routes', []);
      const viTri = danhSach.findIndex(item => item.id === ma);
      if (viTri === -1) return null;
      danhSach[viTri] = { ...danhSach[viTri], ...duLieuMoi };
      ghiDuLieu('gs_routes', danhSach);
      return danhSach[viTri];
    },
    xoa: function(ma) {
      const danhSach = docDuLieu('gs_routes', []);
      const sauKhiLoc = danhSach.filter(item => item.id !== ma);
      ghiDuLieu('gs_routes', sauKhiLoc);
      return sauKhiLoc.length < danhSach.length;
    },
    // Bí danh tương thích
    getAll: function() { return this.layTatCa(); },
    getById: function(id) { return this.layTheoMa(id); },
    create: function(item) { return this.them(item); },
    update: function(id, data) { return this.capNhat(id, data); },
    delete: function(id) { return this.xoa(id); },
    remove: function(id) { return this.xoa(id); }
  },

  // Quản lý Nhiệm vụ hiện trường của tài xế
  nhiemVu: {
    layTatCa: function() {
      return docDuLieu('gs_tasks', []);
    },
    layTheoMa: function(ma) {
      const danhSach = docDuLieu('gs_tasks', []);
      return danhSach.find(item => item.id === ma) || null;
    },
    them: function(nhiemVuMoi) {
      const danhSach = docDuLieu('gs_tasks', []);
      nhiemVuMoi.id = nhiemVuMoi.id || taoMaNgauNhien('task');
      danhSach.push(nhiemVuMoi);
      ghiDuLieu('gs_tasks', danhSach);
      return nhiemVuMoi;
    },
    capNhat: function(ma, duLieuMoi) {
      const danhSach = docDuLieu('gs_tasks', []);
      const viTri = danhSach.findIndex(item => item.id === ma);
      if (viTri === -1) return null;
      danhSach[viTri] = { ...danhSach[viTri], ...duLieuMoi };
      ghiDuLieu('gs_tasks', danhSach);
      return danhSach[viTri];
    },
    xoa: function(ma) {
      const danhSach = docDuLieu('gs_tasks', []);
      const sauKhiLoc = danhSach.filter(item => item.id !== ma);
      ghiDuLieu('gs_tasks', sauKhiLoc);
      return sauKhiLoc.length < danhSach.length;
    },
    hoanThanh: function(ma, ghiChu, anhXacNhan) {
      return this.capNhat(ma, {
        status: 'completed',
        completedAt: new Date().toISOString(),
        notes: ghiChu || '',
        photoUrl: anhXacNhan || null
      });
    },
    layTheoTaiXe: function(tenTaiXe) {
      const danhSach = docDuLieu('gs_tasks', []);
      return danhSach.filter(t => t.collector === tenTaiXe);
    },
    layTheoTuyen: function(maTuyen) {
      const danhSach = docDuLieu('gs_tasks', []);
      return danhSach.filter(t => t.routeId === maTuyen);
    },
    // Bí danh tương thích
    getAll: function() { return this.layTatCa(); },
    getById: function(id) { return this.layTheoMa(id); },
    create: function(item) { return this.them(item); },
    update: function(id, data) { return this.capNhat(id, data); },
    delete: function(id) { return this.xoa(id); },
    remove: function(id) { return this.xoa(id); },
    complete: function(id, notes, photoUrl) { return this.hoanThanh(id, notes, photoUrl); },
    getByCollector: function(collector) { return this.layTheoTaiXe(collector); },
    getByRoute: function(routeId) { return this.layTheoTuyen(routeId); }
  },

  // Quản lý Người dùng
  nguoiDung: {
    layTatCa: function() {
      return docDuLieu('greensort_registered_users', []);
    },
    layTheoTen: function(tenDangNhap) {
      const danhSach = docDuLieu('greensort_registered_users', []);
      return danhSach.find(u => u.username === tenDangNhap) || null;
    },
    capNhat: function(tenDangNhap, duLieuMoi) {
      const danhSach = docDuLieu('greensort_registered_users', []);
      const viTri = danhSach.findIndex(u => u.username === tenDangNhap);
      if (viTri === -1) return null;
      danhSach[viTri] = { ...danhSach[viTri], ...duLieuMoi };
      ghiDuLieu('greensort_registered_users', danhSach);
      return danhSach[viTri];
    },
    xoa: function(tenDangNhap) {
      const danhSach = docDuLieu('greensort_registered_users', []);
      const sauKhiLoc = danhSach.filter(u => u.username !== tenDangNhap);
      ghiDuLieu('greensort_registered_users', sauKhiLoc);
      return sauKhiLoc.length < danhSach.length;
    },
    khoa: function(tenDangNhap) {
      return this.capNhat(tenDangNhap, { disabled: true });
    },
    layThongKe: function() {
      const danhSach = docDuLieu('greensort_registered_users', []);
      return {
        total: danhSach.length,
        residents: danhSach.filter(u => u.role === 'resident').length,
        collectors: danhSach.filter(u => u.role === 'collector').length,
        coordinators: danhSach.filter(u => u.role === 'coordinator').length,
        admins: danhSach.filter(u => u.role === 'admin').length,
        disabled: danhSach.filter(u => u.disabled).length
      };
    },
    // Bí danh tương thích
    getAll: function() { return this.layTatCa(); },
    getById: function(username) { return this.layTheoTen(username); },
    update: function(username, data) { return this.capNhat(username, data); },
    delete: function(username) { return this.xoa(username); },
    remove: function(username) { return this.xoa(username); },
    disable: function(username) { return this.khoa(username); },
    getStats: function() { return this.layThongKe(); }
  },

  // Thống kê tổng quan cho Bảng điều khiển (Dashboard)
  layThongKeTongQuan: function() {
    const yeuCau = docDuLieu('gs_pickup_requests', []);
    const nhiemVu = docDuLieu('gs_tasks', []);
    const tuyen = docDuLieu('gs_routes', []);
    const diem = docDuLieu('gs_collection_points', []);
    const nguoiDung = docDuLieu('greensort_registered_users', []);

    return {
      totalRequests: yeuCau.length,
      pendingRequests: yeuCau.filter(r => r.status === 'pending').length,
      completedRequests: yeuCau.filter(r => r.status === 'completed').length,
      activeRoutes: tuyen.filter(r => r.status === 'active').length,
      totalPoints: diem.length,
      totalUsers: nguoiDung.length,
      totalTasks: nhiemVu.length,
      completedTasks: nhiemVu.filter(t => t.status === 'completed').length,
      slaBreaches: yeuCau.filter(r => r.status === 'pending' && r.slaHours <= 4).length
    };
  },
  getDashboardStats: function() {
    return this.layThongKeTongQuan();
  },

  // Đặt lại toàn bộ dữ liệu mẫu (phục vụ kiểm thử)
  datLaiMacDinh: function() {
    ['gs_collection_points', 'gs_pickup_requests', 'gs_routes', 'gs_tasks', 'gs_waste_types'].forEach(k => {
      localStorage.removeItem(k);
    });
    khoiTaoToanBoDuLieu();
  },
  resetAll: function() {
    this.datLaiMacDinh();
  }
};

// Bí danh cấu trúc thực thể tiếng Anh cho tính tương thích ngược toàn diện
KhoDuLieu.wasteTypes = KhoDuLieu.loaiRac;
KhoDuLieu.collectionPoints = KhoDuLieu.diemThuGom;
KhoDuLieu.pickupRequests = KhoDuLieu.yeuCauThuGom;
KhoDuLieu.routes = KhoDuLieu.tuyenDuong;
KhoDuLieu.tasks = KhoDuLieu.nhiemVu;
KhoDuLieu.users = KhoDuLieu.nguoiDung;

// Tự động khởi tạo dữ liệu mẫu khi nạp tệp
KhoDuLieu.khoiTao();

// Đưa đối tượng vào phạm vi toàn cục window
if (typeof window !== 'undefined') {
  window.KhoDuLieu = KhoDuLieu;
  window.GreenSortAPI = KhoDuLieu;
}
