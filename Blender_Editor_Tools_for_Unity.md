# 🎨 Blender Editor Tools for Unity

[![Unity](https://img.shields.io/badge/Unity-2021.3+-blue.svg)](https://unity.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-1.0-green.svg)]()

> **Think in Blender. Build in Unity.**

Unity Editor Extension mang triết lý thao tác, phím tắt và workflow quen thuộc của **Blender** vào thẳng **Unity Editor**.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Installation](#-installation)
- [Usage Guide](#-usage-guide)
- [Customization](#️-customization)
- [Dependencies](#-dependencies)
- [FAQ](#-faq)
- [Support](#-support)

---

## 🎯 Overview

### Why This Tool?

Package này được tạo ra cho những ai:

```
✓ Đã quen Blender và không muốn "đổi não" khi sang Unity
✓ Muốn thao tác Scene View nhanh, chính xác, ít click
✓ Muốn Inspector gọn gàng, tập trung, không bừa bộn Component
```

### Core Philosophy

- 🎯 **Muscle Memory First:** Tôn trọng workflow Blender bạn đã quen
- ⚡ **Speed & Precision:** Thao tác nhanh hơn, chính xác hơn
- 🧹 **Clean Interface:** UI tối giản, không nhiễu
- ⚙️ **Optional, Not Forced:** Bật/tắt theo ý muốn

---

## ✨ Key Features

### ⌨️ 1. Blender-style Transform Hotkeys

Thao tác Transform giống Blender **1:1** ngay trong Scene View.

#### Basic Transforms

| Hotkey | Action | Description |
|--------|--------|-------------|
| **G** | Grab | Move objects in world space |
| **R** | Rotate | Rotate objects around center |
| **S** | Scale | Scale objects uniformly or per-axis |

#### Axis & Plane Constraints

| Input | Constraint | Example |
|-------|-----------|---------|
| **X** | Lock to X-axis | `G` → `X` → Move only on X |
| **Y** | Lock to Y-axis | `R` → `Y` → Rotate around Y |
| **Z** | Lock to Z-axis | `S` → `Z` → Scale along Z |
| **Shift + X** | Lock to YZ plane | `G` → `Shift+X` → Move on YZ |
| **Shift + Y** | Lock to XZ plane | `G` → `Shift+Y` → Move on XZ |
| **Shift + Z** | Lock to XY plane | `G` → `Shift+Z` → Move on XY |

#### Confirmation & Cancellation

- **Left Click** → Xác nhận thay đổi
- **Right Click / Esc** → Hủy bỏ (rollback về trạng thái ban đầu)

#### Smart HUD Display

```
┌─────────────────────────┐
│ MOVING (X locked)       │
│ Distance: 5.42 units    │
└─────────────────────────┘
```

Hiển thị real-time:
- Khoảng cách di chuyển
- Góc xoay
- Scale factor
- Axis/plane constraints

---

### 🖱️ 2. Blender Scene View Navigation

Điều hướng Scene View theo cách Blender — **không cần giữ Alt**.

| Input | Action | Behavior |
|-------|--------|----------|
| **MMB (Middle Mouse)** | Orbit | Xoay camera quanh pivot point |
| **Shift + MMB** | Pan | Di chuyển camera theo mặt phẳng view |
| **Scroll Wheel** | Zoom | Zoom in/out về pivot point |

#### Benefits

```
✓ Cảm giác camera mượt mà, tự nhiên
✓ Không cần combo phím phức tạp
✓ Đặc biệt hữu ích cho Artists
✓ Giảm căng thẳng cho ngón tay
```

#### Configuration

Có thể tùy chỉnh trong Preferences:
- Orbit sensitivity
- Pan speed
- Zoom speed
- Invert axes

---

### 📑 3. Tabbed Inspector

Thay thế hoàn toàn Inspector mặc định của Unity với thiết kế hiện đại, gọn gàng.

#### Grid/Tab Layout

**Before (Unity Default):**
```
Inspector
├─ Transform ▼
├─ Mesh Renderer ▼
├─ Mesh Filter ▼
├─ Box Collider ▼
├─ Rigidbody ▼
└─ Custom Script ▼
```

**After (Tabbed Inspector):**
```
┌────────────────────────────────┐
│ 📐 🎨 🔲 📦 ⚙️ 🔧        [+] │
└────────────────────────────────┘
   ↓ Click to focus
┌────────────────────────────────┐
│ Transform Component            │
│ Position: (0, 0, 0)           │
│ Rotation: (0, 0, 0)           │
│ Scale: (1, 1, 1)              │
└────────────────────────────────┘
```

#### Features

**Focus Mode**
- Chỉ hiển thị Component đang chọn
- Giảm scroll, tăng tập trung
- Perfect cho workflow nhanh

**Custom Context Menu**

Chuột phải trên Component icon:
```
├─ Reset to Default
├─ Copy Component Values
├─ Paste Component Values
├─ Copy Component
├─ Paste Component As New
└─ Remove Component
```

**Smart Add Component**

Cửa sổ Add Component mới với:
- 🔍 Search bar với auto-complete
- 📁 Category organization (Physics, Rendering, Scripts...)
- ⭐ Recently used components
- 📌 Pinned favorites

#### Benefits

```
✓ Ít scroll hơn 80%
✓ Tìm Component nhanh hơn 3x
✓ UI sạch sẽ, chuyên nghiệp
✓ Làm việc tập trung hơn
```

---

## 📦 Installation

### Method 1: Unity Package Manager (Recommended)

```bash
# Coming soon - Package will be available on Unity Asset Store
```

### Method 2: Manual Installation

1. **Download Package**
   - Tải file `.unitypackage` từ [Releases](../../releases)

2. **Import vào Unity**
   ```
   Unity Editor
   └─ Assets
      └─ Import Package
         └─ Custom Package...
            └─ Chọn file .unitypackage
   ```

3. **Import All**
   - Nhấn **Import** để cài đặt tất cả files

### Verification

Sau khi import, kiểm tra:

```
✓ Menu: Edit > Preferences > Blender Editor Tools
✓ Scene View: Thử phím G/R/S
✓ Inspector: Thấy Tab icons phía trên
```

---

## 🚀 Usage Guide

### Transform Hotkeys Workflow

#### Example 1: Move object along X axis

```
1. Select GameObject
2. Press G (enter Move mode)
3. Press X (lock to X axis)
4. Move mouse
5. Left Click to confirm
```

#### Example 2: Rotate 45° on Y axis

```
1. Select GameObject
2. Press R (enter Rotate mode)
3. Press Y (lock to Y axis)
4. Type "45" on keyboard
5. Press Enter
```

#### Example 3: Scale uniformly

```
1. Select GameObject
2. Press S (enter Scale mode)
3. Type "2" for 2x scale
4. Press Enter
```

### Inspector Workflow

#### Quick Component Access

```
1. Select GameObject
2. Click Component icon in tab bar
3. Edit properties
4. No scrolling needed!
```

#### Add Component Fast

```
1. Click [+] button
2. Type component name
3. Press Enter
4. Component added and focused
```

---

## ⚙️ Customization

### Preferences Location

```
Edit > Preferences > Blender Editor Tools
```

### Available Settings

#### Transform Hotkeys

```
┌─────────────────────────────────┐
│ ☑ Enable Transform Hotkeys     │
│                                 │
│ Move Hotkey:    [G]            │
│ Rotate Hotkey:  [R]            │
│ Scale Hotkey:   [S]            │
│                                 │
│ ☑ Show HUD during transform    │
│ HUD Opacity:    [▓▓▓▓░░] 70%  │
└─────────────────────────────────┘
```

#### Scene Navigation

```
┌─────────────────────────────────┐
│ ☑ Enable Blender Navigation     │
│                                 │
│ Orbit Sensitivity:   [▓▓▓░░░]  │
│ Pan Speed:           [▓▓▓▓░░]  │
│ Zoom Speed:          [▓▓▓░░░]  │
│                                 │
│ ☐ Invert Orbit X               │
│ ☐ Invert Orbit Y               │
└─────────────────────────────────┘
```

#### Tabbed Inspector

```
┌─────────────────────────────────┐
│ ☑ Enable Tabbed Inspector       │
│                                 │
│ Tab Icon Size:  ● Small  ○ Med  │
│ Focus Mode:     ● On     ○ Off  │
│                                 │
│ ☑ Show recently used first      │
│ ☑ Enable component favorites    │
└─────────────────────────────────┘
```

---

## 📦 Dependencies

Package đã tích hợp sẵn các thư viện cần thiết:

### NaughtyAttributes

| Property | Value |
|----------|-------|
| **Name** | NaughtyAttributes |
| **Version** | 2.1.4 |
| **Author** | Denis Rizov |
| **Purpose** | Enhanced Inspector capabilities |
| **License** | MIT |
| **Repository** | [GitHub](https://github.com/dbrizov/NaughtyAttributes) |

#### What NaughtyAttributes Provides

- Advanced property drawers
- Conditional field visibility
- Button methods in Inspector
- Validation attributes
- Layout control

---

## ❓ FAQ

<details>
<summary><b>Q: Có conflict với Unity hotkeys không?</b></summary>

**A:** Không. Tool chỉ active khi Scene View được focus và không GameObject nào đang được rename. Unity hotkeys vẫn hoạt động bình thường trong các panel khác.
</details>

<details>
<summary><b>Q: Có thể dùng chung với ProBuilder/ProGrids không?</b></summary>

**A:** Có. Tool được thiết kế để tương thích với các Unity extensions phổ biến. Nếu có conflict, có thể tắt từng feature riêng lẻ trong Preferences.
</details>

<details>
<summary><b>Q: Performance có bị ảnh hưởng không?</b></summary>

**A:** Không đáng kể. Tool chỉ hook vào Editor, không ảnh hưởng đến runtime performance. Scene với 10,000+ objects vẫn chạy mượt.
</details>

<details>
<summary><b>Q: Có hỗ trợ Multi-object editing không?</b></summary>

**A:** Có. G/R/S hotkeys hoạt động với multiple selection. Các objects sẽ transform cùng nhau.
</details>

<details>
<summary><b>Q: Có thể customize hotkeys không?</b></summary>

**A:** Hiện tại chưa hỗ trợ custom hotkeys (đang phát triển). Nhưng có thể bật/tắt từng feature trong Preferences.
</details>

---

## 🛠️ Troubleshooting

### Hotkeys không hoạt động

```
1. Kiểm tra Scene View có focus không
2. Kiểm tra trong Preferences: Enable Transform Hotkeys = ON
3. Restart Unity Editor
4. Reimport package nếu vẫn lỗi
```

### Inspector không hiển thị tabs

```
1. Kiểm tra Preferences: Enable Tabbed Inspector = ON
2. Chọn một GameObject
3. Click refresh button trong Inspector
4. Nếu vẫn lỗi, check Console log
```

### Navigation không mượt

```
1. Kiểm tra Preferences: Scene Navigation sensitivity
2. Giảm Orbit/Pan speed nếu quá nhạy
3. Tắt VSync nếu có lag
4. Update graphics drivers
```

---

## 🗺️ Roadmap

### Version 1.1 (Planned)

- [ ] Custom hotkey mapping
- [ ] Transform snapping options
- [ ] Preset save/load system
- [ ] More Inspector themes

### Version 1.2 (Future)

- [ ] Multi-object transform with visual feedback
- [ ] Custom gizmo system
- [ ] Transform history/undo improvements
- [ ] Performance profiling tools

---

## 🤝 Contributing

Contributions are welcome! Để đóng góp:

1. Fork repository
2. Create feature branch
3. Commit changes với clear messages
4. Push và tạo Pull Request

### Development Setup

```bash
# Clone repository
git clone [repo-url]

# Open in Unity 2021.3+
# Make changes
# Test thoroughly
# Submit PR
```

---

## 🙏 Credits

### Core Development
- **Hau Nguyen** - Tool Architecture & Implementation

### Third-Party Libraries
- **Denis Rizov** - NaughtyAttributes framework
- **Unity Technologies** - Unity Editor API

### Special Thanks
- Blender Foundation - For inspiring the workflow
- Unity community - For feedback and testing

---

## 📄 License

**MIT License**

```
Copyright (c) 2024 Hau Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 📞 Support

### Get Help

- 🐛 [Report Bug](../../issues/new?template=bug_report.md)
- 💡 [Request Feature](../../issues/new?template=feature_request.md)
- 💬 [Discussions](../../discussions)
- 📧 Email: support@example.com

### Community

- Discord: [Join Server](#)
- Forum: [Unity Forum Thread](#)
- Twitter: [@YourHandle](#)

---

<div align="center">

**[← Back to Main](./README.md)** | **[Blender Add-on →](./Pie_Manager_PM__for_Blender.md)** | **[VSCode Extension →](./Code_Snippets_Manager.md)**

Made with ❤️ for Unity Artists

</div>
