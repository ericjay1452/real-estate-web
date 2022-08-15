import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Box, Flex, Select, Input, Spinner, Text,Icon, Button } from "@chakra-ui/react";
import { FcCancel } from "react-icons/fc";
import Image from "next/image";
import { filterData, getFilterValues } from "../utils/FilterData";
const SearchComp = () => { 
    const [filters, setFilters ] = useState(filterData)

    const PropertiesSearched = ({filterValue}) => {
     
    }

    return(
        <Flex bg={"gray.100"} justifyContent = {"center"} flexWrap = "wrap" p={"4"}>
          {filters.map( (filter) =>(
            <Box key={filter.queryName}>
              <Select 
              p={"2"}
              placeholder = {filter.placeholder}
              w = {"fit-content"}
              onChange={(e)=>PropertiesSearched({[filter.queryName] : e.target.value})}>
               {
                filter?.items?.map( (item) => (
                    <option key={item.name} value={item.name}>{item.name}</option>
                ))
               }
              </Select>
            </Box>
          ))}
        </Flex>
    )
}

export default SearchComp

