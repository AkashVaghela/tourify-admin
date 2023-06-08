/* eslint-disable react/prop-types */
import React from "react";
import { Flex, Text, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon, title, isOpen }) => {
  return (
    <NavLink to={to}>
      <Flex alignItems="center" gap="4">
        {icon && <Icon as={icon} boxSize={6} color="gray.200" />}
        {isOpen && (
          <Text
            textTransform="capitalize"
            fs="lg"
            color="gray.200"
            fontWeight="500"
          >
            {title}
          </Text>
        )}
      </Flex>
    </NavLink>
  );
};

export default NavItem;
