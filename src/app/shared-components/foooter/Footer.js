import { Box, Link, Typography, useTheme } from '@mui/material';
import { useMemo } from 'react';
import ExternalLink from '../button/ExternalLink';
import AncorLink from '../link/AncorLink';

function Footer(props) {
  const { fixed } = props;
  const theme = useTheme();

  return (
    <>
      <Box
        component="footer"
        className="px-[45px] pt-[54px] pb-[24px] flex flex-col justify-between items-center"
        sx={{ background: '#eae7f8' }}
      >
        <Box className="w-full flex justify-between pb-[24px] pr-[54px]">
          <Box className="flex flex-col justify-start items-start gap-[4px]">
            <Typography className="">CDSH - Contemporary</Typography>
            <Typography className="">Dance School Hamburg Gmbh</Typography>
            <Typography className="">Stresemannstraße 374 b</Typography>
            <Typography className="">22761 Hamburg</Typography>
          </Box>
          <Box className="flex flex-col justify-start items-start gap-[4px]">
            <AncorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Über uns
            </AncorLink>
            <AncorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Kontact
            </AncorLink>
            <AncorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Auditions
            </AncorLink>
            <AncorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              FAQ
            </AncorLink>
          </Box>
          <Box className="flex flex-col justify-start items-start gap-[4px]">
            <AncorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Datenschutzerklärung
            </AncorLink>
            <AncorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Impressum
            </AncorLink>
            <AncorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              AGB
            </AncorLink>
            <AncorLink
              href="#"
              extraSx={{
                fontSize: '15px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Cookie-Einstellungen
            </AncorLink>
          </Box>
          <Box className="flex flex-col justify-start items-start gap-[4px]">
            <Typography className="">Telefon: +49 (0)40 41924560</Typography>
            <Typography className="">Mail: info@cdsh.de</Typography>
          </Box>
          <Box></Box>
        </Box>
        <Box className="w-full flex justify-between items-start">
          <Box className="flex gap-[45px]">
            <AncorLink
              href="#"
              extraSx={{
                fontSize: '10px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Instagram
            </AncorLink>
            <AncorLink
              href="#"
              extraSx={{
                fontSize: '10px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Vimeo
            </AncorLink>
            <AncorLink
              href="#"
              extraSx={{
                fontSize: '10px',
                fontWeight: '400',
              }}
              color="#000000"
            >
              Facebook
            </AncorLink>
          </Box>
          <Box className="h-full flex flex-col justify-end items-end min-w-fit">
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '400',
              }}
            >
              Designed by GREAT AT STUDIO
            </Typography>
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '400',
              }}
            >
              Developed by Lambertini Alessandro
            </Typography>
            <Typography
              sx={{
                fontSize: '10px',
                fontWeight: '400',
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
