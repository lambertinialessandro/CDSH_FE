import { ArrowForward } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import useParallaxY from 'app/shared-components/hooks/useParallaxY';
import AnchorLink from 'app/shared-components/link/AnchorLink';
import BigLink from 'app/shared-components/link/BigLink';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import LoopBanner from '../../shared-components/banner/LoopBanner';
import VideoLooper from './VideoLooper';
import Carousel from 'app/shared-components/carousel/Carousel';

const items = [
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-01.jpg`,
    title: 'Work in Progress 2025: meeting point',
    description:
      'Jedes Jahr finden unsere Work in Progress Vorstellungen und unsere Abschlussvorstellungen unter einem anderen Motto statt.',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-02.jpg`,
    title: 'Abschlussprojekt 2024 : joy',
    description:
      'Jedes Jahr findet das Abschlussprojekt, die finale Prüfungsleistung unserer Absolvent*innen, unter einem anderen Thema statt.',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-03.jpg`,
    title: 'What does Looking taste like?',
    description:
      'Die zentrale Prüfungsleistung im zweiten Ausbildungsjahr der CDSH besteht in der Realisierung einer eigenen Kurzproduktion.',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-04.jpg`,
    title: 'Abschlussprojekt 2023: KONTINUUM',
    description:
      'Jedes Jahr findet das Abschlussprojekt, die finale Prüfungsleistung unserer Absolvent*innen, unter einem anderen Thema statt.',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-05.jpg`,
    title: 'Title',
    description: 'Description',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-06.jpg`,
    title: 'Title',
    description: 'Description',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-07.jpg`,
    title: 'Title',
    description: 'Description',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-08.jpg`,
    title: 'Title',
    description: 'Description',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-09.jpg`,
    title: 'Title',
    description: 'Description',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-10.jpg`,
    title: 'Title',
    description: 'Description',
  },
];

function Addon({ item }) {
  return (
    <>
      <Typography className="text-[30px] py-[16px]" sx={{ lineHeight: 'normal' }}>
        {item.title}
      </Typography>
      <Typography className="text-[15px]" sx={{ lineHeight: 1.25 }}>
        {item.description}
      </Typography>
    </>
  );
}

function ImageAnimation(props) {
  const {} = props;
  const imgRef = useRef(null); // Create a new ref for each image
  const y = useParallaxY(imgRef, 460 * 0.05); // Adjust distance as needed

  return (
    <motion.div ref={imgRef} className="w-full h-[460px] overflow-hidden">
      <motion.img
        src={`${process.env.PUBLIC_URL}/assets/images/cdsh-willkommen-1.jpg`}
        alt={``}
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

      <Box component="section" className="py-[120px] flex flex-col justify-center items-center">
        <Typography sx={{ color: '#000000', fontSize: '30px', fontWeight: '400' }}>
          Wir sind eine staatlich anerkannte
        </Typography>
        <Typography sx={{ color: '#000000', fontSize: '30px', fontWeight: '400' }}>
          Berufsfachschule für zeitgenössischen Bühnentanz
        </Typography>
      </Box>

      <Box
        component="section"
        className="py-[110px] flex flex-col justify-center items-center"
        sx={{ background: theme.palette.secondary.main }}
      >
        <Typography className="mb-[110px]" sx={{ color: '#000000', fontSize: '80px', fontWeight: '400' }}>
          Aktuelles
        </Typography>
        <Carousel items={items} gap={32} itemWidth={321} itemHeight={195} Addon={Addon} />
      </Box>

      <Box component="section" className="py-[110px] px-[45px] flex flex-col justify-center items-start">
        <Typography className="mb-[110px]" sx={{ color: '#000000', fontSize: '80px', fontWeight: '400' }}>
          Über uns
        </Typography>
        <Box className="w-full flex justify-center">
          <Box className="max-w-[1250px] border-y border-black flex">
            <Box className="w-[50%] py-[54px] flex flex-col justify-between items-start">
              <Typography
                className="pr-[45px]"
                sx={{ color: '#000000', fontSize: '30px', fontWeight: '400', lineHeight: 'normal' }}
              >
                Die CDSH - CONTEMPORARY DANCE SCHOOL ist eine staatlich anerkannte Berufsfachschule für zeitgenössischen
                Bühnentanz. Der Schwerpunkt der dreijährigen Ausbildung liegt auf zeitgenössischem und modernem
                Klassischem Ballett.
              </Typography>
              <AnchorLink>
                Mehr erfahren <ArrowForward />
              </AnchorLink>
            </Box>
            <Box className="w-[50%] h-[460px] border-l border-black">
              <ImageAnimation />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        className="flex justify-start items-center w-full h-[127px] overflow-hidden"
        sx={{ background: theme.palette.primary.main }}
      >
        <LoopBanner stoppable>
          <Typography
            className="min-w-max flex items-center"
            sx={{
              color: '#000000',
              fontSize: '80px',
              fontWeight: '400',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              marginRight: '45px',
            }}
          >
            DIE AUDITION TERMINE 2025 SIND JETZT ONLINE.
            <BigLink
              extraSx={{
                display: 'flex',
                height: 'min-content',
                marginLeft: '24px',

                color: 'white',
                fontSize: '80px',
                fontWeight: '400',
                whiteSpace: 'nowrap',
              }}
              fontSize="80px"
              lineHeight="5"
              color="#000000"
            >
              JETZT ANMELDEN <ArrowForward fontSize={'80px'} />
            </BigLink>
          </Typography>
        </LoopBanner>
      </Box>

      <Box component="section" className="py-[120px] flex flex-col justify-center items-center text-center">
        <Typography
          sx={{ color: '#000000', fontSize: '80px', fontWeight: '400', lineHeight: '1', marginBottom: '32px' }}
        >
          Du möchtest uns kennenlernen?
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: '30px', fontWeight: '400' }}
        >
          Wir dich ebenfalls. Neben den regulären Auditions sind wir bei Fragen rund um die Ausbildung per Mail oder
          telefonisch für dich da.
        </Typography>
      </Box>
    </>
  );
}

export default Home;
