import { Box } from '@mui/material';
import { useEffect } from 'react';

function TicketShop() {
  useEffect(() => {
    // Set up global variables
    window.SiteID = '96AC7254-5D0B-44CB-A9B0-14E2F7C5BC65';
    window.EID = 0;
    window.EDID = 0;
    window.Page = 'ListEvents';
    window.Width = '100%';
    window.Height = '400';
    window.BgdColor = '#FFFFFF';

    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://plugin.vbotickets.com/_assets/js/plugin.js';
    script.async = true;

    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Box
        component="section"
        className="px-[48px] flex flex-col justify-start items-center"
        sx={{
          gap: { xs: '24px', md: '48px' },
          pt: { xs: '130px', md: '160px' },
          pb: { xs: '55px', md: '110px' },
        }}
      >
        <Box
          className="max-w-[1280px] w-full flex flex-col"
          sx={{
            gap: { xs: '16px', md: '32px' },
          }}
        >
          <div id="MyEvent" style={{ width: '100%' }}></div>
        </Box>
      </Box>
    </>
  );
}

export default TicketShop;
