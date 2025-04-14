import { FC } from "react";
import { SupplierRegistrationProvider } from "@data/providers";
import { Container } from "./components";

const SupplierRegistration: FC = () => {
  return (
    <SupplierRegistrationProvider>
      <Container />
    </SupplierRegistrationProvider>
  );
};

export default SupplierRegistration;
