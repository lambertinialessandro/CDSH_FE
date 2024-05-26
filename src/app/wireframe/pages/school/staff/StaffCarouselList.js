import { Box, Typography } from '@mui/material';
import TitleLined from 'app/wireframe/sharedComponents/TitleLined';
import { PerpetualRoundCarousel } from 'app/wireframe/sharedComponents/carouselView';
import { motion } from 'framer-motion';
import { useState } from 'react';

function StaffCarouselList(props) {
	const { items, onBuildItem, initPos = 0 } = props;
	const [selectedItem, setSelectedItem] = useState(items[initPos]);

	return (
		<>
			<Box className="w-full" sx={{ paddingBottom: '30px' }}>
				<PerpetualRoundCarousel
					width={350}
					height={200}
					initPos={initPos}
					items={items}
					Component={onBuildItem}
					onChange={idx => {
						setSelectedItem(items[idx]);
					}}
					sigma={2}
				/>
				{selectedItem && (
					<Box key={selectedItem.name} className="flex flex-col w-full">
						<Box className="flex justify-between">
							<Box className="flex flex-col">
								<Typography variant="h4" color="text.primary">
									Résumé
								</Typography>
								<motion.div
									initial={{ opacity: 0, y: 40 }}
									animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
								>
									<TitleLined title={selectedItem.name} fontSize="62px" />
								</motion.div>
								{selectedItem?.role?.length > 0 && (
									<Box className="flex" sx={{ gap: '16px' }}>
										<Typography variant="h5" color="text.primary">
											role:
										</Typography>
										<motion.div
											initial={{ opacity: 0, y: 40 }}
											animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
										>
											<Typography variant="h6" color="text.secondary">
												{selectedItem.role}
											</Typography>
										</motion.div>
									</Box>
								)}
								{selectedItem?.subjects?.length > 0 && (
									<Box className="flex" sx={{ gap: '16px' }}>
										<Typography variant="h5" color="text.primary">
											subject taught:
										</Typography>
										<motion.div
											initial={{ opacity: 0, y: 40 }}
											animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
										>
											<Typography variant="h6" color="text.secondary">
												{selectedItem.subjects.join(', ')}
											</Typography>
										</motion.div>
									</Box>
								)}
							</Box>
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
							>
								<img
									alt={selectedItem.name}
									src={selectedItem.src}
									style={{ width: '300px', height: '300px' }}
								/>
							</motion.div>
						</Box>
						{selectedItem?.description?.length > 0 && (
							<Box className="flex flex-col">
								<motion.div
									initial={{ opacity: 0, y: 40 }}
									animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
								>
									<Typography variant="h6" color="text.primary">
										{selectedItem.name}
									</Typography>
								</motion.div>

								<Box className="flex flex-col" sx={{ gap: '16px' }}>
									{selectedItem.description.map((text, idx) => (
										<motion.div
											key={idx}
											initial={{ opacity: 0, y: 40 }}
											animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
										>
											<Typography variant="p" color="text.secondary">
												{text}
											</Typography>
										</motion.div>
									))}
								</Box>
							</Box>
						)}
					</Box>
				)}
			</Box>
		</>
	);
}

export default StaffCarouselList;
