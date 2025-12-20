import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { defaultNS as ns_common } from 'translations';

function LoadingPage() {
  const { t } = useTranslation([ns_common]);
  const { message } = t(ns_common);

  return <Box sx={{ p: 10, textAlign: 'center' }}>{message.loading}</Box>;
}

export default LoadingPage;
