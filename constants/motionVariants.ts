//framer-motion variant file

export function useFadeInUpDelay(delay = 0.5){
    return {
    hidden: { y: 20, opacity: 0 },
    show:   { y: 0,
              opacity: 1,
              transition: { duration: 1, delay: delay },
            }
        }

}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, // change this for faster/slower staggering
    },
  },
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
};

export function useFadeInRightDelay(delay = 0.5){
    return {
    hidden: { x: 20, opacity: 0 },
    show:   { x: 0,
              opacity: 1,
              transition: { duration: 1, delay: delay },
            }
        }

}