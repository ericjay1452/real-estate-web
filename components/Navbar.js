import { Link } from "@chakra-ui/react";
import {Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer} from "@chakra-ui/react"
import {FcMenu, FcHome, FcAbout } from "react-icons/fc"
import {BsSearch } from "react-icons/bs"
import {Fikey } from "react-icons/fi"

const Navbar = () =>{
    return (
        <Flex padding={"2"}  className = "bg-slate-400">
           <Box fontSize={"2xl"} fontWeight = {"bold"} color = {"blue.400"}>
            <Link href="/" paddingLeft={"2"}>Real-Estate</Link> 
           </Box>
           <Spacer />

           <Box>
            <Menu>
                <MenuButton as = {IconButton} icon = {<FcHome />} variant = {"outlined"} color = "red.400"/>
            </Menu>
           </Box>
        </Flex>
    )
}

export default Navbar;