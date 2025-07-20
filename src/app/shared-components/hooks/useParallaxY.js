import { motion, useTransform, useScroll } from 'framer-motion';

function useParallaxY(ref, distance = 20) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return y;
}

export default useParallaxY;