import { Box, Link, Typography, useMediaQuery } from '@mui/material';

function KooperationenLogos({ title, list }) {
  const displayList = list;

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
        {title}
      </Typography>

      <Box className="flex flex-wrap justify-center gap-[24px] w-full max-w-[1200px]" sx={{}}>
        {displayList.map(({ name, link, logo, logo_alt }, idx) => (
          <Box
            key={idx}
            component={link ? Link : Box}
            href={link}
            {...(link && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
            className="rounded-full px-[24px] py-[12px] flex justify-center items-center no-underline"
            sx={{ background: '#000', transition: 'background 0.3s ease', minWidth: '280px' }}
          >
            {logo ? (
              <Box
                component="img"
                src={logo}
                alt={logo_alt || name}
                sx={{
                  height: { xs: '20px', md: '35px' },
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            ) : (
              <Typography
                sx={{
                  color: '#fff',
                  fontSize: { xs: '15px', md: '30px' },
                  fontWeight: 400,
                  whiteSpace: 'nowrap',
                }}
              >
                {name}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default KooperationenLogos;
