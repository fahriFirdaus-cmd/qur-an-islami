# ✅ Testing Checklist — Islamic Redesign v3.0

**Project:** Qur'an Islami  
**Version:** 3.0 — Islamic Peaceful Redesign  
**Date:** October 25, 2026

---

## 🎯 Testing Focus

Redesign ini fokus pada 3 hal utama:
1. ✅ **Text Indonesia tidak terpotong** di semua buttons/tabs
2. ✨ **UI/UX islami** dengan warna kalem dan animasi halus
3. 📱 **Responsive design** untuk semua device sizes

---

## 📋 Desktop Testing (>1200px)

### Visual Elements
- [ ] **Sidebar:** 
  - [ ] Width 320px
  - [ ] Background gradient white → cream visible
  - [ ] Border emerald green 2px
  - [ ] Logo 52px x 52px dengan gradient emerald
  - [ ] Surah list hover: emerald background
  - [ ] Active surah: gold-emerald gradient

- [ ] **Topbar:**
  - [ ] Height 72px (lebih tinggi dari sebelumnya)
  - [ ] Background gradient visible
  - [ ] Border emerald 2px di bottom
  - [ ] Shadow soft di bawah topbar

- [ ] **Navigation Pills:**
  - [ ] All pills visible: Home, Quran, Audio, History, Revelations
  - [ ] Active pill: emerald gradient background
  - [ ] Hover: emerald tint dengan lift-up effect
  - [ ] Text NOT cut off

### Text Cutoff Check — CRITICAL ✅
Test di bahasa **Indonesia (ID)**:

- [ ] **Topbar:**
  - [ ] "Beranda" → NOT cut off
  - [ ] "Quran" → NOT cut off
  - [ ] "Audio" → NOT cut off
  - [ ] "Sejarah" → NOT cut off
  - [ ] "Wahyu" → NOT cut off
  - [ ] "Pengaturan Pembaca" → NOT cut off

- [ ] **Sidebar Tabs:**
  - [ ] "Semua" → NOT cut off
  - [ ] "🕋 Makkiyyah" → NOT cut off
  - [ ] "🕌 Madaniyyah" → NOT cut off

- [ ] **Hero Buttons:**
  - [ ] "Mulai Membaca" → NOT cut off
  - [ ] "Jelajahi Audio" → NOT cut off

- [ ] **Surah Reader:**
  - [ ] "Sebelumnya" (Prev) → NOT cut off
  - [ ] "Beranda" (Home) → NOT cut off
  - [ ] "Selanjutnya" (Next) → NOT cut off
  - [ ] "Putar Audio" → NOT cut off
  - [ ] "Unggah MP3" → NOT cut off
  - [ ] "Pilih Surah" → NOT cut off

- [ ] **Quran View Switcher:**
  - [ ] "Baca Surah (Ayat)" → NOT cut off
  - [ ] "Daftar 114 Surah (Katalog)" → NOT cut off

- [ ] **History Page Era Tabs:**
  - [ ] "🕋 Masa Kenabian (15 Peristiwa)" → NOT cut off
  - [ ] "👑 Khulafaur Rasyidin (28 Peristiwa)" → NOT cut off
  - [ ] "🏛️ Dinasti Umayyah (25 Peristiwa)" → NOT cut off
  - [ ] "📚 Dinasti Abbasiyah (30 Peristiwa)" → NOT cut off

### Colors Check
- [ ] **Emerald Green** dominan di:
  - [ ] Borders (2px solid)
  - [ ] Active states (gradient)
  - [ ] Hover backgrounds (soft tint)
  - [ ] Scrollbar thumb

- [ ] **Gold** di:
  - [ ] Language toggle button
  - [ ] Active surah number badge
  - [ ] Notification dot (pulsing)

