import { Box, Typography, useTheme } from '@mui/material';
import TeamSelector from './TeamSelector';
import { Link } from 'react-router-dom';

function Team() {
  const theme = useTheme();
  const teamMembers = [
    {
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 2.png`,
      name: 'Javier Báez',
      roles: ['Schulleitung'],
      href: `/team/javier_báez`,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 3.png`,
      name: 'Raul Valdez',
      roles: ['Künstlerische Leitung'],
      href: `/team/raul_valdez`,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 4.png`,
      name: 'Sina Rundel',
      roles: ['Kommunikation und', 'Schüler*innenbetreuung', 'Tanzgeschichte'],
      href: `/team/sina_rundel`,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 5.png`,
      name: 'Martin Stöckle',
      roles: ['Kaufmännischer Berater'],
    },
  ];

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
            Team
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '15px', md: '30px' },
              lineHeight: { xs: '20px', md: '35px' },
              fontWeight: '400',
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </Typography>
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/assets/images/team/cdsh-willkommen-1.jpg`}
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
            Team
          </Typography>
        </Box>
      </Box>

      <Box component="section" className="relative">
        <Box className="absolute w-full h-[65%]" sx={{ background: theme.palette.secondary.main, zIndex: '1' }}></Box>

        <Box
          className="px-[48px] mb-[110px] flex flex-col justify-start items-center relative z-[10]"
          sx={{
            gap: { xs: '24px', md: '48px' },
            py: { xs: '55px', md: '110px' },
          }}
        >
          <Box className="max-w-[1280px]">
            <Typography
              className="text-center"
              sx={{
                fontSize: { xs: '35px', md: '80px' },
                fontWeight: '400',
              }}
            >
              Leitungsteam
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '15px', md: '30px' },
                fontWeight: '400',
              }}
            >
              Als Leitungsteam der CDSH können Javier Báez, Raul Valdez und Sina Rundel auf ihre langjährige
              künstlerische und pädagogische Erfahrung zurückgreifen, um in ihrem Ausbildungsprogramm eine qualitativ
              hochwertige, den realen Anforderungen gerecht werdende Vorbereitung auf den Beruf zeitgenössische*r
              Bühnentänzer*in zu garantieren.
            </Typography>
          </Box>

          <Box className="w-full flex justify-center items-start gap-[24px] flex-wrap">
            {teamMembers.map((member, idx) => (
              <Box key={idx} className="flex flex-col justify-center items-start">
                <Box className="relative mb-[12px]">
                  <Box
                    component="img"
                    src={member.src}
                    className="flex-1 border border-black"
                    sx={{ objectFit: 'cover', aspectRatio: 0.75, width: { xs: '125px', md: '250px' } }}
                  ></Box>
                  {member.href && (
                    <Box
                      component={Link}
                      to={member.href}
                      className="absolute border border-black rounded-full bottom-0 right-0"
                      sx={{
                        background: '#ffffff',
                        fontSize: { xs: '12px', md: '15px' },
                        px: { xs: '8px', md: '16px' },
                        py: { xs: '2px', md: '2px' },
                        margin: { xs: '8px', md: '16px' },
                      }}
                    >
                      VITA
                    </Box>
                  )}
                </Box>

                <Typography
                  className="uppercase"
                  sx={{
                    fontSize: { xs: '12px', md: '15px' },
                    fontWeight: '400',
                    lineHeight: 'normal',
                  }}
                >
                  {member.name}
                </Typography>
                {member.roles.map((role, idx) => (
                  <Typography
                    key={idx}
                    sx={{
                      fontSize: { xs: '12px', md: '15px' },
                      fontWeight: '400',
                      lineHeight: 'normal',
                    }}
                  >
                    {role}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        className="flex flex-col justify-center items-center"
        sx={{ background: '#000000', px: { xs: '35px', md: '75px' }, py: { xs: '55px', md: '110px' } }}
      >
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: { xs: '35px', md: '80px' },
            fontWeight: '400',
            mb: { xs: '55px', md: '110px' },
          }}
        >
          In memoriam: Tanja Báez
        </Typography>
        <Box className="max-w-[1250px] flex justify-center items-start" sx={{ gap: { xs: '55px', md: '110px' } }}>
          <Box className="w-[50%] flex flex-col justify-start items-start">
            <Typography
              sx={{
                color: '#ffffff',
                fontSize: { xs: '15px', md: '30px' },
                fontWeight: '400',
              }}
            >
              Mit großer Trauer und Bestürzung mussten wir im Oktober 2016 bekannt geben, dass Tanja Baéz von uns
              gegangen ist. Tanja war als Mitgründerin der Contemporary Dance School Hamburg von Beginn an eine der
              tragenden Säulen der Schule, und ihr Verlust wird nur schwer zu ersetzen sein. Sie hat ihre letzte Reise
              mit Kraft, Mut und nie klagend angetreten und wird uns für immer Vorbild sein.
            </Typography>
            <br />
            <Typography
              sx={{
                color: '#ffffff',
                fontSize: { xs: '15px', md: '30px' },
                fontWeight: '400',
              }}
            >
              Ruhe in Frieden, Tanja!
            </Typography>
          </Box>
          <Box className="w-[50%] flex flex-col justify-start items-start">
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 1.png`}
              className="flex-1 w-[500px] mb-[24px]"
              sx={{ objectFit: 'cover', aspectRatio: 0.75 }}
            ></Box>
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        className="px-[25px] flex flex-col justify-center items-center text-center"
        sx={{ py: { xs: '55px', md: '110px' } }}
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
          Dozent*innen
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
        >
          Unser internationales Dozent*innenteam bietet dir ein breites Spektrum an Einblicken in unterschiedliche
          Arbeitsweisen an ganz unterschiedlichen Orten der Welt. Von Lateinamerika über Osteuropa, den USA, Asien und
          ganz Europa, bringen unsere Dozent*innen nicht nur rein fachlich, sondern auch ihre Arbeitspraxis betreffend,
          ganz unterschiedliche Erfahrungen mit. Als Persönlichkeiten mit ausnahmslos eigener künstlerischer Vita können
          sie dir neben fachlichen und technischen Kompetenzen praxisnah und erfahrungsbasiert ein sehr konkretes Bild
          der realen Arbeitspraxis vermitteln.
        </Typography>
      </Box>

      <TeamSelector />

      <Box component="section" className="py-[120px] px-[25px] flex flex-col justify-center items-center text-center">
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

export default Team;
