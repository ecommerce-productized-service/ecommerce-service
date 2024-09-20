import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type SpringOptions,
} from "framer-motion";
import { useRef } from "react";

const springConfig: SpringOptions = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

export function HeroVideo() {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target,
    offset: ["start end", "start center"],
  });
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.5, 1]),
    springConfig,
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.9, 1]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, 0]),
    springConfig,
  );

  return (
    <motion.div
      ref={target}
      style={{ opacity, scale, rotateX, transformPerspective: "1200px" }}
      className="bg-secondary bg-gradient-to-t from-secondary to-foreground rounded-xl aspect-video"
    >
      test
    </motion.div>
  );
}
