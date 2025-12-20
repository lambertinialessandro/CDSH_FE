import { Box } from '@mui/material';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { selectBannerData, setBannerData } from 'app/store/app/pageSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../foooter/Footer';
import TopNavbar from '../navbar/topNavbar/TopNavbar';
import Banner from './Banner';

function LandingLayout(props) {
  const dispatch = useDispatch();
  const { children } = props;
  const userLanguage = useSelector(selectUserLanguage);

  const bannerData = useSelector((state) => selectBannerData(state, userLanguage));

  useEffect(() => {
    if (bannerData) {
      return;
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1);

    fetch(`http://localhost/plainkit-main/api/banner_audition?lang=${userLanguage}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setBannerData({ userLanguage, data: data }));
      })
      .catch((err) => {
        if (userLanguage === 'en') {
          const mockData = { active: true, title: 'Audition 2025 are now online!', link: 'Register now' };
          dispatch(setBannerData({ userLanguage, data: mockData }));
        } else {
          const mockData = {
            active: true,
            title: 'Audition 2025 sind jetzt online!',
            link: 'Jetzt anmelden',
          };
          dispatch(setBannerData({ userLanguage, data: mockData }));
        }

        // TODO: commented for temp deploy
        // console.error('Fetching error:', error);
      })
      .finally(() => {
        clearTimeout(timeout);
      });
  }, [userLanguage]);

  return (
    <>
      <Box className="relative h-full w-full min-h-screen">
        <Banner
          fixed
          bannerData={
            bannerData ?? {
              active: false,
              title: '',
              link: '',
            }
          }
        />
        <TopNavbar fixed active={bannerData?.active ?? false} />
        <main>
          <Box className="w-full min-h-screen bg-gray-50">{children}</Box>
        </main>
        <Footer />
      </Box>
    </>
  );
}

export default LandingLayout;
