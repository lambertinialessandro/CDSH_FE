import { Box, Typography, useTheme } from '@mui/material';
import LoopBanner from 'app/shared-components/banner/LoopBanner';
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { selectAboutUsData, setAboutUsData } from 'app/store/app/pageSlice';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import KooperationenLogos from './KooperationenLogos';
import RaumlichkeitenSection from './RaumlichkeitenSection';
import SplitSection from './SplitSection';
import LoadingPage from '../general/LoadingPage';
import ErrorPage from '../general/ErrorPage';

function AboutUs() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const userLanguage = useSelector(selectUserLanguage);

  const aboutUsData = useSelector((state) => selectAboutUsData(state, userLanguage));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (aboutUsData) {
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1);

    fetch(`http://localhost/plainkit-main/api/aboutUs?lang=${userLanguage}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setAboutUsData({ userLanguage, data }));
      })
      .catch((error) => {
        if (userLanguage === 'en') {
          const mockData = {
            header: {
              title: 'About Us',
              text: 'The CDSH training program combines the diversity of contemporary dance with the individual artistic needs of the students and the requirements of the international industry.',
              image: `${process.env.PUBLIC_URL}/assets/images/aboutUs/cdsh-willkommen-1 1.png`,
            },
            description: {
              left: 'The Contemporary Dance School Hamburg offers you high-level contemporary dance and the development of your artistic personality through exchange with experienced mentors from around the world. Daily training prepares you for the demands of a career in stage dance. As a state-accredited vocational school for contemporary stage dance, the CDSH offers you a three-year, practice-oriented dance education, connects you with artists in the scene, and',
              right:
                'collaborates with many relevant areas of dance education. An effective curriculum helps you develop technically, artistically, and creatively. Through choreographic project work, you gain an understanding of professional practice and acquire stage experience through regular performances in theaters. An experienced team of artists and educators supports you in your development during your dance training.',
            },
            banner1: 'WORKSHOPS, EDUCATION, TRAINING',
            splitSections: [
              {
                title: 'Talent, Technique & Dance Language',
                text: 'We foster the development of individual artistic personality. This is based on a solid foundation in established dance styles.',
                reverse: false,
                bottom: false,
                img: {
                  src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.05.47.png`,
                  alt: 'Talent, Technique & Dance Language',
                },
              },
              {
                title: 'Support & Cooperation',
                text: 'We also help you find jobs after graduation and provide rehearsal spaces free of charge. Furthermore, you will benefit from our network of international mentors during your training.',
                reverse: true,
                bottom: false,
                img: {
                  src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.06.05.png`,
                  alt: 'Support & Cooperation',
                },
              },
              {
                title: 'Choreography & Practice',
                text: 'We develop targeted choreographies and gain extensive experience on local stages and at events during our training.',
                reverse: false,
                bottom: true,
                img: {
                  src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.06.12.png`,
                  alt: 'Choreography & Practice',
                },
              },
            ],
            cooperations: {
              title: 'Cooperations',
              items: [
                'Logo placeholder',
                'Logo placeholder',
                'Logo placeholder',
                'Logo placeholder',
                'Logo placeholder',
                'Logo placeholder',
                'Logo placeholder',
              ],
            },
            banner2: 'OPENNESS, RESPECT, TOLERANCE, CREATIVITY',
            concept: {
              title: 'Artistic concept',
              textLeft:
                '\u201cIn my role as Artistic Director of the Contemporary Dance School Hamburg (CDSH), I combine the CDSH\u2019s creative and technical potential with the demands of a practice-oriented education for contemporary stage dance. My goal is to enable future dancers to be integrated into various productions and projects as effectively as possible during their training by fostering exchange between the CDSH and diverse artists and partners.',
              textRight:
                'In this way, we cultivate a network that facilitates creative exchange beyond the training program and eases the transition to professional life. In my experience, developing creative potential in many directions is one of the most important components of artistic training. The CDSH\u2019s offerings encompass both technical instruction and the individual development of each dancer\u2019s artistic personality.\u201d',
              name: 'RAUL VALDEZ',
              role: 'Artistic Director',
              image: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.26.20 1.png`,
            },
            rooms: {
              title: 'Rooms',
              images: [
                {
                  src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-21 um 17.23.58.png`,
                },
                {
                  src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-21 um 17.24.14.png`,
                },
                {
                  src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-21 um 17.23.58.png`,
                },
              ],
            },
            footerCta: {
              show: true,
              title: 'Want to get to know us?',
              text: "We'd like to get to know you too. Besides the regular auditions, we're available by email or phone to answer any questions you may have about the training program.",
            },
          };
          dispatch(setAboutUsData({ userLanguage, data: mockData }));
        } else {
          const mockData = {
            header: {
              title: '\u00dcber uns',
              text: 'Das Ausbildungsprogramm der CDSH verbindet die Vielfalt des zeitgen\u00f6ssischen Tanzes mit den individuellen k\u00fcnstlerischen Bed\u00fcrfnissen der Studierenden und den Anforderungen der internationalen Branche.',
              image: `${process.env.PUBLIC_URL}/assets/images/aboutUs/cdsh-willkommen-1 1.png`,
            },
            description: {
              left: 'Die Contemporary Dance School Hamburg bietet dir zeitgen\u00f6ssischen Tanz auf hohem Niveau und die Entwicklung deiner k\u00fcnstlerischen Pers\u00f6nlichkeit im Austausch mit erfahrenen Mentor*innen aus aller Welt. Das t\u00e4gliche Training bereitet dich auf die Anforderungen deiner Karriere im B\u00fchnentanz vor. Als staatlich anerkannte Berufsfachschule f\u00fcr zeitgen\u00f6ssischen B\u00fchnentanz bietet dir die CDSH eine dreij\u00e4hrige praxisnahe Tanzausbildung, bringt dich in Kontakt mit K\u00fcnstler*innen aus der Szene und',
              right:
                'kooperiert mit vielen relevanten Bereichen der t\u00e4nzerischen Bildung. Ein wirksames Unterrichtsprogramm hilft dir, dich technisch, k\u00fcnstlerisch und kreativ weiterzuentwickeln. Durch choreografische Projektarbeit bekommst du ein Gef\u00fchl f\u00fcr die professionelle Arbeit und sammelst B\u00fchnenerfahrung durch regelm\u00e4\u00dfige Auftritte im Theater. Ein erfahrenes Team aus K\u00fcnstler*innen und P\u00e4dagog*innen unterst\u00fctzt dich bei deiner Entwicklung in der t\u00e4nzerischen Ausbildung.',
            },
            banner1: 'WORKSHOPS, EDUCATION, TRAINING',
            splitSections: [
              {
                title: 'Talent, Technik & Tanzsprache',
                text: 'Wir f\u00f6rdern die Findung der individuellen k\u00fcnsterischen Pers\u00f6nlichkeit. Die Basis dessen bildet eine fundierte Ausbildung im Bereich etablierter Tanzstile.',
                reverse: false,
                bottom: false,
                img: {
                  src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.05.47.png`,
                  alt: 'Talent, Technik & Tanzsprache',
                },
              },
              {
                title: 'F\u00f6rderung & Kooperation',
                text: 'Wir vermitteln auch nach dem Abschluss Jobs und stellen Prober\u00e4ume kostenfrei bereit. Au\u00dferdem profitiert ihr w\u00e4hrend der Ausbildung von unserem Netzwerk internationaler Mentor*innen.',
                reverse: true,
                bottom: false,
                img: {
                  src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.06.05.png`,
                  alt: 'F\u00f6rderung & Kooperation',
                },
              },
              {
                title: 'Choreografie & Praxis',
                text: 'Wir erarbeiten zielgerichtete Choreografien und sammeln bereits w\u00e4hrend der Ausbildung viele Erfahrungen auf lokalen B\u00fchnen und Events.',
                reverse: false,
                bottom: true,
                img: {
                  src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.06.12.png`,
                  alt: 'Choreografie & Praxis',
                },
              },
            ],
            cooperations: {
              title: 'Kooperationen',
              items: [
                'Logo Platzhalter',
                'Logo Platzhalter',
                'Logo Platzhalter',
                'Logo Platzhalter',
                'Logo Platzhalter',
                'Logo Platzhalter',
                'Logo Platzhalter',
              ],
            },
            banner2: 'OPENNESS, RESPECT, TOLERANCE, CREATIVITY',
            concept: {
              title: 'K\u00fcnstlerisches Konzept',
              textLeft:
                '\u00bbIn meiner T\u00e4tigkeit als K\u00fcnstlerischer Leiter der Contemporary Dance School Hamburg verbinde ich das kreative und technische Potenzial der CDSH mit den Anspr\u00fcchen einer praxisorientierten Ausbildung f\u00fcr den  zeitgen\u00f6ssischen B\u00fchnentanz. Mein Ziel ist es, durch den Austausch der CDSH mit unterschiedlichen K\u00fcnstler*innen und Kooperationspartner*innen den zuk\u00fcnftigen T\u00e4nzern schon w\u00e4hrend der Ausbildung eine bestm\u00f6gliche Einbindung in verschiedene Produktionen und Projekte zu erm\u00f6glichen.',
              textRight:
                'Damit f\u00f6rdern wir ein Netzwerk, das auch \u00fcber die Ausbildung hinaus einen kreativen Austausch erm\u00f6glicht und den beruflichen Einstieg erleichtert. Meiner Erfahrung nach ist die Entwicklung des kreativen Potenzials in viele Richtungen einer der wichtigsten Bestandteile in der k\u00fcnstlerischen Ausbildung. Das Spektrum der CDSH umfasst sowohl die technische Schulung als auch die individuelle F\u00f6rderung der k\u00fcnstlerischen Pers\u00f6nlichkeit der T\u00e4nzer.\u00ab',
              name: 'RAUL VALDEZ',
              role: 'Artistic Director',
              image: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.26.20 1.png`,
            },
            rooms: {
              title: 'R\u00e4umlichkeiten',
              images: [
                {
                  src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-21 um 17.23.58.png`,
                },
                {
                  src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-21 um 17.24.14.png`,
                },
                {
                  src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-21 um 17.23.58.png`,
                },
              ],
            },
            footerCta: {
              show: true,
              title: 'Du m\u00f6chtest uns kennenlernen?',
              text: 'Wir dich ebenfalls. Neben den regul\u00e4ren Auditions sind wir bei Fragen rund um die Ausbildung per Mail oder telefonisch f\u00fcr dich da.',
            },
          };
          dispatch(setAboutUsData({ userLanguage, data: mockData }));
        }

        // TODO: commented for temp deploy
        // console.error('Fetching error:', error);
        // setError(error);
      })
      .finally(() => {
        setLoading(false);
        clearTimeout(timeout);
      });
  }, [userLanguage]);
  console.log('aboutUs:', aboutUsData);

  if (loading) return <LoadingPage />;
  if (error || !aboutUsData) return <ErrorPage />;

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
            {aboutUsData.header.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '15px', md: '30px' },
              lineHeight: { xs: '20px', md: '35px' },
              fontWeight: '400',
            }}
          >
            <ReactMarkdown components={renderers} children={aboutUsData.header.text} />
          </Typography>
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={aboutUsData.header.image}
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
            {aboutUsData.header.title}
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
          <ReactMarkdown components={renderers} children={aboutUsData.description.left} />
        </Typography>
        <Typography
          className="flex-1"
          sx={{
            fontSize: { xs: '15px', md: '30px' },
            fontWeight: '400',
          }}
        >
          <ReactMarkdown components={renderers} children={aboutUsData.description.right} />
        </Typography>
      </Box>

      <Box
        component="section"
        className="flex justify-start items-center w-full h-[127px] overflow-hidden"
        sx={{
          my: { xs: '55px', md: '110px' },
        }}
      >
        <LoopBanner>
          <Typography
            className="min-w-max flex items-center"
            sx={{
              fontSize: { xs: '35px', md: '80px' },
              fontWeight: '400',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              marginRight: '45px',
            }}
          >
            {aboutUsData.banner1}
          </Typography>
        </LoopBanner>
      </Box>

      <Box component="section" className="px-[45px] flex flex-col justify-center items-start">
        {aboutUsData.splitSections.map((section, idx) => (
          <SplitSection
            key={idx}
            title={section.title}
            text={section.text}
            img={section.img}
            reverse={section.reverse}
            bottom={section.bottom}
          />
        ))}
      </Box>

      <KooperationenLogos title={aboutUsData.cooperations.title} list={aboutUsData.cooperations.items} />

      <Box
        component="section"
        className="flex justify-start items-center w-full h-[127px] overflow-hidden"
        sx={{
          my: { xs: '55px', md: '110px' },
        }}
      >
        <LoopBanner>
          <Typography
            className="min-w-max flex items-center"
            sx={{
              fontSize: { xs: '35px', md: '80px' },
              fontWeight: '400',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              marginRight: '45px',
            }}
          >
            {aboutUsData.banner2}
          </Typography>
        </LoopBanner>
      </Box>

      <Box
        component="section"
        className="px-[75px] flex flex-col justify-center items-center"
        sx={{ background: theme.palette.primary.main, py: { xs: '55px', md: '110px' } }}
      >
        <Typography
          sx={{
            color: '#000000',
            fontSize: { xs: '35px', md: '80px' },
            fontWeight: '400',
            mb: { xs: '55px', md: '110px' },
          }}
        >
          {aboutUsData.concept.title}
        </Typography>
        <Box
          className="max-w-[1250px] flex justify-center"
          sx={{
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: { xs: 'center', md: 'start' },
            gap: { xs: '55px', md: '110px' },
          }}
        >
          <Box className="flex flex-col justify-start items-start" sx={{ width: { xs: '100%', md: '50%' } }}>
            <ReactMarkdown components={renderers} children={aboutUsData.concept.textLeft} />
            <br />
            <ReactMarkdown components={renderers} children={aboutUsData.concept.textRight} />
          </Box>
          <Box className="flex flex-col justify-start items-start sticky" sx={{ width: { xs: '100%', md: '50%' } }}>
            <Box
              component="img"
              src={aboutUsData.concept.image}
              className="flex-1 w-[500px] mx-auto mb-[24px]"
              sx={{ objectFit: 'cover', aspectRatio: 0.75 }}
            ></Box>

            <Typography
              sx={{
                color: '#000000',
                fontSize: '15px',
                fontWeight: '400',
              }}
            >
              {aboutUsData.concept.name}
            </Typography>
            <Typography
              sx={{
                color: '#000000',
                fontSize: '15px',
                fontWeight: '400',
              }}
            >
              {aboutUsData.concept.role}
            </Typography>
          </Box>
        </Box>
      </Box>

      <RaumlichkeitenSection title={aboutUsData.rooms.title} images={aboutUsData.rooms.images} />
      {aboutUsData.footerCta?.show && (
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
            {aboutUsData.footerCta.title}
          </Typography>
          <Typography
            className="max-w-[740px] min-w-[50%] text-center"
            sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
          >
            {aboutUsData.footerCta.text}
          </Typography>
        </Box>
      )}
    </>
  );
}

export default AboutUs;
