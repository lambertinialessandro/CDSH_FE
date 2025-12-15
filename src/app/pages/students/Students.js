import { Box, Typography, useTheme } from '@mui/material';
import StudentSelector from './StudentSelector';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserLanguage } from 'app/store/app/mainSlice';

function Students() {
  const theme = useTheme();

  const [studentsData, setStudentsData] = useState(null);
  const userLanguage = useSelector(selectUserLanguage);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('studentsData:', studentsData);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`http://localhost/plainkit-main/api/students?lang=${userLanguage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setStudentsData(data);
      })
      .catch((error) => {
        console.error('Fetching error:', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userLanguage]);
  if (loading) return <Box sx={{ p: 10, textAlign: 'center' }}>Loading content...</Box>;
  if (!studentsData) return <Box sx={{ p: 10, textAlign: 'center' }}>Error loading data.</Box>;

  const studentGroups = studentsData.studentGroups;

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
            {studentsData.intro.headline}
            {/* Die Studierenden */}
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
            {studentsData.intro.headline}
            {/* Die Studierenden */}
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
            {studentsData.intro.text}
            {/*Bühnentanz an der CDSH zu studieren heißt nicht nur lernen, sondern auch Gleichgesinnte und Freunde finden.
            Du arbeitest täglich intensiv mit Menschen deines Faches zusammen. Auf diese Weise entsteht ein vielfältiger
            Austausch und eine Anregung zur persönlichen Entwicklung unter Tänzer*innen, Choreograf*innen und
            Performer*innen. */}
          </Typography>
        </Box>
      </Box>

      <StudentSelector classes={studentsData.studentGroups} />

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
          {studentsData.footerCta.title}
          {/*Du möchtest uns kennenlernen?*/}
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
        >
          {studentsData.footerCta.text}
          {/*Wir dich ebenfalls. Neben den regulären Auditions sind wir bei Fragen rund um die Ausbildung per Mail oder
          telefonisch für dich da.*/}
        </Typography>
      </Box>
    </>
  );
}

export default Students;
