import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image, Button } from '@chakra-ui/react'

import { ShopContext } from '../context/shopContext'
import WelcomeBanner from '../components/WelcomeBanner'

const Home = () => {

  const { fetchAllProducts, products, addItemToCheckout } = useContext(ShopContext)

  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])

  if (!products) return <div>Loading...</div>


  console.log(products)

  return (
    <Box>
      <WelcomeBanner />
      <Grid templateColumns="repeat(3, 1fr)">
        {
          products.map(product => (
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box _hover={{ opacity: '80%' }} textAlign="center">
                <Image src={product.images[0].src} />
                <Text>
                  {product.title}
                </Text>
                <Text>
                  ${product.variants[0].price}
                </Text>
                <Button
                  onClick={(e) => {e.preventDefault(); addItemToCheckout(product.variants[0].id, 1)}}
                  _hover={{ opacity: '70%' }}
                  w="8rem" backgroundColor="#B5B7B4" color="white">
                  Add To Cart
                </Button>
              </Box>
            </Link>
          ))
        }
      </Grid>
    </Box>
  )
}

export default Home