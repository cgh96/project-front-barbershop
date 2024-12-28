import { RoutePath } from "@app/config/router";
import { BaseButtonSize, BaseButtonVariant } from "@shared/config";
import { BaseButton } from "@shared/ui/base/BaseButton";
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
    </Page>
  );
};
