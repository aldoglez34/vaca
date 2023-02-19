import { FC } from "react";
import { LanguageContext } from "./context/langageContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { useLanguage } from "./hooks/useLanguage";

const App: FC = () => {
  const languageData = useLanguage();

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
