# 🎮 eSports Portal - HTML Template Structure

A comprehensive eSports portal HTML template designed for eSports teams, tournaments, gaming leagues, and streaming platforms.

## 📁 Project Structure

```
eSports Portal/
├── css/
│   └── style.css          # Main stylesheet with modern design
├── js/
│   └── main.js            # JavaScript for interactivity
├── index.html             # Home Page 1 - General eSports Landing
├── index2.html            # Home Page 2 - Niche-Specific (Mobile/FPS/Battle Royale)
├── about.html             # About Us Page
├── services.html          # Tournaments & Gaming Services
├── service-details.html   # Tournament/Service Details Page
├── blog.html              # News/Blog Page
├── blog-details.html      # Blog Details Page
├── contact.html           # Contact Us Page
├── tournaments.html       # Tournaments Listing Page
├── teams.html             # Teams Page
├── team-details.html      # Team Details Page
├── players.html           # Players Page
├── player-profile.html    # Player Profile Page
├── leaderboard.html       # Leaderboard Page
├── match-schedule.html    # Match Schedule Page
├── match-details.html     # Match Details Page
├── streaming.html         # Streaming Page
├── gallery.html           # Gallery Page
├── shop.html              # Shop/Merch Page
├── login.html             # Login Page
├── register.html          # Register Page
└── README.md              # This file
```

## 🎨 Features

### Global Layout & Core UI
- ✅ Responsive header with navigation menu
- ✅ "Join Tournament" button
- ✅ Login/Register buttons
- ✅ Hero banner with countdown timer
- ✅ Footer with quick navigation, social media links, and newsletter signup

### Home Page 1 - General eSports Landing
- ✅ Featured Tournament Slider
- ✅ Trending Games Section
- ✅ Latest Match Results
- ✅ Upcoming Tournament Cards
- ✅ Top Players/Teams Showcase
- ✅ Livestream Section
- ✅ Leaderboard Preview
- ✅ Sponsors/Partners Section
- ✅ News/Blog Highlights
- ✅ CTA Banner

### Home Page 2 - Niche-Specific Portal
- ✅ Niche Game Hero Area
- ✅ Top Game Modes (Cluster Cards)
- ✅ Pro Teams Showcase
- ✅ Tournament Prize Pool Display
- ✅ Gaming Events Calendar
- ✅ Highlight Reels/Gameplay Videos
- ✅ Fan Community Section
- ✅ CTA Section

### About Us Page
- ✅ About the Organization
- ✅ Mission & Vision
- ✅ History Timeline
- ✅ Team Members/Admins
- ✅ Community Testimonials
- ✅ Awards & Achievements
- ✅ Partner Organizations

### Services Page (Tournaments & Gaming Services)
- ✅ Active Tournaments
- ✅ Training Programs/Bootcamps
- ✅ Coaching Services
- ✅ Game Servers/Rental
- ✅ Premium Membership Plans
- ✅ Streaming/Media Services

### Service Details Page
- ✅ Full Tournament Details
- ✅ Game Rules & Format
- ✅ Prize Pool Breakdown
- ✅ Team/Player Eligibility
- ✅ FAQs
- ✅ Registration Steps
- ✅ Entry Fee/Ticket Options
- ✅ Match Schedule
- ✅ Team Brackets Design
- ✅ CTA Buttons

### Blog Page
- ✅ Blog Grid/List Layout
- ✅ Search Bar
- ✅ Category Filters (Tournaments, Games, Updates, Pro Tips)
- ✅ Sidebar: Recent Articles, Tags
- ✅ Pagination

### Blog Details Page
- ✅ Featured Game Image
- ✅ Title + Content
- ✅ eSports Analysis/Breakdown
- ✅ Author Info
- ✅ Tags + Categories
- ✅ Related Posts
- ✅ Sidebar with Trending Topics

### Contact Us Page
- ✅ Contact Form
- ✅ Venue Map (placeholder)
- ✅ Support Email & Contact Number
- ✅ eSports Admin/Team Queries
- ✅ Social Links (Discord, Twitch, YouTube, Instagram)
- ✅ FAQ Quick Links

### Additional eSports Modules

#### Teams Page
- ✅ Team listings with filters
- ✅ Team cards with stats
- ✅ Game-specific filters

#### Team Details Page
- ✅ Players lineup
- ✅ Recent matches
- ✅ Team statistics
- ✅ Match history

#### Players Page
- ✅ Player listings
- ✅ Player cards with stats
- ✅ Game-specific filters

#### Player Profile Page
- ✅ Player statistics
- ✅ Recent matches
- ✅ Achievements
- ✅ Performance metrics

#### Leaderboard Page
- ✅ Rankings (Teams/Players)
- ✅ Points display
- ✅ Win rate statistics
- ✅ Game filters

#### Match Schedule Page
- ✅ Today's matches
- ✅ Upcoming matches
- ✅ Calendar view (placeholder)
- ✅ Live match indicators

#### Match Details Page
- ✅ Live score display
- ✅ Match statistics
- ✅ Player performance
- ✅ Match timeline

#### Streaming Page
- ✅ Featured live stream
- ✅ Other live streams
- ✅ Platform links (Twitch, YouTube)
- ✅ Viewer counts

#### Gallery Page
- ✅ Game images & clips
- ✅ Highlights
- ✅ Video embeds
- ✅ Category filters

#### Shop Page
- ✅ Gaming merchandise
- ✅ Product grid
- ✅ Categories (Apparel, Gear, Accessories, Collectibles)
- ✅ Add to cart buttons

#### Login/Register Pages
- ✅ Login form with remember me
- ✅ Registration form
- ✅ Social login options (Google, Discord)
- ✅ Forgot password link

## 🎨 Design Features

### Color Scheme
- Primary Color: `#00ff88` (Green)
- Secondary Color: `#0099ff` (Blue)
- Dark Background: `#0a0e27`
- Accent Colors: Red (`#ff3366`), Purple (`#9d4edd`)
- Modern gradient effects

### Typography
- Clean, modern font stack
- Responsive text sizing
- Good contrast ratios

### Responsive Design
- Mobile-first approach
- Grid layouts that adapt to screen size
- Touch-friendly navigation
- Responsive images and videos

## 🚀 JavaScript Features

- Countdown timer functionality
- Tournament slider
- Mobile menu toggle
- Smooth scroll
- Form validation
- Modal handler
- Search functionality
- Lazy loading images

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## 🔧 Customization

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #00ff88;
    --secondary-color: #0099ff;
    /* ... */
}
```

### Content
All content is in HTML files and can be easily modified.

### Images
Replace placeholder images with your own game/team images.

## 📝 Notes

- Placeholder images are used throughout (via.placeholder.com)
- YouTube embeds use sample video IDs
- Forms include client-side validation but no backend integration
- All pages are linked and navigation is functional
- Ready for backend integration

## 🎯 Next Steps

1. Replace placeholder images with actual game/team images
2. Integrate with backend API for dynamic content
3. Add payment gateway for tournaments/shop
4. Implement user authentication
5. Add real-time match updates
6. Integrate live streaming APIs
7. Add database for teams/players/tournaments
8. Implement search functionality with backend
9. Add email notifications
10. Set up analytics tracking

## 📄 License

This is a template structure. Customize as needed for your eSports portal project.

---

**Created with ❤️ for the eSports community**

