import { useState } from "react";

export const useShowModal = () => {
  const [shouldShowModal, setShouldShowModal] = useState(false);

  const toggleShowModal = (show: boolean) => {
    setShouldShowModal(show);
  };

  return { shouldShowModal, toggleShowModal };
};
