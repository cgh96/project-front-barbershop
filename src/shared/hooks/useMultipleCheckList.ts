import type { IMultipleCheckState } from "@shared/types/state.types";
import { useState } from "react";

interface IParams<T> {
  maxCheckCount?: number;
  items: T[];
}

export const useMultipleCheckList = <T extends { uid?: string }>({
  maxCheckCount = Infinity,
  items,
}: IParams<T>) => {
  /** 컴포넌트가 마운트될 때 chekcList 초기화 */
  const initState = (items: T[]): IMultipleCheckState<T>[] => {
    return items.map((item, index) => ({
      uid: item.uid ?? index.toString(),
      item,
      checked: false,
    }));
  };

  const [checkList, setCheckList] = useState<IMultipleCheckState<T>[]>(() =>
    initState(items)
  );

  const handleCheckItem = (uid: string, checked: boolean) => {
    if (
      checked &&
      checkList.filter(check => check.checked).length === maxCheckCount
    )
      return;

    setCheckList(prev =>
      prev.map(check => ({
        ...check,
        checked: check.uid === uid ? checked : check.checked,
      }))
    );
  };

  return {
    checkList,
    handleCheckItem,
  };
};
