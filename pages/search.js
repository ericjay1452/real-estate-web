import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {Box, Button, Flex, flex, Icon, Text} from "@chakra-ui/react"
import { BsFilter } from "react-icons/bs";
import  {Property, SearchComp}  from "../components";

const search = () => {
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
            {[].map( (property) => <Property property={property} key = {property.id}/>)}
        </Flex>

        {[].length === 0 &&(
            <Flex justifyContent={"center"} alignItems = {"center"} flexDirection = {"column"}
             marginTop = {"5"} marginBottom = {"5"}
            >

            </Flex>
        )}

      </Box>
    )
}

export default search