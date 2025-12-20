import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography, useTheme } from '@mui/material';
import AnchorLink from 'app/shared-components/link/AnchorLink';
import { selectIsBannerOpen, setUserLanguage } from 'app/store/app/mainSlice';
import { changeLanguage, selectCurrLanguage } from 'app/store/i18nSlice';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { defaultNS as ns_common } from 'translations';

function TopNavbar({ fixed }) {
  const { t } = useTranslation([ns_common]);
  const { message } = t(ns_common);
  const theme = useTheme();
  const dispatch = useDispatch();

  const userLanguage = useSelector(selectCurrLanguage);
  console.log(' ### userLanguage', userLanguage, message);

  const areAuditionOpen = true;
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
              dispatch(changeLanguage(userLanguage === 'en' ? 'de' : 'en'));
              dispatch(setUserLanguage(userLanguage === 'en' ? 'de' : 'en'));
            }}
            color="#fff"
            extraSx={{ color: '#ffffff', fontSize: '15px', fontWeight: '400' }}
          >
            {userLanguage === 'en' ? message.deVersion : message.enVersion}
          </AnchorLink>
          <AnchorLink href={'/ticketshop'} color="#fff" extraSx={{ fontSize: '15px' }}>
            {message.ticketShop}
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
            {message.menu}
          </AnchorLink>
        </Box>

        {/* Mobile menu button */}
        <Box className="flex md:hidden gap-[26px]">
          <AnchorLink
            onClick={() => {
              dispatch(changeLanguage(userLanguage === 'en' ? 'de' : 'en'));
              dispatch(setUserLanguage(userLanguage === 'en' ? 'de' : 'en'));
            }}
            color="#fff"
            extraSx={{ fontSize: '15px' }}
          >
            {userLanguage === 'en' ? message.deVersionShort : message.enVersionShort}
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
            {message.menu}
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
                dispatch(changeLanguage(userLanguage === 'en' ? 'de' : 'en'));
                dispatch(setUserLanguage(userLanguage === 'en' ? 'de' : 'en'));
              }}
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
                height: 'fit-content',
              }}
              color="#000000"
              lineHeight="1.1px"
            >
              {userLanguage === 'en' ? message.deVersion : message.enVersion}
            </AnchorLink>
            <AnchorLink
              href={'/ticketshop'}
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
                height: 'fit-content',
              }}
              color="#000000"
              lineHeight="1.1px"
            >
              {message.ticketShop}
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
            {message.uberUns}
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
            {message.team}
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
            {message.studierende}
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
            {message.ausbildung}
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
              {message.auditions}
            </AnchorLink>

            {areAuditionOpen && (
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
                  {message.auditionOpen}
                </Typography>
                <Box
                  className="rounded-full"
                  sx={{
                    background: theme.palette.primary.main,
                    padding: { xs: '8px', md: '12px' },
                  }}
                />
              </Box>
            )}
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
            {message.aktuelles}
          </AnchorLink>
        </Box>

        {/* Footer info */}
        <Box sx={{ marginTop: { xs: '12px', md: '24px' } }}>
          <Typography sx={{ fontSize: { xs: '12px', md: '15px' }, fontWeight: 400 }}>{message.kontakt}</Typography>
          <Typography sx={{ fontSize: { xs: '10px', md: '14px' }, fontWeight: 400 }}>
            {message.telefon}+49 (0)40 41924560
          </Typography>
          <Typography sx={{ fontSize: { xs: '10px', md: '14px' }, fontWeight: 400 }}>
            {message.mail}info@cdsh.de
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default TopNavbar;
