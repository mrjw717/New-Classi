# Theme Documentation

This document provides detailed information about the theme configuration used in the application.

## Overview

The application uses a theme configuration to maintain a consistent look and feel. The theme is defined in `src/theme/theme.ts` and includes:

- **colors**: Color palette.
- **fonts**: Font styles.
- **buttons**: Button styles.
- **forms**: Form styles.
- **icons**: Icon styles.
- **shadows**: Shadow styles.
- **categoryTheme**: Category-specific color assignments.

## Theme Files

### 1. colors.ts

- **Description**: Defines the color palette for the application.
- **Exports**:
  - `colors`: An object containing color definitions.
- **Color Definitions**:
  - `primary`: Primary blue color.
  - `primaryGradient`: Gradient from primary blue to a darker blue.
  - `secondary`: Secondary teal color.
  - `secondaryGradient`: Gradient from secondary teal to a darker teal.
  - `gray`: Gray color.
  - `grayGradient`: Gradient from gray to a darker gray.
  - `indigo`: Royal indigo color.
  - `indigoGradient`: Gradient from indigo to a darker indigo.
  - `red`: Fiery red color.
  - `redGradient`: Gradient from red to a darker red.
  - `green`: Emerald bloom color.
  - `greenGradient`: Gradient from green to a darker green.
  - `yellow`: Golden sun color.
  - `yellowGradient`: Gradient from yellow to a darker yellow.
  - `violet`: Violet sky color.
  - `violetGradient`: Gradient from violet to a darker violet.
  - `snowMist`: Snow mist color.
  - `snowMistGradient`: Gradient from snow mist to a darker snow mist.
  - `ashGrey`: Ash grey color.
  - `ashGreyGradient`: Gradient from ash grey to a darker ash grey.
  - `nightGrey`: Night grey color.
  - `nightGreyGradient`: Gradient from night grey to a darker night grey.
  - `locationButtonGradient`: Gradient for location button.
  - `locationButtonLightGradient`: Light gradient for location button.
  - `orange`: Burnt orange color.
  - `orangeGradient`: Gradient from orange to a darker orange.
  - `orangeLightGradient`: Light gradient for orange.

### 2. fonts.ts

- **Description**: Defines the font styles for the application.
- **Exports**:
  - `fonts`: An object containing font definitions.
- **Font Definitions**:
  - `primary`: Primary font (Arial, sans-serif).
  - `secondary`: Secondary font (Open Sans, sans-serif).

### 3. buttons.ts

- **Description**: Defines the button styles for the application.
- **Exports**:
  - `buttons`: An object containing button style definitions.
- **Button Style Definitions**:
  - `primaryActive`: Style for active primary buttons.
  - `primaryInactive`: Style for inactive primary buttons.
  - `locationActive`: Style for active location buttons.
  - `locationInactive`: Style for inactive location buttons.
  - `listActive`: Style for active list buttons.
  - `listInactive`: Style for inactive list buttons.
  - `gridActive`: Style for active grid buttons.
  - `gridInactive`: Style for inactive grid buttons.
  - `violet`: Style for violet buttons.
  - `secondary`: Style for secondary buttons.
  - `gray`: Style for gray buttons.
  - `snowMist`: Style for snow mist buttons.

### 4. forms.ts

- **Description**: Defines the form styles for the application.
- **Exports**:
  - `forms`: An object containing form style definitions.
- **Form Style Definitions**:
  - `input`: Style for input fields.
  - `label`: Style for form labels.

### 5. icons.ts

- **Description**: Defines the icon styles for the application.
- **Exports**:
  - `icons`: An object containing icon style definitions.
- **Icon Style Definitions**:
  - `size`: Default icon size.
  - `color`: Default icon color.

### 6. shadowsTheme.ts

- **Description**: Defines the shadow styles for the application.
- **Exports**:
  - `shadowsTheme`: An object containing shadow style definitions.
- **Shadow Style Definitions**:
  - `soft`: Soft shadow.
  - `medium`: Medium shadow.
  - `large`: Large shadow.
  - `inner`: Inner shadow.
  - `pageDivider`: Style for the page divider.

### 7. categoryTheme.ts

- **Description**: Defines the color scheme for each category.
- **Exports**:
  - `categoryTheme`: An object containing category color definitions.
- **Category Color Definitions**:
  - `Vehicles`: Teal color.
  - `RealEstate`: Blue color.
  - `Electronics`: Teal color.
  - `Furniture`: Gray color.
  - `Jobs`: Royal indigo color.
  - `Services`: Fiery red color.
  - `Clothing`: Emerald bloom color.
  - `Books`: Golden sun color.
  - `Announcements`: Violet sky color.
  - `FREE`: Lime green color.
  - `FitnessEquipment`: Burnt orange color.
  - `HomeAndGarden`: Light green color.
  - `HuntingAndFishing`: Mustard color.
  - `Industrial`: Steel blue color.
  - `Livestock`: Seafoam green color.
  - `MusicalInstruments`: Lavender color.
  - `OutdoorsAndSporting`: Forest green color.
  - `RecreationalVehicles`: Amber color.
  - `Tickets`: Raspberry color.
  - `Toys`: Hot pink color.
  - `WaterSports`: Sky blue color.
  - `Weddings`: Periwinkle color.
  - `Rentals`: Sienna color.
