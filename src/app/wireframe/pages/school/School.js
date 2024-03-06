import { Box, Typography, useTheme } from '@mui/material';

function School(props) {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'start',
          maxWidth: '1200px',
          margin: 'auto',
          zIndex: 2,
          position: 'relative',
          marginBottom: '40px',
          height: '800px',
          paddingTop: '40px',
          backdropFilter: 'blur(11px)',
          backgroundColor: theme.palette.background.transparent,
        }}
      >
        <Typography variant="h1" color="text.primary">
          The CDSH
        </Typography>
        <Box>
          <Typography variant="h6" color="text.primary" sx={{ fontSize: '24px' }}>
            The training program at the CDSH combines the diversity of contemporary dance with the
            individual artistic needs of the students and the demands of the international dance
            sector.
          </Typography>
          <Typography variant="p" color="text.primary" sx={{ fontWeight: 200, fontSize: '20px' }}>
            The Contemporary Dance School Hamburg offers contemporary dance at a high level and the
            development of your artistic personality in close dialogue with experienced mentors from
            all over the world. The daily training prepares you for your career as a professional
            dancer.
          </Typography>
          <Typography variant="p" color="text.primary" sx={{ fontWeight: 200, fontSize: '20px' }}>
            As an officially recognised school for contemporary dance, the CDSH offers a three-year
            on-hand dance training, gets you involved with other artists and cooperates with many
            relevant sectors in dance education. You're challenged and motivated to develop
            technically, artistically and creatively throughout the process. Choreographic project
            work gives you a feeling for professional work and you can gather stage experience with
            regular theatrical appearances. An experienced team of artists and instructors provide
            you with the support you need to develop your potential during your training.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default School;
