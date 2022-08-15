import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {Box, Button, Flex, flex, Icon, Text} from "@chakra-ui/react"
import { BsFilter } from "react-icons/bs";
import  {Property, SearchComp}  from "../components";
import { FetchApi, baseUri } from "../utils/FetchApi";

const search = ({properties}) => {
    const [searchTerm, setSearchTerm ] = useState(false);
    const Router = useRouter();

    return (
      <Box>
        <Flex
        cursor={"pointer"}
        bg = {"gray.100"}
        borderBottom = {"1px"}
        p = {"2"}
        justifyContent = {"center"}
        alignItems = {"center"}
        fontWeight = {"black"}
        fontSize = {"lg"}
        >   
          <Button borderRadius = {"0.75rem"} bg = {"gray.400"} onClick = {() =>setSearchTerm( (prevTerm) => !prevTerm)}>
            <Text> Search Property by Filter</Text>
            <Icon as = {BsFilter} paddingLeft = {"2"} w = {"7"}/>
            </Button>
        </Flex>

        {searchTerm && <SearchComp />}

        <Text fontSize={"xl"} padding = {"4"} fontWeight = {"bold"} textAlign = {"center"}>
           Property {Router.query.purpose}
        </Text>

        <Flex flexWrap={"wrap"}>
            {properties.map( (property) => <Property property={property} key = {property.id}/>)}
        </Flex>

        {properties.length === 0 &&(
            <Flex justifyContent={"center"} alignItems = {"center"} flexDirection = {"column"}
             marginTop = {"5"} marginBottom = {"5"}
            >
             <h1> Hi Sorry</h1>
             <h3>No Result Found</h3>
            </Flex>
        )}

      </Box>
    )
}

export default search

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
  
    const data = await FetchApi(`${baseUri}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  
    return {
      props: {
        properties: data?.hits,
      },
    };
  }