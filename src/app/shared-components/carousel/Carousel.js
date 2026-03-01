import { ArrowBack, ArrowForward, Close } from '@mui/icons-material';
import { Box, IconButton, Typography, Dialog, DialogContent, Fade } from '@mui/material';
import useParallaxY from 'app/shared-components/hooks/useParallaxY';
import { motion } from 'framer-motion';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';

function ImageAnimation({ item, height }) {
  const imgRef = useRef(null);
  const y = useParallaxY(imgRef, height * 0.05);

  return (
    <motion.div key={item.title} ref={imgRef} style={{ height }} className="w-full overflow-hidden border border-black">
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

/* function MediaItem({ item, height }) {
  const isVideo = item.type === 'video' || item.src?.endsWith('.mp4');

  if (isVideo) {
    return (
      <Box
        component="video"
        src={item.src}
        controls
        playsInline
        sx={{
          height: `${height}px`,
          width: '100%',
          objectFit: 'cover',
          border: '1px solid black',
        }}
      />
    );
  }

  return (
    <Box
      component="img"
      src={item.src}
      alt={item.title || ''}
      sx={{
        height: `${height}px`,
        width: '100%',
        objectFit: 'cover',
        border: '1px solid black',
      }}
    />
  );
} */

/* function MediaItem({ item, height, onClick, fullscreen = false }) {
  const isVideo = item.type === 'video' || item.src?.endsWith('.mp4');

  const sx = {
    // In carousel: fixed height + cover. In fullscreen: max-constraints + contain.
    height: fullscreen ? 'auto' : `${height}px`,
    maxHeight: fullscreen ? '90vh' : 'none',
    width: fullscreen ? 'auto' : '100%',
    maxWidth: fullscreen ? '95vw' : 'none',
    
    objectFit: fullscreen ? 'contain' : 'cover',
    cursor: 'pointer',
    border: fullscreen ? 'none' : '1px solid black',
    transition: 'all 0.3s ease-in-out',
    display: 'block',
    margin: 'auto', // Centers the media
  };

  if (isVideo) {
    return (
      <Box
        component="video"
        src={item.src}
        controls={fullscreen} // Show controls only in fullscreen
        autoPlay={fullscreen}
        playsInline
        onClick={!fullscreen ? onClick : undefined}
        sx={sx}
      />
    );
  }

  return (
    <Box
      component="img"
      src={item.src}
      alt={item.title || ''}
      onClick={onClick}
      sx={sx}
    />
  );
} */

function MediaItem({ item, height, onClick, fullscreen = false }) {
  const isVideo = item.type === 'video' || item.src?.endsWith('.mp4');

  const sx = {
    cursor: 'pointer',
    display: 'block',
    margin: 'auto',
    // Logic for Carousel mode vs Fullscreen mode
    height: fullscreen ? 'auto' : `${height}px`,
    width: fullscreen ? 'auto' : '100%',

    // The "Safe Zone" padding
    maxHeight: fullscreen ? 'calc(100vh - 100px)' : 'none',
    maxWidth: fullscreen ? 'calc(100vw - 40px)' : 'none',

    // Maintains Aspect Ratio
    objectFit: fullscreen ? 'contain' : 'cover',
    border: fullscreen ? 'none' : '1px solid black',

    // Professional touch: soften the edges of media in fullscreen
    borderRadius: fullscreen ? '8px' : '0px',
    boxShadow: fullscreen ? '0px 10px 30px rgba(0,0,0,0.5)' : 'none',
  };

  if (isVideo) {
    return (
      <Box
        component="video"
        src={item.src}
        controls={fullscreen}
        autoPlay={fullscreen}
        playsInline
        onClick={!fullscreen ? onClick : undefined}
        sx={sx}
      />
    );
  }

  return <Box component="img" src={item.src} alt={item.title || ''} onClick={onClick} sx={sx} />;
}

function Image(props) {
  const { item, height } = props;

  return (
    <img src={item.src} alt={item.title || ``} style={{ height }} className="w-full object-cover border border-black" />
  );
}

/* function Carousel({ items, gap, itemWidth, itemHeight, Addon = undefined, stretch = false }) {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [index, setIndex] = useState(0);

  const itemsPerPage = useMemo(() => {
    // shrink item width dynamically for small screens
    if (stretch) {
      if (containerWidth < 375) return 1;
      if (containerWidth < 750) return 2;
    }
    return Math.floor(containerWidth / (itemWidth + gap)) || 1;
  }, [containerWidth, itemWidth, gap]);

  const maxItems = items.length;
  const maxIndex = Math.max(0, maxItems - itemsPerPage);
  const isLeftDisabled = index === 0;
  const isRightDisabled = index >= maxIndex;

  let actualWidth = 0;
  if (stretch && containerWidth < 800) {
    actualWidth = containerWidth / itemsPerPage;
  } else {
    actualWidth = Math.min(itemWidth, containerWidth / itemsPerPage);
  }

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
              transform: `translateX(-${index * (actualWidth + gap)}px)`,
              width: items.length * actualWidth,
            }}
          >
            {items.map((item, idx) => (
              <Box
                key={idx}
                className="flex flex-col"
                sx={{
                  width: `${actualWidth}px`,
                  flexShrink: 0,
                }}
              >
                <MediaItem item={item} height={itemHeight} />
                {Addon && <Addon item={item} />}
              </Box>
            ))}
          </Box>
        </Box>
        {/* Controls * /}
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
} */

function CarouselDialog(props) {
  const { initIndex = 0, maxItems = 0, handleCloseFullscreen, items } = props;

  const containerRef = useRef(null);
  const [index, setIndex] = useState(initIndex);

  const isLeftDisabled = index === 0;
  const isRightDisabled = index > maxItems - 2;

  const handleNextFullscreen = (e) => {
    e?.stopPropagation?.();
    if (index < maxItems) {
      setIndex((prev) => prev + 1);
    }
  };
  const handlePrevFullscreen = (e) => {
    e?.stopPropagation?.();
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextFullscreen,
    onSwipedRight: handlePrevFullscreen,
    trackMouse: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (index === null) return;
      if (e.key === 'ArrowRight') handleNextFullscreen();
      if (e.key === 'ArrowLeft') handlePrevFullscreen();
      if (e.key === 'Escape') handleCloseFullscreen();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index]);

  if (maxItems === 0) {
    return <Typography>No items to display.</Typography>;
  }

  return (
    <Dialog
      fullScreen
      open={index !== null}
      onClose={() => handleCloseFullscreen()}
      PaperProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(15px)',
          backgroundImage: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        },
      }}
    >
      <IconButton
        onClick={() => handleCloseFullscreen()}
        sx={{
          position: 'absolute',
          top: { xs: 10, md: 20 },
          right: { xs: 10, md: 20 },
          color: 'white',
          zIndex: 11,
          bgcolor: 'rgba(255,255,255,0.1)',
          '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
        }}
      >
        <Close fontSize="large" />
      </IconButton>

      <DialogContent ref={containerRef}>
        <Box
          sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 0,
            position: 'relative',
          }}
          {...swipeHandlers}
        >
          <IconButton
            onClick={handlePrevFullscreen}
            disabled={isLeftDisabled}
            sx={{
              position: 'absolute',
              left: { xs: 5, md: 20 },
              color: 'white',
              zIndex: 10,
              padding: { xs: '5px', md: '12px' },
            }}
          >
            <ArrowBack sx={{ fontSize: { xs: 30, md: 50 } }} />
          </IconButton>

          {index !== null && (
            <Fade key={index} in={true} timeout={300}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: 2,
                }}
              >
                <MediaItem item={items[index]} fullscreen />
              </Box>
            </Fade>
          )}

          <IconButton
            onClick={handleNextFullscreen}
            disabled={isRightDisabled}
            sx={{
              position: 'absolute',
              right: { xs: 5, md: 20 },
              color: 'white',
              zIndex: 10,
              padding: { xs: '5px', md: '12px' },
            }}
          >
            <ArrowForward sx={{ fontSize: { xs: 30, md: 50 } }} />
          </IconButton>

          <Typography
            sx={{
              position: 'absolute',
              bottom: 30,
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.8rem',
              letterSpacing: 2,
            }}
          >
            {index + 1} / {maxItems}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

