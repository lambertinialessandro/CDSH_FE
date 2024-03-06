const { Icon, Link } = require('@mui/material');

function ExternalLink(props) {
  const { path, icon } = props;

  return (
    <Link
      className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
      sx={{
        textDecoration: 'none',
        ':hover': {
          scale: '1.2',
        },
      }}
      target="_blank"
      rel="noreferrer"
      href={path}
    >
      <Icon
        sx={{
          color: 'text.secondary',
          fontSize: '18px',
          transition: 'all 0.2s',
          ':hover': {
            color: 'text.primary',
          },
        }}
        className={`fab ${icon}`}
      />
    </Link>
  );
}

export default ExternalLink;
