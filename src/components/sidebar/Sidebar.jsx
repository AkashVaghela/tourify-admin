import React, { useState } from "react";
import { Flex, IconButton, Text, Box, Icon } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavItem from "../navItem/NavItem";
import {
  MdDashboard,
  MdAirplaneTicket,
  MdTour,
  MdAttractions,
  MdPerson2,
  MdDirectionsBusFilled,
  MdSettings,
  MdLogin,
} from "react-icons/md";

const navbar = [
  {
    to: "/",
    icon: MdDashboard,
    title: "dashboard",
  },
  {
    to: "/tickets",
    icon: MdAirplaneTicket,
    title: "tickets",
    children: [
      {
        to: "/booked",
        title: "booked",
        children: false,
      },
      {
        to: "/canceled",
        title: "cancel",
        children: false,
      },
      {
        to: "/refunds",
        title: "refund",
        children: false,
      },
    ],
  },
  {
    to: "/tours",
    icon: MdTour,
    title: "tours",
  },
  {
    to: "/attractions",
    icon: MdAttractions,
    title: "attractions",
  },
  {
    to: "/employees",
    icon: MdPerson2,
    title: "employees",
  },
  {
    to: "/buses",
    icon: MdDirectionsBusFilled,
    title: "buses",
  },
  {
    to: "/settings",
    icon: MdSettings,
    title: "settings",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showChildren, setShowChildren] = useState(false);

  return (
    <Flex
      p="4"
      mr="8"
      left="5"
      h="100vh"
      bg="white"
      pos="sticky"
      rounded="md"
      boxShadow="md"
      overflow="hidden"
      flexDir="column"
      w={isOpen ? "200px" : "72px"}
      alignItems={isOpen ? "start" : ""}
    >
      <IconButton mb={2} onClick={() => setIsOpen(!isOpen)}>
        <Icon as={HamburgerIcon} boxSize={6} color="teal.600" />
      </IconButton>

      <Flex flexDir="column" flexGrow="1" w="100%">
        {navbar.map((item) => {
          return (
            <Box
              p={2}
              key={item.to}
              mb={!item.children && 2}
              rounded={4}
              transition="all 0.3s"
              onMouseEnter={() => item.children && setShowChildren(true)}
              onMouseLeave={() => item.children && setShowChildren(false)}
              _hover={{ background: !item.children ? "teal.500" : null }}
            >
              <NavItem
                to={item.to}
                isOpen={isOpen}
                icon={item.icon}
                title={item.title}
              />
              {item.children &&
                showChildren &&
                item.children.map((child) => {
                  return (
                    <Box
                      py={2}
                      ml={10}
                      rounded={4}
                      key={child.to}
                      transition="all 0.3s"
                    >
                      <NavItem
                        to={`${item.to}${child.to}`}
                        isOpen={isOpen}
                        icon={child.icon}
                        title={child.title}
                      />
                    </Box>
                  );
                })}
            </Box>
          );
        })}
      </Flex>

      <Flex
        p={2}
        gap="4"
        width="100%"
        rounded={4}
        alignItems="center"
        _hover={{ background: "teal.500" }}
      >
        <Icon as={MdLogin} boxSize={6} color="teal.600" />
        {isOpen && (
          <Text
            fs="lg"
            textTransform="capitalize"
            color="gray.900"
            fontWeight="500"
          >
            log out
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
