import React from "react";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar/Sidebar";

const Layout = () => {
  return (
    <Flex h="100vh" overflow="hidden">
      <Sidebar />
      <Flex direction={"column"} flexGrow={1}>
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Layout;
