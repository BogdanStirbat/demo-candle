import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Grid, Image, Text, Button, Heading, Flex } from '@chakra-ui/react'

import { ShopContext } from '../context/shopContext'

const ProductPage = () => {

  const { handle } = useParams()

  const { fetchProductWithHandle, addItemToCheckout, product, clearProduct } = useContext(ShopContext)

  useEffect(() => {
    fetchProductWithHandle(handle)

    return function cleanUp() {
      clearProduct()
    }
  }, [fetchProductWithHandle, handle, clearProduct])

  if (!product.title) return <div>Loading...</div>

  return (
    <Box p="2rem">
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}>
        <Flex justifyContent="center" alignContent="center">
          <Image src={product.images[0].src}></Image>
        </Flex>
        
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <Heading p="2rem">{product.title}</Heading>
          <Text fontWeight="bold" p="2rem">{product.variants[0].price}</Text>
          <Text p="2rem" color="gray.500">{product.description}</Text>
          <Button
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
            _hover={{ opacity: '70%' }}
            w="10rem" backgroundColor="#B5B7B4" color="white"
          >Add To Cart</Button>
        </Flex>
      </Grid>
    </Box>
  )
}

export default ProductPage
