import { Routes, Route } from "react-router-dom";
import { Main, NotFound } from "@pages";

export const Layout = () => (
  <Routes>
    <Route index element={<Main />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
