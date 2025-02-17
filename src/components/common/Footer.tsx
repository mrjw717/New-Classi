import React from 'react';
    import { Link } from 'react-router-dom';
    import { theme } from '../../theme/theme';
    import { Facebook, Twitter, Instagram } from 'lucide-react';

    const Footer: React.FC = () => {
      return (
        <footer className="py-8" style={{ backgroundColor: theme.colors.snowMist }}>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Column 1: About */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.nightGrey }}>About</h3>
              <ul>
                <li><Link to="/about-us" className="hover:text-gray-300" style={{ color: theme.colors.ashGrey }}>About Us</Link></li>
                <li><Link to="/careers" className="hover:text-gray-300" style={{ color: theme.colors.ashGrey }}>Careers</Link></li>
                <li><Link to="/press" className="hover:text-gray-300" style={{ color: theme.colors.ashGrey }}>Press</Link></li>
              </ul>
            </div>

            {/* Column 2: Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.nightGrey }}>Legal</h3>
              <ul>
                <li><Link to="/terms-of-service" className="hover:text-gray-300" style={{ color: theme.colors.ashGrey }}>Terms of Service</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-gray-300" style={{ color: theme.colors.ashGrey }}>Privacy Policy</Link></li>
                <li><Link to="/cookie-policy" className="hover:text-gray-300" style={{ color: theme.colors.ashGrey }}>Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Column 3: Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.nightGrey }}>Support</h3>
              <ul>
                <li><Link to="/help-center" className="hover:text-gray-300" style={{ color: theme.colors.ashGrey }}>Help Center</Link></li>
                <li><Link to="/safety-center" className="hover:text-gray-300" style={{ color: theme.colors.ashGrey }}>Safety Center</Link></li>
                <li><Link to="/community-guidelines" className="hover:text-gray-300" style={{ color: theme.colors.ashGrey }}>Community Guidelines</Link></li>
              </ul>
            </div>

            {/* Column 4: Social & Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: theme.colors.nightGrey }}>Stay Connected</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="hover:text-gray-300" style={{ color: theme.colors.ashGrey }}><Facebook size={24} /></a>
                <a href="#" className="hover:text-gray-300" style={{ color: theme.colors.ashGrey }}><Twitter size={24} /></a>
                <a href="#" className="hover:text-gray-300" style={{ color: theme.colors.ashGrey }}><Instagram size={24} /></a>
              </div>
              <form>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-700 text-white rounded-md py-2 px-4 w-full mb-2"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md py-2 px-4 w-full"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="container mx-auto text-center mt-8" style={{ color: theme.colors.ashGrey }}>
            <p>&copy; {new Date().getFullYear()} Classifinds. All rights reserved.</p>
          </div>
        </footer>
      );
    };

    export default Footer;
