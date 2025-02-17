import React from 'react';
    import Sidebar from '../../../components/common/Sidebar';
    import { theme } from '../../../theme/theme';

    const CookiePolicy: React.FC = () => {
      return (
        <div className="py-8" style={{ background: theme.colors.snowMistLightGradient }}>
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-extrabold" style={{ color: theme.colors.nightGrey }}>
              Cookie Policy
            </h1>
            <p className="text-lg" style={{ color: theme.colors.ashGrey, marginTop: '10px' }}>
              Learn about our use of cookies.
            </p>
          </div>
          <div className="container mx-auto flex py-8">
            <div className="w-1/4">
              <Sidebar>
                <h3 style={{ color: theme.colors.nightGrey }}>More Information</h3>
                <p style={{ color: theme.colors.ashGrey }}>Learn more about how we use cookies.</p>
              </Sidebar>
            </div>
            <div className="w-3/4 pl-4">
              <p style={{ color: theme.colors.ashGrey }}>This website uses cookies to enhance your experience...</p>
            </div>
          </div>
        </div>
      );
    };

    export default CookiePolicy;
