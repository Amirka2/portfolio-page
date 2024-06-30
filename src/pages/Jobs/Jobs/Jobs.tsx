import React from "react";
import { Navigate } from "react-router-dom";

import { Paths } from "@shared";

export const Jobs = () => {
  return (
    <Navigate replace to={Paths.JobsScenery} />
  );
};
