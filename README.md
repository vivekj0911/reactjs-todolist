# Todo App

A modern, responsive Todo application built with React, Vite, and Material-UI. This app fetches and displays todos from the DummyJSON API with a clean, intuitive interface.

## Features

- Fetch and display todos from external API
- View detailed information for each todo
- Responsive Material-UI components
- Loading states with skeleton screens
- Clean, modular component architecture

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library
- **Emotion** - CSS-in-JS styling
- **DummyJSON API** - Mock data source

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
todo-app/
├── src/
│   ├── components/
│   │   ├── TodoItem.jsx      # Individual todo card component
│   │   └── TodoDetail.jsx    # Todo detail dialog component
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   ├── index.css             # Global styles
│   └── styles.module.css     # CSS modules
├── public/
├── index.html
├── package.json
└── vite.config.js
```

## Components

### App.jsx
Main component that manages application state and fetches todos from the API.

### TodoItem.jsx
Displays individual todo items as Material-UI cards with a details button.

### TodoDetail.jsx
Modal dialog that shows detailed information about a selected todo.

## API

This app uses the [DummyJSON API](https://dummyjson.com/) for fetching todo data:
- `GET https://dummyjson.com/todos` - Fetch all todos
- `GET https://dummyjson.com/todos/:id` - Fetch specific todo details

## License

This project is open source and available under the MIT License.
