# Components Documentation

This document provides detailed information about the components used in the application.

## Common Components

### 1. Navbar

- **Description**: Navigation bar component.
- **Path**: `src/components/common/Navbar.tsx`
- **Props**:
  - `appName`: The name of the application.
- **Imports**:
  - React
  - LucideIcon
  - theme
  - UserArea
- **Functionality**:
  - Displays the application name and navigation links.
  - Includes the `UserArea` component for user-related actions.

### 2. Footer

- **Description**: Footer component.
- **Path**: `src/components/common/Footer.tsx`
- **Imports**:
  - React
- **Functionality**:
  - Displays the copyright information.

### 3. Dropdown

- **Description**: Generic dropdown component.
- **Path**: `src/components/common/Dropdown.tsx`
- **Props**:
  - `buttonContent`: The content to display in the button.
  - `dropdownContent`: The content to display in the dropdown.
  - `getButtonStyle`: Optional function to apply styles to the button.
- **Imports**:
  - React
  - useState
  - useRef
  - useEffect
- **Functionality**:
  - Toggles the visibility of the dropdown content.
  - Closes the dropdown when clicking outside the component.

### 4. PopupModal

- **Description**: Generic popup modal component.
- **Path**: `src/components/common/PopupModal.tsx`
- **Props**:
  - `isOpen`: A boolean indicating whether the modal is open.
  - `onClose`: A function to close the modal.
  - `children`: The content to display in the modal.
- **Imports**:
  - React
- **Functionality**:
  - Displays a modal with the provided content.
  - Closes the modal when the close button is clicked.

### 5. UserArea

- **Description**: Component for displaying user-related actions.
- **Path**: `src/components/common/UserArea.tsx`
- **Imports**:
  - React
  - Bell
  - User
  - BadgePlus
  - theme
- **Functionality**:
  - Displays a notification icon and a user avatar icon.
  - Includes a "Post Ad" button.

## Home Page Components

### 1. HeroSection

- **Description**: Hero section for the home page.
- **Path**: `src/components/Home/HeroSection.tsx`
- **Imports**:
  - React
  - theme
  - Megaphone
- **Functionality**:
  - Displays the main title and subtext.
  - Includes a "Post an ad" button.

### 2. CategorySelector

- **Description**: Category selection component for the home page.
- **Path**: `src/components/Home/CategorySelector.tsx`
- **Imports**:
  - React
  - useState
  - useRef
  - useEffect
  - theme
  - motion
  - AnimatePresence
  - ChevronDown
  - ChevronUp
- **Functionality**:
  - Displays category cards with icons and names.
  - Allows users to view all categories with a slide-down animation.

## Browse Components

### 1. BrowseSection

- **Description**: Section for browsing listings.
- **Path**: `src/components/Browse/BrowseSection.tsx`
- **Imports**:
  - React
  - BrowseTopbar
  - FilterSidebar
  - theme
- **Functionality**:
  - Displays the browse top bar and filter sidebar.
  - Contains the area for displaying listings.

### 2. BrowseTopbar

- **Description**: Top navigation bar for the browse section.
- **Path**: `src/components/Browse/Topbar/BrowseTopbar.tsx`
- **Imports**:
  - React
  - useState
  - Home
  - Search
  - MapPin
  - List
  - Grid
  - theme
  - SortButton
  - LocationDropdown
- **Functionality**:
  - Displays the logo, search bar, and view type controls.
  - Includes buttons for search, location, sort, list view, and grid view.

### 3. FilterSidebar

- **Description**: Sidebar for filtering listings.
- **Path**: `src/components/Browse/Sidebar/FilterSidebar.tsx`
- **Imports**:
  - React
  - DistanceFilter
  - PriceRangeFilter
  - ConditionFilter
  - SubcategoryFilter
  - theme
- **Functionality**:
  - Displays filters for distance, price range, condition, and subcategory.
