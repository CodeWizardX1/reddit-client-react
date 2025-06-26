# Reddit Minimal

A clean, minimalist Reddit client built with React and Redux Toolkit. Browse Reddit posts with a simplified, modern interface that focuses on readability and ease of use.

![Reddit Minimal Screenshot](public/logo192.png)

## Features

- 📱 **Mobile Responsive** - Optimized for all screen sizes (desktop, tablet, mobile)
- 🎨 **Clean UI** - Minimalist design focusing on content
- 🔍 **Search Functionality** - Search bar in header (UI ready)
- 📖 **Post Details** - Click any post to view full details and comments
- 🏠 **Easy Navigation** - Click logo to return to homepage
- 💬 **Comment System** - View comments with proper text wrapping
- ⚡ **Fast Loading** - Built with performance in mind

## Tech Stack

- **React** - Frontend framework
- **Redux Toolkit** - State management
- **React Router** - Navigation and routing
- **CSS3** - Responsive styling with mobile breakpoints
- **React Icons** - Beautiful iconography

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   cd reddit-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

### `npm start`
Runs the app in development mode. The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. The build is minified and optimized for deployment.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header with logo and search
│   ├── Loading.js      # Loading spinner component
│   └── Error.js        # Error display component
├── features/           # Feature-based modules
│   ├── posts/          # Post-related components and logic
│   ├── comments/       # Comment system
│   ├── subreddits/     # Sidebar with subreddit list
│   └── voting/         # Vote button components
└── app/                # Redux store configuration
```

## Responsive Design

The app includes three mobile breakpoints for optimal viewing:

- **699px and below** - Tablet/large mobile (sidebar hidden)
- **425px and below** - Small mobile devices
- **320px and below** - Extra small mobile devices

## Deployment

This app is ready for deployment on platforms like:

- **Netlify** - Drag and drop the `build` folder
- **Vercel** - Connect your GitHub repo
- **GitHub Pages** - Use the built-in deployment action

### Build for Production

```bash
npm run build
```

The `build` folder will contain the optimized production files.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built as part of a learning project
- Inspired by Reddit's clean, content-focused design
- Created with Create React App as the foundation
