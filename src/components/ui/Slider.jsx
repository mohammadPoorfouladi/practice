import { Box,Button,Card,CardContent,CardMedia,Divider,IconButton,Typography } from "@mui/material"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { grey } from "@mui/material/colors";
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';


const Slider=()=>{
return(
    <>
    <Box>
  <Box 
        sx={{
            width: "100%",display:"flex",
            justifyContent:"center",mt:{xs:7,md:7.1},
            mb:1.9
        }}>
     
     <Box sx={{ width: { xs:"90.5%",md: "88.6%" }}}>
      
     <Box sx={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>
      
    <Box>
       <Typography color="#006064" variant="h6" fontWeight={"bold"}>
       جدیدترین سخنرانی ها
       </Typography>
      </Box>

      <Box sx={{
        display:"flex",gap:1
      }}>
         <Button sx={{color:"#006064" , border:1 
         ,borderColor:"#006064",px:2.7,borderRadius:1.5,
         }}>
          <Typography variant="body1">
            بیشتر
          </Typography>
         </Button>
         <IconButton sx={{color: grey[500],border: 1,
        borderColor: grey[300],
        width: '42.3px', 
        height: '42.3px', 
        borderRadius: 1.5,
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center'}}>
            <ChevronRightIcon sx={{fontSize:30}}/>
         </IconButton >
         <IconButton sx={{color: grey[500],border: 1,
        borderColor: grey[300],
        width: '42.3px', 
        height: '42.3px', 
        borderRadius: 1.5,
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center'}}>
         <KeyboardArrowLeftIcon sx={{fontSize:30}}/>
        </IconButton>
      </Box>
     </Box>

     </Box>
    </Box>

<Box sx={{ width: "100%", display: "flex" ,px:1 ,mt:1.7}}>
      <Box
        sx={{
          width: { xs: "85.9%", md: "88.6%" },
          height: 1,
          background: 'linear-gradient(to right,white,#26A69A)', 
        }}
      >
        <Divider sx={{ borderWidth: 1, opacity: 0 }} />
      </Box>
    </Box>
    
    <Box sx={{ mt: 4, p: 1,mb:40 }} >
      <Card sx={{ borderRadius: 1.9 ,backgroundColor:grey[100],
        border:.9,borderColor:grey[300]
        , boxShadow:"none"}}>
        <CardMedia
          component="img"
          image="https://cdn.masaf.ir/contents/media/coverImage/Screenshot_2025-02-16_045939.jpg"
          alt="video description"
          sx={{ width: '100%' ,height:192, objectFit: 'fill' ,
          }} 
        />
        <CardContent sx={{px:1.3,height:153}}>
          <Typography sx={{display:"flex",gap:1.3,mb:1.7}} variant="body2" fontWeight={"bold"}>
            <MovieCreationIcon sx={{color:grey[600]}}/>
سخنرانی استاد رائفی پور « مدیریت دنیا - نیمه شعبان »
          </Typography>
          <Typography variant="body2" color="text.secondary">
          سخنرانی استاد رائفی پور « مدیریت دنیا - نیمه شعبان »
          </Typography>
       
          <Box sx={{display:"flex" ,justifyContent:"space-between", 
          alignItems:"center"
               ,mb:1
            ,mt:10.2}}>
          
            <Box sx={{
              display:"flex" ,gap:7, alignItems:"center",
              mr:0
              }}>
               <Typography variant="caption"
                sx={{display:"flex" , alignItems:"center" ,gap:.4,}}>
                <CalendarMonthOutlinedIcon 
                sx={{
                  color:grey[600],
                  width:"27px",
                height:"27px",
                
                }}/>
               ۱۴۰۳/۲/۱۲
               </Typography>
            <Typography variant="caption" >سخنرانی</Typography>
            </Box>
           
            <Typography variant="body2"
            color={grey[600]}
            sx={{display:"flex",alignItems:"center"
               ,gap:1.1,mr:.3
               }}>
             ۳
              <VisibilityIcon sx={{color:grey[600],
                width:"18px",
                height:"18px"
              }}/>
            </Typography>
          
          </Box>
        
        </CardContent>
      </Card>
    </Box>

    </Box>
    </>

)}

export default Slider

