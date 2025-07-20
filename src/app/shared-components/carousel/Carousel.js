import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import useParallaxY from 'app/shared-components/hooks/useParallaxY';
import { motion } from 'framer-motion';
import { Fragment, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function ImageAnimation(props) {
  const { item, height } = props;
  const imgRef = useRef(null); // Create a new ref for each image
  const y = useParallaxY(imgRef, height * 0.05); // Adjust distance as needed

  return (
    <motion.div ref={imgRef} className={`w-full h-[${height}px] overflow-hidden`}>
      <motion.img
        src={item.src}
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

function Carousel(props) {
  const {items, gap, itemWidth, itemHeight, Addon = Fragment} = props;

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [index, setIndex] = useState(0);

  const itemsPerPage = useMemo(() => {
    return Math.floor(containerWidth / (itemWidth + gap)) || 1;
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
            className={`flex gap-[${gap}px] mb-[24px]`}
            sx={{
              transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1) 0s',
              transform: `translateX(-${index * (itemWidth + gap)}px)`,
              width: items.length * (itemWidth + gap),
            }}
          >
            {items.map((item, idx) => {
              return (
                <>
                  <Box
                    key={idx}
                    className="flex flex-col justify-start items-start"
                    sx={{ width: `${itemWidth}px`, flexShrink: 0 }}
                  >
                    <ImageAnimation item={item} height={itemHeight}/>
                    <Addon item={item} />
                  </Box>
                </>
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
