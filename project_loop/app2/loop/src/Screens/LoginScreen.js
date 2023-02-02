import React from 'react'
import { Box,Button,Pressable,Image,Text,Heading,Input,VStack} from 'native-base';
import Colors from '../color';
import { MaterialIcons , Ionicons } from '@expo/vector-icons';



function LoginScreen() {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image flex={1} alt='logo'
       resizeMode="cover"
       size="lg"
       w="full"
      source={require("../../assets/cover.png")} />
      <Box 
      w="full" 
      h="full" 
      position="absolute" 
      top="0" 
      px="6"
      justifyContent="center"
      >
        <Heading color={Colors.white}>LOGIN</Heading>
        <VStack space={5} pt="6">

          {/* Email */}
          <Input
          InputLeftElement={
            <MaterialIcons name="email" size={20} color={Colors.white} />
          }
          variant="underlined" 
          placeholder="Email Id" 
          w="70%"
          pl={2}
          type="text"
          color={Colors.white} 
          borderBottomColor={Colors.underline}
          />

          {/* Password */}
          <Input
          InputLeftElement={
            <Ionicons name="eye" size={20} color={Colors.white} />
          }
          variant="underlined" 
          placeholder="Password" 
          w="70%"
          pl={2}
          type="password"
          color={Colors.white} 
          borderBottomColor={Colors.underline}
          />
        </VStack>
        <Button 
        _pressed={{
          bg:Colors.main,
        }}
        my={30} 
        w="40%" 
        rounded={50} 
        bg={Colors.smain}
        >
          LOGIN
        </Button>
        <Pressable mt={4}>
          <Text color={Colors.deepestGray}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  )
}

export default LoginScreen