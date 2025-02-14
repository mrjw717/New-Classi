# Data Documentation

This document provides information about the data used in the application, including the structure and source of the data.

## Overview

The application uses mock data for listings, which are stored in JSON files in the `mock-data` directory.

## Data Structure

The data is organized into a main JSON file called `listings-by-category.js`, which imports and combines all the individual category JSON files.

### 1. listings-by-category.js

- **Description**: Main file that combines all category listings.
- **Path**: `mock-data/listings-by-category.js`
- **Imports**:
  - Individual category JSON files (e.g., `vehicles.json`, `real-estate.json`, etc.).
- **Exports**:
  - `listingsByCategory`: An object containing category listings.
- **Data Structure**:

```json
{
  "Vehicles": [
    {
      "id": "vehicle-1",
      "title": "2020 Toyota Camry",
      "description": "Great condition, low mileage",
      "price": 22000,
      "location": "Los Angeles, CA"
    },
    {
      "id": "vehicle-2",
      "title": "2018 Honda Civic",
      "description": "Well-maintained, reliable car",
      "price": 18000,
      "location": "New York, NY"
    }
  ],
  "Real Estate": [
    {
      "id": "real-estate-1",
      "title": "2 Bedroom Apartment",
      "description": "Spacious apartment in downtown area",
      "price": 2500,
      "location": "Chicago, IL"
    },
    {
      "id": "real-estate-2",
      "title": "3 Bedroom House",
      "description": "Beautiful house with a large backyard",
      "price": 350000,
      "location": "Houston, TX"
    }
  ],
  // ... other categories
}
```

### 2. Individual Category JSON Files

- **Description**: JSON files for each category (e.g., `vehicles.json`, `real-estate.json`, etc.).
- **Path**: `mock-data/category-listings/`
- **Data Structure**:

```json
[
  {
    "id": "unique-id-1",
    "title": "Listing Title",
    "description": "Listing Description",
    "price": 100,
    "location": "City, State"
  },
  // ... other listings
]
```

## Usage

The `listingsByCategory` object is used to populate the listings in the application. Each category contains an array of listing objects with the following properties:

- `id`: Unique identifier for the listing.
- `title`: Title of the listing.
- `description`: Description of the listing.
- `price`: Price of the listing.
- `location`: Location of the listing.
