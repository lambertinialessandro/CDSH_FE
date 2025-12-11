import { Typography } from '@mui/material';

function OutputFormTitle(props) {
  const { input } = props;
  const { label, margin = '54px 0px' } = input;

  return (
    <Typography
      sx={{
        fontSize: { xs: '30px', md: '80px' },
        fontWeight: '400',
        lineHeight: 'normal',
        textAlign: 'center',
        margin: margin,
      }}
    >
      {label}
    </Typography>
  );
}

export default OutputFormTitle;
