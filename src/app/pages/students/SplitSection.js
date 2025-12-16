import { Box, Typography, useTheme } from '@mui/material';
import LoopBanner from 'app/shared-components/banner/LoopBanner';
import Carousel from 'app/shared-components/carousel/Carousel';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function SplitSection(props) {
  const { title, text, img = null, projectId, reverse = false, bottom = false } = props;
  const theme = useTheme();
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projectId) {
      setLoading(true);
      fetch(`http://localhost/plainkit-main/api/projects?id=${projectId}`)
        .then((res) => res.json())
        .then((data) => {
          setProjectData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error('Error fetching project in SplitSection:', err);
          setLoading(false);
        });
    }
  }, [projectId]);

  console.log('projectId: ', projectId);
  return (
    <Box className="w-full flex justify-center">
      <Box
        className={`max-w-[1250px] w-full border-t ${bottom && 'border-b'} border-black flex flex-col md:flex-row`}
        component={Link}
        to={`/projects/${projectId}`}
      >
        {!reverse && (
          <Box
            className="w-full md:w-1/2 py-8 px-6 flex flex-col justify-between items-start truncate"
            sx={{
              color: '#000000',
              cursor: 'pointer',
              gap: { xs: '24px', md: '0px' },
              '&:hover': {
                background: '#C8FF75',
              },
            }}
          >
            <Typography
              component="h2"
              sx={{ fontSize: { xs: '30px', md: '70px' }, fontWeight: 400, lineHeight: 'normal' }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                mb: { xs: '24px', md: '0px' },
                fontSize: { xs: '15px', md: '30px' },
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              {text}
            </Typography>
          </Box>
        )}
        <Box
          className={`hidden md:block w-full md:w-1/2 h-full ${reverse ? 'border-r' : 'border-l'} border-black`}
          sx={{ cursor: 'pointer' }}
        >
          <Box component="img" className="w-full h-full object-cover" src={img.src} alt={img.alt} />
        </Box>
        {reverse && (
          <Box
            className="w-full md:w-1/2 py-8 px-6 flex flex-col justify-between items-start truncate"
            sx={{
              color: '#000000',
              cursor: 'pointer',
              gap: { xs: '24px', md: '0px' },
              '&:hover': {
                background: '#C8FF75',
              },
            }}
          >
            <Typography
              component="h2"
              sx={{ fontSize: { xs: '30px', md: '70px' }, fontWeight: 400, lineHeight: 'normal' }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                mb: { xs: '24px', md: '0px' },
                fontSize: { xs: '15px', md: '30px' },
                fontWeight: 400,
                lineHeight: 'normal',
              }}
            >
              {text}
            </Typography>
          </Box>
        )}
        <Box
          className={`block md:hidden w-full md:w-1/2 h-full ${reverse ? 'md:border-r' : 'md:border-l'} border-black`}
          sx={{ cursor: 'pointer' }}
        >
          <Box component="img" className="w-full h-full object-cover" src={img.src} alt={img.alt} />
        </Box>
      </Box>
    </Box>
  );
}

export default SplitSection;
