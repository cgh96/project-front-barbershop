import "./ReservationModal.scss";

import CloseIcon from "@assets/buttons/x-icon.svg?react";
import type { TModalAnimation } from "@shared/types";
import { ModalAnimation } from "@shared/types";
import { BaseHeader } from "@shared/ui/base/BaseHeader";
import { Calendar } from "@shared/ui/calendar/Calendar";
import { BackDrop } from "@shared/ui/modal/BackDrop";
import { FullScreenModal } from "@shared/ui/modal/FullScreenModal";
import { useState } from "react";
import { createPortal } from "react-dom";

interface ReservationModalProps {
  title: string;
  onClickClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  title,
  onClickClose,
}) => {
  const [animation, setAnimation] = useState<TModalAnimation>(
    ModalAnimation.SlideUp
  );

  const CloseBtn = () => {
    const close = () => {
      setAnimation(ModalAnimation.SlideDown);
      setTimeout(() => onClickClose(), 200);
    };

    return (
      <button type="button" onClick={close} style={{ marginLeft: "13px" }}>
        <CloseIcon />
      </button>
    );
  };

  return createPortal(
    <BackDrop>
      <FullScreenModal animation={animation}>
        <BaseHeader
          Left={<CloseBtn />}
          Center={<span style={{ padding: "13px 0" }}>{title}</span>}
        />
        <Calendar />
      </FullScreenModal>
    </BackDrop>,
    document.body
  );
};
