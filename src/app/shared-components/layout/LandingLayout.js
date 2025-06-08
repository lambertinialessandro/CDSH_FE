import { Box, useTheme } from '@mui/material';
import TopNavbar from '../navbar/topNavbar/TopNavbar';
import Footer from '../foooter/Footer';
import Banner from './Banner';

function LandingLayout(props) {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box className="relative h-full w-full min-h-screen overflow-hidden">
      <Banner />
      <TopNavbar fixed />
      <main>
        <Box className="w-full min-h-screen bg-gray-50">
          {children}
        </Box>
      </main>
      <Footer />
    </Box>
  );
}

export default LandingLayout;
