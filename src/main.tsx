import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Home, PokeDetail } from "./pages";
import PokemonProvider from "./context/PokemonContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:pokeId",
    element: <PokeDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <PokemonProvider>
    <RouterProvider router={router} />
  </PokemonProvider>
);
