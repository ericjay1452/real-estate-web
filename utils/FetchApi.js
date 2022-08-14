import axios from "axios";

export const baseUri = "https://bayut.p.rapidapi.com" 




export const FetchApi = async (uri) => {
   const {data} = await axios.get( (uri), {
       headers: {
    'X-RapidAPI-Key': '72889d58efmshba9d495bc37ed6dp19aec5jsn97b99fd0655f',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
   })
}