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
                <MenuButton as = {IconButton} icon = {<FcMenu />} variant = {"outlined"} color = "red.400"/>
                <MenuList>
                  <Link href = "/" passHref>
                    <MenuItem icon={<FcHome />}> Home </MenuItem>
                  </Link>

                  <Link href = "/search" passHref>
                    <MenuItem icon={<BsSearch />}> Home </MenuItem>
                  </Link>

                  <Link href = "/search?purpose=for-sale" passHref>
                    <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                  </Link>

                  <Link href = "/search?purpose=for-rent" passHref>
                    <MenuItem icon={<Fikey />}> Rent Property</MenuItem>
                  </Link>
                </MenuList>
            </Menu>
           </Box>
        </Flex>
    )
}

export default Navbar;