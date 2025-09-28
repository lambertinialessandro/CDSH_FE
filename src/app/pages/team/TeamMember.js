import { Box, Typography, useTheme } from '@mui/material';
import { useParams } from 'react-router';

function TeamMember() {
  const theme = useTheme();

  const { memberUrlName } = useParams();

  const members = [
    {
      id: 'javier_báez',
      href: `${process.env.PUBLIC_URL}/team/javier_báez`,
      name: 'Javier Báez',
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 2.png`,
      roles: ['Hauptfächer'],
      subjects: ['Schulleitung'],
    },
    {
      id: 'raul_valdez',
      href: `${process.env.PUBLIC_URL}/team/raul_valdez`,
      name: 'Raul Valdez',
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 3.png`,
      roles: ['Hauptfächer'],
      subjects: ['Künstlerische Leitung'],
    },
    {
      id: 'sina_rundel',
      href: `${process.env.PUBLIC_URL}/team/sina_rundel`,
      name: 'Sina Rundel',
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 4.png`,
      roles: ['Theoriefächer'],
      subjects: ['Kommunikation', 'Schüler*innenbetreuung', 'Tanzgeschichte'],
    },

    {
      id: 'ursina_tossi',
      href: `${process.env.PUBLIC_URL}/team/ursina_tossi`,
      name: 'Ursina Tossi',
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto ursina_tossi.png`,
      roles: ['Hauptfächer'],
      subjects: ['Künstlerische Leitung'],
    },
    {
      id: 'phillip_benjamin_jenkins',
      href: `${process.env.PUBLIC_URL}/team/phillip_benjamin_jenkins`,
      name: 'Phillip Benjamin Jenkins',
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto phillip_benjamin_jenkins.png`,
      roles: ['Hauptfächer'],
      subjects: ['Schulleitung'],
    },
    {
      id: 'angela_guerreiro',
      href: `${process.env.PUBLIC_URL}/team/angela_guerreiro`,
      name: 'Angela Guerreiro',
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto angela_guerreiro.png`,
      roles: ['Choreograph*innen'],
      subjects: ['Choreographie'],
    },
    {
      id: 'filip_van_huffel',
      href: `${process.env.PUBLIC_URL}/team/filip_van_huffel`,
      name: 'Filip van Huffel',
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto filip_van_huffel.png`,
      roles: ['Gastdozent*innen'],
      subjects: ['Choreographie'],
    },
  ];
  const selectedMember = members.find((m) => m.id === memberUrlName);

  return (
    <>
      <Box component="section" className="header relative flex items-center max-h-860-px" sx={{ height: `100vh` }}>
        <Box
          className="flex-1 w-[50%] h-full flex flex-col justify-between items-start px-[56px] pb-[46px]"
          sx={{ zIndex: '2' }}
        >
          <Typography></Typography>
          <Typography
            className="capitalize"
            sx={{
              fontSize: '80px',
              fontWeight: '400',
            }}
          >
            {selectedMember.name}
          </Typography>
          <Box className="flex justify-start items-center gap-[8px]">
            {selectedMember.roles.map((role, idx) => (
              <span key={idx} className="bg-black text-white rounded-full px-[24px] py-[4px]">
                {role}
              </span>
            ))}
          </Box>
          <Box className="flex flex-col items-start gap-[8px]">
            <Typography>Fach: {selectedMember.subjects.join(', ')}</Typography>
            <button onClick={() => {}} className="bg-white border border-black rounded-full px-[16px] py-[2px]">
              zurück
            </button>
          </Box>
        </Box>
        <Box
          component="img"
          src={selectedMember.src}
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
          sx={{
            flex: '1',
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
            flex: '1',
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
    </>
  );
}

export default TeamMember;
