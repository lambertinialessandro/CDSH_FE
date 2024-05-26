import { Icon, Link } from '@mui/material';

function ExternalLink(props) {
	const { path, icon, fontSize = '16px', onClick } = props;

	return (
		<Link
			className="px-2 py-2 lg:py-2 flex items-center text-xs uppercase font-bold"
			sx={{
				textDecoration: 'none',
				':hover': {
					scale: '1.2'
				}
			}}
			target="_blank"
			rel="noreferrer"
			href={path}
			onClick={onClick}
		>
			<Icon
				sx={{
					color: 'text.secondary',
					fontSize,
					transition: 'all 0.2s',
					overflow: 'visible',
					':hover': {
						color: 'text.primary'
					}
				}}
				className={`fab ${icon}`}
			/>
		</Link>
	);
}

export default ExternalLink;
