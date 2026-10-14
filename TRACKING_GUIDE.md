# CTA Tracking Guide - Services Led

## Overview

The CTA Tracking system automatically logs all user interactions on the Services Led landing page and personalized leader pages. Track clicks, measure engagement, and export data for analysis.

---

## What Gets Tracked

### Event Types

| Type | Location | Triggers When |
|------|----------|--------------|
| **copy** | Main hub cards | User clicks "📋 Copy" button |
| **download** | Main hub cards | User clicks "⬇️ Download" button |
| **claim** | Personalized page | User clicks "📍 Claim at TSIA Booth" |
| **ship** | Personalized page | User clicks "🚚 Ship to My Office" |
| **view** | Personalized page | User lands on `/leader.html?name=...` |

### Data Captured per Event

```javascript
{
    id: "cta_1728941234_abc123def",
    timestamp: "2026-10-14T15:30:45.123Z",
    date: "10/14/2026",
    time: "3:30:45 PM",
    leaderName: "Gerard Allen",
    ctaType: "claim",                    // copy, download, claim, ship, view
    userAgent: "Mozilla/5.0...",
    referrer: "https://example.com",
    pageUrl: "https://site.com/leader.html?name=gerard-allen",
    details: {
        action: "Claim at TSIA Booth",
        company: "SailPoint",
        value: "tsia_booth"
    }
}
```

---

## How It Works

### Automatic Tracking (No Setup Required)

1. **tracking.js** loads on every page
2. CTATracker initializes automatically
3. All interactions logged to browser's `localStorage`
4. Data persists across sessions

### LocalStorage

- **Location**: Browser's localStorage under key `servicesLedCTATracker`
- **Capacity**: ~5-10MB per browser (depends on browser)
- **Persistence**: Data survives page reloads and browser restart
- **Privacy**: Data stored only on user's device (NOT sent to server by default)

---

## Accessing the Tracking Dashboard

### View Real-Time Stats

1. **Open Dashboard**: 
   - Open `tracking-dashboard.html` directly in browser
   - Or programmatically: `CTATracker.openDashboard()`

2. **See**:
   - Total clicks across all events
   - Today's clicks & this week's clicks
   - Top 10 most-clicked leaders
   - Breakdown by CTA type (claim, ship, copy, download)
   - Last 50 events with timestamps

3. **Auto-Refresh**: Dashboard updates every 10 seconds

---

## Using Tracking Data

### Console Commands

Open browser console (F12) and run:

```javascript
// Get all events
CTATracker.getEvents()

// Get events by type
CTATracker.getEventsByType('claim')
CTATracker.getEventsByType('ship')
CTATracker.getEventsByType('copy')
CTATracker.getEventsByType('download')

// Get events by leader
CTATracker.getEventsByLeader('Gerard Allen')

// Get statistics
const stats = CTATracker.getStats()
console.table(stats)

// Print stats formatted
CTATracker.printStats()

// Export data
CTATracker.exportAsCSV()
CTATracker.exportAsJSON()
```

### Dashboard Interface

**Stats Cards:**
- Total Clicks - All interactions
- Today's Clicks - Last 24 hours
- This Week - Last 7 days
- Top Leader - Most clicked leader

**Breakdown Tables:**
- Clicks by Type - Count of each CTA type
- Top 10 Leaders - Who got the most clicks
- Recent Events - Last 50 tracked events

**Export Options:**
- 📥 Export as CSV - Import to Excel/Sheets
- 📥 Export as JSON - Full data backup
- 🖨️ Print Stats - Print console output
- 🗑️ Clear Data - Reset all tracking

---

## Integration with CRM/Email

### Send Data to External System

```javascript
// Modify tracking.js sendToAnalytics() to send data:
if (window.gtag) {
    gtag('event', 'cta_click', {
        leader: event.leaderName,
        cta_type: event.ctaType,
        company: event.details?.company
    });
}

// Or send to your API:
fetch('https://your-api.com/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event)
});
```

### Webhook Integration (Optional)

