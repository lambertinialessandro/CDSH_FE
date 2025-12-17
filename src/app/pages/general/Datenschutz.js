import { Box, Typography, CircularProgress, Alert } from '@mui/material';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown'; 
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';

function Datenschutz() {

    const [protectionData, setProtectionData] = useState(null);
    const userLanguage = useSelector(selectUserLanguage);
  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const API_URL = `http://localhost/plainkit-main/api/dataProtection?lang=${userLanguage}`;
   
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
            setProtectionData(data);
          })
          .catch((error) => {
            console.error('Fetching error:', error);
            setError(error);
          })
          .finally(() => {
            setLoading(false);
          });
    }, [userLanguage]);

    if (loading) return <Box sx={{ p: 10, textAlign: 'center' }}><CircularProgress /></Box>;
    if (error || !protectionData) return <Box sx={{ p: 10 }}><Alert severity="error">Error loading data: {error ? error.message : 'No data received.'}</Alert></Box>;

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
                        {protectionData.title}
                    </Typography>
                </Box>

                <Box
                    className="max-w-[1280px] w-full flex flex-col"
                    sx={{
                        gap: { xs: '16px', md: '32px' }, 
                    }}
                >
                    {protectionData.text_blocks.map((markdownString, idx) => (
                        <Box key={idx} className="text-left">
                            <ReactMarkdown
                                children={markdownString} 
                                components={renderers} 
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default Datenschutz;