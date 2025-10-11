import { Box, Typography, useMediaQuery } from '@mui/material';

function KooperationenLogos() {
  let logoRows = [
    'Logo Platzhalter',
    'Logo Platzhalter',
    'Logo Platzhalter',
    'Logo Platzhalter',
    'Logo Platzhalter',
    'Logo Platzhalter',
    'Logo Platzhalter',
  ];

  const isMobile = useMediaQuery('(max-width:900px)');
  if (isMobile) {
    logoRows = ['Logo Platzhalter', 'Logo Platzhalter', 'Logo Platzhalter', 'Logo Platzhalter', 'Logo Platzhalter'];
  }

  return (
    <Box
      component="section"
      className="px-[45px] flex flex-col justify-center items-center"
      sx={{ py: { xs: '55px', md: '110px' } }}
    >
      <Typography
        className=""
        sx={{
          color: '#000',
          fontSize: { xs: '35px', md: '80px' },
          mb: { xs: '55px', md: '110px' },
          fontWeight: 400,
        }}
      >
        Kooperationen
      </Typography>

      {/* Wrapper */}
      <Box className="flex flex-wrap justify-center gap-[24px] w-full max-w-[1200px]" sx={{}}>
        {logoRows.map((text, idx) => (
          <Box
            key={idx}
            className="rounded-full px-[24px] py-[12px]"
            sx={{ background: '#000', transition: 'background 0.3s ease' }}
          >
            <Typography
              sx={{
                color: '#fff',
                fontSize: { xs: '15px', md: '30px' },
                fontWeight: 400,
                whiteSpace: 'nowrap',
              }}
            >
              {text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default KooperationenLogos;
