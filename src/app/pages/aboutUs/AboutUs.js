import { Box, Typography } from '@mui/material';
import { selectIsBannerOpen } from 'app/store/app/mainSlice';
import { useSelector } from 'react-redux';
import LoopBanner from '../home/LoopBanner';
import Carousel from './Carousel';

function AboutUs() {
  const isBannerOpen = useSelector(selectIsBannerOpen);

  const logoRows = [
    ['Logo Platzhalter', 'Logo Platzhalter', 'Logo Platzhalter', 'Logo Platzhalter'],
    ['Logo Platzhalter', 'Logo Platzhalter', 'Logo Platzhalter'],
  ];

  return (
    <>
      <Box
        component="section"
        className="header relative flex items-center max-h-860-px"
        sx={{ height: `calc(100vh - ${isBannerOpen ? '45px' : '0px'})` }}
      >
        <Box
          className="flex-1 w-[50%] h-full flex flex-col justify-between items-start px-[56px] pb-[46px]"
          sx={{ zIndex: '2' }}
        >
          <Typography></Typography>
          <Typography
            sx={{
              fontSize: '80px',
              fontWeight: '400',
            }}
          >
            Über uns
          </Typography>
          <Typography
            sx={{
              fontSize: '30px',
              fontWeight: '400',
            }}
          >
            Das Ausbildungsprogramm der CDSH verbindet die Vielfalt des zeitgenössischen Tanzes mit den individuellen
            künstlerischen Bedürfnissen der Studierenden und den Anforderungen der internationalen Branche.
          </Typography>
        </Box>
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/assets/images/aboutUs/cdsh-willkommen-1 1.png`}
          className="flex-1 w-[50%] h-full"
          sx={{ objectFit: 'cover' }}
        ></Box>
      </Box>

      <Box
        component="section"
        className="py-[110px] px-[48px] flex justify-center items-start gap-[48px]"
        sx={{ background: '#eae7f8' }}
      >
        <Typography
          sx={{
            fontSize: '30px',
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
          sx={{
            fontSize: '30px',
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

      <Box component="section" className="flex justify-start items-center w-full my-[110px] h-[127px] overflow-hidden">
        <LoopBanner>
          <Typography
            className="min-w-max flex items-center"
            sx={{
              fontSize: '80px',
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
        <Box className="w-full flex justify-center">
          <Box className="max-w-[1250px] border-y border-black flex">
            <Box className="w-[50%] py-[32px] pr-[45px] flex flex-col justify-between items-start">
              <Typography sx={{ color: '#000000', fontSize: '80px', fontWeight: '400', lineHeight: 'normal' }}>
                Talent, Technik & Tanzsprache
              </Typography>
              <Typography sx={{ color: '#000000', fontSize: '30px', fontWeight: '400', lineHeight: 'normal' }}>
                Wir fördern die Findung der individuellen künsterischen Persönlichkeit. Die Basis dessen bildet eine
                fundierte Ausbildung im Bereich etablierter Tanzstile.
              </Typography>
            </Box>
            <Box className="w-[50%] h-[460px] border-l border-black">
              <Box
                component="img"
                className="w-full h-full align-middle object-cover"
                src={`${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.05.47.png`}
              />
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex justify-center">
          <Box className="max-w-[1250px] border-y border-black flex">
            <Box className="w-[50%] h-[460px]">
              <Box
                component="img"
                className="w-full h-full align-middle object-cover"
                src={`${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.06.05.png`}
              />
            </Box>
            <Box className="w-[50%] py-[32px] pl-[45px] flex flex-col justify-between items-start border-l border-black">
              <Typography sx={{ color: '#000000', fontSize: '80px', fontWeight: '400', lineHeight: 'normal' }}>
                Förderung & Kooperation
              </Typography>
              <Typography sx={{ color: '#000000', fontSize: '30px', fontWeight: '400', lineHeight: 'normal' }}>
                Wir vermitteln auch nach dem Abschluss Jobs und stellen Proberäume kostenfrei bereit. Außerdem
                profitiert ihr während der Ausbildung von unserem Netzwerk internationaler Mentor*innen.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex justify-center">
          <Box className="max-w-[1250px] border-y border-black flex">
            <Box className="w-[50%] py-[32px] pr-[45px] flex flex-col justify-between items-start">
              <Typography sx={{ color: '#000000', fontSize: '80px', fontWeight: '400', lineHeight: 'normal' }}>
                Choreografie & Praxis
              </Typography>
              <Typography sx={{ color: '#000000', fontSize: '30px', fontWeight: '400', lineHeight: 'normal' }}>
                Wir erarbeiten zielgerichtete Choreografien und sammeln bereits während der Ausbildung viele Erfahrungen
                auf lokalen Bühnen und Events.
              </Typography>
            </Box>
            <Box className="w-[50%] h-[460px] border-l border-black">
              <Box
                component="img"
                className="w-full h-full align-middle object-cover"
                src={`${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.06.12.png`}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box component="section" className="py-[110px] px-[45px] flex flex-col justify-center items-center">
        <Typography className="mb-[110px]" sx={{ color: '#000000', fontSize: '80px', fontWeight: '400' }}>
          Kooperationen
        </Typography>
        <Box className="flex flex-col justify-center items-center gap-[36px]">
          {logoRows.map((row, idx) => (
            <Box key={{ idx }} className="flex gap-[24px]">
              {row.map((text, idx) => (
                <Box key={{ idx }} className="rounded-full px-[24px] py-[12px]" sx={{ background: '#000000' }}>
                  <Typography
                    sx={{
                      color: '#ffffff',
                      fontSize: '30px',
                      fontWeight: '400',
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>

      <Box component="section" className="flex justify-start items-center w-full my-[110px] h-[127px] overflow-hidden">
        <LoopBanner>
          <Typography
            className="min-w-max flex items-center"
            sx={{
              fontSize: '80px',
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
        className="py-[110px] px-[75px] flex flex-col justify-center items-center"
        sx={{ background: '#8f20ff' }}
      >
        <Typography className="mb-[110px]" sx={{ color: '#ffffff', fontSize: '80px', fontWeight: '400' }}>
          Künstlerisches Konzept
        </Typography>
        <Box className="max-w-[1250px] flex justify-center items-start gap-[110px]">
          <Box className="w-[50%] flex flex-col justify-start items-start">
            <Typography
              sx={{
                color: '#ffffff',
                fontSize: '30px',
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
                color: '#ffffff',
                fontSize: '30px',
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
          <Box className="w-[50%] flex flex-col justify-start items-start sticky">
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-18 um 17.26.20 1.png`}
              className="flex-1 w-[500px] mb-[24px]"
              sx={{ objectFit: 'cover', aspectRatio: 0.75 }}
            ></Box>

            <Typography
              sx={{
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: '400',
              }}
            >
              RAUL VALDEZ
            </Typography>
            <Typography
              sx={{
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: '400',
              }}
            >
              Künstlerischer Leiter der CDSH
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box component="section" className="py-[110px] px-[45px] flex flex-col justify-center items-start">
        <Typography className="mb-[110px]" sx={{ color: '#000000', fontSize: '80px', fontWeight: '400' }}>
          Räumlichkeiten
        </Typography>
        <Carousel />
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

export default AboutUs;
