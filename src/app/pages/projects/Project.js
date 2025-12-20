import { Box, Typography, useTheme } from '@mui/material';
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { defaultNS as ns_common } from 'translations';
import ImpressionenSection from './ImpressionenSection';
import { selectSelectedProject, setSelectedProject } from 'app/store/app/pageSlice';

function Project(props) {
  const dispatch = useDispatch();
  const { t } = useTranslation([ns_common]);
  const { button } = t(ns_common);
  const navigate = useNavigate();
  const theme = useTheme();
  const { projectUrlId } = useParams();
  const userLanguage = useSelector(selectUserLanguage);

  const selectedProject = useSelector((state) => selectSelectedProject(state, userLanguage));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log('selectedProject', selectedProject);
  useEffect(() => {
    if (projectUrlId) {
      if (selectedProject) {
      setLoading(false);
      setError(null);
      return;
    }

      setLoading(true);
      setError(null);

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 1);

      fetch(`http://localhost/plainkit-main/api/projects?lang=${userLanguage}&id=${projectUrlId}`, {
        signal: controller.signal,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          dispatch(setSelectedProject({ userLanguage, data: data}));
        })
        .catch((err) => {
          if (userLanguage === 'en') {
            const mockData = {
              id: 'solo_project_2024',
              name: 'Solo project',
              title: 'What does Looking taste like?',
              imageSrc: `${process.env.PUBLIC_URL}/assets/images/aktuelles/what_does_looking_taste_like.png`,
              categories: [],
              subjects: ['Solo project'],
              descriptionLeft:
                'The central examination requirement in the second year of the CDSH program consists of creating an original short production. This year, 19 dancers developed short pieces, which, under the theme "What does Looking Taste Like?", explore a wide range of topics.',
              descriptionRight:
                'The **Ho\u2019Omau class** invites you to embark on a delicious journey of three different dinners, each featuring a carefully assembled six-course meal. A variety of flavors is guaranteed to delight even the most refined and discerning palate. You will taste coldness and darkness, splashed with a dash of tenderness, as well as warmth and joy, accompanied by vibrant colors and aromas. A feast for the senses.\n\n*Whatever your eyes crave, we are.*',
              impressions: [
                {
                  src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/what_does_looking_taste_like.png`,
                },
              ],
            };
            dispatch(setSelectedProject({ userLanguage, data: mockData}));
          } else {
            const mockData = {
              id: 'solo_project_2024',
              name: 'Solo-Projekt',
              title: 'What Does Looking Taste Like?',
              imageSrc: `${process.env.PUBLIC_URL}/assets/images/aktuelles/what_does_looking_taste_like.png`,
              categories: [],
              subjects: ['Solo-Projekt'],
              descriptionLeft:
                'Die zentrale Prüfungsleistung im zweiten Ausbildungsjahr der CDSH besteht in der Entwicklung einer eigenständigen Kurzproduktion. In diesem Jahr haben 19 Tänzer*innen kurze Stücke erarbeitet, die sich unter dem Thema „What Does Looking Taste Like?“ mit einer Vielzahl unterschiedlicher Fragestellungen auseinandersetzen.',
              descriptionRight:
                'Die **Ho’Omau-Klasse** lädt dich ein zu einer genussvollen Reise durch drei unterschiedliche Dinner-Erlebnisse, die jeweils aus einem sorgfältig zusammengestellten Sechs-Gänge-Menü bestehen. Eine Vielfalt an Geschmacksrichtungen verspricht, selbst die feinsten und anspruchsvollsten Gaumen zu begeistern. Du wirst Kälte und Dunkelheit kosten, verfeinert mit einem Hauch von Zärtlichkeit, ebenso wie Wärme und Freude, begleitet von leuchtenden Farben und intensiven Aromen. Ein Fest für die Sinne.\n\n*Was immer deine Augen begehren – wir sind es.*',
              impressions: [
                {
                  src: `${process.env.PUBLIC_URL}/assets/images/aktuelles/what_does_looking_taste_like.png`,
                },
              ],
            };
            dispatch(setSelectedProject({ userLanguage, data: mockData}));
          }

          // TODO: commented for temp deploy
          // console.error('Fetching error:', error);
          // setError(error);
        })
        .finally(() => {
          setLoading(false);
          clearTimeout(timeout);
        });
    }
  }, [projectUrlId, userLanguage]);

  if (loading) {
    return <Box sx={{ p: 10, textAlign: 'center' }}>Loading content...</Box>;
  }

  if (error || !selectedProject || selectedProject.error) {
    return <Box sx={{ p: 10, textAlign: 'center' }}>Project not found.</Box>;
  }

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

          <Typography
            className="capitalize"
            sx={{
              fontSize: '80px',
              lineHeight: '85px',
              fontWeight: '400',
            }}
          >
            {selectedProject.title}
          </Typography>
          <Box className="flex justify-start items-center gap-[8px]">
            {selectedProject.categories.map((role, idx) => (
              <span
                key={idx}
                className="bg-black text-white rounded-full px-[24px] py-[4px]"
                style={{ fontSize: '15px' }}
              >
                {role}
              </span>
            ))}
          </Box>
          <Box className="flex flex-col items-start gap-[32px]">
            <Typography>Fach: {selectedProject.subjects.join(', ')}</Typography>
            <button
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  navigate('/students');
                }
              }}
              className="bg-white border border-black rounded-full px-[16px] py-[2px]"
            >
              {button.back}
            </button>
          </Box>
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={selectedProject.imageSrc}
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
            <p></p>
            <p></p>

            <Typography
              className="capitalize mix-blend-exclusion"
              sx={{
                fontSize: '30px',
                fontWeight: '400',
                color: '#ffffff',
              }}
            >
              {selectedProject.name}
            </Typography>

            <Box className="flex justify-start items-center gap-[8px]">
              {selectedProject.categories.map((role, idx) => (
                <span
                  key={idx}
                  className="bg-black text-white rounded-full px-[24px] py-[4px]"
                  style={{ fontSize: '12px' }}
                >
                  {role}
                </span>
              ))}
            </Box>

            <Box className="flex flex-col items-start gap-[32px]">
              <Typography className="text-white mix-blend-exclusion">
                Fach: {selectedProject.subjects.join(', ')}
              </Typography>
              <button
                onClick={() => {
                  if (window.history.length > 1) {
                    navigate(-1);
                  } else {
                    navigate('/students');
                  }
                }}
                className="bg-white border border-black rounded-full px-[16px] py-[2px]"
              >
                {button.back}
              </button>
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
          <ReactMarkdown components={renderers} children={selectedProject.descriptionLeft} />
        </Box>
        <Box className="flex-1" sx={{ width: { xs: '100%', md: '50%' } }}>
          <ReactMarkdown components={renderers} children={selectedProject.descriptionRight} />
        </Box>
      </Box>

      <ImpressionenSection imgSet={selectedProject.impressions} />
    </>
  );
}

export default Project;
