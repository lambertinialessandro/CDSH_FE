import { Box } from '@mui/material';

function LoopBanner(props) {
  const { stoppable, children } = props;

  return (
    <Box
      className="flex"
      sx={{
        animation: 'scroll 15s linear infinite',

        '&:hover': stoppable && {
          animationPlayState: 'paused',
        },

        '@keyframes scroll': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-25%)' },
        },
      }}
    >
      {children}
      {children}
      {children}
      {children}
    </Box>
  );
}

export default LoopBanner;
