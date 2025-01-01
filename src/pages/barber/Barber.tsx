import { DateReserveationModal } from "@features/reservation/ui/DateReservationModal";
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
        <DateReserveationModal onClickClose={() => toggleShowModal(false)} />
      )}
    </Page>
  );
};
