import { Box, Typography, useTheme } from '@mui/material';
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';
import { defaultNS as ns_common } from 'translations';

function TeamMember() {
  const { t } = useTranslation([ns_common]);
    const { button } = t(ns_common);
  const theme = useTheme();
  const navigate = useNavigate();
  const { memberUrlName } = useParams();

  const [selectedMember, setSelectedMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost/plainkit-main/api/team?id=${memberUrlName}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Member not found');
        }
        return res.json();
      })
      .then((data) => {
        setSelectedMember(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error:', err);
        setError(true);
        setLoading(false);
      });
  }, [memberUrlName]);

  if (loading) return <Box sx={{ p: 10, textAlign: 'center' }}>Laden...</Box>;
  if (error || !selectedMember) return <Box sx={{ p: 10, textAlign: 'center' }}>Mitglied nicht gefunden.</Box>;

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
                  className="bg-black text-white rounded-full px-[24px] py-[4px]"
                  sx={{ fontSize: '15px' }}
                >
                  {role.name}
                </Typography>
              ))}
          </Box>
          <Box className="flex flex-col items-start gap-[8px]">
            <Typography sx={{ fontSize: '15px' }}>Fach: {selectedMember.subjects.join(', ')}</Typography>
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
            <Box className="flex justify-start items-center gap-[8px]">
              {selectedMember.roles &&
                selectedMember.roles.map((role, idx) => (
                  <Typography
                    key={idx}
                    className="bg-black text-white rounded-full px-[24px] py-[4px]"
                    sx={{ fontSize: '12px' }}
                  >
                    {role.name}
                  </Typography>
                ))}
            </Box>
            <Box className="flex flex-col items-start gap-[8px]">
              <Typography className="text-white mix-blend-exclusion" sx={{ fontSize: '12px' }}>
                Fach: {selectedMember.subjects.join(', ')}
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
        <div flex="1">
          <ReactMarkdown components={renderers} children={selectedMember.biographyLeft} />
        </div>
        <div flex="1">
          <ReactMarkdown components={renderers} children={selectedMember.biographyRight} />
        </div>
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
