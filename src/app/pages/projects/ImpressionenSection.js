import { Box, Typography, useMediaQuery } from '@mui/material';
import Carousel from 'app/shared-components/carousel/Carousel';

function ImpressionenSection(props) {
  const { title, items } = props;

  const isMobile = useMediaQuery('(max-width:900px)');

  console.log('items', items);
  if (!items || items.length === 0) {
    return null;
  }
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
          fontWeight: '400',
          mb: { xs: '55px', md: '110px' },
        }}
      >
        {title}
      </Typography>
      {isMobile ? (
        <Carousel items={items} gap={32} itemWidth={300} itemHeight={235} />
      ) : (
        <Carousel items={items} gap={32} itemWidth={600} itemHeight={420} />
      )}
    </Box>
  );
}

export default ImpressionenSection;
