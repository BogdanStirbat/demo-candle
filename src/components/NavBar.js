import React, { useContext } from 'react'
import { Flex, Icon, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdMenu, MdShoppingBasket } from 'react-icons/md'

import { ShopContext } from '../context/shopContext'

const NavBar = () => {

  const { openCart, openMenu } = useContext(ShopContext)

  return (
    <Flex backgroundColor="#B5B7B4" flexDir="row" justifyContent="space-between" p="2rem">
      <Icon fill="white" cursor="pointer" as={MdMenu} w={30} h={30} onClick={ () => openMenu() }></Icon>
      <Link to="/">
        <Image src="https://cdn.shopify.com/s/files/1/0571/7793/1948/files/demo-candle-logo.svg?v=1622060749" w={150} h={150} />
      </Link>
      <Icon fill="white" cursor="pointer" as={MdShoppingBasket} w={30} h={30} onClick={ () => openCart() }></Icon>
    </Flex>
  )
}

export default NavBar