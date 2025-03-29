import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Navigation from "./Components/shared/Navigation/Navigation.jsx";
import LogIn from "./Pages/Login/Login.jsx";
import Authentication from "./Pages/Authentication/authentication.jsx";
import Activate from "./Pages/Activate/Activate.jsx";
import Room from "./Pages/Room/Room.jsx";
let isAuth = false;
let user = {
  activate: false
}
const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route element={<GuestRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Authentication />} />
        </Route>
        <Route element={<SemiProtectedRoute />}>
          <Route path="/activate" element={<Activate />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/rooms" element={<Room />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const GuestRoute = () => {
  return isAuth ? <Navigate to="/rooms" /> : <Outlet />;
};
const SemiProtectedRoute = () => {
  return !isAuth ? <Navigate to="/" /> : isAuth && !user.activate ? <Outlet /> : <Navigate to="/rooms" />;
};
const ProtectedRoute = () => {
  return !isAuth ? <Navigate to="/" /> : isAuth && !user.activate ? <Navigate to="/activate" /> : <Outlet />;
};

export default App;
