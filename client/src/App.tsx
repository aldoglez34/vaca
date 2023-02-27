import { FC, useEffect } from "react";
import { LanguageContext } from "./context/langageContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { useLanguage } from "./hooks/useLanguage";
import { VERSION } from "./constants/strings";

const App: FC = () => {
  const languageData = useLanguage();

  useEffect(() => console.log(`Release: ${VERSION}`), []);

  return (
    <LanguageContext.Provider {...{ value: languageData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageContext.Provider>
  );
};

export default App;
