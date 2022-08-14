import Link from "next/link"
import Image from "next/image"
import {Flex, Box, Text, Button} from "@chakra-ui/react"

const Banner = ({purpose, ImageUrl, desc1, desc2, Linktext, link, title1, title2}) =>(
    <Flex flexWrap={"flex"} justifyContent= "center" alignItems={"center"} m="10">
       <Image src={ImageUrl} width= {500} height = {300} alt = " Banner image" />
   
   <Box p="5">
    <Text fontSize ="sm" fontWeight={"medium"} color = {"gray.500"}>
      {purpose}
    </Text>
   
    <Text fontSize ="3xl" fontWeight={"bold"} >
      {title1} <br /> {title2}
    </Text>
   
    <Text fontSize ="lg" paddingTop={"3"} paddingBottom= {"3"} fontWeight={"medium"} color = {"gray.700"}>
      {desc1 } <br /> {desc2}
    </Text>
   
    <Button className="text-xl bg-black">
      <Link href={link} >{Linktext}</Link>
    </Button>
   </Box>
    </Flex>
   )
   
   export default Banner;