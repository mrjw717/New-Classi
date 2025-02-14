# File List

This document provides a list of all files in the project, organized by their directory structure.

## Project Structure

```
New-Classi/
├── .bolt/
│   ├── config.json
│   └── prompt
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── src/
│   ├── App.tsx
│   ├── components/
│   │   ├── Browse/
│   │   │   ├── BrowseSection.tsx
│   │   │   ├── FilterSidebar.tsx
│   │   │   ├── ItemsDisplay/
│   │   │   │   ├── Gallery.tsx
│   │   │   │   └── ListingCard.tsx
│   │   │   ├── ListingCard.tsx
│   │   │   ├── Sidebar/
│   │   │   │   ├── ConditionFilter.tsx
│   │   │   │   ├── DistanceFilter.tsx
│   │   │   │   ├── FilterSidebar.tsx
│   │   │   │   ├── PriceRangeFilter.tsx
│   │   │   │   └── SubcategoryFilter.tsx
│   │   │   ├── Topbar/
│   │   │   │   ├── BrowseTopbar.tsx
│   │   │   │   ├── LocationDropdown.tsx
│   │   │   │   ├── SearchLocationBar.tsx
│   │   │   │   └── ViewTypeControls.tsx
│   │   │   └── index.ts
│   │   ├── Fields/
│   │   │   ├── CategorySpecificFields.tsx
│   │   │   ├── ConditionField.tsx
│   │   │   ├── DescriptionField.tsx
│   │   │   ├── ImageUpload.tsx
│   │   │   ├── LocationField.tsx
│   │   │   ├── PriceField.tsx
│   │   │   └── TitleField.tsx
│   │   ├── Home/
│   │   │   ├── CategorySelector.tsx
│   │   │   └── HeroSection.tsx
│   │   ├── Layout/
│   │   │   └── MainLayout.tsx
│   │   ├── common/
│   │   │   ├── Footer.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Dropdown.tsx
│   │   │   ├── PopupModal.tsx
│   │   │   └── UserArea.tsx
│   │   ├── config/
│   │   │   ├── eslint.config.js
│   │   │   ├── postcss.config.js
│   │   │   ├── tailwind.config.js
│   │   │   ├── tsconfig.app.json
│   │   │   ├── tsconfig.json
│   │   │   └── tsconfig.node.json
│   │   ├── lib/
│   │   │   └── supabase.ts
│   │   ├── pages/
│   │   │   ├── Admin/
│   │   │   │   ├── AdminDashboard.tsx
│   │   │   │   ├── Analytics.tsx
│   │   │   │   ├── Categories.tsx
│   │   │   │   ├── Listings.tsx
│   │   │   │   ├── PaymentManagement.tsx
│   │   │   │   ├── Users.tsx
│   │   │   │   └── components/
│   │   │   │   │   ├── AdminLayout.tsx
│   │   │   │   │   ├── AdminSidebar.tsx
│   │   │   │   │   ├── AdminTopbar.tsx
│   │   │   │   │   ├── AnalyticsSummary.tsx
│   │   │   │   │   ├── BackButton.tsx
│   │   │   │   │   └── DeleteConfirmationModal.tsx
│   │   │   ├── CreateListing.tsx
│   │   │   ├── Home.tsx
│   │   │   ├── ListingDetail.tsx
│   │   │   ├── Profile.tsx
│   │   │   ├── Search.tsx
│   │   │   └── StaticPages/
│   │   │   │   ├── About/
│   │   │   │   │   ├── AboutUs.tsx
│   │   │   │   │   ├── Careers.tsx
│   │   │   │   │   └── Press.tsx
│   │   │   │   ├── Legal/
│   │   │   │   │   ├── CookiePolicy.tsx
│   │   │   │   │   ├── PrivacyPolicy.tsx
│   │   │   │   │   └── TermsOfService.tsx
│   │   │   │   └── Support/
│   │   │   │   │   ├── CommunityGuidelines.tsx
│   │   │   │   │   ├── HelpCenter.tsx
│   │   │   │   │   └── SafetyCenter.tsx
│   │   ├── theme/
│   │   │   ├── buttons.ts
│   │   │   ├── categoryTheme.ts
│   │   │   ├── colors.ts
│   │   │   ├── fonts.ts
│   │   │   ├── forms.ts
│   │   │   ├── icons.ts
│   │   │   ├── popupModalTheme.ts
│   │   │   ├── shadowsTheme.ts
│   │   │   └── theme.ts
│   │   └── types/
│   │   │   └── database.ts
│   │   └── vite-env.d.ts
│   ├── index.css
│   ├── lib/
│   │   └── supabase.ts
│   ├── main.tsx
│   ├── pages/
│   │   ├── Admin/
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── Analytics.tsx
│   │   │   ├── Categories.tsx
│   │   │   ├── Listings.tsx
│   │   │   ├── PaymentManagement.tsx
│   │   │   ├── Users.tsx
│   │   │   └── components/
│   │   │   │   ├── AdminLayout.tsx
│   │   │   │   ├── AdminSidebar.tsx
│   │   │   │   ├── AdminTopbar.tsx
│   │   │   │   ├── AnalyticsSummary.tsx
│   │   │   │   ├── BackButton.tsx
│   │   │   │   └── DeleteConfirmationModal.tsx
│   │   ├── theme/
│   │   │   ├── buttons.ts
│   │   │   ├── categoryTheme.ts
│   │   │   ├── colors.ts
│   │   │   ├── fonts.ts
│   │   │   ├── forms.ts
│   │   │   ├── icons.ts
│   │   │   ├── popupModalTheme.ts
│   │   │   ├── shadowsTheme.ts
│   │   │   └── theme.ts
│   │   └── types/
│   │   │   └── database.ts
│   │   └── vite-env.d.ts
│   ├── theme/
│   │   ├── buttons.ts
│   │   ├── categoryTheme.ts
│   │   ├── colors.ts
│   │   ├── fonts.ts
│   │   ├── forms.ts
│   │   ├── icons.ts
│   │   ├── popupModalTheme.ts
│   │   ├── shadowsTheme.ts
│   │   └── theme.ts
│   └── types/
│   │   └── database.ts
│   └── vite-env.d.ts
├── supabase/
│   └── migrations/
│       └── 20250702000000_initial_schema.sql
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.node.json
└── vite.config.ts
```
