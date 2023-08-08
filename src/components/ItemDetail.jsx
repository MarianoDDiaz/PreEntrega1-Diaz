import { Center, Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom"
import ItemCount from "./ItemCount";

const ItemDetail = ({ productos }) => {
  const { id } = useParams();

  const filtroProducts = productos.filter((producto) => producto.id == id)

  return (
    <div>
      {filtroProducts.map((p) => {
        return (
          <div key={p.id}>
            <Center p='1rem'>
              <Card>
                <CardHeader>
                  <Heading size='md'>{p.nombre}</Heading>
                </CardHeader>
                <CardBody>
                  <img src={p.image} alt="" />
                  <text>{p.description}</text>

                </CardBody>
                <CardFooter>
                  <ItemCount />

                </CardFooter>
              </Card>
            </Center>
          </div>
        );
      })}
    </div>
  )
}
  ;

export default ItemDetail;
