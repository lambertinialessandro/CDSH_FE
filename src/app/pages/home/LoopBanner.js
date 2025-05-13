import { Box, Typography } from '@mui/material';

function LoopBanner(props) {
  const { children } = props;

  return (
    <Box
      className="flex"
      sx={{
        animation: 'scroll 15s linear infinite',

        '&:hover': {
          animationPlayState: 'paused',
        },

        '@keyframes scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }}
    >
      {children}
      {children}
    </Box>
  );
}

export default LoopBanner;
