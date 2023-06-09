import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, Text } from "@chakra-ui/react";
import Header from "../../components/header/Header";

const Coupons = () => {
  return (
    <>
      <Header title="coupons" />
      <Box p={5} h="full" overflow="hidden">
        <Button
          mb="2.5"
          ml="auto"
          size="md"
          bg="teal.600"
          display="block"
          color="gray.200"
          _hover={{ background: "teal.800" }}
          _active={{ background: "teal.800" }}
          _focus={{ background: "teal.800" }}
        >
          <NavLink to="new">
            <Text textTransform="capitalize" fontWeight="normal">
              new coupon
            </Text>
          </NavLink>
        </Button>

        {/* table goes here */}
        <Box h="full" overflow="auto"></Box>
      </Box>
    </>
  );
};

export default Coupons;
