import type { ComponentType } from "react";
import React from "react";

import styles from "./RowList.module.scss";

export interface RowListProps {
  propsName: string;
  items: Record<string, any>[];
  component: ComponentType<any>;
  /** string, boolean, number 등 다양하게 올 수 있음 */
  onClick: (uid: string, value?: any) => void;
}

export const RowList: React.FC<RowListProps> = ({
  component: Component,
  propsName,
  items,
  onClick,
}) => {
  return (
    <div className={styles["list-container"]}>
      {items.map((item, index) => (
        <Component key={index} {...{ [propsName]: item }} onClick={onClick} />
      ))}
    </div>
  );
};
