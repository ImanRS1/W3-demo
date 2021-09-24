export const scrollReveal = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
  
    show: {
      opacity: 1,
      scale: 1.0,
      transition: {
        duration: 1,
      },
    },
  };  



  export const fadeInAndStay1 = {
    hidden: {
      opacity: 0,
      scale: 0.6,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: { ease: "easeOut", delay: 0, duration: 1 },
    },
  };