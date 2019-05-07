import { container, title } from 'assets/jss/material-kit-react.jsx';

import imagesStyles from 'assets/jss/material-kit-react/imagesStyles.jsx';

const listingDetailsStyle = {
  section: {
    padding: '0px 0',
  },
  container,
  space50: {
    height: '50px',
    display: 'block',
  },
  title: {
    ...title,
    minHeight: '32px',
    textDecoration: 'none',
  },
  typo: {
    marginBottom: '40px',
    position: 'relative',
    width: '100%',
    color: 'black',
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: '10px',
    color: '#c0c1c2',
    display: 'block',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '13px',
    left: '0',
    marginLeft: '20px',
    position: 'absolute',
    width: '260px',
  },
  marginLeft: {
    marginLeft: 'auto !important',
  },
  ...imagesStyles,
};

export default listingDetailsStyle;
