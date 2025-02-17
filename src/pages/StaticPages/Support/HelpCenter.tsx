import React from 'react';
    import Sidebar from '../../../components/common/Sidebar';
    import { theme } from '../../../theme/theme';

    const HelpCenter: React.FC = () => {
      return (
        <div className="py-8" style={{ background: theme.colors.snowMistLightGradient }}>
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-extrabold" style={{ color: theme.colors.nightGrey }}>
              Help Center
            </h1>
            <p className="text-lg" style={{ color: theme.colors.ashGrey, marginTop: '10px' }}>
              Find answers to common questions.
            </p>
          </div>
          <div className="container mx-auto flex py-8">
            <div className="w-1/4">
              <Sidebar>
                <h3 style={{ color: theme.colors.nightGrey }}>FAQ</h3>
                <ul>
                  <li><a href="#" style={{ color: theme.colors.ashGrey }}>Question 1</a></li>
                  <li><a href="#" style={{ color: theme.colors.ashGrey }}>Question 2</a></li>
                  <li><a href="#" style={{ color: theme.colors.ashGrey }}>Question 3</a></li>
                </ul>
              </Sidebar>
            </div>
            <div className="w-3/4 pl-4">
              <p style={{ color: theme.colors.ashGrey }}>Welcome to our help center...</p>
            </div>
          </div>
        </div>
      );
    };

    export default HelpCenter;
