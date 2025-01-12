export const ModalSlideAnimation = {
  SlideUp: "slide-up",
  SlideDown: "slide-down",
  SlideInLeft: "slide-in-left",
  SlideOutLeft: "slide-out-left",
  SlideInRight: "slide-in-right",
  SlideOutRight: "slide-out-right",
} as const;

export type TModalSlideAnimation =
  (typeof ModalSlideAnimation)[keyof typeof ModalSlideAnimation];
