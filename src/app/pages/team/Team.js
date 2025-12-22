import { Box, Typography, useTheme } from '@mui/material';
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { selectTeamData, setTeamData } from 'app/store/app/pageSlice';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { defaultNS as ns_common } from 'translations';
import ErrorPage from '../general/ErrorPage';
import LoadingPage from '../general/LoadingPage';
import TeamSelector from './TeamSelector';

function Team() {
  const dispatch = useDispatch();
  const { t } = useTranslation([ns_common]);
  const { button } = t(ns_common);
  const theme = useTheme();
  const userLanguage = useSelector(selectUserLanguage);

  const [hasContent, setContent] =useState(false)
  const teamData = useSelector((state) => selectTeamData(state, userLanguage));
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (teamData) {
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 1);

    fetch(`http://localhost/plainkit-main/api/team?lang=${userLanguage}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(setTeamData({ userLanguage, data: data }));
      })
      .catch((error) => {
        if (userLanguage === 'en') {
          const mockData = {
            educationCategories: [
              {
                id: 'major_subjects',
                name: 'Major Subjects',
              },
              {
                id: 'minor_subjects',
                name: 'Minor Subjects',
              },
              {
                id: 'theory_subjects',
                name: 'Theory Subjects',
              },
              {
                id: 'workshops',
                name: 'Workshops',
              },
            ],
            intro: {
              headline: 'Team',
              text: 'Lorem ipsum **dolor** sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
              image: `${process.env.PUBLIC_URL}/assets/images/team/cdsh-willkommen-1.jpg`,
            },
            leadership: {
              headline: 'Management Team',
              text: 'As the management team of CDSH, **Javier B\u00e1ez**, **Raul Valdez**, and **Sina Rundel** can draw on their many years of artistic and pedagogical experience to guarantee a high-quality, real-world preparation for the profession of contemporary stage dancer in their training program.',
            },
            teamMembers: [
              {
                id: 'javier_b\u00e1ez',
                name: 'Javier B\u00e1ez',
                role: 'School Management, Choreographer, Teacher',
                subjects: ['Ballet', 'Choreography'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 2.png`,
              },
              {
                id: 'raul_valdez',
                name: 'Raul Valdez',
                role: 'Artistic Director, Choreographer, Teacher',
                subjects: ['Contemporary', 'Choreography'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 3.png`,
              },
              {
                id: 'sina_rundel',
                name: 'Sina Rundel',
                role: 'Artistic Director',
                subjects: [],
                src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 4.png`,
              },
              {
                id: 'martin_st\u00f6ckle',
                name: 'Martin St\u00f6ckle',
                role: 'Business Consultant',
                subjects: [],
                src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 5.png`,
              },
            ],
            docentsMembers: [
              {
                id: 'hellena_stemm',
                name: 'Hellena Stemm',
                role: 'Teacher',
                subjects: ['Ballet'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/helena_stemm.png`,
                category: ['Major Subjects'],
              },
              {
                id: 'mihir_grover',
                name: 'Mihir Grover',
                role: 'Teacher, Choreographer',
                subjects: ['Choreography', 'Contemporary', 'Floorwork'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/mihir_grover.png`,
                category: ['Major Subjects'],
              },
              {
                id: 'stacey_denham',
                name: 'Stacey Denham',
                role: 'Teacher',
                subjects: ['Horton Technique'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/stacey_denham.png`,
                category: ['Major Subjects'],
              },
              {
                id: 'victoria_onz\u00e1lez',
                name: 'Victoria Gonz\u00e1lez',
                role: 'Teacher',
                subjects: ['Graham Technique'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/victoria_gonzalez.png`,
                category: ['Major Subjects'],
              },
              {
                id: 'isabel_navarro',
                name: 'Isabel Navarro',
                role: 'Teacher',
                subjects: ['Drama'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/isabel-navarro.png`,
                category: ['Minor Subjects', 'Theory Subjects'],
              },
              {
                id: 'yolanda_morales',
                name: 'Yolanda Morales',
                role: 'Choreographer, Teacher',
                subjects: ['Choreography'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/yolanda_morales.png`,
                category: ['Major Subjects'],
              },
              {
                id: 'katharina_pfahl',
                name: 'Katharina Pfahl',
                role: 'Teacher',
                subjects: ['Anatomy'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/katharina_pfahl.png`,
                category: ['Theory Subjects'],
              },
            ],
            memoriam: {
              headline: 'In Memoriam: Tanja B\u00e1ez',
              text_left:
                "It was with great sadness and shock that we announced the passing of **Tanja B\u00e1ez** in October 2016. As a co-founder of the Contemporary Dance School Hamburg, Tanja was one of the school's pillars from the very beginning, and her loss will be irreplaceable. She embarked on her final journey with strength, courage, and without complaint, and will forever be a role model for us.",
              text_right: '**Rest in peace, Tanja!**',
              image: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 1.png`,
            },
            teachers: {
              headline: 'Teachers',
              text: 'Our **international team** of lecturers offers you a broad spectrum of insights into diverse working methods in very different parts of the world. From Latin America to Eastern Europe, the USA, Asia, and across Europe, our lecturers bring a wide range of experiences, not only in their subject matter but also in their practical work. As individuals with their own artistic backgrounds, they can provide you with a very concrete, practical, and experience-based picture of real-world work practices, in addition to their professional and technical expertise.',
            },
            footerCta: {
              show: true,
              title: 'Want to get to know us?',
              text: "We'd like to get to know you too. Besides the regular auditions, we're available by email or phone to answer any questions you may have about the training program.",
            },
          };
          dispatch(setTeamData({ userLanguage, data: mockData }));
        } else {
          const mockData = {
            educationCategories: [
              {
                id: 'hauptf\u00e4cher',
                name: 'Hauptf\u00e4cher',
              },
              {
                id: 'nebenf\u00e4cher',
                name: 'Nebenf\u00e4cher',
              },
              {
                id: 'theorief\u00e4cher',
                name: 'Theorief\u00e4cher',
              },
              {
                id: 'workshops',
                name: 'Workshops',
              },
            ],
            intro: {
              headline: 'Team',
              text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
              image: `${process.env.PUBLIC_URL}/assets/images/team/cdsh-willkommen-1.jpg`,
            },
            leadership: {
              headline: 'Leitungsteam',
              text: 'Als Leitungsteam der CDSH können Javier Báez, Raul Valdez und Sina Rundel auf ihre langjährige künstlerische und pädagogische Erfahrung zurückgreifen, um eine praxisnahe, qualitativ hochwertige Vorbereitung auf den Beruf des zeitgenössischen Bühnentänzers im Rahmen ihres Ausbildungsprogramms zu gewährleisten.',
            },
            teamMembers: [
              {
                id: 'javier_báez',
                name: 'Javier Báez',
                role: 'Schulleitung, Choreograf, Lehrer',
                subjects: ['Ballett', 'Choreografie'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 2.png`,
              },
              {
                id: 'raul_valdez',
                name: 'Raul Valdez',
                role: 'Künstlerischer Leiter, Choreograf, Lehrer',
                subjects: ['Contemporary', 'Choreografie'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 3.png`,
              },
              {
                id: 'sina_rundel',
                name: 'Sina Rundel',
                role: 'Künstlerische Leiterin',
                subjects: [],
                src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 4.png`,
              },
              {
                id: 'martin_stöckle',
                name: 'Martin Stöckle',
                role: 'Business Consultant',
                subjects: [],
                src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 5.png`,
              },
            ],
            docentsMembers: [
              {
                id: 'hellena_stemm',
                name: 'Hellena Stemm',
                role: 'Lehrkraft',
                subjects: ['Ballett'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/helena_stemm.png`,
                category: ['Hauptf\u00e4cher'],
              },
              {
                id: 'mihir_grover',
                name: 'Mihir Grover',
                role: 'Lehrer, Choreograf',
                subjects: ['Choreografie', 'Contemporary', 'Floorwork'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/mihir_grover.png`,
                category: ['Hauptf\u00e4cher'],
              },
              {
                id: 'stacey_denham',
                name: 'Stacey Denham',
                role: 'Lehrkraft',
                subjects: ['Horton Technik'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/stacey_denham.png`,
                category: ['Hauptf\u00e4cher'],
              },
              {
                id: 'victoria_onzález',
                name: 'Victoria González',
                role: 'Lehrkraft',
                subjects: ['Graham Technik'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/victoria_gonzalez.png`,
                category: ['Hauptf\u00e4cher'],
              },
              {
                id: 'isabel_navarro',
                name: 'Isabel Navarro',
                role: 'Lehrkraft',
                subjects: ['Drama'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/isabel-navarro.png`,
                category: ['Nebenf\u00e4cher', 'Theorief\u00e4cher'],
              },
              {
                id: 'yolanda_morales',
                name: 'Yolanda Morales',
                role: 'Choreografin, Lehrkraft',
                subjects: ['Choreografie'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/yolanda_morales.png`,
                category: ['Hauptf\u00e4cher'],
              },
              {
                id: 'katharina_pfahl',
                name: 'Katharina Pfahl',
                role: 'Lehrkraft',
                subjects: ['Anatomie'],
                src: `${process.env.PUBLIC_URL}/assets/images/team/katharina_pfahl.png`,
                category: ['Theorief\u00e4cher'],
              },
            ],
            memoriam: {
              headline: 'In Memoriam: Tanja Báez',
              text_left:
                'Mit großer Trauer und Bestürzung haben wir im Oktober 2016 den Tod von Tanja Báez bekanntgegeben. Als Mitbegründerin der Contemporary Dance School Hamburg war Tanja von Anfang an eine tragende Säule der Schule, und ihr Verlust ist unersetzlich. Sie trat ihre letzte Reise mit Stärke, Mut und ohne Klagen an und wird für uns immer ein Vorbild bleiben.',
              text_right: 'Ruhe in Frieden, Tanja!',
              image: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto 2025-02-18 um 17.26.20 1.png`,
            },
            teachers: {
              headline: 'Dozent*innen',
              text: 'Unser internationales Dozententeam bietet dir ein breites Spektrum an Einblicken in unterschiedliche Arbeitsweisen weltweit. Von Lateinamerika über Osteuropa, die USA, Asien bis ganz Europa bringen unsere Lehrkräfte vielfältige Erfahrungen ein – nicht nur fachlich, sondern auch praktisch. Als Menschen mit eigenem künstlerischem Hintergrund können sie dir ein sehr konkretes, praxisnahes Bild realer Arbeitsbedingungen vermitteln, zusätzlich zu ihrem professionellen und fachlichen Know-how.',
            },
            footerCta: {
              show: true,
              title: 'Du möchtest uns kennenlernen?',
              text: 'Wir dich ebenfalls. Neben den regulären Auditions sind wir per E-Mail oder telefonisch für dich da, wenn du Fragen zur Ausbildung hast.',
            },
          };
          dispatch(setTeamData({ userLanguage, data: mockData }));
        }

        // TODO: commented for temp deploy
        // console.error('Fetching error:', error);
        // setError(error);
      })
      .finally(() => {
        setContent(true);
        setLoading(false);
        clearTimeout(timeout);
      });
  }, [userLanguage]);

  console.log('teamdata', teamData);

  if (!hasContent && loading) return <LoadingPage />;
  if (error || !teamData) return <ErrorPage />;

  const teamMembers = teamData.teamMembers;

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
            {teamData.intro.headline}
          </Typography>
          <ReactMarkdown components={renderers} children={teamData.intro.text} />
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={teamData.intro.image}
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
            {teamData.intro.headline}
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
              {teamData.leadership.headline}
            </Typography>
            <ReactMarkdown components={renderers} children={teamData.leadership.text} />
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
                  {member.id && (
                    <Box
                      component={Link}
                      to={`/team/${member.id}`}
                      className="absolute border border-black rounded-full bottom-0 right-0"
                      sx={{
                        background: '#ffffff',
                        fontSize: { xs: '12px', md: '15px' },
                        px: { xs: '8px', md: '16px' },
                        py: { xs: '2px', md: '2px' },
                        margin: { xs: '8px', md: '16px' },
                      }}
                    >
                      {button.vita}
                    </Box>
                  )}
                </Box>

                <Box className="w-min min-w-full">
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

                  <Typography
                    sx={{
                      fontSize: { xs: '12px', md: '15px' },
                      fontWeight: '400',
                      lineHeight: 'normal',
                    }}
                  >
                    {member.role}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        component="section"
        className="flex flex-col justify-center items-center"
        sx={{ background: '#000000', px: { xs: '75px', md: '75px' }, py: { xs: '55px', md: '110px' } }}
      >
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: { xs: '35px', md: '80px' },
            fontWeight: '400',
            mb: { xs: '55px', md: '110px' },
          }}
        >
          {teamData.memoriam.headline}
        </Typography>
        <Box
          className="max-w-[1250px] flex justify-center"
          sx={{
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: { xs: 'center', md: 'start' },
            gap: { xs: '55px', md: '110px' },
          }}
        >
          <Box className="flex flex-col justify-start items-start text-white" sx={{ width: { xs: '100%', md: '50%' } }}>
            <ReactMarkdown components={renderers} children={teamData.memoriam.text_left} />
            <br />
            <ReactMarkdown components={renderers} children={teamData.memoriam.text_right} />
          </Box>
          <Box className="flex flex-col justify-start items-start sticky" sx={{ width: { xs: '100%', md: '50%' } }}>
            <Box
              component="img"
              src={teamData.memoriam.image}
              className="flex-1 w-[500px] mx-auto mb-[24px]"
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
          {teamData.teachers.headline}
        </Typography>

        <div className="max-w-[740px] min-w-[50%] text-center">
          <ReactMarkdown components={renderers} children={teamData.teachers.text} />
        </div>
      </Box>

      <TeamSelector members={teamData.docentsMembers} educationCategories={teamData.educationCategories} />

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
          {teamData.footerCta.title}
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
        >
          {teamData.footerCta.text}
        </Typography>
      </Box>
    </>
  );
}

export default Team;
