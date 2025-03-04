import { DateReserveationModal } from "@features/reservation/ui/DateReservationModal";
import { useShowModal } from "@shared/hooks/useShowModal";
import { BaseButtonSize, BaseButtonVariant } from "@shared/types";
import { BaseButton } from "@shared/ui/button/BaseButton";
import { Page } from "@shared/ui/layout/Page";

export const Barber = () => {
  const { shouldShowModal, slideAnimation, toggleShowModal } = useShowModal();

  return (
    <Page>
      <BaseButton
        label="예약하기"
        size={BaseButtonSize.Medium}
        variant={BaseButtonVariant.Primary}
        onClick={() => toggleShowModal(true)}
      />

      {shouldShowModal && (
        <DateReserveationModal
          animation={slideAnimation}
          onClickClose={() => toggleShowModal(false)}
        />
      )}
    </Page>
  );
};
