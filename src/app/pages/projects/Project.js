import { Box, Typography, useTheme } from '@mui/material';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
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
  const theme = useTheme();
  const { projectUrlId } = useParams();

  const selectedProject = projects.find((m) => m.id === projectUrlId);

  return (
    <>
      <Box component="section" className="header relative flex items-center max-h-860-px" sx={{ height: `100vh` }}>
        <Box
          className="flex-1 w-[50%] h-full flex flex-col justify-between items-start px-[56px] pb-[46px]"
          sx={{ zIndex: '2' }}
        >
          <p></p>
          <p></p>

          <Typography
            className="capitalize"
            sx={{
              fontSize: '80px',
              fontWeight: '400',
            }}
          >
            {selectedProject.name}
          </Typography>
          <Box className="flex justify-start items-center gap-[8px]">
            {selectedProject.chategories.map((role, idx) => (
              <span key={idx} className="bg-black text-white rounded-full px-[24px] py-[4px]">
                {role}
              </span>
            ))}
          </Box>
          <Box className="flex flex-col items-start gap-[32px]">
            <Typography>Fach: {selectedProject.subjects.join(', ')}</Typography>
            <button onClick={() => {}} className="bg-white border border-black rounded-full px-[16px] py-[2px]">
              zurück
            </button>
          </Box>
        </Box>
        <Box
          component="img"
          src={selectedProject.src}
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
          on the trail beschreibt die Situation nach einem Einschnitt, den Moment, wenn sich Dinge wieder zusammenfügen,
          nachdem sie erschüttert wurden oder sogar zerbrochen sind. In diesem Moment des scheinbaren Chaos', in welchem
          die Normalität nicht mehr oder nur bedingt funktioniert, liegt ein Potenzial, die Essenz der Dinge zu erahnen
          und Normalität neu zu definieren.
        </Typography>
        <Typography
          sx={{
            flex: '1',
            fontSize: '30px',
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
