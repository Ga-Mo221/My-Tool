# 📥 Download & Installation Guide

> **Hướng dẫn chi tiết tải về và cài đặt tất cả công cụ từ GitHub Releases**

---

## 🗺️ Release Overview

Repository này cung cấp **4 releases** độc lập cho các công cụ khác nhau:

```
📦 GitHub Releases
│
├─ 🎮 Unity SetUp (v1.0.1)
│  └─ File: UnitySetUp.unitypackage
│
├─ 🎨 Blender Style Workflow (v1.0.2)
│  └─ File: BlenderStyleWorkflow.unitypackage
│
├─ 🥧 Pie Manager (v3.0.7)
│  └─ File: PieManager-v3.0.7.zip
│
└─ 📝 Code Snippet Manager (v1.0)
   └─ File: codesnippetmanager-0.0.1.vsix
```

---

## 🚀 Quick Access Links

| Tool | Version | Download Link | Documentation |
|------|---------|---------------|---------------|
| **Unity SetUp** | v1.0.1 | [⬇️ Download](../../releases/tag/v1.0.1) | [📖 Docs](./Blender_Editor_Tools_for_Unity.md) |
| **Blender Style Workflow** | v1.0.2 | [⬇️ Download](../../releases/tag/v1.0.2) | [📖 Docs](./Blender_Editor_Tools_for_Unity.md) |
| **Pie Manager** | v3.0.7 | [⬇️ Download](../../releases/tag/v3.0.7) | [📖 Docs](./Pie_Manager_PM__for_Blender.md) |
| **Code Snippet Manager** | v1.0 | [⬇️ Download](../../releases/tag/v1.0) | [📖 Docs](./Code_Snippets_Manager.md) |

---

## 📚 Detailed Guides

### 🎮 Unity Tools

#### Unity SetUp (v1.0.1) - Full Package

**What's Included:**
- ✅ Unity Editor Extensions
- ✅ NaughtyAttributes (v2.1.4)
- ✅ Blender-style Hotkeys (G/R/S)
- ✅ Scene Navigation
- ✅ Tabbed Inspector

**Download & Install:**

```
STEP 1: DOWNLOAD
├─ Visit: https://github.com/[your-repo]/releases/tag/v1.0.1
├─ Find: Assets section
└─ Click: UnitySetUp.unitypackage (7.02 MB)

STEP 2: IMPORT TO UNITY
├─ Open Unity Project
├─ Assets → Import Package → Custom Package...
├─ Select: UnitySetUp.unitypackage
└─ Click: Import All

STEP 3: VERIFY
├─ Edit → Preferences → Blender Editor Tools
├─ Try: Press G/R/S in Scene View
└─ Check: Inspector shows Tab icons
```

**Who Should Use:**
- ✓ Starting fresh Unity project
- ✓ Want all dependencies included
- ✓ Don't have NaughtyAttributes

---

#### Blender Style Workflow (v1.0.2) - Lightweight

**What's Included:**
- ✅ Blender-style Hotkeys (G/R/S)
- ✅ Scene Navigation
- ✅ Tabbed Inspector
- ⚠️ NaughtyAttributes NOT included

**Download & Install:**

```
STEP 1: INSTALL NAUGHTYATTRIBUTES (Required)
Option A - Package Manager:
├─ Window → Package Manager
├─ [+] → Add package from git URL
└─ Paste: https://github.com/dbrizov/NaughtyAttributes.git#upm

Option B - Manual:
├─ Download from: https://github.com/dbrizov/NaughtyAttributes
└─ Import .unitypackage

STEP 2: DOWNLOAD WORKFLOW
├─ Visit: https://github.com/[your-repo]/releases/tag/v1.0.2
└─ Download: BlenderStyleWorkflow.unitypackage

STEP 3: IMPORT TO UNITY
├─ Assets → Import Package → Custom Package...
├─ Select: BlenderStyleWorkflow.unitypackage
└─ Click: Import All

STEP 4: VERIFY
└─ Same as Unity SetUp
```

**Who Should Use:**
- ✓ Already have NaughtyAttributes
- ✓ Want smaller download
- ✓ Optimize project size

