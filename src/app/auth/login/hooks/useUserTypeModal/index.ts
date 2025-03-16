import { useRef } from "react";
import { ModalModels } from "@data/models";

export function useUserTypeModal() {
  const userTypeRef = useRef<ModalModels.iData>(null);

  const show = () => userTypeRef.current?.show?.();
  const close = () => userTypeRef.current?.close?.();

  return { userTypeRef, show, close, visible: userTypeRef.current?.visible ?? false };
}
