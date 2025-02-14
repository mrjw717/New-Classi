import React from 'react';
import { theme } from '../../../theme/theme';
import { ArrowDownWideNarrow } from 'lucide-react';

interface SortButtonProps {
  onClick: () => void;
}

const SortButton: React.FC<SortButtonProps> = ({ onClick }) => {
  return (
    <button
      className="font-bold ml-2 py-2 px-4 rounded-md"
      style={{
        ...theme.buttons.snowMist,
        display: 'inline-flex',
        alignItems: 'center',
      }}
      onClick={onClick}
    >
      <ArrowDownWideNarrow size={20} style={{ display: 'inline-block', color: theme.colors.ashGrey }} />
    </button>
  );
};

export default SortButton;
