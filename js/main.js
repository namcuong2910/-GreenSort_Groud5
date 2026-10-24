/**
 * GreenSort - Hệ thống phân loại & điều phối thu gom thông minh
 * Tệp JavaScript xử lý tương tác DOM, Lọc dữ liệu, Tra cứu và Mô phỏng AI
 * Học phần: CSE122 - Phát triển ứng dụng Web cơ bản
 */

// Dữ liệu rác mặc định dự phòng (nếu không fetch được JSON do bảo mật local file://)
const FALLBACK_WASTE_DATA = [
  {
    "id": "waste-01",
    "name": "Vỏ lon bia / Nước ngọt nhôm",
    "category": "recyclable",
    "categoryName": "Rác tái chế",
    "badgeClass": "text-bg-primary",
    "binColor": "Thùng Xanh Dương",
    "icon": "bi-cup-straw",
    "tip": "Rửa sạch cặn đồ uống, dẫm bẹp để tiết kiệm diện tích chứa.",
    "destination": "Nhà máy tái chế kim loại nhôm",
    "decomposeTime": "80 - 200 năm",
    "hazardous": false,
    "instructions": "1. Tráng qua bằng nước sạch để tránh thu hút côn trùng.\n2. Ép bẹp vỏ lon phẳng lại.\n3. Cho vào túi rác tái chế hoặc thùng rác màu xanh."
  },
  {
    "id": "waste-02",
    "name": "Chai nhựa PET (Nước suối, trà xanh)",
    "category": "recyclable",
    "categoryName": "Rác tái chế",
    "badgeClass": "text-bg-primary",
    "binColor": "Thùng Xanh Dương",
    "icon": "bi-droplet-half",
    "tip": "Bỏ nắp chai riêng hoặc vặn chặt, tháo nhãn màng co nếu có thể.",
    "destination": "Xưởng tái chế hạt nhựa rPET",
    "decomposeTime": "450 năm",
    "hazardous": false,
    "instructions": "1. Đổ hết nước thừa bên trong.\n2. Tháo nắp và gỡ màng bọc nilon bên ngoài.\n3. Bóp dẹp thân chai để giảm thể tích chứa."
  },
  {
    "id": "waste-03",
    "name": "Vỏ chuối & Cuống rau củ quả",
    "category": "organic",
    "categoryName": "Rác hữu cơ",
    "badgeClass": "text-bg-success",
    "binColor": "Thùng Xanh Lá / Nâu",
    "icon": "bi-flower1",
    "tip": "Ủ phân hữu cơ vi sinh (compost) bón cho cây cảnh gia đình.",
    "destination": "Nhà máy sản xuất phân bón hữu cơ vi sinh",
    "decomposeTime": "2 - 6 tuần",
    "hazardous": false,
    "instructions": "1. Để ráo nước, không lẫn túi nilon hay ghim kim loại.\n2. Cho vào thùng ủ rác hữu cơ hoặc túi sinh học tự phân hủy."
  },
  {
    "id": "waste-04",
    "name": "Bã cà phê & Túi trà thảo mộc",
    "category": "organic",
    "categoryName": "Rác hữu cơ",
    "badgeClass": "text-bg-success",
    "binColor": "Thùng Xanh Lá / Nâu",
    "icon": "bi-cup-hot-fill",
    "tip": "Bã cà phê giúp khử mùi tủ lạnh rất tốt trước khi bỏ đi làm phân bón.",
    "destination": "Ủ phân sinh học cải tạo đất",
    "decomposeTime": "1 - 3 tháng",
    "hazardous": false,
    "instructions": "1. Nếu là túi trà, cần cắt bỏ dây nối và ghim bấm kim loại.\n2. Rải gốc cây hoặc gom vào ngăn rác thực phẩm."
  },
  {
    "id": "waste-05",
    "name": "Pin tiểu AA/AAA & Pin điện thoại cũ",
    "category": "hazardous",
    "categoryName": "Rác nguy hại",
    "badgeClass": "text-bg-danger",
    "binColor": "Thùng Đỏ / Điểm Thu Pin Riêng",
    "icon": "bi-battery-charging",
    "tip": "CỰC KỲ NGUY HIỂM: Chứa chì, thủy ngân, cadimi. Tuyệt đối không vứt chung!",
    "destination": "Khu xử lý chất thải nguy hại chuyên dụng TLU / UBND",
    "decomposeTime": "Hàng trăm năm gây ô nhiễm nguồn nước ngầm",
    "hazardous": true,
    "instructions": "1. Dán băng dính vào 2 đầu cực của pin để tránh chập cháy.\n2. Gom vào lọ thủy tinh hoặc hộp nhựa kín.\n3. Mang đến các điểm thu gom rác điện tử miễn phí."
  },
  {
    "id": "waste-06",
    "name": "Bóng đèn huỳnh quang / Bóng Compact hỏng",
    "category": "hazardous",
    "categoryName": "Rác nguy hại",
    "badgeClass": "text-bg-danger",
    "binColor": "Thùng Đỏ / Điểm Thu Gom",
    "icon": "bi-lightbulb-fill",
    "tip": "Bên trong có hơi thủy ngân. Nếu vỡ, tránh hít phải và quét dọn cẩn thận.",
    "destination": "Lò đốt tiêu hủy chất thải nguy hại đạt chuẩn",
    "decomposeTime": "Không phân hủy sinh học",
    "hazardous": true,
    "instructions": "1. Quấn giấy báo hoặc bọc chống sốc để tránh làm vỡ đèn.\n2. Đánh dấu rõ ràng nhãn 'Bóng đèn hỏng - Nguy hại'.\n3. Bàn giao cho trạm thu gom chất thải đặc thù."
  },
  {
    "id": "waste-07",
    "name": "Hộp xốp đựng cơm & Ly cà phê dùng 1 lần",
    "category": "other",
    "categoryName": "Rác vô cơ khác (Chôn lấp)",
    "badgeClass": "text-bg-secondary",
    "binColor": "Thùng Màu Xám / Đen",
    "icon": "bi-box-seam",
    "tip": "Đã dính nhiều dầu mỡ thực phẩm, hầu như không thể tái chế kinh tế.",
    "destination": "Nhà máy điện rác hoặc bãi chôn lấp hợp vệ sinh",
    "decomposeTime": "500 - 1000 năm",
    "hazardous": false,
    "instructions": "1. Vét sạch thức ăn thừa bỏ vào thùng hữu cơ.\n2. Xếp chồng hộp gọn gàng.\n3. Cho vào túi rác vô cơ chôn lấp thông thường."
  },
  {
    "id": "waste-08",
    "name": "Túi nilon rách, bẩn dính dầu mỡ",
    "category": "other",
    "categoryName": "Rác vô cơ khác (Chôn lấp)",
    "badgeClass": "text-bg-secondary",
    "binColor": "Thùng Màu Xám / Đen",
    "icon": "bi-bag-x-fill",
    "tip": "Hạn chế sử dụng, chuyển sang túi vải hoặc túi sinh học tự phân hủy.",
    "destination": "Đốt rác phát điện hoặc bãi chôn lấp",
    "decomposeTime": "400 - 500 năm",
    "hazardous": false,
    "instructions": "1. Cột chặt túi lại để không bay vương vãi ra môi trường.\n2. Thải bỏ theo lịch thu gom rác sinh hoạt hàng ngày."
  },
  {
    "id": "waste-09",
    "name": "Bìa carton & Thùng giấy bưu phẩm",
    "category": "recyclable",
    "categoryName": "Rác tái chế",
    "badgeClass": "text-bg-primary",
    "binColor": "Thùng Xanh Dương",
    "icon": "bi-box",
    "tip": "Giữ khô ráo, tháo bỏ băng dính dán trên thùng trước khi gấp gọn.",
    "destination": "Nhà máy sản xuất bột giấy tái chế",
    "decomposeTime": "2 - 5 tháng",
    "hazardous": false,
    "instructions": "1. Rạch băng keo, tháo ghim sắt.\n2. Gấp dẹp thùng carton phẳng phiu thành tệp.\n3. Buộc dây gọn gàng gửi cho người thu mua ve chai hoặc xe gom."
  },
  {
    "id": "waste-10",
    "name": "Dược phẩm, thuốc tây hết hạn sử dụng",
    "category": "hazardous",
    "categoryName": "Rác nguy hại",
    "badgeClass": "text-bg-danger",
    "binColor": "Thùng Đỏ Y Tế",
    "icon": "bi-capsule",
    "tip": "Tuyệt đối không xả xuống bồn cầu vì làm ô nhiễm hệ sinh thái nước ngầm.",
    "destination": "Thiêu hủy y tế ở nhiệt độ cao",
    "decomposeTime": "Hóa chất tồn lưu lâu dài",
    "hazardous": true,
    "instructions": "1. Giữ nguyên trong vỉ thuốc hoặc lọ đựng ban đầu.\n2. Cho vào túi zip riêng có dán nhãn 'Thuốc quá hạn'.\n3. Nộp lại tại các nhà thuốc hoặc trạm y tế phường có điểm thu hồi."
  },
  {
    "id": "waste-11",
    "name": "Xương gà, xương cá & Thức ăn thừa",
    "category": "organic",
    "categoryName": "Rác hữu cơ",
    "badgeClass": "text-bg-success",
    "binColor": "Thùng Xanh Lá / Nâu",
    "icon": "bi-egg-fried",
    "tip": "Gạn kiệt nước canh để tránh phát sinh mùi hôi thối và nước rỉ rác.",
    "destination": "Ủ chế phẩm vi sinh hoặc thức ăn chăn nuôi xử lý nhiệt",
    "decomposeTime": "1 - 2 tháng",
    "hazardous": false,
    "instructions": "1. Đổ qua rây lọc tách nước canh.\n2. Chứa trong thùng có nắp đậy kín mùi.\n3. Thải bỏ hàng ngày theo khung giờ thu gom rác hữu cơ."
  },
  {
    "id": "waste-12",
    "name": "Mảnh sành sứ vỡ, gương kính vỡ",
    "category": "other",
    "categoryName": "Rác vô cơ khác (Chôn lấp)",
    "badgeClass": "text-bg-secondary",
    "binColor": "Thùng Màu Xám / Đen",
    "icon": "bi-gem",
    "tip": "Gói thật kỹ bằng bìa carton để bảo vệ an toàn cho công nhân thu gom rác!",
    "destination": "Bãi chôn lấp vật liệu trơ",
    "decomposeTime": "Hàng ngàn năm",
    "hazardous": false,
    "instructions": "1. Dùng báo cũ hoặc xốp bọc quanh các cạnh sắc nhọn.\n2. Cho vào hộp cứng và ghi chú bên ngoài: 'VẬT SẮC NHỌN VỠ CẨN THẬN'.\n3. Để riêng cạnh thùng rác để người thu gom chú ý."
  }
];

