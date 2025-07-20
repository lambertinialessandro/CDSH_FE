import { Box, Typography, useTheme } from '@mui/material';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import Ribbons from 'app/shared-components/ReactBits/Ribbons';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsBannerOpen } from 'app/store/app/mainSlice';

const CIRCLE_COUNT = 5;
const RADIUS = 2 * 120; // final radius in px
const SCROLL_LIMIT = 5000; // px

const subjects = [
  {
    title: 'Tanztechnik',
    description: "I don't know",
    size: 500,
    x: -100,
    y: 0,
  },
  {
    title: 'Künstlerische Entwicklung',
    description: 'Finde und festige deine künstlerische Stimme.',
    size: 400,
    x: 300,
    y: 0,
  },
  {
    title: 'Choreografische Praxis',
    description:
      'Mit uns lernst du selbst choreografieren. Unsere festen- und spannende Gast Dozent*innen geben ihr Wissen an dich weiter.',
    size: 300,
    x: 100,
    y: 220,
  },
  {
    title: 'Bühnenpraxis',
    description: "I don't know",
    size: 200,
    x: -100,
    y: 270,
  },
  {
    title: 'Theorie',
    description: "I don't know",
    size: 100,
    x: -210,
    y: 250,
  },
];

function InteractiveSubjects(props) {
  const theme = useTheme();
  const containerRef = useRef(null);

  const isBannerOpen = useSelector(selectIsBannerOpen)

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

  const progress = scrollY / SCROLL_LIMIT;

  return (
    <>
      <Box className="relative min-h-[100vh]">
        <Box className="relative" sx={{ background: '#ffffff00' }}>
          <Box component="section" className="py-[90px] ">
            <Box ref={containerRef} className="relative" sx={{ height: `${SCROLL_LIMIT}px` }}>
              <Box
                className="sticky h-screen flex flex-col justify-start items-center z-10 gap-[32px]"
                sx={{top: isBannerOpen ? "45px": "0px"}}
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
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedSubject}
                    className={`flex flex-col justify-start items-center mt-[30px] mb-[30px]`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Typography
                      sx={{
                        color: '#000000',
                        fontSize: '80px',
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
                        fontSize: '30px',
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

                <div className="relative w-[300px] h-[300px] mt-[82px]">
                  {subjects.map((subject, i) => {
                    const pp = progress < 0.6 ? progress / 0.6 : 1;
                    const x = pp * subject.x;
                    const y = pp * subject.y;

                    return (
                      <Box
                        key={i}
                        component={motion.div}
                        sx={{
                          top: `calc(50% - ${subject.size / 2}px)`,
                          left: `calc(50% - ${subject.size / 2}px)`,
                          transform: `translate(${x}px, ${y}px)`,
                          width: `${subject.size}px`,
                          height: `${subject.size}px`,
                          background: `rgba(249, 250, 251, ${Math.min(pp)})`,
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
                        <span style={{ opacity: pp == 1 ? '1' : '0', transition: 'opacity 0.2s', textAlign: 'center' }}>
                          {subject.title}
                        </span>
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
