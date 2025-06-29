import { Box, Typography } from '@mui/material';
import { selectIsBannerOpen } from 'app/store/app/mainSlice';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';

function TeamMember() {
  const isBannerOpen = useSelector(selectIsBannerOpen);

  const { memberUrlName } = useParams();

  const members = [
    {
      id: 'ursina_tossi',
      href: `${process.env.PUBLIC_URL}/team/ursina_tossi`,
      name: 'Ursina Tossi',
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto ursina_tossi.png`,
      subjects: [''],
    },
    {
        id: 'phillip_benjamin_jenkins',
      href: `${process.env.PUBLIC_URL}/team/phillip_benjamin_jenkins`,
      name: 'Phillip Benjamin Jenkins',
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto phillip_benjamin_jenkins.png`,
      subjects: ['Hauptfächer'],
    },
    {
        id: 'angela_guerreiro',
      href: `${process.env.PUBLIC_URL}/team/angela_guerreiro`,
      name: 'Angela Guerreiro',
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto angela_guerreiro.png`,
      subjects: ['Neben- und Theoriefächer'],
    },
    {
        id: 'filip_van_huffel',
      href: `${process.env.PUBLIC_URL}/team/filip_van_huffel`,
      name: 'Filip van Huffel',
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto filip_van_huffel.png`,
      subjects: ['Gastdozent*innen 2025'],
    },
  ];
  const selectedMember = members.find((m)=> m.id === memberUrlName)

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
          className="capitalize"
            sx={{
              fontSize: '80px',
              fontWeight: '400',
            }}
          >
            {selectedMember.name}
          </Typography>
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
    </>
  );
}

export default TeamMember;
