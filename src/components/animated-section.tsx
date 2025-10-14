'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  from?: 'left' | 'right' | 'top' | 'bottom';
  xOffset?: number;
  yOffset?: number;
  once?: boolean;
  as?: React.ElementType;
};

export default function AnimatedSection({
  children,
  className,
  delay = 0.1,
  staggerChildren = 0.05,
  from,
  xOffset = 20,
  yOffset = 20,
  once = true,
  as: Component = 'section',
}: AnimatedSectionProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  let initial = { opacity: 0, x: 0, y: 0 };
  switch (from) {
    case 'left':
      initial = { opacity: 0, x: -xOffset, y: 0 };
      break;
    case 'right':
      initial = { opacity: 0, x: xOffset, y: 0 };
      break;
    case 'top':
      initial = { opacity: 0, x: 0, y: -yOffset };
      break;
    case 'bottom':
    default:
      initial = { opacity: 0, x: 0, y: yOffset };
      break;
  }

  const variants: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.4,
        delay,
        when: "beforeChildren",
        staggerChildren
      },
    },
    hidden: initial,
  };

  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
      as={Component}
    >
      {children}
    </motion.section>
  );
}

export const AnimatedItem = ({ children, className, from, xOffset = 20, yOffset = 20, delay }: AnimatedSectionProps) => {
    let initial = { opacity: 0, x: 0, y: 0 };
    switch (from) {
        case 'left':
        initial = { opacity: 0, x: -xOffset, y: 0 };
        break;
        case 'right':
        initial = { opacity: 0, x: xOffset, y: 0 };
        break;
        case 'top':
        initial = { opacity: 0, x: 0, y: -yOffset };
        break;
        case 'bottom':
        default:
        initial = { opacity: 0, x: 0, y: yOffset };
        break;
    }

    const itemVariants: Variants = {
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.4, delay } },
        hidden: initial,
    };

    return (
        <motion.div className={className} variants={itemVariants}>
            {children}
        </motion.div>
    )
}
