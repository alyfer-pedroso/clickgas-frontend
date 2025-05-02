import { FC } from "react";
import { SupplierRegistrationProvider } from "@data/providers";
import { Container } from "./components";

const ProductLinking: FC = () => {
  return (
    <SupplierRegistrationProvider>
      <Container />
    </SupplierRegistrationProvider>
  );
};

export default ProductLinking;
