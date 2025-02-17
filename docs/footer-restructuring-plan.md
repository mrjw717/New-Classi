# Footer Restructuring Plan

    ## 1. Overview

    This document outlines the plan to restructure the website footer into a four-column layout. The first three columns will contain links to all static pages, organized in the same order as the current site structure. The fourth column will include social media buttons and a newsletter subscription form.

    ## 2. New Footer Layout

    The footer will be divided into four columns:

    -   **Column 1: About**
        -   About Us
        -   Careers
        -   Press
    -   **Column 2: Legal**
        -   Terms of Service
        -   Privacy Policy
        -   Cookie Policy
    -   **Column 3: Support**
        -   Help Center
        -   Safety Center
        -   Community Guidelines
    -   **Column 4: Social & Newsletter**
        -   Social Media Buttons (Facebook, Twitter, Instagram)
        -   Newsletter Subscription Form (Email input and Subscribe button)

    ## 3. Theme Consistency

    -   **Colors**: The footer will use the same color palette as the rest of the website, defined in `src/theme/colors.ts`. Background colors, text colors, and accent colors will be consistent.
    -   **Fonts**: The footer will use the same fonts as the rest of the website, defined in `src/theme/fonts.ts`.
    -   **Styling**: The footer will use Tailwind CSS classes to ensure consistency with the overall website style.
    -   **Integration with Top Navigation Bar**: The footer will complement the top navigation bar by using similar styles and colors. The overall design will ensure a cohesive look and feel.

    ## 4. Page Structure

    Each static page will have the following structure:

    -   **Top Navigation Bar**: The existing top navigation bar (`src/components/common/Navbar.tsx`) will be included on every page.
    -   **Unique Content**: Each page will have unique content specific to its purpose.
        -   **About Us**: Information about the company, its mission, and its history.
            -   Generic placeholder content: "Our company was founded with the mission to..."
        -   **Careers**: Job openings, company culture, and benefits.
            -   Generic placeholder content: "We are always looking for talented individuals to join our team..."
        -   **Press**: Press releases, media coverage, and contact information.
            -   Generic placeholder content: "For press inquiries, please contact..."
        -   **Terms of Service**: Legal terms and conditions for using the website.
            -   Generic placeholder content: "By using this website, you agree to the following terms..."
        -   **Privacy Policy**: Information about data collection, usage, and protection.
            -   Generic placeholder content: "We are committed to protecting your privacy..."
        -   **Cookie Policy**: Information about the use of cookies on the website.
            -   Generic placeholder content: "This website uses cookies to enhance your experience..."
        -   **Help Center**: FAQs, troubleshooting guides, and contact information.
            -   Generic placeholder content: "If you have any questions, please consult our FAQ or contact us..."
        -   **Safety Center**: Tips for staying safe while using the website.
            -   Generic placeholder content: "Your safety is our top priority. Please review these safety tips..."
        -   **Community Guidelines**: Rules and guidelines for community behavior.
            -   Generic placeholder content: "We expect all members of our community to adhere to these guidelines..."
    -   **Dedicated Sidebar**: Each page will have a dedicated sidebar (distinct from the filter sidebar) for additional navigation or related content.
        -   The sidebar will be implemented as a reusable component (`src/components/common/Sidebar.tsx`).
        -   The content of the sidebar will be specific to each page.
            -   Example sidebar content:
                -   Related articles
                -   Contact form
                -   Additional resources
    -   **New Footer**: The restructured four-column footer will be included on every page.

    ## 5. Component Loading

    -   **React States**: React states will be used to manage the content and visibility of components on each page.
    -   **DOM Routing**: React Router will be used to handle navigation between pages.
    -   **`index.ts` File**: The `index.ts` file in each directory will be used to export all components from that directory, making it easier to import them in other parts of the application.
    -   **Dynamic Component Loading**:
        -   The `App.tsx` file will use React Router to dynamically load the correct components for each page based on the URL.
        -   Each static page will be implemented as a separate component in the `src/pages/StaticPages` directory.
        -   The content of each page will be stored in a separate file (e.g., Markdown or JSON) and loaded dynamically when the component is rendered.

    ## 6. Implementation Steps

    1.  **Install React Router**: `npm install react-router-dom`
    2.  **Create Sidebar Component**: Create a new component for the sidebar (`src/components/common/Sidebar.tsx`).
    3.  **Create Footer Component**: Create a new component for the restructured footer (`src/components/common/Footer.tsx`).
    4.  **Update Static Pages**: Update each static page in the `src/pages/StaticPages` directory to include the new footer and sidebar.
    5.  **Implement Routing**: Implement React Router in `App.tsx` to handle navigation between pages.
    6.  **Update `index.ts` Files**: Update the `index.ts` file in each directory to export all components from that directory.
    7.  **Test**: Test the website to ensure that all pages are loading correctly and that the footer and sidebar are displaying as expected.

    ## 7. Approval

    This plan is submitted for review and approval.
