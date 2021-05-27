import React from 'react'
import { Box, Heading, Text, Center } from '@chakra-ui/react'

const WelcomeBanner = () => {
  return (
    <Box p="1rem">
      <Center display="flex" flexDir="column" textAlign="center">
        <Heading py="1rem" color="#684A48">
          Welcome to Demo Candle!
        </Heading>
        <Text pb="1rem" color="gray.500">
          This is a demo store, built with Reach, using Shopify as a headless CMS.
        </Text>
      </Center>
    </Box>
  )
}

export default WelcomeBanner
