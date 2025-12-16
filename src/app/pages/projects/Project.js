import { Box, Typography, useTheme } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import ImpressionenSection from './ImpressionenSection';
import { useEffect, useState } from 'react';

const projects = [
  {
    id: 'on_the_trail',
    name: 'On the trail',
    categories: ['Absolvent*innen 2021'],
    subjects: ['Choreographie'],
    src: `${process.env.PUBLIC_URL}/assets/images/projects/project1.png`,
  },
];

function Project(props) {
  const { } = props;
  const navigate = useNavigate();
  const theme = useTheme();
  const { projectUrlId } = useParams();

  //const selectedProject = projects.find((m) => m.id === projectUrlId);
  const [selectedProject, setselectedProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log('selectedProject', selectedProject);
  useEffect(() => {
    if (projectUrlId) {
      setLoading(true);
      fetch(`http://localhost/plainkit-main/api/projects?id=${projectUrlId}`)
        .then((res) => res.json())
        .then((data) => {
          setselectedProjectData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching project in SplitSection:', err);
          setLoading(false);
        });
    }
  }, [projectUrlId]);

  if (loading) {
    return <Box sx={{ p: 10, textAlign: 'center' }}>Loading content...</Box>;
  }

  if (!selectedProject || selectedProject.error) {
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
            {selectedProject.chategories.map((role, idx) => (
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
              zurück
            </button>
          </Box>
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={selectedProject.imageSrc}
            className="flex-1 w-full relative"
            sx={{ objectFit: 'cover', height: {xs: "390px", md: "100%"} }}
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
              {selectedProject.chategories.map((role, idx) => (
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
                zurück
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
        <Typography
          sx={{
            flex: '1',
            fontSize: { xs: '15px', md: '30px' },
            fontWeight: '400',
          }}
        >
          {selectedProject.descriptionLeft}
        </Typography>
        <Typography
          sx={{
            flex: '1',
            fontSize: { xs: '15px', md: '30px' },
            fontWeight: '400',
          }}
        >
          {selectedProject.descriptionRight}
        </Typography>
      </Box>

      <ImpressionenSection imgSet= {selectedProject.impressions} />
    </>
  );
}

export default Project;
