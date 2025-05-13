import { Box, Typography, useTheme } from '@mui/material';

function Section(props) {
  const { children } = props;
  const theme = useTheme();

  return (
    <Box
      component="section"
      className="flex justify-center"
      sx={{
        background: theme.palette.primary.main,
      }}
    >
      {children}
    </Box>
  );
}

export default Section;
