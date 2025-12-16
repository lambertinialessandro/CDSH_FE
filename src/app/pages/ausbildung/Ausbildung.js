import { ArrowForward } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import LoopBanner from 'app/shared-components/banner/LoopBanner';
import BigLink from 'app/shared-components/link/BigLink';
import SubjectSelector from './SubjectSelector';
import InteractiveSubjects from './InteractiveSubjects';
import { useSelector } from 'react-redux';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { useEffect, useState } from 'react';
import AktuellesSection from '../aktuelles/AktuellesSection';

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
  const userLanguage = useSelector(selectUserLanguage);

  const [ausbuildungData, setAusbuildungData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`http://localhost/plainkit-main/api/education?lang=${userLanguage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAusbuildungData(data);
      })
      .catch((error) => {
        console.error('Fetching error:', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userLanguage]);
  console.log('ausbuildungData:', ausbuildungData);

  if (loading) return <Box sx={{ p: 10, textAlign: 'center' }}>Loading content...</Box>;
  if (!ausbuildungData) return <Box sx={{ p: 10, textAlign: 'center' }}>Error loading data.</Box>;

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
            {ausbuildungData.header.headline}
          </Typography>
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={ausbuildungData.header.image}
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
            {ausbuildungData.header.text}
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
          {ausbuildungData.intro.text_left}
        </Typography>
        <Typography
          className="flex-1"
          sx={{
            fontSize: { xs: '15px', md: '30px' },
            fontWeight: '400',
          }}
        >
          {ausbuildungData.intro.text_right}
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
            {ausbuildungData.audition_banner.text}
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
              {ausbuildungData.audition_banner.link_text}
              <ArrowForward fontSize="inherit" />
            </BigLink>
          </Typography>
        </LoopBanner>
      </Box>

      {/* TODO */}
      <InteractiveSubjects subjects={ausbuildungData.subjects} />
      {/* TODO */}
      <SubjectSelector subjects={ausbuildungData.subjects} categories={ausbuildungData.categories_manager} />

      <Box
        component="section"
        className="px-[45px] flex flex-col justify-center items-center text-center"
        sx={{ py: { xs: '60px', md: '120px' }, gap: { xs: '16px', md: '32px' } }}
      >
        <Typography
          sx={{
            color: '#000000',
            fontSize: { sm: '30px', md: '80px' },
            fontWeight: '400',
            lineHeight: '1',
            marginBottom: '32px',
          }}
        >
          {ausbuildungData.program_structure.title}
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { sm: '15px', md: '30px' }, fontWeight: '400' }}
        >
          {ausbuildungData.program_structure.intro}
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { sm: '15px', md: '30px' }, fontWeight: '400' }}
        >
          {ausbuildungData.program_structure.details}
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
                {ausbuildungData.ausbildung_years[0].headline}
              </Typography>
              <Typography
                sx={{
                  color: '#000000 ',
                  fontSize: { xs: '15px', md: '30px' },
                  fontWeight: '400',
                  lineHeight: 'normal',
                }}
              >
                {ausbuildungData.ausbildung_years[0].level}
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
                {ausbuildungData.ausbildung_years[0].description}
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
                {ausbuildungData.ausbildung_years[1].description}
              </Typography>
            </Box>
            <Box
              className="w-full md:w-1/2 py-[32px] pl-[32px] flex flex-col justify-between items-start"
              sx={{ background: theme.palette.primary.main, gap: { xs: '16px', md: '0' } }}
            >
              <Typography
                sx={{ color: '#000000', fontSize: { xs: '35px', md: '80px' }, fontWeight: '400', lineHeight: 'normal' }}
              >
                {ausbuildungData.ausbildung_years[1].headline}
              </Typography>
              <Typography
                sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400', lineHeight: 'normal' }}
              >
                {ausbuildungData.ausbildung_years[1].level}
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
                {ausbuildungData.ausbildung_years[2].headline}
              </Typography>
              <Typography
                sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400', lineHeight: 'normal' }}
              >
                {ausbuildungData.ausbildung_years[2].level}
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
                {ausbuildungData.ausbildung_years[2].description}
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
            fontSize: { sm: '30px', md: '80px' },
            fontWeight: '400',
            lineHeight: '1',
            marginBottom: { sm: '16px', md: '32px' },
          }}
        >
          {ausbuildungData.costs.headline}
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { sm: '15px', md: '30px' }, fontWeight: '400' }}
        >
          {ausbuildungData.costs.text}
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
            {ausbuildungData.fortbildung.headline}
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
                {ausbuildungData.fortbildung.description}
              </Typography>
              <br />
              <Typography
                sx={{
                  color: '#000000',
                  fontSize: { xs: '15px', md: '30px' },
                  fontWeight: '400',
                }}
              >
                {/*Zur Auswahl stehen zwei sechmonatige Blöcke: 1. Januar – 1. Juli oder 1. September – 1. März. Bis zu 12
                Einheiten pro Woche können individuell aus dem Lehrplan gewählt werden. Zudem stehen die Studios für
                eigene Projekte zur Verfügung, die bei »Work in Progress« oder dem Abschlussprojekt öffentlich gezeigt
                werden können. Optional: bis zu 6 Mentoring-Sessions sowie Mitwirkung an bis zu zwei Kreationen der
                Hauschoreograf*innen.*/}
                {/* TODO */}
              </Typography>
              <br />
              <Typography
                sx={{
                  color: '#000000',
                  fontSize: { xs: '15px', md: '30px' },
                  fontWeight: '400',
                }}
              >
                {/*Voraussetzung: abgeschlossene Tanzausbildung oder gleichwertige Erfahrung. Die Aufnahme erfolgt über
                Audition (live, per Video oder während des Programms). Kosten: 300 €/Monat*/}
                {/* TODO */}
              </Typography>
            </Box>
            <Box className="flex flex-col justify-start items-start sticky" sx={{ width: { xs: '100%', md: '50%' } }}>
              <Box
                component="img"
                src={ausbuildungData.fortbildung.image}
                className="flex-1 w-[500px]"
                sx={{ objectFit: 'cover', aspectRatio: 0.75, mb: { xs: '12px', md: '24px' } }}
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <AktuellesSection items={ausbuildungData.aktuelles.items} title={ausbuildungData.aktuelles.headline} />
      
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
          {ausbuildungData.footerCta.title}
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
        >
          {ausbuildungData.footerCta.text}
        </Typography>
      </Box>
    </>
  );
}

export default Ausbildung;
