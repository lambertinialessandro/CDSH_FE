import { ArrowForward } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import LoopBanner from 'app/shared-components/banner/LoopBanner';
import useParallaxY from 'app/shared-components/hooks/useParallaxY';
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';
import AnchorLink from 'app/shared-components/link/AnchorLink';
import BigLink from 'app/shared-components/link/BigLink';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { selectHomeData, setHomeData } from 'app/store/app/pageSlice';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { defaultNS as ns_common } from 'translations';
import AktuellesSection from '../aktuelles/AktuellesSection';
import ErrorPage from '../general/ErrorPage';
import LoadingPage from '../general/LoadingPage';
import VideoLooper from './VideoLooper';

function ImageAnimation(props) {
  const { image } = props;
  const imgRef = useRef(null);
  const y = useParallaxY(imgRef, 460 * 0.05);

  return (
    <motion.div ref={imgRef} className="w-full h-[300px] md:h-[460px] overflow-hidden">
      <motion.img
        src={image}
        alt="CDSH Willkommen"
        className="w-full h-full object-cover"
        style={{ y: y, willChange: 'transform' }}
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
    </motion.div>
  );
}

function Image(props) {
  const { item } = props;

  return (
    <img
      src={item.src}
      alt={item.title || ``}
      className="w-full object-cover h-[300px] md:h-full md:min-h-[460px]"
    />
  );
}

function Home() {
  const dispatch = useDispatch();
  const { t } = useTranslation([ns_common]);
  const { button } = t(ns_common);
  const theme = useTheme();
  const userLanguage = useSelector(selectUserLanguage);

  const homeData = useSelector((state) => selectHomeData(state, userLanguage));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('homeData:', homeData);

  useEffect(() => {
    if (homeData) {
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1);

    fetch(`http://localhost/plainkit-main/api/home?lang=${userLanguage}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setHomeData({ userLanguage, data: data }));
      })
      .catch((error) => {
        if (userLanguage === 'en') {
          const mockData = {
            header: {
              headline: 'Contemporay Dannce School of Hamburg',
              video: `${process.env.PUBLIC_URL}/assets/images/CDSH - Trailer Final Performance opt.mp4`,
            },
            intro: {
              text_1: 'We are a **state-accredited**',
              text_2: 'vocational school for contemporary stage dance',
            },
            aktuelles: {
              headline: 'News',
              items: [
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
            },
            aboutUs: {
              headline: 'About Us',
              text: 'The CDSH - Contemporary Dance School is a state-accredited vocational school for contemporary stage dance. The three-year program focuses on contemporary and modern classical ballet.',
              image: `${process.env.PUBLIC_URL}/assets/images/cdsh-willkommen-1.jpg`,
            },
            audition_banner: {
              text: 'THE AUDITION DATES 2026 ARE NOW ONLINE',
              link_text: 'REGISTER NOW',
            },
            footerCta: {
              show: true,
              title: 'Want to get to know us?',
              text: "We'd like to get to know you too. Besides the regular auditions, we're available by email or phone to answer any questions you may have about the training program.",
            },
          };
          dispatch(setHomeData({ userLanguage, data: mockData }));
        } else {
          const mockData = {
            header: {
              headline: 'Contemporary Dance School Hamburg',
              video: `${process.env.PUBLIC_URL}/assets/images/CDSH - Trailer Final Performance opt.mp4`,
            },
            intro: {
              text_1: 'Wir sind eine **staatlich anerkannte**',
              text_2: 'Berufsfachschule für zeitgenössischen Bühnentanz',
            },
            aktuelles: {
              headline: 'Aktuelles',
              items: [
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
            },
            aboutUs: {
              headline: 'Über uns',
              text: 'Die CDSH – Contemporary Dance School Hamburg ist eine staatlich anerkannte Berufsfachschule für zeitgenössischen Bühnentanz. Die dreijährige Ausbildung legt ihren Schwerpunkt auf Contemporary Dance und modernes klassisches Ballett.',
              image: `${process.env.PUBLIC_URL}/assets/images/cdsh-willkommen-1.jpg`,
            },
            audition_banner: {
              text: 'DIE AUDITION-TERMINE 2026 SIND JETZT ONLINE',
              link_text: 'JETZT ANMELDEN',
            },
            footerCta: {
              show: true,
              title: 'Du möchtest uns kennenlernen?',
              text: 'Wir dich ebenfalls. Neben den regulären Auditions sind wir bei Fragen rund um die Ausbildung per E-Mail oder telefonisch für dich da.',
            },
          };
          dispatch(setHomeData({ userLanguage, data: mockData }));
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

  if (loading) return <LoadingPage />;
  if (error || !homeData) return <ErrorPage />;

  return (
    <>
      <VideoLooper video={homeData.header.video} />

      {/* Intro Section */}
      <Box
        component="section"
        className="flex flex-col justify-center items-center text-center"
        sx={{ py: { xs: 8, md: 15 }, px: { xs: 4, md: 6 } }}
      >
        <ReactMarkdown components={renderers} children={homeData.intro.text_1} />
        <br></br>
        <ReactMarkdown components={renderers} children={homeData.intro.text_2} />
      </Box>

      {/* Aktuelles Section */}
      <AktuellesSection items={homeData.aktuelles.items} title={homeData.aktuelles.headline} />

      {/* Über uns */}
      <Box
        component="section"
        className="w-full flex flex-col justify-start items-center"
        sx={{ py: { xs: 8, md: 14 }, px: { xs: 4, md: 6 } }}
      >
        <Box className="max-w-[1280px]">
          <Typography
            className="mb-[60px] md:mb-[110px]"
            sx={{ fontSize: { xs: '40px', md: '80px' }, fontWeight: 400, color: '#000' }}
          >
            {homeData.aboutUs.headline}
          </Typography>
          <Box className="w-full flex flex-col md:flex-row justify-center">
            <Box className="max-w-[1250px] w-full md:border-y border-black flex flex-col md:flex-row">
              {/* Text */}
              <Box className="w-full md:w-1/2 py-[32px] md:py-[54px] flex flex-col justify-between items-start">
                <Typography
                  sx={{
                    fontSize: { xs: '18px', md: '30px' },
                    fontWeight: 400,
                    color: '#000',
                    lineHeight: 'normal',
                    pr: { xs: 0, md: '45px' },
                    mb: { xs: 3, md: 0 },
                  }}
                >
                  {homeData.aboutUs.text}
                </Typography>
                <AnchorLink href={'/team'}>
                  {button.mehrErfahren} <ArrowForward fontSize="small" sx={{ fontSize: { xs: '14px', sm: '16px' } }} />
                </AnchorLink>
              </Box>

              {/* Image */}
              <Box className="w-full md:w-1/2 border-y md:border-t-0 md:border-l border-black">
                <Image
                  item={{
                    src: homeData.aboutUs.image,
                    title: 'CDSH Willkommen',
                  }}
                />
              </Box>
            </Box>
          </Box>
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
            {homeData.audition_banner.text}
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
              {homeData.audition_banner.link_text} <ArrowForward fontSize="inherit" />
            </BigLink>
          </Typography>
        </LoopBanner>
      </Box>

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
          {homeData.footerCta.title}
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ fontSize: { xs: '15px', md: '30px' }, fontWeight: 400, color: '#000000' }}
        >
          {homeData.footerCta.text}
        </Typography>
      </Box>
    </>
  );
}

export default Home;
