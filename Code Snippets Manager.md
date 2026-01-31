# 📝 VSCode Snippets Manager

[![VSCode](https://img.shields.io/badge/VSCode-1.80+-blue.svg)](https://code.visualstudio.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-2.1.0-green.svg)]()

> **Visual snippet management for modern developers**

VSCode Extension quản lý code snippets với giao diện trực quan, hỗ trợ đa ngôn ngữ và tính năng sync thông minh.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [What's New](#-whats-new-in-v210)
- [Features](#-features)
- [Installation](#-installation)
- [Usage Guide](#-usage-guide)
- [Language Support](#-language-support)
- [Technical Details](#-technical-details)
- [Troubleshooting](#-troubleshooting)

---

## 🎯 Overview

### Why Snippets Manager?

VSCode's built-in snippets system là powerful nhưng:
- ❌ Snippets stored in JSON files (không trực quan)
- ❌ Khó browse và search
- ❌ Không có preview
- ❌ Khó share giữa projects

**Snippets Manager giải quyết:**
- ✅ Visual browser với color-coded languages
- ✅ Rich text editor với syntax highlighting
- ✅ Quick search và filtering
- ✅ Easy import/export
- ✅ Multi-block snippets (code + markdown + images)

---

## 🆕 What's New in v2.1.0

### Major Improvements

#### ✅ 1. File Export/Import Fixed
**Problem:** Imported snippets không mở được
**Solution:** Auto-migration từ old format sang new format

```typescript
// Before: ❌
{ name: "snippet", code: "..." }

// After: ✅
{ 
  name: "snippet", 
  blocks: [{ type: "code", content: "..." }] 
}
```

#### ✅ 2. Edit/Save Bug Fixed
**Problem:** Save tạo snippet mới thay vì update
**Solution:** Proper index tracking

```typescript
// Fix applied in snippetDetailPanel.ts line 134
if (this._index === -1) {
    snippets.push(newSnippet);
    this._index = snippets.length - 1; // ← Index sync
}
```

#### ✅ 3. Unified Language Options
**Added 4 new languages:**
- 📄 JSON
- 📋 XML
- 📑 YAML
- 📝 Markdown

**Total: 23 languages supported**

#### ✅ 4. Color-Coded Sidebar
**Before:** Text icons (🟨 🔷 🐍)
**After:** Official language brand colors

```
JavaScript → #f7df1e (Yellow)
TypeScript → #3178c6 (Blue)
Python     → #3776ab (Blue)
C#         → #239120 (Green)
```

#### ✅ 5. Auto Language Sync
**New code blocks tự động lấy ngôn ngữ từ snippet chính**

```
Main Snippet: JavaScript
[+ Add Code Block] → Auto set to JavaScript
```

---

## ✨ Features

### 🎨 Visual Snippet Browser

**Sidebar Panel** với color-coded entries:

```
┌────────────────────────────────────┐
│ 📚 My Code Snippets        [+ New]│
├────────────────────────────────────┤
│ ▌ React Hooks Collection    [JS] │ ← Yellow border
│ ▌ LINQ Query Examples       [C#] │ ← Green border
│ ▌ Data Science Utils        [PY] │ ← Blue border
│ ▌ CSS Grid Templates        [CSS]│ ← Pink border
└────────────────────────────────────┘
```

**Features:**
- Color-coded language indicators
- Quick delete button
- Click to open detail view
- Drag to reorder (planned)

---

### 📝 Rich Snippet Editor

**Multi-block editor** hỗ trợ:

#### Block Types

```
1. 📄 Markdown
   - Documentation
   - Notes
   - Instructions
   
2. 💻 Code
   - Syntax highlighted
   - Language-specific
   - Line numbers
   
3. 🖼️ Image (planned)
   - Screenshots
   - Diagrams
   - References
```

#### Editor Interface

```
┌─────────────────────────────────────────┐
│ Snippet Name: [React useState Hook    ]│
│ Language: [JavaScript ▼]                │
├─────────────────────────────────────────┤
│ 📄 Markdown Block                       │
│ ┌─────────────────────────────────────┐ │
│ │ # Description                       │ │
│ │ Hook for state management...        │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ 💻 Code Block (JavaScript)              │
│ ┌─────────────────────────────────────┐ │
│ │ const [count, setCount] =           │ │
│ │   useState(0);                      │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [+ Add Block ▼] [💾 Save] [🗑️ Delete]  │
└─────────────────────────────────────────┘
```

---

### 🔍 Smart Search & Filter

**Search capabilities:**

```
Search: "react hook"
Results:
├─ React useState Hook
├─ React useEffect Hook
├─ Custom Hooks Template
└─ React Hook Form Examples

Filter by language: JavaScript
Results:
├─ All JavaScript snippets
└─ Excluding TypeScript
```

---

### 📦 Import/Export System

**Share snippets với team hoặc backup:**

#### Export

```
1. Click "Export Snippets"
2. Select snippets to export (or all)
3. Save as .json file
4. Share via:
   - Git repository
   - Shared drive
   - Cloud storage
```

#### Import

```
1. Click "Import Snippets"
2. Select .json file
3. Auto-migration nếu old format
4. Snippets ready to use!
```

#### JSON Format

```json
{
  "version": "2.1.0",
  "snippets": [
    {
      "name": "React useState Hook",
      "language": "javascript",
      "tags": ["react", "hooks", "state"],
      "blocks": [
        {
          "type": "markdown",
          "content": "# useState Hook\n\nState management hook..."
        },
        {
          "type": "code",
          "language": "javascript",
          "content": "const [state, setState] = useState(initialValue);"
        }
      ],
      "createdAt": "2024-01-31T10:00:00.000Z",
      "updatedAt": "2024-01-31T10:00:00.000Z"
    }
  ]
}
```

---

### 🎨 Syntax Highlighting

**Powered by VSCode's Monaco Editor:**

```javascript
// JavaScript highlighting
const myFunction = async () => {
  const result = await fetch('/api/data');
  return result.json();
};
```

```python
# Python highlighting
def my_function():
    result = requests.get('/api/data')
    return result.json()
```

```csharp
// C# highlighting
public async Task<string> MyFunction()
{
    var result = await client.GetAsync("/api/data");
    return await result.Content.ReadAsStringAsync();
}
```

---

## 📦 Installation

### 📥 Download Release

**Current Version: v1.0**

```
📦 Release: Code Snippet Manager v1.0
🔗 Link: [Download from GitHub Releases](../../releases/tag/v1.0)
📄 File: codesnippetmanager-0.0.1.vsix
💾 Size: ~7 MB
🎯 VSCode: 1.80+
```

**Quick Download:**
1. Visit [Releases Page](../../releases/tag/v1.0)
2. Download `codesnippetmanager-0.0.1.vsix`
3. Follow installation method below

---

### 🔧 Installation Methods

#### Method 1: Direct Install from .vsix (Recommended)

**Step-by-Step:**

**1. Download Extension**
```
✓ Go to: https://github.com/[your-repo]/releases/tag/v1.0
✓ Download: codesnippetmanager-0.0.1.vsix
✓ Save to a memorable location (e.g., Downloads)
```

**2. Install via VSCode UI**
```
VSCode
└─ Extensions view (Ctrl+Shift+X)
   └─ Click ⋯ (More Actions) at top
      └─ "Install from VSIX..."
         └─ Select codesnippetmanager-0.0.1.vsix
         └─ Click "Install"
```

**3. Reload VSCode**
```
After installation:
└─ Click "Reload" button in notification
   Or manually: Ctrl+Shift+P → "Reload Window"
```

**4. Verify Installation**
```
Check:
├─ Extensions view → "Code Snippets Manager" shows as installed
├─ Activity Bar → New Snippets icon appears (📚)
└─ View → Snippets sidebar panel visible
```

---

#### Method 2: Command Line Install

**For Advanced Users:**

```bash
# Navigate to Downloads folder
cd ~/Downloads

# Install extension
code --install-extension codesnippetmanager-0.0.1.vsix

# Verify installation
code --list-extensions | grep snippets
```

**Expected Output:**
```
✓ Extension installed successfully
✓ codesnippetmanager.code-snippets-manager@0.0.1
```

---

#### Method 3: VSCode Marketplace (Coming Soon)

```
🚧 Currently in review
📅 Expected: Q2 2024

When available:
1. Open VSCode
2. Press Ctrl+Shift+X (Extensions)
3. Search "Code Snippets Manager"
4. Click "Install"
```

---

### ✅ Post-Installation Setup

#### 1. Open Snippets Panel

**Via Activity Bar:**
```
Look for 📚 icon in left sidebar
Click it → Snippets panel opens
```

**Via Command Palette:**
```
1. Press Ctrl+Shift+P
2. Type "Snippets: Show Sidebar"
3. Press Enter
```

**Via Menu:**
```
View → Snippets
```

---

#### 2. Configure Settings (Optional)

**Open Settings:**
```
File → Preferences → Settings
Search: "Snippets Manager"
```

**Available Settings:**
```
┌─────────────────────────────────────┐
│ Code Snippets Manager Settings      │
├─────────────────────────────────────┤
│ Default Language: [JavaScript ▼]    │
│ Auto-sync: [✓] Enabled              │
│ Editor Theme: [● Dark  ○ Light]     │
│ Show Line Numbers: [✓] Enabled      │
│ Auto-import on startup: [ ] Disabled│
└─────────────────────────────────────┘
```

---

#### 3. Import Sample Snippets (Optional)

**Get started with examples:**
```
1. In Snippets panel, click gear icon ⚙️
2. Select "Import Sample Snippets"
3. Choose language:
   ├─ JavaScript samples
   ├─ Python samples
   └─ C# samples
4. Click "Import"
5. Samples appear in your library
```

---

### 🔍 Verify Installation

Run these checks to ensure everything works:

**✓ Check 1: Extension Active**
```
Extensions view (Ctrl+Shift+X)
└─ Search "Code Snippets Manager"
   └─ Should show "Installed" status
   └─ Green checkmark visible
```

**✓ Check 2: Sidebar Accessible**
```
Activity Bar
└─ Click 📚 Snippets icon
   └─ Panel opens with "My Code Snippets" header
   └─ [+ New Snippet] button visible
```

**✓ Check 3: Create Test Snippet**
```
1. Click [+ New Snippet]
2. Name: "Test Snippet"
3. Language: JavaScript
4. Add code block with: console.log('Hello');
5. Click [💾 Save]
6. Should appear in sidebar with JS color (yellow border)
```

**✓ Check 4: Export/Import Works**
```
1. Click export button (⬇️)
2. Save test-snippets.json
3. Delete test snippet
4. Click import button (⬆️)
5. Select test-snippets.json
6. Snippet should restore
```

---

### 🆚 Installation Comparison

| Method | Difficulty | Speed | Best For |
|--------|-----------|-------|----------|
| **.vsix Install** | ⭐ Easy | Fast | Most users |
| **Command Line** | ⭐⭐ Medium | Fastest | Developers |
| **Marketplace** | ⭐ Easiest | Fast | When available |

**Recommendation:**
```
🎯 Most Users → Use .vsix install (Method 1)
🎯 Developers → Use command line (Method 2)
🎯 Future → Use Marketplace when available
```

---

### 🛠️ Manual Build (For Developers)

**Build from source:**

```bash
# 1. Clone repository
git clone [repo-url]
cd vscode-snippets-manager

# 2. Install dependencies
npm install

# 3. Compile TypeScript
npm run compile

# 4. Package extension
npm run package
# Creates: codesnippetmanager-0.0.1.vsix

# 5. Install locally
code --install-extension codesnippetmanager-0.0.1.vsix
```

**Development Mode:**
```bash
# Watch mode for development
npm run watch

# Run in Extension Development Host
# In VSCode: Press F5
```

---

## 🚀 Usage Guide

### Creating Your First Snippet

#### Step 1: Open Sidebar

```
1. Click Snippets icon in Activity Bar
   Or: Ctrl+Shift+S (custom keybinding)
2. Click [+ New Snippet]
```

#### Step 2: Basic Info

```
Name: "React Component Template"
Language: JavaScript
Tags: react, component, template
```

#### Step 3: Add Documentation

```
[+ Add Block] → Markdown

# React Component Template

Standard functional component with:
- Props interface
- State management
- Effect hooks
```

#### Step 4: Add Code

```
[+ Add Block] → Code (auto-set to JavaScript)

import React, { useState, useEffect } from 'react';

interface Props {
  title: string;
}

export const MyComponent: React.FC<Props> = ({ title }) => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // Fetch data
  }, []);
  
  return <div>{title}</div>;
};
```

#### Step 5: Save

```
Click [💾 Save]
Snippet appears in sidebar với JavaScript color
```

---

### Organizing Snippets

#### By Language

```
📂 JavaScript (12)
├─ React Hooks
├─ Async Patterns
└─ Array Methods

📂 Python (8)
├─ Data Analysis
├─ API Requests
└─ File I/O

📂 C# (5)
├─ LINQ Queries
├─ Async/Await
└─ Entity Framework
```

#### By Tags

```
#react → All React snippets
#api → All API-related snippets
#utils → Utility functions
```

#### By Project

```
Project A snippets → Export to project-a-snippets.json
Project B snippets → Export to project-b-snippets.json
```

---

### Using Snippets in Code

#### Method 1: Copy Code Block

```
1. Open snippet
2. Click code block
3. Click [📋 Copy] button
4. Paste in editor (Ctrl+V)
```

#### Method 2: Insert via Command (planned)

```
1. Ctrl+Shift+P
2. "Snippets: Insert from Library"
3. Select snippet
4. Code inserted at cursor
```

---

## 🌐 Language Support

### Full List (23 Languages)

| Language | Color | File Extension | Notes |
|----------|-------|----------------|-------|
| **C#** | ![#239120](https://via.placeholder.com/15/239120/000000?text=+) `#239120` | `.cs` | LINQ, async/await |
| **JavaScript** | ![#f7df1e](https://via.placeholder.com/15/f7df1e/000000?text=+) `#f7df1e` | `.js` | ES6+, Node.js |
| **TypeScript** | ![#3178c6](https://via.placeholder.com/15/3178c6/000000?text=+) `#3178c6` | `.ts` | Types, interfaces |
| **Python** | ![#3776ab](https://via.placeholder.com/15/3776ab/000000?text=+) `#3776ab` | `.py` | 3.x syntax |
| **Java** | ![#007396](https://via.placeholder.com/15/007396/000000?text=+) `#007396` | `.java` | JDK 8+ |
| **C++** | ![#00599c](https://via.placeholder.com/15/00599c/000000?text=+) `#00599c` | `.cpp` | Modern C++ |
| **C** | ![#555555](https://via.placeholder.com/15/555555/000000?text=+) `#555555` | `.c` | ANSI C |
| **HTML** | ![#e34c26](https://via.placeholder.com/15/e34c26/000000?text=+) `#e34c26` | `.html` | HTML5 |
| **CSS** | ![#563d7c](https://via.placeholder.com/15/563d7c/000000?text=+) `#563d7c` | `.css` | CSS3, Grid, Flexbox |
| **Go** | ![#00add8](https://via.placeholder.com/15/00add8/000000?text=+) `#00add8` | `.go` | Concurrency |
| **Rust** | ![#dea584](https://via.placeholder.com/15/dea584/000000?text=+) `#dea584` | `.rs` | Safe systems |
| **PHP** | ![#777bb4](https://via.placeholder.com/15/777bb4/000000?text=+) `#777bb4` | `.php` | 7.x, 8.x |
| **Ruby** | ![#cc342d](https://via.placeholder.com/15/cc342d/000000?text=+) `#cc342d` | `.rb` | Rails patterns |
| **Swift** | ![#ffac45](https://via.placeholder.com/15/ffac45/000000?text=+) `#ffac45` | `.swift` | iOS/macOS |
| **Kotlin** | ![#7f52ff](https://via.placeholder.com/15/7f52ff/000000?text=+) `#7f52ff` | `.kt` | Android |
| **SQL** | ![#e38c00](https://via.placeholder.com/15/e38c00/000000?text=+) `#e38c00` | `.sql` | Queries, DDL |
| **Bash** | ![#4eaa25](https://via.placeholder.com/15/4eaa25/000000?text=+) `#4eaa25` | `.sh` | Shell scripts |
| **Shell** | ![#89e051](https://via.placeholder.com/15/89e051/000000?text=+) `#89e051` | `.sh` | Unix shells |
| **JSON** | ![#292929](https://via.placeholder.com/15/292929/000000?text=+) `#292929` | `.json` | Data format |
| **XML** | ![#0060ac](https://via.placeholder.com/15/0060ac/000000?text=+) `#0060ac` | `.xml` | Markup |
| **YAML** | ![#cb171e](https://via.placeholder.com/15/cb171e/000000?text=+) `#cb171e` | `.yaml`, `.yml` | Config files |
| **Markdown** | ![#083fa1](https://via.placeholder.com/15/083fa1/000000?text=+) `#083fa1` | `.md` | Documentation |
| **Other** | ![#858585](https://via.placeholder.com/15/858585/000000?text=+) `#858585` | `.*` | Generic code |

### Adding Custom Languages

```typescript
// In utils.ts
export const SUPPORTED_LANGUAGES = [
  // ... existing languages
  { value: 'dart', label: 'Dart' },
  { value: 'elixir', label: 'Elixir' },
  { value: 'haskell', label: 'Haskell' }
];

// In getLanguageColor()
const colors: { [key: string]: string } = {
  // ... existing colors
  'dart': '#0175c2',
  'elixir': '#4e2a8e',
  'haskell': '#5d4f85'
};
```

---

## 🛠️ Technical Details

### Architecture

```
vscode-snippets-manager/
├── src/
│   ├── extension.ts              # Entry point
│   ├── commands.ts                # Command definitions
│   ├── types.ts                   # TypeScript interfaces
│   ├── utils.ts                   # Helper functions
│   │   ├── SUPPORTED_LANGUAGES    # Language array
│   │   └── getLanguageColor()     # Color mapping
│   ├── snippetViewProvider.ts     # Sidebar provider
│   │   └── Migration logic        # Auto-upgrade old format
│   ├── sidebarHtml.ts             # Sidebar UI
│   │   └── Color-coded list       # Visual improvements
│   ├── snippetDetailPanel.ts      # Detail view
│   │   └── Index tracking fix     # Edit/save bug fix
│   └── detailPanelHtml.ts         # Detail UI
│       └── Language sync          # Auto language selection
└── package.json                   # Extension manifest
```

### Data Storage

**Location:**
```
~/.vscode/snippets-manager/snippets.json
```

**Format:**
```json
{
  "version": "2.1.0",
  "snippets": [...],
  "settings": {
    "defaultLanguage": "javascript",
    "autoSync": true,
    "theme": "dark"
  }
}
```

### Migration System

**Auto-detect old format:**
```typescript
function migrateSnippet(old: any): Snippet {
  if (old.code) {
    // Old format detected
    return {
      name: old.name,
      language: old.language,
      blocks: [{
        type: 'code',
        language: old.language,
        content: old.code
      }]
    };
  }
  return old; // Already new format
}
```

---

## 🐛 Troubleshooting

### Issue 1: Snippets Not Loading

**Symptoms:**
- Sidebar shows empty
- "No snippets found" message

**Solutions:**
```
1. Check file permissions
   chmod 644 ~/.vscode/snippets-manager/snippets.json

2. Validate JSON format
   - Use JSON validator
   - Check for syntax errors

3. Reset to default
   - Backup snippets.json
   - Delete file
   - Restart VSCode
```

### Issue 2: Import Failed

**Symptoms:**
- Import button does nothing
- Error message shown

**Solutions:**
```
1. Check JSON file format
   - Must be valid JSON
   - Must have "snippets" array

2. Check file encoding
   - Must be UTF-8
   - No BOM

3. Try manual import
   - Copy content
   - Paste into snippets.json
```

### Issue 3: Syntax Highlighting Not Working

**Symptoms:**
- Code blocks show plain text
- No colors

**Solutions:**
```
1. Check language selection
   - Must select correct language
   - Case-sensitive

2. Reload Monaco Editor
   - Close detail panel
   - Reopen snippet

3. Reinstall extension
   - Uninstall
   - Reload VSCode
   - Reinstall
```

### Issue 4: Edit Creates Duplicate

**Symptoms:**
- Saving edited snippet creates new one
- Original remains unchanged

**Status:** ✅ **FIXED in v2.1.0**

**Old workaround (not needed):**
```
Delete original before editing
```

---

## 📊 Changelog

### v2.1.0 (2024-01-31)

**Fixed:**
- ✅ Import/export migration issues
- ✅ Edit save creating duplicates
- ✅ Language dropdown inconsistencies
- ✅ Code block language not syncing

**Added:**
- ✨ Color-coded sidebar
- ✨ 4 new languages (JSON, XML, YAML, Markdown)
- ✨ Auto language sync for code blocks
- ✨ Official language brand colors

**Improved:**
- 🎨 Sidebar visual design
- 📝 Language selection UX
- 🔄 Data migration system
- 📚 Documentation

### v2.0.0 (2024-01-15)

**Added:**
- Multi-block snippets
- Import/export system
- Tag support
- Search functionality

### v1.0.0 (2023-12-01)

**Initial Release:**
- Basic snippet management
- Syntax highlighting
- VSCode integration

---

## 🗺️ Roadmap

### v2.2 (Next)

- [ ] Drag & drop reordering
- [ ] Snippet templates
- [ ] Quick insert command
- [ ] Keyboard shortcuts customization

### v2.3

- [ ] Image block support
- [ ] Snippet sharing platform
- [ ] AI-powered snippet suggestions
- [ ] Version control integration

### v3.0

- [ ] Cloud sync
- [ ] Team collaboration
- [ ] Snippet marketplace
- [ ] Advanced search with regex

---

## 🤝 Contributing

### How to Contribute

```bash
# 1. Fork repository
# 2. Create feature branch
git checkout -b feature/amazing-feature

# 3. Make changes
# 4. Run tests
npm run test

# 5. Commit
git commit -m "Add amazing feature"

# 6. Push
git push origin feature/amazing-feature

# 7. Open Pull Request
```

### Development Guidelines

```
✓ Follow TypeScript best practices
✓ Add JSDoc comments
✓ Write unit tests
✓ Update documentation
✓ Follow existing code style
```

---

## 👤 Author

**Hau Nguyen**
- Role: Developer & Designer
- Focus: Developer tools & productivity

---

## 📄 License

**MIT License**

```
Copyright (c) 2024 Hau Nguyen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software")...
```

See [LICENSE](LICENSE) for full text.

---

## 🙏 Credits

### Libraries Used

- **Monaco Editor** - VSCode's text editor
- **VSCode Extension API** - Extension framework
- **TypeScript** - Type safety

### Inspiration

- VSCode's built-in snippets
- Gist integration concepts
- SnippetsLab for macOS

---

## 📞 Support

### Get Help

- 🐛 [Report Bug](../../issues/new?template=bug_report.md)
- 💡 [Request Feature](../../issues/new?template=feature_request.md)
- 📧 Email: support@example.com
- 💬 [Discord](#)

### Resources

- 📖 [Full Documentation](https://docs.snippetsmanager.dev)
- 🎥 [Video Tutorials](https://youtube.com/...)
- 📝 [Blog](https://blog.snippetsmanager.dev)

---

<div align="center">

### 📚 Navigation

**[🏠 Main README](./README.md)** | **[📥 Download Guide](./DOWNLOAD_GUIDE.md)** | **[🎮 Unity Tools](./Blender_Editor_Tools_for_Unity.md)** | **[🥧 Pie Manager](./Pie_Manager_PM__for_Blender.md)**

---

Made with ❤️ for developers worldwide

⭐ Star this repo if Code Snippets Manager saves you time!

</div>
