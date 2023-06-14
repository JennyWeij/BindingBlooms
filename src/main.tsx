import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import BouquetsPage from "./pages/BouquetsPage";
import CoursesPage from "./pages/CoursesPage";
import FlowersPage from "./pages/FlowersPage";
import StartPage from "./pages/StartPage";
import StoresPage from "./pages/StoresPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<StartPage />} />
      <Route path="/ourflowers" element={<FlowersPage />} />
      <Route path="/bouquets" element={<BouquetsPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/ourstores" element={<StoresPage />} />
      <Route path="*" element={<h2> 404 page not found</h2>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
