import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, Tooltip } from '@mui/material';
import { selectCurrTheme, setThemeSettings } from 'app/store/app/mainSlice';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

function ThemeSwitcher() {
	const { t } = useTranslation();
	const message = t('message');

	const dispatch = useDispatch();
	const mode = useSelector(selectCurrTheme);

	const themeModeMapping = {
		light: {
			nextMode: 'default',
			title: message.dark,
			icon: <DarkModeIcon />
		},
		// dark
		default: {
			nextMode: 'light',
			title: message.light,
			icon: <LightModeIcon />
		}
	};

	const { title, icon } = themeModeMapping[mode];

	const switchThemeMode = () => {
		const { nextMode } = themeModeMapping[mode];
		dispatch(setThemeSettings(nextMode));
	};

	return (
		<Tooltip title={title} placement="bottom">
			<IconButton onClick={switchThemeMode} size="large" color="primary">
				{icon}
			</IconButton>
		</Tooltip>
	);
}

export default ThemeSwitcher;
