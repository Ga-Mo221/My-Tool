# 🎨 Blender Editor Tools for Unity

**Blender Editor Tools** là một **Unity Editor Extension** mang triết lý thao tác, phím tắt và workflow quen thuộc của **Blender** vào thẳng **Unity Editor**.

Package này được sinh ra cho những ai:
- Đã quen Blender và không muốn “đổi não” khi sang Unity  
- Muốn thao tác Scene View nhanh, chính xác, ít click  
- Muốn một Inspector gọn gàng, tập trung, không bừa bộn Component  

> *Think in Blender. Build in Unity.*

---

## ✨ Key Features

### ⌨️ Blender-style Transform Hotkeys (G / R / S)
Thao tác Transform giống Blender **1:1** ngay trong Scene View:

- **G** — Grab / Move  
- **R** — Rotate  
- **S** — Scale  

**Axis & Plane Locking**
- **X / Y / Z** — Khóa trục
- **Shift + X/Y/Z** — Khóa mặt phẳng (loại trừ trục)

**Smart HUD**
- Hiển thị **khoảng cách / góc xoay / scale** trực quan khi thao tác

**Confirm / Cancel**
- **Left Click** — Xác nhận
- **Right Click / Esc** — Hủy (rollback về trạng thái cũ)

---

### 🖱️ Blender Scene View Navigation
Điều hướng Scene View theo phong cách Blender, **không cần giữ Alt**:

| Input | Action |
|------|-------|
| **MMB** | Orbit |
| **Shift + MMB** | Pan |
| **Scroll** | Zoom |

Cảm giác camera mượt, đúng “chất Blender”, đặc biệt hữu ích cho Artist.

---

### 📑 Tabbed Inspector (Inspector dạng Tab / Grid)
Thay thế hoàn toàn Inspector mặc định của Unity:

- **Grid / Tab Layout**  
  Component hiển thị dưới dạng icon, không còn danh sách dọc dài vô tận.

- **Focus Mode**  
  Chỉ hiển thị Component đang làm việc → ít nhiễu, tập trung cao.

- **Custom Context Menu**  
  Chuột phải: Reset, Copy, Paste Values, Remove… thiết kế lại gọn gàng.

- **Smart Add Component**  
  Cửa sổ Add Component mới:
  - Tìm kiếm nhanh
  - Phân loại rõ ràng
  - Trực quan, dễ dùng

---

### ⚙️ Preferences & Customization
Tất cả tính năng có thể bật/tắt trong:

**`Edit > Preferences > Blender Editor Tools`**

- Enable / Disable:
  - Tabbed Inspector
  - Transform Hotkeys
  - Scene Navigation

Thiết kế theo triết lý: *không ép workflow – chỉ hỗ trợ*.

---

## 📦 Dependencies

Package đã tích hợp sẵn thư viện bên thứ ba:

| Package | Version | Author | Link |
|------|------|------|------|
| **NaughtyAttributes** | 2.1.4 | Denis Rizov | https://github.com/dbrizov/NaughtyAttributes |

> NaughtyAttributes giúp mở rộng Inspector một cách gọn gàng và mạnh mẽ.

---

## 🛠️ Installation

1. Tải file **`.unitypackage`** từ mục **Releases**
2. Mở project Unity
3. Import bằng một trong hai cách:
   - Kéo thả trực tiếp vào cửa sổ Project  
   - `Assets > Import Package > Custom Package...`
4. Nhấn **Import**

✅ Không cần setup thêm.

---

## 🚀 Usage Guide

### Transform Hotkeys

| Key | Action | Description |
|----|------|------------|
| **G** | Move | Di chuyển đối tượng |
| **R** | Rotate | Xoay đối tượng |
| **S** | Scale | Thay đổi kích thước |
| **X / Y / Z** | Axis Lock | Khóa trục |
| **Shift + X/Y/Z** | Plane Lock | Khóa mặt phẳng |
| **Left Click** | Confirm | Áp dụng |
| **Right Click / Esc** | Cancel | Hủy bỏ |

---

### Tabbed Inspector Workflow
1. Chọn một **GameObject**
2. Inspector hiển thị **Icon Tabs** phía trên
3. Click icon để focus vào Component
4. Nhấn **➕ Add** để thêm Component nhanh

---

## 🤝 Credits

- **Core Development:** GaMo  
- **Inspector Extensions:** Denis Rizov (NaughtyAttributes)

---

## 📜 License
MIT License — free to use, modify, and integrate into your workflow.
