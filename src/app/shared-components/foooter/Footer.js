import { Box, Link, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import ExternalLink from '../button/ExternalLink';
import AnchorLink from '../link/AnchorLink';

function Footer(props) {
  const { fixed } = props;
  const theme = useTheme();

  return (
    <>
      <Box
        component="footer"
        className="px-[45px] pt-[54px] pb-[24px] flex flex-col justify-between items-center"
        sx={{ background: theme.palette.secondary.main }}
      >
        <Box className="w-full flex justify-between pb-[24px] pr-[54px]">
          <Box className="flex flex-col justify-start items-start gap-[4px]">
            <Typography
              sx={{
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: 'normal',
                height: '15px',
              }}
            >
              CDSH - Contemporary
            </Typography>
            <Typography
              sx={{
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: 'normal',
                height: '15px',
              }}
            >
              Dance School Hamburg Gmbh
            </Typography>
            <Typography
              sx={{
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: 'normal',
                height: '15px',
              }}
            >
              Stresemannstraße 374 b
            </Typography>
            <Typography
              sx={{
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: 'normal',
                height: '15px',
              }}
            >
              22761 Hamburg
            </Typography>
          </Box>
          <Box className="flex flex-col justify-start items-start gap-[4px]">
            <AnchorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Über uns
            </AnchorLink>
            <AnchorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Kontact
            </AnchorLink>
            <AnchorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Auditions
            </AnchorLink>
            <AnchorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              FAQ
            </AnchorLink>
          </Box>
          <Box className="flex flex-col justify-start items-start gap-[4px]">
            <AnchorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Datenschutzerklärung
            </AnchorLink>
            <AnchorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Impressum
            </AnchorLink>
            <AnchorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              AGB
            </AnchorLink>
            <AnchorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Cookie-Einstellungen
            </AnchorLink>
          </Box>
          <Box className="flex flex-col justify-start items-start gap-[4px]">
            <Typography
              sx={{
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: 'normal',
                height: '15px',
              }}
            >
              Telefon: +49 (0)40 41924560
            </Typography>
            <Typography
              sx={{
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: 'normal',
                height: '15px',
              }}
            >
              Mail: info@cdsh.de
            </Typography>
          </Box>
          <Box></Box>
        </Box>
        <Box className="w-full flex justify-between items-start">
          <Box className="flex gap-[45px]">
            <AnchorLink
              href="#"
              extraSx={{
                fontSize: '10px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Instagram
            </AnchorLink>
            <AnchorLink
              href="#"
              extraSx={{
                fontSize: '10px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Vimeo
            </AnchorLink>
            <AnchorLink
              href="#"
              extraSx={{
                fontSize: '10px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Facebook
            </AnchorLink>
          </Box>
          <Box className="h-full flex flex-col justify-end items-end min-w-fit">
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '400',
                lineHeight: 'normal',
              }}
            >
              Designed by GREAT AT STUDIO
            </Typography>
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '400',
                lineHeight: 'normal',
              }}
            >
              Developed by Lambertini Alessandro
            </Typography>
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '400',
                lineHeight: 'normal',
              }}
            >
              and Landini Denise
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
