/* // AnchorLink.js
import { Typography } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { forwardRef } from 'react';

const AnchorLink = forwardRef(function AnchorLink(props, ref) {
  const {
    href,
    to,
    children,
    extraSx = {},
    underlineThickness = 2, // px
    color = '#000000',
    bottomOffset = 0, // px offset for underline relative to text baseline
    ...othProps
  } = props;

  const location = useLocation?.() || { pathname: typeof window !== 'undefined' ? window.location.pathname : '' };
  const path = to ?? href ?? '#';
  const isExternal = typeof path === 'string' && /^(https?:|mailto:|tel:)/.test(path);

  // default target/rel for external links
  const target = othProps.target ?? (isExternal ? '_blank' : undefined);
  const rel = othProps.rel ?? (isExternal ? 'noopener noreferrer' : undefined);

  // mark active for internal links
  const isActive = !isExternal && path && location && location.pathname === path;

  const baseSx = {
    display: 'inline-block',
    position: 'relative',
    textDecoration: 'none',
    color,
    lineHeight: 1,
    // underline pseudo-element
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: `${-bottomOffset}px`,
      width: '0%',
      height: `${underlineThickness}px`,
      backgroundColor: color,
      transition: 'width 260ms cubic-bezier(.2,.9,.2,1)',
      willChange: 'width',
    },
    // hover / focus / active
    '&:hover::after, &:focus::after, &.active::after': {
      width: '100%',
    },
    // visible focus ring for keyboard users
    '&:focus-visible': {
      outline: '3px solid rgba(0,0,0,0.12)',
      outlineOffset: 3,
      borderRadius: 1,
    },
    // honor reduced motion
    '@media (prefers-reduced-motion: reduce)': {
      '&::after': {
        transition: 'none',
      },
    },
    // merge user-provided sx
    ...extraSx,
  };

  if (isExternal) {
    return (
      <Typography
        component="a"
        ref={ref}
        href={path}
        target={target}
        rel={rel}
        sx={baseSx}
        {...othProps}
      >
        {children}
      </Typography>
    );
  }

  // internal (react-router) link
  return (
    <Typography
      component={RouterLink}
      ref={ref}
      to={path}
      className={isActive ? 'active' : undefined}
      sx={baseSx}
      {...othProps}
    >
      {children}
    </Typography>
  );
});

export default AnchorLink;
 */

import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function AnchorLink(props) {
  const { href, children, extraSx = {}, lineHeight = "1px", color = '#000000', ...othProps } = props;

  return (
    <Typography
      component={Link}
      to={href}
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
          height: lineHeight,
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

export default AnchorLink;
