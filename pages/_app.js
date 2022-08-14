import '../styles/globals.css'
import Router from 'next/router'
import Head from 'next/head'
import Nprogress from 'nprogress'
import {ChakraProvider} from "@chakra-ui/react"
import Layout from "../components"
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
