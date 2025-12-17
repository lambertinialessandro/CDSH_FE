import { Box, Typography } from '@mui/material';

function VideoLooper(props) {
  const { video } = props;
  return (
    <Box
      component="section"
      className="header relative flex items-center"
      sx={{ height: '100vh', position: 'relative', overflow: 'hidden' }}
    >
      {/* Overlay content */}
      <Box
        className="h-full flex justify-start items-end"
        sx={{
          position: 'relative',
          zIndex: 2,
          px: { xs: 4, sm: 6, md: 12 }, // responsive horizontal padding
          pb: { xs: 4, sm: 6, md: 8 }, // responsive bottom padding
          width: '100%',
        }}
      >
        <Box
          sx={{
            color: '#ffffff',
            lineHeight: 1.2,
          }}
        >
          <Typography
            sx={{
              color: '#ffffff',
              fontSize: { xs: '34px', sm: '40px', md: '58px' },
              fontWeight: 400,
            }}
          >
            Contemporary Dance
          </Typography>
          <Typography
            sx={{
              color: '#ffffff',
              fontSize: { xs: '34px', sm: '40px', md: '58px' },
              fontWeight: 400,
            }}
          >
            School Hamburg
          </Typography>
        </Box>
      </Box>

      {/* Video background */}
      <Box
        component="video"
        autoPlay
        playsInline // ensures autoplay works on iOS Safari
        loop
        muted
        disablePictureInPicture
        src={video}
        className="absolute top-0 left-0 w-full h-full"
        sx={{
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      {/* Optional gradient overlay for better text contrast */}
      <Box
        className="absolute top-0 left-0 w-full h-full"
        sx={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 100%)',
          zIndex: 1,
        }}
      />
    </Box>
  );
}

export default VideoLooper;
