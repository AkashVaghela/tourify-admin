import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import CityTours from "./pages/tours/CityTours";
import NewCityTour from "./pages/tours/NewCityTour";
import EditCityTour from "./pages/tours/EditCityTour";
import AttractionTours from "./pages/tours/AttractionTours";
import NewAttractionTour from "./pages/tours/NewAttractionTour";
import EditAttractionTour from "./pages/tours/EditAttractionTour";
import BookedTickets from "./pages/tickets/BookedTickets";
import NewTicket from "./pages/tickets/NewTicket";
import EditTicket from "./pages/tickets/EditTicket";
import CanceledTickets from "./pages/tickets/CanceledTickets";
import RefundTickets from "./pages/tickets/RefundTickets";
import Passengers from "./pages/passengers/Passengers";
import NewPassenger from "./pages/passengers/NewPassenger";
import EditPassenger from "./pages/passengers/EditPassenger";
import Coupons from "./pages/coupons/Coupons";
import NewCoupon from "./pages/coupons/NewCoupon";
import EditCoupon from "./pages/coupons/EditCoupon";
import Reports from "./pages/reports/Reports";

const customTheme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
});

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="tours">
              <Route index element={<CityTours />} />
              <Route path="cities" element={<CityTours />} />
              <Route path="cities/new" element={<NewCityTour />} />
              <Route path="cities/:id/edit" element={<EditCityTour />} />
              <Route path="attractions" element={<AttractionTours />} />
              <Route path="attractions/new" element={<NewAttractionTour />} />
              <Route
                path="attractions/:id/edit"
                element={<EditAttractionTour />}
              />
            </Route>
            <Route path="tickets">
              <Route index element={<BookedTickets />} />
              <Route path="booked" element={<BookedTickets />} />
              <Route path="canceled" element={<CanceledTickets />} />
              <Route path="refunds" element={<RefundTickets />} />
              <Route path="new" element={<NewTicket />} />
              <Route path=":id/edit" element={<EditTicket />} />
            </Route>
            <Route path="passengers" element={<Passengers />}>
              <Route path="new" element={<NewPassenger />} />
              <Route path=":id/edit" element={<EditPassenger />} />
            </Route>
            <Route path="coupons" element={<Coupons />}>
              <Route path="new" element={<NewCoupon />} />
              <Route path=":id/edit" element={<EditCoupon />} />
            </Route>
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};

export default App;
