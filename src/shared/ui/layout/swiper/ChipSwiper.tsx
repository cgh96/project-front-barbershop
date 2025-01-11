import "swiper/css";

import type { TBaseChipVariant } from "@shared/types";
import { BaseChip, type ChipProps } from "@shared/ui/base/BaseChip";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./ChipSwiper.module.scss";

export interface ChipSwiperProps {
  chips: ChipProps[];
  variant?: TBaseChipVariant;
}

export const ChipSwiper: React.FC<ChipSwiperProps> = ({ chips, variant }) => {
  return (
    <div className={styles["swiper-container"]}>
      <Swiper spaceBetween={8} slidesPerView={"auto"}>
        {chips.map((chip, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <BaseChip
              key={index}
              variant={variant ?? chip.variant}
              mainLabel={chip.mainLabel}
              subLabel={chip.subLabel}
              selected={chip.selected}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
