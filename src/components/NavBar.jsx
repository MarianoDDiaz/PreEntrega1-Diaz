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
import CartWidget from "./CartWidget";
import ImagenLogo from "../assets/zapato2.png";
import { Link } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import Contact from "./Contact";
import About from "./About";
import ItemList from "./ItemList";





const NavBar = () => {
  return (
    <Flex className="encabezado">
      <Box>
        <Link to={"/"}>
          BERNABEU
          <img
            src={ImagenLogo}
            alt="logo del shop"
            width="50px"
            height="50px"
            className="imagenLogo"
          />
        </Link>
      </Box>
      <Spacer />
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Categorias
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to={`/categoria/${'zapatos'}`}>
              ZAPATOS
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/categoria/${'borcegos'}`}>
              BORCEGOS
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/categoria/${'botas'}`}>
              BOTAS
            </Link>
          </MenuItem>
        </MenuList>
        <Spacer />
        <Link to={"/contact"}>
          <Button colorScheme='linkedin' size='sm' className="Botones">
            <Contact />
          </Button>
        </Link>
        <Link to={"/about"}>
          <Button colorScheme='linkedin' size='sm' className="Botones">
            <About />
          </Button>
        </Link>
        <Box>
          <Link to={"/Cart"}>
            <CartWidget />
          </Link>
        </Box>
      </Menu>
    </Flex >
  );
};

export default NavBar;
