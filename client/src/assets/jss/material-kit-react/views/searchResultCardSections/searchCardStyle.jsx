import { title } from 'assets/jss/material-kit-react.jsx';

const searchCardStyle = {
  section: {
    padding: '70px 0',
    textAlign: 'center',
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  description: {
    color: '#999',
  },
  paper: {},
  adminSection: {
    padding: '70px 0',
    textAlign: 'center',
    overflow: 'hidden',
  },
  adminPaper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  approvalButtons: {},
};

export default searchCardStyle;
