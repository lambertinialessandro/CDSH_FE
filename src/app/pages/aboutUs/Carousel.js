import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import AnchorLink from 'app/shared-components/link/AnchorLink';
import { useState } from 'react';

function Carousel(props) {
  const {} = props;

  const items = [
    {
      img: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-21 um 17.23.58.png`,
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-21 um 17.24.14.png`,
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/images/aboutUs/Bildschirmfoto 2025-02-21 um 17.23.58.png`,
    },
  ];

  const maxItems = items.length;

  const [index, setIndex] = useState(0);
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const nextItem = () => {
    const nextIndex = index + 1;

    if (index == 0) {
      setIsLeftDisabled(false);
    }
    if (index == maxItems - 1) {
      setIsRightDisabled(true);
    }

    if (nextIndex < maxItems) {
      setIndex(nextIndex);
    }
  };
  const prevItem = () => {
    const nextIndex = index - 1;

    if (nextIndex == 0) {
      setIsLeftDisabled(true);
    }
    if (index == maxItems - 1) {
      setIsRightDisabled(false);
    }

    if (nextIndex >= 0) {
      setIndex(nextIndex);
    }
  };

  return (
    <Box className="w-full flex flex-col px-[45px]">
      <Box
        className="w-max flex justify-start items-start gap-[32px] mb-[24px]"
        sx={{
          transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
          transform: `translate(-${(index / maxItems) * 100}%, 0)`,
        }}
      >
        {items.map((item, idx) => {
          return (
            <Box key={idx} className="w-[700px] flex flex-col justify-start items-start">
              <Box component="img" className="w-full h-[470px] object-cover" src={item.img} />
            </Box>
          );
        })}
      </Box>
      <Box className="w-full flex justify-between items-center">
        <IconButton onClick={prevItem} disabled={isLeftDisabled}>
          <ArrowBack />
        </IconButton>
        <IconButton onClick={nextItem} disabled={isRightDisabled}>
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Carousel;
