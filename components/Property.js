import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {Flex, Box, Text, Avatar} from "@chakra-ui/react"
import {FaBed, FaBath } from "react-icons/fa"
import {GoVerified} from "react-icons/go"
import { BsGridFill} from "react-icons/bs"
import {FiPlus, FiMinus} from "react-icons/fi"
import millify from "millify";
import defaultImage from "../images/Home.jpg"

const Property = ({property : {
    // Direct destructuring of objects from my Props
    coverPhoto,price, 
    rentFrequency,rooms, 
    title,externalID,baths,
     area, agency, isVerified
}}) =>{

    const [ isTrue, setisTrue ] = useState(false);

    <Link href = {`/property/${externalID}`} passHref>

    <Flex flexWrap={"wrap"} w= "400px" p={"5"} paddingTop = {"0"} 
    justifyContent = {"flex-start"} cursor = {"pointer"}>
        <Box className = "w-full bg-neutral-600 block">
         <Image src={coverPhoto ? coverPhoto.url : defaultImage} alt = {"House picture"}
          width = {"400"} height = {"260"} className = "max-w-full block relative"/>
        </Box>

        <Box w="full">
         <Flex paddingTop={"2"} alignItems = {"center"} justifyContent= {"space-between"}>
            <Flex alignItems={"center"}>
                <Box className = "p-2">
                    {isVerified && (<GoVerified className="text-green-600"/>)}
                </Box>

                <Text fontWeight={"bold"} fontSize = {"lg"}>AED {millify(price)} { rentFrequency && (`/ ${rentFrequency}`)}</Text>
            </Flex>
            <Box>
                <Avatar size={"sm"} src = {agency?.logo?.url}/>
            </Box>

         </Flex>
         <Flex alignItems = {"center"} p = "1"   justifyContent={"space-between"} w= "250px" color = {"blue.400"}>
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify (area) } sqt <BsGridFill /> 
         </Flex>

         <Text fontSize={"lg"} className = {"text-blue-500"}>
         {title.length > 30 ? ` ${title.substring(0, 35)} ...` : `${title}`}
         </Text>

        </Box>

    </Flex>

    </Link>
}

export default Property