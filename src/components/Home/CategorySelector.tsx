import React, { useState, useRef } from 'react';
import { theme } from '../../theme/theme';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const allCategories = [
  { name: 'Vehicles', color: theme.category.Vehicles, emoji: '🚗', type: 'regular' },
  { name: 'Real Estate', color: theme.category.RealEstate, emoji: '🏠', type: 'realEstate' },
  { name: 'Electronics', color: theme.category.Electronics, emoji: '📱', type: 'regular' },
  { name: 'Furniture', color: theme.category.Furniture, emoji: '🪑', type: 'regular' },
  { name: 'Jobs', color: theme.category.Jobs, emoji: '💼', type: 'regular' },
  { name: 'Services', color: theme.category.Services, emoji: '🛠️', type: 'regular' },
  { name: 'Clothing', color: theme.category.Clothing, emoji: '👕', type: 'regular' },
  { name: 'Books', color: theme.category.Books, emoji: '📚', type: 'regular' },
  { name: 'Announcements', color: theme.category.Announcements, emoji: '📢', type: 'regular' },
  { name: 'FREE', color: theme.category.FREE, emoji: '🎁', type: 'regular' },
  { name: 'Fitness Equipment', color: theme.category.FitnessEquipment, emoji: '🏋️', type: 'regular' },
  { name: 'Home & Garden', color: theme.category.HomeAndGarden, emoji: '🏡', type: 'regular' },
  { name: 'Hunting & Fishing', color: theme.category.HuntingAndFishing, emoji: '🎣', type: 'regular' },
  { name: 'Industrial', color: theme.category.Industrial, emoji: '🏭', type: 'regular' },
  { name: 'Livestock', color: theme.category.Livestock, emoji: '🐄', type: 'regular' },
  { name: 'Musical Instruments', color: theme.category.MusicalInstruments, emoji: '🎵', type: 'regular' },
  { name: 'Outdoors & Sporting', color: theme.category.OutdoorsAndSporting, emoji: '🏕️', type: 'regular' },
  { name: 'Recreational Vehicles', color: theme.category.RecreationalVehicles, emoji: '🚐', type: 'regular' },
  { name: 'Tickets', color: theme.category.Tickets, emoji: '🎟️', type: 'regular' },
  { name: 'Toys', color: theme.category.Toys, emoji: '🧸', type: 'regular' },
  { name: 'Water Sports', color: theme.category.WaterSports, emoji: '🌊', type: 'regular' },
  { name: 'Weddings', color: theme.category.Weddings, emoji: '💍', type: 'regular' },
  { name: 'Rentals', color: theme.category.Rentals, emoji: '🔑', type: 'regular' },
];

const initialCategories = allCategories.slice(0, 10);
const additionalCategories = allCategories.slice(10);

const CategorySelector: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const categorySelectorRef = useRef<HTMLDivElement>(null);
  const scope = useRef(null);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (categorySelectorRef.current) {
      categorySelectorRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      height: 'auto',
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const cardSizePercentage = 85;
  const textHorizontalPadding = '5%';
  const cardWidthPercentage = '20%';
  const iconTopPosition = '30%';
  const titleTopPosition = '65%';

  const replaceAnd = (title: string) => {
    return title.replace('and', '&');
  };

  return (
    <div className="bg-white py-8" ref={categorySelectorRef}>
      <div className="container mx-auto text-center" style={{ maxWidth: '70%' }}>
        <div className="flex flex-wrap justify-center">
          {initialCategories.map((category, index) => (
            <div
              key={index}
              className={`p-4`}
              style={{ width: cardWidthPercentage }}
            >
              <button
                className="w-full relative rounded-md font-semibold flex flex-col items-center justify-center overflow-hidden transition-transform duration-200 hover:scale-105 shadow"
                style={{
                  background: `linear-gradient(315deg, ${theme.category[category.name.replace('&', 'and')] ? theme.category[category.name.replace('&', 'and')] : category.color}, ${theme.colors.snowMist})`,
                  color: 'black',
                  paddingBottom: `${cardSizePercentage}%`, /* 1:1 aspect ratio */
                  boxShadow: theme.shadows.soft,
                }}
              >
                <span style={{ fontSize: '2.3em', position: 'absolute', top: iconTopPosition, left: '50%', transform: 'translate(-50%, -50%)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>{category.emoji}</span>
                <span style={{ fontSize: '1.1em', position: 'absolute', top: titleTopPosition, left: '50%', transform: 'translate(-50%, -50%)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)', paddingLeft: textHorizontalPadding, paddingRight: textHorizontalPadding, whiteSpace: 'nowrap', textAlign: 'center' }}>{replaceAnd(category.name)}</span>
                {category.type === 'realEstate' && (
                  <div className="absolute bottom-0 left-0 w-full flex" style={{ height: '20%', fontSize: '0.8em' }}>
                    <div className="w-1/2 flex items-center justify-center" style={{ background: theme.colors.primaryGradient, borderRight: '1px solid #ddd', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                      For Sale
                    </div>
                    <div className="w-1/2 flex items-center justify-center" style={{ background: theme.colors.primaryGradient, borderLeft: '1px solid #ddd', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                      For Rent
                    </div>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
        
        <motion.div
          ref={scope}
          className="flex flex-wrap justify-center overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate={showAll ? "visible" : "hidden"}
          exit="exit"
          style={{ width: '100%' }}
        >
          {additionalCategories.map((category, index) => (
            <div
              key={index}
              className={`p-4`}
              style={{ width: cardWidthPercentage }}
            >
              <button
                className="w-full relative rounded-md font-semibold flex flex-col items-center justify-center overflow-hidden transition-transform duration-200 hover:scale-105 shadow"
                style={{
                  background: `linear-gradient(315deg, ${theme.category[category.name.replace('&', 'and')] ? theme.category[category.name.replace('&', 'and')] : category.color}, ${theme.colors.snowMist})`,
                  color: 'black',
                  paddingBottom: `${cardSizePercentage}%`, /* 1:1 aspect ratio */
                  boxShadow: theme.shadows.soft,
                }}
              >
                <span style={{ fontSize: '2.3em', position: 'absolute', top: iconTopPosition, left: '50%', transform: 'translate(-50%, -50%)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>{category.emoji}</span>
                <span style={{ fontSize: '1.1em', position: 'absolute', top: titleTopPosition, left: '50%', transform: 'translate(-50%, -50%)', textShadow: '2px 2px 4px rgba(0,0,0,0.3)', paddingLeft: textHorizontalPadding, paddingRight: textHorizontalPadding, whiteSpace: 'nowrap', textAlign: 'center' }}>{replaceAnd(category.name)}</span>
                {category.type === 'realEstate' && (
                  <div className="absolute bottom-0 left-0 w-full flex" style={{ height: '20%', fontSize: '0.8em' }}>
                    <div className="w-1/2 flex items-center justify-center" style={{ background: theme.colors.primaryGradient, borderRight: '1px solid #ddd', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                      For Sale
                    </div>
                    <div className="w-1/2 flex items-center justify-center" style={{ background: theme.colors.primaryGradient, borderLeft: '1px solid #ddd', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                      For Rent
                    </div>
                  </div>
                )}
              </button>
            </div>
          ))}
        </motion.div>
        
        <div className="flex justify-end">
          <button
            className="flex items-center justify-center mt-4 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            onClick={toggleShowAll}
          >
            {showAll ? (
              <>
                <ChevronUp size={20} className="mr-2" />
                Collapse Categories
              </>
            ) : (
              <>
                <ChevronDown size={20} className="mr-2" />
                View All Categories
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector;
