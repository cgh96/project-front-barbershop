import { BaseChipVariant } from "@shared/types";
import type { ChipProps } from "@shared/ui/base/BaseChip";
import { ChipSwiper } from "@shared/ui/layout/swiper/ChipSwiper";

import { EventMenuSelectButton } from "./EventMenuSelectButton";
import styles from "./HairServiceSelector.module.scss";
import { Section } from "./Section";

export const HairServiceSelector = () => {
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
      <EventMenuSelectButton selectedEvent="이벤트 메뉴 선택" />
    </Section>
  );
};
