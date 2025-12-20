import { Box, Typography, useTheme } from '@mui/material';
import LoopBanner from 'app/shared-components/banner/LoopBanner';
import KooperationenLogos from './KooperationenLogos';
import RaumlichkeitenSection from './RaumlichkeitenSection';
import SplitSection from './SplitSection';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserLanguage } from 'app/store/app/mainSlice';
import ReactMarkdown from 'react-markdown';
import { renderers } from 'app/shared-components/htmlStyle/htmlStyle';

function AboutUs() {
  const theme = useTheme();
  const [aboutUsData, setAboutUsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userLanguage = useSelector(selectUserLanguage);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`http://localhost/plainkit-main/api/aboutUs?lang=${userLanguage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAboutUsData(data);
      })
      .catch((error) => {
        console.error('Fetching error:', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userLanguage]);
  console.log('aboutUs:', aboutUsData);

  if (loading) return <Box sx={{ p: 10, textAlign: 'center' }}>Loading content...</Box>;
  if (!aboutUsData) return <Box sx={{ p: 10, textAlign: 'center' }}>Error loading data.</Box>;

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
            {aboutUsData.header.title}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '15px', md: '30px' },
              lineHeight: { xs: '20px', md: '35px' },
              fontWeight: '400',
            }}
          >
            <ReactMarkdown components={renderers} children={aboutUsData.header.text} />
          </Typography>
        </Box>
        <Box className="flex-1 h-full relative" sx={{ width: { xs: '100%', md: '50%' } }}>
          <Box
            component="img"
            src={aboutUsData.header.image}
            className="flex-1 w-full"
            sx={{ objectFit: 'cover', height: { xs: '390px', md: '100%' } }}
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
            {aboutUsData.header.title}
          </Typography>
        </Box>
      </Box>

      <Box
        component="section"
        className="px-[48px] flex justify-center items-start"
        sx={{
          background: theme.palette.secondary.main,
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '24px', md: '48px' },
          py: { xs: '55px', md: '110px' },
        }}
      >
        <Typography
          className="flex-1"
          sx={{
            fontSize: { xs: '15px', md: '30px' },
            fontWeight: '400',
          }}
        >
          <ReactMarkdown components={renderers} children={aboutUsData.description.left} />
        </Typography>
        <Typography
          className="flex-1"
          sx={{
            fontSize: { xs: '15px', md: '30px' },
            fontWeight: '400',
          }}
        >
          <ReactMarkdown components={renderers} children={aboutUsData.description.right} />
        </Typography>
      </Box>

      <Box
        component="section"
        className="flex justify-start items-center w-full h-[127px] overflow-hidden"
        sx={{
          my: { xs: '55px', md: '110px' },
        }}
      >
        <LoopBanner>
          <Typography
            className="min-w-max flex items-center"
            sx={{
              fontSize: { xs: '35px', md: '80px' },
              fontWeight: '400',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              marginRight: '45px',
            }}
          >
            {aboutUsData.banner1}
          </Typography>
        </LoopBanner>
      </Box>

      <Box component="section" className="px-[45px] flex flex-col justify-center items-start">
        {aboutUsData.splitSections.map((section, idx) => (
          <SplitSection
            key={idx}
            title={section.title}
            text={section.text}
            img={section.img}
            reverse={section.reverse}
            bottom={section.bottom}
          />
        ))}
      </Box>

      <KooperationenLogos title={aboutUsData.cooperations.title} list={aboutUsData.cooperations.items} />

      <Box
        component="section"
        className="flex justify-start items-center w-full h-[127px] overflow-hidden"
        sx={{
          my: { xs: '55px', md: '110px' },
        }}
      >
        <LoopBanner>
          <Typography
            className="min-w-max flex items-center"
            sx={{
              fontSize: { xs: '35px', md: '80px' },
              fontWeight: '400',
              whiteSpace: 'nowrap',
              display: 'inline-block',
              marginRight: '45px',
            }}
          >
            {aboutUsData.banner2}
          </Typography>
        </LoopBanner>
      </Box>

      <Box
        component="section"
        className="px-[75px] flex flex-col justify-center items-center"
        sx={{ background: theme.palette.primary.main, py: { xs: '55px', md: '110px' } }}
      >
        <Typography
          sx={{
            color: '#000000',
            fontSize: { xs: '35px', md: '80px' },
            fontWeight: '400',
            mb: { xs: '55px', md: '110px' },
          }}
        >
          {aboutUsData.concept.title}
        </Typography>
        <Box
          className="max-w-[1250px] flex justify-center"
          sx={{
            flexDirection: { xs: 'column-reverse', md: 'row' },
            alignItems: { xs: 'center', md: 'start' },
            gap: { xs: '55px', md: '110px' },
          }}
        >
          <Box className="flex flex-col justify-start items-start" sx={{ width: { xs: '100%', md: '50%' } }}>
            <ReactMarkdown components={renderers} children={aboutUsData.concept.textLeft} />
            <br />
            <ReactMarkdown components={renderers} children={aboutUsData.concept.textRight} />
          </Box>
          <Box className="flex flex-col justify-start items-start sticky" sx={{ width: { xs: '100%', md: '50%' } }}>
            <Box
              component="img"
              src={aboutUsData.concept.image}
              className="flex-1 w-[500px] mx-auto mb-[24px]"
              sx={{ objectFit: 'cover', aspectRatio: 0.75 }}
            ></Box>

            <Typography
              sx={{
                color: '#000000',
                fontSize: '15px',
                fontWeight: '400',
              }}
            >
              {aboutUsData.concept.name}
            </Typography>
            <Typography
              sx={{
                color: '#000000',
                fontSize: '15px',
                fontWeight: '400',
              }}
            >
              {aboutUsData.concept.role}
            </Typography>
          </Box>
        </Box>
      </Box>

      <RaumlichkeitenSection title={aboutUsData.rooms.title} images={aboutUsData.rooms.images} />
      {aboutUsData.footerCta?.show && (
        <Box
          component="section"
          className="px-[45px] flex flex-col justify-center items-center text-center"
          sx={{ py: { xs: '60px', md: '120px' } }}
        >
          <Typography
            sx={{
              color: '#000000',
              fontSize: { xs: '35px', md: '80px' },
              fontWeight: '400',
              lineHeight: '1',
              marginBottom: '32px',
            }}
          >
            {aboutUsData.footerCta.title}
          </Typography>
          <Typography
            className="max-w-[740px] min-w-[50%] text-center"
            sx={{ color: '#000000', fontSize: { xs: '15px', md: '30px' }, fontWeight: '400' }}
          >
            {aboutUsData.footerCta.text}
          </Typography>
        </Box>
      )}
    </>
  );
}

export default AboutUs;
