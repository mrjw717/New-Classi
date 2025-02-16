import React from 'react';
import mockData from '../../../mock-data';
import Gallery from './ItemsDisplay/Gallery';

const ItemsDisplay: React.FC = () => {
  const allListings = Object.values(mockData.listingsByCategory).flat();

  const listings = [...allListings].sort((a, b) => {
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });

  return (
    
      <Gallery listings={listings} />
    
  );
};

export default ItemsDisplay;
