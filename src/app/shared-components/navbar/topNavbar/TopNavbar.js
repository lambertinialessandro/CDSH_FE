import { Box, Typography, useTheme } from '@mui/material';
import { ns as ns_navigation } from 'app/navigation/translations';
import Banner from 'app/shared-components/layout/Banner';
import AnchorLink from 'app/shared-components/link/AnchorLink';
import BigLink from 'app/shared-components/link/BigLink';
import { selectIsBannerOpen } from 'app/store/app/mainSlice';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function TopNavbar(props) {
  const { fixed } = props;
  const { t } = useTranslation([/* ns, */ ns_navigation]);
  const { title } = t(ns_navigation);
  const theme = useTheme();

  const isBannerOpen = useSelector(selectIsBannerOpen)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /*
  backdrop-blur-md
  background: linear-gradient(180deg, #8f20ff, #ffffff00);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6); */

  const menuRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <Box
        component="nav"
        className="w-full h-[90px] z-[50] mix-blend-exclusion"
        sx={{
          position: fixed ? 'fixed' : 'absolute',
          color: '#ffffff',
          top: isBannerOpen ? "45px" : "0px"
          /* textShadow: "0 1px 3px rgba(0, 0, 0, 0.6)", */
        }}
      >
        <Box className="w-full h-full px-[45px] flex justify-between items-center">
          <Typography component={Link} to="/" sx={{ fontSize: '36px' }}>
            CDSH
          </Typography>
          <Box className="flex gap-[26px]">
            <AnchorLink
              href={`${process.env.PUBLIC_URL}`}
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#ffffff"
            >
              English Version
            </AnchorLink>
            <AnchorLink
              href={`${process.env.PUBLIC_URL}`}
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#ffffff"
            >
              Ticketshop
            </AnchorLink>
            {/* {isMenuOpen ? (
              <Typography
                component="a"
                onClick={() => {
                  setIsMenuOpen(false);
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
            <AnchorLink
              onClick={() => {
                setIsMenuOpen(true);
              }}
              extraSx={{
                color: '#ffffff',
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#ffffff"
            >
              Menü
            </AnchorLink>
            {/* )} */}
          </Box>
        </Box>
      </Box>

      <Box
        ref={menuRef}
        className="h-screen fixed top-0 right-0 z-[100] flex flex-col justify-between items-start pt-0 p-[45px]"
        sx={{
          background: theme.palette.secondary.main,
          minWidth: 'min-content',
          width: '100%',
          maxWidth: 'min(850px, 33%)',
          transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
          transform: `translate(${isMenuOpen ? 0 : 100}%, 0)`,
        }}
      >
        <Box className="w-full h-[90px] flex justify-end items-center">
          <Box className="flex gap-[26px]">
            <AnchorLink
              href={`${process.env.PUBLIC_URL}`}
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              English Version
            </AnchorLink>
            <AnchorLink
              href={`${process.env.PUBLIC_URL}`}
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Ticketshop
            </AnchorLink>

            <Typography
              component="a"
              onClick={() => {
                setIsMenuOpen(false);
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
          <BigLink
            href={`/about_us`}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Über uns
          </BigLink>
          <BigLink
            href={`/team`}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Team
          </BigLink>
          <BigLink
            href={`/students`}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Studierende
          </BigLink>
          <BigLink
            href={`/ausbildung`}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Ausbildung
          </BigLink>
          <Box className="flex items-end gap-[6px]">
            <BigLink
              href={`/auditions`}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Auditions
            </BigLink>
            <Box
              className="h-fit mb-[12px] p-[2px] border border-black rounded-full flex justify-between items-center gap-[12px]"
              sx={{ background: '#ffffff' }}
            >
              <Box />
              <Typography
                sx={{
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: 'normal',
                }}
              >
                OPEN
              </Typography>
              <Box className="rounded-full p-[12px]" sx={{ background: theme.palette.primary.main }} />
            </Box>
          </Box>
          <BigLink
            href={`${process.env.PUBLIC_URL}`}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Fortbildung
          </BigLink>
          <BigLink
            href={`${process.env.PUBLIC_URL}`}
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Aktuelles
          </BigLink>
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
