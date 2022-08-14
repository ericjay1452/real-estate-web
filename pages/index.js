import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import {Flex, Box, Text, Button} from "@chakra-ui/react"
import HomeImg from "../images/Home.jpg"
import { FetchApi, baseUri } from '../utils/FetchApi'

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

 <Button fontSize = "xl">
   <Link href={link} >{Linktext}</Link>
 </Button>
</Box>
 </Flex>
)

export default function Home() {
  return (
    <Box className={`${styles.container}`}>
       <Banner 
       purpose={"RENT A HOME"}
       title1 = {"Rentals Home for"}
       title2 = {"For Everyone"}
       desc1 = {"Explore Apartments, Villa, Homes e.t.c"}
       desc2 = {"and many more"}
       Linktext = {"Explore Renting"}
       link = "/search?purpose=for-rent"
       ImageUrl={HomeImg}
       /> 

       <Flex flexWrap = "wrap">

       </Flex>

       <Banner 
       purpose={"BUY A HOME"}
       title1 = {"Find, Buy, & Own your"}
       title2 = {"Dream Home"}
       desc1 = {"Explore Apartments, Villa, Homes e.t.c"}
       desc2 = {"and many more"}
       Linktext = {"Explore Buying"}
       link = "/search?purpose=for-sale"
       ImageUrl={HomeImg}
       />
       <Flex flexWrap = "wrap">

       </Flex>
    </Box>
  )
}


export async function getStaticProps() {
  const propertyForSale = await FetchApi(`${baseUri}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await FetchApi(`${baseUri}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props : {
      propertyForRent : propertyForRent?.hits,
      propertyForSale : propertyForSale?.hits
    }
  }
}