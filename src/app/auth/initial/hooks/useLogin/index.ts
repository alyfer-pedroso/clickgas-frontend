import { useCallback } from "react";
import { useFocusEffect } from "expo-router";

import { usePrivacyTerms } from "@data/hooks";

import { useUserTypeModal } from "..";

export function useLogin() {
  const { privacyTermsRef, show } = usePrivacyTerms();
  const { userTypeRef, ...userTypeModal } = useUserTypeModal();

  useFocusEffect(useCallback(() => userTypeModal.close(), []));

  return { privacyTermsRef, show, userTypeRef, userTypeModal };
}
