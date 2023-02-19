import { get } from "lodash";
import { useCallback, useMemo } from "react";
import useLocalStorage from "use-local-storage";
import { englishStrings, spanishStrings } from "../constants/strings";

export const useLanguage = () => {
  const [language, setLanguage] = useLocalStorage<"SPA" | "ENG">(
    "vaca-language",
    "SPA"
  );

  const displayText = useCallback(
    (key: keyof typeof spanishStrings) => {
      switch (language) {
        case "SPA":
          return get(spanishStrings, key, "");
        case "ENG":
          return get(englishStrings, key, "");
        default:
          return get(spanishStrings, key, "");
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
