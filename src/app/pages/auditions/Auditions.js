import { Box, Typography, useTheme } from '@mui/material';
import FormExample from './FormExample';
import CustomTextField from 'app/shared-components/formComponents/CustomTextField';

function Auditions() {
  const theme = useTheme();

  return (
    <>
      <Box
        component="section"
        className="header relative flex items-center max-h-860-px"
        sx={{ height: `100vh` }}
      >
        <Box
          className="flex-1 w-[50%] h-full flex flex-col justify-center items-start px-[56px] pb-[46px] gap-[18px]"
          sx={{ zIndex: '2' }}
        >
          <Typography
            sx={{
              fontSize: '80px',
              fontWeight: '400',
              lineHeight: 'normal',
            }}
          >
            Auditions
          </Typography>
          <Typography
            className="rounded-full px-[18px] py-[6px]"
            sx={{
              color: '#000000',
              fontSize: '15px',
              fontWeight: '400',
              lineHeight: 'normal',
              background: theme.palette.primary.main,
            }}
          >
            Download Checkliste 2025
          </Typography>
        </Box>
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/assets/images/auditions/cdsh-willkommen-1.png`}
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
        <Typography className="text-center" sx={{ color: '#000000 ', fontSize: '30px', fontWeight: '400', lineHeight: 'normal' }}>
          Du kannst dich bei Interesse an unseren Aufnahmeprüfungen für die Video Audition registrieren. Sie ist
          gleichwertig mit einer Audition vor Ort und besteht im Wesentlichen aus der Einsendung von Videos, die uns als
          Bewertungsgrundlage dienen.
        </Typography>
        </Box>
      </Box>

      <Box component="section" className="py-[110px] px-[48px] flex justify-center items-start gap-[48px]">
        <FormExample />

        <CustomTextField input={{label: "Surname", size: "small", }}/>
      </Box>
    </>
  );
}

export default Auditions;
