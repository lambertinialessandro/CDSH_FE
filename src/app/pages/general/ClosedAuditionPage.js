import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { defaultNS as ns_common } from 'translations';

function ClosedAuditionPage() {
  const { t } = useTranslation([ns_common]);
  const { message } = t(ns_common);

  return (
    <Box
      sx={{
        p: 10,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          display: { xs: 'none', md: 'block' },
          fontSize: { xs: '50px', md: '80px' },
          lineHeight: { xs: '55px', md: '85px' },
          fontWeight: '400',
        }}
      >
        {message.closedAuditions}
      </Typography>
    </Box>
  );
}

export default ClosedAuditionPage;
