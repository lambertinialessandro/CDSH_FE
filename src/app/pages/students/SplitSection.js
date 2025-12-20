import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function SplitSection(props) {
  const { title, text, img = null, to, reverse = false, bottom = false } = props;

  return (
    <Box className="w-full flex justify-center">
      <Box
        className={`max-w-[1250px] w-full border-t ${bottom && 'border-b'} border-black flex flex-col md:flex-row`}
        component={Link}
        to={to}
      >
        {!reverse && (
          <Box
            className="w-full md:w-1/2 py-8 px-6 flex flex-col justify-between items-start truncate group"
            sx={{
              color: '#000000',
              cursor: 'pointer',
              gap: { xs: '24px', md: '0px' },
              '&:hover': {
                background: '#C8FF75',
              },
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '30px', md: '70px' },
                fontWeight: 400,
                lineHeight: 'normal',
                '.group:hover &': {
                  textDecoration: 'underline',
                },
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                mb: { xs: '24px', md: '0px' },
                fontSize: { xs: '15px', md: '30px' },
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              {text}
            </Typography>
          </Box>
        )}
        <Box
          className={`hidden md:block w-full md:w-1/2 h-full ${reverse ? 'border-r' : 'border-l'} border-black`}
          sx={{ cursor: 'pointer' }}
        >
          <Box component="img" className="w-full h-full object-cover" src={img.src} alt={img.alt} />
        </Box>
        {reverse && (
          <Box
            className="w-full md:w-1/2 py-8 px-6 flex flex-col justify-between items-start truncate group"
            sx={{
              color: '#000000',
              cursor: 'pointer',
              gap: { xs: '24px', md: '0px' },
              '&:hover': {
                background: '#C8FF75',
              },
            }}
          >
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '30px', md: '70px' },
                fontWeight: 400,
                lineHeight: 'normal',
                '.group:hover &': {
                  textDecoration: 'underline',
                },
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                mb: { xs: '24px', md: '0px' },
                fontSize: { xs: '15px', md: '30px' },
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              {text}
            </Typography>
          </Box>
        )}
        <Box
          className={`block md:hidden w-full md:w-1/2 h-full ${reverse ? 'md:border-r' : 'md:border-l'} border-black`}
          sx={{ cursor: 'pointer' }}
        >
          <Box component="img" className="w-full h-full object-cover" src={img.src} alt={img.alt} />
        </Box>
      </Box>
    </Box>
  );
}

export default SplitSection;
