import { Box, Typography, useMediaQuery } from '@mui/material';
import Carousel from 'app/shared-components/carousel/Carousel';

function RaumlichkeitenSection() {
  const items = [
    {
      src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-21 um 17.23.58.png`,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-21 um 17.24.14.png`,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-21 um 17.23.58.png`,
    },
  ];

  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <Box
      component="section"
      className="px-[45px] flex flex-col justify-center items-start"
      sx={{ py: { xs: '55px', md: '110px' } }}
    >
      <Typography
        className=""
        sx={{
          color: '#000000',
          fontSize: { xs: '35px', md: '80px' },
          mb: { xs: '55px', md: '110px' },
          fontWeight: '400',
        }}
      >
        Räumlichkeiten
      </Typography>
      {isMobile ? (
        <Carousel items={items} gap={32} itemWidth={300} itemHeight={235} />
      ) : (
        <Carousel items={items} gap={32} itemWidth={700} itemHeight={470} />
      )}
    </Box>
  );
}

export default RaumlichkeitenSection;
