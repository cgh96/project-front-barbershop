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
