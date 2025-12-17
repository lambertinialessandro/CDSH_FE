import { Alert, Box, CircularProgress, Typography } from '@mui/material';
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';

function AGB() {
  const [agbData, setAgbData] = useState(null);
  const userLanguage = useSelector(selectUserLanguage);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = `http://localhost/plainkit-main/api/agb?lang=${userLanguage}`;

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAgbData(data);
      })
      .catch((error) => {
        console.error('Fetching error:', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userLanguage]);

  if (loading)
    return (
      <Box sx={{ p: 10, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  if (error || !agbData)
    return (
      <Box sx={{ p: 10 }}>
        <Alert severity="error">Error loading data: {error ? error.message : 'No data received.'}</Alert>
      </Box>
    );
  return (
    <>
      <Box
        component="section"
        className="px-[48px] flex flex-col justify-start items-center"
        sx={{
          gap: { xs: '24px', md: '48px' },
          py: { xs: '55px', md: '110px' },
        }}
      >
        <Box
          className="max-w-[1280px] w-full flex justify-start items-start"
          sx={{
            padding: { xs: '64px 56px 46px 0px', md: '120px 56px 46px 0px' },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '50px', md: '80px' },
              fontWeight: '400',
              lineHeight: 'normal',
            }}
          >
            {agbData.title}
          </Typography>
        </Box>
        <Box
          className="max-w-[1280px] flex flex-col"
          sx={{
            gap: { xs: '16px', md: '32px' },
          }}
        >
          {agbData.text_blocks.map((markdownString, idx) => (
            <Typography
              key={idx}
              className="text-left"
              //sx={{ color: '#000000 ', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400', lineHeight: 'normal' }}
            >
              <ReactMarkdown children={markdownString} components={renderers} />
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default AGB;
