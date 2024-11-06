import { Routes, Route } from "react-router-dom";
import { Main } from "../pages";

export const Layout = () => (
  <Routes>
    <Route index element={<Main />} />
  </Routes>
);
