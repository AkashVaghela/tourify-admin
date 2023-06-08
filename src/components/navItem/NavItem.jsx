/* eslint-disable react/prop-types */
import React from "react";
import { MenuItem, Text, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavItem = ({ item, showChild }) => {
  return (
    <NavLink
      to={item.to}
      onClick={() => {
        item.children && showChild();
      }}
    >
      <MenuItem key={item.to}>
        {item.icon && (
          <Icon as={item.icon} boxSize={6} color="gray.200" marginRight={2} />
        )}
        <Text color="gray.200" fontWeight="semibold" textTransform="capitalize">
          {item.title}
        </Text>
      </MenuItem>
    </NavLink>
  );
};

export default NavItem;
