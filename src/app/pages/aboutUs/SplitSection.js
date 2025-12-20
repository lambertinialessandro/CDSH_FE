import { Box, Typography } from '@mui/material';

function SplitSection(props) {
  const { title, text, img, reverse = false, bottom = false } = props;

  return (
    <Box className="w-full flex justify-center">
      <Box className={`max-w-[1250px] md:border-t ${bottom && 'md:border-b'} border-black flex flex-col md:flex-row`}>
        {!reverse && (
          <Box className="w-full md:w-1/2 py-8 px-6 flex flex-col justify-between items-start">
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '35px', md: '80px' },
                mb: { xs: '42px', md: '0' },
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              {title}
            </Typography>
            <Typography sx={{ fontSize: { xs: '15px', md: '30px' }, fontWeight: 400, lineHeight: 'normal' }}>
              {text}
            </Typography>
          </Box>
        )}
        <Box
          className={`hidden md:block w-full md:w-1/2 h-full ${reverse ? 'md:border-r' : 'md:border-l'} border-black`}
        >
          <Box component="img" className="w-full h-full object-cover" src={img.src} alt={img.alt} />
        </Box>
        {reverse && (
          <Box className="w-full md:w-1/2 py-8 px-6 flex flex-col justify-between items-start">
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '35px', md: '80px' },
                mb: { xs: '42px', md: '0' },
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              {title}
            </Typography>
            <Typography sx={{ fontSize: { xs: '15px', md: '30px' }, fontWeight: 400, lineHeight: 'normal' }}>
              {text}
            </Typography>
          </Box>
        )}
        <Box
          className={`block md:hidden w-full md:w-1/2 h-full ${reverse ? 'md:border-r' : 'md:border-l'} border-black`}
        >
          <Box component="img" className="w-full h-full object-cover" src={img.src} alt={img.alt} />
        </Box>
      </Box>
    </Box>
  );
}

export default SplitSection;
