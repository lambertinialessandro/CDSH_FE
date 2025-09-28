import { Box, Typography, useTheme } from '@mui/material';
import AnchorLink from '../link/AnchorLink';

function Footer() {
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
        gap: { xs: "74px", md: "24px" },
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
          pr: { xs: '0px', md: "54px"},
          gap: { xs: "42px", md: 0 },
        }}
      >
        {/* Address */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', textWrap: "nowrap" }}>
          {['CDSH - Contemporary', 'Dance School Hamburg GmbH', 'Stresemannstraße 374 b', '22761 Hamburg'].map(
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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', textWrap: "nowrap" }}>
          {['Über uns', 'Kontakt', 'Auditions', 'FAQ'].map((label, i) => (
            <AnchorLink
              key={i}
              href="#"
              extraSx={{
                fontSize: { xs: '14px', md: '15px' },
                fontWeight: 400,
              }}
              color="#000"
            >
              {label}
            </AnchorLink>
          ))}
        </Box>

        {/* Legal Links */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', textWrap: "nowrap" }}>
          {['Datenschutzerklärung', 'Impressum', 'AGB', 'Cookie-Einstellungen'].map((label, i) => (
            <AnchorLink
              key={i}
              href="#"
              extraSx={{
                fontSize: { xs: '14px', md: '15px' },
                fontWeight: 400,
              }}
              color="#000"
            >
              {label}
            </AnchorLink>
          ))}
        </Box>

        {/* Contact */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: "8px", textWrap: "nowrap" }}>
          {['Telefon: +49 (0)40 41924560', 'Mail: info@cdsh.de'].map((label, i) => (
            <AnchorLink
              key={i}
              extraSx={{
                fontSize: { xs: '14px', md: '15px' },
                fontWeight: 400,
              }}
              color="#000"
            >
              {label}
            </AnchorLink>
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
            { label: 'Instagram', link: '#' },
            { label: 'Vimeo', link: '#' },
            { label: 'Facebook', link: '#' },
          ].map(({ label, link }, i) => (
            <AnchorLink
              key={i}
              href={link}
              extraSx={{
                fontSize: { xs: '12px', md: '14px' },
                fontWeight: 400,
              }}
              color="#000"
            >
              {label}
            </AnchorLink>
          ))}
        </Box>

        {/* Credits */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'flex-end' }}>
          {['Designed by GREAT AT STUDIO', 'Developed by Lambertini Alessandro', 'and Landini Denise'].map(
            (line, i) => (
              <Typography
                key={i}
                sx={{
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: 1.4,
                }}
              >
                {line}
              </Typography>
            )
          )}
        </Box>
        <Box
          sx={{ display: { xs: 'flex', md: 'none' }, width: '100%', flexDirection: 'column', alignItems: 'flex-start' }}
        >
          {['Designed by GREAT AT STUDIO', 'Developed by Lambertini Alessandro and Landini Denise'].map((line, i) => (
            <Typography
              key={i}
              sx={{
                fontSize: '10px',
                fontWeight: 400,
                lineHeight: 1.4,
              }}
            >
              {line}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
