import { Center } from "@chakra-ui/react";
import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const { categoria } = useParams();
  const productos = [
    {
      id: 1,
      nombre: "Bota (negro)",
      image: "../src/assets/bota1.webp",
      description:
        "Bota tipo chelsea de doble elástico confeccionada en cuero vacuno de suave textura.",
      precio: 35000,
      categoria: "botas",
    },
    {
      id: 2,
      nombre: "Zapato (marron)",
      image: "../src/assets/zapato1.webp",
      description:
        "Zapato de cuero vacuno con brillo. La suela es de cuero, trabajada artesanalmente. Posee media plantilla de cuero.",
      stock: 10,
      precio: 30000,
      categoria: "zapatos",
    },
    {
      id: 3,
      nombre: "Zapato (negro)",
      image: "../src/assets/zapato2.webp",
      description:
        "Zapato tipo oxford confeccionado en cuero vacuno semi brillo. El cuero tiene un proceso de pulido que le da una textura y un brillo únicos.",
      stock: 15,
      precio: 35000,
      categoria: "zapatos",
    },
    {
      id: 4,
      nombre: "Bota (marron)",
      image: "../src/assets/bota2.webp",
      description:
        "Bota tipo chelsea de doble elástico confeccionada en cuero vacuno de suave textura.",
      stock: 6,
      precio: 32000,
      categoria: "botas",
    },
    {
      id: 5,
      nombre: "Borcego (negro)",
      image: "../src/assets/borcego1.webp",
      description:
        "Borcego acordonado de cuero vacuno con tratamiento rústico. Posee cierre interior para un mejor acceso.",
      stock: 8,
      precio: 40000,
      categoria: "borcegos",
    },
    {
      id: 6,
      nombre: "Borcego (marron)",
      image: "../src/assets/borcego2.webp",
      description:
        "Borcego de horma en punta confeccionada en cuero vacuno con suela de goma ruta. El acceso es mediante cordones.",
      stock: 10,
      precio: 45000,
      categoria: "borcegos",
    },
    {
      id: 7,
      nombre: "Borcego (negro)",
      image: "../src/assets/borcego3.webp",
      description:
        "Borcego de horma en punta confeccionada en cuero vacuno con suela de goma ruta. El acceso es mediante cordones.",
      stock: 10,
      precio: 55000,
      categoria: "borcegos",
    },
    {
      id: 8,
      nombre: "Bota (negro)",
      image: "../src/assets/bota3.webp",
      description:
        "Bota acordonada confeccionada en cuero vacuno con tratamiendo de brush off que le da un efecto bi-tonal.",
      stock: 10,
      precio: 50000,
      categoria: "botas",
    },
    {
      id: 9,
      nombre: "Zapato (marron)",
      image: "../src/assets/zapato3.webp",
      description:
        "Zapato de cuero vacuno con brillo. La suela es de cuero, trabajada artesanalmente. Posee media plantilla de cuero.",
      stock: 14,
      precio: 30000,
      categoria: "zapatos",
    },
  ];

  const getProductos = () => {
    return new Promise((resolve, reject) => {
      if (productos.length === 0) {
        reject(new Error("No hay datos"));
      }
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  async function fetchingData() {
    try {
      const productosFetched = await getProductos();

    } catch (error) {
      ;
    }
  }
  fetchingData();

  const filtroProducts = productos.filter(
    (producto) => producto.categoria === categoria
  );

  return (
    <Center p="1rem">
      <ItemList productos={filtroProducts} />
    </Center>
  );
};
export default ItemListContainer;
