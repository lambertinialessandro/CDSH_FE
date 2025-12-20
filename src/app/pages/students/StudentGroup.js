import { Box, Typography, useTheme } from '@mui/material';
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';
import AnchorLink from 'app/shared-components/link/AnchorLink';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { selectSelectedStudent, setSelectedStudent } from 'app/store/app/pageSlice';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { defaultNS as ns_common } from 'translations';
import ErrorPage from '../general/ErrorPage';
import LoadingPage from '../general/LoadingPage';
import SplitSection from './SplitSection';

function StudentGroup() {
  const dispatch = useDispatch();
  const { t } = useTranslation([ns_common]);
  const { button } = t(ns_common);
  const theme = useTheme();
  const navigate = useNavigate();
  const { studentUrlName } = useParams();
  const userLanguage = useSelector(selectUserLanguage);

  const selectedStudent = useSelector((state) => selectSelectedStudent(state, userLanguage));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  console.log('selectedStudent', selectedStudent);

  useEffect(() => {
    if (selectedStudent) {
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1);

    fetch(`http://localhost/plainkit-main/api/students?lang=${userLanguage}&id=${studentUrlName}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setSelectedStudent({ userLanguage, data: data }));
      })
      .catch((err) => {
        if (userLanguage === 'en') {
          const mockData = {
            id: 'ho\u2019omau',
            name: 'Ho\u2019omau',
            descriptionLeft:
              'Ho\u2019omau signifies resilience and perseverance. As a class, we value and trust the process of growth, in the many different forms it may come in. By understanding that our journeys as artists won\u2019t always be linear or necessarily',
            descriptionRight:
              'smooth sailing, we are able to steady each other and carry on together. We are a group who keeps moving forward, no matter the obstacles, and in doing so, learns how to take care of each other as dancers and most importantly, as people.',
            studentsHeader: 'The students',
            students:
              'Agnese Fornara Erbetta, Alanna Reimpell Bravo, Alessia Marra, Cristina Vaino, Daria Barbone, Daria Barbone, Denise Landini, Ellen Burgess, Emir Garc\u00eda Pineda, Gina Kudzai Marange, Haeyeon Kang, Kyte Br\u00fcggmann, Luisa Fernanda Rivas Castillo, Nathalia G\u00f3mez Res\u00e9ndiz, Olad\u00e9 Roland Rodolpho Sagbo, Tatjana Walter, Wendy Yeh L\u00f3pez,  Clara B\u00e4hr,  Edwin E. S\u00e1nchez,  Katherine Aileen Osalde Lezama,  Madeleine Julie Reichert',
            src: `${process.env.PUBLIC_URL}/assets/images/students/Bildschirmfoto 2025-02-18 um 17.06.12.png`,
            relatedProjects: [
              {
                id: 'solo_project_2024',
                name: 'Solo project',
                title: 'What does Looking taste like?',
                src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/what_does_looking_taste_like.png`,
                categories: [],
              },
              {
                id: 'meeting_point',
                name: 'Final projet',
                title: 'Meeting Point',
                src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/meeting_point.png`,
                categories: ['Graduates 2025'],
              },
            ],
            year: {
              start: 2022,
              end: 2025,
            },
          };
          dispatch(setSelectedStudent({ userLanguage, data: mockData }));
        } else {
          const mockData = {
            id: 'ho\u2019omau',
            name: 'Ho\u2019omau',
            descriptionLeft:
              'Ho\u2019omau steht für Widerstandskraft und Durchhaltevermögen. Als Klasse schätzen und vertrauen wir dem Prozess des Wachsens – in all den unterschiedlichen Formen, die er annehmen kann. Indem wir verstehen, dass unsere Wege als Künstler*innen nicht immer linear verlaufen oder zwangsläufig',
            descriptionRight:
              'reibungslos sind, können wir uns gegenseitig stabilisieren und gemeinsam weitermachen. Wir sind eine Gruppe, die sich unabhängig von Hindernissen weiterentwickelt und dabei lernt, füreinander zu sorgen – als Tänzer*innen und vor allem als Menschen.',
            studentsHeader: 'Die Studierenden',
            students:
              'Agnese Fornara Erbetta, Alanna Reimpell Bravo, Alessia Marra, Cristina Vaino, Daria Barbone, Daria Barbone, Denise Landini, Ellen Burgess, Emir García Pineda, Gina Kudzai Marange, Haeyeon Kang, Kyte Brüggmann, Luisa Fernanda Rivas Castillo, Nathalia Gómez Reséndiz, Oladé Roland Rodolpho Sagbo, Tatjana Walter, Wendy Yeh López, Clara Bähr, Edwin E. Sánchez, Katherine Aileen Osalde Lezama, Madeleine Julie Reichert',
            src: `${process.env.PUBLIC_URL}/assets/images/students/Bildschirmfoto 2025-02-18 um 17.06.12.png`,
            relatedProjects: [
              {
                id: 'solo_project_2024',
                name: 'Solo-Projekt',
                title: 'What Does Looking Taste Like?',
                src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/what_does_looking_taste_like.png`,
                categories: [],
              },
              {
                id: 'meeting_point',
                name: 'Abschlussprojekt',
                title: 'Meeting Point',
                src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/meeting_point.png`,
                categories: ['Absolvent*innen 2025'],
              },
            ],
            year: {
              start: 2022,
              end: 2025,
            },
          };
          dispatch(setSelectedStudent({ userLanguage, data: mockData }));
        }

        // TODO: commented for temp deploy
        // console.error('Fetching error:', error);
        // setError(error);
      })
      .finally(() => {
        setLoading(false);
        clearTimeout(timeout);
      });
  }, [studentUrlName, userLanguage]);

  if (loading) return <LoadingPage />;
  if (error || !selectedStudent) return <ErrorPage />;

  return (
    <>
      <Box
        component="section"
        className="header relative flex items-center max-h-860-px"
        sx={{ height: { sx: '100%', md: `100vh` }, flexDirection: { xs: 'column-reverse', md: 'row' } }}
      >
        <Box
          className="flex-1 h-full flex-col justify-between items-start"
          sx={{
            zIndex: '2',
            width: { xs: '100%', md: '50%' },
            padding: { xs: '46px 56px 46px 56px', md: '0 56px 46px 56px' },
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <p></p>
          <p></p>
          <Box>
            <Typography
              className="capitalize"
              sx={{
                fontSize: '80px',
                lineHeight: '85px',
                fontWeight: '400',
              }}
            >
              {selectedStudent.name}
            </Typography>
            <Box className="flex flex-col justify-start items-start gap-[4px] mt-[48px]">
              {selectedStudent.relatedProjects.map((project, idx) => (
                <AnchorLink
                  key={idx}
                  to={`/projects/${project.id}`}
                  color="#000"
                  extraSx={{ fontSize: '15px', mb: '1px' }}
                >
                  {project.name}
                </AnchorLink>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography>
              {selectedStudent.year.start} - {selectedStudent.year.end}
            </Typography>
            <Box className="flex flex-col items-start gap-[8px] mt-[48px]">
              <button
                onClick={() => {
                  navigate(`/students`);
                }}
                className="bg-white border border-black rounded-full px-[16px] py-[2px]"
              >
                {button.back}
              </button>
            </Box>
          </Box>
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={selectedStudent.src}
            className="flex-1 w-full relative"
            sx={{ objectFit: 'cover', height: { xs: '390px', md: '100%' } }}
          ></Box>
          <Box
            className=""
            sx={{
              position: 'absolute',
              left: '24px',
              bottom: '12px',
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <Typography
              className="capitalize mix-blend-exclusion"
              sx={{
                fontSize: '30px',
                fontWeight: '400',
                color: '#ffffff',
              }}
            >
              {selectedStudent.name}
            </Typography>

            {selectedStudent.relatedProjects.map((project, idx) => (
              <AnchorLink
                key={idx}
                className="capitalize mix-blend-exclusion"
                to={`/projects/${project.id}`}
                sx={{
                  fontSize: '15px',
                  fontWeight: '400',
                  color: '#ffffff',
                }}
              >
                {project.name}
              </AnchorLink>
            ))}

            <Box className="flex flex-col items-start gap-[32px]">
              <Typography
                className="mix-blend-exclusion"
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: '#ffffff',
                }}
              >
                {selectedStudent.year.start} - {selectedStudent.year.end}
              </Typography>
              <Box className="flex flex-col items-start gap-[8px]">
                <button
                  onClick={() => {
                    navigate(`/students`);
                  }}
                  className="bg-white border border-black rounded-full px-[16px] py-[2px]"
                >
                  {button.back}
                </button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        className="px-[48px] flex justify-center items-start"
        sx={{
          background: theme.palette.secondary.main,
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '24px', md: '48px' },
          py: { xs: '55px', md: '110px' },
        }}
      >
        <Box className="flex-1" sx={{ width: { xs: '100%', md: '50%' } }}>
          <ReactMarkdown components={renderers} children={selectedStudent.descriptionLeft} />
        </Box>
        <Box className="flex-1" sx={{ width: { xs: '100%', md: '50%' } }}>
          <ReactMarkdown components={renderers} children={selectedStudent.descriptionRight} />
        </Box>
      </Box>

      <Box
        component="section"
        className="px-[45px] flex flex-col justify-center items-start"
        sx={{
          mt: { xs: '70px', md: '140px' },
        }}
      >
        {selectedStudent.relatedProjects?.map((project, idx) => {
          const isOdd = idx % 2 === 1;
          console.log('project', project.id);
          return (
            <SplitSection
              key={idx}
              title={project.name}
              to={`/projects/${project.id}`} // qua vai al singolo progetto ??
              text={project.title}
              img={{ src: project.src, alt: project.name }}
              reverse={isOdd}
              bgColor={isOdd && '#8F20FF'}
              color={isOdd && '#ffffff'}
              bottom={idx === selectedStudent.relatedProjects.length - 1}
            />
          );
        })}
      </Box>

      <Box
        component="section"
        className="flex flex-col justify-center items-center text-center"
        sx={{
          py: { xs: '60px', md: '120px' },
          px: { xs: '24px', md: '0px' },
        }}
      >
        <Typography
          sx={{
            color: '#000000',
            fontSize: { xs: '30px', md: '80px' },
            fontWeight: '400',
            lineHeight: '1',
            marginBottom: '32px',
          }}
        >
          {selectedStudent.studentsHeader}
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
        >
          {selectedStudent.students}
        </Typography>
      </Box>
    </>
  );
}

export default StudentGroup;
