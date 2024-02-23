export const topToBottom = {
  hidden: {
    y: -20,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const bottomToTop = {
  hidden: {
    y: 60,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const bottomToTopSelector = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const LeftToRight = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const RightToLeft = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export const StepOutShadows = {
  hidden: {
    opacity: 0.2,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: { delay: custom * 1.5 },
  }),
};

export const dropdownVariants = {
  opened: {
    opacity: 1,
    height: "auto", // Адаптируйте высоту в зависимости от содержимого
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  closed: {
    opacity: 0,
    height: 0, // Скрыть содержимое
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.7,
      delay: 0.5, 
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
