import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import AncorLink from 'app/shared-components/link/AncorLink';
import BigLink from 'app/shared-components/link/BigLink';
import LoopBanner from './LoopBanner';
import { LinearCarousel } from 'app/shared-components/carouselView';
import Carousel from './Carousel';
import VideoLooper from './VideoLooper';

function Home() {
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
        sx={{ background: '#eae7f8' }}
      >
        <Typography className="mb-[110px]" sx={{ color: '#000000', fontSize: '80px', fontWeight: '400' }}>
          Aktuelles
        </Typography>
        <Carousel />
      </Box>

      <Box component="section" className="py-[110px] px-[45px] flex flex-col justify-center items-start">
        <Typography className="mb-[110px]" sx={{ color: '#000000', fontSize: '80px', fontWeight: '400' }}>
          Über uns
        </Typography>
        <Box className="w-full border-y border-black flex">
          <Box className="w-[50%] py-[54px] flex flex-col justify-between items-start">
            <Typography className="pr-[45px]" sx={{ color: '#000000', fontSize: '30px', fontWeight: '400' }}>
              Die CDSH - CONTEMPORARY DANCE SCHOOL ist eine staatlich anerkannte Berufsfachschule für zeitgenössischen
              Bühnentanz. Der Schwerpunkt der dreijährigen Ausbildung liegt auf zeitgenössischem und modernem
              Klassischem Ballett.
            </Typography>
            <AncorLink>
              Mehr erfahren <ArrowForward />
            </AncorLink>
          </Box>
          <Box className="w-[50%] h-[460px] border-l border-black">
            <Box component="img" className="w-full h-full align-middle object-cover" src={`${process.env.PUBLIC_URL}/assets/images/cdsh-willkommen-1.jpg`} />
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        className="flex justify-start items-center w-full h-[127px] overflow-hidden"
        sx={{ background: '#8f20ff' }}
      >
        <LoopBanner>
          <Typography
            className="min-w-max flex items-center"
            sx={{
              color: '#ffffff',
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
              lineHeight="5"
              color="#ffffff"
            >
              JETZT ANMELDEN <ArrowForward fontSize={'80px'} />
            </BigLink>
          </Typography>
        </LoopBanner>
      </Box>

      <Box component="section" className="py-[120px] flex flex-col justify-center items-center">
        <Typography sx={{ color: '#000000', fontSize: '80px', fontWeight: '400' }}>
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
