import { Box, Typography, CircularProgress, Alert } from '@mui/material';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown'; 

function Datenschutz() {

    const [protectionData, setprotectionData] = useState(null);
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
            setprotectionData(data);
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


    const paragraphStyle = {
        color: '#000000',
        fontSize: { xs: '15px', md: '30px' },
        fontWeight: '400',
        lineHeight: 'normal',
    };

    const renderers = {
        p: ({ node, ...props }) => (
            <Typography sx={{ ...paragraphStyle, mb: '1em' }} {...props} component="div" />
        ),
        
        strong: ({ node, ...props }) => (
            <strong style={{ fontWeight: 700 }} {...props} />
        ),
        
        ol: ({ node, ...props }) => (
            <Box 
                component="ol" 
                sx={{ ml: 4, listStyleType: 'decimal', mb: '32px', ...paragraphStyle }} 
                {...props} 
            />
        ),
        
        ul: ({ node, ...props }) => (
            <Box 
                component="ul" 
                sx={{ ml: 4, listStyleType: 'disc', mb: '32px', ...paragraphStyle }} 
                {...props} 
            />
        ),

        li: ({ node, ...props }) => (
            <Typography 
                component="li" 
                sx={{ 
                    ...paragraphStyle, 
                    mb: '0.5em', 
                    ml: 0 
                }} 
                {...props} 
            />
        ),
        
        h2: ({ node, ...props }) => (
             <Typography variant="h4" sx={{ ...paragraphStyle, fontWeight: 700, mt: 4, mb: 2 }} {...props} />
        ),
        
        em: ({ node, ...props }) => (
            <em style={{ fontStyle: 'italic' }} {...props} />
        ),
    };

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