---

### 🥧 Blender Add-on

#### Pie Manager (v3.0.7)

**What's Included:**
- ✅ Visual Pie Menu Editor
- ✅ Context-aware filtering
- ✅ Action Library (100+ commands)
- ✅ Python scripting support
- ✅ Preset system

**Download & Install:**

```
STEP 1: DOWNLOAD
├─ Visit: https://github.com/[your-repo]/releases/tag/v3.0.7
├─ Find: Assets section
└─ Download: PieManager-v3.0.7.zip
   ⚠️ DO NOT UNZIP!

STEP 2: INSTALL IN BLENDER
├─ Blender → Edit → Preferences
├─ Add-ons tab → Install...
├─ Select: PieManager-v3.0.7.zip (keep as .zip!)
└─ Click: Install Add-on

STEP 3: ENABLE
├─ Search: "PM" or "Pie Manager"
├─ Find: "3D View: PM (Pie Manager)"
└─ Check: ☑ to enable

STEP 4: VERIFY
├─ 3D View → Press N (sidebar)
├─ Look for: "PM" tab
└─ Test: Create a sample pie menu
```

**Requirements:**
- Blender 4.0+
- Python 3.10+ (included with Blender)

---

### 📝 VSCode Extension

#### Code Snippet Manager (v1.0)

**What's Included:**
- ✅ Visual snippet browser
- ✅ 23+ languages support
- ✅ Syntax highlighting
- ✅ Import/Export system
- ✅ Color-coded sidebar

**Download & Install:**

```
STEP 1: DOWNLOAD
├─ Visit: https://github.com/[your-repo]/releases/tag/v1.0
├─ Find: Assets section
└─ Download: codesnippetmanager-0.0.1.vsix (7.02 MB)

STEP 2: INSTALL IN VSCODE
Method A - UI:
├─ VSCode → Extensions (Ctrl+Shift+X)
├─ Click: ⋯ (More Actions)
├─ Select: "Install from VSIX..."
└─ Choose: codesnippetmanager-0.0.1.vsix

Method B - Command Line:
└─ code --install-extension codesnippetmanager-0.0.1.vsix

STEP 3: RELOAD VSCODE
├─ Click: "Reload" in notification
└─ Or: Ctrl+Shift+P → "Reload Window"

STEP 4: VERIFY
├─ Activity Bar → Look for 📚 icon
├─ Click it → Snippets panel opens
└─ Test: Create a test snippet
```

**Requirements:**
- VSCode 1.80+
- Node.js (for development only)

---

## 🔄 Version Compatibility

### Unity Tools

| Unity Version | Unity SetUp | Blender Workflow | Status |
|---------------|-------------|------------------|--------|
| 2021.3 LTS | ✅ | ✅ | Tested |
| 2022.3 LTS | ✅ | ✅ | Tested |
| 2023.2+ | ✅ | ✅ | Compatible |
| 6 (2024)+ | ✅ | ✅ | Compatible |

### Blender Add-on

| Blender Version | Pie Manager | Status |
|-----------------|-------------|--------|
| 3.x | ⚠️ | Limited support |
| 4.0 | ✅ | Fully tested |
| 4.1+ | ✅ | Compatible |

### VSCode Extension

| VSCode Version | Code Snippet Manager | Status |
|----------------|---------------------|--------|
| 1.70-1.79 | ⚠️ | May work |
| 1.80+ | ✅ | Fully supported |
| Insiders | ✅ | Compatible |

---

## 💡 Installation Tips

### Unity Tools

**Tip 1: Backup Before Import**
```
Before importing:
1. File → Save Project
2. Edit → Project Settings → Save
3. Optional: Create git commit
```

**Tip 2: Clean Import**
```
If updating from old version:
1. Delete old "BlenderEditorTools" folder
2. Restart Unity
3. Import new package
```

**Tip 3: Conflict Resolution**
```
If import conflicts appear:
1. Select "Import All"
2. If errors: Reimport individual files
3. Restart Unity if needed
```

---

### Blender Add-on

