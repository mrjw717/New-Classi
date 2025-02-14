// src/theme/buttons.ts
import { colors } from './colors';

const buttonStyle = {
  borderRadius: '8px',
  padding: '12px',
  fontSize: '16px',
  fontWeight: '600',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  width: 'auto',
  height: 'auto',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
};

export const buttons = {
  primaryActive: {
    ...buttonStyle,
    color: 'white',
    background: colors.primaryGradient,
    '&:hover': {
      background: colors.primaryLightGradient,
      transform: 'translateY(-2px)',
    },
  },
  primaryInactive: {
    ...buttonStyle,
    color: colors.primary,
    background: colors.snowMistGradient,
    '&:hover': {
      background: colors.primaryLightGradient,
      transform: 'translateY(-2px)',
    },
  },
  locationActive: {
    ...buttonStyle,
    color: 'white',
    background: colors.orangeGradient,
    '&:hover': {
      background: colors.orangeLightGradient,
      transform: 'translateY(-2px)',
    },
  },
  locationInactive: {
    ...buttonStyle,
    color: colors.orange,
    background: colors.snowMistGradient,
    '&:hover': {
      background: colors.orangeLightGradient,
      transform: 'translateY(-2px)',
    },
  },
  listActive: {
    ...buttonStyle,
    color: 'white',
    background: colors.violetGradient,
    '&:hover': {
      background: colors.violetLightGradient,
      transform: 'translateY(-2px)',
    },
  },
  listInactive: {
    ...buttonStyle,
    color: colors.violet,
    background: colors.snowMistGradient,
    '&:hover': {
      background: colors.violetLightGradient,
      transform: 'translateY(-2px)',
    },
  },
  gridActive: {
    ...buttonStyle,
    color: 'white',
    background: colors.secondaryGradient,
    '&:hover': {
      background: colors.secondaryLightGradient,
      transform: 'translateY(-2px)',
    },
  },
  gridInactive: {
    ...buttonStyle,
    color: colors.violet,
    background: colors.snowMistGradient,
    '&:hover': {
      background: colors.secondaryLightGradient,
      transform: 'translateY(-2px)',
    },
  },
  violet: {
    ...buttonStyle,
    color: 'white',
    background: colors.violetGradient,
    '&:hover': {
      background: colors.violetLightGradient,
      transform: 'translateY(-2px)',
      color: 'white',
    },
    '&:active': {
      background: colors.violetGradient,
      boxShadow: 'none',
      transform: 'translateY(0)',
      color: 'white',
    },
    '&:disabled': {
      background: colors.snowMistGradient,
      color: colors.ashGrey,
      cursor: 'not-allowed',
    },
  },
  secondary: {
    ...buttonStyle,
    color: 'white',
    background: colors.secondaryGradient,
    '&:hover': {
      background: colors.secondaryLightGradient,
      transform: 'translateY(-2px)',
    },
    '&:active': {
      background: colors.secondaryGradient,
      boxShadow: 'none',
      transform: 'translateY(0)',
      color: 'white',
    },
    '&:disabled': {
      background: colors.snowMistGradient,
      color: colors.ashGrey,
      cursor: 'not-allowed',
    },
  },
  gray: {
    ...buttonStyle,
    color: 'white',
    background: colors.grayGradient,
    '&:hover': {
      background: colors.grayLightGradient,
      transform: 'translateY(-2px)',
    },
    '&:active': {
      background: colors.grayGradient,
      boxShadow: 'none',
      transform: 'translateY(0)',
      color: 'white',
    },
    '&:disabled': {
      background: colors.snowMistGradient,
      color: colors.ashGrey,
      cursor: 'not-allowed',
    },
  },
  snowMist: {
    ...buttonStyle,
    color: 'white',
    background: colors.snowMistGradient,
    '&:hover': {
      background: colors.snowMistLightGradient,
      transform: 'translateY(-2px)',
    },
    '&:active': {
      background: colors.snowMistGradient,
      boxShadow: 'none',
      transform: 'translateY(0)',
      color: 'white',
    },
    '&:disabled': {
      background: colors.snowMistGradient,
      color: colors.ashGrey,
      cursor: 'not-allowed',
    },
  },
  // Add more button styles as needed
};
