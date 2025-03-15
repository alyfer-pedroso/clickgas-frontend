import { useRef } from "react";
import { ModalModels } from "@data/models";

export function usePrivacyTerms() {
  const privacyTermsRef = useRef<ModalModels.iData | null>(null);

  const show = () => privacyTermsRef.current?.show?.();
  const close = () => privacyTermsRef.current?.close?.();

  return { privacyTermsRef, show, close, visible: privacyTermsRef.current?.visible };
}
