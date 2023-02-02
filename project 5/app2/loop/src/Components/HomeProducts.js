import React from 'react'
import { ScrollView,Flex,Pressable,Image,Box,Heading,Text } from 'native-base'
import Colors from '../color'
import products from "../data/Products"
import Rating from './Rating'


function HomeProducts() {
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Flex flexWrap="wrap" direction='row' justifyContent="space-between" px={6}>
            {
                products.map((product) =>(
                    <Pressable key={product._id} w="47%" bg={Colors.white} rounded="md" shadow={2} pt={0.3}
                    my={3} pb={2} overflow="hidden">
                        <Image source={{uri:product.image}} alt="image!!!!" w="full" h={150} resizeMode="contain" />

                        <Box px={4} px={1}>
                            
                            <Text fontSize={15} mt={2} isTruncated w="full">{product.name}</Text>
                            <Heading size="sm" bold>Rs.{product.price}</Heading>

                            {/* rating */}
                            <Rating  value={product.rating}/>
                        </Box>
                        </Pressable>
                ))
            }
        </Flex>
    </ScrollView>
  )
}

export default HomeProducts