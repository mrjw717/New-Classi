import listingsByCategory from './listings-by-category.js';
import personalUsers from './users/personal.json';
import businessUsers from './users/business.json';

const mockData = {
  listingsByCategory,
  users: {
    personal: personalUsers,
    business: businessUsers,
  },
};

export default mockData;
