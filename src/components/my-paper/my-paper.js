import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
const Root = styled(Paper)(({ theme }) => ({
  p: '2px 4px',
  display: 'flex',
  alignItems:
    'center',
  boxShadow: 'none',
  border: '1px solid #CCCCCC',
  [theme.breakpoints.down('md')]: {
    width: 350
  },
  [theme.breakpoints.up('md')]: {
    width: 436
  },
}));

const MyPaper = ({ children }) => {
  return (
    <Root>
      {children}
    </Root>
  );
};

export default MyPaper;