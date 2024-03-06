import { Card, Typography, useTheme } from '@mui/material';
import { createPopper } from '@popperjs/core';
import { createRef, useState } from 'react';
import { Link } from 'react-router-dom';

function DropdownOpened(props) {
  const theme = useTheme();
  const { name, path, children } = props;

  return (
    <div>
      <Link to={path}>
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
          className="px-3 py-4 pb-2 flex items-center uppercase"
        >
          {name}
        </Typography>
      </Link>
      <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
        {children.map((child) => {
          const { name, path } = child;
          return (
            <li className="flex items-center" key={name}>
              <Typography
                color="primary"
                component={Link}
                to={path}
                className="py-2 font-normal block w-full whitespace-nowrap bg-transparent"
                sx={{
                  fontSize: '14px',
                  lineHeight: '16px',
                  paddingX: '36px',
                  ':hover': {
                    color: theme.palette.primary.dark,
                  },
                }}
              >
                {name}
              </Typography>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DropdownOpened;
