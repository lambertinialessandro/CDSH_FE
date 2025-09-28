import { Box, Typography } from '@mui/material';

function KooperationenLogos() {
  const logoRows = [
    ['Logo Platzhalter', 'Logo Platzhalter', 'Logo Platzhalter', 'Logo Platzhalter'],
    ['Logo Platzhalter', 'Logo Platzhalter', 'Logo Platzhalter'],
  ];

  return (
    <Box component="section" className="py-[110px] px-[45px] flex flex-col justify-center items-center">
      <Typography className="mb-[110px]" sx={{ color: '#000000', fontSize: '80px', fontWeight: '400' }}>
        Kooperationen
      </Typography>
      <Box className="flex flex-col justify-center items-center gap-[36px]">
        {logoRows.map((row, idx) => (
          <Box key={idx} className="flex gap-[24px]">
            {row.map((text, idx) => (
              <Box key={idx} className="rounded-full px-[24px] py-[12px]" sx={{ background: '#000000' }}>
                <Typography
                  sx={{
                    color: '#ffffff',
                    fontSize: '30px',
                    fontWeight: '400',
                  }}
                >
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default KooperationenLogos;
