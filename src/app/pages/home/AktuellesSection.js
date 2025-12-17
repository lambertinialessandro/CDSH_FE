import { Box, Typography, useTheme } from '@mui/material';
import Carousel from 'app/shared-components/carousel/Carousel';
import { Link } from 'react-router-dom';
// TODO: si puö eliminare
const items = [
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-01.jpg`,
    title: 'Work in Progress 2025: meeting point',
    description:
      'Jedes Jahr finden unsere Work in Progress Vorstellungen und unsere Abschlussvorstellungen unter einem anderen Motto statt.',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-02.jpg`,
    title: 'Abschlussprojekt 2024 : joy',
    description:
      'Jedes Jahr findet das Abschlussprojekt, die finale Prüfungsleistung unserer Absolvent*innen, unter einem anderen Thema statt.',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-03.jpg`,
    title: 'What does Looking taste like?',
    description:
      'Die zentrale Prüfungsleistung im zweiten Ausbildungsjahr der CDSH besteht in der Realisierung einer eigenen Kurzproduktion.',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-04.jpg`,
    title: 'Abschlussprojekt 2023: KONTINUUM',
    description:
      'Jedes Jahr findet das Abschlussprojekt, die finale Prüfungsleistung unserer Absolvent*innen, unter einem anderen Thema statt.',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-01.jpg`,
    title: 'Work in Progress 2025: meeting point',
    description:
      'Jedes Jahr finden unsere Work in Progress Vorstellungen und unsere Abschlussvorstellungen unter einem anderen Motto statt.',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-02.jpg`,
    title: 'Abschlussprojekt 2024 : joy',
    description:
      'Jedes Jahr findet das Abschlussprojekt, die finale Prüfungsleistung unserer Absolvent*innen, unter einem anderen Thema statt.',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-03.jpg`,
    title: 'What does Looking taste like?',
    description:
      'Die zentrale Prüfungsleistung im zweiten Ausbildungsjahr der CDSH besteht in der Realisierung einer eigenen Kurzproduktion.',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-04.jpg`,
    title: 'Abschlussprojekt 2023: KONTINUUM',
    description:
      'Jedes Jahr findet das Abschlussprojekt, die finale Prüfungsleistung unserer Absolvent*innen, unter einem anderen Thema statt.',
  },
  // more images...
];

function Addon({ item }) {
  return (
    <Box className="cursor-pointer group" component={Link} to="/projects/on_the_trail">
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

function AktuellesSection() {
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
          Aktuelles
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
