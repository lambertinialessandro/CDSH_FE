import { Box, Typography, useTheme } from '@mui/material';
import { ns as ns_navigation } from 'app/navigation/translations';
import AncorLink from 'app/shared-components/link/AncorLink';
import BigLink from 'app/shared-components/link/BigLink';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function TopNavbar(props) {
  const { t } = useTranslation([/* ns, */ ns_navigation]);
  const { title } = t(ns_navigation);
  const theme = useTheme();

  const [isMenuOpen, setMenuOpen] = useState(true);

  return (
    <>
      <Box component="nav" className="w-full h-[90px] bg-transparent absolute z-10" sx={{ color: '#ffffff' }}>
        <Box className="w-full h-full px-[45px] flex justify-between items-center">
          <Typography component="a" href="/" sx={{ fontSize: '36px' }}>
            CDSH
          </Typography>
          <Box className="flex gap-[26px]">
            <AncorLink
              href={`${process.env.PUBLIC_URL}`}
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#ffffff"
            >
              English Version
            </AncorLink>
            <AncorLink
              href={`${process.env.PUBLIC_URL}`}
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#ffffff"
            >
              Ticketshop
            </AncorLink>
            {/* {isMenuOpen ? (
              <Typography
                component="a"
                onClick={() => {
                  setMenuOpen(false);
                }}
                sx={{
                  color: '#ffffff',
                  fontSize: '15px',
                  fontWeight: '400',
                }}
              >
                ╳
              </Typography>
            ) : ( */}
            <AncorLink
              onClick={() => {
                setMenuOpen(true);
              }}
              extraSx={{
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#ffffff"
            >
              Menü
            </AncorLink>
            {/* )} */}
          </Box>
        </Box>
      </Box>

      <Box
        className="h-screen fixed top-0 right-0 z-20 flex flex-col justify-between items-start pt-0 p-[45px]"
        sx={{
          background: '#eae7f8',
          minWidth: 'min-content',
          width: '100%',
          maxWidth: 'min(850px, 33%)',
          transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
          transform: `translate(${isMenuOpen ? 0 : 100}%, 0)`,
        }}
      >
        <Box className="w-full h-[90px] flex justify-end items-center">
          <Box className="flex gap-[26px]">
            <AncorLink
              href={`${process.env.PUBLIC_URL}`}
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              English Version
            </AncorLink>
            <AncorLink
              href={`${process.env.PUBLIC_URL}`}
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Ticketshop
            </AncorLink>

            <Typography
              component="a"
              onClick={() => {
                setMenuOpen(false);
              }}
              sx={{
                color: '#000000',
                fontSize: '15px',
                fontWeight: '400',
                cursor: 'pointer',
              }}
            >
              ╳
            </Typography>
          </Box>
        </Box>

        <Box className="h-full flex flex-col justify-start items-baseline gap-6">
          <BigLink href={`${process.env.PUBLIC_URL}/about_us`}>Über uns</BigLink>
          <BigLink href={`${process.env.PUBLIC_URL}/team`}>Team</BigLink>
          <BigLink href={`${process.env.PUBLIC_URL}/students`}>Studierende</BigLink>
          <BigLink href={`${process.env.PUBLIC_URL}`}>Ausbildung</BigLink>
          <Box className="flex items-end gap-[6px]">
            <BigLink href={`${process.env.PUBLIC_URL}`}>Auditions</BigLink>
            <Box className="h-fit mb-[12px] p-[2px] border border-black rounded-full flex justify-between items-center gap-[12px]" sx={{ background: '#ffffff' }}>
              <Box/>
              <Typography sx={{
                      fontSize: '15px',
                      fontWeight: '400',
                      lineHeight: "normal"
                    }}>OPEN</Typography>
              <Box className="rounded-full p-[12px]" sx={{ background: '#8f20ff' }} />
            </Box>
          </Box>
          <BigLink href={`${process.env.PUBLIC_URL}`}>Fortbildung</BigLink>
          <BigLink href={`${process.env.PUBLIC_URL}`}>Aktuelles</BigLink>
        </Box>

        <Box className="flex flex-col">
          <Typography
            sx={{
              color: '#000000',
              fontSize: '15px',
              fontWeight: '400',
            }}
          >
            Kontact
          </Typography>
          <Typography sx={{ color: '#000000', fontSize: '15px', fontWeight: '400' }}>
            Telefon: +49 (0)40 41924560
          </Typography>
          <Typography sx={{ color: '#000000', fontSize: '15px', fontWeight: '400' }}>Mail: info@cdsh.de</Typography>
        </Box>
      </Box>
    </>
  );
}

export default TopNavbar;
