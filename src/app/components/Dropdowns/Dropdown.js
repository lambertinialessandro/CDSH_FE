import { createRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPopper } from '@popperjs/core';
import { Box, Card, Typography, useTheme } from '@mui/material';

function Dropdown(props) {
  const theme = useTheme();
  const { name, path, children } = props;

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
      <a href={path} ref={btnDropdownRef}>
        <Typography
          color="primary"
          sx={{
            fontWeight: 600,
            fontSize: '13px',
            lineHeight: '20px',
            ':hover': {
              color: theme.palette.primary.dark,
            },
          }}
          className="px-3 py-4 lg:py-2 flex items-center uppercase"
        >
          {name}
        </Typography>
      </a>
      <Card
        ref={popOverDropdownRef}
        color="primary"
        className={
          (isDropdownVisible && children.length !== 0 ? 'block ' : 'hidden ') +
          'text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        {children.map((child) => {
          const { name, path } = child;
          return (
            <Typography
              color="primary"
              component={Link}
              key={name}
              to={path}
              className="py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent"
              sx={{
                fontSize: '14px',
                lineHeight: '16px',
                ':hover': {
                  color: theme.palette.primary.dark,
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
