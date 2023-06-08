import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import CityTours from "./pages/tours/CityTours";
import AttractionTours from "./pages/tours/AttractionTours";
import BookedTickets from "./pages/tickets/BookedTickets";
import CanceledTickets from "./pages/tickets/CanceledTickets";
import RefundTickets from "./pages/tickets/RefundTickets";
import Passengers from "./pages/passengers/Passengers";
import Coupons from "./pages/coupons/Coupons";
import Reports from "./pages/reports/Reports";

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="tours" element={<CityTours />}>
              <Route path="cities" element={<CityTours />} />
              <Route path="attractions" element={<AttractionTours />} />
            </Route>
            <Route path="tickets" element={<BookedTickets />}>
              <Route path="booked" element={<BookedTickets />} />
              <Route path="canceled" element={<CanceledTickets />} />
              <Route path="refunds" element={<RefundTickets />} />
            </Route>
            <Route path="passengers" element={<Passengers />} />
            <Route path="coupons" element={<Coupons />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
