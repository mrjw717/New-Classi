import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface DropdownProps {
  buttonContent: ReactNode;
  dropdownContent: ReactNode;
  getButtonStyle?: (buttonName: string) => React.CSSProperties;
}

const Dropdown: React.FC<DropdownProps> = ({ buttonContent, dropdownContent, getButtonStyle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    
      <button
        className="relative"
        onClick={toggleDropdown}
        style={getButtonStyle ? getButtonStyle('') : {}}
      >
        {buttonContent}
      </button>
      {isOpen && (
        
          {dropdownContent}
        
      )}
    
  );
};

export default Dropdown;
