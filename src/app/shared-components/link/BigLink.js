import AncorLink from './AncorLink';

function BigLink(props) {
  const { href, children, extraSx = {}, lineHeight = 5, color = '#000000', ...othProps } = props;

  return (
    <AncorLink
      extraSx={{ ...extraSx, color: color, fontSize: '80px', fontWeight: '400' }}
      lineHeight={lineHeight}
      color={color}
      {...othProps}
    >
      {children}
    </AncorLink>
  );
}

export default BigLink;
