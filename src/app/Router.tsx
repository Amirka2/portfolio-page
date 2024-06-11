import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

import {Home} from "@pages";
import {Header} from "@widgets/Header/ui/Header";

export const Router = () => (
  <BrowserRouter basename="/">
    <Header />
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>
);
