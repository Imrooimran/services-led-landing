# New Features - Services Led Landing Page

## Overview
This update adds three major rep-facing features:
1. **Rep Name Display** - Show assigned sales rep on each leader card
2. **One-Click Outreach Copy** - Pre-written LinkedIn/email templates
3. **Cover Download** - Download high-res book covers for email attachments
4. **Personalized Leader Pages** - 1:1 shareable pages for each featured leader

---

## Feature 1: Rep Name Display

### What's New
- Each leader card now displays the assigned sales rep name
- Located at the bottom of each card, just above action buttons
- Format: "Rep: [Rep Name]" with the name highlighted in Rocketlane blue

### How It Works
- Rep names are stored in `data.js` in the `leadersData` array
- Each leader has a `rep` field (currently set to "Add Rep Name" as placeholder)
- Reps can be updated by editing `data.js` and updating the `rep` field for each leader

### Update From Google Sheet
To populate rep names from your Google Sheet:
1. Open the Google Sheet with Company Owner data
2. Copy the rep names from the "Company Owner" column
3. In `data.js`, find each leader and replace `rep: 'Add Rep Name'` with the actual rep name
4. Example: `rep: 'John Smith'`
5. Commit and push changes - they'll be live in 1-2 minutes

---

## Feature 2: Copy Outreach Template

### What's New
- Each card has a "📋 Copy" button
- One click copies a pre-written outreach template
- Template is customized with leader's first name and company
- Success notification appears when copied

### Template Content
```
Hi [FirstName], we printed a custom edition of our "Services Led" book highlighting your work at [Company]. We'd love to hand you your physical copy at TSIA in Vegas! Are you heading to the conference?
```

### How to Use
1. Click the "📋 Copy" button on any leader card
2. A success notification appears: "Template copied!"
3. Paste into LinkedIn message or email
4. The template is pre-filled with the leader's first name and company

### Customize Template
To customize the outreach copy, edit the `getOutreachTemplate()` function in `data.js`:
```javascript
function getOutreachTemplate(firstName, company) {
    return `Hi ${firstName}, your custom message here at ${company}.`;
}
```

---

## Feature 3: Download Book Cover

### What's New
- Each card has an "⬇️ Download" button
- Downloads the personalized book cover as JPG
- Reps can attach to emails instantly
- File saved as: "[Leader Name] - Cover.jpg"

### How to Use
1. Click the "⬇️ Download" button on any leader card
2. Book cover image downloads to your computer
3. Attach to email or upload to your CRM
4. Share with the leader or use in outreach

### File Details
- Format: JPG (high resolution)
- Filename: "[Leader Name] - Cover.jpg"
- Downloaded from: `tier-1-propelx/` or `tier-2/` folders
- Can be customized per leader

---

## Feature 4: Personalized Leader Pages

### What's New
- Each leader has their own shareable page at `/leader/[name-slug].html`
- Example: `rocketlane.com/leader/gerard-allen`
- Page includes:
  - 3D book mockup
  - Leader info (name, company, title, category)
  - Personalized headline
  - CTAs: "Claim at TSIA Booth" or "Ship to My Office"
  - LinkedIn profile link
  - Event information with CEO mention

### Access Personalized Pages
- **From Main Hub**: Click "🔗 Share" button on any card
- **Direct URL**: `https://yoursite.com/leader/[first-last-name-slug]`
  - Example slugs: `gerard-allen`, `artem-khvastunov`, `lisa-james`
- **Share Link**: Send the personalized URL to contacts

### Customize Personalized Pages
Edit `leader.html` to customize:
- Header text and headline
- CTA button labels and actions
- Event information (venue, contact names)
- Contact details and booth location

### CTA Buttons
- **Claim at TSIA Booth**: Currently shows a thank you message
  - Can integrate with RSVP system or form
  - Edit `claimAtTSIA()` function to customize
  
- **Ship to My Office**: Currently requests mailing address
  - Can integrate with CRM or mailing system
  - Edit `shipToOffice()` function to customize

