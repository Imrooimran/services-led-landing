# Testing Guide - Services Led Features

## Pre-Deployment Testing (Local)

### Setup
```bash
cd /Users/admin/Downloads/services-led-landing-github
python3 -m http.server 8080
# Open http://localhost:8080 in browser
```

---

## Feature Tests

### ✅ Test 1: Rep Names Display

**Location:** Main landing page cards
**Steps:**
1. Load http://localhost:8080
2. Scroll down to any leader card
3. Look for "Rep: [Name]" at bottom of card

**Expected:**
- Rep name appears in blue text
- Format: "Rep: Add Rep Name" (placeholder) or actual rep name

**Pass/Fail:** ___

---

### ✅ Test 2: Copy Outreach Template

**Location:** "📋 Copy" button on cards
**Steps:**
1. Click "📋 Copy" button on any card
2. Look for green notification at bottom right
3. Open Notepad and paste (Ctrl+V / Cmd+V)

**Expected:**
- Green notification appears: "✅ Template copied to clipboard!"
- Pasted text format: "Hi [FirstName], we printed a custom edition of our "Services Led" book highlighting your work at [Company]..."
- Notification disappears after 3 seconds

**Pass/Fail:** ___

**Edge Cases to Test:**
- Try copying twice quickly (should work both times)
- Try on different browsers (Chrome, Firefox, Safari)

---

### ✅ Test 3: Download Book Cover

**Location:** "⬇️ Download" button on cards
**Steps:**
1. Click "⬇️ Download" button on any card (e.g., Gerard Allen)
2. Check Downloads folder on computer
3. Verify file name and content

**Expected:**
- Green notification appears: "✅ Cover downloaded!"
- File downloaded: "[Leader Name] - Cover.jpg"
- File is a valid image (can open in preview)
- File is approximately 100-500 KB

**Pass/Fail:** ___

**Test with Multiple Leaders:**
- [ ] Download from Tier 1 leader
- [ ] Download from Tier 2 leader
- [ ] Download from PropelX leader

---

### ✅ Test 4: Personalized Page Links

**Location:** "🔗 Share" button on cards
**Steps:**
1. Click "🔗 Share" button on any card
2. Check URL in address bar
3. Verify page content

**Expected:**
- URL format: `http://localhost:8080/leader.html?name=first-last-name`
- Page loads with correct leader info
- 3D book mockup displays
- Leader name, company, title shown
- TSIA CTAs visible

**Test with Multiple Leaders:**
- [ ] Gerard Allen: `/leader.html?name=gerard-allen`
- [ ] Artem Khvastunov: `/leader.html?name=artem-khvastunov`
- [ ] Lisa James: `/leader.html?name=lisa-james`

**Pass/Fail:** ___

---

### ✅ Test 5: Personalized Page CTAs

**Location:** Personalized leader page
**Steps:**
1. Go to any personalized page (via Share button)
2. Click "📍 Claim at TSIA Booth" button
3. Click "🚚 Ship to My Office" button

**Expected:**
- "Claim at TSIA" shows: "Thank you! Please visit the Rocketlane booth at TSIA..."
- "Ship to Office" shows: "Hi [FirstName], we'd like to ship your personalized..."
- Both show appropriate messages for that leader

**Pass/Fail:** ___

---

### ✅ Test 6: LinkedIn Links

**Location:** Personalized page + cards
**Steps:**
1. Find leader with LinkedIn profile
2. Click LinkedIn icon on personalized page
3. Verify profile loads

**Expected:**
- New tab opens with correct LinkedIn profile
- URL matches leader's LinkedIn URL

**Pass/Fail:** ___

---

### ✅ Test 7: Search & Filter Still Works

**Location:** Main page search box and filter buttons
**Steps:**
1. Search for "Gerard" in search box
2. Results show only Gerard Allen
3. Click filter "TSIA Tier 1"
4. Shows only Tier 1 leaders
5. Click "All Leaders"
6. Shows all 70 leaders

**Expected:**
- Search filters correctly by name/company
- Filter buttons work as before
- Results count updates

**Pass/Fail:** ___

---

### ✅ Test 8: Modal Still Works

**Location:** Leader cards
**Steps:**
1. Click on book image on any card
2. Modal opens with 3 images (cover, foreword, mockup)
3. Click LinkedIn button in modal
4. Click X or outside modal to close

