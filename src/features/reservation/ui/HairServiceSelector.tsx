import { useShowModal } from "@shared/hooks/useShowModal";
import { BaseChipVariant } from "@shared/types";
import type { ChipProps } from "@shared/ui/chip/BaseChip";
import { ChipSwiper } from "@shared/ui/layout/ChipSwiper";

import { EventMenuSelectButton } from "./EventMenuSelectButton";
import { EventMenuSelectModal } from "./EventMenuSelectModal";
import styles from "./HairServiceSelector.module.scss";
import { Section } from "./Section";

export const HairServiceSelector = () => {
  // '이벤트 메뉴 선택' 모달
  const { shouldShowModal, slideAnimation, toggleShowModal } = useShowModal();

  /** @TODO : 임시 데이터, API 연동되면 삭제 */
  const hairServiceList: ChipProps[] = [
    {
      mainLabel: "펌",
      subLabel: "",
      selected: false,
    },
    {
      mainLabel: "염색",
      subLabel: "",
      selected: false,
    },
    {
      mainLabel: "커트",
      subLabel: "",
      selected: false,
    },
    {
      mainLabel: "쉐이빙",
      subLabel: "",
      selected: false,
    },
    {
      mainLabel: "트림",
      subLabel: "",
      selected: false,
    },
    {
      mainLabel: "다운펌",
      subLabel: "",
      selected: false,
    },
  ];

  return (
    <Section title="메뉴 선택">
      <h2 className={styles["sub-title"]}>시술 메뉴로 선택</h2>
      <ChipSwiper chips={hairServiceList} variant={BaseChipVariant.Primary} />

      <h2 className={styles["sub-title"]}>이벤트 메뉴로 선택</h2>
      <EventMenuSelectButton
        selectedEvent="첫방문 프로모션 20% 할인"
        onClick={() => toggleShowModal(true)}
      />

      {shouldShowModal && (
        <EventMenuSelectModal
          animation={slideAnimation}
          onClickClose={() => toggleShowModal(false)}
        />
      )}
    </Section>
  );
};
