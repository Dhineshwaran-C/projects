import React from 'react'
import {Box, Heading,Text} from 'native-base'
import Colors from '../color'
import Rating from "../Components/Rating"

function Review() {
  return (
    <Box my={9}>
        <Heading bold fontSize={15} mb={2}>
            REVIEW
        </Heading>

        <Box p={3} bg={Colors.deepestGray} mt={5} rounded={5}>
            <Heading fontSize={15} color={Colors.black}>
                User Review
            </Heading>
            <Rating value={4} />
            <Text mb={3}>Feb 02 2023</Text>
        </Box>
    </Box>
  )
}

export default Review