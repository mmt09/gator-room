const dropzoneStyle = {
  dropzone: {
    height: '200px',
    width: '200px',
    backgroundColor: '#fff',
    border: '2px dashed rgb(187, 186, 186)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize: '16px',
    '&:focus': {
      boxShadow: '0px 0px 5px 2px rgb(188, 185, 236) !important',
    },
  },

  highlight: {
    backgroundColor: 'rgb(188, 185, 236)',
  },

  noHighlight: {
    backgroundColor: '#fff',
  },

  icon: {
    opacity: 0.3,
    height: '64px',
    width: '64px',
  },

  fileInput: {
    display: 'none',
  },
};

export default dropzoneStyle;
