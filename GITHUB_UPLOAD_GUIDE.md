# GitHub Upload Guide

## Quick Setup (5 minutes)

### Step 1: Create GitHub Repository
1. Go to [github.com/new](https://github.com/new)
2. Repository name: `services-led-landing`
3. Description: "Services Led - Leadership Collection Landing Page"
4. Choose: **Public** (so it can be accessed)
5. Click **Create repository**

### Step 2: Upload Files Using GitHub Web UI (Easiest)

**Option A: Drag & Drop**
1. Go to your new GitHub repo
2. Click **Add file** → **Upload files**
3. Drag and drop entire folder contents:
   - `index.html`
   - `README.md`
   - `rocketlane-logo.webp`
   - `Tier 1 + Propel X/` (folder)
   - `Tier 2 /` (folder)
4. Click **Commit changes**

**Option B: Using Git Command Line**

```bash
# Navigate to GitHub folder
cd /Users/admin/Downloads/services-led-landing-github

# Initialize git repo
git init
git add .
git commit -m "Initial commit: Services Led landing page with 70 leaders"

# Add remote and push
git remote add origin https://github.com/YOUR-USERNAME/services-led-landing.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository **Settings**
2. Scroll to **Pages** section
3. Under "Source", select: **main** branch
4. Click **Save**

**Your site will be live at:**
```
https://YOUR-USERNAME.github.io/services-led-landing/
```

### Step 4: Verify Deployment

✅ Visit your GitHub Pages URL
✅ Check that images load correctly
✅ Test search and filter functionality
✅ Test LinkedIn icon links

---

## File Structure

```
services-led-landing/
├── index.html                    (Main landing page)
├── README.md                     (Documentation)
├── rocketlane-logo.webp         (Logo)
├── Tier 1 + Propel X/           (60 images)
│   ├── [Leader Name] - Cover.jpg
│   └── [First Name] - Foreword.jpg
└── Tier 2 /                     (80 images)
    ├── [Leader Name] - Cover.jpg
    └── [First Name] - Foreword.jpg
```

---

## Troubleshooting

### Images Not Loading
- Make sure folder names exactly match (spaces, capitalization)
- Verify image file names: `[Full Name] - Cover.jpg`, `[First Name] - Foreword.jpg`
- Check `.gitignore` doesn't exclude image files

### Site Not Going Live
- Wait 1-2 minutes after enabling GitHub Pages
- Refresh the page
- Check repository is set to **Public**
- Verify branch is set to **main** in Pages settings

### Want Custom Domain?
1. In Settings → Pages
2. Add custom domain
3. Update DNS settings (follow GitHub instructions)

---

## Updates & Changes

To update the site after deployment:

```bash
cd /Users/admin/Downloads/services-led-landing-github
git add .
git commit -m "Update: [describe changes]"
git push origin main
```

Changes will be live in 1-2 minutes!

---

## Support

For issues, check:
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Help](https://docs.github.com/en/get-started)

---

**Ready to deploy!** 🚀
