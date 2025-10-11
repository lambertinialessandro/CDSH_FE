import { ArrowForward } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import LoopBanner from 'app/shared-components/banner/LoopBanner';
import BigLink from 'app/shared-components/link/BigLink';
import Carousel from './Carousel';
import SubjectSelector from './SubjectSelector';
import InteractiveSubjects from './InteractiveSubjects';

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
      <Typography className="text-[30px] py-[16px]" sx={{ lineHeight: 'normal' }}>
        {item.title}
      </Typography>
      <Typography className="text-[15px]" sx={{ lineHeight: 1.25 }}>
        {item.description}
      </Typography>
    </>
  );
}

function Ausbildung() {
  const theme = useTheme();

  return (
    <>
      <Box component="section" className="header relative flex items-center max-h-860-px" sx={{ height: `100vh` }}>
        <Box
          className="flex-1 w-[50%] h-full flex flex-col justify-center items-start px-[56px] pb-[46px]"
          sx={{ zIndex: '2' }}
        >
          <Typography
            sx={{
              fontSize: '80px',
              fontWeight: '400',
              lineHeight: 'normal',
            }}
          >
            Ausbildung: Aufbau, Fächer Kosten
          </Typography>
        </Box>
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/assets/images/ausbildung/cdsh-willkommen-1.png`}
          className="flex-1 w-[50%] h-full"
          sx={{ objectFit: 'cover' }}
        ></Box>
      </Box>

      <Box
        component="section"
        className="py-[110px] px-[48px] flex justify-center items-start gap-[48px]"
        sx={{ background: theme.palette.secondary.main }}
      >
        <Typography
          className="flex-1"
          sx={{
            fontSize: '30px',
            fontWeight: '400',
          }}
        >
          Wir ermöglichen den Tänzer*innen eine nachhaltige Beschäftigung mit unterschiedlichen zeitgenössischen und
          klassischen Tanztechniken und -stilen sowie die Ausbildung in zahlreichen Bewegungs- und Ausdrucksformen zur
          Vorbereitung auf den Beruf. Neben dem regulären Training laden wir regelmäßig internationale Gäste ein, die
          ihr Wissen mit unseren Auszubildenden teilen.
        </Typography>
        <Typography
          className="flex-1"
          sx={{
            fontSize: '30px',
            fontWeight: '400',
          }}
        >
          Die Förderung individueller Wünsche des Einzelnen und der Gruppe sind Bestandteil der Zielsetzung der CDSH.
          Wir reagieren auf die Bedürfnisse unserer Studierenden und auf aktuelle Ansprüche des professionellen Umfeldes
          – unser Programm ist in ständigem Wandel begriffen.
        </Typography>
      </Box>

      <Box
        component="section"
        className="flex justify-start items-center w-full h-[127px] overflow-hidden mt-[120px]"
        sx={{ background: theme.palette.primary.main }}
      >
        <LoopBanner stoppable>
          <Typography
            className="min-w-max flex items-center"
            sx={{
              color: '#000000',
              fontSize: '80px',
              fontWeight: '400',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              marginRight: '45px',
            }}
          >
            DIE AUDITION TERMINE 2025 SIND JETZT ONLINE.
            <BigLink
              extraSx={{
                display: 'flex',
                height: 'min-content',
                marginLeft: '24px',

                color: 'white',
                fontSize: '80px',
                fontWeight: '400',
                whiteSpace: 'nowrap',
              }}
              fontSize="80px"
              lineHeight="5px"
              color="#000000"
            >
              JETZT ANMELDEN <ArrowForward fontSize={'80px'} />
            </BigLink>
          </Typography>
        </LoopBanner>
      </Box>

      <InteractiveSubjects />

      <SubjectSelector />

      <Box component="section" className="py-[120px] flex flex-col justify-center items-center text-center gap-[32px]">
        <Typography
          sx={{ color: '#000000', fontSize: '80px', fontWeight: '400', lineHeight: '1', marginBottom: '32px' }}
        >
          Aufbau & Struktur
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: '30px', fontWeight: '400' }}
        >
          Die dreijährige Ausbildung richtet sich an Bewerber*innen mit soliden Vorkenntnissen in zeitgenössischem Tanz
          und Ballett. Die Aufnahme erfolgt über Auditions.
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: '15px', fontWeight: '400' }}
        >
          Credits aus anderen Studiengängen können u.U. angerechnet werden. Lorem Ipsum ... Studium in ECTS übersetzen.
        </Typography>
      </Box>

      <Box component="section" className="px-[45px] flex flex-col justify-center items-start">
        <Box className="w-full flex justify-center">
          <Box className="max-w-[1250px] border-y border-black flex">
            <Box
              className="w-[50%] py-[32px] pl-[32px] flex flex-col justify-between items-start"
              sx={{ background: theme.palette.primary.main }}
            >
              <Typography sx={{ color: '#000000', fontSize: '80px', fontWeight: '400', lineHeight: 'normal' }}>
                Erstes Jahr
              </Typography>
              <Typography sx={{ color: '#000000 ', fontSize: '30px', fontWeight: '400', lineHeight: 'normal' }}>
                Grundlagen
              </Typography>
            </Box>
            <Box className="w-[50%] h-[460px] py-[32px] pl-[32px] border-l border-black">
              <Typography sx={{ color: '#000000 ', fontSize: '30px', fontWeight: '400', lineHeight: 'normal' }}>
                Im ersten Ausbildungsjahr liegt der Schwerpunkt auf der Erarbeitung der tanztechnischen Basis in
                verschiedenen Modern-Techniken, zeitgenössischem Tanz und im klassischen Ballett.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex justify-center">
          <Box className="max-w-[1250px] flex">
            <Box className="w-[50%] h-[460px] py-[32px] pr-[48px]">
              <Typography sx={{ color: '#000000 ', fontSize: '30px', fontWeight: '400', lineHeight: 'normal' }}>
                Im zweiten Jahr werden die Basistechniken vertieft und entwickelt. Das Fach Improvisation, sowie die
                Entwicklung und Präsentation eines eigenen Stücks im Rahmen unseres Soloprojekts tragen dazu bei, eine
                eigene künstlerische Sprache zu finden und eigene kreative Impulse auf der Basis der erlernten
                technischen Grundlagen individuell umsetzen zu können.
              </Typography>
            </Box>
            <Box
              className="w-[50%] py-[32px] pl-[32px] flex flex-col justify-between items-start border-l border-black"
              sx={{ background: theme.palette.primary.main }}
            >
              <Typography sx={{ color: '#000000', fontSize: '80px', fontWeight: '400', lineHeight: 'normal' }}>
                Zweites Jahr
              </Typography>
              <Typography sx={{ color: '#000000', fontSize: '30px', fontWeight: '400', lineHeight: 'normal' }}>
                Intensivierung und künstlerische Entwicklung
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex justify-center">
          <Box className="max-w-[1250px] border-y border-black flex">
            <Box
              className="w-[50%] py-[32px] pl-[32px] flex flex-col justify-between items-start"
              sx={{ background: theme.palette.primary.main }}
            >
              <Typography sx={{ color: '#000000', fontSize: '80px', fontWeight: '400', lineHeight: 'normal' }}>
                Drittes Jahr
              </Typography>
              <Typography sx={{ color: '#000000', fontSize: '30px', fontWeight: '400', lineHeight: 'normal' }}>
                Spezialisierung, eigenständige künstlerische Arbeit und Companyprojekt
              </Typography>
            </Box>
            <Box className="w-[50%] h-[460px] py-[32px] pl-[32px] border-l border-black">
              <Typography sx={{ color: '#000000 ', fontSize: '30px', fontWeight: '400', lineHeight: 'normal' }}>
                Im dritten Jahr arbeitest du kreativ mit deiner Klasse. Regelmäßige Showings bereiten auf das
                Company-Projekt im letzten Semester vor, in dem du unter realistischen Tanzcompany Bedingungen wertvolle
                Einblicke ins Berufsleben professioneller Tänzer*innen erhältst.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box component="section" className="py-[120px] flex flex-col justify-center items-center text-center gap-[32px]">
        <Typography
          sx={{ color: '#000000', fontSize: '80px', fontWeight: '400', lineHeight: '1', marginBottom: '32px' }}
        >
          Kosten
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: '30px', fontWeight: '400' }}
        >
          Die Schulgebühr beträgt für ein Schuljahr EUR 6.360,00 € und kann in 12 Raten zu monatlich EUR 530,00 €
          bezahlt werden. Außerdem besteht eine Kostenbeteiligungspflicht in Höhe von 60,00 € für die Work in Progress
          Vorstellungen in allen drei Ausbildungsjahren, 120,00 € für das Abschlussprojekt im 1. und 2. Ausbildungsjahr
          und 240,00 € für das Abschlussprojekt am Ende des 3. Jahres, sowie 160,00 € für das Soloprojekt im 2.
          Ausbildungsjahr. Die CDSH ist BAföG-anerkannt – wir helfen dir gern bei der Vermittlung eines günstigen
          Bildungskredites, dessen Beantragung ab dem zweiten Ausbildungsjahr möglich ist.
        </Typography>
      </Box>

      <Box
        component="section"
        className="flex flex-col justify-center items-center"
        sx={{ pt: { xs: '55px', md: '110px' },  pb: { xs: '55px', md: '160px' } }}
      >
        <Box component="section" className="w-full px-[75px]">
          <Typography
            className=""
            sx={{
              color: '#000000',
              fontSize: { xs: '35px', md: '80px' },
              fontWeight: '400',
              mb: { xs: '25px', md: '55px' },
            }}
          >
            Fortbildung
          </Typography>
        </Box>

        <Box
          component="section"
          className="w-full px-[75px] flex flex-col justify-center items-center"
          sx={{ background: theme.palette.primary.main, py: { xs: '55px', md: '110px' } }}
        >
          <Box
            className="max-w-[1250px] flex justify-center"
            sx={{
              flexDirection: { xs: 'column-reverse', md: 'row' },
              alignItems: { xs: 'center', md: 'start' },
              gap: { xs: '55px', md: '110px' },
            }}
          >
            <Box className="flex flex-col justify-start items-start" sx={{ width: { xs: '100%', md: '50%' } }}>
              <Typography
                sx={{
                  color: '#000000',
                  fontSize: { xs: '15px', md: '30px' },
                  fontWeight: '400',
                }}
              >
                Fortbildung in Residence (FIR) ist das exklusive Weiterbildungsprogramm der Contemporary Dance School
                Hamburg – für ausgebildete Bühnentänzer*innen ohne aktuelles Engagement, die im Training bleiben oder
                sich weiterentwickeln möchten.
              </Typography>
              <br />
              <Typography
                sx={{
                  color: '#000000',
                  fontSize: { xs: '15px', md: '30px' },
                  fontWeight: '400',
                }}
              >
                Zur Auswahl stehen zwei sechmonatige Blöcke: 1. Januar – 1. Juli oder 1. September – 1. März. Bis zu 12
                Einheiten pro Woche können individuell aus dem Lehrplan gewählt werden. Zudem stehen die Studios für
                eigene Projekte zur Verfügung, die bei »Work in Progress« oder dem Abschlussprojekt öffentlich gezeigt
                werden können. Optional: bis zu 6 Mentoring-Sessions sowie Mitwirkung an bis zu zwei Kreationen der
                Hauschoreograf*innen.
              </Typography>
              <br />
              <Typography
                sx={{
                  color: '#000000',
                  fontSize: { xs: '15px', md: '30px' },
                  fontWeight: '400',
                }}
              >
                Voraussetzung: abgeschlossene Tanzausbildung oder gleichwertige Erfahrung. Die Aufnahme erfolgt über
                Audition (live, per Video oder während des Programms). Kosten: 300 €/Monat
              </Typography>
            </Box>
            <Box className="flex flex-col justify-start items-start sticky" sx={{ width: { xs: '100%', md: '50%' } }}>
              <Box
                component="img"
                src={`${process.env.PUBLIC_URL}/assets/images/ausbildung/Bildschirmfoto 2025-07-03 um 13.50.30 1.png`}
                className="flex-1 w-[500px] mb-[24px]"
                sx={{ objectFit: 'cover', aspectRatio: 0.75 }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>

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

      <Box component="section" className="py-[120px] flex flex-col justify-center items-center text-center">
        <Typography
          sx={{ color: '#000000', fontSize: '80px', fontWeight: '400', lineHeight: '1', marginBottom: '32px' }}
        >
          Du möchtest uns kennenlernen?
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: '30px', fontWeight: '400' }}
        >
          Wir dich ebenfalls. Neben den regulären Auditions sind wir bei Fragen rund um die Ausbildung per Mail oder
          telefonisch für dich da.
        </Typography>
      </Box>
    </>
  );
}

export default Ausbildung;
