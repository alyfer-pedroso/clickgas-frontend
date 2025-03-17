import { FC } from "react";

import { Registration } from "@components/template";

import * as utils from "./utils";

const ClientRegistration: FC = () => {
  return <Registration header={utils.REGISTRATION_HEADER} button={utils.REGISTRATION_BUTTON}></Registration>;
};

export default ClientRegistration;
