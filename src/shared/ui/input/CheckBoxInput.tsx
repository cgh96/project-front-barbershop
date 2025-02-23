import CheckIcon from "@assets/buttons/check.svg?react";

import styles from "./CheckBoxInput.module.scss";

export interface ICheckBoxInputProps {
  id: string;
  children?: React.ReactNode;
  checked?: boolean;
  onChange: (checked: boolean) => void;
}

export const CheckBoxInput: React.FC<ICheckBoxInputProps> = ({
  id,
  children,
  checked = false,
  onChange,
}) => {
  return (
    <div className={styles["checkbox-wrapper"]}>
      <input
        id={id}
        className={styles["checkbox"]}
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
      />

      <label htmlFor={id}>
        <span className={styles["check-icon"]}>
          <CheckIcon aria-hidden="true" />
        </span>
        {children}
      </label>
    </div>
  );
};
