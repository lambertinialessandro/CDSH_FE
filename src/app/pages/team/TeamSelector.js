import { Box, Divider, Tab, Tabs, Typography } from '@mui/material';
import __ from 'lodash';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/*const members = [
    {
      id: 'ursina_tossi',
      href: `/team/ursina_tossi`,
      name: 'Ursina Tossi',
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto ursina_tossi.png`,
      subjects: [''],
    },
    {
      id: 'phillip_benjamin_jenkins',
      href: `/team/phillip_benjamin_jenkins`,
      name: 'Phillip Benjamin Jenkins',
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto phillip_benjamin_jenkins.png`,
      subjects: ['Hauptfächer'],
    },
    {
      id: 'angela_guerreiro',
      href: `/team/angela_guerreiro`,
      name: 'Angela Guerreiro',
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto angela_guerreiro.png`,
      subjects: ['Neben- und Theoriefächer'],
    },
    {
      id: 'filip_van_huffel',
      href: `/team/filip_van_huffel`,
      name: 'Filip van Huffel',
      src: `${process.env.PUBLIC_URL}/assets/images/team/Bildschirmfoto filip_van_huffel.png`,
      subjects: ['Gastdozent*innen 2025'],
    },
  ];*/

function TeamSelector({members = []}) {
  console.log("member", members)

  const MotionBox = motion(Box);

  // ordered from the newest to the older

  const [tabSelected, setTabSelected] = useState(3);
  const TAB_OPTIONS = [
    { name: 'Hauptfächer' },
    { name: 'Neben- und Theoriefächer' },
    { name: 'Choreograph*innen 2025' },
    { name: 'Kein Filter' },
  ];
  const filteredMembers = useMemo(() => {
    if (TAB_OPTIONS[tabSelected].name === 'Kein Filter') {
      return members;
    }
    return members.filter(({ subjects }) => subjects.some((s1) => s1 === TAB_OPTIONS[tabSelected].name));
  }, [tabSelected, members]);

  console.log("filteredMembers", filteredMembers)

  if (__.isEmpty(members)) {
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
          {TAB_OPTIONS.map((option, idx) => (
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
                  VITA
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
            </MotionBox>
          ))}
        </AnimatePresence>
      </Box>
    </>
  );
}

export default TeamSelector;
