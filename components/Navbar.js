import { Link } from "@chakra-ui/react";
import {Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer} from "@chakra-ui/react"
import {FcMenu, FcHome, FcAbout, FcKey } from "react-icons/fc"
import {BsSearch } from "react-icons/bs"

const Navbar = () =>{
    return (
        <Flex padding={"2"}  className = "bg-slate-400">
           <Box fontSize={"2xl"} fontWeight = {"bold"} className = "text-black">
            <Link href="/" paddingLeft={"2"}>Real-Estate</Link> 
           </Box>
           <Spacer />

           <Box>
            <Menu>
                <MenuButton as = {IconButton} icon = {<FcMenu />} variant = {"outlined"} className = "text-black" />
                <MenuList>
                  <Link href = "/" passhref = "true">
                    <MenuItem icon={<FcHome />}> Home </MenuItem>
                  </Link>
                
                  <Link href = "/search" passhref = "true">
                    <MenuItem icon={<BsSearch />}> Search </MenuItem>
                  </Link>

                   <Link href = "/search?purpose=for-sale" passhref = "true">
                    <MenuItem icon={<FcAbout />}> Buy Property</MenuItem>
                  </Link> 

                  <Link href = "/search?purpose=for-rent" passhref = "true">
                    <MenuItem icon={<FcKey />}> Rent Property</MenuItem>
                  </Link>
                </MenuList> 
            </Menu>
           </Box>
        </Flex>
    )
}

export default Navbar;