// Khởi tạo trạng thái ứng dụng (State)
let danhSachRac = [];
let boLocHienTai = 'all';
let tuKhoaTimKiem = '';

// Phần tử giao diện DOM Tra cứu
const khungChuaTheRac = document.getElementById('wasteGrid');
const oNhapTimKiemRac = document.getElementById('searchInput');
const theDemSoLuongRac = document.getElementById('searchCountBadge');
const hopThongBaoRong = document.getElementById('emptyStateBox');
const danhSachNutLocRac = document.querySelectorAll('.nut-loc-danh-muc');

// Phần tử giao diện AI Phân loại
const oNhapPhanTichAI = document.getElementById('aiWasteInput');
const nutPhanTichAI = document.getElementById('btnAiAnalyze');
const hopDangXuLyAI = document.getElementById('aiLoadingBox');
const hopKetQuaAI = document.getElementById('aiResultBox');
const hopBaoLoiAI = document.getElementById('aiErrorBox');

// Phần tử Modal Chi tiết rác
const hopThoaiChiTietRac = new bootstrap.Modal(document.getElementById('wasteDetailModal'));
const tieuDeChiTietRac = document.getElementById('modalWasteName');
const huyHieuChiTietRac = document.getElementById('modalWasteBadge');
const mauThungChiTietRac = document.getElementById('modalBinColor');
const diemDenChiTietRac = document.getElementById('modalDestination');
const thoiGianPhanHuyRac = document.getElementById('modalDecompose');
const huongDanChiTietRac = document.getElementById('modalInstructions');
const meoXuLyRac = document.getElementById('modalTip');