- [ ] **Cream** di:
  - [ ] Main background (#fdfbf7)
  - [ ] Secondary backgrounds (#f8f6f0)
  - [ ] Borders (#e8e3d5)

### Animations
- [ ] **Button Hover:**
  - [ ] Lift up 2-3px (translateY)
  - [ ] Shadow increases
  - [ ] Smooth transition (0.2s)

- [ ] **Notification Dot:**
  - [ ] Pulsing animation (2s loop)
  - [ ] Scale 1.0 → 1.15 → 1.0
  - [ ] Gold glowing effect

- [ ] **Page Transitions:**
  - [ ] Fade in from bottom (translateY 12px → 0)
  - [ ] Duration 0.4s
  - [ ] Smooth ease function

- [ ] **Tab Active State:**
  - [ ] Gradient background
  - [ ] Scale up slightly (1.02)
  - [ ] Shadow appears

### Background Pattern
- [ ] Islamic star pattern visible (subtle)
- [ ] Radial gradients (emerald + gold) visible
- [ ] Pattern opacity ~0.06 (tidak mengganggu)
- [ ] Tidak mengganggu readability text

### Typography
- [ ] Logo title: Cinzel font, 1.4rem, gradient text
- [ ] Hero title: 3.8rem, white color, shadow
- [ ] Arabic text: Amiri Quran, 1.3rem+
- [ ] Body text: Inter, 0.9rem minimum

---

## 📱 Tablet Testing (769px - 1200px)

### Layout Changes
- [ ] Sidebar: 280px width (lebih kecil dari desktop)
- [ ] Topbar nav pills: **HIDDEN**
- [ ] Reader settings button: Text hidden, icon only
- [ ] Search bar: Max-width 400px

### Text Cutoff Check
- [ ] All buttons still NOT cut off
- [ ] Tabs still readable
- [ ] Font size still comfortable

### Responsive Behavior
- [ ] Sidebar still accessible
- [ ] Content area adjusts properly
- [ ] No horizontal scrollbar
- [ ] Images scale properly

---

## 📱 Mobile Testing (<768px)

### Layout Changes
- [ ] **Sidebar:** Off-canvas (hidden by default)
- [ ] **Hamburger menu:** Visible di topbar
- [ ] **Mobile brand:** Visible (logo + title)
- [ ] **Sidebar overlay:** Visible saat sidebar open

### Sidebar Behavior
- [ ] Click hamburger → sidebar slides in from left
- [ ] Sidebar width: 320px (sama seperti desktop)
- [ ] Overlay dimming background (rgba emerald 0.4)
- [ ] Click overlay → sidebar slides out
- [ ] Click close button (X) → sidebar closes
- [ ] Smooth animation (0.35s)

### Text Cutoff Check — CRITICAL ✅
Di mobile, semua buttons harus **lebih besar**:

- [ ] **Language toggle:**
  - [ ] "🌐 ID" → NOT cut off
  - [ ] "🌐 EN" → NOT cut off
  - [ ] Padding 8px 16px minimum

- [ ] **Navigation pills** (jika visible):
  - [ ] Font 0.82rem
  - [ ] Padding 10px 18px
  - [ ] All text NOT cut off

- [ ] **Hero buttons:**
  - [ ] Width 100%
  - [ ] Height 48px minimum
  - [ ] Text centered dan NOT cut off

- [ ] **Surah controls:**
  - [ ] "Sebelumnya" → NOT cut off
  - [ ] "Selanjutnya" → NOT cut off
  - [ ] Icon + text visible

- [ ] **Filter tabs:**
  - [ ] Horizontal scroll enabled
  - [ ] Each tab: padding 10px 18px
  - [ ] Text NOT cut off

### Touch Targets
- [ ] All buttons: Minimum 44px x 44px (Apple guidelines)
- [ ] Spacing between buttons: 8px minimum
- [ ] Easy to tap without mistakes

### Typography Mobile
- [ ] Font size: 0.82rem - 0.88rem
- [ ] Still readable on small screens
- [ ] Arabic text: Minimum 1.1rem

---

## 📱 Extra Small Mobile Testing (<400px)

### Ultra Compact Mode
- [ ] **Language toggle:**
  - [ ] Text hidden, only flag visible
  - [ ] Width 48px (circle)
  - [ ] Still tappable

- [ ] **Icon buttons:**
  - [ ] Size 40px x 40px
  - [ ] SVG 18px x 18px
  - [ ] Clear and visible

### Text Cutoff
- [ ] Even di screen 375px (iPhone SE), text NOT cut off
- [ ] Buttons stack vertically jika perlu
- [ ] No horizontal overflow

---

## 🌙 Dark Mode Testing

### Activation
- [ ] Click theme toggle button (moon icon)
- [ ] Smooth transition to dark mode (~0.3s)
- [ ] All colors invert properly

### Dark Theme Colors
- [ ] **Background:** Deep forest green (#0f1612) bukan hitam
- [ ] **Card background:** Dark green-gray (#1e2924)
- [ ] **Text:** Cream (#f3f7f5) untuk readability tinggi
- [ ] **Borders:** Dark emerald (#1e4d3a)
- [ ] **Emerald elements:** Slightly darker shades

### Contrast Check
- [ ] Text masih readable (contrast ratio ≥ 4.5:1)
- [ ] Buttons masih jelas
- [ ] Icons visible
- [ ] No pure black (semuanya emerald-tinted)

### Dark Mode Animations
- [ ] Hover effects masih work
- [ ] Shadows adjusted untuk dark background
- [ ] Glow effects lebih visible

---

## 🎨 Color Accuracy Testing

### Emerald Green Family
- [ ] `--emerald-50`: #ecfdf5 (lightest tint)
- [ ] `--emerald-500`: #10b981 (primary)
- [ ] `--emerald-700`: #047857 (dark)
- [ ] `--emerald-900`: #064e3b (darkest)

### Gold Family
- [ ] `--gold-100`: #fef3c7 (light)
- [ ] `--gold-400`: #fbbf24 (medium)
- [ ] `--gold-600`: #d97706 (dark)

### Cream Family
- [ ] `--cream-50`: #fefdfb (main background)
- [ ] `--cream-200`: #f8f6f0 (secondary)
- [ ] `--cream-400`: #e8e3d5 (borders)

### Gradient Checks
- [ ] Sidebar header: White → cream gradient
- [ ] Topbar: White → cream gradient
- [ ] Active button: Emerald 600 → 700 gradient
- [ ] Gold button: Gold 100 → 200 gradient
- [ ] Logo text: Emerald 700 → 900 gradient

---

## ⚡ Performance Testing

### Page Load
- [ ] CSS file loads in <100ms
- [ ] No render-blocking
- [ ] No FOUC (Flash of Unstyled Content)

### Animations Performance
- [ ] No janky animations
- [ ] 60fps smooth hover transitions
- [ ] No layout shifts during animation
- [ ] CPU usage normal (<10% idle)

### Scrollbar Performance
- [ ] Custom scrollbar renders correctly
- [ ] Smooth scrolling
- [ ] No lag on scroll

### Background Pattern
- [ ] SVG pattern loads instantly (inline data URI)
- [ ] No performance impact
- [ ] Renders crisp on retina displays

---

## ♿ Accessibility Testing

### Keyboard Navigation
- [ ] Tab key: Focus visible pada semua interactive elements
- [ ] Enter/Space: Activate buttons
- [ ] Esc: Close dropdowns/modals
- [ ] Arrow keys: Navigate lists

### Focus States
- [ ] Focus ring visible (emerald color)
- [ ] Focus ring tidak di-crop oleh overflow
- [ ] Logical focus order

### Screen Reader (Optional)
- [ ] Semantic HTML elements
- [ ] ARIA labels ada di icon-only buttons
- [ ] Images ada alt text
- [ ] Landmarks properly labeled

### `prefers-reduced-motion`
- [ ] Open DevTools → Rendering → Emulate CSS media
- [ ] Check "prefers-reduced-motion: reduce"
- [ ] Verify all animations stop (duration 0.01ms)
- [ ] Page still usable without animations

### Color Contrast
- [ ] WCAG AA: Text ≥ 4.5:1 contrast
- [ ] WCAG AAA: Text ≥ 7:1 contrast (preferred)
- [ ] Use Chrome DevTools → Lighthouse → Accessibility
- [ ] Check contrast ratio for all text

---

## 🌐 Language Toggle Testing

### English → Indonesian
- [ ] Click "🌐 EN" button
- [ ] Changes to "🌐 ID"
- [ ] All navigation pills change
- [ ] All buttons change
- [ ] All page content changes
- [ ] History timeline translates
- [ ] Modal content translates

### Indonesian → English
- [ ] Click "🌐 ID" button
- [ ] Changes to "🌐 EN"
- [ ] All text changes back
- [ ] No layout shifts
- [ ] Text still NOT cut off

### Persistence
- [ ] Refresh page → language persists (localStorage)
- [ ] Close tab, reopen → language persists
- [ ] Clear cache → defaults to English

---

## 🔄 Browser Compatibility

### Chrome (Latest)
- [ ] All features work
- [ ] Gradients render correctly
- [ ] Animations smooth
- [ ] Custom scrollbar visible

### Firefox (Latest)
- [ ] Scrollbar styles might differ (acceptable)
- [ ] Gradients work
- [ ] Backdrop blur work (if supported)

### Safari (Latest)
- [ ] `-webkit-` prefixes work
- [ ] Gradient text work
- [ ] Smooth scrolling enabled

### Edge (Latest)
- [ ] Same as Chrome (Chromium-based)
- [ ] All features work

---

## 📊 Final Acceptance Criteria

### Must Pass (Critical):
- ✅ **Text Indonesia tidak terpotong** di semua buttons dan tabs
- ✅ **Responsive design** works di Desktop, Tablet, Mobile
- ✅ **Colors islami** visible dan tidak terlalu bright
- ✅ **Animations halus** dan tidak berlebihan
- ✅ **No console errors** di browser DevTools

### Should Pass (Important):
- ✅ Dark mode works properly
- ✅ Language toggle persists
- ✅ Keyboard navigation works
- ✅ 60fps animations
- ✅ Background pattern visible

### Nice to Have:
- ✅ Screen reader friendly
- ✅ Print layout optimized
- ✅ `prefers-reduced-motion` respected
- ✅ Lighthouse score >90

---

## 🐛 Bug Report Template

Jika menemukan bug, gunakan template ini:

```markdown
**Bug Title:** [Brief description]

**Severity:** Critical / High / Medium / Low

**Steps to Reproduce:**
1. Open web/index.html
2. Click button X
3. Observe behavior Y

**Expected Result:**
[What should happen]

**Actual Result:**
[What actually happens]

**Screenshot:**
[Attach screenshot if possible]

**Environment:**
- Browser: Chrome 120
- OS: Windows 11
- Screen Size: 1920x1080
- Language: Indonesia
```

---

## ✅ Sign-Off

### Tested By: ___________________________
### Date: ___________________________
### Result: ☐ Pass  ☐ Fail  ☐ Pass with Minor Issues

### Notes:
```
[Any additional comments or issues found]
```

---

**Happy Testing! 🧪✨**
