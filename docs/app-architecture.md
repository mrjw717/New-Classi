# Application Architecture

This document provides an overview of the application's architecture, including its main components and their interactions.

## Overview

The application is built using React, TypeScript, and Tailwind CSS. It follows a component-based architecture, with components organized into functional directories.

## Main Components

### 1. Core Libraries

- **React**: Used for building the user interface.
- **React DOM**: Used for rendering React components in the browser.
- **Vite**: Used as a build tool and development server.
- **Lucide React**: Used for icons.
- **Tailwind CSS**: Used for styling components with utility classes.
- **Framer Motion**: Used for animations.

### 2. Directory Structure

- **src/**: Contains the main source code for the application.
  - **App.tsx**: Main application component.
  - **components/**: Reusable components.
    - **Browse/**: Components related to browsing listings.
    - **Fields/**: Components for form fields.
    - **Home/**: Components for the home page.
    - **Layout/**: Components for layout structure.
    - **common/**: Common components used throughout the application.
  - **config/**: Configuration files for ESLint, PostCSS, Tailwind CSS, and TypeScript.
  - **lib/**: Utility functions and client setup (e.g., Supabase).
  - **pages/**: Page-level components.
    - **Admin/**: Components for the admin dashboard.
    - **StaticPages/**: Components for static pages (About, Legal, Support).
  - **theme/**: Theme configuration files (colors, fonts, buttons, etc.).
  - **types/**: TypeScript type definitions.
  - **vite-env.d.ts**: Vite environment declaration file.
  - **index.css**: Global CSS file with Tailwind CSS directives.
  - **main.tsx**: Entry point for the React application.

### 3. Component Hierarchy

- **App.tsx**
  - **MainLayout.tsx**
    - **Navbar.tsx**
    - **HeroSection.tsx**
    - **CategorySelector.tsx**
    - **BrowseSection.tsx**
      - **BrowseTopbar.tsx**
      - **FilterSidebar.tsx**
        - **DistanceFilter.tsx**
        - **PriceRangeFilter.tsx**
        - **ConditionFilter.tsx**
        - **SubcategoryFilter.tsx**

### 4. Theme Configuration

The application uses a theme configuration to maintain a consistent look and feel. The theme is defined in `src/theme/theme.ts` and includes:

- **colors**: Color palette.
- **fonts**: Font styles.
- **buttons**: Button styles.
- **forms**: Form styles.
- **icons**: Icon styles.
- **shadows**: Shadow styles.
- **categoryTheme**: Category-specific color assignments.

### 5. State Management

The application uses React's built-in state management capabilities (e.g., `useState`) for managing component-level state.

### 6. Data Fetching

The application uses mock data for listings, which are stored in JSON files in the `mock-data` directory.

## Interactions

- Components interact with each other through props and callbacks.
- The `theme` module is used to apply consistent styling across components.
- Event handlers are used to handle user interactions (e.g., button clicks, form submissions).
