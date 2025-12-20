import { ArrowForward } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import LoopBanner from 'app/shared-components/banner/LoopBanner';
import useParallaxY from 'app/shared-components/hooks/useParallaxY';
import AnchorLink from 'app/shared-components/link/AnchorLink';
import BigLink from 'app/shared-components/link/BigLink';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import VideoLooper from './VideoLooper';
import { useSelector } from 'react-redux';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import AktuellesSection from '../aktuelles/AktuellesSection';
import { useTranslation } from 'react-i18next';
import { defaultNS as ns_common } from 'translations';
import ReactMarkdown from 'react-markdown';
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';

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
      className="w-full object-cover border border-black h-[300px] md:h-full md:min-h-[460px]"
    />
  );
}

function Home() {
  const { t } = useTranslation([ns_common]);
  const { button } = t(ns_common);
  const theme = useTheme();

  const [homeData, setHomeData] = useState(null);
  const userLanguage = useSelector(selectUserLanguage);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('homeData:', homeData);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`http://localhost/plainkit-main/api/home?lang=${userLanguage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setHomeData(data);
      })
      .catch((error) => {
        console.error('Fetching error:', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userLanguage]);

  if (loading) return <Box sx={{ p: 10, textAlign: 'center' }}>Loading content...</Box>;
  if (!homeData) return <Box sx={{ p: 10, textAlign: 'center' }}>Error loading data.</Box>;

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
                {/* <ImageAnimation /> */}

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
