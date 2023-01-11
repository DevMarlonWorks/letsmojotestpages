import { BrowserRouter, Route, Router, Routes as ReactRouterRoutes } from "react-router-dom";
import Habitation from "../pages/Habitation";
import Home from "../pages/Home";

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Habitation />} />

      </ReactRouterRoutes>
    </BrowserRouter>
  );
};
