import { Box, Typography, useTheme } from '@mui/material';
import AnchorLink from '../link/AnchorLink';
import { useTranslation } from 'react-i18next';
import { defaultNS as ns_common } from 'translations';

function Footer() {
  const { t } = useTranslation([ns_common]);
  const { message } = t(ns_common);
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: theme.palette.secondary.main,
        px: { xs: '36px', md: '45px' },
        pt: { xs: '45px', md: '54px' },
        pb: { xs: '36px', md: '24px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: '74px', md: '24px' },
      }}
    >
      {/* Top section: address + nav links */}
      <Box
        className="w-full"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          pr: { xs: '0px', md: '54px' },
          gap: { xs: '42px', md: 0 },
        }}
      >
        {/* Address */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', textWrap: 'nowrap' }}>
          {[message.fullNameSchool, message.schoolDescription, message.schoolStreet, message.schoolPLZ].map(
            (line, i) => (
              <Typography
                key={i}
                sx={{
                  fontSize: { xs: '14px', md: '15px' },
                  fontWeight: 400,
                  lineHeight: 1.4,
                }}
              >
                {line}
              </Typography>
            )
          )}
        </Box>

        {/* Nav Links */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0px', textWrap: 'nowrap' }}>
          {[
            { label: message.footUberUs, href: 'about_us' },
            { label: message.footAuditions, href: 'auditions' },
            { label: message.footFAQ, href: 'faq' },
          ].map(({ label, href }, i) => (
            <AnchorLink
              key={i}
              href={href}
              extraSx={{
                width: 'fit-content',
                pb: '1px',
                mb: '7px',
                fontSize: { xs: '14px', md: '15px' },
                fontWeight: 400,
              }}
              color="#000"
              lineHeight="1.1px"
            >
              {label}
            </AnchorLink>
          ))}
        </Box>

        {/* Legal Links */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0px', textWrap: 'nowrap' }}>
          {[
            { label: message.footDaten, href: 'datenschutz' },
            { label: message.footImpressum, href: 'impressum' },
            { label: message.footAGB, href: 'agb' },
          ].map(({ label, href }, i) => (
            <AnchorLink
              key={i}
              href={href}
              extraSx={{
                width: 'fit-content',
                pb: '1px',
                mb: '7px',
                fontSize: { xs: '14px', md: '15px' },
                fontWeight: 400,
              }}
              color="#000"
              lineHeight="1.1px"
            >
              {label}
            </AnchorLink>
          ))}
        </Box>

        {/* Contact */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', textWrap: 'nowrap' }}>
          {[message.footTelephon + '+49 (0)40 41924560', message.footMail + 'info@cdsh.de'].map((label, i) => (
            <Typography
              key={i}
              sx={{
                fontSize: { xs: '14px', md: '15px' },
                fontWeight: 400,
                lineHeight: 1,
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Bottom section: socials + credits */}
      <Box
        className="w-full"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'center' },
          gap: { xs: '48px', md: 0 },
        }}
      >
        {/* Socials */}
        <Box
          sx={{
            display: 'flex',
            width: { xs: '100%', md: 'fit-content' },
            justifyContent: { xs: 'space-between', md: 'start' },
            gap: { xs: 0, md: '45px' },
          }}
        >
          {[
            { label: message.liknInstagram, href: '#' },
            { label: message.liknVimeo, href: '#' },
            { label: message.liknFacebook, href: '#' },
          ].map(({ label, href }, i) => (
            <AnchorLink
              key={i}
              href={href}
              extraSx={{
                width: 'fit-content',
                pb: '1px',
                fontSize: { xs: '12px', md: '14px' },
                fontWeight: 400,
              }}
              color="#000"
              lineHeight="1.1px"
            >
              {label}
            </AnchorLink>
          ))}
        </Box>

        {/* Credits */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'flex-end' }}>
          {[
            { label: message.designed, href: 'https://greatatstudio.com', hrefLabel: 'GREAT AT STUDIO' },
            {
              label: message.developed,
              href: 'https://github.com/lambertinialessandro',
              hrefLabel: 'Lambertini Alessandro',
            },
            { label: message.and, href: 'https://github.com/deniselandini', hrefLabel: 'Landini Denise' },
          ].map(({ label, href, hrefLabel }, i) => (
            <Typography
              key={i}
              sx={{
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: 1.4,
                mb: '2px',
              }}
            >
              {label}
              <AnchorLink
                href={href}
                extraSx={{
                  width: 'fit-content',
                  pb: '1px',

                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: 1.4,
                  textTransform: 'uppercase',
                }}
                color="#000"
                lineHeight="1.1px"
              >
                {hrefLabel}
              </AnchorLink>
            </Typography>
          ))}
        </Box>
        <Box
          sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', flexDirection: 'column', alignItems: 'flex-start' }}
        >
          {[
            { label: message.designed, href: 'https://greatatstudio.com', hrefLabel: 'GREAT AT STUDIO' },
            {
              label: message.developed,
              href: 'https://github.com/lambertinialessandro',
              hrefLabel: 'Lambertini Alessandro',
            },
            { label: message.and, href: 'https://github.com/deniselandini', hrefLabel: 'Landini Denise' },
          ].map(({ label, href, hrefLabel }, i) => (
            <Typography
              key={i}
              sx={{
                fontSize: '10px',
                fontWeight: 400,
                lineHeight: 1.4,
              }}
            >
              {label}
              <AnchorLink
                href={href}
                extraSx={{
                  width: 'fit-content',
                  pb: '2px',
                  fontSize: '10px',
                  fontWeight: 400,
                  lineHeight: 1.4,
                  textTransform: 'uppercase',
                }}
                color="#000"
                lineHeight="1.1px"
              >
                {hrefLabel}
              </AnchorLink>
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
