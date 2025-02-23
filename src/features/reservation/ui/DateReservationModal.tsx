import { type TModalSlideAnimation } from "@shared/types";
import { CloseButton } from "@shared/ui/button/CloseButton";
import { BaseHeader } from "@shared/ui/header/BaseHeader";
import { BackDrop } from "@shared/ui/modal/BackDrop";
import { FullScreenModal } from "@shared/ui/modal/FullScreenModal";

import { HairServiceSelector } from "./HairServiceSelector";

interface DateReservationModalProps {
  animation: TModalSlideAnimation;
  onClickClose: () => void;
}

export const DateReserveationModal: React.FC<DateReservationModalProps> = ({
  animation,
  onClickClose,
}) => {
  return (
    <BackDrop>
      <FullScreenModal animation={animation}>
        <BaseHeader
          Left={<CloseButton onClick={onClickClose} />}
          Center={<span style={{ padding: "13px 0" }}>날짜로 예약하기</span>}
        />

        <HairServiceSelector />
      </FullScreenModal>
    </BackDrop>
  );
};
