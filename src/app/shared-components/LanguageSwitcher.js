import { Box, Button, ListItemIcon, ListItemText, MenuItem, Popover, Typography } from '@mui/material';
import { changeLanguage } from 'app/store/i18nSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const languages = [
  { id: 'en', title: 'EN', flag: 'gb' },
  { id: 'de', title: 'DE', flag: 'de' },
  /* { id: 'es', title: 'ES', flag: 'es' },
	{ id: 'it', title: 'IT', flag: 'it' } */
];

function LanguageSwitcher(props) {
  const dispatch = useDispatch();

  const currentLanguageId = useSelector(({ i18n }) => i18n.language);
  const currentLanguage = languages.find((lng) => lng.id === currentLanguageId);

  const [menu, setMenu] = useState(null);

  const langMenuClick = (event) => {
    setMenu(event.currentTarget);
  };

  const langMenuClose = () => {
    setMenu(null);
  };

  function handleLanguageChange(lng) {
    dispatch(changeLanguage(lng.id));
    langMenuClose();
  }

  return (
    <>
      <Button onClick={langMenuClick} sx={{ paddingRight: Boolean(menu) ? '18px' : '0' }}>
        <Box
          component="img"
          sx={{ width: '20px', aspectRatio: 'auto 25 / 15' }}
          src={`assets/images/flags/${currentLanguage.flag}.png`}
          alt={currentLanguage.title}
        />

        <Typography className="mx-2 font-semibold uppercase" color="textSecondary">
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
          root: {
            position: 'absolute !important',
          },
        }}
      >
        {languages.map((lng) => (
          <MenuItem key={lng.id} onClick={() => handleLanguageChange(lng)}>
            <ListItemIcon className="min-w-40 justify-center">
              <img
                className="min-w-20"
                width={25}
                height={15}
                src={`assets/images/flags/${lng.flag}.png`}
                alt={lng.title}
              />
            </ListItemIcon>
            <ListItemText
              primary={lng.title}
              sx={{
                '& .MuiTypography-root': {
                  lineHeight: 'normal',
                },
              }}
            />
          </MenuItem>
        ))}
      </Popover>
    </>
  );
}

export default LanguageSwitcher;
