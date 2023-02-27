import { get } from "lodash";
import { useCallback, useMemo } from "react";
import useLocalStorage from "use-local-storage";
import ENGLISH_STRINGS from "../resources/strings/english";
import SPANISH_STRINGS from "../resources/strings/spanish";

export const useLanguage = () => {
  const [language, setLanguage] = useLocalStorage<"SPA" | "ENG">(
    "vaca-language",
    "SPA"
  );

  const displayText = useCallback(
    (key: keyof typeof SPANISH_STRINGS) => {
      switch (language) {
        case "SPA":
          return get(SPANISH_STRINGS, key, "");
        case "ENG":
          return get(ENGLISH_STRINGS, key, "");
        default:
          return get(SPANISH_STRINGS, key, "");
      }
    },
    [language]
  );

  const languageData = useMemo(
    () => ({ displayText, language, setLanguage }),
    [displayText, language, setLanguage]
  );

  return languageData;
};
