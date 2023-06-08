/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Flex,
  IconButton,
  Text,
  Icon,
  Menu,
  MenuGroup,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  MdDashboard,
  MdAirplaneTicket,
  MdTour,
  MdAttractions,
  MdPerson2,
  MdLogin,
} from "react-icons/md";
import NavItem from "../navItem/NavItem";

const navbar = [
  {
    to: "/",
    icon: MdDashboard,
    title: "dashboard",
  },
  {
    to: "/tours",
    icon: MdAirplaneTicket,
    title: "tours",
    children: [
      {
        to: "/tours/cities",
        title: "cities",
      },
      {
        to: "/tours/attractions",
        title: "attractions",
      },
    ],
  },
  {
    to: "/tickets",
    icon: MdAirplaneTicket,
    title: "tickets",
    children: [
      {
        to: "/tickets/booked",
        title: "booked",
      },
      {
        to: "/tickets/canceled",
        title: "cancel",
      },
      {
        to: "/tickets/refunds",
        title: "refund",
      },
    ],
  },
  {
    to: "/passengers",
    icon: MdTour,
    title: "passengers",
  },
  {
    to: "/coupons",
    icon: MdAttractions,
    title: "coupons",
  },
  {
    to: "/reports",
    icon: MdPerson2,
    title: "reports",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showChild, setShowChild] = useState(false);

  return (
    <Flex
      p="4"
      mr="8"
      left="5"
      h="96vh"
      mt="2vh"
      pos="sticky"
      rounded="lg"
      boxShadow="md"
      overflow="hidden"
      flexDir="column"
      w={isOpen ? "200px" : "72px"}
      alignItems={isOpen ? "start" : ""}
      bg="teal.700"
    >
      <IconButton mb={2} onClick={() => setIsOpen(!isOpen)}>
        <Icon as={HamburgerIcon} boxSize={6} color="teal.600" />
      </IconButton>

      <Flex flexDir="column" flexGrow="1" w="100%">
        <Menu>
          {navbar.map((item) => {
            return (
              <>
                {item.children ? (
                  <>
                    <NavItem
                      item={item}
                      showChild={() => setShowChild(!showChild)}
                    />
                    {item.children.map((child) => {
                      return (
                        showChild && (
                          <MenuGroup key={child.to}>
                            <NavItem
                              item={child}
                              showChild={() => setShowChild(!showChild)}
                            />
                          </MenuGroup>
                        )
                      );
                    })}
                  </>
                ) : (
                  <NavItem
                    item={item}
                    showChild={() => setShowChild(!showChild)}
                  />
                )}
              </>
            );
          })}
        </Menu>
      </Flex>

      <Flex p={2} gap="4" width="100%" rounded={4} alignItems="center">
        <Icon as={MdLogin} boxSize={6} color="gray.200" />
        {isOpen && (
          <Text
            fs="lg"
            textTransform="capitalize"
            color="gray.200"
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
