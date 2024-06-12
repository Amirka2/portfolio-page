import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";

import {Header} from "@widgets/Header";
import {About, Contacts, Events, Home, Jobs, Publications} from "@pages";
import {Paths} from "@shared";

export const Router = () => (
  <BrowserRouter basename={Paths.Main}>
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path={Paths.About} element={<About />} />
      <Route path={Paths.Jobs} element={<Jobs />} />
      <Route path={Paths.Publications} element={<Publications />} />
      <Route path={Paths.Events} element={<Events />} />
      <Route path={Paths.Contacts} element={<Contacts />} />
    </Routes>
  </BrowserRouter>
);
