import { Box, useTheme } from '@mui/material';
import { useMemo } from 'react';
import SmallNavbar from './SmallNavbar';
import LargeNavbar from './LargeNavbar';

function Navbar(props) {
  const { fixed } = props;

  const socials = useMemo(
    () => [
      { name: 'instagram', icon: 'fa-instagram', path: 'https://www.instagram.com/_cdsh_/' },
      {
        name: 'facebook',
        icon: 'fa-facebook',
        path: 'https://www.facebook.com/cdsh.contemporarydanceschoolhamburg/',
      },
      { name: 'twitter', icon: 'fa-x-twitter', path: 'https://twitter.com/CDSH_tweet' },
      {
        name: 'youtube',
        icon: 'fa-youtube',
        path: 'https://www.youtube.com/@cdsh-contemporarydancescho3235',
      },
      { name: 'vimeo', icon: 'fa-vimeo', path: 'https://vimeo.com/cdsh' },
    ],
    []
  );
  const pages = useMemo(
    () => [
      {
        name: 'WILLKOMMEN',
        path: '/home',
        children: [],
      },
      {
        name: 'DIE SCHULE',
        path: '/school',
        children: [
          {
            name: 'Das Leitungsteam',
            path: '/school/staff',
          },
          {
            name: 'Die Dozent*innen',
            path: '/school/faculty',
          },
          {
            name: 'Die Studierenden',
            path: '/school/students',
          },
          {
            name: 'Own Work', // TODO non c'è la pagina tedesca
            path: '/school/own-work',
          },
          {
            name: 'Eigene Arbeit',
            path: '/school/final-projects',
          },
          {
            name: 'Die Abschlussprojekte',
            path: '/school/fiends-and-partner',
          },
        ],
      },
      {
        name: 'AUSBILDUNG',
        path: 'training',
        children: [
          {
            name: 'Ausbildungsstruktur',
            path: '/training/training-structure',
          },
          {
            name: 'Auditions',
            path: '/training/auditions',
          },
          {
            name: 'Infos for international students',
            path: '/training/infos-for-international-students',
          },
        ],
      },
      {
        name: 'FORTBILDUNG',
        path: '/further-education',
        children: [],
      },
      {
        name: 'BLOG',
        path: '/blog',
        children: [],
      },
      {
        name: 'KONTAKT',
        path: '/contact',
        children: [
          {
            name: 'Newsletter',
            path: '/contact/newsletter',
          },
        ],
      },
    ],
    []
  );

  const theme = useTheme();

  return (
    <Box sx={{ marginBottom: fixed && '72px' }}>
      <nav
        style={{
          background: theme.palette.background.default,
        }}
        className={`top-0 z-50 w-full flex flex-wrap items-center justify-between px-12 py-3 ${
          fixed && 'fixed'
        }`}
      >
        <Box className="lg:hidden w-full">
          <SmallNavbar socials={socials} pages={pages} />
        </Box>
        <Box className="hidden lg:block w-full">
          <LargeNavbar socials={socials} pages={pages} />
        </Box>
      </nav>
    </Box>
  );
}

export default Navbar;
