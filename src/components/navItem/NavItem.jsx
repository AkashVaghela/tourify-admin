/* eslint-disable react/prop-types */
import React from "react";
import { MenuItem, Text, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavItem = ({ item, isOpen, showChild }) => {
  return (
    <NavLink
      to={item.to}
      onClick={() => {
        item.children && showChild();
      }}
    >
      <MenuItem
        mb={2}
        key={item.to}
        _hover={{ background: "teal.900", rounded: "md" }}
        _active={{ background: "teal.900", rounded: "md" }}
        _focus={{ background: "teal.900", rounded: "md" }}
      >
        {item.icon && (
          <Icon as={item.icon} color="gray.200" boxSize={6} mr={4} />
        )}
        {isOpen && (
          <Text
            color="gray.200"
            fontWeight="semibold"
            textTransform="capitalize"
          >
            {item.title}
          </Text>
        )}
      </MenuItem>
    </NavLink>
  );
};

export default NavItem;
