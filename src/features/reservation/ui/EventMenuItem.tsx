import type { IMultipleCheckState } from "@shared/types/state.types";
import { CheckBoxInput } from "@shared/ui/input/CheckBoxInput";

import type { IEventMenu } from "../model/event.types";
import styles from "./EventMenuItem.module.scss";

export interface EventMenuItemProps {
  event: IMultipleCheckState<IEventMenu>;
  onClick: (uid: string, checked: boolean) => void;
}

export const EventMenuItem: React.FC<EventMenuItemProps> = ({
  event,
  onClick,
}) => {
  return (
    <div className={styles["event-row"]}>
      <CheckBoxInput
        id={event.uid}
        checked={event.checked}
        onChange={(checked: boolean) => onClick(event.uid, checked)}
      >
        <div className={styles["content-wrapper"]}>
          <div className={styles["img-wrapper"]}></div>

          <div className={styles["text-wrapper"]}>
            <h3 className={styles["title"]}>{event.item.title}</h3>
            <p className={styles["description"]}>{event.item.description}</p>
          </div>
        </div>
      </CheckBoxInput>
    </div>
  );
};
