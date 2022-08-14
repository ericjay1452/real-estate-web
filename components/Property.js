import Link from "next/link";
import Image from "next/image";
import {Flex, Box, Text, Avatar} from "@chakra-ui/react"
import {FaBed, FaBath } from "react-icons/fa"
import {GoVerified} from "react-icons/go"
import { BsGridFill} from "react-icons/bs"
import millify from "millify";

const Property = ({property : {
    // Direct destructuring of objects from my Props
    coverPhoto,price, 
    rentFrequency,rooms, 
    title,externalID,baths,
     area, agency, isVerified
}}) =>(
    <Link href = {`/property/${externalID}`} passHref>
    {title}
    </Link>
)

export default Property