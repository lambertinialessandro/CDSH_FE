import { Box, Typography, useTheme } from '@mui/material';
import { getShowsInPage } from 'app/store/app/eventStore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function OwnWork() {
  const theme = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShowsInPage());
  }, []);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '1200px',
          margin: 'auto',
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography variant="h5" color="text.primary">
          OwnWork
        </Typography>
      </Box>
    </>
  );
}

export default OwnWork;
