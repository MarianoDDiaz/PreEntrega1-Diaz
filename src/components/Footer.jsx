import React from "react";

import { Text, Stack, WrapItem, Button, } from "@chakra-ui/react";


const Footer = () => {
  return (
    <Stack direction="row" h="100px" p={4} className="Footer">
      <Text>Redes sociales :</Text>
      <WrapItem>
        <Button colorScheme='whatsapp'>Whatsapp</Button>
      </WrapItem>
      <WrapItem>
        <Button colorScheme='telegram'>Telegram</Button>
      </WrapItem>
      <WrapItem>
        <Button colorScheme='twitter'>Twitter</Button>
      </WrapItem>
    </Stack>

  );
};

export default Footer;
