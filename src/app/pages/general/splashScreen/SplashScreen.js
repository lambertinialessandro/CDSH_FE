import { Box, CircularProgress } from '@mui/material';

function SplashScreen() {
  return (
    <Box className="absolute top-0 left-0 bottom-0 right-0 !flex justify-center items-center">
      <Box className="flex flex-col justify-center items-center space-y-24">
        <Box component="img" src="assets/images/logo/logo_full.png" alt="logo" />
        <CircularProgress className="text-grey" size={60} thickness={4} />
      </Box>
    </Box>
  );
}

export default SplashScreen;