function Carousel(props) {
  const { items, gap, itemWidth, itemHeight, Addon = undefined, stretch = false, canFullscreen = false } = props;

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [index, setIndex] = useState(0);

  const [isDialogOpen, setIsDialogOpen] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpenFullscreen = (index) => {
    setSelectedIndex(index);
    setIsDialogOpen(true);
  };
  const handleCloseFullscreen = () => setIsDialogOpen(false);

  const itemsPerPage = useMemo(() => {
    if (stretch) {
      if (containerWidth < 375) return 1;
      if (containerWidth < 750) return 2;
    }
    return Math.floor(containerWidth / (itemWidth + gap)) || 1;
  }, [containerWidth, itemWidth, gap]);

  const maxItems = items.length;
  const maxIndex = Math.max(0, maxItems - itemsPerPage);
  const isLeftDisabled = index === 0;
  const isRightDisabled = index >= maxIndex;

  let actualWidth =
    stretch && containerWidth < 800
      ? containerWidth / itemsPerPage
      : Math.min(itemWidth, containerWidth / itemsPerPage);

  const handleNext = () => index < maxIndex && setIndex((prev) => prev + 1);
  const handlePrev = () => index > 0 && setIndex((prev) => prev - 1);

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
            className="flex justify-start items-start"
            sx={{
              gap: `${gap}px`,
              mb: 3,
              transition: 'transform 0.35s cubic-bezier(0.15, 0.3, 0.25, 1)',
              transform: `translateX(-${index * (actualWidth + gap)}px)`,
              width: items.length * actualWidth,
            }}
          >
            {items.map((item, idx) => (
              <Box key={idx} className="flex flex-col" sx={{ width: `${actualWidth}px`, flexShrink: 0 }}>
                <MediaItem
                  item={item}
                  height={itemHeight}
                  onClick={(e) => {
                    if (!canFullscreen) return;

                    e?.stopPropagation();
                    handleOpenFullscreen(idx);
                  }}
                />
                {Addon && <Addon item={item} />}
              </Box>
            ))}
          </Box>
        </Box>

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

      {isDialogOpen ? (
        <CarouselDialog
          initIndex={selectedIndex}
          maxItems={maxItems}
          handleCloseFullscreen={handleCloseFullscreen}
          items={items}
        />
      ) : ""}
    </Box>
  );
}

export default Carousel;
