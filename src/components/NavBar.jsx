import React from "react";
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CarWidget from "./CarWidget";

const NavBar = () => {
  return (
    <Flex>
      <Box >
        Bernabeu
      </Box>
      <Spacer />

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Categories
        </MenuButton>
        <MenuList>
          <MenuItem>Category A</MenuItem>
          <MenuItem>Category B</MenuItem>
          <MenuItem>Category C</MenuItem>
        </MenuList>
        <Spacer />
        <Box>
          <CarWidget />
        </Box>
      </Menu>
    </Flex>
  );
};

export default NavBar;
