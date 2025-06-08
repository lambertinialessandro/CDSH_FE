import { Box, Typography } from '@mui/material';

function Students() {
  return (
    <>
      <Box
        component="section"
        className="py-[110px] flex flex-col justify-center items-center"
        sx={{ background: '#eae7f8' }}
      >
        <Typography className="mb-[110px]" sx={{ color: '#000000', fontSize: '80px', fontWeight: '400' }}>
          Students
        </Typography>
      </Box>
    </>
  );
}

export default Students;
