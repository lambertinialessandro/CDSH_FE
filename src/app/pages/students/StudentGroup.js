import { Box, Typography, useTheme } from '@mui/material';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import SplitSection from './SplitSection';
import BigLink from 'app/shared-components/link/BigLink';

const students = [
  {
    id: 'yugen',
    href: `${process.env.PUBLIC_URL}/students/yugen`,
    name: 'Yugen',
    links: [
      {
        name: 'Soloprojekt',
        title: 'Titel hier einfügen',
        href: `${process.env.PUBLIC_URL}/projects/on_the_trail`,
        src: `${process.env.PUBLIC_URL}/assets/images/students/project1.png`,
      },
      {
        name: 'Abschlussprojekt',
        title: 'Titel hier einfügen',
        href: `${process.env.PUBLIC_URL}/projects/`,
        src: `${process.env.PUBLIC_URL}/assets/images/students/project2.png`,
      },
    ],
    src: `${process.env.PUBLIC_URL}/assets/images/students/Bildschirmfoto 2025-02-18 um 17.05.47.png`,
    year: { start: 2024, end: 2027 },
    descriptionLeft:
      '“Ikigai” is a Japanese concept that means your reason for being or your purpose in life. It is unique to every person, it allows you to express yourself freely and truthfully, according to your own rules or values.',
    descriptionRight:
      'As a group we are connected through the search for our own ikigai, exploring our unique traits, our role in the world (community) and discovering what we want to say as artists.',
    students:
      'Alva Nilsson, Ana Chuntisvili, Ana Paula Salcido Roa, Aurora Pollini, Camila Milton Frattari, Eleonora Poles, Emma Steenblock, Fabio Camoirano, Giulia del Grosso, Ida Zimmermann, Irene Lanzanò, Karenina Lizama Leirana, Leonie Klamer, Martina Vincenza Ventura, Melina Papadopoulu, Milla Matthews, Orla Maria Losardo, Peter Mani, Simone Schachtschneider, Tara Thormann, Vignesh Kumar, Yana Delibashev, Yareli Alejandra Alvarado Macario',
  },
  {
    id: 'ikigai',
    href: `${process.env.PUBLIC_URL}/students/ikigai`,
    name: 'Ikigai',
    links: [
      {
        name: 'Soloprojekt',
        title: 'Titel hier einfügen',
        href: `${process.env.PUBLIC_URL}/projects/`,
        src: `${process.env.PUBLIC_URL}/assets/images/students/project1.png`,
      },
      {
        name: 'Abschlussprojekt',
        title: 'Titel hier einfügen',
        href: `${process.env.PUBLIC_URL}/projects/`,
        src: `${process.env.PUBLIC_URL}/assets/images/students/project2.png`,
      },
    ],
    src: `${process.env.PUBLIC_URL}/assets/images/students/Bildschirmfoto 2025-02-18 um 17.06.05.png`,
    year: { start: 2023, end: 2026 },
    descriptionLeft:
      '“Ikigai” is a Japanese concept that means your reason for being or your purpose in life. It is unique to every person, it allows you to express yourself freely and truthfully, according to your own rules or values.',
    descriptionRight:
      'As a group we are connected through the search for our own ikigai, exploring our unique traits, our role in the world (community) and discovering what we want to say as artists.',
    students:
      'Alva Nilsson, Ana Chuntisvili, Ana Paula Salcido Roa, Aurora Pollini, Camila Milton Frattari, Eleonora Poles, Emma Steenblock, Fabio Camoirano, Giulia del Grosso, Ida Zimmermann, Irene Lanzanò, Karenina Lizama Leirana, Leonie Klamer, Martina Vincenza Ventura, Melina Papadopoulu, Milla Matthews, Orla Maria Losardo, Peter Mani, Simone Schachtschneider, Tara Thormann, Vignesh Kumar, Yana Delibashev, Yareli Alejandra Alvarado Macario',
  },
  {
    id: 'ho_omau',
    href: `${process.env.PUBLIC_URL}/students/ho_omau`,
    name: "Ho'omau",
    links: [
      {
        name: 'Soloprojekt',
        title: 'Titel hier einfügen',
        href: `${process.env.PUBLIC_URL}/projects/`,
        src: `${process.env.PUBLIC_URL}/assets/images/projects/`,
      },
      {
        name: 'Abschlussprojekt',
        title: 'Titel hier einfügen',
        href: `${process.env.PUBLIC_URL}/projects/`,
        src: `${process.env.PUBLIC_URL}/assets/images/projects/`,
      },
    ],
    src: `${process.env.PUBLIC_URL}/assets/images/students/Bildschirmfoto 2025-02-18 um 17.06.12.png`,
    year: { start: 2022, end: 2025 },
    descriptionLeft:
      '“Ikigai” is a Japanese concept that means your reason for being or your purpose in life. It is unique to every person, it allows you to express yourself freely and truthfully, according to your own rules or values.',
    descriptionRight:
      'As a group we are connected through the search for our own ikigai, exploring our unique traits, our role in the world (community) and discovering what we want to say as artists.',
    students:
      'Alva Nilsson, Ana Chuntisvili, Ana Paula Salcido Roa, Aurora Pollini, Camila Milton Frattari, Eleonora Poles, Emma Steenblock, Fabio Camoirano, Giulia del Grosso, Ida Zimmermann, Irene Lanzanò, Karenina Lizama Leirana, Leonie Klamer, Martina Vincenza Ventura, Melina Papadopoulu, Milla Matthews, Orla Maria Losardo, Peter Mani, Simone Schachtschneider, Tara Thormann, Vignesh Kumar, Yana Delibashev, Yareli Alejandra Alvarado Macario',
  },
];

