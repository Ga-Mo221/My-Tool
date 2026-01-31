# 🥧 Pie Manager (PM) for Blender

[![Blender](https://img.shields.io/badge/Blender-4.0+-orange.svg)](https://www.blender.org/)
[![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-3.0.7-green.svg)]()

> **One hotkey. Infinite contexts.**

Blender Add-on mạnh mẽ cho phép tạo và quản lý **Pie Menus nhạy ngữ cảnh** một cách trực quan — **không cần viết code**.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Installation](#-installation)
- [Quick Start](#-quick-start)
- [Advanced Usage](#-advanced-usage)
- [Preset System](#-preset-system)
- [Developer Guide](#-developer-guide)
- [FAQ](#-faq)

---

## 🎯 Overview

### What is Pie Manager?

Pie Manager (PM) là hệ thống quản lý Pie Menu thế hệ mới cho Blender, được thiết kế để:

```
✓ Tối ưu hóa workflow với context-aware menus
✓ Giảm thời gian truy cập commands từ giây xuống milliseconds
✓ Tùy biến hoàn toàn mà không cần Python
✓ Chia sẻ workflow qua JSON presets
```

### Version 3.0.7 Highlights

**Multi-select Context Filters** - Tính năng đột phá cho phép một hotkey duy nhất có hành vi khác nhau tùy theo:
- **Mode** (Object / Edit / Sculpt / Pose...)
- **Editor** (3D View / Shader / Node Editor...)
- **Context** (Mesh / Armature / Curve...)

```
Example: Q key
├─ 3D View + Object Mode → Modeling Tools
├─ 3D View + Edit Mesh   → Mesh Operations
├─ 3D View + Sculpt      → Brush Selection
├─ Shader Editor         → Node Creation
└─ Image Editor          → Paint Tools
```

---

## ✨ Key Features

### 🎨 1. Visual Pie Menu Editor

No-code interface cho phép tạo pie menus trong vài phút.

#### Editor Interface

```
┌─────────────────────────────────────┐
│ 📊 Pie Menus               [+ New] │
├─────────────────────────────────────┤
│ ▶ My Modeling Tools         [Q]    │
│   ├─ 🔧 Menu Items (8)            │
│   ├─ 🎯 Contexts (3)              │
│   └─ ⚙️ Settings                   │
├─────────────────────────────────────┤
│ ▶ Sculpting Workflow        [W]    │
│ ▶ Node Editor Quick Access  [A]    │
└─────────────────────────────────────┘
```

#### Features

- **Drag & Drop** item positioning
- **Visual preview** của pie layout
- **Real-time testing** trong Blender
- **Hotkey conflict detection**

---

### 🧠 2. Context Sensitive System

Revolutionary context filtering cho phép menu "hiểu" người dùng đang làm gì.

#### Mode Filters

| Mode | Use Case | Example |
|------|----------|---------|
| **Object Mode** | Scene organization | Quick parent/group tools |
| **Edit Mode (Mesh)** | Modeling | Extrude, bevel, subdivide |
| **Edit Mode (Armature)** | Rigging | Bone operations |
| **Sculpt Mode** | Digital sculpting | Brush switching |
| **Pose Mode** | Animation | IK/FK switching |
| **Texture Paint** | Texturing | Brush & texture tools |
| **Weight Paint** | Rigging | Weight assignment |

#### Editor Filters

```
┌────────────────────────────────────┐
│ 3D View         → Viewport tools   │
│ Shader Editor   → Node creation    │
│ Geometry Nodes  → Node operations  │
│ Image Editor    → Paint/edit tools │
│ UV Editor       → UV manipulation  │
│ Outliner        → Hierarchy tools  │
└────────────────────────────────────┘
```

#### Context Filters

Additional filtering cho Edit Mode:

- **Mesh** - Vertex/Edge/Face operations
- **Curve** - Curve editing
- **Armature** - Bone editing
- **Grease Pencil** - GP stroke editing
- **Metaball** - Meta object editing

#### Multi-Context Example

```python
Menu Item: "Quick Extrude"
├─ Mode: Edit Mode
├─ Editor: 3D View  
├─ Context: Mesh
└─ Result: Chỉ hiện khi edit mesh trong 3D View
```

---

### 📚 3. Action Library

Thư viện hàng trăm actions được tổ chức khoa học.

#### Categories

**Viewport & Navigation**
```
├─ View Selected (Numpad .)
├─ View All (Home)
├─ Toggle X-Ray (Alt+Z)
├─ Toggle Overlays
└─ Camera to View (Ctrl+Alt+Numpad 0)
```

**Selection**
```
├─ Select All (A)
├─ Select None (Alt+A)
├─ Invert Selection (Ctrl+I)
├─ Select More (Ctrl++)
└─ Select Less (Ctrl+-)
```

**Mesh Editing**
```
├─ Extrude (E)
├─ Bevel (Ctrl+B)
├─ Subdivide (Right Click → Subdivide)
├─ Merge (M)
├─ Split (Y)
└─ Separate (P)
```

**UV & Texturing**
```
├─ Unwrap (U)
├─ Smart UV Project
├─ Mark Seam (Ctrl+E)
└─ Pack Islands
```

**Node Operations**
```
├─ Add Shader Node
├─ Add Texture Node
├─ Mix Shader
└─ Connect to Output
```

**Utility**
```
├─ Quick Favorites (Q)
├─ Operator Search (F3)
├─ Save File (Ctrl+S)
└─ Render (F12)
```

#### Usage

```
1. Select menu item
2. Click "Action Library" button
3. Search or browse categories
4. Click action to assign
```

---

### 🖌️ 4. Smart Sculpt Support

Full integration với Blender 4.0+ Brush Asset System.

#### Brush Categories

```
Draw Brushes
├─ Draw
├─ Draw Sharp
├─ Clay
├─ Clay Strips
└─ Clay Thumb

Detail Brushes
├─ Grab
├─ Snake Hook
├─ Elastic Deform
└─ Boundary

Volume Brushes
├─ Inflate/Deflate
├─ Blob
└─ Crease

Cleanup Brushes
├─ Smooth
├─ Flatten
└─ Scrape
```

#### Quick Brush Switching

```
Setup Example:
├─ Q + Left Click   → Draw
├─ Q + Right Click  → Smooth
├─ Q + Top          → Grab
├─ Q + Bottom       → Clay
├─ Q + Top-Left     → Inflate
├─ Q + Top-Right    → Crease
├─ Q + Bottom-Left  → Snake Hook
└─ Q + Bottom-Right → Flatten
```

---

### 🐍 5. Python Scripting Support

Execute custom Python code directly từ pie menus.

#### Simple Script Example

```python
# Quick Material Assignment
import bpy
mat = bpy.data.materials.get("Metal_Base")
if mat:
    bpy.context.object.active_material = mat
```

#### Advanced Script Example

```python
# Smart Array with Offset
import bpy

def smart_array():
    obj = bpy.context.object
    
    # Add Array modifier
    mod = obj.modifiers.new(name="Array", type='ARRAY')
    mod.count = 5
    mod.relative_offset_displace[0] = 1.2
    
    # Add Empty as offset object
    empty = bpy.data.objects.new("Array_Offset", None)
    bpy.context.collection.objects.link(empty)
    empty.location = obj.location
    mod.offset_object = empty

smart_array()
```

#### Use Cases

- Custom tool creation
- Pipeline automation
- Batch operations
- Asset management
- Export/import workflows

---

### 💾 6. Preset System

Save và share workflows qua JSON files.

#### Preset Structure

```json
{
  "name": "My Modeling Workflow",
  "version": "3.0.7",
  "menus": [
    {
      "name": "Quick Model",
      "hotkey": "Q",
      "items": [
        {
          "position": "left",
          "type": "operator",
          "operator": "mesh.extrude_region_move",
          "label": "Extrude",
          "mode_filters": ["EDIT_MESH"],
          "editor_filters": ["VIEW_3D"]
        }
      ]
    }
  ]
}
```

#### Import/Export

**Export Workflow:**
```
1. Open PM Panel
2. Click "Export Preset"
3. Choose save location
4. Share .json file
```

**Import Workflow:**
```
1. Download .json preset
2. Open PM Panel
3. Click "Import Preset"
4. Select .json file
5. Menus ready to use!
```

#### Community Presets

```
├─ Modeling_Pro.json       → Hard surface modeling
├─ Sculpting_Artist.json   → Character sculpting
├─ UV_Workflow.json        → UV unwrapping & packing
├─ Animation_Quick.json    → Animation tools
└─ Node_Master.json        → Shader/Geo node editing
```

---

### 🖱️ 7. Add from Context Menu

Capture bất kỳ Blender command nào một cách trực quan.

#### Workflow

```
1. Right-click bất kỳ button nào trong Blender
2. Chọn "Add to Pie Manager"
3. Command tự động được thêm vào menu hiện tại
4. Customize vị trí và label
```

#### Examples

```
✓ Right-click "Subdivide" → Add to modeling menu
✓ Right-click "Add Cube" → Add to primitives menu
✓ Right-click custom operator → Add to tools menu
```

---

## 📦 Installation

### Requirements

- **Blender Version:** 4.0 or higher
- **Python:** 3.10+ (built-in with Blender)
- **OS:** Windows, macOS, Linux

### Step-by-Step Installation

**1. Download Add-on**
```
Download pie_manager_v3.0.7.zip from Releases
Do NOT unzip the file
```

**2. Install in Blender**
```
Blender
└─ Edit
   └─ Preferences
      └─ Add-ons
         └─ Install...
            └─ Select pie_manager_v3.0.7.zip
```

**3. Enable Add-on**
```
Search: "PM" or "Pie Manager"
Check: ☑ 3D View: PM (Pie Manager)
```

**4. Verify Installation**
```
3D View → Sidebar (N) → PM tab
Should see Pie Manager panel
```

---

## 🚀 Quick Start

### Create Your First Pie Menu (5 minutes)

#### Step 1: Create Menu

```
1. Open Sidebar (N) → PM tab
2. Click [+ New Pie Menu]
3. Name: "My First Menu"
4. Hotkey: Q
5. Click Create
```

#### Step 2: Add First Item

```
1. In Menu Items panel, click [+ Add Item]
2. Position: Left (click left slot)
3. Type: Operator
4. Open Action Library
5. Search: "extrude"
6. Select "Extrude Region"
```

#### Step 3: Set Context

```
1. Open Context Filters
2. Mode: ☑ Edit Mode
3. Editor: ☑ 3D View
4. Context: ☑ Mesh
```

#### Step 4: Test

```
1. Add a Cube (Shift+A)
2. Enter Edit Mode (Tab)
3. Press Q
4. See your pie menu!
5. Click left item to extrude
```

### Example: Complete Modeling Menu

```
Menu: "Modeling Tools" (Q)
├─ Left:        Extrude (E)
├─ Right:       Bevel (Ctrl+B)
├─ Top:         Subdivide
├─ Bottom:      Merge (M)
├─ Top-Left:    Inset (I)
├─ Top-Right:   Loop Cut (Ctrl+R)
├─ Bottom-Left: Edge Slide (GG)
└─ Bottom-Right: Delete (X)

Context:
├─ Mode: Edit Mode
├─ Editor: 3D View
└─ Context: Mesh
```

---

## 🎓 Advanced Usage

### Multi-Level Pie Menus

Create nested menus cho complex workflows.

```
Main Menu (Q)
├─ Modeling → Opens Modeling submenu
├─ Shading → Opens Shading submenu
├─ UV Tools → Opens UV submenu
└─ Export → Opens Export submenu

Modeling Submenu
├─ Add → Primitives menu
├─ Modify → Modifiers menu
└─ Transform → Transform menu
```

#### Setup

```
1. Create parent menu
2. Add menu item type: "Pie Menu"
3. Select target submenu from dropdown
4. Parent now opens submenu on click
```

### Dynamic Context Switching

Same hotkey, different behavior per context.

```
W Key Example:
├─ Object Mode + 3D View
│  └─ Quick Object Operations
│
├─ Edit Mesh + 3D View
│  └─ Mesh Editing Tools
│
├─ Sculpt + 3D View
│  └─ Brush Selection
│
├─ Shader Editor
│  └─ Add Shader Nodes
│
└─ Geometry Nodes
   └─ Add Geo Nodes
```

#### Configuration

```
Menu 1: Object Tools (W)
- Mode Filter: Object Mode
- Editor Filter: 3D View

Menu 2: Mesh Tools (W)
- Mode Filter: Edit Mode
- Editor Filter: 3D View
- Context Filter: Mesh

Menu 3: Sculpt Brushes (W)
- Mode Filter: Sculpt Mode
- Editor Filter: 3D View

Menu 4: Shader Nodes (W)
- Editor Filter: Shader Editor

PM automatically shows correct menu!
```

### Python Integration

#### Custom Operator

```python
# Create custom operator
import bpy

class MESH_OT_quick_bevel(bpy.types.Operator):
    bl_idname = "mesh.quick_bevel"
    bl_label = "Quick Bevel"
    bl_options = {'REGISTER', 'UNDO'}
    
    segments: bpy.props.IntProperty(default=3)
    amount: bpy.props.FloatProperty(default=0.1)
    
    def execute(self, context):
        bpy.ops.mesh.bevel(
            offset=self.amount,
            segments=self.segments
        )
        return {'FINISHED'}

# Register
bpy.utils.register_class(MESH_OT_quick_bevel)

# Add to PM:
# Operator: mesh.quick_bevel
```

#### Batch Processing

```python
# Process all selected objects
import bpy

for obj in bpy.context.selected_objects:
    if obj.type == 'MESH':
        # Add modifier
        mod = obj.modifiers.new("Subd", 'SUBSURF')
        mod.levels = 2
        
        # Apply smooth shading
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.shade_smooth()
```

---

## 📂 Preset System Details

### Preset Location

```
Windows:
C:\Users\[Username]\AppData\Roaming\Blender Foundation\Blender\[Version]\config\pie_manager_presets\

macOS:
/Users/[Username]/Library/Application Support/Blender/[Version]/config/pie_manager_presets/

Linux:
/home/[Username]/.config/blender/[Version]/config/pie_manager_presets/
```

### Creating Shareable Presets

```
1. Setup your menus
2. Test thoroughly
3. Click "Export All Menus"
4. Add description in JSON
5. Share on:
   - Gumroad
   - Blender Market
   - GitHub
   - Your website
```

### Best Practices

```
✓ Use clear, descriptive names
✓ Group related commands
✓ Test across different contexts
✓ Document special requirements
✓ Version your presets
✓ Include readme file
```

---

## 🛠️ Developer Guide

### Code Structure

```
pie_manager/
├── __init__.py              # Add-on registration
├── core.py                  # Core pie menu system
├── ui.py                    # Panel & UI definitions
├── operators.py             # Blender operators
├── properties.py            # Property groups
├── storage.py               # JSON save/load
├── action_library.py        # Built-in actions
├── context_filters.py       # Context detection
└── utils.py                 # Helper functions
```

### Key Classes

```python
# Pie Menu Definition
class PM_PieMenu(PropertyGroup):
    name: StringProperty()
    hotkey: StringProperty()
    items: CollectionProperty(type=PM_MenuItem)
    
# Menu Item
class PM_MenuItem(PropertyGroup):
    type: EnumProperty()  # operator/sculpt/python/menu
    operator: StringProperty()
    position: EnumProperty()  # left/right/top/bottom...
    mode_filters: BoolVectorProperty()
    editor_filters: BoolVectorProperty()
```

### Extending PM

#### Add Custom Action Category

```python
# In action_library.py

CUSTOM_ACTIONS = {
    'MY_CATEGORY': {
        'custom.operator_1': {
            'label': 'My Custom Tool',
            'description': 'Does something cool',
            'icon': 'MODIFIER'
        }
    }
}

# Register category
ACTION_LIBRARY.update(CUSTOM_ACTIONS)
```

#### Create Custom Context Filter

```python
# In context_filters.py

def check_custom_context(context):
    """Custom context detection"""
    if context.mode == 'OBJECT':
        if len(context.selected_objects) > 5:
            return True
    return False

# Use in menu item
if check_custom_context(context):
    # Show menu item
    pass
```

---

## ❓ FAQ

<details>
<summary><b>Q: Pie Manager có conflict với Quick Favorites không?</b></summary>

**A:** PM designed để bổ sung cho Quick Favorites, không thay thế. Bạn có thể dùng cả hai:
- Quick Favorites (Q mặc định) - cho temporary favorites
- PM (custom hotkey) - cho structured workflows
</details>

<details>
<summary><b>Q: Có giới hạn số lượng menus không?</b></summary>

**A:** Không có hard limit. Tuy nhiên, recommend:
- 5-10 menus for typical users
- 15-20 menus for power users
- Avoid hotkey conflicts
</details>

<details>
<summary><b>Q: Có thể share preset giữa Blender versions không?</b></summary>

**A:** Có, với caveats:
- Check operator names (might change between versions)
- Test thoroughly in target version
- Document version compatibility
</details>

<details>
<summary><b>Q: Python scripts có persistent data không?</b></summary>

**A:** Python scripts execute trong Blender context. Để persistent data:
- Use scene properties
- Save to external files
- Use Blender's data blocks
</details>

<details>
<summary><b>Q: Performance với nhiều context filters?</b></summary>

**A:** PM optimized for speed:
- Context checks < 1ms
- Minimal overhead
- Lazy evaluation
- Cached results
</details>

---

## 🗺️ Roadmap

### Version 3.1 (Planned)

- [ ] Visual pie layout editor (drag icons in circle)
- [ ] Color coding for menu items
- [ ] Icon picker with preview
- [ ] Quick duplicate menu function

### Version 3.2

- [ ] Action recording system (macro creation)
- [ ] Cloud preset sharing
- [ ] Preset marketplace integration
- [ ] Advanced Python editor with autocomplete

### Version 4.0

- [ ] AI-powered workflow suggestions
- [ ] Usage analytics & optimization
- [ ] Multi-user collaboration
- [ ] Mobile companion app

---

## 🙏 Credits

### Development Team

- **Hau Nguyen** - Lead Developer & Designer
- **Blender Foundation** - Blender API & Documentation

### Beta Testers

- Various artists from the Blender community
- Technical artists in game development
- Pipeline TDs in VFX studios

### Inspiration

- Blender's Quick Favorites system
- Maya's Marking Menus
- Modo's Pie Menus
- Community feedback

---

## 📄 License

**MIT License**

```
Copyright (c) 2024 Hau Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software.
```

---

## 📞 Support & Community

### Get Help

- 🐛 [Report Bug](../../issues/new?template=bug_report.md)
- 💡 [Request Feature](../../issues/new?template=feature_request.md)
- 📖 [Documentation](https://piemanager.docs)
- 💬 [Discord Community](#)

### Share Your Work

- 📸 Show your custom menus
- 📦 Share your presets
- 📝 Write tutorials
- 🎥 Create video guides

---

<div align="center">

**[← Back to Main](./README.md)** | **[Unity Tool →](./Blender_Editor_Tools_for_Unity.md)** | **[VSCode Extension →](./Code_Snippets_Manager.md)**

Made with ❤️ for the Blender community

</div>
