import Head from "next/head";
import {Box} from "@chakra-ui/react"

const Layout = ({children}) => {
            return(<>
            <Head>
                <title>UAE Real Estate Website</title>
            </Head>

            <Box className="w-full bg-neutral-200 max-w-full">
             <header>
                {/* <Navbar /> */}
                hello
             </header>

                <main>
                    {children}
                </main>
             
             <footer>
                {/* <Footer /> */}
                hdelkkr
             </footer>
            </Box>
            </>)
}

export default Layout