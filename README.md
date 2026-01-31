# 🎯 Creative Workflow Tools Collection

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Blender](https://img.shields.io/badge/Blender-4.0+-orange.svg)](https://www.blender.org/)
[![Unity](https://img.shields.io/badge/Unity-2021.3+-blue.svg)](https://unity.com/)

> **Think fast. Work smart. Stay in flow.**

Bộ công cụ tối ưu workflow chuyên nghiệp dành cho **Artists**, **Technical Artists** và **Game Developers** làm việc với **Unity** và **Blender**.

---

## 🎨 Philosophy

```
┌─────────────────────────────────────────────┐
│  Workflow tốt không làm bạn nhanh hơn      │
│  một chút. Nó làm bạn KHÔNG BỊ CHẬM LẠI.   │
└─────────────────────────────────────────────┘
```

Mỗi công cụ trong collection này được thiết kế theo các nguyên tắc cốt lõi:

| Nguyên tắc | Mô tả |
|-----------|-------|
| 🎯 **Context-Aware** | Tool hiểu người dùng đang làm gì |
| ⚡ **Low Friction** | Ít click, ít menu, ít suy nghĩ |
| 💪 **Muscle Memory First** | Tôn trọng thói quen đã có |
| 🧩 **Modular & Extensible** | Dễ mở rộng, dễ bảo trì |

---

## 📦 Featured Tools

### 🎮 [Blender Editor Tools for Unity](./Blender_Editor_Tools_for_Unity.md)

**Unity Editor Extension** - Blender workflow inside Unity

Mang triết lý thao tác và phím tắt quen thuộc của Blender vào Unity Editor.

**Key Features:**
- ⌨️ Blender-style Transform Hotkeys (G/R/S)
- 🖱️ Scene Navigation không cần Alt
- 📑 Tabbed Inspector thay thế Inspector mặc định
- ⚙️ Customizable preferences

**Ideal For:**
- Artists quen với Blender workflow
- Level Designers cần thao tác Scene nhanh
- Teams muốn Inspector gọn gàng, tập trung

👉 [Chi tiết →](./Blender_Editor_Tools_for_Unity.md)

---

### 🥧 [Pie Manager (PM) for Blender](./Pie_Manager_PM__for_Blender.md)

**Blender Add-on** - Context-aware Pie Menu system

Tạo và quản lý Pie Menus nhạy ngữ cảnh — **không cần code**.

**Key Features:**
- 🎨 Visual Pie Menu Editor
- 🧠 Multi-select Context Filters (Mode + Editor + Context)
- 📚 Action Library với hàng trăm lệnh
- 💾 Preset System (JSON export/import)
- 🖱️ Add from Context Menu

**Ideal For:**
- Blender Power Users
- Technical Artists
- Pipeline Developers

**v3.0.7:** *One hotkey. Infinite contexts.*

👉 [Chi tiết →](./Pie_Manager_PM__for_Blender.md)

---

### 📝 [Code Snippets Manager](./Code_Snippets_Manager.md)

**VSCode Extension** - Snippet management system

Quản lý và sử dụng code snippets một cách trực quan và hiệu quả.

**Key Features:**
- 📚 Visual snippet browser with color-coded languages
- 🔍 Quick search and filtering
- 📦 Import/Export snippet collections
- 🎨 Syntax highlighting for 23+ languages
- 🔄 Auto-sync code block languages

**Ideal For:**
- Developers làm việc đa ngôn ngữ
- Teams cần chia sẻ code snippets
- Technical Writers cần document code

👉 [Chi tiết →](./Code_Snippets_Manager.md)

---

## 🚀 Quick Start

### Unity Tool
```bash
# Download .unitypackage from Releases
# Import: Assets > Import Package > Custom Package...
```

### Blender Add-on
```bash
# Install: Edit > Preferences > Add-ons > Install...
# Enable: "3D View: PM (Pie Manager)"
```

### VSCode Extension
```bash
# Extension Marketplace: Search "Code Snippets Manager"
# Or install from .vsix file
```

---

## 📂 Repository Structure

```
creative-workflow-tools/
│
├── 📄 README.md                              # Overview & navigation
│
├── 🎮 Blender_Editor_Tools_for_Unity.md     # Unity tool documentation
│   ├── Installation guide
│   ├── Feature details
│   └── Usage examples
│
├── 🥧 Pie_Manager_PM__for_Blender.md         # Blender add-on documentation
│   ├── Installation guide
│   ├── Context filter system
│   └── Preset management
│
└── 📝 Code_Snippets_Manager.md               # VSCode extension documentation
    ├── Bug fixes & improvements
    ├── Language support
    └── UI/UX updates
```

---

## 🎯 Use Cases

### For Artists
- **Unity Scene Design:** Blender-style navigation và transform
- **Blender Asset Creation:** Custom pie menus cho từng task
- **Documentation:** Code snippets cho technical notes

### For Technical Artists
- **Pipeline Tools:** Python scripting trong Pie Manager
- **Unity Extensions:** Custom Inspector workflows
- **Code Libraries:** Snippet collections cho tools development

### For Developers
- **Rapid Prototyping:** Fast scene manipulation in Unity
- **Blender Automation:** Custom pie menus cho repetitive tasks
- **Code Reuse:** Organized snippet management

---

## 🤝 Contributing

Chúng tôi hoan nghênh contributions! Để đóng góp:

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 👤 Author

**Hau Nguyen**
- Role: Technical Artist / Tool Developer / Game Developer
- Focus: Workflow optimization & pipeline development

---

## 📦 Dependencies & Credits

### Unity Tool
- **NaughtyAttributes** (v2.1.4) - Denis Rizov
  - Inspector extensions
  - [GitHub](https://github.com/dbrizov/NaughtyAttributes)

### All Tools
- Developed with focus on **production readiness**
- Tested in **real-world pipelines**
- Designed for **team collaboration**

---

## 📜 License

**MIT License** - Free to use, modify, and integrate

```
Copyright (c) 2024 Hau Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

See [LICENSE](LICENSE) file for details.

---

## 📞 Support & Feedback

- 🐛 **Bug Reports:** Open an issue with detailed reproduction steps
- 💡 **Feature Requests:** Describe your use case and workflow
- 📧 **Contact:** For direct inquiries and collaboration

---

## 🗺️ Roadmap

### Unity Tool
- [ ] Multi-object transform with visual feedback
- [ ] Custom gizmo system
- [ ] Preset save/load system

### Blender Add-on
- [ ] Pie menu nesting improvements
- [ ] Action recording system
- [ ] Cloud preset sharing

### VSCode Extension
- [ ] AI-powered snippet suggestions
- [ ] Team collaboration features
- [ ] Advanced search with regex

---

<div align="center">

**Made with ❤️ for the creative community**

[⭐ Star this repo](.) • [🐛 Report Bug](.) • [💡 Request Feature](.)

</div>
