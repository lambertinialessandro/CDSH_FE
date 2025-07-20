import { Box, useTheme } from '@mui/material';
import TopNavbar from '../navbar/topNavbar/TopNavbar';
import Footer from '../foooter/Footer';
import Banner from './Banner';
import { useMemo } from 'react';

function LandingLayout(props) {
  const { children } = props;
  const theme = useTheme();

  const top = useMemo(() => <TopNavbar fixed />, []);

  return (
    <>
      <Box className="relative h-full w-full min-h-screen">
        <Banner fixed />
        <TopNavbar fixed />
        <main>
          <Box className="w-full min-h-screen bg-gray-50">
            {children}
          </Box>
        </main>
        <Footer />
      </Box>
    </>
  );
}

export default LandingLayout;
