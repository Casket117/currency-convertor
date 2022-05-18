import { Routes, Route } from "react-router-dom";

import { ExchangePage } from "../exchange-page/exchange-page";
import { ExchangeRatesPage } from "../exchange-rates-page/exchange-rates-page";
import { NotFoundPage } from "../not-found-page/not-found-page";

import { HeaderLayout } from "../header-layout/header-layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HeaderLayout/>}>
          <Route index element={<ExchangePage/>}/>
          <Route path="exchangerates" element={<ExchangeRatesPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
