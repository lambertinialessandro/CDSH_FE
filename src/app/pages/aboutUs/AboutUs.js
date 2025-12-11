import { Box, Typography, useTheme } from '@mui/material';
import LoopBanner from 'app/shared-components/banner/LoopBanner';
import KooperationenLogos from './KooperationenLogos';
import RaumlichkeitenSection from './RaumlichkeitenSection';
import SplitSection from './SplitSection';

function AboutUs() {
  const theme = useTheme();

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
            Über uns
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '15px', md: '30px' },
              lineHeight: { xs: '20px', md: '35px' },
              fontWeight: '400',
            }}
          >
            Das Ausbildungsprogramm der CDSH verbindet die Vielfalt des zeitgenössischen Tanzes mit den individuellen
            künstlerischen Bedürfnissen der Studierenden und den Anforderungen der internationalen Branche.
          </Typography>
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/assets/images/aboutUs/cdsh-willkommen-1 1.png`}
            className="flex-1 w-full h-full"
            sx={{ objectFit: 'cover' }}
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
            Über uns
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
          Die Contemporary Dance School Hamburg bietet dir zeitgenössischen Tanz auf hohem Niveau und die Entwicklung
          deiner künstlerischen Persönlichkeit im Austausch mit erfahrenen Mentor*innen aus aller Welt. Das tägliche
          Training bereitet dich auf die Anforderungen deiner Karriere im Bühnentanz vor. Als staatlich anerkannte
          Berufsfachschule für zeitgenössischen Bühnentanz bietet dir die CDSH eine dreijährige praxisnahe
          Tanzausbildung, bringt dich in Kontakt mit Künstler*innen aus der Szene und
        </Typography>
        <Typography
          className="flex-1"
          sx={{
            fontSize: { xs: '15px', md: '30px' },
            fontWeight: '400',
          }}
        >
          kooperiert mit vielen relevanten Bereichen der tänzerischen Bildung. Ein wirksames Unterrichtsprogramm hilft
          dir, dich technisch, künstlerisch und kreativ weiterzuentwickeln. Durch choreografische Projektarbeit bekommst
          du ein Gefühl für die professionelle Arbeit und sammelst Bühnenerfahrung durch regelmäßige Auftritte im
          Theater. Ein erfahrenes Team aus Künstler*innen und Pädagog*innen unterstützt dich bei deiner Entwicklung in
          der tänzerischen Ausbildung.
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
            WORKSHOPS, AUSBILDUNGEN, FORTBILDUNGEN
          </Typography>
        </LoopBanner>
      </Box>

      <Box component="section" className="px-[45px] flex flex-col justify-center items-start">
        <SplitSection
          title="Talent, Technik & Tanzsprache"
          text="Wir fördern die Findung der individuellen künsterischen Persönlichkeit. Die Basis dessen bildet eine
                fundierte Ausbildung im Bereich etablierter Tanzstile."
          img={{
            src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.05.47.png`,
            alt: 'Tänzer:innen beim Training',
          }}
        />
        <SplitSection
          title="Förderung & Kooperation"
          text="Wir vermitteln auch nach dem Abschluss Jobs und stellen Proberäume kostenfrei bereit. Außerdem
                profitiert ihr während der Ausbildung von unserem Netzwerk internationaler Mentor*innen."
          img={{
            src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.06.05.png`,
            alt: 'Kooperationsprojekt',
          }}
          reverse
        />
        <SplitSection
          title="Choreografie & Praxis"
          text="Wir erarbeiten zielgerichtete Choreografien und sammeln bereits während der Ausbildung viele Erfahrungen
                auf lokalen Bühnen und Events."
          img={{
            src: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.06.12.png`,
            alt: 'Bühnenauftritt',
          }}
          bottom
        />
      </Box>

      <KooperationenLogos />

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
            OFFENHEIT, RESPEKT, TOLERANZ, KREATIVITÄT
          </Typography>
        </LoopBanner>
      </Box>

      <Box
        component="section"
        className="px-[75px] flex flex-col justify-center items-center"
        sx={{ background: theme.palette.primary.main, py: { xs: '55px', md: '110px' } }}
      >
        <Typography
          className=""
          sx={{
            color: '#000000',
            fontSize: { xs: '35px', md: '80px' },
            fontWeight: '400',
            mb: { xs: '55px', md: '110px' },
          }}
        >
          Künstlerisches Konzept
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
            <Typography
              sx={{
                color: '#000000',
                fontSize: { xs: '15px', md: '30px' },
                fontWeight: '400',
              }}
            >
              »In meiner Tätigkeit als Künstlerischer Leiter der Contemporary Dance School Hamburg verbinde ich das
              kreative und technische Potenzial der CDSH mit den Ansprüchen einer praxisorientierten Ausbildung für den
              zeitgenössischen Bühnentanz. Mein Ziel ist es, durch den Austausch der CDSH mit unterschiedlichen
              Künstler*innen und Kooperationspartner*innen den zukünftigen Tänzern schon während der Ausbildung eine
              bestmögliche Einbindung in verschiedene Produktionen und Projekte zu ermöglichen.
            </Typography>
            <br />
            <Typography
              sx={{
                color: '#000000',
                fontSize: { xs: '15px', md: '30px' },
                fontWeight: '400',
              }}
            >
              Damit fördern wir ein Netzwerk, das auch über die Ausbildung hinaus einen kreativen Austausch ermöglicht
              und den beruflichen Einstieg erleichtert. Meiner Erfahrung nach ist die Entwicklung des kreativen
              Potenzials in viele Richtungen einer der wichtigsten Bestandteile in der künstlerischen Ausbildung. Das
              Spektrum der CDSH umfasst sowohl die technische Schulung als auch die individuelle Förderung der
              künstlerischen Persönlichkeit der Tänzer.«
            </Typography>
          </Box>
          <Box className="flex flex-col justify-start items-start sticky" sx={{ width: { xs: '100%', md: '50%' } }}>
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.26.20 1.png`}
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
              RAUL VALDEZ
            </Typography>
            <Typography
              sx={{
                color: '#000000',
                fontSize: '15px',
                fontWeight: '400',
              }}
            >
              Künstlerischer Leiter der CDSH
            </Typography>
          </Box>
        </Box>
      </Box>

      <RaumlichkeitenSection />

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

export default AboutUs;
