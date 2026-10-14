# How to Add Rep Names from Google Sheet

## Step-by-Step Guide

### Step 1: Access Your Google Sheet
Open: https://docs.google.com/spreadsheets/d/1_jVlg15yVdyIGUSl579MB_9Qd8J9u40zZ4CCBOCpxD4/edit?gid=174995114#gid=174995114

### Step 2: Export Company Owner Data
1. Select the "Company Owner" column (rep names)
2. Copy all values (Ctrl+C / Cmd+C)
3. Paste into a text editor to see all names

### Step 3: Quick Update (Fastest Way)

**Option A: Use Find & Replace**
1. Open `data.js` in your text editor
2. Use Find & Replace (Ctrl+H / Cmd+H)
3. For each rep, find & replace:
   ```
   Find: { name: 'LEADER_NAME', category: 'CATEGORY', company: 'COMPANY', title: 'TITLE', linkedIn: '...', rep: 'Add Rep Name' }
   Replace: { name: 'LEADER_NAME', category: 'CATEGORY', company: 'COMPANY', title: 'TITLE', linkedIn: '...', rep: 'REP_NAME' }
   ```

**Option B: Manual Edit (Most Accurate)**
1. Open `data.js`
2. Find leader by name: Ctrl+F "LEADER_NAME"
3. Change: `rep: 'Add Rep Name'` → `rep: 'Rep Name from Sheet'`

### Step 4: Map Companies to Reps

**From your Google Sheet:**
| Company | Rep Name |
|---------|----------|
| JetBrains | [From Sheet] |
| Gigamon | [From Sheet] |
| Workday | [From Sheet] |
| ... | ... |

### Step 5: Update in data.js

Find each leader and update. Example:

**BEFORE:**
```javascript
{ name: 'Artem Khvastunov', category: 'tsia1', company: 'JetBrains', title: 'Head of Professional Services', linkedIn: 'https://www.linkedin.com/in/artspb', rep: 'Add Rep Name' }
```

**AFTER:**
```javascript
{ name: 'Artem Khvastunov', category: 'tsia1', company: 'JetBrains', title: 'Head of Professional Services', linkedIn: 'https://www.linkedin.com/in/artspb', rep: 'Sarah Johnson' }
```

### Step 6: Save & Test

1. Save `data.js`
2. Refresh browser: `python3 -m http.server 8080`
3. Check cards - rep name should show in blue text

### Step 7: Commit to GitHub

```bash
cd /Users/admin/Downloads/services-led-landing-github
git add data.js
git commit -m "Add: Sales rep names from team assignments"
git push origin main
```

---

## All 70 Leaders Mapping Template

Copy/paste this template and fill in rep names:

```javascript
// TSIA Tier 1
{ name: 'Artem Khvastunov', rep: '[ADD REP NAME]' },
{ name: 'Carlos Quezada', rep: '[ADD REP NAME]' },
{ name: 'Chad Craig', rep: '[ADD REP NAME]' },
{ name: 'Gregory Urban', rep: '[ADD REP NAME]' },
{ name: 'Heather Engen', rep: '[ADD REP NAME]' },
{ name: 'Hilary Gronberg', rep: '[ADD REP NAME]' },
{ name: 'Joe Marruchella', rep: '[ADD REP NAME]' },
{ name: 'Lisa James', rep: '[ADD REP NAME]' },
{ name: 'Marc Winans', rep: '[ADD REP NAME]' },
{ name: 'Mayowa Ige', rep: '[ADD REP NAME]' },
{ name: 'Monique Rupert', rep: '[ADD REP NAME]' },
{ name: 'Nicholas Blades', rep: '[ADD REP NAME]' },
{ name: 'Paul Yaros', rep: '[ADD REP NAME]' },
{ name: 'Robert DelPonte', rep: '[ADD REP NAME]' },
{ name: 'Sebastien Gagne', rep: '[ADD REP NAME]' },
{ name: 'Sonia Hawkins', rep: '[ADD REP NAME]' },
{ name: 'Swati Chopra', rep: '[ADD REP NAME]' },
{ name: 'Todd Crandall', rep: '[ADD REP NAME]' },
{ name: 'Troy Baldwin', rep: '[ADD REP NAME]' },
{ name: 'Yvonne Chuang', rep: '[ADD REP NAME]' },

// TSIA Tier 2
{ name: 'Aaron Callahan', rep: '[ADD REP NAME]' },
{ name: 'Amber Monroe', rep: '[ADD REP NAME]' },
// ... (40 more)

// PropelX
{ name: 'Gerard Allen', rep: '[ADD REP NAME]' },
// ... (9 more)
```

---

## Verification Checklist

After updating rep names:
- [ ] All 70 leaders have rep names (no "Add Rep Name")
- [ ] Rep names are spelled correctly
- [ ] No extra quotes or spaces
- [ ] File saved without errors
- [ ] Local test shows rep names on cards
- [ ] Committed to Git
- [ ] Pushed to GitHub
- [ ] GitHub Pages rebuilt (wait 1-2 min)
- [ ] Live site shows correct rep names

---

## Bulk Update Script (Advanced)

If you have many reps to update, use this:

1. Export CSV from Google Sheet
2. Create mapping file: `reps.json`
   ```json
   {
     "JetBrains": "Sarah Johnson",
     "Gigamon": "Mike Chen",
     "Workday": "Lisa Martinez",
     ...
   }
   ```
3. Update data.js programmatically

---

## Questions?

**Q: I only have some rep names, not all 70**
A: That's fine! Update the ones you have. Others stay as "Add Rep Name"

**Q: Can I update rep names without redeploying?**
A: Yes! Each update to data.js is live after git push

**Q: Where do I see the rep names on the site?**
A: Bottom of each leader card in blue text: "Rep: [Name]"

**Q: How do reps use this?**
A: Each card shows their assigned leader name at the bottom, so reps know who owns which account
