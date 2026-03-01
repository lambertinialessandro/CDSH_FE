import { Box, Typography, useMediaQuery } from '@mui/material';
import Carousel from 'app/shared-components/carousel/Carousel';

function ImpressionenSection(props) {
  const { title, items } = props;

  const isMobile = useMediaQuery('(max-width:900px)');

  if (!items || items.length === 0) {
    return null;
  }
  return (
    <Box
      component="section"
      className="px-[45px] flex flex-col justify-center items-start z-1"
      sx={{ py: { xs: '55px', md: '110px' } }}
    >
      <Typography
        className="block z-10"
        sx={{
          color: '#000000',
          fontSize: { xs: '35px', md: '80px' },
          fontWeight: '400',
          mb: { xs: '55px', md: '110px' },
        }}
      >
        {title}
      </Typography>
      {isMobile ? (
        <Carousel items={items} gap={32} itemWidth={300} itemHeight={235} canFullscreen />
      ) : (
        <Carousel items={items} gap={32} itemWidth={600} itemHeight={420} canFullscreen />
      )}
    </Box>
  );
}

export default ImpressionenSection;
