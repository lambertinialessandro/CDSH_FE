import { Box, Typography, useTheme } from '@mui/material';
import TeamSelector from './TeamSelector';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { useTranslation } from 'react-i18next';
import { defaultNS as ns_common } from 'translations';
import ReactMarkdown from 'react-markdown';
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';

function Team() {
  const { t } = useTranslation([ns_common]);
  const { button } = t(ns_common);
  const theme = useTheme();

  const [teamData, setTeamData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userLanguage = useSelector(selectUserLanguage);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`http://localhost/plainkit-main/api/team?lang=${userLanguage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setTeamData(data);
      })
      .catch((error) => {
        console.error('Fetching error:', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userLanguage]);

  console.log('teamdata', teamData);

  if (loading) return <Box sx={{ p: 10, textAlign: 'center' }}>Loading content...</Box>;
  if (!teamData) return <Box sx={{ p: 10, textAlign: 'center' }}>Error loading data.</Box>;

  const teamMembers = teamData.teamMembers;

  return (
    <>
      <Box
        component="section"
        className="header relative flex items-center max-h-860-px"
        sx={{ height: { sx: '100%', md: `100vh` }, flexDirection: { xs: 'column-reverse', md: 'row' } }}
      >
        <Box
          className="flex-1 h-full flex flex-col justify-between items-start"
          sx={{
            zIndex: '2',
            width: { xs: '100%', md: '50%' },
            padding: { xs: '46px 56px 46px 56px', md: '0 56px 46px 56px' },
          }}
        >
          <Typography></Typography>
          <Typography
            sx={{
              display: { xs: 'none', md: 'block' },
              fontSize: '80px',
              lineHeight: '85px',
              fontWeight: '400',
            }}
          >
            {teamData.intro.headline}
          </Typography>
          <ReactMarkdown components={renderers} children={teamData.intro.text} />
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={teamData.intro.image}
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
            {teamData.intro.headline}
          </Typography>
        </Box>
      </Box>

      <Box component="section" className="relative">
        <Box className="absolute w-full h-[65%]" sx={{ background: theme.palette.secondary.main, zIndex: '1' }}></Box>

        <Box
          className="px-[48px] mb-[110px] flex flex-col justify-start items-center relative z-[10]"
          sx={{
            gap: { xs: '24px', md: '48px' },
            py: { xs: '55px', md: '110px' },
          }}
        >
          <Box className="max-w-[1280px]">
            <Typography
              className="text-center"
              sx={{
                fontSize: { xs: '35px', md: '80px' },
                fontWeight: '400',
              }}
            >
              {teamData.leadership.headline}
            </Typography>
            <ReactMarkdown components={renderers} children={teamData.leadership.text} />
          </Box>

          <Box className="w-full flex justify-center items-start gap-[24px] flex-wrap">
            {teamMembers.map((member, idx) => (
              <Box key={idx} className="flex flex-col justify-center items-start">
                <Box className="relative mb-[12px]">
                  <Box
                    component="img"
                    src={member.src}
                    className="flex-1 border border-black"
                    sx={{ objectFit: 'cover', aspectRatio: 0.75, width: { xs: '125px', md: '250px' } }}
                  ></Box>
                  {member.id && (
                    <Box
                      component={Link}
                      to={`/team/${member.id}`}
                      className="absolute border border-black rounded-full bottom-0 right-0"
                      sx={{
                        background: '#ffffff',
                        fontSize: { xs: '12px', md: '15px' },
                        px: { xs: '8px', md: '16px' },
                        py: { xs: '2px', md: '2px' },
                        margin: { xs: '8px', md: '16px' },
                      }}
                    >
                      {button.vita}
                    </Box>
                  )}
                </Box>

                <Box className="w-min min-w-full">
                  <Typography
                    className="uppercase"
                    sx={{
                      fontSize: { xs: '12px', md: '15px' },
                      fontWeight: '400',
                      lineHeight: 'normal',
                    }}
                  >
                    {member.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { xs: '12px', md: '15px' },
                      fontWeight: '400',
                      lineHeight: 'normal',
                    }}
                  >
                    {member.role}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        className="flex flex-col justify-center items-center"
        sx={{ background: '#000000', px: { xs: '75px', md: '75px' }, py: { xs: '55px', md: '110px' } }}
      >
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: { xs: '35px', md: '80px' },
            fontWeight: '400',
            mb: { xs: '55px', md: '110px' },
          }}
        >
          {teamData.memoriam.headline}
        </Typography>
        <Box
          className="max-w-[1250px] flex justify-center"
          sx={{
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: { xs: 'center', md: 'start' },
            gap: { xs: '55px', md: '110px' },
          }}
        >
          <Box className="flex flex-col justify-start items-start text-white" sx={{ width: { xs: '100%', md: '50%' } }}>
            <ReactMarkdown components={renderers} children={teamData.memoriam.text_left} />
            <br />
            <ReactMarkdown components={renderers} children={teamData.memoriam.text_right} />
          </Box>
          <Box className="flex flex-col justify-start items-start sticky" sx={{ width: { xs: '100%', md: '50%' } }}>
            <Box
              component="img"
              src={teamData.memoriam.image}
              className="flex-1 w-[500px] mx-auto mb-[24px]"
              sx={{ objectFit: 'cover', aspectRatio: 0.75 }}
            ></Box>
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        className="px-[25px] flex flex-col justify-center items-center text-center"
        sx={{ py: { xs: '55px', md: '110px' } }}
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
          {teamData.teachers.headline}
        </Typography>

        <div className="max-w-[740px] min-w-[50%] text-center">
          <ReactMarkdown components={renderers} children={teamData.teachers.text} />
        </div>
      </Box>

      <TeamSelector
        members={teamData.docentsMembers}
        educationCategories={teamData.educationCategories}
        educationSubjects={teamData.educationSubjects}
      />

      <Box component="section" className="py-[120px] px-[25px] flex flex-col justify-center items-center text-center">
        <Typography
          sx={{
            color: '#000000',
            fontSize: { xs: '35px', md: '80px' },
            fontWeight: '400',
            lineHeight: '1',
            marginBottom: '32px',
          }}
        >
          {teamData.footerCta.title}
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
        >
          {teamData.footerCta.text}
        </Typography>
      </Box>
    </>
  );
}

export default Team;
