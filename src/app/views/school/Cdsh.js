import { Box, useTheme } from '@mui/material';

function Cdsh(props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '1200px',
        margin: 'auto',
        backgroundColor: theme.palette.background.default,
      }}
    ></Box>
  );
}

export default Cdsh;
