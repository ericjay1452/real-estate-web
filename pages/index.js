import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
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

 <Button fontSize = "xl" bg={"blue.300"} color = "white">
   <Link href={link} >{Linktext}</Link>
 </Button>
</Box>
 </Flex>
)

export default function Home() {
  return (
    <div className={`${styles.container}`}>
       <Banner 
       purpose={"RENT A HOME"}
       title1 = {"Rentals Home for"}
       title2 = {"For Everyone"}
       desc1 = {"Explore Apartments, Villa, Homes e.t.c"}
       desc2 = {"and many more"}
       Linktext = {"Explore Renting"}
       />
    </div>
  )
}