When a CTA is clicked, send to webhook:

```javascript
// In tracking.js sendToAnalytics():
const webhook = 'https://your-webhook.com/cta-click';
fetch(webhook, {
    method: 'POST',
    body: JSON.stringify(event)
}).catch(console.error);
```

---

## Analytics Examples

### Example 1: Track "Claim at TSIA" Conversions

```javascript
const claimEvents = CTATracker.getEventsByType('claim');
console.log(`${claimEvents.length} people claimed at TSIA`);
// Output: 15 people claimed at TSIA
```

### Example 2: Find Top Performing Leaders

```javascript
const stats = CTATracker.getStats();
stats.topLeaders.forEach((leader, i) => {
    console.log(`${i+1}. ${leader.name}: ${leader.count} clicks`);
});
// Output:
// 1. Gerard Allen: 8 clicks
// 2. Lisa James: 5 clicks
// 3. Artem Khvastunov: 4 clicks
```

### Example 3: Count Daily Engagements

```javascript
const events = CTATracker.getEvents();
const byDate = {};
events.forEach(e => {
    byDate[e.date] = (byDate[e.date] || 0) + 1;
});
console.table(byDate);
```

### Example 4: Export for Sales Team

```javascript
// Export data for sharing with sales
CTATracker.exportAsCSV();

// Now send the downloaded CSV to team via Slack/Email
// File: services-led-cta-tracking-2026-10-14.csv
```

---

## Tracking Data Lifecycle

### When Data is Stored
- ✅ Immediately after CTA click
- ✅ Stored in browser localStorage
- ✅ Includes full event details

### When Data Persists
- ✅ Survives page reload
- ✅ Survives browser restart
- ✅ Survives application updates
- ❌ Deleted if user clears browser cache/cookies (by default)

### When to Export
- Export weekly for reporting
- Export before browser updates
- Export before pushing new code
- Export when tracking reaches 1000+ events (for performance)

---

## Advanced Configuration

### Modify Tracking Behavior

```javascript
// Custom tracking (add to tracking.js):
function trackCustomEvent(name, leaderName, data) {
    CTATracker.trackClick(leaderName, 'custom', {
        action: name,
        ...data
    });
}

// Track custom action
trackCustomEvent('view_profile', 'Gerard Allen', { 
    referrer: 'email' 
});
```

### Send to Google Analytics

```javascript
// Add to index.html and leader.html:
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Then tracking.js will automatically send events to Google Analytics.

### Send to Amplitude

```javascript
// Add to index.html and leader.html:
<script async src="https://cdn.amplitude.com/libs/amplitude-8.15.0-min.gz.js"></script>
<script>
    amplitude.getInstance().init('API_KEY');
</script>
```

---

## Dashboard Features Explained

### Stats Cards

**Total Clicks**: Sum of all CTA interactions (copy + download + claim + ship)

**Today's Clicks**: Interactions with timestamp from today (UTC)

**This Week**: Interactions from last 7 days

**Top Leader**: Leader with most total interactions

### Charts & Tables

**Clicks by Type**: 
- Shows distribution of each CTA type
- Progress bar shows relative volume
- Helps identify which CTAs are most popular

**Top 10 Leaders**:
- Shows who generates most engagement
- Helps sales prioritize outreach
- Identifies strong candidates

**Recent Events**:
- Last 50 tracked interactions
- Chronological order (newest first)
- Includes leader name, action type, timestamp

---

## Exporting Data

### CSV Export

```
Timestamp,Leader,CTA Type,Date,Time,Page URL,Referrer
2026-10-14T15:30:45.123Z,Gerard Allen,claim,10/14/2026,3:30:45 PM,https://site.com/leader.html?name=gerard-allen,direct
2026-10-14T15:28:12.456Z,Lisa James,download,10/14/2026,3:28:12 PM,https://site.com/,google
```

**Use Cases**:
- Import into Excel/Sheets for analysis
- Share with sales team
- Create pivot tables for reports

### JSON Export

```json
{
    "version": "1.0",
    "created": "2026-10-14T15:30:00Z",
    "events": [
        {
            "id": "cta_1728941234_abc123",
            "timestamp": "2026-10-14T15:30:45.123Z",
            "leaderName": "Gerard Allen",
            "ctaType": "claim",
            ...
        }
    ]
}
```

**Use Cases**:
- Full data backup
- Import into data warehouse
- Process with custom scripts

---

## Privacy & Security

### Data Storage
- ✅ Stored locally in browser (no server transmission)
- ✅ User controls data (can delete anytime)
- ✅ No PII stored except leader names (all public)
- ✅ No passwords or sensitive information

### Clearing Data
```javascript
// Clear all tracking
CTATracker.clearData()

