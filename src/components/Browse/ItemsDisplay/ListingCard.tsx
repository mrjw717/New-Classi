import React from 'react';
import { theme } from '../../../theme/theme';

interface ListingCardProps {
  listing: any;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div className="relative rounded-md shadow-md overflow-hidden" style={{ backgroundColor: theme.colors.snowMist }}>
      <div className="aspect-w-4 aspect-h-5">
        <img
          className="object-cover w-full h-full"
          src="https://via.placeholder.com/640x800"
          alt={listing.title}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{listing.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{listing.location}</p>
        <p className="mt-2 text-md font-bold text-gray-900">${listing.price}</p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Listing
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
