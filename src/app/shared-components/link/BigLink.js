import AnchorLink from './AnchorLink';

function BigLink(props) {
  const { children, extraSx = {}, fontSize = '60px', lineHeight = 5, color = '#000000', ...othProps } = props;

  return (
    <AnchorLink
      extraSx={{ ...extraSx, color: color, fontSize: fontSize, fontWeight: '400' }}
      lineHeight={lineHeight}
      color={color}
      {...othProps}
    >
      {children}
    </AnchorLink>
  );
}

export default BigLink;
