import React from 'react';
import ListingCard from './ListingCard';

interface GalleryProps {
  listings: any[];
}

const Gallery: React.FC<GalleryProps> = ({ listings }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pl-6 pt-5">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default Gallery;
