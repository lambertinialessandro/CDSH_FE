import { Box, Typography, useTheme } from '@mui/material';
import Carousel from 'app/shared-components/carousel/Carousel';
import { Link } from 'react-router-dom';


function Addon({ item }) {
  return (
    <Box className="cursor-pointer group" component={Link} to={`/projects/${item.projectId}`}>
      <Typography
        sx={{
          fontSize: { xs: '18px', sm: '22px', md: '30px' },
          fontWeight: 500,
          py: 2,
          lineHeight: 1.2,
          '.group:hover &': {
            textDecoration: 'underline',
          },
        }}
      >
        {item.title}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '14px', md: '15px' },
          lineHeight: 1.3,
        }}
      >
        {item.description}
      </Typography>
    </Box>
  );
}

function AktuellesSection({ items, title }) {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        background: theme.palette.secondary.main,
        py: { xs: 8, md: 14 },
        px: { xs: 2, sm: 4, md: 8 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box className="max-w-[1280px] w-full flex flex-col items-center">
        <Typography
          sx={{
            mb: { xs: 6, md: 14 },
            fontSize: { xs: '40px', md: '80px' },
            fontWeight: 400,
            color: '#000',
          }}
        >
          {title}
        </Typography>
        <Carousel
          items={items}
          gap={16}
          itemWidth={280} // desktop baseline
          itemHeight={180}
          Addon={Addon}
        />
      </Box>
    </Box>
  );
}

export default AktuellesSection;
