import { Typography } from '@mui/material';

function AncorLink(props) {
  const { href, children, extraSx = {}, lineHeight = 1, color = '#000000', ...othProps } = props;

  return (
    <Typography
      component="a"
      href={href}
      sx={{
        lineHeight: '1',
        alignContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        textDecoration: 'none',
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: 0,
          height: `${lineHeight}px`,
          backgroundColor: color,
          transition: 'width 0.4s ease',
        },
        '&:hover::after': {
          width: '100%',
        },

        ...extraSx,
      }}
      {...othProps}
    >
      {children}
    </Typography>
  );
}

export default AncorLink;
