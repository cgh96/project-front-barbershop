import type { TModalAnimation } from "@shared/types";
import { ModalAnimation } from "@shared/types";
import { BaseHeader } from "@shared/ui/base/BaseHeader";
import { CloseBtn } from "@shared/ui/\bbutton/CloseBtn";
import { BackDrop } from "@shared/ui/modal/BackDrop";
import { FullScreenModal } from "@shared/ui/modal/FullScreenModal";
import { useState } from "react";
import { createPortal } from "react-dom";

import { HairServiceSelector } from "./HairServiceSelector";

interface DateReservationModalProps {
  onClickClose: () => void;
}

export const DateReserveationModal: React.FC<DateReservationModalProps> = ({
  onClickClose,
}) => {
  const [animation, setAnimation] = useState<TModalAnimation>(
    ModalAnimation.SlideUp
  );

  const close = () => {
    setAnimation(ModalAnimation.SlideDown);
    setTimeout(() => onClickClose(), 200);
  };

  return createPortal(
    <BackDrop>
      <FullScreenModal animation={animation}>
        <BaseHeader
          Left={<CloseBtn onClick={close} />}
          Center={<span style={{ padding: "13px 0" }}>날짜로 예약하기</span>}
        />

        <HairServiceSelector />
      </FullScreenModal>
    </BackDrop>,
    document.body
  );
};
