import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Image,
  Stack,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ nombre, description, id, image }) => {
  return (
    <>
      <div className="card-container">
        <Card maxW="xs">
          <CardBody>
            <Image src={image} borderRadius="xs" className="imagenCard" />
            <Stack mt="2" spacing="2">
              <Heading size="xs">{nombre}</Heading>
              <Text>{description}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">

              <Button colorScheme='teal' size='md'>
                <Link to={`/item/${id}`}>
                  Ver detalles
                </Link>
              </Button>

            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Item;
