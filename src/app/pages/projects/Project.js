import { Box, Typography, useTheme } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import ImpressionenSection from './ImpressionenSection';

const projects = [
  {
    id: 'on_the_trail',
    name: 'On the trail',
    chategories: ['Absolvent*innen 2021'],
    subjects: ['Choreographie'],
    src: `${process.env.PUBLIC_URL}/assets/images/projects/project1.png`,
  },
];

function Project(props) {
  const {} = props;
  const navigate = useNavigate();
  const theme = useTheme();
  const { projectUrlId } = useParams();

  const selectedProject = projects.find((m) => m.id === projectUrlId);

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

          <Typography
            className="capitalize"
            sx={{
              fontSize: '80px',
              lineHeight: '85px',
              fontWeight: '400',
            }}
          >
            {selectedProject.name}
          </Typography>
          <Box className="flex justify-start items-center gap-[8px]">
            {selectedProject.chategories.map((role, idx) => (
              <span
                key={idx}
                className="bg-black text-white rounded-full px-[24px] py-[4px]"
                style={{ fontSize: '15px' }}
              >
                {role}
              </span>
            ))}
          </Box>
          <Box className="flex flex-col items-start gap-[32px]">
            <Typography>Fach: {selectedProject.subjects.join(', ')}</Typography>
            <button
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  navigate('/students');
                }
              }}
              className="bg-white border border-black rounded-full px-[16px] py-[2px]"
            >
              zurück
            </button>
          </Box>
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={selectedProject.src}
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
            <p></p>
            <p></p>

            <Typography
              className="capitalize mix-blend-exclusion"
              sx={{
                fontSize: '30px',
                fontWeight: '400',
                color: '#ffffff',
              }}
            >
              {selectedProject.name}
            </Typography>

            <Box className="flex justify-start items-center gap-[8px]">
              {selectedProject.chategories.map((role, idx) => (
                <span
                  key={idx}
                  className="bg-black text-white rounded-full px-[24px] py-[4px]"
                  style={{ fontSize: '12px' }}
                >
                  {role}
                </span>
              ))}
            </Box>

            <Box className="flex flex-col items-start gap-[32px]">
              <Typography className="text-white mix-blend-exclusion">
                Fach: {selectedProject.subjects.join(', ')}
              </Typography>
              <button
                onClick={() => {
                  if (window.history.length > 1) {
                    navigate(-1);
                  } else {
                    navigate('/students');
                  }
                }}
                className="bg-white border border-black rounded-full px-[16px] py-[2px]"
              >
                zurück
              </button>
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
          on the trail beschreibt die Situation nach einem Einschnitt, den Moment, wenn sich Dinge wieder zusammenfügen,
          nachdem sie erschüttert wurden oder sogar zerbrochen sind. In diesem Moment des scheinbaren Chaos', in welchem
          die Normalität nicht mehr oder nur bedingt funktioniert, liegt ein Potenzial, die Essenz der Dinge zu erahnen
          und Normalität neu zu definieren.
        </Typography>
        <Typography
          sx={{
            flex: '1',
            fontSize: { xs: '15px', md: '30px' },
            fontWeight: '400',
          }}
        >
          Strukturen entwickeln sich, Gewohnheiten manifestieren sich. Was als normal wahrgenommen wird, ist Resultat
          einer steten mitunter unreflektierten Reproduktion dessen, was als richtig, erstrebenswert und produktiv gilt.
          Wir funktionieren und vergessen in Frage zu stellen.
        </Typography>
      </Box>

      <ImpressionenSection />
    </>
  );
}

export default Project;
