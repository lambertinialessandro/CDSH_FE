import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography, useTheme } from '@mui/material';
import AnchorLink from 'app/shared-components/link/AnchorLink';
import { selectIsBannerOpen } from 'app/store/app/mainSlice';
import { languageChanged, selectCurrLanguage } from 'app/store/i18nSlice';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function TopNavbar({ fixed }) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const userLanguage = useSelector(selectCurrLanguage);

  const isBannerOpen = useSelector(selectIsBannerOpen);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef();

  // close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* Top bar */}
      <Box
        className="z-[50] mix-blend-exclusion"
        sx={{
          position: fixed ? 'fixed' : 'absolute',
          top: isBannerOpen ? { xs: '56px', md: '54px' } : { xs: '11px', md: '9px' },
          left: 0,
          lineHeight: '28px',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          mx: { xs: 2, md: 6 },
          justifyContent: 'start',
        }}
      >
        <Typography
          component={Link}
          to="/"
          sx={{
            fontSize: { xs: '24px', md: '36px' },
            fontWeight: 600,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          CDSH
        </Typography>
      </Box>
      <Box
        className="z-[50] mix-blend-exclusion"
        sx={{
          position: fixed ? 'fixed' : 'absolute',
          top: isBannerOpen ? { xs: '65px', md: '75px' } : { xs: '20px', md: '30px' },
          right: 0,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          mx: { xs: 2, md: 6 },
          justifyContent: 'end',
        }}
      >
        {/* Desktop links */}
        <Box className="hidden md:flex gap-[26px]">
          <AnchorLink
            onClick={() => {
              dispatch(languageChanged(userLanguage == 'en' ? 'de' : 'en'));
            }}
            color="#fff"
            extraSx={{ color: '#ffffff', fontSize: '15px', fontWeight: '400' }}
          >
            {userLanguage == 'en' ? 'Deutsche Version' : 'English Version'}
          </AnchorLink>
          <AnchorLink href={'/ticketshop'} color="#fff" extraSx={{ fontSize: '15px' }}>
            Ticketshop
          </AnchorLink>
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
        </Box>

        {/* Mobile menu button */}
        <Box className="flex md:hidden gap-[26px]">
          <AnchorLink
            onClick={() => {
              dispatch(languageChanged(userLanguage == 'en' ? 'de' : 'en'));
            }}
            color="#fff"
            extraSx={{ fontSize: '15px' }}
          >
            {userLanguage == 'en' ? 'DE' : 'EN'}
          </AnchorLink>
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
        </Box>
      </Box>

      {/* Slide-in menu */}
      <Box
        component="nav"
        ref={menuRef}
        className="fixed top-0 right-0 h-screen z-[100] flex flex-col justify-between items-start p-[45px] pt-0 overflow-y-auto"
        sx={{
          background: theme.palette.secondary.main,
          maxWidth: { xs: '100%', sm: '80%', md: 'min(850px, 33%)%' },
          transform: `translateX(${isMenuOpen ? '0%' : '100%'})`,
          transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1)',
        }}
      >
        {/* Menu header */}
        <Box className="w-full h-[90px] flex justify-end items-center" sx={{ marginTop: { xs: '12px', md: '24px' } }}>
          <Box className="flex gap-[26px]">
            <AnchorLink
              onClick={() => {
              dispatch(languageChanged(userLanguage == 'en' ? 'de' : 'en'));
            }}
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
            {userLanguage == 'en' ? 'Deutsche Version' : 'English Version'}
            </AnchorLink>
            <AnchorLink
              href={'/ticketshop'}
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
              <CloseIcon />
            </Typography>
          </Box>
        </Box>

        {/* Links */}
        <Box
          className="h-full flex flex-col gap-6 justify-start items-baseline"
          sx={{ marginTop: { xs: '12px', md: '24px' } }}
        >
          <AnchorLink
            href="/about_us"
            onClick={() => setIsMenuOpen(false)}
            lineHeight={{ xs: 2, md: 5 }}
            extraSx={{
              fontSize: { xs: '30px', md: '80px' },
              fontWeight: 400,
              whiteSpace: 'nowrap',
            }}
          >
            Über uns
          </AnchorLink>
          <AnchorLink
            href="/team"
            onClick={() => setIsMenuOpen(false)}
            lineHeight={{ xs: 2, md: 5 }}
            extraSx={{
              fontSize: { xs: '30px', md: '80px' },
              fontWeight: 400,
              whiteSpace: 'nowrap',
            }}
          >
            Team
          </AnchorLink>
          <AnchorLink
            href="/students"
            onClick={() => setIsMenuOpen(false)}
            lineHeight={{ xs: 2, md: 5 }}
            extraSx={{
              fontSize: { xs: '30px', md: '80px' },
              fontWeight: 400,
              whiteSpace: 'nowrap',
            }}
          >
            Studierende
          </AnchorLink>
          <AnchorLink
            href="/ausbildung"
            onClick={() => setIsMenuOpen(false)}
            lineHeight={{ xs: 2, md: 5 }}
            extraSx={{
              fontSize: { xs: '30px', md: '80px' },
              fontWeight: 400,
              whiteSpace: 'nowrap',
            }}
          >
            Ausbildung
          </AnchorLink>

          <Box className="flex items-center gap-[6px]">
            <AnchorLink
              href="/auditions"
              onClick={() => setIsMenuOpen(false)}
              lineHeight={{ xs: 2, md: 5 }}
              extraSx={{
                fontSize: { xs: '30px', md: '80px' },
                fontWeight: 400,
                whiteSpace: 'nowrap',
              }}
            >
              Auditions
            </AnchorLink>

            <Box
              className="h-fit border border-black rounded-full flex justify-between items-center"
              sx={{
                background: '#ffffff',
                padding: { xs: '2px', md: '2px' },
                gap: { xs: '6px', md: '12px' },
                marginTop: { xs: '8px', md: '18px' },
              }}
            >
              <Box />
              <Typography
                sx={{
                  fontSize: { xs: '12px', md: '15px' },
                  fontWeight: '400',
                  lineHeight: 'normal',
                }}
              >
                OPEN
              </Typography>
              <Box
                className="rounded-full"
                sx={{
                  background: theme.palette.primary.main,
                  padding: { xs: '8px', md: '12px' },
                }}
              />
            </Box>
          </Box>

          <AnchorLink
            href={`/aktuelles`}
            onClick={() => setIsMenuOpen(false)}
            lineHeight={{ xs: 2, md: 5 }}
            extraSx={{
              fontSize: { xs: '30px', md: '80px' },
              fontWeight: 400,
              whiteSpace: 'nowrap',
            }}
          >
            Aktuelles
          </AnchorLink>
        </Box>

        {/* Footer info */}
        <Box sx={{ marginTop: { xs: '12px', md: '24px' } }}>
          <Typography sx={{ fontSize: { xs: '12px', md: '15px' }, fontWeight: 400 }}>Kontakt</Typography>
          <Typography sx={{ fontSize: { xs: '10px', md: '14px' }, fontWeight: 400 }}>
            Telefon: +49 (0)40 41924560
          </Typography>
          <Typography sx={{ fontSize: { xs: '10px', md: '14px' }, fontWeight: 400 }}>Mail: info@cdsh.de</Typography>
        </Box>
      </Box>
    </>
  );
}

export default TopNavbar;
