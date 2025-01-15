import type { TModalSlideAnimation } from "@shared/types";
import { ModalSlideAnimation } from "@shared/types";
import { useState } from "react";

export const useModalSlideAnimation = () => {
  const [slideAnimation, setSlideAnimation] = useState<TModalSlideAnimation>(
    ModalSlideAnimation.SlideUp
  );

  const setSlideupAnimation = () => {
    setSlideAnimation(ModalSlideAnimation.SlideUp);
  };

  const setSlideDownAnimation = () => {
    setSlideAnimation(ModalSlideAnimation.SlideDown);
  };

  return {
    slideAnimation,
    setSlideDownAnimation,
    setSlideupAnimation,
  };
};
