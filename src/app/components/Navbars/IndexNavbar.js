/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
// components
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Box, Icon, Typography, useTheme } from '@mui/material';
import Dropdown from '../Dropdowns/Dropdown';
import IndexDropdown from '../Dropdowns/IndexDropdown';

export default function Navbar(props) {
  const theme = useTheme();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const socials = [
    { name: 'instagram', icon: 'fa-instagram', path: '' },
    { name: 'facebook', icon: 'fa-facebook', path: '' },
    { name: 'twitter', icon: 'fa-x-twitter', path: '' },
    { name: 'youtube', icon: 'fa-youtube', path: '' },
    { name: 'vimeo', icon: 'fa-vimeo', path: '' },
  ];
  const pages = [
    {
      name: 'WILLKOMMEN',
      path: '',
      children: [],
    },
    {
      name: 'DIE SCHULE',
      path: '',
      children: [
        {
          name: 'Das Leitungsteam',
          path: '',
        },
        {
          name: 'Die Dozent*innen',
          path: '',
        },
        {
          name: 'Die Studierenden',
          path: '',
        },
        {
          name: 'Eigene Arbeit',
          path: '',
        },
        {
          name: 'Die Abschlussprojekte',
          path: '',
        },
      ],
    },
    {
      name: 'AUSBILDUNG',
      path: '',
      children: [
        {
          name: 'ausbildung',
          path: '',
        },
        {
          name: 'Ausbildungsstruktur',
          path: '',
        },
        {
          name: 'Auditions',
          path: '',
        },
      ],
    },
    {
      name: 'FORTBILDUNG',
      path: '',
      children: [],
    },
    {
      name: 'BLOG',
      path: '',
      children: [],
    },
    {
      name: 'KONTAKT',
      path: '',
      children: [],
    },
  ];
  const buttons = [
    {
      variant: 'contained',
      startIcon: <ArrowCircleRightIcon />,
      name: 'To your profile',
    },
  ];

  return (
    <>
      <nav
        style={{
          background: theme.palette.background.default,
        }}
        className={`top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow`}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link to="/">
              <Typography
                color="text.primary"
                sx={{
                  fontWeight: '700',
                  fontSize: '24px',
                  lineHeight: '32px',
                  marginRight: '14px',
                }}
                className="leading-relaxed inline-block py-2 whitespace-nowrap uppercase"
              >
                CDSH
              </Typography>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <Box
            color="background.default"
            className={
              'lg:flex flex-grow items-center lg:bg-opacity-0 lg:shadow-none' +
              (navbarOpen ? ' block' : ' hidden')
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-row list-none mr-auto">
              {socials.map((social) => {
                const { name, icon, path } = social;
                return (
                  <li className="flex items-center" key={name}>
                    <a
                      className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                      target={path}
                    >
                      <Icon
                        sx={{
                          color: 'text.secondary',
                          width: '100%',
                          height: '100%',
                          fontSize: '18px',
                          transition: 'all 0.2s',
                          ':hover': {
                            color: 'text.primary',
                            fontSize: '20px',
                          },
                        }}
                        className={`fab ${icon}`}
                      />
                      {/* <i
                        className={` fab ${icon} text-lg leading-lg color-[${theme.palette.text.primary}]`}
                      /> */}
                      {/* <span className="lg:hidden inline-block ml-2">{name}</span> */}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {pages.map((page) => {
                return (
                  <li className="flex items-center" key={page.name}>
                    <Dropdown {...page} />
                  </li>
                );
              })}
              {/* {buttons.map((button) => {
                const { name, ...buttonProps } = button;
                return (
                  <li className="flex items-center" key={name}>
                    <Button component="label" {...buttonProps}>
                      {name}
                    </Button>
                  </li>
                );
              })} */}
            </ul>
          </Box>
        </div>
      </nav>
    </>
  );
}
