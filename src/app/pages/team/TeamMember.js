import { Box, Typography, useTheme } from '@mui/material';
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { selectSelectedMember, setSelectedMember } from 'app/store/app/pageSlice';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { defaultNS as ns_common } from 'translations';
import ErrorPage from '../general/ErrorPage';
import LoadingPage from '../general/LoadingPage';

function TeamMember() {
  const dispatch = useDispatch();
  const { t } = useTranslation([ns_common]);
  const { message, button } = t(ns_common);
  const theme = useTheme();
  const navigate = useNavigate();
  const { memberUrlName } = useParams();
  const userLanguage = useSelector(selectUserLanguage);

  const selectedMember = useSelector((state) => selectSelectedMember(state, userLanguage));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  console.log('message.fach', message.fach);

  useEffect(() => {
    if (selectedMember) {
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1);

    fetch(`http://localhost/plainkit-main/api/team?lang=${userLanguage}&id=${memberUrlName}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setSelectedMember({ userLanguage, data: data }));
      })
      .catch((err) => {
        if (userLanguage === 'en') {
          const mockData = {
            id: 'javier_b\u00e1ez',
            name: 'Javier B\u00e1ez',
            biographyLeft:
              '**JAVIER B\u00c1EZ**, born in Mexico, began studying ballet and modern dance in San Luis Potos\u00ec at the Escuela Estatal de Danza. He graduated from the school of the Ballet Independiente in Mexico City. He performed on numerous national and international tours and gave many guest appearances.\nAs a dancer, Javier worked with the Ballett Independiente, at the State Theater L\u00fcbeck, the Metropol Theater Berlin and with the Tanzcompany L\u00fcbeck as well as TanzOrtNord and gave guest performances at the Hamburg State Opera.',
            biographyRight:
              'In 1996, Javier began teaching at the Irene-Olk School in L\u00fcbeck where he taught Graham technique and ballet, as well as at other private contemporary dance institutes and various dance companies. He has been in charge of the CDSH since 2005 where he also works as a choreographer.',
            roles: [
              {
                id: 'School Management',
                name: 'School Management',
              },
              {
                id: 'Choreographer',
                name: 'Choreographer',
              },
              {
                id: 'Teacher',
                name: 'Teacher',
              },
            ],
            subjects: ['Ballet', 'Choreography'],
            src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 2.png`,
          };
          dispatch(setSelectedMember({ userLanguage, data: mockData }));
        } else {
          const mockData = {
            id: 'javier_báez',
            name: 'Javier Báez',
            biographyLeft:
              '**JAVIER BÁEZ**, geboren in Mexiko, begann sein Studium in Ballett und Modern Dance an der Escuela Estatal de Danza in San Luis Potosí. Er schloss die Schule des Ballet Independiente in Mexiko-Stadt ab. Er trat auf zahlreichen nationalen und internationalen Tourneen auf und gab viele Gastauftritte.\nAls Tänzer arbeitete Javier mit dem Ballet Independiente, am Staatstheater Lübeck, am Metropol Theater Berlin sowie mit der Tanzcompany Lübeck und TanzOrtNord und gab Gastauftritte an der Staatsoper Hamburg.',
            biographyRight:
              '1996 begann Javier an der Irene-Olk-Schule in Lübeck zu unterrichten, wo er Graham-Technik und Ballett unterrichtete, sowie an weiteren privaten zeitgenössischen Tanzinstituten und verschiedenen Tanzkompanien. Seit 2005 ist er für die CDSH verantwortlich, wo er zudem als Choreograf tätig ist.',
            roles: [
              {
                id: 'School Management',
                name: 'Schulleitung',
              },
              {
                id: 'Choreographer',
                name: 'Choreograf',
              },
              {
                id: 'Teacher',
                name: 'Lehrkraft',
              },
            ],
            subjects: ['Ballett', 'Choreografie'],
            src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 2.png`,
          };
          dispatch(setSelectedMember({ userLanguage, data: mockData }));
        }

        // TODO: commented for temp deploy
        // console.error('Fetching error:', error);
        // setError(error);
      })
      .finally(() => {
        setLoading(false);
        clearTimeout(timeout);
      });
  }, [memberUrlName, userLanguage]);

  if (loading) return <LoadingPage />;
  if (error || !selectedMember) return <ErrorPage />;

  console.log('selectedMember', selectedMember);
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
          <Typography></Typography>
          <Typography
            className="capitalize"
            sx={{
              fontSize: '80px',
              fontWeight: '400',
            }}
          >
            {selectedMember.name}
          </Typography>
          <Box className="flex justify-start items-center gap-[8px]">
            {selectedMember.roles &&
              selectedMember.roles.map((role, idx) => (
                <Typography
                  key={idx}
                  className="bg-black text-white rounded-full px-[24px] py-[4px] whitespace-nowrap"
                  sx={{ fontSize: '15px' }}
                >
                  {role.name}
                </Typography>
              ))}
          </Box>
          <Box className="flex flex-col items-start gap-[8px]">
            <Typography sx={{ fontSize: '15px' }}>
              {message.fach} {selectedMember.subjects.join(', ')}
            </Typography>
            <button
              onClick={() => {
                navigate(`/team`);
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
            src={selectedMember.src}
            className="flex-1 w-full relative"
            sx={{ objectFit: 'cover', height: { xs: '390px', md: '100%' } }}
          ></Box>
          <Box
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
              {selectedMember.name}
            </Typography>
            <Box className="flex flex-wrap justify-start items-center gap-[8px]">
              {selectedMember.roles &&
                selectedMember.roles.map((role, idx) => (
                  <Typography
                    key={idx}
                    className="bg-black text-white rounded-full px-[24px] py-[4px] whitespace-nowrap"
                    sx={{ fontSize: '12px' }}
                  >
                    {role.name}
                  </Typography>
                ))}
            </Box>
            <Box className="flex flex-col items-start gap-[8px]">
              <Typography className="text-white mix-blend-exclusion" sx={{ fontSize: '12px' }}>
                {message.fach} {selectedMember.subjects.join(', ')}
              </Typography>
              <button
                onClick={() => {
                  navigate(`/team`);
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
          <ReactMarkdown components={renderers} children={selectedMember.biographyLeft} />
        </Box>
        <Box className="flex-1" sx={{ width: { xs: '100%', md: '50%' } }}>
          <ReactMarkdown components={renderers} children={selectedMember.biographyRight} />
        </Box>
      </Box>

      <Box
        component="section"
        className="px-[48px] flex justify-start items-start"
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '24px', md: '48px' },
          py: { xs: '55px', md: '110px' },
        }}
      >
        <Box className="flex flex-col items-start gap-[8px]">
          <button
            onClick={() => {
              navigate(`/team`);
            }}
            className="bg-white border border-black rounded-full px-[16px] py-[2px]"
          >
            {button.back}
          </button>
        </Box>
      </Box>
    </>
  );
}

export default TeamMember;
