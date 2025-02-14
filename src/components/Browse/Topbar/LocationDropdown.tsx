import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { theme } from '../../../theme/theme';

interface LocationDropdownProps {
  getButtonStyle: (buttonName: string) => React.CSSProperties;
  getIconColor: (buttonName: string) => string;
}

const LocationDropdown: React.FC<LocationDropdownProps> = ({ getButtonStyle, getIconColor }) => {
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [zipCode, setZipCode] = useState('');

  const handleLocationClick = () => {
    setLocationDropdownOpen(!locationDropdownOpen);
  };

  const handleZipCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Zip Code Submitted:', zipCode);
    setLocationDropdownOpen(false);
  };

  return (
    
      <button
        className="font-bold ml-2 mr-2 relative"
        style={{
          ...getButtonStyle('location'),
          display: 'inline-flex',
          alignItems: 'center',
        }}
        onClick={handleLocationClick}
      >
        <MapPin size={20} style={{ display: 'inline-block', color: getIconColor('location') }} />
        {locationDropdownOpen && (
          
            <form
              onSubmit={handleZipCodeSubmit}
              className="p-4 bg-white border rounded-md shadow-md absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64"
            >
              <input
                type="text"
                placeholder="Enter Zip Code"
                className="border rounded-md py-2 px-4 mr-2 w-full"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
              <button
                type="submit"
                style={{
                  ...getButtonStyle('location'),
                  padding: '8px 16px',
                  fontSize: '14px',
                  marginTop: '8px',
                  width: '100%',
                }}
                className="w-full"
              >
                Submit
              </button>
            </form>
          
        )}
      </button>
    
  );
};

export default LocationDropdown;
