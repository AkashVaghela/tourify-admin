/* eslint-disable react/prop-types */
import React from "react";
import { Box, Flex, Heading, Avatar } from "@chakra-ui/react";

const Header = ({ title }) => {
  return (
    <Box pos="sticky" top="0" bg="white" p={2.5} boxShadow="base">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading
          as="h1"
          fontSize="26px"
          color="gray.700"
          fontWeight="bold"
          textTransform={"capitalize"}
        >
          {title}
        </Heading>
        <Avatar
          boxShadow="base"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </Flex>
    </Box>
  );
};

export default Header;
