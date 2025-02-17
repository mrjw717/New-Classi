import React from 'react';
    import Home from './pages/Home';
    import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import AboutUs from './pages/StaticPages/About/AboutUs';
    import Careers from './pages/StaticPages/About/Careers';
    import Press from './pages/StaticPages/About/Press';
    import TermsOfService from './pages/StaticPages/Legal/TermsOfService';
    import PrivacyPolicy from './pages/StaticPages/Legal/PrivacyPolicy';
    import CookiePolicy from './pages/StaticPages/Legal/CookiePolicy';
    import HelpCenter from './pages/StaticPages/Support/HelpCenter';
    import SafetyCenter from './pages/StaticPages/Support/SafetyCenter';
    import CommunityGuidelines from './pages/StaticPages/Support/CommunityGuidelines';
    import MainLayout from './components/Layout/MainLayout';
    import ListingDetail from './pages/ListingDetail';
    import CreateListing from './pages/CreateListing';
    import Profile from './pages/Profile';
    import Search from './pages/Search';

    function App() {
      return (
        <BrowserRouter>
          <MainLayout appName="Classifinds">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/press" element={<Press />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/safety-center" element={<SafetyCenter />} />
              <Route path="/community-guidelines" element={<CommunityGuidelines />} />
              <Route path="/listing/:listingId" element={<ListingDetail />} />
              <Route path="/create-listing" element={<CreateListing />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      );
    }

    export default App;
