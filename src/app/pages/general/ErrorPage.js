import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { AlertTriangleIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { defaultNS as ns_common } from 'translations';

function ErrorPage() {
  const { t } = useTranslation([ns_common]);
  const { message } = t(ns_common);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col justify-center w-full h-[calc(100vh-150px)]">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="flex flex-col items-center text-center px-4"
      >
        <div className="flex justify-center items-center gap-2 font-semibold mb-4">
          <AlertTriangleIcon className="w-32 h-32 text-red-500 mb-4 animate-pulse" />
        </div>
        <Typography className="!text-3xl whitespace-nowrap text-gray-500 mb-6">{message.error}</Typography>
        <div>
          <button
            onClick={handleGoBack}
            className="rounded-lg border border-gray-300 shadow-theme-xs bg-white text-gray-700 px-8 py-4 text-lg transition-all duration-300 hover:bg-gray-50 hover:text-gray-800"
          >
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default ErrorPage;
