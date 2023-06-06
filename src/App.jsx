import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import BookedTickets from "./pages/tickets/BookedTickets";
import CanceledTickets from "./pages/tickets/CanceledTickets";
import RefundTickets from "./pages/tickets/RefundTickets";
import Tours from "./pages/tours/Tours";
import Attractions from "./pages/attractions/Attractions";
import Employees from "./pages/employees/Employees";
import Buses from "./pages/buses/Buses";
import Settings from "./pages/settings/Settings";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="tickets" element={<BookedTickets />}>
              <Route path="booked" element={<BookedTickets />} />
              <Route path="canceled" element={<CanceledTickets />} />
              <Route path="refunds" element={<RefundTickets />} />
            </Route>
            <Route path="Tours" element={<Tours />} />
            <Route path="Attractions" element={<Attractions />} />
            <Route path="Employees" element={<Employees />} />
            <Route path="Buses" element={<Buses />} />
            <Route path="Settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
