import { Box } from '@mui/material';
import Footer from '../foooter/Footer';
import TopNavbar from '../navbar/topNavbar/TopNavbar';
import Banner from './Banner';

function LandingLayout(props) {
  const { children } = props;

  return (
    <>
      <Box className="relative h-full w-full min-h-screen">
        <Banner fixed />
        <TopNavbar fixed />
        <main>
          <Box className="w-full min-h-screen bg-gray-50">{children}</Box>
        </main>
        <Footer />
      </Box>
    </>
  );
}

export default LandingLayout;
