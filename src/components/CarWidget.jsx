import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const CarWidget = () => {
  return (
    <Flex>
      <Box>
        <StarIcon />
      </Box>
      <Box>
        <p>3</p>
      </Box>
    </Flex>
  );
};

export default CarWidget;
