import { Box, Typography } from '@mui/material';
import TeamSelector from './TeamSelector';

function Team() {
  const teamMembers = [
    {
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 2.png`,
      name: 'Javier Báez',
      roles: ['Schulleitung'],
      href: `${process.env.PUBLIC_URL}/team/javier_báez`,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 3.png`,
      name: 'Raul Valdez',
      roles: ['Künstlerische Leitung'],
      href: `${process.env.PUBLIC_URL}/team/raul_valdez`,
    },
    {
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 4.png`,
      name: 'Sina Rundel',
      roles: ['Kommunikation und', 'Schüler*innenbetreuung', 'Tanzgeschichte'],
      href: `${process.env.PUBLIC_URL}/team/sina_rundel`,
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
        sx={{ height: `100vh` }}
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
            Team
          </Typography>
          <Typography
            sx={{
              fontSize: '30px',
              fontWeight: '400',
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </Typography>
        </Box>
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/assets/images/team/cdsh-willkommen-1.jpg`}
          className="flex-1 w-[50%] h-full"
          sx={{ objectFit: 'cover' }}
        ></Box>
      </Box>

      <Box component="section" className="relative">
        <Box className="absolute w-full h-[65%]" sx={{ background: '#eae7f8', zIndex: '1' }}></Box>

        <Box
          className="py-[110px] px-[48px] mb-[110px] flex flex-col justify-start items-center gap-[48px] relative z-[10]"
        >
          <Box className="max-w-[1280px]">
            <Typography
              className="text-center"
              sx={{
                fontSize: '80px',
                fontWeight: '400',
              }}
            >
              Leitungsteam
            </Typography>
            <Typography
              sx={{
                fontSize: '30px',
                fontWeight: '400',
              }}
            >
              Als Leitungsteam der CDSH können Javier Báez, Raul Valdez und Sina Rundel auf ihre langjährige
              künstlerische und pädagogische Erfahrung zurückgreifen, um in ihrem Ausbildungsprogramm eine qualitativ
              hochwertige, den realen Anforderungen gerecht werdende Vorbereitung auf den Beruf zeitgenössische*r
              Bühnentänzer*in zu garantieren.
            </Typography>
          </Box>

          <Box className="w-full flex justify-center items-start gap-[24px]">
            {teamMembers.map((member, idx) => (
              <Box key={idx} className="flex flex-col justify-center items-start">
                <Box className="relative mb-[12px]">
                  <Box
                    component="img"
                    src={member.src}
                    className="flex-1 w-[250px] border border-black"
                    sx={{ objectFit: 'cover', aspectRatio: 0.75 }}
                  ></Box>
                  {member.href && (
                    <Box
                      component="a"
                      href={member.href}
                      className="absolute border border-black rounded-full bottom-0 right-0 px-[16px] py-[2px] m-[16px]"
                      sx={{ background: '#ffffff' }}
                    >
                      VITA
                    </Box>
                  )}
                </Box>

                <Typography
                  className="uppercase"
                  sx={{
                    fontSize: '15px',
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
                      fontSize: '15px',
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
        className="py-[110px] px-[75px] flex flex-col justify-center items-center"
        sx={{ background: '#000000' }}
      >
        <Typography className="mb-[110px]" sx={{ color: '#ffffff', fontSize: '80px', fontWeight: '400' }}>
          In memoriam: Tanja Báez
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
              Mit großer Trauer und Bestürzung mussten wir im Oktober 2016 bekannt geben, dass Tanja Baéz von uns
              gegangen ist. Tanja war als Mitgründerin der Contemporary Dance School Hamburg von Beginn an eine der
              tragenden Säulen der Schule, und ihr Verlust wird nur schwer zu ersetzen sein. Sie hat ihre letzte Reise
              mit Kraft, Mut und nie klagend angetreten und wird uns für immer Vorbild sein.
            </Typography>
            <br />
            <Typography
              sx={{
                color: '#ffffff',
                fontSize: '30px',
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

      <Box component="section" className="py-[120px] flex flex-col justify-center items-center text-center">
        <Typography
          sx={{ color: '#000000', fontSize: '80px', fontWeight: '400', lineHeight: '1', marginBottom: '32px' }}
        >
          Dozent*innen
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: '30px', fontWeight: '400' }}
        >
          Unser internationales Dozent*innenteam bietet dir ein breites Spektrum an Einblicken in unterschiedliche
          Arbeitsweisen an ganz unterschiedlichen Orten der Welt. Von Lateinamerika über Osteuropa, den USA, Asien und
          ganz Europa, bringen unsere Dozent*innen nicht nur rein fachlich, sondern auch ihre Arbeitspraxis betreffend,
          ganz unterschiedliche Erfahrungen mit. Als Persönlichkeiten mit ausnahmslos eigener künstlerischer Vita können
          sie dir neben fachlichen und technischen Kompetenzen praxisnah und erfahrungsbasiert ein sehr konkretes Bild
          der realen Arbeitspraxis vermitteln.
        </Typography>
      </Box>

      <Typography
        className="max-w-[740px] min-w-[50%] text-center"
        sx={{ color: '#000000', fontSize: '30px', fontWeight: '400' }}
      >
        //TODO: DEVELOPER NOTE: ANIMATION WIP
      </Typography>

      <TeamSelector />

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

export default Team;