---

## File Structure

```
services-led-landing-github/
├── index.html              (Main landing page - updated)
├── leader.html             (Personalized leader page template)
├── data.js                 (New: Centralized data + helpers)
├── rocketlane-logo.webp    (Logo)
├── tier-1-propelx/         (Images folder - 60 images)
├── tier-2/                 (Images folder - 80 images)
└── README.md               (Original documentation)
```

---

## Implementation Details

### data.js Structure
```javascript
const leadersData = [
    {
        name: 'Gerard Allen',
        category: 'propelx',
        company: 'SailPoint',
        title: 'SVP Global Services',
        linkedIn: 'https://linkedin.com/in/gerard-allen',
        rep: 'Add Rep Name'  // Update with actual rep name
    },
    // ... more leaders
];
```

### Helper Functions (in data.js)
- `getLeaderBySlug(slug)` - Find leader by URL slug
- `createSlug(name)` - Convert name to URL slug
- `getCategoryLabel(category)` - Get readable category name
- `getOutreachTemplate(firstName, company)` - Generate outreach text

### Main Hub Updates (in index.html)
- `copyOutreachTemplate(leader)` - Copy template to clipboard
- `downloadCover(leader)` - Download leader's cover image
- `showCopyFeedback(message)` - Show success notification
- Cards now include rep name, copy button, download button, and share button

---

## Usage Scenarios

### Scenario 1: LinkedIn Outreach
1. Rep finds leader on main hub
2. Clicks "📋 Copy" button
3. Pastes template into LinkedIn DM
4. Leader clicks link to personalized page

### Scenario 2: Email Campaign
1. Rep downloads book cover with "⬇️ Download"
2. Attaches cover to email
3. Includes personalized page link
4. Shares TSIA booth details

### Scenario 3: Direct Sharing
1. Rep clicks "🔗 Share" to get personalized page link
2. Sends link to contact: "Check out your personalized edition!"
3. Contact lands on their dedicated page
4. Clicks CTA to claim at TSIA or request shipment

---

## Deployment

1. **Update `data.js`** with actual rep names from Google Sheet
2. **Push all files** to GitHub:
   - `data.js` (new)
   - `leader.html` (new)
   - `index.html` (updated)
3. **Verify GitHub Pages** rebuilds (wait 1-2 minutes)
4. **Test all features**:
   - View rep names on cards
   - Copy outreach template
   - Download book cover
   - Click personalized page links

---

## Next Steps

### Immediate
- [ ] Add rep names to `data.js` from Google Sheet
- [ ] Test locally with Python server: `python3 -m http.server 8080`
- [ ] Verify all features work
- [ ] Push to GitHub and test on live site

### Optional Enhancements
- [ ] Integrate "Claim at TSIA" with actual RSVP form
- [ ] Add "Ship to Office" CRM integration
- [ ] Track personalized page visits with Google Analytics
- [ ] Add email campaign templates
- [ ] Create batch download for all covers
- [ ] Add QR codes to personalized pages

---

## Troubleshooting

**Rep names showing "Add Rep Name"**
- Solution: Update `rep` field in `data.js` for each leader

**Copy button not working**
- Solution: Check browser console, ensure `data.js` is loaded
- Try: Refresh page or clear cache

**Download button not working**
- Solution: Verify image files exist in `tier-1-propelx/` and `tier-2/` folders
- Check: File names match exactly with leader names

**Personalized page not loading**
- Solution: Check URL slug format (should be lowercase with hyphens)
- Verify: Leader name exists in `data.js`
- Example: `/leader/gerard-allen` for "Gerard Allen"

**Images not loading on personalized page**
- Solution: Verify folder names are correct (no spaces)
- Check: Image file names match leader names in `data.js`

---

## Questions?

Contact your Rocketlane team for:
- Adding more features
- CRM/form integrations
- Analytics tracking
- Custom branding updates
