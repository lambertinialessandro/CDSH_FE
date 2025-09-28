import { Box, Divider, Tab, Tabs, Typography } from '@mui/material';
import __ from 'lodash';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SplitSection from './SplitSection';
import AnchorLink from 'app/shared-components/link/AnchorLink';
import BigLink from 'app/shared-components/link/BigLink';

const students = [
  {
    id: 'class_2025',
    href: `${process.env.PUBLIC_URL}/students/yugen`,
    name: 'Class 2026',
    src: `${process.env.PUBLIC_URL}/assets/images/students/Bildschirmfoto 2025-02-18 um 17.05.47.png`,
    year: { start: 2025, end: 2028 },
  },
  {
    id: 'yugen',
    href: `${process.env.PUBLIC_URL}/students/yugen`,
    name: 'Yugen',
    src: `${process.env.PUBLIC_URL}/assets/images/students/Bildschirmfoto 2025-02-18 um 17.05.47.png`,
    year: { start: 2024, end: 2027 },
  },
  {
    id: 'ikigai',
    href: `${process.env.PUBLIC_URL}/students/ikigai`,
    name: 'Ikigai',
    src: `${process.env.PUBLIC_URL}/assets/images/students/Bildschirmfoto 2025-02-18 um 17.06.05.png`,
    year: { start: 2023, end: 2026 },
  },
  {
    id: 'ho_omau',
    href: `${process.env.PUBLIC_URL}/students/ho_omau`,
    name: 'Ho’omau',
    src: `${process.env.PUBLIC_URL}/assets/images/students/Bildschirmfoto 2025-02-18 um 17.06.12.png`,
    year: { start: 2022, end: 2025 },
  },
];

function StudentSelector(props) {
  // const {} = props;

  const today = new Date();
  const month = today.getMonth() + 1; // getMonth() is 0-indexed
  const year = today.getFullYear();
  const currentYear = month < 9 ? year - 1 : year;

  const [tabSelected, setTabSelected] = useState(0);
  const TAB_OPTIONS = [{ name: 'Aktuelle Klassen' }, { name: 'Ehemalige Klassen' }];
  const filteredStudents =
    tabSelected === 0
      ? students?.filter(({ year }) => year.end > currentYear)
      : students?.filter(({ year }) => year.end <= currentYear);

  if (__.isEmpty(students)) {
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

      <Box className="w-full flex flex-col justify-start items-center">
        <AnimatePresence mode="popLayout">
          {filteredStudents.map((student, idx) => {
            const isOdd = idx % 2 === 1;

            return (
              <motion.div
                key={student.id || idx}
                className="w-full flex flex-col justify-center items-start"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                transition={{ duration: 0.3 }}
              >
                <SplitSection
                  key={idx}
                  title={
                    <BigLink to={student.href} color={isOdd ? '#ffffff' : '#000000'}>
                      {student.name}
                    </BigLink>
                  }
                  text={`${student.year.start} - ${student.year.end}`}
                  img={{ src: student.src, alt: student.name }}
                  reverse={isOdd}
                  bgColor={isOdd && '#8F20FF'}
                  color={isOdd && '#ffffff'}
                  bottom={idx === filteredStudents.length - 1}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </Box>
    </>
  );
}

export default StudentSelector;
