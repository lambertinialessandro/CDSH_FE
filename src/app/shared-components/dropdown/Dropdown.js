import { Card, Typography, useTheme } from '@mui/material';
import { createPopper } from '@popperjs/core';
import { createRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Dropdown(props) {
  const theme = useTheme();
  const { name, path, children } = props;
  const hasChildren = children.length > 0;

  const btnDropdownRef = createRef();
  const popOverDropdownRef = createRef();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    createPopper(btnDropdownRef.current, popOverDropdownRef.current, {
      placement: 'bottom-start',
    });
    setDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Typography
        component={hasChildren ? 'p' : Link}
        ref={btnDropdownRef}
        to={hasChildren ? undefined : path}
        color="text.primary"
        sx={{
          fontWeight: 600,
          fontSize: '13px',
          lineHeight: '20px',
          cursor: hasChildren ? 'default' : 'pointer',
          ':hover': {
            color: hasChildren ? '#8b8b8b' : theme.palette.primary.main,
          },
        }}
        className="px-3 py-4 lg:py-2 flex items-center uppercase"
      >
        {name}
      </Typography>
      <Card
        ref={popOverDropdownRef}
        color="text.primary"
        className={
          (isDropdownVisible && children.length !== 0 ? 'block ' : 'hidden ') +
          'text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        {children.map((child) => {
          const { name, path } = child;
          return (
            <Typography
              color="text.primary"
              component={Link}
              key={name}
              to={path}
              className="py-2 px-4 block w-full whitespace-nowrap bg-transparent"
              sx={{
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '16px',
                ':hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {name}
            </Typography>
          );
        })}
      </Card>
    </div>
  );
}

export default Dropdown;
