export const BaseButtonVariant = {
  Primary: "primary",
  Secondary: "secondary",
  Disabled: "disabled",
  Warning: "warning",
} as const;

export type TBaseButtonVariant =
  (typeof BaseButtonVariant)[keyof typeof BaseButtonVariant];

export const BaseButtonSize = {
  Large: "large",
  Medium: "medium",
  Small: "small",
} as const;

export type TBaseButtonSize =
  (typeof BaseButtonSize)[keyof typeof BaseButtonSize];

export const BaseHeaderVariant = {
  Primary: "primary",
  Secondary: "secondary",
} as const;

export type TBasesHeaderVariant =
  (typeof BaseHeaderVariant)[keyof typeof BaseHeaderVariant];

export const BaseChipVariant = {
  Primary: "primary",
  Black: "black",
} as const;

export type TBaseChipVariant =
  (typeof BaseChipVariant)[keyof typeof BaseChipVariant];
