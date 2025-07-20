import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import useParallaxY from 'app/shared-components/hooks/useParallaxY';
import { motion } from 'framer-motion';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function ImageAnimation(props) {
  const { item } = props;
  const imgRef = useRef(null); // Create a new ref for each image
  const y = useParallaxY(imgRef, 195 * 0.05); // Adjust distance as needed

  return (
    <motion.div ref={imgRef} className="w-full h-[195px] overflow-hidden">
      <motion.img
        src={item.img}
        alt={item.title || ``}
        className="w-full h-full object-cover"
        style={{ y: y, willChange: 'transform' }}
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
    </motion.div>
  );
}

const items = [
  {
    img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-01.jpg`,
    title: 'Work in Progress 2025: meeting point',
    description:
      'Jedes Jahr finden unsere Work in Progress Vorstellungen und unsere Abschlussvorstellungen unter einem anderen Motto statt.',
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-02.jpg`,
    title: 'Abschlussprojekt 2024 : joy',
    description:
      'Jedes Jahr findet das Abschlussprojekt, die finale Prüfungsleistung unserer Absolvent*innen, unter einem anderen Thema statt.',
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-03.jpg`,
    title: 'What does Looking taste like?',
    description:
      'Die zentrale Prüfungsleistung im zweiten Ausbildungsjahr der CDSH besteht in der Realisierung einer eigenen Kurzproduktion.',
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-04.jpg`,
    title: 'Abschlussprojekt 2023: KONTINUUM',
    description:
      'Jedes Jahr findet das Abschlussprojekt, die finale Prüfungsleistung unserer Absolvent*innen, unter einem anderen Thema statt.',
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-05.jpg`,
    title: 'Title',
    description: 'Description',
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-06.jpg`,
    title: 'Title',
    description: 'Description',
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-07.jpg`,
    title: 'Title',
    description: 'Description',
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-08.jpg`,
    title: 'Title',
    description: 'Description',
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-09.jpg`,
    title: 'Title',
    description: 'Description',
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/images/gallery/cdsh-galley-10.jpg`,
    title: 'Title',
    description: 'Description',
  },
];

const ITEM_WIDTH = 321;
const GAP = 32;
function Carousel(props) {
  const {} = props;

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [index, setIndex] = useState(0);

  const itemsPerPage = useMemo(() => {
    return Math.floor(containerWidth / (ITEM_WIDTH + GAP)) || 1;
  }, [containerWidth]);

  const maxItems = items.length;
  const maxIndex = Math.max(0, maxItems - itemsPerPage);
  const isLeftDisabled = index === 0;
  const isRightDisabled = index >= maxIndex;

  const handleNext = () => {
    if (index < maxIndex) setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex((prev) => prev - 1);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: false,
  });

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  if (maxItems === 0) {
    return <Typography>No items to display.</Typography>;
  }

  return (
    <Box className="w-full flex px-[16px] sm:px-[32px] md:px-[45px]">
      <Box ref={containerRef} className="w-full flex flex-col overflow-hidden">
        <Box {...swipeHandlers}>
          <Box
            className="flex gap-[32px] mb-[24px]"
            sx={{
              transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
              transform: `translateX(-${index * (ITEM_WIDTH + GAP)}px)`,
              width: items.length * (ITEM_WIDTH + GAP),
            }}
          >
            {items.map((item, idx) => {
              return (
                  <Box
                    key={idx}
                    className="flex flex-col justify-start items-start"
                    sx={{ width: `${ITEM_WIDTH}px`, flexShrink: 0 }}
                  >
                    <ImageAnimation item={item} />
                    <Typography className="text-[30px] py-[16px]" sx={{ lineHeight: 'normal' }}>
                      {item.title}
                    </Typography>
                    <Typography className="text-[15px]" sx={{ lineHeight: 1.25 }}>
                      {item.description}
                    </Typography>
                  </Box>
              );
            })}
          </Box>
        </Box>
        <Box className="w-full flex justify-between items-center">
          <IconButton
            onClick={handlePrev}
            disabled={isLeftDisabled}
            disableRipple
            sx={{
              color: 'black',
              '&:hover': {
                color: 'white',
                backgroundColor: 'transparent',
              },
            }}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            onClick={handleNext}
            disabled={isRightDisabled}
            disableRipple
            sx={{
              color: 'black',
              '&:hover': {
                color: 'white',
                backgroundColor: 'transparent',
              },
            }}
          >
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Carousel;