function StudentGroup() {
  const theme = useTheme();

  const { studentUrlName } = useParams();
  const selectedStudent = students.find((m) => m.id === studentUrlName);

  return (
    <>
      <Box component="section" className="header relative flex items-center max-h-860-px" sx={{ height: `100vh` }}>
        <Box
          className="flex-1 w-[50%] h-full flex flex-col justify-between items-start px-[56px] pb-[46px]"
          sx={{ zIndex: '2' }}
        >
          <p></p>
          <p></p>
          <Box>
            <Typography
              className="capitalize"
              sx={{
                fontSize: '80px',
                fontWeight: '400',
              }}
            >
              {selectedStudent.name}
            </Typography>
            <Box className="flex flex-col justify-start items-start gap-[4px] mt-[48px]">
              {selectedStudent.links.map((link, idx) => (
                <Link key={idx} to={link.href} className="">
                  {link.name}
                </Link>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography>
              {selectedStudent.year.start} - {selectedStudent.year.end}
            </Typography>
            <Box className="flex flex-col items-start gap-[8px] mt-[48px]">
              <button onClick={() => {}} className="bg-white border border-black rounded-full px-[16px] py-[2px]">
                zurück
              </button>
            </Box>
          </Box>
        </Box>
        <Box
          component="img"
          src={selectedStudent.src}
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
          {selectedStudent.descriptionLeft}
        </Typography>
        <Typography
          sx={{
            flex: '1',
            fontSize: '30px',
            fontWeight: '400',
          }}
        >
          {selectedStudent.descriptionRight}
        </Typography>
      </Box>

      <Box component="section" className="mt-[140px] px-[45px] flex flex-col justify-center items-start">
        {selectedStudent.links.map((link, idx) => {
          const isOdd = idx % 2 === 1;
          return (
            <SplitSection
              key={idx}
              title={
                <BigLink to={link.href} color={isOdd ? '#ffffff' : '#000000'}>
                  {link.name}
                </BigLink>
              }
              text={link.title}
              img={{ src: link.src, alt: link.name }}
              reverse={isOdd}
              bgColor={isOdd && '#8F20FF'}
              color={isOdd && '#ffffff'}
              bottom={idx === selectedStudent.links.length - 1}
            />
          );
        })}
      </Box>

      <Box component="section" className="py-[120px] flex flex-col justify-center items-center text-center">
        <Typography
          sx={{ color: '#000000', fontSize: '80px', fontWeight: '400', lineHeight: '1', marginBottom: '32px' }}
        >
          Die Studierenden
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: '30px', fontWeight: '400' }}
        >
          {selectedStudent.students}
        </Typography>
      </Box>
    </>
  );
}

export default StudentGroup;
