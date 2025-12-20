import { Box, Tab, Tabs, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import __ from 'lodash';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { defaultNS as ns_common } from 'translations';

function SubjectSelector(props) {
  const { subjects = [], categories = [] } = props;
  const { t } = useTranslation([ns_common]);
  const { message } = t(ns_common);
  const MotionBox = motion(Box);

  console.log('subjects:', subjects);

  const [tabSelected, setTabSelected] = useState(0);

  const tabOptions = useMemo(() => {
    return [{ id: 'all', name: message.alle }, ...categories];
  }, [subjects]);

  const filteredSubjects = useMemo(() => {
    const activeFilter = tabOptions[tabSelected];
    if (!activeFilter || activeFilter.id === 'all') return subjects;

    return subjects.filter((subject) => subject.tab?.includes(activeFilter.name));
  }, [subjects, tabSelected, tabOptions]);

  if (__.isEmpty(subjects)) {
    return (
      <Box className="py-20 text-center">
        <Typography>No course available.</Typography>
      </Box>
    );
  }
  return (
    <>
      <Box
        component="section"
        className="flex flex-col justify-center items-start text-center"
        sx={{ py: { xs: '30px', md: '60px' }, px: { xs: '24px', md: '48px' } }}
      >
        <Tabs
          value={tabSelected}
          onChange={(event, value) => setTabSelected(value)}
          textColor="inherit"
          indicatorColor="none"
          variant="standard"
          className="min-w-fit min-h-fit"
          sx={{
            '& .MuiTabs-flexContainer': {
              flexWrap: 'wrap',
              gap: '6px',
              justifyContent: 'flex-start',
            },
          }}
        >
          {tabOptions.map((option, idx) => (
            <Tab
              key={idx}
              label={option.name}
              className="rounded-full min-h-fit h-[28px] py-[2px] px-[12px]"
              sx={{
                color: tabSelected === idx ? '#ffffff' : '#000000',
                backgroundColor: tabSelected === idx ? '#000000' : 'transparent',
                fontSize: { xs: '12px', md: '15px' },
                lineHeight: 'normal',
                zIndex: 10,
                transition: 'color 0.2s',
                border: '1px solid black',
                '&:hover': {
                  backgroundColor: tabSelected === idx ? '#000000' : '#e5e5e5',
                },
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
                    sx={{
                      objectFit: 'cover',
                      width: { xs: '290px', md: '290px' },
                      height: { xs: '400px', md: '400px' },
                    }}
                  />
                  <Typography
                    className="absolute border border-black rounded-full bottom-0 right-0 px-[16px] py-[2px] m-[16px]"
                    sx={{ background: '#ffffff' }}
                  >
                    {subject.name}
                  </Typography>

                  <Box className="min-w-fit absolute top-2 left-2 right-2 z-10 py-2 px-3 bg-white border border-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <Typography sx={{ fontSize: { xs: '20px', md: '40px' }, fontWeight: '400', lineHeight: 'normal' }}>
                      {subject.name}
                    </Typography>
                    <Typography
                      className="mt-[5px]"
                      sx={{ fontSize: { xs: '12px', md: '15px' }, fontWeight: '400', lineHeight: 'normal' }}
                    >
                      {subject.description}
                    </Typography>
                    <Typography
                      className="mt-[10px]"
                      sx={{ fontSize: { xs: '12px', md: '15px' }, fontWeight: '400', lineHeight: 'normal' }}
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
