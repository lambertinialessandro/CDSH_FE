import { Box, Typography, useTheme } from '@mui/material';
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { selectStudentsData, setStudentsData } from 'app/store/app/pageSlice';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import ErrorPage from '../general/ErrorPage';
import LoadingPage from '../general/LoadingPage';
import StudentSelector from './StudentSelector';

function Students() {
  const dispatch = useDispatch();
  const theme = useTheme();

  const userLanguage = useSelector(selectUserLanguage);

  const studentsData = useSelector((state) => selectStudentsData(state, userLanguage));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('studentsData:', studentsData);

  useEffect(() => {
    if (studentsData) {
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1);

    fetch(`http://localhost/plainkit-main/api/students?lang=${userLanguage}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setStudentsData({ userLanguage, data: data }));
      })
      .catch((error) => {
        if (userLanguage === 'en') {
          const mockData = {
            intro: {
              headline: 'The students',
              text: 'Studying stage dance at CDSH means not only learning, but also finding like-minded people and friends. You work intensively with people in your field every day. This fosters a diverse exchange and encourages personal development among dancers, choreographers, and performers.',
              image: `${process.env.PUBLIC_URL}/assets/images/students/cdsh-willkommen-1.png`,
            },
            studentGroups: [
              {
                id: 'yuugen',
                name: 'Yugen',
                src: `${process.env.PUBLIC_URL}/assets/images/students/Bildschirmfoto 2025-02-18 um 17.05.47.png`,
                year: {
                  start: 2024,
                  end: 2027,
                },
              },
              {
                id: 'ikigai',
                name: 'Ikigai',
                src: `${process.env.PUBLIC_URL}/assets/images/students/Bildschirmfoto 2025-02-18 um 17.06.05.png`,
                year: {
                  start: 2023,
                  end: 2026,
                },
              },
              {
                id: 'ho\u2019omau',
                name: 'Ho\u2019omau',
                src: `${process.env.PUBLIC_URL}/assets/images/students/Bildschirmfoto 2025-02-18 um 17.06.12.png`,
                year: {
                  start: 2022,
                  end: 2025,
                },
              },
            ],
            footerCta: {
              show: true,
              title: 'Want to get to know us?',
              text: "We'd like to get to know you too. Besides the regular auditions, we're available by email or phone to answer any questions you may have about the training program.",
            },
          };
          dispatch(setStudentsData({ userLanguage, data: mockData }));
        } else {
          const mockData = {
            intro: {
              headline: 'Die Studierende',
              text: 'Ein Studium des Bühnentanzes an der CDSH bedeutet nicht nur Lernen, sondern auch das Finden von Gleichgesinnten und Freundschaften. Du arbeitest täglich intensiv mit Menschen aus deinem Fachbereich zusammen. Dies fördert einen vielfältigen Austausch und unterstützt die persönliche Entwicklung von Tänzer*innen, Choreograf*innen und Performer*innen.',
              image: `${process.env.PUBLIC_URL}/assets/images/students/cdsh-willkommen-1.png`,
            },
            studentGroups: [
              {
                id: 'yuugen',
                name: 'Yugen',
                src: `${process.env.PUBLIC_URL}/assets/images/students/Bildschirmfoto 2025-02-18 um 17.05.47.png`,
                year: {
                  start: 2024,
                  end: 2027,
                },
              },
              {
                id: 'ikigai',
                name: 'Ikigai',
                src: `${process.env.PUBLIC_URL}/assets/images/students/Bildschirmfoto 2025-02-18 um 17.06.05.png`,
                year: {
                  start: 2023,
                  end: 2026,
                },
              },
              {
                id: 'ho\u2019omau',
                name: 'Ho\u2019omau',
                src: `${process.env.PUBLIC_URL}/assets/images/students/Bildschirmfoto 2025-02-18 um 17.06.12.png`,
                year: {
                  start: 2022,
                  end: 2025,
                },
              },
            ],
            footerCta: {
              show: true,
              title: 'Du möchtest uns kennenlernen?',
              text: 'Wir dich ebenfalls. Neben den regulären Auditions sind wir per E-Mail oder telefonisch für dich da, wenn du Fragen rund um die Ausbildung hast.',
            },
          };
          dispatch(setStudentsData({ userLanguage, data: mockData }));
        }

        // TODO: commented for temp deploy
        // console.error('Fetching error:', error);
        // setError(error);
      })
      .finally(() => {
        setLoading(false);
        clearTimeout(timeout);
      });
  }, [userLanguage]);

  if (loading) return <LoadingPage />;
  if (error || !studentsData) return <ErrorPage />;

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
          </Typography>
        </Box>

        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={studentsData.intro.image}
            className="flex-1 w-full"
            sx={{ objectFit: 'cover', height: { xs: '390px', md: '100%' } }}
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
          </Typography>
        </Box>
      </Box>

      <Box
        component="section"
        className="px-[48px] flex justify-center items-start gap-[48px]"
        sx={{ background: theme.palette.secondary.main, py: { xs: '55px', md: '110px' } }}
      >
        <Box className="max-w-[1280px]">
          <div className="text-center">
            <ReactMarkdown components={renderers} children={studentsData.intro.text} />
          </div>
        </Box>
      </Box>

      <StudentSelector classes={studentsData.studentGroups} />

      <Box
        component="section"
        className="flex flex-col justify-center items-center text-center"
        sx={{ py: { xs: '60px', md: '120px' }, px: { xs: 4, md: 6 } }}
      >
        <Typography
          sx={{
            fontSize: { xs: '36px', md: '80px' },
            marginBottom: { xs: '12px', md: '32px' },
            fontWeight: '400',
            color: '#000000',
            lineHeight: '1',
          }}
        >
          {studentsData.footerCta.title}
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
        >
          {studentsData.footerCta.text}
        </Typography>
      </Box>
    </>
  );
}

export default Students;
