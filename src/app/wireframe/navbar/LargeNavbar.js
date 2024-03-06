import { Box, MenuItem, Select, Typography } from '@mui/material';
import ExternalLink from 'app/components/Buttons/ExternalLink';
import Dropdown from 'app/components/Dropdowns/Dropdown';
import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

function LargeNavbar(props) {
  const { socials, pages } = props;

  return (
    <Box className="px-4 mx-auto flex flex-wrap items-center justify-between w-full h-full">
      <Link to="/">
        <Typography
          color="text.primary"
          sx={{
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '32px',
            marginRight: '14px',
          }}
          className="py-2 whitespace-nowrap uppercase"
        >
          CDSH
        </Typography>
      </Link>
      <Box className="lg:flex flex-grow items-center">
        <ul className="flex flex-row list-none mr-auto">
          {socials.map(({ name, icon, path }) => (
            <li className="flex items-center" key={name}>
              <ExternalLink path={path} icon={icon} />
            </li>
          ))}
        </ul>
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          {pages.map((page) => (
            <li className="flex items-center" key={page.name}>
              <Dropdown {...page} />
            </li>
          ))}
          <li>
            <LanguageSwitcher />
            {/* <Select value="en">
              <MenuItem value="en">en</MenuItem>
              <MenuItem value="de">de</MenuItem>
              <MenuItem value="es">es</MenuItem>
              <MenuItem value="it">it</MenuItem>
            </Select> */}
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default LargeNavbar;
