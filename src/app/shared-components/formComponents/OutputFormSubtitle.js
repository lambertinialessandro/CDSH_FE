import { Typography } from '@mui/material';

function OutputFormSubtitle(props) {
  const { input } = props;
  const { label, margin = '' } = input;

  return (
    <Typography
      sx={{
        fontSize: {xs: "15px", md: '30px'},
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

export default OutputFormSubtitle;
