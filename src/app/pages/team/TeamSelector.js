import { Box, Tab, Tabs, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import __ from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { defaultNS as ns_common } from 'translations';

function TeamSelector(props) {
  const { members = [], educationCategories = [], educationSubjects = [] } = props;
  const { t } = useTranslation([ns_common]);
  const { button } = t(ns_common);
  console.log('member', members);

  const MotionBox = motion(Box);
  console.log('educationCategories', educationCategories);
  console.log('educationSubjects', educationSubjects);
  // ordered from the newest to the older
  //const [tabSelected, setTabSelected] = useState(3);
  /*const TAB_OPTIONS = [
    { name: 'Hauptfächer' },
    { name: 'Neben- und Theoriefächer' },
    { name: 'Choreograph*innen 2025' },
    { name: 'Kein Filter' },
  ];*/
  /*const filteredMembers = useMemo(() => {
    if (TAB_OPTIONS[tabSelected].name === 'Kein Filter') {
      return members;
    }
    return members.filter(({ subjects }) => subjects.some((s1) => s1 === TAB_OPTIONS[tabSelected].name));
  }, [tabSelected, members]);*/

  const tabOptions = useMemo(() => {
    const categories = educationCategories.map((cat) => ({
      id: cat.id,
      name: cat.name,
    }));

    return [...categories, { id: 'all', name: 'No Filter' }];
  }, [educationCategories]);

  const [tabSelected, setTabSelected] = useState(0);

  useEffect(() => {
    if (tabOptions.length > 0) {
      const allIndex = tabOptions.findIndex((opt) => opt.id === 'all');
      setTabSelected(allIndex !== -1 ? allIndex : 0);
    }
  }, [tabOptions]);

  const filteredMembers = useMemo(() => {
    const currentTab = tabOptions[tabSelected];

    if (!currentTab || currentTab.id === 'all') {
      return members;
    }
    return members.filter((member) => member.category && member.category.includes(currentTab.name));
  }, [tabSelected, members, tabOptions]);

  console.log('filteredMembers', filteredMembers);

  if (__.isEmpty(members) && educationCategories.length === 0) {
    return <Typography>Empty</Typography>;
  }

  return (
    <>
      <Box component="section" className="py-[60px] px-[48px] flex flex-col justify-center items-start text-center">
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

      <Box className="w-full flex flex-wrap justify-center items-start gap-[24px]">
        <AnimatePresence mode="popLayout" initial={false}>
          {filteredMembers?.map((member, idx) => (
            <MotionBox
              key={member.id}
              layout
              className="flex flex-col justify-center items-start"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
              transition={{ duration: 0.3 }}
            >
              <Box className="relative mb-[12px]">
                <Box
                  component="img"
                  src={member.src}
                  className="flex-1 border border-black"
                  sx={{ objectFit: 'cover', width: { xs: '145px', md: '290px' }, height: { xs: '200px', md: '400px' } }}
                />
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
              </Box>

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
                  fontSize: { xs: '11px', md: '13px' },
                  color: 'gray',
                }}
              >
                {member.subjects?.join(', ')}
              </Typography>
            </MotionBox>
          ))}
        </AnimatePresence>
      </Box>
    </>
  );
}

export default TeamSelector;
