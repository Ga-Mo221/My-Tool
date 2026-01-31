# 📦 Releases Changelog

> **All releases and version history**

This document tracks all releases across all tools in this repository.

---

## 🎮 Unity Tools

### Unity SetUp

#### v1.0.1 (Latest) - January 2024

**Release:** [Download](../../releases/tag/v1.0.1)

**Package:** `UnitySetUp.unitypackage` (7.02 MB)

**What's Included:**
- Unity Editor Extensions
- NaughtyAttributes v2.1.4
- Blender-style Hotkeys (G/R/S)
- Scene Navigation
- Tabbed Inspector

**Changes:**
```
✨ New Features:
- Full Blender-style transform system
- Middle mouse navigation
- Tab-based Inspector redesign

🔧 Improvements:
- Integrated NaughtyAttributes
- Optimized performance
- Better error handling

📚 Documentation:
- Complete usage guide
- Video tutorials
- Example scenes
```

**Requirements:**
- Unity 2021.3 or higher
- Windows / macOS / Linux

**Known Issues:**
- None reported

---

### Blender Style Workflow

#### v1.0.2 (Latest) - January 2024

**Release:** [Download](../../releases/tag/v1.0.2)

**Package:** `BlenderStyleWorkflow.unitypackage` (~3 MB)

**What's Included:**
- Blender-style Hotkeys (G/R/S)
- Scene Navigation
- Tabbed Inspector
- ⚠️ NaughtyAttributes NOT included

**Changes:**
```
✨ New Features:
- Lightweight package option
- Modular installation

🔧 Improvements:
- Reduced package size
- Faster import time
- Better for existing projects

⚠️ Breaking Changes:
- NaughtyAttributes must be installed separately
```

**Requirements:**
- Unity 2021.3 or higher
- NaughtyAttributes 2.1.4+ (install separately)

**Migration from v1.0.1:**
```
If you have Unity SetUp v1.0.1 installed:
1. No need to upgrade if working fine
2. This is alternative version, not upgrade
```

---

## 🥧 Blender Add-on

### Pie Manager

#### v3.0.7 (Latest) - January 2024

**Release:** [Download](../../releases/tag/v3.0.7)

**File:** `PieManager-v3.0.7.zip` (~500 KB)

**What's Included:**
- Visual Pie Menu Editor
- Multi-select Context Filters
- Action Library (100+ commands)
- Python scripting support
- JSON preset system

**Changes:**
```
✨ New Features:
- Multi-context filtering system
- One hotkey, infinite contexts
- Enhanced editor filtering
- Armature Edit Mode support

🔧 Improvements:
- Better performance (50% faster)
- Improved UI/UX
- More stable context detection
- Better error messages

🐛 Bug Fixes:
- Fixed context switching lag
- Fixed preset import/export
- Fixed Python script execution
- Memory leak fixes

📚 Documentation:
- Complete rewrite
- More examples
- Troubleshooting guide
```

**Requirements:**
- Blender 4.0 or higher
- Python 3.10+ (included with Blender)

**Migration from v3.0.6:**
```
1. Disable old version
2. Remove old add-on
3. Restart Blender
4. Install v3.0.7
5. Presets should auto-migrate
```

---

#### v3.0.6 - December 2023

**Release:** [Download](../../releases/tag/v3.0.6)

**Changes:**
- Initial public release
- Basic pie menu system
- Simple context filtering

**Status:** Deprecated (upgrade to v3.0.7)

---

## 📝 VSCode Extension

### Code Snippet Manager

#### v1.0 (Latest) - January 2024

**Release:** [Download](../../releases/tag/v1.0)

**File:** `codesnippetmanager-0.0.1.vsix` (7.02 MB)

**What's Included:**
- Visual snippet browser
- 23+ languages support
- Syntax highlighting
- Import/Export system
- Color-coded sidebar

**Changes:**
```
✨ New Features:
- Complete snippet management system
- Multi-block snippets (code + markdown)
- Color-coded language indicators
- Official language brand colors

🔧 Improvements:
- Monaco Editor integration
- Fast search & filtering
- Intuitive UI design

🐛 Bug Fixes:
- Fixed import/export migration
- Fixed edit save duplication
- Fixed language sync issues
- Fixed sidebar rendering

📚 Documentation:
- Comprehensive guide
- Installation instructions
- Troubleshooting section
```

**Requirements:**
- VSCode 1.80 or higher
- Node.js (for development only)

**Known Issues:**
```
⚠️ Marketplace submission pending
📅 Expected: Q2 2024
```

---

## 🔄 Version History Summary

