import App from "@/App";
import About from "@/books/core/About";
import Chapter01 from "@/books/core/Chapter01";
import Chapter02 from "@/books/core/Chapter02";
import Chapter03 from "@/books/core/Chapter03";
import Chapter04 from "@/books/core/Chapter04";
import Chapter05 from "@/books/core/Chapter05";
import Chapter07 from "@/books/core/Chapter07";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createHashRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider
} from "react-router";

import "./index.css";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/grimwild/about" replace />} />
      <Route path="grimwild" element={<Navigate to="/grimwild/about" replace />} />
      <Route path="grimwild/about" element={<About />} />
      <Route path="grimwild/chapter-1" element={<Chapter01 />} />
      <Route path="grimwild/chapter-2" element={<Chapter02 />} />
      <Route path="grimwild/chapter-3" element={<Chapter03 />} />
      <Route path="grimwild/chapter-4" element={<Chapter04 />} />
      <Route path="grimwild/chapter-5" element={<Chapter05 />} />
      <Route path="grimwild/chapter-7" element={<Chapter07 />} />
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
