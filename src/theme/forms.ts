import { colors } from './colors';

export const forms = {
  input: {
    border: `1px solid ${colors.primary}`,
    borderRadius: '8px',
    padding: '10px 16px',
    fontSize: '14px',
    color: '#334155',
    '&:focus': {
      borderColor: colors.primary,
      boxShadow: `0 0 0 2px rgba(166, 177, 190, 0.5)`,
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
