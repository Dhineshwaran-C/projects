import React, { useState } from 'react'
import { HStack,Heading,Box,ScrollView,Text ,View,Image, Spacer } from 'native-base';
import Colors from '../color';
import Rating from "../Components/Rating"
import NumericInput from 'react-native-numeric-input';
import Buttone from "../Components/Buttone"
import Review from '../Components/Review';

function SingleProductScreen() {
  const [value,setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>

        <Image source={require("../../assets/images/4.png")} alt="Image" w="full" h={300} top={5} resizeMode="contain"/>

        <Heading bold fonSize={15} mb={2} lineHeight={80}>
        Bomber Jacket For Men
        </Heading>
        <Rating value={4}/>
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput value={value} totalWidth={140} totalHeight={30}
          iconSize={25}
          step={1}
          maxValue={15}
          minValue={0}
          borderColor={Colors.deepGray}
          rounded
          textColor={Colors.black}
          iconStyle={{color:Colors.white}}
          rightButtonBackgroundColor={Colors.main}
          leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            Rs.400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Buttone bg={Colors.main} color={Colors.white} mt={10}>
          ADD TO CART
          </Buttone>

          {/* review */}
          <Review />

      </ScrollView>
    </Box>
  )
}

export default SingleProductScreen