// Or manually
localStorage.removeItem('servicesLedCTATracker')
```

### Browser Privacy
- Data tied to browser/device only
- Private/Incognito = separate storage
- Clearing cache = deletes tracking
- Different users = different tracking

---

## Troubleshooting

### "No data yet" on Dashboard

**Issue**: Dashboard shows no events even after clicking CTAs

**Solution**:
1. Verify tracking.js is loaded (check Network tab)
2. Check browser console for errors
3. Verify localStorage is enabled
4. Click a CTA and check localStorage: `localStorage.getItem('servicesLedCTATracker')`

### Data Disappears

**Issue**: Tracking data is gone

**Causes**:
- User cleared browser cache
- User cleared cookies & site data
- Private/Incognito browsing
- Different browser/device

**Solution**: Export data regularly to backup

### Dashboard Won't Update

**Issue**: Dashboard shows old data even after clicking

**Solution**:
1. Refresh dashboard: Click 🔄 icon
2. Close and reopen dashboard
3. Check browser console for errors

---

## Best Practices

### Regular Exports
- Export data weekly for reporting
- Keep backups of JSON exports
- Archive old data

### Performance
- Dashboard filters to last 50 events
- Clear old data if 5000+ events accumulated
- Exports handle large datasets automatically

### Analysis
- Use CSV for Excel analysis
- Use JSON for programmatic processing
- Compare week-over-week engagement
- Track top leaders over time

---

## Sample Reports You Can Generate

### Weekly Engagement Report
```
Week of Oct 7-14, 2026

Total Interactions: 87
- Copy Template: 35
- Download Cover: 28
- Claim at TSIA: 18
- Ship to Office: 6

Top 5 Leaders:
1. Gerard Allen (12 clicks)
2. Lisa James (11 clicks)
3. Artem Khvastunov (9 clicks)
4. Swati Chopra (8 clicks)
5. Nicholas Blades (7 clicks)
```

### Engagement by Type Report
```
Copy (Outreach Template): 35 clicks
- Used for LinkedIn outreach
- Indicates high intent to contact

Download (Book Cover): 28 clicks  
- Used for email attachments
- Indicates content sharing

Claim at TSIA: 18 clicks
- Strong conference interest
- High engagement signal

Ship to Office: 6 clicks
- Lower volume
- Requires follow-up
```

---

## Next Steps

### Now
- [x] Tracking is live and automatic
- [x] Open `tracking-dashboard.html` to see stats
- [x] Click CTAs and watch data appear

### Soon
- [ ] Export data to CSV and analyze
- [ ] Set up weekly reporting
- [ ] Share metrics with sales team

### Future
- [ ] Integrate with Google Analytics
- [ ] Set up email alerts for high engagement
- [ ] Create Looker/Tableau dashboards
- [ ] Connect to CRM for lead scoring

---

## Questions?

**How do I see tracking data?**
→ Open `tracking-dashboard.html` in browser

**How do I export data?**
→ Click "Export as CSV" or "Export as JSON" on dashboard

**Is data sent to servers?**
→ No, by default data stays in browser only

**Can I integrate with my CRM?**
→ Yes, see "Webhook Integration" section above

**How long is data kept?**
→ Until user clears browser cache or you clear it manually
