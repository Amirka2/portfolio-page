import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import { Paths } from "@shared";
import {
  About,
  ArtJobs,
  Contacts,
  Events,
  GraphicsJobs,
  Home,
  Jobs,
  Publications,
  SceneryJobs,
  StillLifeJobs,
  StudyJobs,
} from "@pages";
import { Header } from "@widgets/Header";
import { Footer } from "@widgets/Footer";

export const Router = () => (
  <BrowserRouter basename={Paths.Main}>
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path={Paths.About} element={<About />} />
      <Route path={Paths.Publications} element={<Publications />} />
      <Route path={Paths.Events} element={<Events />} />
      <Route path={Paths.Contacts} element={<Contacts />} />
      <Route path={Paths.Jobs} element={<Jobs />} />
      <Route path={Paths.JobsScenery} element={<SceneryJobs />} />
      <Route path={Paths.JobsStillLife} element={<StillLifeJobs />} />
      <Route path={Paths.JobsArt} element={<ArtJobs />} />
      <Route path={Paths.JobsStudy} element={<StudyJobs />} />
      <Route path={Paths.JobsGraphics} element={<GraphicsJobs />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
