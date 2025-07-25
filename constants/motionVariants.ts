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

export function useFadeInRightDelay(delay = 0.5){
    return {
    hidden: { x: 20, opacity: 0 },
    show:   { x: 0,
              opacity: 1,
              transition: { duration: 1, delay: delay },
            }
        }

}