import { Box, Typography, useTheme } from '@mui/material';
import StudentSelector from './StudentSelector';

function Students() {
  const theme = useTheme();

  return (
    <>
      <Box
        component="section"
        className="header relative flex items-center max-h-860-px"
        sx={{ height: { sx: '100%', md: `100vh` }, flexDirection: { xs: 'column-reverse', md: 'row' } }}
      >
        <Box
          className="flex-1 h-full flex-col justify-center items-start"
          sx={{
            zIndex: '2',
            display: { xs: 'none', md: 'flex' },
            width: { xs: '100%', md: '50%' },
            padding: { xs: '46px 56px 46px 56px', md: '0 56px 46px 56px' },
          }}
        >
          <Typography
            sx={{
              fontSize: '80px',
              lineHeight: '85px',
              fontWeight: '400',
            }}
          >
            Die Studierenden
          </Typography>
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/assets/images/students/cdsh-willkommen-1.png`}
            className="flex-1 w-full h-full"
            sx={{ objectFit: 'cover' }}
          ></Box>
          <Typography
            className="mix-blend-exclusion"
            sx={{
              position: 'absolute',
              left: '24px',
              bottom: '12px',
              display: { xs: 'block', md: 'none' },
              fontSize: '50px',
              lineHeight: '55px',
              fontWeight: '400',
              color: 'white',
            }}
          >
            Die Studierenden
          </Typography>
        </Box>
      </Box>

      <Box
        component="section"
        className="px-[48px] flex justify-center items-start gap-[48px]"
        sx={{ background: theme.palette.secondary.main, py: { xs: '55px', md: '110px' } }}
      >
        <Box className="max-w-[1280px]">
          <Typography
            className="text-center"
            sx={{
              fontSize: { xs: '15px', md: '30px' },
              fontWeight: '400',
            }}
          >
            Bühnentanz an der CDSH zu studieren heißt nicht nur lernen, sondern auch Gleichgesinnte und Freunde finden.
            Du arbeitest täglich intensiv mit Menschen deines Faches zusammen. Auf diese Weise entsteht ein vielfältiger
            Austausch und eine Anregung zur persönlichen Entwicklung unter Tänzer*innen, Choreograf*innen und
            Performer*innen.
          </Typography>
        </Box>
      </Box>

      <StudentSelector />

      <Box
        component="section"
        className="flex flex-col justify-center items-center text-center"
        sx={{ py: { xs: '60px', md: '120px' } }}
      >
        <Typography
          sx={{
            color: '#000000',
            fontSize: { xs: '35px', md: '80px' },
            fontWeight: '400',
            lineHeight: '1',
            marginBottom: '32px',
          }}
        >
          Du möchtest uns kennenlernen?
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
        >
          Wir dich ebenfalls. Neben den regulären Auditions sind wir bei Fragen rund um die Ausbildung per Mail oder
          telefonisch für dich da.
        </Typography>
      </Box>
    </>
  );
}

export default Students;
