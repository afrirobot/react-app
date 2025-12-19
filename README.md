# Afrirobot React Application

This is the React conversion of the Afrirobot website. All functionality and styling have been preserved exactly as in the original HTML/CSS/JavaScript version.

## Features

- ✅ Complete React component structure
- ✅ All original CSS styles preserved
- ✅ JavaScript logic converted to React hooks (useState, useEffect)
- ✅ All DOM event listeners converted to React event handlers
- ✅ Identical visual style and layout
- ✅ All modals and animations working
- ✅ Form submissions with Google Sheets integration
- ✅ Portfolio showcase with image modals
- ✅ Skills animation with Intersection Observer
- ✅ Scroll reveal animations
- ✅ Typed.js integration for animated text

## Installation

1. Navigate to the react-app directory:
```bash
cd react-app
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## Building for Production

To create a production build:
```bash
npm run build
```

## Project Structure

```
react-app/
├── public/
│   ├── index.html
│   ├── logos/          # Client logos
│   ├── graphics design/ # Portfolio images
│   ├── video edit/      # Video thumbnails
│   ├── tech dev/        # Tech project images
│   └── cf.gif          # About section GIF
├── src/
│   ├── components/      # React components
│   │   ├── Header.js
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Skills.js
│   │   ├── Portfolio.js
│   │   ├── Contact.js
│   │   ├── Tools.js
│   │   ├── Footer.js
│   │   ├── OrderModal.js
│   │   ├── PortfolioShowcaseModal.js
│   │   ├── ImageModal.js
│   │   ├── ServiceSelectionModal.js
│   │   ├── BackgroundAnimation.js
│   │   └── BlurOverlay.js
│   ├── config/
│   │   └── servicePricing.js  # Service configuration
│   ├── App.js          # Main app component
│   ├── index.js        # Entry point
│   └── style.css       # Original CSS (unchanged)
└── package.json
```

## Key Components

### App.js
Main application component that manages state for all modals and coordinates between components.

### Components
Each section from the original HTML has been converted to a React component:
- **Header**: Navigation with scroll detection and active section highlighting
- **Home**: Hero section with Typed.js animation
- **About**: About section with image animation
- **Services**: Service cards with order modal integration
- **Skills**: Animated skill bars with Intersection Observer
- **Portfolio**: Portfolio categories with showcase modal
- **Contact**: Contact form with Google Sheets integration
- **Tools**: Client logos with infinite scroll

### Modals
- **OrderModal**: Complex order form with dynamic pricing logic
- **PortfolioShowcaseModal**: Portfolio showcase with category switching
- **ImageModal**: Full-size image viewer
- **ServiceSelectionModal**: Service selection for home page

## Dependencies

- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `typed.js`: ^2.0.16 (for animated typing effect)
- `scrollreveal`: ^4.0.9 (for scroll animations)

## Notes

- All CSS has been preserved exactly as-is from the original
- All images and assets are in the `public/` directory
- Google Sheets script URLs are preserved from the original
- All functionality matches the original implementation
- The app uses React hooks for state management instead of vanilla JavaScript

## Browser Support

Supports all modern browsers. Uses Create React App defaults for browser compatibility.

