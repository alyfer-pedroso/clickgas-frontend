import { FC } from "react";

import { Registration } from "@components/template";
import { Catalog } from "../";

// import styles from "./styles";

export const Container: FC = () => {
  return (
    <Registration header={{ title: "Vinculação de produtos" }} button={{ title: "Finalizar", onClick: () => {} }}>
      <Catalog />
    </Registration>
  );
};
