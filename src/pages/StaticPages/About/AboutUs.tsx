import React from 'react';
    import Sidebar from '../../../components/common/Sidebar';
    import { theme } from '../../../theme/theme';

    const AboutUs: React.FC = () => {
      return (
        <div className="py-8" style={{ background: theme.colors.snowMistLightGradient }}>
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-extrabold" style={{ color: theme.colors.nightGrey }}>
              About Us
            </h1>
            <p className="text-lg" style={{ color: theme.colors.ashGrey, marginTop: '10px' }}>
              Learn more about our company and mission.
            </p>
          </div>
          <div className="container mx-auto flex py-8">
            <div className="w-1/4">
              <Sidebar>
                <h3 style={{ color: theme.colors.nightGrey }}>Related Articles</h3>
                <ul>
                  <li><a href="#" style={{ color: theme.colors.ashGrey }}>Article 1</a></li>
                  <li><a href="#" style={{ color: theme.colors.ashGrey }}>Article 2</a></li>
                  <li><a href="#" style={{ color: theme.colors.ashGrey }}>Article 3</a></li>
                </ul>
              </Sidebar>
            </div>
            <div className="w-3/4 pl-4">
              <p style={{ color: theme.colors.ashGrey }}>Our company was founded with the mission to...</p>
            </div>
          </div>
        </div>
      );
    };

    export default AboutUs;
