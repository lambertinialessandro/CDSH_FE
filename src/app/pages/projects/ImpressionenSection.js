import { Box, Typography } from '@mui/material';
import Carousel from 'app/shared-components/carousel/Carousel';

function ImpressionenSection(props) {
  const { imgSet } = props;
  /*const items = [
    {
      src: `${process.env.PUBLIC_URL}/assets/images/projects/Bildschirmfoto 2025-02-21 um 17.23.58.png`,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/projects/Bildschirmfoto 2025-02-21 um 17.24.14.png`,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/projects/Bildschirmfoto 2025-02-21 um 17.23.58.png`,
    },
  ];*/

  console.log('imgSet', imgSet);
  if (!imgSet || imgSet.length === 0) {
    return null;
  }
  return (
    <Box component="section" className="py-[110px] px-[45px] flex flex-col justify-center items-start">
      <Typography className="mb-[110px]" sx={{ color: '#000000', fontSize: '80px', fontWeight: '400' }}>
        Impressionen
      </Typography>
      <Carousel items={imgSet} gap={32} itemWidth={700} itemHeight={470} />
    </Box>
  );
}

export default ImpressionenSection;
