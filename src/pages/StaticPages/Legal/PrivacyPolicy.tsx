import React from 'react';
    import Sidebar from '../../../components/common/Sidebar';
    import { theme } from '../../../theme/theme';

    const PrivacyPolicy: React.FC = () => {
      return (
        <div className="py-8" style={{ background: theme.colors.snowMistLightGradient }}>
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-extrabold" style={{ color: theme.colors.nightGrey }}>
              Privacy Policy
            </h1>
            <p className="text-lg" style={{ color: theme.colors.ashGrey, marginTop: '10px' }}>
              Learn about our privacy practices.
            </p>
          </div>
          <div className="container mx-auto flex py-8">
            <div className="w-1/4">
              <Sidebar>
                <h3 style={{ color: theme.colors.nightGrey }}>More Information</h3>
                <p style={{ color: theme.colors.ashGrey }}>Learn more about how we protect your privacy.</p>
              </Sidebar>
            </div>
            <div className="w-3/4 pl-4">
              <p style={{ color: theme.colors.ashGrey }}>Your privacy is important to us...</p>
            </div>
          </div>
        </div>
      );
    };

    export default PrivacyPolicy;
