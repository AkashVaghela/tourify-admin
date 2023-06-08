/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Flex, Text, Icon, Menu, MenuGroup, Box } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  MdHomeFilled,
  MdAttractions,
  MdAirplaneTicket,
  MdPerson2,
  MdLoyalty,
  MdLogin,
  MdLeaderboard,
} from "react-icons/md";
import NavItem from "../navItem/NavItem";

const navbar = [
  {
    id: 1,
    to: "/",
    icon: MdHomeFilled,
    title: "dashboard",
  },
  { 
    id: 2,
    to: "/tours",
    icon: MdAttractions,
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
    id: 3,
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
    id: 4,
    to: "/passengers",
    icon: MdPerson2,
    title: "passengers",
  },
  {
    id: 5,
    to: "/coupons",
    icon: MdLoyalty,
    title: "coupons",
  },
  {
    id: 6,
    to: "/reports",
    icon: MdLeaderboard,
    title: "reports",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const clickHandler = (id) => {
     setSelectedItem(id);
};

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
      <Box ml={3} mb={6}>
        <Icon
          as={HamburgerIcon}
          boxSize={6}
          color="gray.200"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </Box>

      <Flex flexDir="column" flexGrow="1" w="100%">
        <Menu>
          {navbar.map((item) => {
            return (
              <>
                {item.children ? (
                  <>
                    <NavItem
                      item={item}
                      isOpen={isOpen}
                      showChild={() => console.log(0);}
                      onClick={clickHandler}
                    />
                    { item.children
&& selectedItem === item.id && item.children.map((child) => {
                      return (
                          <MenuGroup key={child.to}>
                            <NavItem
                              item={child}
                              isOpen={isOpen}
                              showChild={() => console.log(0);}
                            />
                          </MenuGroup>
                      );
                    })}
                  </>
                ) : (
                  <NavItem
                    item={item}
                    isOpen={isOpen}
                    showChild={() => console.log(0);}
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
