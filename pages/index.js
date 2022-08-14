import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import HomeImg from "../images/Home.jpg"
import { FetchApi, baseUri } from '../utils/FetchApi'
import {Banner, Property} from '../components'
import { Flex } from '@chakra-ui/react'

export default function Home({propertyForRent, propertyForSale}) {

  console.log(propertyForRent, propertyForSale)
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
        {propertyForRent?.map( (property)=>{
          return <Property property = {property} key = {property.id} />
        })}
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
        {propertyForSale?.map( (property)=>{
          return <Property property = {property} key = {property.id} />
        })}
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