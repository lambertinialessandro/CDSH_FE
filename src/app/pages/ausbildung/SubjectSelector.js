import { Box, Divider, Tab, Tabs, Typography } from '@mui/material';
import __ from 'lodash';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const subjects = [
  {
    id: 1,
    name: 'Schauspiel',
    description:
      'Lorem Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem Ipsum Text wie du brauchst. Lorem Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem Ipsum Text wie du brauchst.',
    teacher: 'Sina Rundel',
    src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Bildschirmfoto 2025-02-18 um 17.26.20 6.png`,
    tab: ['Nebenfächer'],
  },
  {
    id: 2,
    name: 'Gesang',
    description:
      'Lorem Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem Ipsum Text wie du brauchst. Lorem Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem Ipsum Text wie du brauchst.',
    teacher: 'Sina Rundel',
    src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Bildschirmfoto 2025-02-18 um 17.26.20 7.png`,
    tab: ['Nebenfächer'],
  },
  {
    id: 3,
    name: 'Feldenkrais',
    description:
      'Lorem Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem Ipsum Text wie du brauchst. Lorem Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem Ipsum Text wie du brauchst.',
    teacher: 'Sina Rundel',
    src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Bildschirmfoto 2025-02-18 um 17.26.20 8.png`,
    tab: ['Nebenfächer'],
  },
  {
    id: 4,
    name: 'Pilates',
    description:
      'Lorem Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem Ipsum Text wie du brauchst. Lorem Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem Ipsum Text wie du brauchst.',
    teacher: 'Sina Rundel',
    src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Bildschirmfoto 2025-02-18 um 17.26.20 9.png`,
    tab: ['Nebenfächer'],
  },
  {
    id: 5,
    name: 'Yoga',
    description:
      'Lorem Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem Ipsum Text wie du brauchst. Lorem Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem Ipsum Text wie du brauchst.',
    teacher: 'Sina Rundel',
    src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Bildschirmfoto 2025-02-18 um 17.26.20 10.png`,
    tab: ['Nebenfächer'],
  },
  {
    id: 6,
    name: 'Anatomie',
    description:
      'Lorem Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem Ipsum Text wie du brauchst. Lorem Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem Ipsum Text wie du brauchst.',
    teacher: 'Sina Rundel',
    src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Bildschirmfoto 2025-02-18 um 17.26.20 11.png`,
    tab: ['Nebenfächer'],
  },
  {
    id: 7,
    name: 'Tanzgeschichte',
    description:
      'Lorem Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem Ipsum Text wie du brauchst. Lorem Ipsum für Designer, Schriftsetzer, Layouter, Grafikenthusiasten und alle anderen. Generiere einfach soviel Lorem Ipsum Text wie du brauchst.',
    teacher: 'Sina Rundel',
    src: `${process.env.PUBLIC_URL}/assets/images/ausbildung/Bildschirmfoto 2025-02-18 um 17.26.20 12.png`,
    tab: ['Nebenfächer'],
  },
];

function SubjectSelector(props) {
  const MotionBox = motion(Box);

  const [tabSelected, setTabSelected] = useState(0);
  const TAB_OPTIONS = [
    { name: 'Hauptfächer' },
    { name: 'Nebenfächer' },
    { name: 'Theoriefächer' },
    { name: 'Workshops' },
    { name: 'Kein Filter' },
  ];
  const filteredSubjects =
    TAB_OPTIONS[tabSelected] === 'Kein Filter'
      ? subjects
      : subjects?.filter(({ tab }) => tab.some((s1) => s1 === TAB_OPTIONS[tabSelected].name));

  if (__.isEmpty(subjects)) {
    return <Typography>Empty</Typography>;
  }

  return (
    <>
      <Box component="section" className="py-[60px] px-[48px] flex flex-col justify-center items-start text-center">
        <Tabs
          value={tabSelected}
          onChange={(event, value) => setTabSelected(value)}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons={false}
          className="min-w-fit min-h-fit"
          sx={{
            '& .MuiTabs-flexContainer': {
              gap: '6px',
            },
          }}
          classes={{
            indicator: 'w-full h-full bg-transparent',
          }}
          TabIndicatorProps={{
            children: (
              <Divider
                className="w-full h-full rounded-full"
                sx={{
                  backgroundColor: '#000000',
                  zIndex: 1,
                }}
              />
            ),
          }}
        >
          {TAB_OPTIONS.map((option, idx) => (
            <Tab
              key={idx}
              label={option.name}
              className="rounded-full min-h-fit h-[28px] py-[2px] px-[12px]"
              sx={{
                color: tabSelected === idx ? '#ffffff' : '#000000',
                fontSize: '15px',
                lineHeight: 'normal',
                zIndex: 10,
                transition: 'color 0.2s',
                border: '1px solid black',
              }}
              disableRipple
            />
          ))}
        </Tabs>
      </Box>

      <Box className="w-full flex justify-center items-start">
        <Box className="flex flex-wrap justify-center items-start gap-[24px] max-w-[1280px]">
          <AnimatePresence mode="popLayout">
            {filteredSubjects.map((subject) => (
              <MotionBox
                key={subject.id}
                layout
                layoutId={`subject-${subject.id}`}
                className="flex flex-col justify-center items-start group"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <Box className="relative mb-[12px]">
                  <Box
                    component="img"
                    src={subject.src}
                    className="flex-1 w-[290px] h-[400px] border border-black"
                    sx={{ objectFit: 'cover' }}
                  />
                  <Typography
                    className="absolute border border-black rounded-full bottom-0 right-0 px-[16px] py-[2px] m-[16px]"
                    sx={{ background: '#ffffff' }}
                  >
                    {subject.name}
                  </Typography>

                  <Box className="min-w-fit absolute top-2 left-2 right-2 z-10 py-2 px-3 bg-white border border-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <Typography sx={{ fontSize: '40px', fontWeight: '400', lineHeight: 'normal' }}>
                      {subject.name}
                    </Typography>
                    <Typography className="mt-[5px]" sx={{ fontSize: '15px', fontWeight: '400', lineHeight: 'normal' }}>
                      {subject.description}
                    </Typography>
                    <Typography
                      className="mt-[10px]"
                      sx={{ fontSize: '15px', fontWeight: '400', lineHeight: 'normal' }}
                    >
                      Dozent*innen {subject.teacher}
                    </Typography>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </AnimatePresence>
        </Box>
      </Box>
    </>
  );
}

export default SubjectSelector;
