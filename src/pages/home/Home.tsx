import { RoutePath } from "@app/config/router";
import {
  BaseButtonSize,
  BaseButtonVariant,
  BaseChipVariant,
} from "@shared/types";
import { BaseButton } from "@shared/ui/button/BaseButton";
import { BaseChip } from "@shared/ui/chip/BaseChip";
import { Page } from "@shared/ui/layout/Page";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <BaseChip
        mainLabel="메인"
        subLabel="특기"
        variant={BaseChipVariant.Black}
        selected={true}
      />
      <BaseButton
        label="바버페이지로 이동"
        variant={BaseButtonVariant.Primary}
        size={BaseButtonSize.Medium}
        onClick={() => navigate(`${RoutePath.Barber}/1`)}
      />
    </Page>
  );
};
