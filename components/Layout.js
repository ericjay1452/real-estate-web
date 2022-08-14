import Head from "next/head";
import {Box} from "@chakra-ui/react"
import { Footer, Navbar } from "../components";

const Layout = ({children}) => {
            return(<>
            <Head>
                <title>UAE Real Estate Website</title>
            </Head>

            <Box className="w-full bg-neutral-200 max-w-full">
             <header>
             <Navbar />
             </header>

                <main>
                    {children}
                </main>
             
             <footer>
            
                <Footer />
             </footer>
            </Box>
            </>)
}

export default Layout