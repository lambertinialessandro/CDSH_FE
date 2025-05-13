import { Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

function DropdownOpened(props) {
	const theme = useTheme();
	const { name, path, onClick, children } = props;
	const hasChildren = children.length > 0;

	return (
		<div>
			<Typography
				component={hasChildren ? 'p' : Link}
				onClick={onClick}
				to={hasChildren ? undefined : path}
				color={hasChildren ? 'white' : 'primary'}
				sx={{
					fontWeight: 600,
					fontSize: '13px',
					lineHeight: '20px',
					cursor: hasChildren ? 'default' : 'pointer',
					':hover': {
						color: hasChildren ? 'white' : theme.palette.primary.main
					}
				}}
				className="px-3 py-4 lg:py-2 flex items-center uppercase"
			>
				{name}
			</Typography>
			<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
				{children.map(child => {
					const { name, path } = child;
					return (
						<li className="flex items-center" key={name}>
							<Typography
								color="primary"
								component={Link}
								to={path}
								onClick={onClick}
								className="py-2 font-normal block w-full whitespace-nowrap bg-transparent"
								sx={{
									fontSize: '14px',
									lineHeight: '16px',
									paddingX: '36px',
									':hover': {
										color: theme.palette.primary.dark
									}
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
