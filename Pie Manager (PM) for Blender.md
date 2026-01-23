# 🥧 Pie Manager (PM) for Blender

**Pie Manager (PM)** là một add-on mạnh mẽ dành cho **Blender**, cho phép người dùng **tạo, quản lý và tùy biến Pie Menus (menu dạng tròn)** một cách trực quan — **không cần biết lập trình**.

Phiên bản **v3.0.7** giới thiệu hệ thống **Multi-select Context Filters**, mang lại khả năng kiểm soát ngữ cảnh gần như tuyệt đối:  
👉 **một phím tắt duy nhất**, nhưng hành vi thay đổi thông minh theo **Mode**, **Editor**, và **Context**.

> *One hotkey. Infinite contexts.*

---

## ✨ Key Features

### 🎨 Visual Pie Menu Editor
- Tạo và chỉnh sửa Pie Menu trực tiếp trong **Sidebar (N-Panel)**
- Không cần viết code
- Thao tác kéo – chọn – gán cực nhanh

---

### 🧠 Context Sensitive System (Nhạy ngữ cảnh)
Pie Manager tự động hiển thị **đúng hành động – đúng thời điểm**:

- **Mode Filters**
  - Object Mode
  - Edit Mode  
    - Mesh  
    - Armature *(NEW)*
  - Sculpt Mode
  - Pose Mode
  - …

- **Editor Filters**
  - 3D View
  - Shader Editor
  - Geometry Nodes
  - Image Editor
  - Node Editors khác

➡️ Một Item có thể xuất hiện **chỉ khi**:
> *Edit Mesh + 3D View + đúng Editor đang mở*

---

### 📚 Action Library
Thư viện hành động tích hợp sẵn với **hàng trăm lệnh phổ biến**:

- Viewport & Navigation
- Selection
- Mesh / UV
- Image & Node
- Utility Commands

➡️ Gán hành động chỉ bằng **1 click**.

---

### 🖌️ Smart Sculpt Support
- Hỗ trợ đầy đủ **Brush Asset System** của **Blender 4.0+**
- Truy cập nhanh các Sculpt Brush:
  - Draw
  - Clay
  - Snake Hook
  - Inflate
  - …

---

### 🐍 Python Scripting
- Chạy **Python code tùy chỉnh** trực tiếp từ Pie Menu
- Phù hợp cho:
  - Technical Artist
  - Tool Developer
  - Pipeline customization

---

### 💾 Preset System
- Lưu cấu hình Pie Menu dưới dạng **JSON**
- Import / Export dễ dàng
- Chia sẻ workflow cho team hoặc cộng đồng

---

### 🖱️ Add from Context Menu
- Chuột phải vào **bất kỳ nút nào trong Blender**
- Chọn **Add to Pie Manager**
- Lệnh được thêm ngay vào menu hiện tại

➡️ Workflow cực nhanh, đúng tinh thần Blender.

---

## 🛠️ Installation

1. Tải file **`.zip`** của add-on
2. Mở Blender → `Edit > Preferences`
3. Chọn tab **Add-ons** → `Install...`
4. Chọn file `.zip`
5. Kích hoạt add-on:

3D View: PM (Pie Manager)


---

## 🚀 Usage Guide

### 📍 Location

View3D > Sidebar (N) > PM


---

### 1️⃣ Create a Pie Menu
1. Trong panel **Pie Menus**, nhấn **( + )**
2. Đặt tên (ví dụ: `My Workflow`)
3. Gán **Hotkey** (Q, Shift + A, …)

---

### 2️⃣ Add Menu Items
Trong menu vừa tạo, nhấn **( + )** ở bảng Menu Items.

**Supported Item Types**
- **Operator** — Gọi Blender operator  
  `bpy.ops.mesh.subdivide()`
- **Sculpt Tool** — Chọn Brush
- **Viewpoint** — Top / Front / Right…
- **Python Script** — Chạy code tùy chỉnh
- **Menu** — Gọi Pie Menu con

---

### 3️⃣ Context Filters (Core Feature)
Thiết lập để Item chỉ xuất hiện khi điều kiện phù hợp.

- **Mode Filters**
  - Ví dụ: chỉ hiện *Extrude* khi **Edit Mesh**
- **Editor Filters**
  - Ví dụ: chỉ hiện *Add Node* trong **Shader Editor**

➡️ Đây là trái tim của **PM v3.0.7**.

---

### 4️⃣ Action Library
1. Mở panel **Action Library**
2. Tìm hành động (ví dụ: `Select All`, `Snap Cursor`)
3. Click để gán cho Item đang chọn

---

## 📦 Preset Import / Export

- **Save Preset** — Xuất cấu hình hiện tại ra JSON
- **Load Preset** — Nạp preset đã lưu

📂 Preset location:


.../config/menu_editor_presets/


---

## 🧩 Code Structure (For Developers)


init.py # Add-on initialization & registration
core.py # Dynamic keymap system
storage.py # JSON storage & context filter logic
action_library.py # Built-in action definitions


Thiết kế module rõ ràng, dễ mở rộng và bảo trì.

---

## 🤝 Credits

- **Author:** Hau Nguyen  
- **Version:** 3.0.7  
- **Category:** 3D View  

Add-on được phát triển nhằm tối ưu hóa workflow cho **Blender 4.0+**  
với trọng tâm là **tốc độ – ngữ cảnh – khả năng mở rộng**.
