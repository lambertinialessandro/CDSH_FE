import { ArrowForward } from '@mui/icons-material';
import { Box, Typography, useTheme } from '@mui/material';
import LoopBanner from 'app/shared-components/banner/LoopBanner';
import useParallaxY from 'app/shared-components/hooks/useParallaxY';
import AnchorLink from 'app/shared-components/link/AnchorLink';
import BigLink from 'app/shared-components/link/BigLink';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import AktuellesSection from './AktuellesSection';
import { useSelector } from 'react-redux';
import { selectUserLanguage } from 'app/store/app/mainSlice';

function Aktuelles() {
  const theme = useTheme();
  const userLanguage = useSelector(selectUserLanguage);
  const [data, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`http://localhost/plainkit-main/api/news?lang=${userLanguage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setNews(data);
      })
      .catch((error) => {
        console.error('Fetching error:', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userLanguage]);

  console.log('data', data);
  if (loading) return <Box sx={{ p: 10, textAlign: 'center' }}>Loading content...</Box>;
  if (!data) return <Box sx={{ p: 10, textAlign: 'center' }}>Error loading data.</Box>;

  return (
    <>
      <Box
        component="section"
        className="header relative flex items-center max-h-860-px"
        sx={{ height: { sx: '100%', md: `100vh` }, flexDirection: { xs: 'column-reverse', md: 'row' } }}
      >
        <Box
          className="flex-1 h-full flex flex-col justify-between items-start"
          sx={{
            zIndex: '2',
            width: { xs: '100%', md: '50%' },
            padding: { xs: '46px 56px 46px 56px', md: '0 56px 46px 56px' },
          }}
        >
          <Typography></Typography>
          <Typography
            sx={{
              display: { xs: 'none', md: 'block' },
              fontSize: '80px',
              lineHeight: '85px',
              fontWeight: '400',
            }}
          >
            {data.header.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '15px', md: '30px' },
              lineHeight: { xs: '20px', md: '35px' },
              fontWeight: '400',
            }}
          >
            {data.header.intro}
          </Typography>
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/assets/images/students/cdsh-willkommen-1.png`}
            className="flex-1 w-full"
            sx={{ objectFit: 'cover', height: {xs: "390px", md: "100%"} }}
          ></Box>
          <Typography
            className="mix-blend-exclusion"
            sx={{
              position: 'absolute',
              left: '24px',
              bottom: '12px',
              display: { xs: 'block', md: 'none' },
              fontSize: '50px',
              lineHeight: '55px',
              fontWeight: '400',
              color: 'white',
            }}
          >
            {data.header.title}
          </Typography>
        </Box>
      </Box>

      {/* Banner Section */}
      <Box
        component="section"
        className="flex justify-start items-center w-full overflow-hidden border-y border-black"
        sx={{
          height: { xs: '80px', md: '127px' },
          background: theme.palette.primary.main,
        }}
      >
        <LoopBanner stoppable>
          <Typography
            className="min-w-max flex items-center"
            sx={{
              fontSize: { xs: '28px', md: '80px' },
              fontWeight: 400,
              color: '#000000',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              marginRight: { xs: '16px', md: '45px' },
            }}
          >
            {data.banner.text}
            <BigLink
              extraSx={{
                display: 'flex',
                height: 'min-content',
                marginLeft: { xs: '12px', md: '24px' },
                color: '#ffffff',
                fontSize: { xs: '28px', md: '80px' },
                fontWeight: 400,
                whiteSpace: 'nowrap',
              }}
              fontSize="inherit"
              lineHeight={{ xs: '1px', md: '5px' }}
              color="#000000"
              href={'/auditions'}
            >
              {data.banner.linkText} <ArrowForward fontSize="inherit" />
            </BigLink>
          </Typography>
        </LoopBanner>
      </Box>

      <AktuellesSection items={data.newsItems} title={data.header.title} />

      {/* Kennenlernen Section */}
      <Box
        component="section"
        className="flex flex-col justify-center items-center text-center"
        sx={{ py: { xs: 8, md: 15 }, px: { xs: 4, md: 6 } }}
      >
        <Typography
          sx={{
            fontSize: { xs: '36px', md: '80px' },
            marginBottom: { xs: '12px', md: '32px' },
            fontWeight: 400,
            color: '#000000',
            lineHeight: 1.1,
          }}
        >
          {data.footerCta.title}
        </Typography>
        <Typography
          className="max-w-[740px] min-w-[50%] text-center"
          sx={{ fontSize: { xs: '18px', md: '30px' }, fontWeight: 400, color: '#000000' }}
        >
          {data.footerCta.text}
        </Typography>
      </Box>
    </>
  );
}

export default Aktuelles;
