import { ArrowForward } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import LoopBanner from 'app/shared-components/banner/LoopBanner';
import useParallaxY from 'app/shared-components/hooks/useParallaxY';
import AnchorLink from 'app/shared-components/link/AnchorLink';
import BigLink from 'app/shared-components/link/BigLink';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import AktuellesSection from './AktuellesSection';
import VideoLooper from './VideoLooper';

function ImageAnimation() {
  const imgRef = useRef(null);
  const y = useParallaxY(imgRef, 460 * 0.05);

  return (
    <motion.div ref={imgRef} className="w-full h-[300px] md:h-[460px] overflow-hidden">
      <motion.img
        src={`${process.env.PUBLIC_URL}/assets/images/cdsh-willkommen-1.jpg`}
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

function Home() {
  const theme = useTheme();

  return (
    <>
      <VideoLooper />

      {/* Intro Section */}
      <Box
        component="section"
        className="flex flex-col justify-center items-center text-center"
        sx={{ py: { xs: 8, md: 15 }, px: { xs: 4, md: 6 } }}
      >
        <Typography sx={{ fontSize: { xs: '20px', md: '30px' }, fontWeight: 400, color: '#000' }}>
          Wir sind eine staatlich anerkannte
        </Typography>
        <Typography sx={{ fontSize: { xs: '20px', md: '30px' }, fontWeight: 400, color: '#000' }}>
          Berufsfachschule für zeitgenössischen Bühnentanz
        </Typography>
      </Box>

      {/* Aktuelles Section */}
      <AktuellesSection />

      {/* Über uns */}
      <Box component="section" className="w-full flex flex-col justify-start items-center" sx={{ py: { xs: 8, md: 14 }, px: { xs: 4, md: 6 } }}>
        <Box
                  className="max-w-[1280px]"
                >
        <Typography
          className="mb-[60px] md:mb-[110px]"
          sx={{ fontSize: { xs: '40px', md: '80px' }, fontWeight: 400, color: '#000' }}
        >
          Über uns
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
                Die CDSH - CONTEMPORARY DANCE SCHOOL ist eine staatlich anerkannte Berufsfachschule für zeitgenössischen
                Bühnentanz. Der Schwerpunkt der dreijährigen Ausbildung liegt auf zeitgenössischem und modernem
                Klassischem Ballett.
              </Typography>
              <AnchorLink href={"/team"}>
                Mehr erfahren <ArrowForward />
              </AnchorLink>
            </Box>

            {/* Image */}
            <Box className="w-full md:w-1/2 border-y md:border-t-0 md:border-l border-black">
              <ImageAnimation />
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
            DIE AUDITION TERMINE 2025 SIND JETZT ONLINE.
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
              href={"/auditions"}
            >
              JETZT ANMELDEN <ArrowForward fontSize="inherit" />
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
          Du möchtest uns kennenlernen?
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ fontSize: { xs: '18px', md: '30px' }, fontWeight: 400, color: '#000000' }}
        >
          Wir dich ebenfalls. Neben den regulären Auditions sind wir bei Fragen rund um die Ausbildung per Mail oder
          telefonisch für dich da.
        </Typography>
      </Box>
    </>
  );
}

export default Home;
