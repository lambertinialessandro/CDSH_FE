import { Box, Typography, useTheme } from '@mui/material';
import StudentSelector from './StudentSelector';

function Students() {
  const theme = useTheme();

  return (
    <>
      <Box
        component="section"
        className="header relative flex items-center max-h-860-px"
        sx={{ height: `100vh` }}
      >
        <Box
          className="flex-1 w-[50%] h-full flex flex-col justify-center items-start px-[56px] pb-[46px]"
          sx={{ zIndex: '2' }}
        >
          <Typography
            sx={{
              fontSize: '80px',
              fontWeight: '400',
            }}
          >
            Die Studierenden
          </Typography>
        </Box>
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/assets/images/students/cdsh-willkommen-1.png`}
          className="flex-1 w-[50%] h-full"
          sx={{ objectFit: 'cover' }}
        ></Box>
      </Box>

      <Box
        component="section"
        className="py-[110px] px-[48px] flex justify-center items-start gap-[48px]"
        sx={{ background: theme.palette.secondary.main }}
      >
        <Box className="max-w-[1280px]">
          <Typography
            className="text-center"
            sx={{
              fontSize: '30px',
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

      <Box component="section" className="py-[120px] flex flex-col justify-center items-center text-center">
        <Typography
          sx={{ color: '#000000', fontSize: '80px', fontWeight: '400', lineHeight: '1', marginBottom: '32px' }}
        >
          Du möchtest uns kennenlernen?
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: '30px', fontWeight: '400' }}
        >
          Wir dich ebenfalls. Neben den regulären Auditions sind wir bei Fragen rund um die Ausbildung per Mail oder
          telefonisch für dich da.
        </Typography>
      </Box>
    </>
  );
}

export default Students;
