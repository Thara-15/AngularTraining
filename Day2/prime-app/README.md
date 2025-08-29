# Bug Tracker App

A modern bug tracking application built with Angular 20 and PrimeNG.

## Features

- 🐛 Bug management with status tracking
- 📊 Dashboard with key metrics
- 🔐 User authentication
- 🎨 Modern dark theme UI
- 📱 Responsive design

## Live Demo

Visit the live application: [Bug Tracker App](https://thara-15.github.io/AngularTraining/)

## Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/prime-app.git
cd prime-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

## Deployment

### GitHub Pages (Automatic)

The app is automatically deployed to GitHub Pages via GitHub Actions when you push to the main branch.

### Manual Deployment

1. Build the app for GitHub Pages:
```bash
npm run build:ghpages
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## Project Structure

```
src/
├── app/
│   ├── pages/
│   │   ├── dashboard/     # Dashboard page
│   │   ├── bugs/         # Bugs management page
│   │   └── login/        # Login page
│   ├── app.component.*   # Main app component
│   ├── app.routes.ts     # Routing configuration
│   └── app.config.ts     # App configuration
├── styles.css            # Global styles
└── main.ts              # App entry point
```

## Technologies Used

- **Angular 20** - Frontend framework
- **PrimeNG** - UI component library
- **TypeScript** - Programming language
- **CSS3** - Styling
- **GitHub Pages** - Hosting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
