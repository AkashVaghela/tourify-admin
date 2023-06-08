import React, { useState } from "react";
import {
  Flex,
  IconButton,
  Text,
  Icon,
  Menu,
  MenuList,
  MenuItem,
  Box,
  MenuGroup,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavItem from "../navItem/NavItem";
import {
  MdDashboard,
  MdAirplaneTicket,
  MdTour,
  MdAttractions,
  MdPerson2,
  MdLogin,
} from "react-icons/md";
import { Link } from "react-router-dom";

const navbar = [
  {
    to: "/",
    icon: <MdDashboard />,
    title: "dashboard",
  },
  {
    to: "/tours",
    icon: <MdAirplaneTicket />,
    title: "tours",
    children: [
      {
        to: "/cities",
        title: "cities",
      },
      {
        to: "/attractions",
        title: "attractions",
      },
    ],
  },
  {
    to: "/tickets",
    icon: <MdAirplaneTicket />,
    title: "tickets",
    children: [
      {
        to: "/booked",
        title: "booked",
      },
      {
        to: "/canceled",
        title: "cancel",
      },
      {
        to: "/refunds",
        title: "refund",
      },
    ],
  },
  {
    to: "/passengers",
    icon: <MdTour />,
    title: "passengers",
  },
  {
    to: "/coupons",
    icon: <MdAttractions />,
    title: "coupons",
  },
  {
    to: "/reports",
    icon: <MdPerson2 />,
    title: "reports",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

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
        <Menu id="menu">
          <MenuList>
            {navbar.map((item) => {
              console.log(item.to);
              return (
                <>
                  {item.children ? (
                    <MenuGroup key={item.to}>
                      <MenuItem icon={item.icon}>
                        <Link to={item.to}>{item.title}</Link>
                      </MenuItem>
                      {item.children.map((child) => {
                        console.log(child.to);
                        return (
                          <MenuItem key={child.to}>
                            <Link to={child.to}>{child.title}</Link>
                          </MenuItem>
                        );
                      })}
                    </MenuGroup>
                  ) : (
                    <MenuItem key={item.to} icon={item.icon}>
                      <Link to={item.to}>{item.title}</Link>
                    </MenuItem>
                  )}
                </>
              );
            })}
          </MenuList>
        </Menu>
      </Flex>

      <Flex
        p={2}
        gap="4"
        width="100%"
        rounded={4}
        alignItems="center"
        _hover={{ background: "teal.900" }}
      >
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
