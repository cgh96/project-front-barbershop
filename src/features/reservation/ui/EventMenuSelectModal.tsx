import { useMultipleCheckList } from "@shared/hooks/useMultipleCheckList";
import {
  BaseButtonSize,
  BaseButtonVariant,
  BaseHeaderVariant,
  type TModalSlideAnimation,
} from "@shared/types";
import { CloseButton } from "@shared/ui/button/CloseButton";
import { FooterButton } from "@shared/ui/button/FooterButton";
import { BaseHeader } from "@shared/ui/header/BaseHeader";
import { RowList } from "@shared/ui/layout/RowList";
import { BackDrop } from "@shared/ui/modal/BackDrop";
import { BottomSheetModal } from "@shared/ui/modal/BottomSheetModal";

import type { IEventMenu } from "../model/event.types";
import { EventMenuItem } from "./EventMenuItem";
import styles from "./EventMenuSelectModal.module.scss";

interface IEventMenuSelectModalProps {
  animation: TModalSlideAnimation;
  onClickClose: () => void;
}

export const EventMenuSelectModal: React.FC<IEventMenuSelectModalProps> = ({
  animation,
  onClickClose,
}) => {
  const eventMenus: IEventMenu[] = [
    {
      uid: "1",
      title: "이벤트 메뉴 1",
      description: "이벤트 메뉴 1 설명",
    },

    { uid: "2", title: "이벤트 메뉴 2", description: "이벤트 메뉴 2 설명" },
    {
      uid: "3",
      title: "이벤트 메뉴 3",
      description: "이벤트 메뉴 3 설명",
    },
    {
      uid: "4",
      title: "이벤트 메뉴 4",
      description: "이벤트 메뉴 4 설명",
    },
    {
      uid: "5",
      title: "이벤트 메뉴 5",
      description: "이벤트 메뉴 5 설명",
    },
    {
      uid: "6",
      title: "이벤트 메뉴 6",
      description: "이벤트 메뉴 6 설명",
    },
  ];

  const { checkList, handleCheckItem } = useMultipleCheckList<IEventMenu>({
    items: eventMenus,
    maxCheckCount: 3,
  });

  const isCheckedExisted = checkList.some(check => check.checked);
  const footerButtonVariant = isCheckedExisted
    ? BaseButtonVariant.Primary
    : BaseButtonVariant.Disabled;

  return (
    <BackDrop>
      <BottomSheetModal animation={animation}>
        <div className={styles["menu-modal-container"]}>
          <BaseHeader
            variant={BaseHeaderVariant.Secondary}
            Left={<span>이벤트 메뉴로 선택</span>}
            Right={<CloseButton onClick={onClickClose} />}
          />

          <RowList
            propsName="event"
            component={EventMenuItem}
            items={checkList}
            onClick={handleCheckItem}
          />
        </div>

        <FooterButton
          label="선택"
          variant={footerButtonVariant}
          size={BaseButtonSize.Medium}
          disabled={!isCheckedExisted}
          onClick={onClickClose}
        />
      </BottomSheetModal>
    </BackDrop>
  );
};
