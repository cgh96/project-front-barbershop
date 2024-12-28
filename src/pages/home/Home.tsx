import { RoutePath } from "@app/config/router";
import { BaseButtonSize, BaseButtonVariant } from "@shared/config";
import { BaseButton } from "@shared/ui/base/BaseButton";
import { Chip } from "@shared/ui/base/Chip";
import { Page } from "@shared/ui/layout/page/Page";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <BaseButton
        label="예약"
        variant={BaseButtonVariant.Primary}
        size={BaseButtonSize.Medium}
        onClick={() => navigate(`${RoutePath.Barber}/1`)}
      />

      <Chip mainLabel="메인" subLabel="특기" selected={true} />
    </Page>
  );
};
