import React from 'react';
import { PopupModalTheme } from '../../theme/popupModalTheme';

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    
      
        
          {children}
          <button style={PopupModalTheme.closeButton} onClick={onClose}>
            Close
          </button>
        
      
    
  );
};

export default PopupModal;
