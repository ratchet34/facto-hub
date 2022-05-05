import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Events from './Events';
import '../css/CentralContainer.css';

function CentralContainer({ menu }) {
  return (
    <Box id="central-container">
      {menu === 'events' && <Events />}
    </Box>
  );
}

CentralContainer.propTypes = {
  menu: PropTypes.string.isRequired,
};

export default CentralContainer;
