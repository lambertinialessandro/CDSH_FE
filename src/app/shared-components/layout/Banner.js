import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { color } from 'framer-motion';
import { useEffect, useState } from 'react';
import AncorLink from '../link/AncorLink';
import { ArrowForward, Close, Height, KeyboardArrowRight } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { setIsBannerOpen } from 'app/store/app/mainSlice';

function Banner(props) {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    dispatch(setIsBannerOpen(true))
  }, [])

  return (
    <>
      {!isClosed && (
        <Box
          sx={{
            background: '#8f20ff',
          }}
          className="h-[45px]"
        >
          <Box className="w-full h-full flex justify-between items-center px-[15px]">
            <Box></Box>
            <Box className="flex items-center">
              <Typography
                sx={{
                  height: 'min-content',
                  color: '#ffffff',
                  fontSize: '15px',
                  fontWeight: '400',
                }}
              >
                Die Audition Termine 2025 sind jetzt online.
              </Typography>
              <AncorLink
                href="#"
                extraSx={{
                  height: 'min-content',
                  lineHeight: '1.5',
                  color: '#ffffff',
                  fontSize: '15px',
                  fontWeight: '400',
                }}
                color="#ffffff"
              >
                Jetzt anmelden <ArrowForward />
              </AncorLink>
            </Box>
            <IconButton
              sx={{
                color: '#ffffff',
                lineHeight: '1',
                fontSize: '15px',
                fontWeight: '400',
                cursor: 'pointer',
              }}
              onClick={() => {
                dispatch(setIsBannerOpen(false))
                setIsClosed(true);
              }}
            >
              <Close />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Banner;
