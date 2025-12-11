import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { ArrowForward, Close } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AnchorLink from '../link/AnchorLink';
import { setIsBannerOpen } from 'app/store/app/mainSlice';

function Banner({ fixed }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    dispatch(setIsBannerOpen(true));
  }, [dispatch]);

  if (isClosed) return null;

  return (
    <Box
      className="w-full z-[50] border-b border-black"
      sx={{
        height: { xs: '32px', sm: '45px' },
        background: theme.palette.primary.main,
        ...(fixed && { position: 'fixed', top: 0, left: 0 }),
      }}
    >
      <Box
        className="w-full h-full flex justify-between items-center"
        sx={{
          px: { xs: 1.5, sm: 3 },
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
        }}
      >
        {/* Left spacer for layout balance */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }} />

        {/* Main text + link */}
        <Box className="flex items-center justify-center text-center" sx={{ flexGrow: 1, flexWrap: 'wrap', gap: 0.5 }}>
          <Typography
            sx={{
              color: '#000',
              fontSize: { xs: '14px', sm: '15px' },
              fontWeight: 400,
              whiteSpace: { sm: 'nowrap' },
            }}
          >
            Die Audition Termine 2025 sind jetzt online.
          </Typography>
          <AnchorLink
            href="/auditions"
            extraSx={{
              display: 'inline-flex',
              alignItems: 'center',
              color: '#000',
              fontSize: { xs: '14px', sm: '15px' },
              fontWeight: 500,
              lineHeight: 1.5,
              ml: { xs: 0.5, sm: 1.5 },
            }}
            color="#000000"
          >
            Jetzt anmelden <ArrowForward fontSize="small" sx={{ fontSize: { xs: '14px', sm: '16px' } }} />
          </AnchorLink>
        </Box>

        {/* Close button */}
        <IconButton
          aria-label="Banner schließen"
          onClick={() => {
            dispatch(setIsBannerOpen(false));
            setIsClosed(true);
          }}
          sx={{
            color: '#000',
            p: 0.5,
            ml: { xs: 0, sm: 2 },
            flexShrink: 0,
          }}
        >
          <Close fontSize="small" sx={{ fontSize: { xs: '16px', sm: '24px' } }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Banner;
