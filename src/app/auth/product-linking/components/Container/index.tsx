import { FC } from "react";

import { Divisor, Registration } from "@components/template";
import { Catalog, CurrentCatalog } from "../";

export const Container: FC = () => {
  return (
    <Registration header={{ title: "Vinculação de produtos" }} button={{ title: "Finalizar", onClick: () => {} }} main={{ styles: { gap: 25 } }}>
      <Catalog />
      <Divisor />
      <CurrentCatalog />
    </Registration>
  );
};
