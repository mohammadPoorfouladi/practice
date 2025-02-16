import { Box, Card, CardMedia, Typography } from "@mui/material"

const Section =()=>{
    return(
        <Box 
        sx={{
            width: "100%",
            backgroundColor: "#F5F5F5",
            display: "flex",
            flexDirection: "column",
            justifyContent:"center",
            alignItems: "center",
   
        }}
    >
     
        <Card sx={{ width: { xs: "96.8%",sm:"88.4%" }, borderRadius: '20x'
        ,  mt: 3.8 ,
        border: 'none',
        boxShadow: 'none',
        mb:{xs:2,md:4.5}
    }}>
            <CardMedia
                component="img"
                image="https://cdn.masaf.ir/survey/b7e202cf-0c0a-4341-a4e3-73db01dcf282_33"
                alt="photo1"
                sx={{ borderRadius:{}, }}
            />
   
        </Card>

     <Box sx={{width:{xs:"100%",sm:"88.4%"} ,display:"flex" 
        ,flexDirection:{xs:"column",sm:"row"},
        alignItems:"center",gap:2,
        mt:{xs:3.4} ,mb:4
        }}>

     <Card sx={{ width: { xs:"87.3%",md: "86.7%" },
            borderRadius: '16px',
            border: 'none',
            boxShadow: 'none'
            }}>
            <CardMedia
                component="img"
                image="https://cdn.masaf.ir/survey/2ab6d759-c01e-4f8a-866c-238963b6d2dd_La"
                alt="photo2"
              
            />
     
        </Card>
        <Card sx={{ width: { xs:"87.3%",md: "86.7%" },
            borderRadius: '16px',
            border: 'none',
            boxShadow: 'none'
            }}>
            <CardMedia
                component="img"
                image="https://cdn.masaf.ir/survey/5dd0ac3a-9d3c-4f0c-b84a-209652d4b864_1%20"
                alt="photo3"
              
            />
     
        </Card>
        <Card sx={{ width: {xs:"87.3%", md: "86.7%" },
            borderRadius: '16px',
            border: 'none',
            boxShadow: 'none'
            }}>
            <CardMedia
                component="img"
                image="https://cdn.masaf.ir/survey/078a9420-b040-49b7-b281-374ac93aaaa1_3-"
                alt="photo4"
              
            />
     
        </Card>
     </Box>

    </Box>
  
    )
}

export default Section