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

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Box component="nav" className="w-full h-[90px] bg-transparent absolute z-10" sx={{ color: '#ffffff' }}>
        <Box className="w-full h-full px-[45px] flex justify-between items-center">
          <Typography sx={{ fontSize: '36px' }}>CDSH</Typography>
          <Box className="flex gap-[26px]">
            <AncorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#ffffff"
            >
              English Version
            </AncorLink>
            <AncorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#ffffff"
            >
              Ticketshop
            </AncorLink>
            {isMenuOpen ? (
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
            ) : (
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
            )}
          </Box>
        </Box>
      </Box>
      {isMenuOpen && (
        <Box
          className="h-screen fixed top-0 right-0 z-20 flex flex-col justify-between items-start pt-0 p-[45px]"
          sx={{ background: '#eae7f8', minWidth: 'min-content', width: '100%', maxWidth: 'min(850px, 33%)' }}
        >
          <Box className="w-full h-[90px] flex justify-end items-center">
            <Box className="flex gap-[26px]">
              <AncorLink
                href="#"
                extraSx={{
                  fontSize: '15px',
                  fontWeight: '400',
                }}
                color="#000000"
              >
                English Version
              </AncorLink>
              <AncorLink
                href="#"
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
            <BigLink href="#">Über uns</BigLink>
            <BigLink href="#">Team</BigLink>
            <BigLink href="#">Studierende</BigLink>
            <BigLink href="#">Ausbildung</BigLink>
            <Box>
              <BigLink href="#">Auditions</BigLink>
            </Box>
            <BigLink href="#">Fortbildung</BigLink>
            <BigLink href="#">Aktuelles</BigLink>
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
      )}
    </>
  );
}

export default TopNavbar;
