import { Button, ListItemIcon, ListItemText, MenuItem, Popover, Typography } from '@mui/material';
import { useState } from 'react';

const languages = [
  { id: 'en', title: 'EN', flag: 'gb' },
  { id: 'de', title: 'DE', flag: 'de' },
  { id: 'es', title: 'ES', flag: 'es' },
  { id: 'it', title: 'IT', flag: 'it' },
];

function LanguageSwitcher(props) {
  //const currentLanguageId = useSelector(({ i18n }) => i18n.language);
  const currentLanguage = { id: 'en', title: 'EN', flag: 'gb' }; //languages.find(lng => lng.id === currentLanguageId);

  const [menu, setMenu] = useState(null);

  const langMenuClick = (event) => {
    setMenu(event.currentTarget);
  };

  const langMenuClose = () => {
    setMenu(null);
  };

  function handleLanguageChange(lng) {
    // dispatch(changeLanguage(lng.id));

    langMenuClose();
  }

  return (
    <>
      <Button className="h-40 w-64" onClick={langMenuClick}>
        <img
          className="mx-4 min-w-20"
          src={require(`../../assets/img/flags/${currentLanguage.flag}.png`)}
          alt={currentLanguage.title}
        />

        <Typography className="mx-4 font-semibold uppercase" color="textSecondary">
          {currentLanguage.id}
        </Typography>
      </Button>

      <Popover
        open={Boolean(menu)}
        anchorEl={menu}
        onClose={langMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{
          paper: 'py-8',
        }}
      >
        {languages.map((lng) => (
          <MenuItem key={lng.id} onClick={() => handleLanguageChange(lng)}>
            <ListItemIcon className="min-w-40 justify-center">
              <img
                className="min-w-20"
                width={25}
                height={15}
                src={require(`../../assets/img/flags/${lng.flag}.png`)}
                alt={lng.title}
              />
            </ListItemIcon>
            <ListItemText primary={lng.title} />
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}

export default LanguageSwitcher;
