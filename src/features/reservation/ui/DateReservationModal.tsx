import { type TModalSlideAnimation } from "@shared/types";
import { BaseHeader } from "@shared/ui/base/BaseHeader";
import { CloseBtn } from "@shared/ui/\bbutton/CloseBtn";
import { Calendar } from "@shared/ui/calendar/Calendar";
import { BackDrop } from "@shared/ui/modal/BackDrop";
import { FullScreenModal } from "@shared/ui/modal/FullScreenModal";
import { createPortal } from "react-dom";

import { HairServiceSelector } from "./HairServiceSelector";

interface DateReservationModalProps {
  animation: TModalSlideAnimation;
  onClickClose: () => void;
}

export const DateReservationModal: React.FC<DateReservationModalProps> = ({
  onClickClose,
}) => {
  return createPortal(
    <BackDrop>
      <FullScreenModal animation={"slide-up"}>
        <BaseHeader
          Left={<CloseBtn onClick={onClickClose} />}
          Center={<span style={{ padding: "13px 0" }}>날짜로 예약하기</span>}
        />
        <Calendar />

        <HairServiceSelector />
      </FullScreenModal>
    </BackDrop>,
    document.body
  );
};
