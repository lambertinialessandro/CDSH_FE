import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import useParallaxY from 'app/shared-components/hooks/useParallaxY';
import { motion } from 'framer-motion';
import { Fragment, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function ImageAnimation({ item, height }) {
  const imgRef = useRef(null);
  const y = useParallaxY(imgRef, height * 0.05);

  return (
    <motion.div
      ref={imgRef}
      style={{ height }}
      className="w-full overflow-hidden border border-black"
    >
      <motion.img
        src={item.src}
        alt={item.title || ''}
        className="w-full h-full object-cover"
        style={{ y, willChange: 'transform' }}
        initial={{ scale: 1.05, opacity: 0 }}
        whileInView={{ scale: 1.1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
    </motion.div>
  );
}

function Carousel({ items, gap, itemWidth, itemHeight, Addon = Fragment }) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [index, setIndex] = useState(0);

  const itemsPerPage = useMemo(() => {
    // shrink item width dynamically for small screens
    if (containerWidth < 500) return 1;
    if (containerWidth < 900) return 2;
    return Math.floor(containerWidth / (itemWidth + gap)) || 1;
  }, [containerWidth, itemWidth, gap]);

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
    <Box className="w-full flex">
      <Box ref={containerRef} className="w-full flex flex-col overflow-hidden">
        <Box {...swipeHandlers}>
          <Box
            className="flex"
            sx={{
              gap: `${gap}px`,
              mb: 3,
              transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1)',
              transform: `translateX(-${index * (containerWidth / itemsPerPage)}px)`,
              width: items.length * (containerWidth / itemsPerPage),
            }}
          >
            {items.map((item, idx) => (
              <Box
                key={idx}
                className="flex flex-col"
                sx={{
                  width: `${containerWidth / itemsPerPage - gap}px`,
                  flexShrink: 0,
                }}
              >
                <ImageAnimation item={item} height={itemHeight} />
                <Addon item={item} />
              </Box>
            ))}
          </Box>
        </Box>
        {/* Controls */}
        <Box className="w-full flex justify-between items-center mt-2">
          <IconButton
            onClick={handlePrev}
            disabled={isLeftDisabled}
            size="small"
            sx={{
              color: 'black',
              '&:hover': { color: 'gray', backgroundColor: 'transparent' },
            }}
          >
            <ArrowBack fontSize="inherit" />
          </IconButton>
          <IconButton
            onClick={handleNext}
            disabled={isRightDisabled}
            size="small"
            sx={{
              color: 'black',
              '&:hover': { color: 'gray', backgroundColor: 'transparent' },
            }}
          >
            <ArrowForward fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Carousel;
