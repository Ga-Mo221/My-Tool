# Blender Editor Tools for Unity

**Blender Editor Tools** là một gói tiện ích mở rộng (Unity Package) giúp mang trải nghiệm, phím tắt và quy trình làm việc (workflow) quen thuộc của **Blender** vào trong **Unity Editor**.

Công cụ này cực kỳ hữu ích cho các Artist/Developer đã quen với Blender và muốn tăng tốc độ thao tác trong Scene View cũng như tối ưu hóa giao diện Inspector.

## ✨ Tính năng nổi bật (Key Features)

### 1. ⌨️ Blender Transform Hotkeys (G, R, S)
Thao tác với đối tượng (Move, Rotate, Scale) nhanh chóng như trong Blender ngay tại Scene View:
* **G:** Grab/Move (Di chuyển).
* **R:** Rotate (Xoay).
* **S:** Scale (Phóng to/Thu nhỏ).
* **Khóa trục (Axis Locking):** Nhấn **X, Y, Z** trong khi thao tác để khóa theo trục tương ứng.
* **Khóa mặt phẳng (Plane Locking):** Nhấn **Shift + X/Y/Z** để di chuyển trên mặt phẳng (loại trừ trục đó).
* **HUD thông minh:** Hiển thị thông số khoảng cách/góc xoay trực quan ngay trên màn hình khi thao tác.
* **Xác nhận/Hủy:** Chuột trái để xác nhận, Chuột phải (hoặc Esc) để hủy bỏ.

### 2. 🖱️ Blender Scene Navigation
Điều hướng Camera trong Scene View giống hệt Blender (không cần giữ phím Alt):
* **Chuột giữa (MMB):** Xoay camera (Orbit).
* **Shift + MMB:** Trượt camera (Pan).
* **Scroll:** Phóng to/Thu nhỏ (Zoom).

### 3. 📑 Tabbed Inspector (Giao diện Inspector dạng Tab)
Thay đổi hoàn toàn cách hiển thị của Inspector mặc định giúp quản lý Component dễ dàng hơn:
* **Grid Layout:** Các Component được hiển thị dưới dạng icon/tab gọn gàng thay vì danh sách dọc dài.
* **Focus Mode:** Chỉ hiển thị nội dung của Component đang được chọn.
* **Custom Context Menu:** Menu chuột phải được thiết kế lại (Reset, Copy, Paste Values, Remove...).
* **Smart Add Component:** Cửa sổ thêm Component mới được làm lại, hỗ trợ tìm kiếm và phân loại trực quan.

### 4. ⚙️ Tùy chỉnh (Preferences)
Bạn có thể bật/tắt từng tính năng riêng biệt trong **Edit > Preferences > Blender Editor**:
* Enable/Disable Tab Inspector.
* Enable/Disable Transform Hotkeys.
* Enable/Disable Scene Navigation.

---

## 📦 Dependencies & Third-party

Package này đã tích hợp sẵn thư viện **NaughtyAttributes** để hỗ trợ mở rộng giao diện Inspector cho các script.

| Package | Version | Author | License / Link |
| :--- | :--- | :--- | :--- |
| **NaughtyAttributes** | 2.1.4 | Denis Rizov | [GitHub Repo](https://github.com/dbrizov/NaughtyAttributes) |

> *NaughtyAttributes is an extension for the Unity Inspector.*

---

## 🛠️ Cài đặt (Installation)

1.  Tải file `.unitypackage` từ mục **Releases** của repository này.
2.  Mở project Unity của bạn.
3.  Kéo thả file `.unitypackage` vào cửa sổ Project (hoặc chọn **Assets > Import Package > Custom Package...**).
4.  Nhấn **Import** để cài đặt toàn bộ assets.

## 🚀 Hướng dẫn sử dụng (Usage Guide)

### Phím tắt Transform (Khi đang chọn GameObject)

| Phím | Hành động | Mô tả |
| :--- | :--- | :--- |
| **G** | Move | Bắt đầu di chuyển đối tượng |
| **R** | Rotate | Bắt đầu xoay đối tượng |
| **S** | Scale | Bắt đầu thay đổi kích thước |
| **X / Y / Z** | Axis Lock | Khóa trục X, Y hoặc Z (khi đang Move/Rotate/Scale) |
| **Shift + X/Y/Z** | Plane Lock | Khóa mặt phẳng (ví dụ: Shift+Z để trượt trên mặt đất XY) |
| **Click Trái** | Confirm | Xác nhận thay đổi |
| **Click Phải / Esc** | Cancel | Hủy bỏ thay đổi (trở về trạng thái cũ) |

### Giao diện Inspector mới
1.  Chọn một GameObject bất kỳ.
2.  Nhìn vào cửa sổ Inspector, bạn sẽ thấy hàng loạt Icon ở trên cùng.
3.  Bấm vào từng Icon để xem chi tiết Component đó.
4.  Bấm nút **(+) Add** màu xanh để mở bảng tìm kiếm Component nhanh.

---

## 🤝 Đóng góp (Credits)

* **Core Logic:** Developed by GaMo.
* **Inspector Extensions:** Powered by NaughtyAttributes (Denis Rizov).

---

### Cấu trúc thư mục (Folder Structure)
Assets/ 
└── Plugins/ 
    └── BlenderEditorTools/ 
    ├── Editor/ # Mã nguồn chính (C#) 
    │     ├── BlenderTransformSession.cs 
    │     ├── BlenderSceneViewNavigation.cs 
    │     ├── GameObjectGridInspector.cs 
    │     └── ... 
    └── NaughtyAttributes/ # Thư viện đi kèm