**Expected:**
- Modal displays correctly
- All images load
- LinkedIn button works
- Modal closes properly

**Pass/Fail:** ___

---

## Responsive Design Tests

### Mobile (375px)
1. [ ] Cards stack vertically
2. [ ] Buttons readable and clickable
3. [ ] Copy/download buttons work
4. [ ] Personalized page responsive

### Tablet (768px)
1. [ ] 2-column grid
2. [ ] All features work
3. [ ] Text readable

### Desktop (1200px+)
1. [ ] 3-4 column grid
2. [ ] All features work optimally

---

## Browser Compatibility Tests

| Browser | Test | Pass |
|---------|------|------|
| Chrome | Copy, Download, Links | ___ |
| Firefox | Copy, Download, Links | ___ |
| Safari | Copy, Download, Links | ___ |
| Edge | Copy, Download, Links | ___ |

---

## Error Handling Tests

### Test: Copy without Clipboard API
**Steps:**
1. Use browser that doesn't support clipboard
2. Try to copy
**Expected:**
- Fallback method triggers
- Text still copied to clipboard

### Test: Download Non-Existent File
**Steps:**
1. Manually edit image file name to be wrong
2. Click download
**Expected:**
- Shows error notification
- Error doesn't crash page

### Test: Invalid Leader Slug
**Steps:**
1. Go to: `http://localhost:8080/leader.html?name=invalid-name`
**Expected:**
- Shows error message: "Leader not found"
- Shows "Back to all leaders" link
- Page doesn't crash

---

## Rep Names Update Test

### Test: Update Rep in data.js
**Steps:**
1. Open `data.js`
2. Change first leader rep: `rep: 'Sarah Johnson'`
3. Save file (refresh browser auto-loads in dev)
4. Check card - should show new rep name

**Expected:**
- Rep name updates on card
- No console errors

**Pass/Fail:** ___

---

## Performance Tests

### Page Load Time
**Steps:**
1. Open DevTools → Network
2. Load http://localhost:8080
3. Check load time

**Expected:** < 2 seconds

### Image Load Time
**Steps:**
1. Open personalized page
2. Check DevTools → Network
3. Verify images load quickly

**Expected:** Images load in < 500ms each

---

## Post-Deployment Testing (Live GitHub Pages)

### Access Live Site
```
https://[username].github.io/services-led-landing/
```

### Run All Tests Above
- [ ] Copy template works
- [ ] Download works
- [ ] Personalized pages work
- [ ] All links work
- [ ] Images load correctly
- [ ] Mobile responsive

---

## Checklist Before Going Live

### Files
- [ ] data.js created
- [ ] leader.html created
- [ ] index.html updated
- [ ] NEW_FEATURES.md created
- [ ] All files have no syntax errors

### Functionality
- [ ] Rep names display (placeholder or real)
- [ ] Copy button works
- [ ] Download button works
- [ ] Share links work
- [ ] Personalized pages load
- [ ] Search/filter still works
- [ ] Modal still works
- [ ] LinkedIn links work

### Documentation
- [ ] NEW_FEATURES.md complete
- [ ] DEPLOYMENT_CHECKLIST.md complete
- [ ] TESTING_GUIDE.md complete (this file)

### Git
- [ ] All files committed
- [ ] Message descriptive
- [ ] Pushed to main branch

### Live Site
- [ ] GitHub Pages rebuilt (wait 1-2 min)
- [ ] Site loads without errors
- [ ] All features work on live site
- [ ] Responsive on mobile

---

## Troubleshooting

### Copy Not Working
- Check browser console (F12)
- Verify data.js loaded
- Try different browser

### Download Not Working
- Verify image files exist
- Check file paths match names
- Try different browser

### Personalized Page Not Loading
- Check URL format (should be slug format)
- Verify leader exists in data.js
- Check browser console for errors

### Rep Names Not Showing
- Verify data.js has rep field
- Check syntax in data.js
- Clear browser cache and reload

---

## Sign-Off

**Date Tested:** _______________

**Tested By:** _______________

**All Tests Pass:** YES / NO

**Notes:**
_________________________________________________________________

**Ready for Production:** YES / NO
