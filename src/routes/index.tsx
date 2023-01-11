import { BrowserRouter, Route, Router, Routes as ReactRouterRoutes } from "react-router-dom";
import Home from "../pages/Home";

export const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRouterRoutes>
        <Route index element={<Home />} />
      </ReactRouterRoutes>
    </BrowserRouter>
  );
};
