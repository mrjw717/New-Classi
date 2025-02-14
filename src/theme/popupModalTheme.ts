export const PopupModalTheme = {
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modalContent: {
    background: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },
  closeButton: {
    marginTop: '10px',
    padding: '8px 15px',
    background: '#ddd',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
