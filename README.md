# Services Led - Leadership Collection Landing Page

A professional landing page showcasing 70 industry-leading professionals and their personalized book collection.

## Features

- **70 Industry Leaders** - TSIA Tier 1, TSIA Tier 2, and PropelX categories
- **Interactive Cards** - 3D book mockups with hover animations
- **Search & Filter** - Find leaders by name, company, or category
- **Detailed Profiles** - Click any card to view full profile with images
- **LinkedIn Integration** - Direct links to each leader's LinkedIn profile
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Professional Branding** - Rocketlane colors, Geist typography, modern UI

## Project Structure

```
services-led-landing/
├── index.html                    # Main HTML file (all CSS/JS embedded)
├── rocketlane-logo.webp         # Logo image
├── Tier 1 + Propel X/           # Images for Tier 1 & PropelX leaders
│   ├── [Leader Name] - Cover.jpg
│   └── [First Name] - Foreword.jpg
└── Tier 2 /                     # Images for Tier 2 leaders
    ├── [Leader Name] - Cover.jpg
    └── [First Name] - Foreword.jpg
```

## Quick Start

### Local Development

1. Clone the repository
```bash
git clone https://github.com/[your-org]/services-led-landing.git
cd services-led-landing
```

2. Serve locally
```bash
# Using Python
python -m http.server 8000

# Using Node.js http-server
npx http-server
```

3. Open browser
```
http://localhost:8000
```

### Deployment

#### GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Enable GitHub Pages from main branch
4. Site will be live at `https://[username].github.io/services-led-landing/`

#### Web Server
- Upload files to your web server
- Ensure folder structure matches local setup
- Image paths use relative references (portable)

## Data

- **20 Leaders** - TSIA Tier 1 (verified LinkedIn profiles)
- **40 Leaders** - TSIA Tier 2 (verified LinkedIn profiles)
- **10 Leaders** - PropelX (LinkedIn profiles)

All LinkedIn URLs have been verified and corrected to match actual profiles.

## Design & Technology

- **HTML5** - Semantic markup
- **CSS3** - Gradients, animations, 3D transforms, responsive grid
- **Vanilla JavaScript** - Search, filter, and modal functionality
- **Typography** - Geist font family
- **Colors** - Rocketlane brand palette

### Key Sections

1. **Hero Section** - Logo, title, statistics
2. **Search & Filter** - Category-based filtering
3. **Leader Grid** - 70 interactive cards with book mockups
4. **Modal Detail View** - Full profile with images and LinkedIn link
5. **Collection Section** - Summary and call-to-action

## Features Breakdown

### Search
- Real-time search by leader name or company
- Filters across all categories

### Filter
- All Leaders (70)
- TSIA Tier 1 (20)
- TSIA Tier 2 (40)
- PropelX (10)

### Card Interaction
- Click book image to open full profile
- LinkedIn icon for direct profile access
- Hover animations for engagement
- Category badges for quick identification

### Modal Details
- 3D book mockup
- Book cover image
- Foreword page
- Leader information (name, company, title, category)
- LinkedIn profile link

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Image Requirements

For new leaders, provide:
- `[Full Name] - Cover.jpg` (book cover image)
- `[First Name] - Foreword.jpg` (foreword/bio page)

## Customization

### Colors
Edit CSS variables in the `<style>` section:
```css
--rl-blue: #1E5AB8
--rl-purple: #7C3AED
--rl-accent: #FF6B35
```

### Typography
Font imported from Google Fonts (Geist). Can be changed in the font-family property.

### Grid Layout
Responsive grid automatically adjusts from 1 column (mobile) to 3-4 columns (desktop).

## Maintenance

### Adding New Leaders
1. Add entry to `leadersData` array in JavaScript section
2. Add images to appropriate folder:
   - Tier 1/PropelX: `Tier 1 + Propel X/`
   - Tier 2: `Tier 2 /`
3. Verify LinkedIn URL format
4. Test search and filter

### Updating LinkedIn URLs
All URLs are centralized in the JavaScript `leadersData` array. Update directly and push changes.

## Performance

- Single HTML file (no build process needed)
- Embedded CSS/JS (no external requests)
- Optimized images (JPG format)
- Responsive lazy loading of images

## License

© 2026 Rocketlane. All rights reserved.

## Contact

For questions or support, contact your project lead.

---

**Version:** 1.0  
**Last Updated:** October 14, 2026  
**Status:** ✅ Production Ready
