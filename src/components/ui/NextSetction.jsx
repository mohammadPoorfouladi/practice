import { Box, Card, CardMedia } from "@mui/material"
import { grey } from "@mui/material/colors"

const NextSetction =()=>{
return(
    <Box sx={{
        width:"100%"
    }}>
       <Box sx={{
 
    py:7,
    px:{xs:1,sm:1.4,md:10.5},
    display:"flex",
 justifyContent:"center",
 alignItems:"center",
 flexDirection:{xs:"column",md:"row"},
gap:4,background: `linear-gradient(to top,rgba(202, 202, 202, 0.3),rgba(255, 255, 255, 0))`,

}}>
     <Card sx={{ 
            borderRadius: '16px',
            border: 'none',
            boxShadow: 'none'
            }}>
            <CardMedia
                component="img"
                image="https://cdn.masaf.ir/survey/fd4fdd61-3921-42cc-9e02-03ab334abea1_11"
                alt="photo1"
    />
        </Card>
        <Card sx={{
            borderRadius: '16px',
            border: 'none',
            boxShadow: 'none'
            }}>
            <CardMedia
                component="img"
                image="https://cdn.masaf.ir/survey/8ce83724-01f9-46f2-827f-f7ac0fcab583_2%20"
                alt="photo2"
                
            />
     
        </Card>
</Box> 
    </Box>

)
}

export default NextSetction