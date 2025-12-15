import { Box, Typography, useTheme } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import SplitSection from './SplitSection';
import BigLink from 'app/shared-components/link/BigLink';
import AnchorLink from 'app/shared-components/link/AnchorLink';

const students = [
  {
    id: 'yugen',
    href: `/students/yugen`,
    name: 'Yugen',
    links: [
      {
        name: 'Soloprojekt',
        title: 'Titel hier einfügen',
        href: `/projects/on_the_trail`,
        src: `${process.env.PUBLIC_URL}/assets/images/students/project1.png`,
      },
      {
        name: 'Abschlussprojekt',
        title: 'Titel hier einfügen',
        href: `/projects/on_the_trail`,
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
    href: `/students/ikigai`,
    name: 'Ikigai',
    links: [
      {
        name: 'Soloprojekt',
        title: 'Titel hier einfügen',
        href: `/projects/on_the_trail`,
        src: `${process.env.PUBLIC_URL}/assets/images/students/project1.png`,
      },
      {
        name: 'Abschlussprojekt',
        title: 'Titel hier einfügen',
        href: `/projects/on_the_trail`,
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
    href: `/students/ho_omau`,
    name: "Ho'omau",
    links: [
      {
        name: 'Soloprojekt',
        title: 'Titel hier einfügen',
        href: `/projects/on_the_trail`,
        src: `${process.env.PUBLIC_URL}/assets/images/projects/project1.png`,
      },
      {
        name: 'Abschlussprojekt',
        title: 'Titel hier einfügen',
        href: `/projects/on_the_trail`,
        src: `${process.env.PUBLIC_URL}/assets/images/projects/project2.png`,
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
  const navigate = useNavigate();

  const { studentUrlName } = useParams();
  const selectedStudent = students.find((m) => m.id === studentUrlName);

  return (
    <>
      <Box
        component="section"
        className="header relative flex items-center max-h-860-px"
        sx={{ height: { sx: '100%', md: `100vh` }, flexDirection: { xs: 'column-reverse', md: 'row' } }}
      >
        <Box
          className="flex-1 h-full flex-col justify-between items-start"
          sx={{
            zIndex: '2',
            width: { xs: '100%', md: '50%' },
            padding: { xs: '46px 56px 46px 56px', md: '0 56px 46px 56px' },
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <p></p>
          <p></p>
          <Box>
            <Typography
              className="capitalize"
              sx={{
                fontSize: '80px',
                lineHeight: '85px',
                fontWeight: '400',
              }}
            >
              {selectedStudent.name}
            </Typography>
            <Box className="flex flex-col justify-start items-start gap-[4px] mt-[48px]">
              {selectedStudent.links.map((link, idx) => (
                <AnchorLink key={idx} to={link.href} color="#000" extraSx={{ fontSize: '15px', mb: '1px' }}>
                  {link.name}
                </AnchorLink>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography>
              {selectedStudent.year.start} - {selectedStudent.year.end}
            </Typography>
            <Box className="flex flex-col items-start gap-[8px] mt-[48px]">
              <button
                onClick={() => {
                  navigate(`/students`);
                }}
                className="bg-white border border-black rounded-full px-[16px] py-[2px]"
              >
                zurück
              </button>
            </Box>
          </Box>
        </Box>
                <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
        
        <Box
          component="img"
          src={selectedStudent.src}
          className="flex-1 w-full relative"
            sx={{ objectFit: 'cover', height: {xs: "390px", md: "100%"} }}
        ></Box>
        <Box
          className=""
          sx={{
            position: 'absolute',
            left: '24px',
            bottom: '12px',
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          <Typography
            className="capitalize mix-blend-exclusion"
            sx={{
              fontSize: '30px',
              fontWeight: '400',
              color: '#ffffff',
            }}
          >
            {selectedStudent.name}
          </Typography>

          {selectedStudent.links.map((link, idx) => (
            <AnchorLink
            key={idx}
              className="capitalize mix-blend-exclusion"
              to={link.href}
              sx={{
                fontSize: '15px',
                fontWeight: '400',
                color: '#ffffff',
              }}
            >
              {link.name}
            </AnchorLink>
          ))}

          <Box>
            <Typography
              className="mix-blend-exclusion"
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: '#ffffff',
              }}
            >
              {selectedStudent.year.start} - {selectedStudent.year.end}
            </Typography>
            <Box className="flex flex-col items-start gap-[8px]">
              <button
                onClick={() => {
                  navigate(`/students`);
                }}
                className="bg-white border border-black rounded-full px-[16px] py-[2px]"
              >
                zurück
              </button>
            </Box>
          </Box>
        </Box>
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
          sx={{
            flex: '1',
            fontSize: { xs: '15px', md: '30px' },
            fontWeight: '400',
          }}
        >
          {selectedStudent.descriptionLeft}
        </Typography>
        <Typography
          sx={{
            flex: '1',
            fontSize: { xs: '15px', md: '30px' },
            fontWeight: '400',
          }}
        >
          {selectedStudent.descriptionRight}
        </Typography>
      </Box>

      <Box
        component="section"
        className="px-[45px] flex flex-col justify-center items-start"
        sx={{
          mt: { xs: '70px', md: '140px' },
        }}
      >
        {selectedStudent.links.map((link, idx) => {
          const isOdd = idx % 2 === 1;

          return (
            <SplitSection
              key={idx}
              title={link.name}
              href={link.href}
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

      <Box
        component="section"
        className="flex flex-col justify-center items-center text-center"
        sx={{
          py: { xs: '60px', md: '120px' },
          px: { xs: '24px', md: '0px' },
        }}
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
          Die Studierenden
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
        >
          {selectedStudent.students}
        </Typography>
      </Box>
    </>
  );
}

export default StudentGroup;
