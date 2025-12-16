import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Ribbons from 'app/shared-components/ReactBits/Ribbons';
import { memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsBannerOpen } from 'app/store/app/mainSlice';

const SCROLL_LIMIT = 5000; // px

function InteractiveSubjects(props) {
  const { subject_list = [] } = props;
  console.log('subject_list', subject_list);

  const subjects = [
    {
      title: 'Tanztechnik',
      description: "I don't know",
      size: 0.9,
      x: -0.35,
      y: -0.05,
    },
    {
      title: 'Künstlerische Entwicklung',
      description: 'Finde und festige deine künstlerische Stimme.',
      size: 0.75,
      x: 0.4,
      y: -0.1,
    },
    {
      title: 'Choreografische Praxis',
      description:
        'Mit uns lernst du selbst choreografieren. Unsere festen- und spannende Gast Dozent*innen geben ihr Wissen an dich weiter.',
      size: 0.6,
      x: 0.2,
      y: 0.3,
    },
    {
      title: 'Bühnenpraxis',
      description: "I don't know",
      size: 0.45,
      x: -0.25,
      y: 0.35,
    },
    {
      title: 'Theorie',
      description: "I don't know",
      size: 0.3,
      x: -0.55,
      y: 0.3,
    },
  ];
  const subjectsSmall = [
    {
      title: 'Tanztechnik',
      description: "I don't know",
      size: 0.85,
      x: -0.25,
      y: -0.35,
    },
    {
      title: 'Künstlerische Entwicklung',
      description: 'Finde und festige deine künstlerische Stimme.',
      size: 0.7,
      x: 0.3,
      y: -0.1,
    },
    {
      title: 'Choreografische Praxis',
      description:
        'Mit uns lernst du selbst choreografieren. Unsere festen- und spannende Gast Dozent*innen geben ihr Wissen an dich weiter.',
      size: 0.6,
      x: 0.18,
      y: 0.35,
    },
    {
      title: 'Bühnenpraxis',
      description: "I don't know",
      size: 0.45,
      x: -0.23,
      y: 0.17,
    },
    {
      title: 'Theorie',
      description: "I don't know",
      size: 0.3,
      x: -0.4,
      y: -0.03,
    },
  ];

  const theme = useTheme();
  const containerRef = useRef(null);
  const containerSizeRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  console.log('containerSize', containerSize);

  const isBannerOpen = useSelector(selectIsBannerOpen);

  useLayoutEffect(() => {
    const updateSize = () => {
      if (containerSizeRef.current) {
        const rect = containerSizeRef.current.getBoundingClientRect();
        setContainerSize({
          width: rect.width,
          height: rect.height,
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const [scrollY, setScrollY] = useState(0);
  const [selectedSubject, onSelectedSubject] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const y = -containerRef.current.getBoundingClientRect().top;
        setScrollY(Math.min(Math.max(y, 0), SCROLL_LIMIT));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  const progress = Math.min(scrollY / SCROLL_LIMIT, 1);
  const eased = progress < 0.6 ? progress / 0.6 : 1;

  const maxRadius = Math.min(Math.min(containerSize.width, containerSize.height) * 0.65, 600);

  const isMobile = useMediaQuery('(max-width:900px)');
  const selectedBalls = isMobile ? subjectsSmall : subjects;

  return (
    <>
      <Box className="relative min-h-[100vh]">
        <Box className="relative" sx={{ background: '#ffffff00' }}>
          <Box component="section" className="py-[90px]">
            <Box ref={containerRef} className="relative" sx={{ height: `${SCROLL_LIMIT}px` }}>
              <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedSubject}
                    className={`flex flex-col justify-start items-center mt-[30px] mb-[30px] px-[75px] sticky top-[54px] left-0 right-0 z-20`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Typography
                      sx={{
                        color: '#000000',
                        mt: { xs: '30px', md: '0px' },
                        fontSize: { xs: '30px', md: '80px' },
                        fontWeight: '400',
                        lineHeight: '1',
                        textAlign: 'center',
                      }}
                    >
                      {selectedSubject === -1 ? 'Fächer' : subjects[selectedSubject].title}
                    </Typography>

                    <Typography
                      className="max-w-[740px] min-w-[50%] text-center"
                      sx={{
                        color: '#000000',
                        fontSize: { xs: '15px', md: '30px' },
                        fontWeight: '400',
                        lineHeight: '1',
                        mt: 2,
                      }}
                    >
                      {selectedSubject === -1
                        ? 'Ein Zusammenspiel aus fundierter Theorie und einem ganzheitlichen Mix aus Praxismodulen bildet die Basis unseres Ausbildungsmodells.'
                        : subjects[selectedSubject].description}
                    </Typography>
                  </motion.div>
                </AnimatePresence>
              <Box
                ref={containerSizeRef}
                className="sticky h-screen w-full flex flex-col justify-center items-center z-10 gap-[32px]"
                sx={{ top: isBannerOpen ? '45px' : '0px' }}
                onClick={() => onSelectedSubject(-1)}
              >
                {useMemo(
                  () => (
                    <Ribbons
                      baseThickness={15}
                      colors={[theme.palette.secondary.main, '#b66eff', theme.palette.primary.main]}
                      speedMultiplier={0.3}
                      maxAge={400}
                      offsetFactorX={0.005}
                      offsetFactorY={0.1}
                      enableFade={false}
                      enableShaderEffect={false}
                    />
                  ),
                  []
                )}
                {/* <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedSubject}
                    className={`flex flex-col justify-start items-center mt-[30px] mb-[30px] px-[75px]`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Typography
                      sx={{
                        color: '#000000',
                        mt: { xs: '30px', md: '0px' },
                        fontSize: { xs: '30px', md: '80px' },
                        fontWeight: '400',
                        lineHeight: '1',
                        textAlign: 'center',
                      }}
                    >
                      {selectedSubject === -1 ? 'Fächer' : subjects[selectedSubject].title}
                    </Typography>

                    <Typography
                      className="max-w-[740px] min-w-[50%] text-center"
                      sx={{
                        color: '#000000',
                        fontSize: { xs: '15px', md: '30px' },
                        fontWeight: '400',
                        lineHeight: '1',
                        mt: 2,
                      }}
                    >
                      {selectedSubject === -1
                        ? 'Ein Zusammenspiel aus fundierter Theorie und einem ganzheitlichen Mix aus Praxismodulen bildet die Basis unseres Ausbildungsmodells.'
                        : subjects[selectedSubject].description}
                    </Typography>
                  </motion.div>
                </AnimatePresence> */}

                <div className="relative w-[300px] h-[300px] mt-[82px]">
                  {selectedBalls.map((subject, i) => {
                    const sizePx = maxRadius * subject.size;

                    const x = eased * subject.x * maxRadius;
                    const y = eased * subject.y * maxRadius;

                    return (
                      <Box
                        key={i}
                        component={motion.div}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{
                          scale: 1,
                          opacity: eased,
                          x,
                          y,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 120,
                          damping: 20,
                        }}
                        sx={{
                          width: sizePx,
                          height: sizePx,
                          top: `calc(50% - ${sizePx / 2}px)`,
                          left: `calc(50% - ${sizePx / 2}px)`,
                          background: `rgba(249, 250, 251, ${eased})`,
                          ...(selectedSubject === i
                            ? {
                                boxShadow: `0 0 25px 10px ${theme.palette.primary.main}`,
                              }
                            : {
                                transition: 'box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                  boxShadow: `0 0 25px 10px ${theme.palette.primary.main}`,
                                },
                              }),
                        }}
                        className="absolute border border-black rounded-full flex items-center justify-center cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectedSubject(i);
                        }}
                      >
                        <motion.span
                          animate={{ opacity: eased === 1 ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ textAlign: 'center' }}
                        >
                          {subject.title}
                        </motion.span>
                      </Box>
                    );
                  })}
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default InteractiveSubjects;