// Toast thông báo phản hồi nhanh
const hopThongBaoNhanh = new bootstrap.Toast(document.getElementById('feedbackToast'));
const noiDungThongBao = document.getElementById('toastMessage');

/**
 * 1. KHỞI CHẠY KHI TẢI TRANG
 */
document.addEventListener('DOMContentLoaded', async () => {
  await taiDuLieuRac();
  hienThiDanhSachTheRac();
  khoiTaoCacSuKien();
  khoiTaoNutLenDauTrang();
});

/**
 * 2. TẢI DỮ LIỆU TỪ JSON HOẶC DỰ PHÒNG
 */
async function taiDuLieuRac() {
  try {
    const phanHoi = await fetch('assets/data/waste-data.json');
    if (phanHoi.ok) {
      danhSachRac = await phanHoi.json();
    } else {
      danhSachRac = [...FALLBACK_WASTE_DATA];
    }
  } catch (loi) {
    console.warn('Sử dụng dữ liệu nội bộ FALLBACK_WASTE_DATA:', loi);
    danhSachRac = [...FALLBACK_WASTE_DATA];
  }
}

/**
 * 3. KẾT XUẤT (RENDER) DANH SÁCH THẺ RÁC VÀO DOM
 */
function hienThiDanhSachTheRac() {
  const tuKhoa = tuKhoaTimKiem.trim().toLowerCase();
  
  // Lọc theo danh mục và từ khóa tìm kiếm
  const danhSachLoc = danhSachRac.filter(vatPham => {
    const khopDanhMuc = (boLocHienTai === 'all') || (vatPham.category === boLocHienTai);
    const khopTuKhoa = vatPham.name.toLowerCase().includes(tuKhoa) || 
                       vatPham.categoryName.toLowerCase().includes(tuKhoa) || 
                       vatPham.tip.toLowerCase().includes(tuKhoa);
    return khopDanhMuc && khopTuKhoa;
  });

  // Cập nhật số lượng tìm thấy
  theDemSoLuongRac.textContent = `${danhSachLoc.length} vật phẩm`;

  // Xử lý trạng thái rỗng (Empty State)
  if (danhSachLoc.length === 0) {
    khungChuaTheRac.innerHTML = '';
    hopThongBaoRong.classList.remove('d-none');
    return;
  } else {
    hopThongBaoRong.classList.add('d-none');
  }

  // Tạo HTML các thẻ rác
  khungChuaTheRac.innerHTML = danhSachLoc.map(vatPham => `
    <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
      <div class="the-vat-pham-rac p-3 shadow-sm h-100">
        <div class="d-flex align-items-start justify-content-between mb-2">
          <div class="bieu-tuong-vat-pham shadow-sm">
            <i class="bi ${vatPham.icon} text-success"></i>
          </div>
          <span class="badge ${vatPham.badgeClass} rounded-pill">${vatPham.categoryName}</span>
        </div>
        
        <h3 class="h6 fw-bold text-dark mt-2 mb-1 text-truncate" title="${vatPham.name}">${vatPham.name}</h3>
        
        <p class="small text-muted mb-2 flex-grow-1" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
          ${vatPham.tip}
        </p>

        <div class="d-flex align-items-center justify-content-between pt-2 border-top">
          <span class="small fw-semibold text-secondary">
            <i class="bi bi-trash3 me-1"></i>${vatPham.binColor.split('/')[0]}
          </span>
          <button class="btn btn-outline-success btn-sm rounded-pill px-3" onclick="moChiTietRac('${vatPham.id}')">
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * 4. MỞ MODAL XEM CHI TIẾT
 */
function moChiTietRac(maRac) {
  const vatPham = danhSachRac.find(r => r.id === maRac);
  if (!vatPham) return;

  tieuDeChiTietRac.textContent = vatPham.name;
  huyHieuChiTietRac.className = `badge ${vatPham.badgeClass} rounded-pill fs-6 px-3 py-2`;
  huyHieuChiTietRac.textContent = vatPham.categoryName;
  mauThungChiTietRac.textContent = vatPham.binColor;
  diemDenChiTietRac.textContent = vatPham.destination;
  thoiGianPhanHuyRac.textContent = vatPham.decomposeTime;
  huongDanChiTietRac.innerHTML = vatPham.instructions.replace(/\n/g, '<br>');
  meoXuLyRac.textContent = vatPham.tip;

  hopThoaiChiTietRac.show();
}
window.openWasteModal = moChiTietRac;

/**
 * 5. KHỞI TẠO CÁC SỰ KIỆN TƯƠNG TÁC (EVENT LISTENERS)
 */
function khoiTaoCacSuKien() {
  // Tìm kiếm tức thời khi nhập liệu
  oNhapTimKiemRac.addEventListener('input', (suKien) => {
    tuKhoaTimKiem = suKien.target.value;
    hienThiDanhSachTheRac();
  });

  // Lọc theo danh mục rác
  danhSachNutLocRac.forEach(nutBam => {
    nutBam.addEventListener('click', () => {
      danhSachNutLocRac.forEach(nutKhac => nutKhac.classList.remove('active'));
      nutBam.classList.add('active');
      boLocHienTai = nutBam.getAttribute('data-filter');
      hienThiDanhSachTheRac();
    });
  });

  // Thẻ từ khóa nhanh
  document.querySelectorAll('.the-tim-nhanh').forEach(theNhanh => {
    theNhanh.addEventListener('click', (suKien) => {
      suKien.preventDefault();
      const giaTri = theNhanh.getAttribute('data-val');
      oNhapTimKiemRac.value = giaTri;
      tuKhoaTimKiem = giaTri;
      hienThiDanhSachTheRac();
      document.getElementById('wasteLookupSection').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Sự kiện phân tích AI
  nutPhanTichAI.addEventListener('click', xuLyPhanTichAI);

  oNhapPhanTichAI.addEventListener('keypress', (suKien) => {
    if (suKien.key === 'Enter') {
      xuLyPhanTichAI();
    }
  });

  // Nút phản hồi thông tin hữu ích
  const nutDanhGia = document.getElementById('btnSubmitFeedback');
  if (nutDanhGia) {
    nutDanhGia.addEventListener('click', () => {
      hienThongBaoNhanh('Cảm ơn bạn! Đóng góp phân loại đã được gửi tới điều phối viên.');
      hopThoaiChiTietRac.hide();
    });
  }
}

/**
 * 6. XỬ LÝ MÔ PHỎNG AI-1: PHÂN LOẠI RÁC (WASTE CLASSIFIER)
 */
function xuLyPhanTichAI() {
  const tuKhoa = oNhapPhanTichAI.value.trim();
  
  if (!tuKhoa) {
    oNhapPhanTichAI.classList.add('is-invalid');
    oNhapPhanTichAI.focus();
    return;
  }
  oNhapPhanTichAI.classList.remove('is-invalid');

  // Bước 1: Hiển thị Skeleton/Loading
  hopDangXuLyAI.classList.remove('d-none');
  hopKetQuaAI.classList.add('d-none');
  hopBaoLoiAI.classList.add('d-none');

  // Mô phỏng độ trễ suy luận AI (1 giây)
  setTimeout(() => {
    hopDangXuLyAI.classList.add('d-none');
    
    // Đối sánh từ khóa phân loại rác
    const tuKhoaThuong = tuKhoa.toLowerCase();
    let ketQua = null;

    if (tuKhoaThuong.includes('pin') || tuKhoaThuong.includes('ắc quy') || tuKhoaThuong.includes('đèn') || tuKhoaThuong.includes('thuốc') || tuKhoaThuong.includes('sạc') || tuKhoaThuong.includes('nhiệt kế')) {
      ketQua = {
        name: tuKhoa,
        category: 'hazardous',
        categoryName: 'Rác nguy hại',
        boxClass: 'hazardous',
        badgeClass: 'text-bg-danger',
        bin: 'Thùng Màu Đỏ / Trạm thu gom nguy hại TLU',
        confidence: '98.5%',
        reason: 'Vật phẩm có chứa kim loại nặng độc hại (chì, thủy ngân, axit) dễ gây ô nhiễm nguồn nước ngầm và cháy nổ nếu bị ép nén.',
        instructions: 'Bọc kín hai đầu cực, cho vào hộp kín và nộp tại trạm thu gom rác nguy hại, không bỏ vào thùng rác gia đình.'
      };
    } else if (tuKhoaThuong.includes('lon') || tuKhoaThuong.includes('chai') || tuKhoaThuong.includes('giấy') || tuKhoaThuong.includes('bìa') || tuKhoaThuong.includes('nhôm') || tuKhoaThuong.includes('sắt') || tuKhoaThuong.includes('nhựa') || tuKhoaThuong.includes('sách')) {
      ketQua = {
        name: tuKhoa,
        category: 'recyclable',
        categoryName: 'Rác tái chế',
        boxClass: 'recyclable',
        badgeClass: 'text-bg-primary',
        bin: 'Thùng Màu Xanh Dương (Tái chế)',
        confidence: '96.2%',
        reason: 'Vật liệu có giá trị tái sinh cao (nhôm, nhựa PET/HDPE, cellulose từ giấy) có thể thu hồi tạo ra sản phẩm mới.',
        instructions: 'Làm sạch chất lỏng thừa, ép bẹp để giảm diện tích chứa trước khi cho vào thùng xanh.'
      };
    } else if (tuKhoaThuong.includes('cơm') || tuKhoaThuong.includes('thịt') || tuKhoaThuong.includes('cá') || tuKhoaThuong.includes('rau') || tuKhoaThuong.includes('chuối') || tuKhoaThuong.includes('vỏ') || tuKhoaThuong.includes('bã') || tuKhoaThuong.includes('trái cây')) {
      ketQua = {
        name: tuKhoa,
        category: 'organic',
        categoryName: 'Rác hữu cơ',
        boxClass: 'organic',
        badgeClass: 'text-bg-success',
        bin: 'Thùng Màu Xanh Lá / Nâu (Hữu cơ)',
        confidence: '99.1%',
        reason: 'Chất hữu cơ dễ phân hủy sinh học, có khả năng ủ làm phân bón hữu cơ compost hoặc chế biến thức ăn chăn nuôi.',
        instructions: 'Chắt ráo nước canh để tránh phát sinh mùi hôi, cho vào túi rác phân hủy sinh học.'
      };
    } else if (tuKhoaThuong.includes('xốp') || tuKhoaThuong.includes('nilon') || tuKhoaThuong.includes('túi') || tuKhoaThuong.includes('bỉm') || tuKhoaThuong.includes('tã') || tuKhoaThuong.includes('gốm') || tuKhoaThuong.includes('sứ') || tuKhoaThuong.includes('cao su')) {
      ketQua = {
        name: tuKhoa,
        category: 'other',
        categoryName: 'Rác vô cơ khác (Chôn lấp / Không tái chế)',
        boxClass: 'other',
        badgeClass: 'text-bg-secondary',
        bin: 'Thùng Màu Xám / Đen',
        confidence: '89.4%',
        reason: 'Vật phẩm hỗn hợp khó phân hủy, đã dính bẩn hoặc không có đơn vị tái chế kinh tế khả thi.',
        instructions: 'Cho vào bao rác sinh hoạt thông thường chuyển tới khu xử lý đốt rác phát điện hoặc bãi chôn lấp.'
      };
    } else {
      // Xử lý từ khóa không nằm trong danh mục chuẩn
      ketQua = {
        name: tuKhoa,
        isUncertain: true,
        category: 'uncertain',
        categoryName: 'Chưa đủ dữ liệu nhận diện',
        boxClass: 'other',
        badgeClass: 'text-bg-warning text-dark',
        bin: 'Cần xác định thủ công',
        confidence: '34.2% (Thấp)',
        reason: 'Hệ thống chưa đủ dữ liệu nhận diện cho từ khóa này trong kho dữ liệu chuẩn, hoặc vật phẩm có cấu tạo phức tạp.',
        instructions: 'Vui lòng kiểm tra lại tên gọi, chọn thủ công từ danh mục rác hoặc gửi yêu cầu để chuyên viên môi trường hỗ trợ.'
      };
    }

    // Hiển thị kết quả AI vào DOM
    hienThiKetQuaAI(ketQua);
  }, 900);
}

/**
 * 7. RENDER KẾT QUẢ AI VÀ TƯƠNG TÁC KIỂM SOÁT
 */
function hienThiKetQuaAI(duLieuKetQua) {
  hopKetQuaAI.className = `hop-ket-qua-ai p-4 mt-3 ${duLieuKetQua.boxClass}`;

  if (duLieuKetQua.isUncertain) {
    hopKetQuaAI.innerHTML = `
      <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <div>
          <span class="badge ${duLieuKetQua.badgeClass} rounded-pill fs-6 px-3 py-2 me-2">
            <i class="bi bi-exclamation-diamond-fill me-1"></i>${duLieuKetQua.categoryName}
          </span>
          <span class="badge bg-white text-danger border border-danger-subtle rounded-pill py-2 px-3">
            <i class="bi bi-cpu me-1"></i>Độ tin cậy: <strong>${duLieuKetQua.confidence}</strong>
          </span>
        </div>
        <div class="small text-muted">
          <i class="bi bi-search me-1"></i>Phương thức: <strong>Phân tích từ khóa ngữ cảnh</strong>
        </div>
      </div>

      <h4 class="h5 fw-bold text-dark mb-2">
        <i class="bi bi-question-circle text-warning me-2"></i>Chưa nhận diện chắc chắn về: "${duLieuKetQua.name}"
      </h4>

      <div class="p-3 bg-white rounded-3 border border-warning-subtle mb-3">
        <p class="text-secondary small mb-2">
          <strong>Lý do:</strong> ${duLieuKetQua.reason}
        </p>
        <p class="text-secondary small mb-0">
          <strong>Khuyến nghị:</strong> ${duLieuKetQua.instructions}
        </p>
      </div>

      <!-- Thao tác kiểm soát khi không chắc chắn -->
      <div class="d-flex flex-wrap align-items-center gap-2">
        <button class="btn btn-warning text-dark btn-sm px-3 rounded-pill fw-semibold" onclick="chuyenSuaThuCong('${duLieuKetQua.name}')">
          <i class="bi bi-card-checklist me-1"></i>Chọn loại rác thủ công
        </button>
        <button class="btn btn-outline-secondary btn-sm px-3 rounded-pill" onclick="document.getElementById('aiWasteInput').focus(); document.getElementById('aiWasteInput').select();">
          <i class="bi bi-arrow-repeat me-1"></i>Thử lại với mô tả khác
        </button>
        <button class="btn btn-outline-danger btn-sm px-3 rounded-pill" onclick="baoLoiPhanLoaiAI('${duLieuKetQua.name}')">
          <i class="bi bi-flag me-1"></i>Gửi báo cáo chuyên viên
        </button>
      </div>
    `;
  } else {
    hopKetQuaAI.innerHTML = `
      <div class="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
        <div>
          <span class="badge ${duLieuKetQua.badgeClass} rounded-pill fs-6 px-3 py-2 me-2">
            ${duLieuKetQua.categoryName}
          </span>
          <span class="badge bg-white text-dark border rounded-pill py-2 px-3">
            <i class="bi bi-cpu text-success me-1"></i>Độ tin cậy: <strong>${duLieuKetQua.confidence}</strong>
          </span>
        </div>
        <div class="small text-muted">
          <i class="bi bi-search me-1"></i>Phương thức: <strong>Phân tích từ khóa ngữ cảnh</strong>
        </div>
      </div>

      <h4 class="h5 fw-bold text-dark mb-2">
        <i class="bi bi-check2-circle text-success me-2"></i>Đề xuất cho: "${duLieuKetQua.name}"
      </h4>

      <div class="p-3 bg-white rounded-3 border mb-3">
        <div class="row g-2">
          <div class="col-md-6">
            <span class="text-muted small">Thùng bỏ quy định:</span>
            <p class="fw-bold text-dark mb-1"><i class="bi bi-trash3-fill me-1 text-primary"></i>${duLieuKetQua.bin}</p>
          </div>
          <div class="col-md-6">
            <span class="text-muted small">Cách chuẩn bị:</span>
            <p class="fw-bold text-dark mb-1">${duLieuKetQua.instructions}</p>
          </div>
        </div>
        <div class="mt-2 pt-2 border-top">
          <span class="text-muted small"><strong>Giải thích:</strong> ${duLieuKetQua.reason}</span>
        </div>
      </div>

      <!-- Thao tác người dùng -->
      <div class="d-flex flex-wrap align-items-center gap-2">
        <button class="btn btn-success btn-sm px-3 rounded-pill" onclick="chapNhanKetQuaAI('${duLieuKetQua.name}', '${duLieuKetQua.categoryName}')">
          <i class="bi bi-check-lg me-1"></i>Chấp nhận kết quả
        </button>
        <button class="btn btn-outline-secondary btn-sm px-3 rounded-pill" onclick="chuyenSuaThuCong('${duLieuKetQua.name}')">
          <i class="bi bi-pencil me-1"></i>Sửa loại rác thủ công
        </button>
        <button class="btn btn-outline-danger btn-sm px-3 rounded-pill" onclick="baoLoiPhanLoaiAI('${duLieuKetQua.name}')">
          <i class="bi bi-flag me-1"></i>Báo lỗi phân loại
        </button>
      </div>
    `;
  }

  hopKetQuaAI.classList.remove('d-none');
}

/**
 * 8. CÁC HÀNH ĐỘNG KIỂM SOÁT NGƯỜI DÙNG KHI AI ĐƯA RA KẾT QUẢ
 */
function chapNhanKetQuaAI(tenVatPham, loaiRac) {
  hienThongBaoNhanh(`Đã lưu "${tenVatPham}" vào lịch sử phân loại thành công! (+10 Điểm Xanh thưởng 🌱)`);
}
window.acceptAiResult = chapNhanKetQuaAI;

function chuyenSuaThuCong(tenVatPham) {
  hienThongBaoNhanh(`Chuyển sang chế độ chỉnh sửa thủ công cho "${tenVatPham}".`);
  oNhapTimKiemRac.value = tenVatPham;
  tuKhoaTimKiem = tenVatPham;
  hienThiDanhSachTheRac();
  document.getElementById('wasteLookupSection').scrollIntoView({ behavior: 'smooth' });
}
window.triggerManualEdit = chuyenSuaThuCong;

function baoLoiPhanLoaiAI(tenVatPham) {
  hienThongBaoNhanh(`Đã ghi nhận báo cáo lỗi cho "${tenVatPham}". Đội ngũ điều phối viên sẽ kiểm tra lại!`);
}
window.reportAiError = baoLoiPhanLoaiAI;

/**
 * 9. TOAST THÔNG BÁO TƯƠNG TÁC
 */
function hienThongBaoNhanh(thongDiep) {
  noiDungThongBao.textContent = thongDiep;
  hopThongBaoNhanh.show();
}

/**
 * 10. NÚT BACK TO TOP
 */
function khoiTaoNutLenDauTrang() {
  const nutLenDau = document.getElementById('nutCuonLenDau');
  if (!nutLenDau) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      nutLenDau.style.display = 'block';
    } else {
      nutLenDau.style.display = 'none';
    }
  });

  nutLenDau.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
