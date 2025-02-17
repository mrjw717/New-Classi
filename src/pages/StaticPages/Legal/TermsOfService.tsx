import React from 'react';
    import Sidebar from '../../../components/common/Sidebar';
    import { theme } from '../../../theme/theme';

    const TermsOfService: React.FC = () => {
      return (
        <div style={{ background: theme.colors.snowMistLightGradient }}>
          <div className="py-8" style={{ background: theme.colors.snowMistLightGradient }}>
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-extrabold" style={{ color: theme.colors.nightGrey }}>
                Terms of Service
              </h1>
              <p className="text-lg" style={{ color: theme.colors.ashGrey, marginTop: '10px' }}>
                Read our terms and conditions.
              </p>
            </div>
          </div>
          <div className="container mx-auto flex py-8" style={{ background: theme.colors.snowMistLightGradient }}>
            <div className="w-1/4">
              <Sidebar>
                <h3 style={{ color: theme.colors.nightGrey }}>Related Documents</h3>
                <ul>
                  <li><a href="#" style={{ color: theme.colors.ashGrey }}>Document 1</a></li>
                  <li><a href="#" style={{ color: theme.colors.ashGrey }}>Document 2</a></li>
                </ul>
              </Sidebar>
            </div>
            <div className="w-3/4 pl-4">
              <p style={{ color: theme.colors.ashGrey }}>By using this website, you agree to the following terms...</p>
            </div>
          </div>
        </div>
      );
    };

    export default TermsOfService;
