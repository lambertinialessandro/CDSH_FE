import { Box, Typography, useTheme } from '@mui/material';

function InfosForInternationalStudents() {
  const theme = useTheme();

  return (
    <>
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
      >
        <Typography variant="h5" color="text.primary">
          InfosForInternationalStudents
        </Typography>
      </Box>
    </>
  );
}

export default InfosForInternationalStudents;
