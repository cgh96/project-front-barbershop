import { ReservationModal } from "@features/reservation/ui/ReservationModal";
import { useShowModal } from "@shared/hooks/useShowModal";
import { BaseButtonSize, BaseButtonVariant } from "@shared/types";
import { BaseButton } from "@shared/ui/base/BaseButton";
import { Page } from "@shared/ui/layout/page/Page";

export const Barber = () => {
  const { shouldShowModal, toggleShowModal } = useShowModal();

  return (
    <Page>
      <BaseButton
        label="예약하기"
        size={BaseButtonSize.Medium}
        variant={BaseButtonVariant.Primary}
        onClick={() => toggleShowModal(true)}
      />

      {shouldShowModal && (
        <ReservationModal
          title="날짜로 예약하기"
          onClickClose={() => toggleShowModal(false)}
        />
      )}
    </Page>
  );
};
