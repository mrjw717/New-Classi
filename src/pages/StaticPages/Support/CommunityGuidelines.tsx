import React from 'react';
    import Sidebar from '../../../components/common/Sidebar';
    import { theme } from '../../../theme/theme';

    const CommunityGuidelines: React.FC = () => {
      return (
        <div className="py-8" style={{ background: theme.colors.snowMistLightGradient }}>
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-extrabold" style={{ color: theme.colors.nightGrey }}>
              Community Guidelines
            </h1>
            <p className="text-lg" style={{ color: theme.colors.ashGrey, marginTop: '10px' }}>
              Read our community guidelines.
            </p>
          </div>
          <div className="container mx-auto flex py-8">
            <div className="w-1/4">
              <Sidebar>
                <h3 style={{ color: theme.colors.nightGrey }}>Guidelines</h3>
                <ul>
                  <li><a href="#" style={{ color: theme.colors.ashGrey }}>Guideline 1</a></li>
                  <li><a href="#" style={{ color: theme.colors.ashGrey }}>Guideline 2</a></li>
                  <li><a href="#" style={{ color: theme.colors.ashGrey }}>Guideline 3</a></li>
                </ul>
              </Sidebar>
            </div>
            <div className="w-3/4 pl-4">
              <p style={{ color: theme.colors.ashGrey }}>Please follow our community guidelines to ensure a positive experience for everyone...</p>
            </div>
          </div>
        </div>
      );
    };

    export default CommunityGuidelines;
