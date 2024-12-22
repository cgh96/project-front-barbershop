import { RoutePath } from "@app/config/router";
import { Page } from "@shared/ui/layout/page/Page";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <button
        type="button"
        onClick={() => {
          navigate(`${RoutePath.Barber}/1`);
        }}
      >
        click
      </button>
    </Page>
  );
};
