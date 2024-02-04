import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import DataProvider from "./context/DataProvider";
import ProtectedRoutes from "./components/ProtectedRoutes/protectedRoutes";

import Login from "./components/Accounts/login";
import Home from "./components/Home/home";
import About from "./components/About/about";
import CreatePost from "./components/Create/createpost";
import DetailView from "./components/Details/DetailView";
import Update from "./components/Create/update";

export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DataProvider />}>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/details/:id" element={<DetailView />} />
        <Route path="/update/:id" element={<Update />} />
      </Route>
      <Route path="/contact" element={<About />} />
    </Route>
  )
);
