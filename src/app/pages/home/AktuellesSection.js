import { Box, Typography, useTheme } from '@mui/material';
import Carousel from 'app/shared-components/carousel/Carousel';

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
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-05.jpg`,
    title: 'Title',
    description: 'Description',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-06.jpg`,
    title: 'Title',
    description: 'Description',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-07.jpg`,
    title: 'Title',
    description: 'Description',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-08.jpg`,
    title: 'Title',
    description: 'Description',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-09.jpg`,
    title: 'Title',
    description: 'Description',
  },
  {
    src: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-10.jpg`,
    title: 'Title',
    description: 'Description',
  },
];

function Addon({ item }) {
  return (
    <>
      <Typography className="text-[30px] py-[16px] leading-[normal]">{item.title}</Typography>
      <Typography className="text-[15px] leading-[1.25]">{item.description}</Typography>
    </>
  );
}

/* function Addon({ item }) {
  return (
    <>
      <Typography className="text-[30px] py-[16px]" sx={{ lineHeight: 'normal' }}>
        {item.title}
      </Typography>
      <Typography className="text-[15px]" sx={{ lineHeight: 1.25 }}>
        {item.description}
      </Typography>
    </>
  );
} */

function AktuellesSection() {
  const theme = useTheme();

  return (
    <Box
      component="section"
      className="py-[110px] flex flex-col justify-center items-center"
      sx={{ background: theme.palette.secondary.main }}
    >
      <Typography className="mb-[110px]" sx={{ color: '#000000', fontSize: '80px', fontWeight: '400' }}>
        Aktuelles
      </Typography>
      <Carousel items={items} gap={32} itemWidth={321} itemHeight={195} Addon={Addon} />
    </Box>
  );
}

export default AktuellesSection;
