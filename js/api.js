/**
 * GreenSort - Module Quản Lý Dữ Liệu Tập Trung (api.js)
 * Cung cấp CRUD cho tất cả thực thể: wasteTypes, collectionPoints, pickupRequests, routes, tasks, users
 * Sử dụng LocalStorage làm nguồn dữ liệu (mock backend)
 * Học phần: CSE122 – BTL-05
 */

const GreenSortAPI = (() => {
  // ============ PRIVATE HELPERS ============
  function _get(key) {
    try { return JSON.parse(localStorage.getItem(key)) || []; }
    catch { return []; }
  }
  function _set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  function _genId(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
  }

  // ============ SEED DATA ============
  const SEED_COLLECTION_POINTS = [
    { id: "cp-001", name: "Điểm Thu Hồi Pin & Thiết Bị Điện Tử TLU", address: "175 Tây Sơn, Đống Đa, Hà Nội", type: "hazardous", accepts: "Pin, ắc quy, bóng đèn, sạc hỏng", acceptedTypes: ["Rác nguy hại", "Pin cũ", "Bóng đèn"], hours: "07:30 - 18:00 (Hàng ngày)", phone: "(024) 3852 2201", status: "open", lat: 21.0115, lng: 105.8215, fillLevel: 42 },
    { id: "cp-002", name: "Trạm GreenHub Tái Chế Xanh", address: "Số 45 Chùa Bộc, Quang Trung, Đống Đa, Hà Nội", type: "recyclable", accepts: "Chai nhựa, vỏ lon, giấy báo, bìa", acceptedTypes: ["Rác tái chế", "Chai nhựa", "Giấy bìa"], hours: "08:00 - 17:00 (Thứ 2 - Thứ 7)", phone: "(024) 3851 1234", status: "open", reward: "Đổi 5kg nhựa = 1 sen đá", lat: 21.0085, lng: 105.8265, fillLevel: 68 },
    { id: "cp-003", name: "Trạm Trung Chuyển Rác Cồng Kềnh Hoàng Cầu", address: "Ngõ 59 Hoàng Cầu, Ô Chợ Dừa, Đống Đa, Hà Nội", type: "heavy", accepts: "Bàn ghế hỏng, đệm mút, tủ gỗ cũ, sofa lớn", acceptedTypes: ["Rác cồng kềnh", "Đồ gỗ gia dụng", "Đệm mút"], hours: "14:00 - 21:00 (Thứ 3 & Thứ 7)", phone: "(024) 3856 5678", status: "open", lat: 21.0165, lng: 105.8195, fillLevel: 55 },
    { id: "cp-004", name: "Nhà Thuốc Xanh Cộng Đồng TLU", address: "Trạm Y Tế Đại Học Thủy Lợi, Đống Đa, Hà Nội", type: "hazardous", accepts: "Thuốc tây hết hạn, vỏ lọ thuốc, bao bì y tế", acceptedTypes: ["Rác nguy hại", "Thuốc tây hết hạn", "Vỏ lọ thuốc"], hours: "08:00 - 17:30 (Thứ 2 - Thứ 6)", phone: "(024) 3857 9999", status: "open", lat: 21.0125, lng: 105.8225, fillLevel: 25 },
    { id: "cp-005", name: "Trạm Thu Gom Rác Hữu Cơ Cộng Đồng Xã Đàn", address: "Ngõ 25 Xã Đàn, Đống Đa, Hà Nội", type: "organic", accepts: "Thức ăn thừa, vỏ hoa quả, bã cà phê", acceptedTypes: ["Rác hữu cơ", "Thức ăn thừa", "Phế phẩm nông sản"], hours: "06:00 - 20:00 (Hàng ngày)", phone: "(024) 3852 4444", status: "open", lat: 21.0135, lng: 105.8255, fillLevel: 78 },
    { id: "cp-006", name: "Điểm Tập Kết Rác Cồng Kềnh & Xà Bần Nam Đồng", address: "Số 119 Hồ Đắc Di, Nam Đồng, Đống Đa, Hà Nội", type: "heavy", accepts: "Bàn ghế, tủ gỗ, sofa rách, đệm mút, xà bần", acceptedTypes: ["Rác cồng kềnh", "Đồ gỗ", "Đệm sofa"], hours: "07:00 - 19:00 (Hàng ngày)", phone: "(024) 3853 8899", status: "open", lat: 21.0128, lng: 105.8290, fillLevel: 45 },
    { id: "cp-007", name: "Trạm Tiếp Nhận Nội Thất & Gỗ Phế Liệu Kim Liên", address: "Ngõ 4 Đặng Văn Ngữ, Trung Tự, Đống Đa, Hà Nội", type: "heavy", accepts: "Tủ, giường, bàn ghế gỗ cũ, đồ điện lạnh lớn", acceptedTypes: ["Rác cồng kềnh", "Nội thất gỗ", "Thiết bị lớn"], hours: "08:00 - 18:30 (Thứ 2 - Thứ 7)", phone: "(024) 3852 6677", status: "open", lat: 21.0098, lng: 105.8340, fillLevel: 62 }
  ];

  const SEED_PICKUP_REQUESTS = [
    { id: "REQ-101", requesterName: "Nguyễn Thị Mai", phone: "0912345111", address: "175 Tây Sơn, Đống Đa", category: "Pin & Đèn hỏng (Nguy hại)", date: "2026-10-18", notes: "1 thùng pin cũ & 4 bóng đèn huỳnh quang", status: "pending", priority: "P1", priorityScore: 95, slaHours: 4, assignedTo: null, createdAt: "2026-10-17T08:30:00" },
    { id: "REQ-102", requesterName: "Trần Văn Hùng", phone: "0987654222", address: "45 Chùa Bộc, Đống Đa", category: "Tủ gỗ cũ cồng kềnh", date: "2026-10-19", notes: "Tủ gỗ ép 2 cánh, dài 1m6, để ở tầng 1", status: "assigned", priority: "P2", priorityScore: 68, slaHours: 24, assignedTo: "Xe 02 (Anh Nam)", createdAt: "2026-10-17T09:15:00" },
    { id: "REQ-103", requesterName: "Lê Hoàng Long", phone: "0933221333", address: "Ngõ 59 Hoàng Cầu, Đống Đa", category: "50kg Giấy & Bìa carton", date: "2026-10-17", notes: "Bìa carton đã gấp gọn, để trước cửa", status: "completed", priority: "P3", priorityScore: 42, slaHours: 48, assignedTo: "Xe 01 (Anh Hải)", completedAt: "2026-10-17T14:00:00", createdAt: "2026-10-16T10:00:00" },
    { id: "REQ-104", requesterName: "Phạm Hương Giang", phone: "0905112444", address: "Số 8 ngõ 25 Xã Đàn, Đống Đa", category: "Đệm mút / Sofa cũ", date: "2026-10-20", notes: "Đệm lò xo 1m8 cũ, khá nặng", status: "pending", priority: "P2", priorityScore: 72, slaHours: 24, assignedTo: null, createdAt: "2026-10-17T10:45:00" },
    { id: "REQ-105", requesterName: "Vũ Đức Minh", phone: "0918776555", address: "12 Tôn Đức Thắng, Đống Đa", category: "Thiết bị điện máy cũ (Máy giặt)", date: "2026-10-18", notes: "Máy giặt LG 8kg hỏng bo mạch", status: "in-progress", priority: "P1", priorityScore: 88, slaHours: 8, assignedTo: "Xe 02 (Anh Nam)", createdAt: "2026-10-17T07:20:00" },
    { id: "REQ-106", requesterName: "Đỗ Thanh Hà", phone: "0922334666", address: "Ngõ 35 Cát Linh, Đống Đa", category: "Cành cây to / Cây cảnh gãy đổ", date: "2026-10-21", notes: "3 cành cây bàng gãy do bão", status: "cancelled", priority: "P3", priorityScore: 35, slaHours: 48, assignedTo: null, cancelledAt: "2026-10-17T11:00:00", cancelReason: "Đã tự xử lý", createdAt: "2026-10-16T16:00:00" },
    { id: "REQ-107", requesterName: "Hoàng Minh Tuấn", phone: "0966554777", address: "88 Nguyễn Lương Bằng, Đống Đa", category: "Pin & Đèn hỏng (Nguy hại)", date: "2026-10-18", notes: "20 cục pin AA cũ + 2 pin laptop hỏng", status: "pending", priority: "P1", priorityScore: 91, slaHours: 4, assignedTo: null, createdAt: "2026-10-17T11:30:00" },
    { id: "REQ-108", requesterName: "Ngô Bích Ngọc", phone: "0944889888", address: "Số 6 Khâm Thiên, Đống Đa", category: "Đồ gỗ / Tủ / Bàn ghế cũ", date: "2026-10-19", notes: "1 bàn gỗ + 4 ghế nhựa cũ", status: "assigned", priority: "P2", priorityScore: 55, slaHours: 24, assignedTo: "Xe 01 (Anh Hải)", createdAt: "2026-10-17T12:00:00" }
  ];

  const SEED_ROUTES = [
    { id: "route-001", name: "Tuyến Đống Đa Bắc - Sáng", vehicle: "Xe 01 (Anh Hải)", date: "2026-10-18", status: "active", stops: ["REQ-101", "REQ-108"], totalKm: 8.5, estimatedTime: "2h30", completedStops: 0, createdAt: "2026-10-17T06:00:00" },
    { id: "route-002", name: "Tuyến Đống Đa Nam - Sáng", vehicle: "Xe 02 (Anh Nam)", date: "2026-10-18", status: "active", stops: ["REQ-102", "REQ-105"], totalKm: 6.2, estimatedTime: "1h45", completedStops: 0, createdAt: "2026-10-17T06:00:00" },
    { id: "route-003", name: "Tuyến Đống Đa - Chiều qua", vehicle: "Xe 01 (Anh Hải)", date: "2026-10-17", status: "completed", stops: ["REQ-103"], totalKm: 4.1, estimatedTime: "1h", completedStops: 1, completedAt: "2026-10-17T15:30:00", createdAt: "2026-10-17T12:00:00" }
  ];

  const SEED_TASKS = [
    { id: "task-001", requestId: "REQ-101", routeId: "route-001", collector: "Xe 01 (Anh Hải)", address: "175 Tây Sơn, Đống Đa", description: "Thu gom 1 thùng pin cũ & 4 bóng đèn huỳnh quang", status: "pending", priority: "P1", estimatedArrival: "09:30", notes: "", photoUrl: null, createdAt: "2026-10-17T06:00:00" },
    { id: "task-002", requestId: "REQ-102", routeId: "route-002", collector: "Xe 02 (Anh Nam)", address: "45 Chùa Bộc, Đống Đa", description: "Thu gom 1 tủ gỗ ép 2 cánh cồng kềnh", status: "in-progress", priority: "P2", estimatedArrival: "10:15", notes: "Đang trên đường tới", photoUrl: null, createdAt: "2026-10-17T06:00:00" },
    { id: "task-003", requestId: "REQ-103", routeId: "route-003", collector: "Xe 01 (Anh Hải)", address: "Ngõ 59 Hoàng Cầu, Đống Đa", description: "Thu gom 50kg Giấy & Bìa carton", status: "completed", priority: "P3", estimatedArrival: "14:00", completedAt: "2026-10-17T14:15:00", notes: "Đã thu gom xong, ký xác nhận", photoUrl: "photo_confirmed.jpg", createdAt: "2026-10-17T12:00:00" },
    { id: "task-004", requestId: "REQ-105", routeId: "route-002", collector: "Xe 02 (Anh Nam)", address: "12 Tôn Đức Thắng, Đống Đa", description: "Thu gom 1 máy giặt LG 8kg hỏng", status: "in-progress", priority: "P1", estimatedArrival: "11:00", notes: "Cần 2 người khiêng", photoUrl: null, createdAt: "2026-10-17T06:00:00" },
    { id: "task-005", requestId: "REQ-108", routeId: "route-001", collector: "Xe 01 (Anh Hải)", address: "Số 6 Khâm Thiên, Đống Đa", description: "Thu gom 1 bàn gỗ + 4 ghế nhựa cũ", status: "pending", priority: "P2", estimatedArrival: "11:30", notes: "", photoUrl: null, createdAt: "2026-10-17T06:00:00" }
  ];

  const SEED_WASTE_TYPES = [
    { id: "wt-001", name: "Rác Hữu Cơ", code: "organic", color: "#16a34a", binColor: "Xanh Lá / Nâu", icon: "bi-flower1", description: "Thức ăn thừa, rau củ quả, lá cây, bã cà phê", examples: ["Vỏ chuối", "Xương gà", "Bã cà phê", "Lá cây rụng"], destination: "Nhà máy ủ compost", status: "active", createdAt: "2026-01-01" },
    { id: "wt-002", name: "Rác Tái Chế", code: "recyclable", color: "#0284c7", binColor: "Xanh Dương", icon: "bi-recycle", description: "Vỏ lon, chai nhựa, giấy báo, bìa carton, kim loại", examples: ["Vỏ lon nhôm", "Chai PET", "Bìa carton", "Sách báo cũ"], destination: "Nhà máy tái chế", status: "active", createdAt: "2026-01-01" },
    { id: "wt-003", name: "Rác Nguy Hại", code: "hazardous", color: "#dc2626", binColor: "Đỏ / Trạm riêng", icon: "bi-radioactive", description: "Pin cũ, ắc quy, bóng đèn, thuốc hết hạn, hóa chất", examples: ["Pin AA/AAA", "Bóng đèn compact", "Thuốc hết hạn", "Sơn/hóa chất"], destination: "Khu xử lý chất thải nguy hại", status: "active", createdAt: "2026-01-01" },
    { id: "wt-004", name: "Rác Vô Cơ Khác", code: "other", color: "#64748b", binColor: "Xám / Đen", icon: "bi-trash3", description: "Hộp xốp dính dầu, túi nilon bẩn, sành sứ vỡ, tã lót", examples: ["Hộp xốp dính mỡ", "Túi nilon bẩn", "Gốm sứ vỡ", "Bỉm tã"], destination: "Đốt điện hoặc chôn lấp", status: "active", createdAt: "2026-01-01" },
    { id: "wt-005", name: "Rác Cồng Kềnh", code: "bulky", color: "#d97706", binColor: "Theo lịch hẹn", icon: "bi-box-seam", description: "Đồ nội thất cũ, đệm, thiết bị điện lớn", examples: ["Tủ gỗ", "Sofa", "Máy giặt cũ", "Đệm mút"], destination: "Trạm trung chuyển cồng kềnh", status: "active", createdAt: "2026-01-01" }
  ];

  // ============ INIT SEED DATA ============
  function _initSeed(key, seedData) {
    if (!localStorage.getItem(key) || _get(key).length === 0) {
      _set(key, seedData);
      return;
    }
    // Tự động bổ sung các điểm thu gom mới hoặc cập nhật điểm rác cồng kềnh còn thiếu
    if (key === 'gs_collection_points') {
      const currentList = _get(key);
      let updated = false;
      seedData.forEach(seedItem => {
        const found = currentList.find(item => item.id === seedItem.id);
        if (!found) {
          currentList.push(seedItem);
          updated = true;
        } else if (seedItem.type === 'heavy' && (!found.acceptedTypes || found.type !== 'heavy' || !found.accepts)) {
          found.type = 'heavy';
          found.accepts = seedItem.accepts;
          found.acceptedTypes = seedItem.acceptedTypes;
          found.status = 'open';
          updated = true;
        }
      });
      if (updated) {
        _set(key, currentList);
      }
    }
  }

  function initAllData() {
    _initSeed('gs_collection_points', SEED_COLLECTION_POINTS);
    _initSeed('gs_pickup_requests', SEED_PICKUP_REQUESTS);
    _initSeed('gs_routes', SEED_ROUTES);
    _initSeed('gs_tasks', SEED_TASKS);
    _initSeed('gs_waste_types', SEED_WASTE_TYPES);
  }

  // ============ GENERIC CRUD ============
  function _getAll(key) { return _get(key); }
  function _getById(key, id) { return _get(key).find(item => item.id === id) || null; }

  function _create(key, item, prefix) {
    const list = _get(key);
    item.id = item.id || _genId(prefix);
    item.createdAt = item.createdAt || new Date().toISOString();
    list.push(item);
    _set(key, list);
    return item;
  }

  function _update(key, id, updates) {
    const list = _get(key);
    const idx = list.findIndex(item => item.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...updates, updatedAt: new Date().toISOString() };
    _set(key, list);
    return list[idx];
  }

  function _remove(key, id) {
    const list = _get(key);
    const filtered = list.filter(item => item.id !== id);
    _set(key, filtered);
    return filtered.length < list.length;
  }

  function _archive(key, id) {
    return _update(key, id, { status: 'archived', archivedAt: new Date().toISOString() });
  }

  // ============ PUBLIC API ============
  return {
    init: initAllData,

    // Waste Types
    wasteTypes: {
      getAll: () => _getAll('gs_waste_types'),
      getById: (id) => _getById('gs_waste_types', id),
      create: (item) => _create('gs_waste_types', item, 'wt'),
      update: (id, data) => _update('gs_waste_types', id, data),
      remove: (id) => _remove('gs_waste_types', id),
      delete: (id) => _remove('gs_waste_types', id),
      archive: (id) => _archive('gs_waste_types', id)
    },

    // Collection Points
    collectionPoints: {
      getAll: () => _getAll('gs_collection_points'),
      getById: (id) => _getById('gs_collection_points', id),
      create: (item) => _create('gs_collection_points', item, 'cp'),
      update: (id, data) => _update('gs_collection_points', id, data),
      remove: (id) => _remove('gs_collection_points', id),
      archive: (id) => _archive('gs_collection_points', id)
    },

    // Pickup Requests
    pickupRequests: {
      getAll: () => _getAll('gs_pickup_requests'),
      getById: (id) => _getById('gs_pickup_requests', id),
      create: (item) => _create('gs_pickup_requests', item, 'REQ'),
      update: (id, data) => _update('gs_pickup_requests', id, data),
      remove: (id) => _remove('gs_pickup_requests', id),
      cancel: (id, reason) => _update('gs_pickup_requests', id, { status: 'cancelled', cancelReason: reason, cancelledAt: new Date().toISOString() }),
      complete: (id) => _update('gs_pickup_requests', id, { status: 'completed', completedAt: new Date().toISOString() }),
      getByStatus: (status) => _getAll('gs_pickup_requests').filter(r => r.status === status),
      getPending: () => _getAll('gs_pickup_requests').filter(r => r.status === 'pending'),
      getStats: () => {
        const all = _getAll('gs_pickup_requests');
        return {
          total: all.length,
          pending: all.filter(r => r.status === 'pending').length,
          assigned: all.filter(r => r.status === 'assigned').length,
          inProgress: all.filter(r => r.status === 'in-progress').length,
          completed: all.filter(r => r.status === 'completed').length,
          cancelled: all.filter(r => r.status === 'cancelled').length
        };
      }
    },

    // Routes
    routes: {
      getAll: () => _getAll('gs_routes'),
      getById: (id) => _getById('gs_routes', id),
      create: (item) => _create('gs_routes', item, 'route'),
      update: (id, data) => _update('gs_routes', id, data),
      remove: (id) => _remove('gs_routes', id)
    },

    // Tasks
    tasks: {
      getAll: () => _getAll('gs_tasks'),
      getById: (id) => _getById('gs_tasks', id),
      create: (item) => _create('gs_tasks', item, 'task'),
      update: (id, data) => _update('gs_tasks', id, data),
      remove: (id) => _remove('gs_tasks', id),
      complete: (id, notes, photoUrl) => _update('gs_tasks', id, { status: 'completed', completedAt: new Date().toISOString(), notes, photoUrl }),
      getByCollector: (collector) => _getAll('gs_tasks').filter(t => t.collector === collector),
      getByRoute: (routeId) => _getAll('gs_tasks').filter(t => t.routeId === routeId)
    },

    // Users (extends auth-guard.js)
    users: {
      getAll: () => {
        try { return JSON.parse(localStorage.getItem('greensort_registered_users')) || []; }
        catch { return []; }
      },
      getById: (username) => {
        const users = JSON.parse(localStorage.getItem('greensort_registered_users') || '[]');
        return users.find(u => u.username === username) || null;
      },
      update: (username, data) => {
        const users = JSON.parse(localStorage.getItem('greensort_registered_users') || '[]');
        const idx = users.findIndex(u => u.username === username);
        if (idx === -1) return null;
        users[idx] = { ...users[idx], ...data };
        localStorage.setItem('greensort_registered_users', JSON.stringify(users));
        return users[idx];
      },
      remove: (username) => {
        const users = JSON.parse(localStorage.getItem('greensort_registered_users') || '[]');
        const filtered = users.filter(u => u.username !== username);
        localStorage.setItem('greensort_registered_users', JSON.stringify(filtered));
        return filtered.length < users.length;
      },
      disable: (username) => {
        const users = JSON.parse(localStorage.getItem('greensort_registered_users') || '[]');
        const idx = users.findIndex(u => u.username === username);
        if (idx === -1) return null;
        users[idx].disabled = true;
        localStorage.setItem('greensort_registered_users', JSON.stringify(users));
        return users[idx];
      },
      getStats: () => {
        const users = JSON.parse(localStorage.getItem('greensort_registered_users') || '[]');
        return {
          total: users.length,
          residents: users.filter(u => u.role === 'resident').length,
          collectors: users.filter(u => u.role === 'collector').length,
          coordinators: users.filter(u => u.role === 'coordinator').length,
          admins: users.filter(u => u.role === 'admin').length,
          disabled: users.filter(u => u.disabled).length
        };
      }
    },

    // Dashboard stats
    getDashboardStats: () => {
      const requests = _getAll('gs_pickup_requests');
      const tasks = _getAll('gs_tasks');
      const routes = _getAll('gs_routes');
      const points = _getAll('gs_collection_points');
      const users = JSON.parse(localStorage.getItem('greensort_registered_users') || '[]');

      return {
        totalRequests: requests.length,
        pendingRequests: requests.filter(r => r.status === 'pending').length,
        completedRequests: requests.filter(r => r.status === 'completed').length,
        activeRoutes: routes.filter(r => r.status === 'active').length,
        totalPoints: points.length,
        totalUsers: users.length,
        totalTasks: tasks.length,
        completedTasks: tasks.filter(t => t.status === 'completed').length,
        slaBreaches: requests.filter(r => r.status === 'pending' && r.slaHours <= 4).length
      };
    },

    // Reset all data (for testing)
    resetAll: () => {
      ['gs_collection_points', 'gs_pickup_requests', 'gs_routes', 'gs_tasks', 'gs_waste_types'].forEach(k => localStorage.removeItem(k));
      initAllData();
    }
  };
})();

// Auto-init on load
GreenSortAPI.init();
