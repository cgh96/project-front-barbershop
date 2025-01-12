import { useState } from "react";

import { useModalSlideAnimation } from "./useModalSlideAnimation";

export const useShowModal = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  // 모달 바디(컨텐츠)의 슬라이드 애니메이션을 컨트롤하는 훅
  const { slideAnimation, setSlideDownAnimation, setSlideupAnimation } =
    useModalSlideAnimation();

  const handleShowModal = () => {
    setShouldShowModal(true);
    setSlideupAnimation();
  };

  const handleCloseModal = () => {
    setSlideDownAnimation();
    // 모달이 완전히 닫히고, 백드랍이 닫혀야 함
    setTimeout(() => setShouldShowModal(false), 200);
  };

  const toggleShowModal = (show: boolean) => {
    return show ? handleShowModal() : handleCloseModal();
  };

  return { shouldShowModal, slideAnimation, toggleShowModal };
};
