import { ArrowForward } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import LoopBanner from 'app/shared-components/banner/LoopBanner';
import BigLink from 'app/shared-components/link/BigLink';
import SubjectSelector from './SubjectSelector';
import InteractiveSubjects from './InteractiveSubjects';
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
      <Typography
        sx={{
          fontSize: { xs: '18px', sm: '22px', md: '30px' },
          fontWeight: 500,
          py: 2,
          lineHeight: 1.2,
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
    </>
  );
}

function Ausbildung() {
  const theme = useTheme();

  return (
    <>
      <Box
        component="section"
        className="header relative flex items-center max-h-860-px"
        sx={{ height: { sx: '100%', md: `100vh` }, flexDirection: { xs: 'column-reverse', md: 'row' } }}
      >
        <Box
          className="flex-1 h-full flex-col justify-center items-start"
          sx={{
            zIndex: '2',
            display: { xs: 'none', md: 'flex' },
            width: { xs: '100%', md: '50%' },
            padding: { xs: '46px 56px 46px 56px', md: '0 56px 46px 56px' },
          }}
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
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/assets/images/ausbildung/cdsh-willkommen-1.png`}
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
            Ausbildung: Aufbau, Fächer Kosten
          </Typography>
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
          className="flex-1"
          sx={{
            fontSize: { xs: '15px', md: '30px' },
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
            fontSize: { xs: '15px', md: '30px' },
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
        className="flex justify-start items-center w-full overflow-hidden border-y border-black"
        sx={{
          background: theme.palette.primary.main,
          my: { xs: '55px', md: '110px' },
          height: { xs: '80px', md: '127px' },
        }}
      >
        <LoopBanner stoppable>
          <Typography
            className="min-w-max flex items-center"
            sx={{
              color: '#000000',
              fontSize: { xs: '28px', md: '80px' },
              fontWeight: '400',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              marginRight: { xs: '16px', md: '45px' },
            }}
          >
            DIE AUDITION TERMINE 2025 SIND JETZT ONLINE.
            <BigLink
              extraSx={{
                display: 'flex',
                height: 'min-content',
                marginLeft: { xs: '12px', md: '24px' },
                color: 'white',
                fontSize: { xs: '28px', md: '80px' },
                fontWeight: '400',
                whiteSpace: 'nowrap',
              }}
              fontSize="inherit"
              lineHeight={{ xs: '1px', md: '5px' }}
              color="#000000"
            >
              JETZT ANMELDEN <ArrowForward fontSize="inherit" />
            </BigLink>
          </Typography>
        </LoopBanner>
      </Box>

      {/* TODO */}
      {/* <InteractiveSubjects /> */}

      {/* TODO */}
      <SubjectSelector />

      <Box
        component="section"
        className="px-[45px] flex flex-col justify-center items-center text-center"
        sx={{ py: { xs: '60px', md: '120px' }, gap: { xs: '16px', md: '32px' } }}
      >
        <Typography
          sx={{
            color: '#000000',
            fontSize: { xs: '30px', md: '80px' },
            fontWeight: '400',
            lineHeight: '1',
            marginBottom: '32px',
          }}
        >
          Aufbau & Struktur
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
        >
          Die dreijährige Ausbildung richtet sich an Bewerber*innen mit soliden Vorkenntnissen in zeitgenössischem Tanz
          und Ballett. Die Aufnahme erfolgt über Auditions.
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
        >
          Credits aus anderen Studiengängen können u.U. angerechnet werden. Lorem Ipsum ... Studium in ECTS übersetzen.
        </Typography>
      </Box>

      {/* <Box component="section" className="px-[45px] flex flex-col justify-center items-start">
        <Box className="w-full flex justify-center">
          <Box className="max-w-[1250px] border-y border-black flex flex-col md:flex-row">
            <Box
              className="w-full md:w-1/2 py-[32px] pl-[32px] flex flex-col justify-between items-start border-b md:border-0 border-black"
              sx={{ background: theme.palette.primary.main }}
            >
              <Typography sx={{ color: '#000000', fontSize: { xs: '35px', md: '80px' }, fontWeight: '400', lineHeight: 'normal' }}>
                Erstes Jahr
              </Typography>
              <Typography sx={{ color: '#000000 ', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400', lineHeight: 'normal' }}>
                Grundlagen
              </Typography>
            </Box>
            <Box className="w-full md:w-1/2 md:h-[460px] py-[32px] pl-[32px] ">
              <Typography sx={{ color: '#000000 ', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400', lineHeight: 'normal' }}>
                Im ersten Ausbildungsjahr liegt der Schwerpunkt auf der Erarbeitung der tanztechnischen Basis in
                verschiedenen Modern-Techniken, zeitgenössischem Tanz und im klassischen Ballett.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex justify-center">
          <Box className="max-w-[1250px] flex flex-col-reverse md:flex-row">
            <Box className="w-full md:w-1/2 md:h-[460px] py-[32px] pl-[32px] md:pl-0 md:pr-[48px]">
              <Typography sx={{ color: '#000000 ', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400', lineHeight: 'normal' }}>
                Im zweiten Jahr werden die Basistechniken vertieft und entwickelt. Das Fach Improvisation, sowie die
                Entwicklung und Präsentation eines eigenen Stücks im Rahmen unseres Soloprojekts tragen dazu bei, eine
                eigene künstlerische Sprache zu finden und eigene kreative Impulse auf der Basis der erlernten
                technischen Grundlagen individuell umsetzen zu können.
              </Typography>
            </Box>
            <Box
              className="w-full md:w-1/2 py-[32px] pl-[32px] flex flex-col justify-between items-start border-b md:border-0 border-black"
              sx={{ background: theme.palette.primary.main }}
            >
              <Typography sx={{ color: '#000000', fontSize: { xs: '35px', md: '80px' }, fontWeight: '400', lineHeight: 'normal' }}>
                Zweites Jahr
              </Typography>
              <Typography sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400', lineHeight: 'normal' }}>
                Intensivierung und künstlerische Entwicklung
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex justify-center">
          <Box className="max-w-[1250px] border-y border-black flex flex-col md:flex-row">
            <Box
              className="w-full md:w-1/2 py-[32px] pl-[32px] flex flex-col justify-between items-start border-b md:border-0 border-black"
              sx={{ background: theme.palette.primary.main }}
            >
              <Typography sx={{ color: '#000000', fontSize: { xs: '35px', md: '80px' }, fontWeight: '400', lineHeight: 'normal' }}>
                Drittes Jahr
              </Typography>
              <Typography sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400', lineHeight: 'normal' }}>
                Spezialisierung, eigenständige künstlerische Arbeit und Companyprojekt
              </Typography>
            </Box>
            <Box className="w-full md:w-1/2 md:h-[460px] py-[32px] pl-[32px]">
              <Typography sx={{ color: '#000000 ', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400', lineHeight: 'normal' }}>
                Im dritten Jahr arbeitest du kreativ mit deiner Klasse. Regelmäßige Showings bereiten auf das
                Company-Projekt im letzten Semester vor, in dem du unter realistischen Tanzcompany Bedingungen wertvolle
                Einblicke ins Berufsleben professioneller Tänzer*innen erhältst.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box> */}

      <Box component="section" className="px-[45px] flex flex-col justify-center items-start">
        <Box className="w-full flex justify-center">
          <Box
            className="max-w-[1250px] border-y border-black flex"
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Box
              className="w-full md:w-1/2 py-[32px] pl-[32px] flex flex-col justify-between items-start"
              sx={{ background: theme.palette.primary.main, gap: { xs: '16px', md: '0' } }}
            >
              <Typography
                sx={{ color: '#000000', fontSize: { xs: '35px', md: '80px' }, fontWeight: '400', lineHeight: 'normal' }}
              >
                Erstes Jahr
              </Typography>
              <Typography
                sx={{
                  color: '#000000 ',
                  fontSize: { xs: '15px', md: '30px' },
                  fontWeight: '400',
                  lineHeight: 'normal',
                }}
              >
                Grundlagen
              </Typography>
            </Box>
            <Box
              className="w-full md:w-1/2 md:h-[460px] py-[32px]"
              sx={{ pr: { xs: '26px', md: '0' }, pl: { xs: '26px', md: '32px' } }}
            >
              <Typography
                sx={{
                  color: '#000000 ',
                  fontSize: { xs: '15px', md: '30px' },
                  fontWeight: '400',
                  lineHeight: 'normal',
                }}
              >
                Im ersten Ausbildungsjahr liegt der Schwerpunkt auf der Erarbeitung der tanztechnischen Basis in
                verschiedenen Modern-Techniken, zeitgenössischem Tanz und im klassischen Ballett.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex justify-center">
          <Box className="max-w-[1250px] flex" sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
            <Box
              className="w-full md:w-1/2 md:h-[460px] py-[32px]"
              sx={{ pr: { xs: '26px', md: '48px' }, pl: { xs: '26px', md: '0' } }}
            >
              <Typography
                sx={{
                  color: '#000000 ',
                  fontSize: { xs: '15px', md: '30px' },
                  fontWeight: '400',
                  lineHeight: 'normal',
                }}
              >
                Im zweiten Jahr werden die Basistechniken vertieft und entwickelt. Das Fach Improvisation, sowie die
                Entwicklung und Präsentation eines eigenen Stücks im Rahmen unseres Soloprojekts tragen dazu bei, eine
                eigene künstlerische Sprache zu finden und eigene kreative Impulse auf der Basis der erlernten
                technischen Grundlagen individuell umsetzen zu können.
              </Typography>
            </Box>
            <Box
              className="w-full md:w-1/2 py-[32px] pl-[32px] flex flex-col justify-between items-start"
              sx={{ background: theme.palette.primary.main, gap: { xs: '16px', md: '0' } }}
            >
              <Typography
                sx={{ color: '#000000', fontSize: { xs: '35px', md: '80px' }, fontWeight: '400', lineHeight: 'normal' }}
              >
                Zweites Jahr
              </Typography>
              <Typography
                sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400', lineHeight: 'normal' }}
              >
                Intensivierung und künstlerische Entwicklung
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex justify-center">
          <Box
            className="max-w-[1250px] border-y border-black flex"
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}
          >
            <Box
              className="w-full md:w-1/2 py-[32px] pl-[32px] pr-[8px] flex flex-col justify-between items-start"
              sx={{ background: theme.palette.primary.main, gap: { xs: '16px', md: '0' } }}
            >
              <Typography
                sx={{ color: '#000000', fontSize: { xs: '35px', md: '80px' }, fontWeight: '400', lineHeight: 'normal' }}
              >
                Drittes Jahr
              </Typography>
              <Typography
                sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400', lineHeight: 'normal' }}
              >
                Spezialisierung, eigenständige künstlerische Arbeit und Companyprojekt
              </Typography>
            </Box>
            <Box
              className="w-full md:w-1/2 md:h-[460px] py-[32px]"
              sx={{ pr: { xs: '26px', md: '0' }, pl: { xs: '26px', md: '32px' } }}
            >
              <Typography
                sx={{
                  color: '#000000 ',
                  fontSize: { xs: '15px', md: '30px' },
                  fontWeight: '400',
                  lineHeight: 'normal',
                }}
              >
                Im dritten Jahr arbeitest du kreativ mit deiner Klasse. Regelmäßige Showings bereiten auf das
                Company-Projekt im letzten Semester vor, in dem du unter realistischen Tanzcompany Bedingungen wertvolle
                Einblicke ins Berufsleben professioneller Tänzer*innen erhältst.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        className="px-[45px] flex flex-col justify-center items-center text-center"
        sx={{ py: { xs: '60px', md: '120px' }, gap: { xs: '16px', md: '32px' } }}
      >
        <Typography
          sx={{
            color: '#000000',
            fontSize: { xs: '30px', md: '80px' },
            fontWeight: '400',
            lineHeight: '1',
            marginBottom: { xs: '16px', md: '32px' },
          }}
        >
          Kosten
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
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
        sx={{ pt: { xs: '55px', md: '110px' }, pb: { xs: '55px', md: '160px' } }}
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
                className="flex-1 w-[500px]"
                sx={{ objectFit: 'cover', aspectRatio: 0.75, mb: { xs: '12px', md: '24px' } }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>

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
        <Typography
          sx={{ mb: { xs: 6, md: 14 }, color: '#000000', fontSize: { xs: '40px', md: '80px' }, fontWeight: '400' }}
        >
          Aktuelles
        </Typography>
        <Carousel items={items} gap={16} itemWidth={280} itemHeight={180} Addon={Addon} />
      </Box>

      <Box
        component="section"
        className="px-[45px] flex flex-col justify-center items-center text-center"
        sx={{ py: { xs: '60px', md: '120px' } }}
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
          Du möchtest uns kennenlernen?
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
        >
          Wir dich ebenfalls. Neben den regulären Auditions sind wir bei Fragen rund um die Ausbildung per Mail oder
          telefonisch für dich da.
        </Typography>
      </Box>
    </>
  );
}

export default Ausbildung;
