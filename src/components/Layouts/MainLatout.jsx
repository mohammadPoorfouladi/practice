import { CacheProvider } from "@emotion/react"
import createCache from '@emotion/cache';
import {ThemeProvider,createTheme } from "@mui/material";
import { prefixer } from "stylis";
import stylisRTLPlugin from "stylis-plugin-rtl";


const theme=createTheme({
  direction:"rtl",
  typography: {
    fontFamily: 'Vazir, Roboto, sans-serif'
  }

})

const cashRtl =createCache({
  key:"muirtl",
  stylisPlugins:[prefixer,stylisRTLPlugin]
})
const MainLayout=({children})=>{
return(
<CacheProvider value={cashRtl}>
<ThemeProvider theme={theme}>

{children}

</ThemeProvider>
</CacheProvider>
)}

export default MainLayout
