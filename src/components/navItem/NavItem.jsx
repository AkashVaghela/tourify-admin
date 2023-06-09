/* eslint-disable react/prop-types */
import React from "react";
import { MenuItem, Text, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavItem = ({ item, isOpen, onClick, isChild, chevronIcon }) => {
  return (
    <NavLink
      to={item.to}
      onClick={() => onClick()}
    >
      <MenuItem
        mb={2}
        key={item.to}
        _hover={{ background: !isChild && "teal.900", rounded: "md" }}
        _active={{ background: !isChild && "teal.900", rounded: "md" }}
        _focus={{ background: !isChild && "teal.900", rounded: "md" }}
        ml={isChild && 12}
      >
        {item.icon && (
          <Icon as={item.icon} color="gray.200" boxSize={6} mr={4} />
        )}
        {isOpen && (
          <Text

            color="gray.200"
            fontWeight={isChild ? "medium" : "semibold"}
            textTransform="capitalize"
          >
            {item.title}
          </Text>
        )}
        {item.children && (
          <Icon as={chevronIcon} color="gray.200" boxSize={6} ml="auto" />
        )}
      </MenuItem>
    </NavLink>
  );
};

export default NavItem;
