import { ArrowForward } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import LoopBanner from 'app/shared-components/banner/LoopBanner';
import BigLink from 'app/shared-components/link/BigLink';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { selectAktuelleData, setAktuelleData } from 'app/store/app/pageSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorPage from '../general/ErrorPage';
import LoadingPage from '../general/LoadingPage';
import AktuellesSection from './AktuellesSection';

function Aktuelles() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const userLanguage = useSelector(selectUserLanguage);

  const aktuelleData = useSelector((state) => selectAktuelleData(state, userLanguage));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (aktuelleData) {
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1);

    fetch(`http://localhost/plainkit-main/api/news?lang=${userLanguage}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((aktuelleData) => {
        dispatch(setAktuelleData({ userLanguage, data: aktuelleData }));
      })
      .catch((error) => {
        if (userLanguage === 'en') {
          const mockData = {
            header: {
              title: 'News',
              intro:
                "Here you'll find all the latest information about final projects, performances, and other events at our school. Stay up to date!",
              image: `${process.env.PUBLIC_URL}/assets/images/aktuelles/cdsh-galley-09.jpg`,
            },
            banner: {
              text: 'THE AUDITION DATES FOR 2025 ARE NOW ONLINE.',
              linkText: 'REGISTER NOW',
              linkUrl: '',
            },
            newsItems: [
              {
                title: 'What dies Looking Taste like',
                description: 'Short description solo project "What does Looking Taste like"',
                src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/what_does_looking_taste_like.png`,
                projectId: 'solo_project_2024',
              },
              {
                title: 'Meeting point',
                description: 'Meeting point short description',
                src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/meeting_point.png`,
                projectId: 'meeting_point',
              },
              {
                title: 'Under Utopia',
                description: 'Under Utopia short description',
                src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/under_utopia.png`,
                projectId: 'under_utopia',
              },
              {
                title: 'APERCEPTION',
                description: 'APERCEPTION short description',
                src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/aperception.png`,
                projectId: 'aperception',
              },
              {
                title: 'RESET',
                description: 'RESET short description',
                src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/reset.png`,
                projectId: 'reset',
              },
            ],
            footerCta: {
              show: true,
              title: 'Want to get to know us?',
              text: "We'd like to get to know you too. Besides the regular auditions, we're available by email or phone to answer any questions you may have about the training program.",
            },
          };
          dispatch(setAktuelleData({ userLanguage, data: mockData }));
        } else {
          const mockData = {
            header: {
              title: 'Aktuelles',
              intro:
                'Hier findest du alle aktuellen Informationen zu Abschlussprojekten, Aufführungen und weiteren Veranstaltungen an unserer Schule. Bleib auf dem Laufenden!',
              image: `${process.env.PUBLIC_URL}/assets/images/aktuelles/cdsh-galley-09.jpg`,
            },
            banner: {
              text: 'DIE AUDITION-TERMINE FÜR 2025 SIND JETZT ONLINE.',
              linkText: 'JETZT ANMELDEN',
              linkUrl: '',
            },
            newsItems: [
              {
                title: 'What Does Looking Taste Like',
                description: 'Kurzbeschreibung des Solo-Projekts „What Does Looking Taste Like“',
                src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/what_does_looking_taste_like.png`,
                projectId: 'solo_project_2024',
              },
              {
                title: 'Meeting Point',
                description: 'Kurzbeschreibung des Projekts „Meeting Point“',
                src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/meeting_point.png`,
                projectId: 'meeting_point',
              },
              {
                title: 'Under Utopia',
                description: 'Kurzbeschreibung des Projekts „Under Utopia“',
                src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/under_utopia.png`,
                projectId: 'under_utopia',
              },
              {
                title: 'APERCEPTION',
                description: 'Kurzbeschreibung des Projekts „APERCEPTION“',
                src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/aperception.png`,
                projectId: 'aperception',
              },
              {
                title: 'RESET',
                description: 'Kurzbeschreibung des Projekts „RESET“',
                src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/reset.png`,
                projectId: 'reset',
              },
            ],
            footerCta: {
              show: true,
              title: 'Du m\u00f6chtest uns kennenlernen?',
              text: 'Wir dich ebenfalls. Neben den regul\u00e4ren Auditions sind wir bei Fragen rund um die Ausbildung per Mail oder telefonisch f\u00fcr dich da.',
            },
          };
          dispatch(setAktuelleData({ userLanguage, data: mockData }));
        }

        // TODO: commented for temp deploy
        // console.error('Fetching error:', error);
        // setError(error);
      })
      .finally(() => {
        setLoading(false);
        clearTimeout(timeout);
      });
  }, [userLanguage]);

  console.log('Aktuelles aktuelleData', aktuelleData);
  if (loading) return <LoadingPage />;
  if (error || !aktuelleData) return <ErrorPage />;

  return (
    <>
      <Box
        component="section"
        className="header relative flex items-center max-h-860-px"
        sx={{ height: { sx: '100%', md: `100vh` }, flexDirection: { xs: 'column-reverse', md: 'row' } }}
      >
        <Box
          className="flex-1 h-full flex flex-col justify-between items-start"
          sx={{
            zIndex: '2',
            width: { xs: '100%', md: '50%' },
            padding: { xs: '46px 56px 46px 56px', md: '0 56px 46px 56px' },
          }}
        >
          <Typography></Typography>
          <Typography
            sx={{
              display: { xs: 'none', md: 'block' },
              fontSize: '80px',
              lineHeight: '85px',
              fontWeight: '400',
            }}
          >
            {aktuelleData.header.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '15px', md: '30px' },
              lineHeight: { xs: '20px', md: '35px' },
              fontWeight: '400',
            }}
          >
            {aktuelleData.header.intro}
          </Typography>
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={aktuelleData.header.image}
            className="flex-1 w-full"
            sx={{ objectFit: 'cover', height: { xs: '390px', md: '100%' } }}
          ></Box>
          <Typography
            className="mix-blend-exclusion"
            sx={{
              position: 'absolute',
              left: '24px',
              bottom: '12px',
              display: { xs: 'block', md: 'none' },
              fontSize: '50px',
              lineHeight: '55px',
              fontWeight: '400',
              color: 'white',
            }}
          >
            {aktuelleData.header.title}
          </Typography>
        </Box>
      </Box>

      {/* Banner Section */}
      <Box
        component="section"
        className="flex justify-start items-center w-full overflow-hidden border-y border-black"
        sx={{
          height: { xs: '80px', md: '127px' },
          background: theme.palette.primary.main,
        }}
      >
        <LoopBanner stoppable>
          <Typography
            className="min-w-max flex items-center"
            sx={{
              fontSize: { xs: '28px', md: '80px' },
              fontWeight: 400,
              color: '#000000',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              marginRight: { xs: '16px', md: '45px' },
            }}
          >
            {aktuelleData.banner.text}
            <BigLink
              extraSx={{
                display: 'flex',
                height: 'min-content',
                marginLeft: { xs: '12px', md: '24px' },
                color: '#ffffff',
                fontSize: { xs: '28px', md: '80px' },
                fontWeight: 400,
                whiteSpace: 'nowrap',
              }}
              fontSize="inherit"
              lineHeight={{ xs: '1px', md: '5px' }}
              color="#000000"
              href={'/auditions'}
            >
              {aktuelleData.banner.linkText} <ArrowForward fontSize="inherit" />
            </BigLink>
          </Typography>
        </LoopBanner>
      </Box>

      <AktuellesSection items={aktuelleData.newsItems} title={aktuelleData.header.title} />

      {/* Kennenlernen Section */}
      <Box
        component="section"
        className="flex flex-col justify-center items-center text-center"
        sx={{ py: { xs: 8, md: 15 }, px: { xs: 4, md: 6 } }}
      >
        <Typography
          sx={{
            fontSize: { xs: '36px', md: '80px' },
            marginBottom: { xs: '12px', md: '32px' },
            fontWeight: 400,
            color: '#000000',
            lineHeight: 1.1,
          }}
        >
          {aktuelleData.footerCta.title}
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ fontSize: { xs: '18px', md: '30px' }, fontWeight: 400, color: '#000000' }}
        >
          {aktuelleData.footerCta.text}
        </Typography>
      </Box>
    </>
  );
}

export default Aktuelles;
