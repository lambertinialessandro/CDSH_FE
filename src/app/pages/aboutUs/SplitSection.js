import { Box, Typography, useTheme } from '@mui/material';
import LoopBanner from 'app/shared-components/banner/LoopBanner';
import Carousel from 'app/shared-components/carousel/Carousel';

function SplitSection(props) {
  const { title, text, img, reverse = false, bottom = false } = props;

  return (
    <Box className="w-full flex justify-center">
      <Box className={`max-w-[1250px] border-t ${bottom && "border-b"} border-black flex flex-col md:flex-row`}>
        {!reverse && (
          <Box className="w-full md:w-1/2 py-8 px-6 flex flex-col justify-between items-start">
            <Typography component="h2" sx={{ fontSize: 80, fontWeight: 400, lineHeight: 'normal' }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: 30, fontWeight: 400, lineHeight: 'normal' }}>{text}</Typography>
          </Box>
        )}
        <Box className={`w-full md:w-1/2 h-full ${reverse ? "border-r" : "border-l"} border-black`}>
          <Box component="img" className="w-full h-full object-cover" src={img.src} alt={img.alt} />
        </Box>
        {reverse && (
          <Box className="w-full md:w-1/2 py-8 px-6 flex flex-col justify-between items-start">
            <Typography component="h2" sx={{ fontSize: 80, fontWeight: 400, lineHeight: 'normal' }}>
              {title}
            </Typography>
            <Typography sx={{ fontSize: 30, fontWeight: 400, lineHeight: 'normal' }}>{text}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SplitSection;
