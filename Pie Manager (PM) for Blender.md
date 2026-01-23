Pie Manager (PM) for Blender
Pie Manager (PM) là một add-on mạnh mẽ dành cho Blender, cho phép người dùng tự tạo và quản lý các Pie Menus (menu dạng tròn) tùy chỉnh mà không cần biết lập trình.

Phiên bản v3.0.7 mang đến khả năng kiểm soát ngữ cảnh tuyệt đối với Multi-select Filters (Bộ lọc đa chọn), giúp bạn tạo ra một phím tắt duy nhất nhưng hoạt động thông minh trong mọi chế độ (Object, Edit, Sculpt, Node Editor, v.v.).

✨ Tính năng nổi bật (Key Features)
🎨 Giao diện trực quan: Tạo Pie Menu ngay trong Sidebar (N-Panel), không cần viết một dòng code nào.

🧠 Context Sensitive (Nhạy ngữ cảnh):

Hiển thị các mục (items) khác nhau dựa trên chế độ làm việc (Object Mode, Edit Mode, Sculpt Mode...).

MỚI: Tách biệt bộ lọc cho Edit Mesh và Edit Armature.

Hỗ trợ bộ lọc theo Editor (3D View, Shader Editor, Geometry Node, Image Editor...).

📚 Action Library (Thư viện hành động): Tích hợp sẵn hàng trăm lệnh thông dụng (Viewport, Selection, UV, Image...) để gán nhanh vào menu.

🖌️ Smart Sculpt Support: Hỗ trợ đầy đủ hệ thống Brush Asset mới của Blender 4.0+.

🐍 Python Scripting: Chạy các đoạn mã Python tùy chỉnh trực tiếp từ Pie Menu.

💾 Presets System: Lưu và chia sẻ cấu hình menu của bạn dưới dạng file JSON.

🖱️ Add from Context Menu: Thêm nhanh bất kỳ nút bấm nào vào Pie Manager chỉ bằng cách chuột phải -> Add to Pie Manager.

🛠️ Cài đặt (Installation)
Tải file .zip của add-on về máy.

Mở Blender, đi tới Edit > Preferences.

Chọn tab Add-ons và nhấn Install...

Chọn file .zip vừa tải.

Tích vào ô chọn để kích hoạt: 3D View: PM (PieManage).

🚀 Hướng dẫn sử dụng (Usage)
Vị trí: View3D > Sidebar (Phím N) > Tab PM

1. Tạo một Pie Menu mới
Trong bảng Pie Menus, nhấn nút (+).

Đặt tên cho Menu (ví dụ: "My Workflow").

Gán phím tắt (Hotkey), ví dụ: Q, Shift + A...

2. Thêm các mục (Items)
Chọn Menu vừa tạo, nhấn (+) trong bảng Menu Items.

Chọn loại lệnh (Command Type):

Operator: Gọi lệnh Blender (ví dụ: bpy.ops.mesh.subdivide()).

Sculpt Tool: Chọn nhanh các cọ điêu khắc (Draw, Clay, Snake Hook...).

Viewpoint: Chuyển góc nhìn (Top, Front, Right...).

Python Script: Chạy code Python tùy chỉnh.

Menu: Gọi một Menu con khác.

3. Sử dụng Bộ lọc ngữ cảnh (Context Filters) - Quan trọng
Đây là tính năng mạnh nhất của PM v3.0.7. Bạn có thể cài đặt để một Item chỉ xuất hiện khi điều kiện đúng.

Mở phần Item Settings.

Mode Filters: Chọn các chế độ mà Item sẽ hiển thị (ví dụ: Chỉ hiện nút "Extrude" khi ở Edit Mesh).

Editor Filters: Chọn cửa sổ làm việc (ví dụ: Chỉ hiện nút "Add Node" khi ở Shader Editor).

4. Sử dụng Action Library
Mở panel Action Library.

Tìm kiếm hành động bạn cần (ví dụ: "Select All", "Snap Cursor").

Nhấn vào tên hành động để gán nó cho Item đang chọn.

📦 Import / Export Presets
Bạn có thể sao lưu các menu của mình hoặc chia sẻ cho người khác:

Save Preset: Lưu cấu hình hiện tại thành file JSON.

Load Preset: Nạp cấu hình từ file đã lưu.

Dữ liệu được lưu tại thư mục config của người dùng: .../config/menu_editor_presets/

🤝 Đóng góp (Credits)
Author: HauNguyen

Phiên bản: 3.0.7

Category: 3D View

Add-on này được phát triển để tối ưu hóa quy trình làm việc trong Blender 4.0 trở lên.

Một số lưu ý về file code (Dành cho Developer/Bạn):
Nếu bạn muốn chỉnh sửa thêm, cấu trúc code hiện tại như sau:

__init__.py: Khởi tạo và đăng ký add-on.

core.py: Xử lý đăng ký phím tắt động (Dynamic Keymaps).

storage.py: Xử lý lưu/tải dữ liệu JSON và logic lọc ngữ cảnh (Filter Logic).

action_library.py: Chứa dữ liệu các lệnh có sẵn.
