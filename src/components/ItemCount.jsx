import React from 'react'
import { useState } from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }
    return (
        <div>
            <p>{contador}</p>
            <Button onClick={sumar} colorScheme='teal' size='md'>+</Button><Button onClick={restar} colorScheme='teal' size='md'>-</Button>

        </div>

    )
}

export default ItemCount