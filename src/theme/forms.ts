import { colors } from './colors';

export const forms = {
  input: {
    border: '1px solid #CBD5E0',
    borderRadius: '8px',
    padding: '10px 16px',
    fontSize: '14px',
    color: '#334155',
    '&:focus': {
      borderColor: colors.primary,
      boxShadow: '0 0 0 2px rgba(62, 131, 248, 0.2)',
      outline: 'none',
    },
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#475569',
    marginBottom: '6px',
  },
  // Add more form styles as needed
};
