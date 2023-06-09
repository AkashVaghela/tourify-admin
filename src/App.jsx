import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
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

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          element: <Dashboard />,
          index: true
        },
        {
          path: "tours",
          element: <CityTours />,
          children: [
            {
              index: true,
              path: "cities",
              element: <CityTours />
            },
            {
              path: "attractions",
              element: <AttractionTours />
            }
          ]
        },
        {
          path: "tickets",
          element: <BookedTickets />,
          children: [
            {
              index: true,
              path: "booked",
              element: <BookedTickets />
            },
            {
              path: "canceled",
              element: <CanceledTickets />
            },
            {
              path: "refunds",
              element: <RefundTickets />
            }
          ]
        },
        {
          path: "passengers",
          element: <Passengers />,
        },
        {
          path: "coupons",
          element: <Coupons />,
        },
        {
          path: "reports",
          element: <Reports />,
        }
      ]
    }
  ]);
  return routes;
};

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