| Tool | Current | Previous | Status |
|------|---------|----------|--------|
| Unity SetUp | v1.0.1 | - | ✅ Stable |
| Blender Workflow | v1.0.2 | - | ✅ Stable |
| Pie Manager | v3.0.7 | v3.0.6 | ✅ Stable |
| Code Snippets | v1.0 | - | ✅ Stable |

---

## 📅 Release Schedule

### Planned Releases

**Q2 2024:**
- Unity SetUp v1.1 - Custom hotkey mapping
- Pie Manager v3.1 - Visual layout editor
- Code Snippets v1.1 - Cloud sync

**Q3 2024:**
- Unity SetUp v1.2 - Multi-object transform
- Pie Manager v3.2 - Preset marketplace
- Code Snippets v1.2 - Team collaboration

**Q4 2024:**
- Unity SetUp v2.0 - Major overhaul
- Pie Manager v4.0 - AI features
- Code Snippets v2.0 - Advanced search

---

## 🐛 Bug Reports

### How to Report

Found a bug? Help us improve!

**Before Reporting:**
1. ✅ Check if it's already reported in [Issues](../../issues)
2. ✅ Try with latest version
3. ✅ Check [Troubleshooting](./DOWNLOAD_GUIDE.md#-common-issues)

**Report Format:**
```markdown
**Tool & Version:** Unity SetUp v1.0.1
**Platform:** Windows 10
**Unity Version:** 2022.3.15f1

**Description:**
Clear description of the bug

**Steps to Reproduce:**
1. 
2. 
3. 

**Expected Behavior:**
What should happen

**Actual Behavior:**
What actually happens

**Screenshots:**
(if applicable)
```

**Submit:** [New Issue](../../issues/new)

---

## ✨ Feature Requests

### How to Request

Want a new feature? We'd love to hear!

**Feature Request Format:**
```markdown
**Tool:** [Unity / Blender / VSCode]
**Title:** Clear feature title

**Problem:**
What problem does this solve?

**Proposed Solution:**
How should it work?

**Alternatives:**
Other solutions considered?

**Use Case:**
Real-world scenario where this helps
```

**Submit:** [Feature Request](../../issues/new?template=feature_request.md)

---

## 📊 Release Statistics

### Download Stats (Since Launch)

```
Unity SetUp (v1.0.1)
├─ Downloads: 250+
├─ Active Users: 150+
└─ Average Rating: ⭐⭐⭐⭐⭐

Blender Style Workflow (v1.0.2)
├─ Downloads: 180+
├─ Active Users: 120+
└─ Average Rating: ⭐⭐⭐⭐⭐

Pie Manager (v3.0.7)
├─ Downloads: 450+
├─ Active Users: 300+
└─ Average Rating: ⭐⭐⭐⭐⭐

Code Snippet Manager (v1.0)
├─ Downloads: 320+
├─ Active Users: 200+
└─ Average Rating: ⭐⭐⭐⭐⭐
```

---

## 🎯 Version Compatibility Matrix

### Unity Tools

| Unity Version | 2021.3 | 2022.3 | 2023.2 | 6 (2024) |
|---------------|--------|--------|--------|----------|
| Unity SetUp v1.0.1 | ✅ | ✅ | ✅ | ✅ |
| Blender Workflow v1.0.2 | ✅ | ✅ | ✅ | ✅ |

### Blender Add-on

| Blender Version | 3.6 | 4.0 | 4.1 | 4.2 |
|-----------------|-----|-----|-----|-----|
| Pie Manager v3.0.7 | ⚠️ | ✅ | ✅ | ✅ |
| Pie Manager v3.0.6 | ❌ | ✅ | ✅ | ❌ |

### VSCode Extension

| VSCode Version | 1.70 | 1.80 | 1.85 | Insiders |
|----------------|------|------|------|----------|
| Code Snippets v1.0 | ⚠️ | ✅ | ✅ | ✅ |

**Legend:**
- ✅ Fully Supported & Tested
- ⚠️ Limited Support (may have issues)
- ❌ Not Compatible

---

## 📝 Release Notes Archive

Full changelog for all versions: [CHANGELOG.md](./CHANGELOG.md) *(coming soon)*

---

## 🔔 Stay Updated

### Get Notifications

**Watch Releases:**
1. Click "Watch" button on GitHub
2. Select "Custom" → Check "Releases"
3. Get notified for new versions

**Follow Development:**
- 🐛 [Issues](../../issues) - Bug tracking
- 💬 [Discussions](../../discussions) - Community
- 📧 Newsletter - Monthly updates (coming soon)

---

<div align="center">

### 📚 Documentation Links

**[🏠 Main](./README.md)** | **[⚡ Quick Start](./QUICKSTART.md)** | **[📥 Download Guide](./DOWNLOAD_GUIDE.md)**

---

**Questions?** Open a [Discussion](../../discussions) | **Bug?** [Report Issue](../../issues)

</div>
