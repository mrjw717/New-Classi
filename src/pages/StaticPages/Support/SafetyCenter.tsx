import React from 'react';
    import Sidebar from '../../../components/common/Sidebar';
    import { theme } from '../../../theme/theme';

    const SafetyCenter: React.FC = () => {
      return (
        <div className="py-8" style={{ background: theme.colors.snowMistLightGradient }}>
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-extrabold" style={{ color: theme.colors.nightGrey }}>
              Safety Center
            </h1>
            <p className="text-lg" style={{ color: theme.colors.ashGrey, marginTop: '10px' }}>
              Learn about staying safe on our platform.
            </p>
          </div>
          <div className="container mx-auto flex py-8">
            <div className="w-1/4">
              <Sidebar>
                <h3 style={{ color: theme.colors.nightGrey }}>Safety Tips</h3>
                <ul>
                  <li><a href="#" style={{ color: theme.colors.ashGrey }}>Tip 1</a></li>
                  <li><a href="#" style={{ color: theme.colors.ashGrey }}>Tip 2</a></li>
                  <li><a href="#" style={{ color: theme.colors.ashGrey }}>Tip 3</a></li>
                </ul>
              </Sidebar>
            </div>
            <div className="w-3/4 pl-4">
              <p style={{ color: theme.colors.ashGrey }}>Your safety is our priority...</p>
            </div>
          </div>
        </div>
      );
    };

    export default SafetyCenter;
