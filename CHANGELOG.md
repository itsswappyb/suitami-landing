# Changelog

All notable changes to the Suitami Landing project will be documented in this file.

## [Unreleased]

### Added
- Header section with Suitami logo
- "Powered by" section with Eliza and Sui logos
- Social media integration with X (Twitter) link
- Hero section with animated orbiting social media icons
- "How it Works" section with embedded YouTube video
- Tailwind CSS aspect-ratio plugin for responsive video embedding
- Footer with Suiside squad attribution and skull icon
- Mini-orbits of AI bot icons around each social media icon
- Center Suitami logo with circular frame and subtle opacity

### Changed
- Updated Twitter icon to use new X branding
- Enhanced header styling with backdrop blur and border
- Improved logo sizing and spacing in header
- Significantly increased size of Eliza and Sui logos for better prominence
- Refined X icon container structure for improved alignment
- Updated background to use a three-color gradient (#011829 → #030f1c → black)
- Enhanced Launch App buttons with hover animations, scaling effects, and glowing shadows
- Increased orbit sizes by 45% for better visual impact
- Adjusted number of orbiting bot icons (2 for Telegram, 3 for X, 1 for Discord)
- Fine-tuned bot icon colors and opacities for visual harmony

### Fixed
- Resolved dependency issues with @tailwindcss/aspect-ratio plugin
- Fixed video aspect ratio implementation
- Increased X icon size and improved alignment in header for better visibility
- Improved vertical alignment of X icon with Launch App button
- Refined X icon sizing and positioning for better header alignment
- Streamlined X icon container structure for consistent alignment

### Dependencies Added
- @tailwindcss/aspect-ratio: 0.4.2

### Technical
- Set up Next.js 15.1.6 project
- Configured TailwindCSS with custom animations
- Added responsive design elements
- Implemented gradient text effects
- Cleaned and reinstalled node_modules for dependency resolution 