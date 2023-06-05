import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Passenegers from "./pages/passengers/Passengers";
import Tours from "./pages/tours/Tours";
import Attractions from "./pages/attractions/Attractions";
import Employees from "./pages/employees/Employees";
import Buses from "./pages/buses/Buses";
import Settings from "./pages/settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="passengers" element={<Passenegers />} />
          <Route path="Tours" element={<Tours />} />
          <Route path="Attractions" element={<Attractions />} />
          <Route path="Employees" element={<Employees />} />
          <Route path="Buses" element={<Buses />} />
          <Route path="Settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