**Tip 1: Keep .zip File**
```
⚠️ IMPORTANT: Do NOT unzip PieManager-v3.0.7.zip
✓ Blender needs the .zip file directly
✓ Unzipping will cause installation to fail
```

**Tip 2: Enable on Startup**
```
After enabling:
1. Click disclosure triangle next to add-on name
2. Check: "Auto-Enable on Startup"
3. Click: "Save Preferences"
```

**Tip 3: Update Existing Installation**
```
If Pie Manager already installed:
1. Disable old version first
2. Remove old add-on
3. Restart Blender
4. Install new version
```

---

### VSCode Extension

**Tip 1: Extension Location**
```
Windows: %USERPROFILE%\.vscode\extensions
macOS: ~/.vscode/extensions
Linux: ~/.vscode/extensions
```

**Tip 2: Offline Installation**
```
For air-gapped systems:
1. Download .vsix on internet-connected machine
2. Transfer via USB/network
3. Install using --install-extension flag
```

**Tip 3: Workspace vs Global**
```
Extension installs globally by default
To disable per-workspace:
1. Extensions view
2. Right-click extension
3. Select "Disable (Workspace)"
```

---

## ❓ Common Issues

### "File Not Found" Error

**Problem:** Can't find downloaded file

**Solution:**
```
1. Check Downloads folder
2. Look in browser download history
3. Re-download if needed
4. Verify file size matches
```

---

### Unity Import Errors

**Problem:** Import fails with errors

**Solution:**
```
1. Check Unity version compatibility
2. Close and reopen Unity
3. Try safe mode: Hold Alt during Unity startup
4. Delete Library folder and reimport
```

---

### Blender Add-on Won't Enable

**Problem:** Can't check the enable box

**Solution:**
```
1. Check Blender version (needs 4.0+)
2. Look for error in System Console (Window → Toggle System Console)
3. Try installing in safe mode (blender --factory-startup)
4. Check file permissions
```

---

### VSCode Extension Not Appearing

**Problem:** Extension installed but not visible

**Solution:**
```
1. Reload window: Ctrl+Shift+P → "Reload Window"
2. Check extension is enabled in Extensions view
3. Look for errors: Help → Toggle Developer Tools → Console
4. Reinstall extension
```

---

## 📞 Get Help

### Before Asking for Help

Please check:
1. ✅ Used correct download link
2. ✅ Checked version compatibility
3. ✅ Followed installation steps
4. ✅ Read troubleshooting section
5. ✅ Searched existing issues

### How to Report Issues

**Include this information:**
```
Tool: [Unity SetUp / Blender Style / Pie Manager / Snippets]
Version: [e.g., v1.0.1]
Platform: [Windows 10 / macOS 14 / Ubuntu 22.04]
Host Version: [Unity 2022.3 / Blender 4.0 / VSCode 1.85]

Steps to reproduce:
1. 
2. 
3. 

Expected behavior:

Actual behavior:

Error messages (if any):

Screenshots (if applicable):
```

### Support Channels

- 🐛 [GitHub Issues](../../issues) - Bug reports
- 💬 [Discussions](../../discussions) - Questions & help
- 📧 Email - Direct support
- 💡 [Feature Requests](../../issues/new?template=feature_request.md)

---

## 🎉 Success Checklist

After installing all tools, you should be able to:

### Unity Tools
- [ ] Press G/R/S for transform operations
- [ ] Navigate Scene View with MMB
- [ ] See tabbed Inspector layout
- [ ] Access Blender Editor Tools preferences

### Blender Add-on
- [ ] See PM tab in sidebar (N)
- [ ] Create a test pie menu
- [ ] Assign hotkey to menu
- [ ] Access action library

### VSCode Extension
- [ ] Open Snippets sidebar
- [ ] Create a new snippet
- [ ] Export/import snippets
- [ ] See color-coded language badges

---

<div align="center">

**Need more help? Check detailed documentation for each tool!**

[📖 Unity Docs](./Blender_Editor_Tools_for_Unity.md) • [📖 Blender Docs](./Pie_Manager_PM__for_Blender.md) • [📖 VSCode Docs](./Code_Snippets_Manager.md)

[← Back to Main README](./README.md)

</div>
