import { Box, useTheme } from '@mui/material';
import TopNavbar from '../navbar/topNavbar/TopNavbar';
import Footer from '../foooter/Footer';
import Banner from './Banner';
import { useEffect, useMemo, useState } from 'react';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { useSelector } from 'react-redux';

function LandingLayout(props) {
  const { children } = props;
  const theme = useTheme();
  const userLanguage = useSelector(selectUserLanguage);
  const [bannerData, setBannerData] = useState({
    active: false,
    title: '',
    link: '',
  });
  const top = useMemo(() => <TopNavbar fixed />, []);

  useEffect(() => {
    const fetchBannerSettings = async () => {
      try {
        const response = await fetch(`http://localhost/plainkit-main/api/banner_audition?lang=${userLanguage}`);
        const data = await response.json();
        setBannerData(data);
      } catch (error) {
        console.error('Error fetching banner:', error);
      }
    };

    fetchBannerSettings();
  }, [userLanguage]);

  return (
    <>
      <Box className="relative h-full w-full min-h-screen">
        <Banner fixed bannerData={bannerData}/>
        <TopNavbar fixed active={bannerData.active}/>
        <main>
          <Box className="w-full min-h-screen bg-gray-50">{children}</Box>
        </main>
        <Footer />
      </Box>
    </>
  );
}

export default LandingLayout;
