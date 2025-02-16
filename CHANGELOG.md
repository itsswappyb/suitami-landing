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
- Added "Powered by" section with Eliza and Sui logos above How it Works section
- Added hover tooltips to orbit icons:
  - Inner orbit: Agent type labels (Telegram/X/Discord Agent)
  - Outer orbit: Engagement labels (Telegram/X/Discord Engagement)
- Added descriptive labels below orbits:
  - Inner orbit: "Community Management"
  - Outer orbit: "Community Engagement"
- Added demo video showcasing Aiden's capabilities
- Added roadmap section with three stages:
  - Stage 1: Mantle Hackathon MVP
  - Stage 2: AIaaS unlocked by $AIDEN holding
  - Stage 3: AI-Cloud Platform
  - Enhanced with hover effects, glowing connectors, and symmetric layout

### Changed
- Removed X social media link from header
- Removed Suiside squad footer
- Removed Sui logo from "Powered by" section
- Rebranded from Suitami to Aiden
- Updated center logo with new Aiden design
- Updated Twitter icon to use new X branding
- Enhanced header styling with backdrop blur and border
- Improved logo sizing and spacing in header
- Significantly increased size of Eliza and Sui logos for better prominence
- Refined X icon container structure for improved alignment
- Updated background to use a three-color gradient (#011829 → #030f1c → black)
- Enhanced Launch App buttons for better visibility and interaction:
  - Improved text readability with semibold weight and better tracking
  - Added subtle border and refined hover effects
  - Optimized button padding and shadow effects
  - Adjusted color contrast for better visual hierarchy
- Increased orbit sizes by 45% for better visual impact
- Adjusted number of orbiting bot icons (2 for Telegram, 3 for X, 1 for Discord)
- Fine-tuned bot icon colors and opacities for visual harmony
- Increased inner orbit radius by additional 10% (from 84px to 92px)
- Improved mini-orbit centering and increased radius by 10% (from 41px to 45px)
- Enhanced heading gradients with three-color transitions (sky-400 → blue-500 → sky-600)
- Added descriptive subtitle text under "How it Works" section
- Increased Eliza and Sui logos size by 5x (from 64px to 320px height)
- Optimized spacing throughout the layout:
  - Reduced space between Launch App button and "Powered by" section
  - Minimized margins around logos for tighter layout
  - Positioned "Powered by" text directly above logos
  - Added more spacing between orbiting circles and "How it Works" section
  - Adjusted vertical rhythm for better visual flow
- Enhanced center logo in orbits:
  - Increased size by 50% (from 128px to 192px)
  - Reduced opacity by 35% (from 50% to 25%) for subtler background presence
- Improved hover interactions:
  - Added hover effect to make center logo fully transparent when showing "Community Management" text
  - Reduced hover areas for social media icons to prevent accidental triggers
  - Added ring-shaped hover area between orbits for "Community Engagement" text
  - Positioned hover texts strategically for better readability
- Increased Eliza logo size to 384px height and adjusted position
- Simplified section structure by removing redundant "How it Works" title
- Added separate titles and descriptions for architecture and video sections

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