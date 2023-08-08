import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Button } from "@chakra-ui/react";
import React from "react";
import cart from "../assets/cart.png";

const CarWidget = () => {
  return (
    <Flex>
      <Box>
        <button>
          <img src={cart} alt="imagen de carrito" width="30px" height="30px" />
        </button>
      </Box>
      <Box>
        <p>3</p>
      </Box>
    </Flex>
  );
};

export default CarWidget;
