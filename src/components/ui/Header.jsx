import { AppBar, Box, Button,Divider,Toolbar, Typography } from "@mui/material"
import { grey,blueGrey,teal} from "@mui/material/colors"
import SearchIcon from '@mui/icons-material/Search'
import PersonIcon from '@mui/icons-material/Person'
import WindowIcon from '@mui/icons-material/Window';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import MicNoneIcon from '@mui/icons-material/MicNone';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

const Header=()=>{

    return(
       <>
<AppBar position="static" sx={{ backgroundColor: 'white', borderBottom: 1.5, p:0,
  borderColor: grey[200],px:{xs:.3,md:1}, py:{xs:1.5,sm:3}}} elevation={0} >
      <Toolbar sx={{mt:{xs:0,sm:2.6},p:0 , display:"block"}}>
     
        <Box sx={{ display: "flex",alignItems:{xs:"center"} ,justifyContent:"space-between", width: '100%' }}>
        
        <MenuTwoToneIcon sx={{ 
                  display:{sx:"flex",md:"none"},
                  color:"#006064",
                  ":hover":{color:"#0097A7"},
                   transition: "transform 0.3s, color 0.3s"
                  ,fontSize:"30px",
                  cursor:"pointer",
                  ml:.5,mr:.7
                }}/>

            <Box sx={{ display: "flex",  alignItems: "center", gap: 1.5 }}>
          

              <Box sx={{mr:{xs:.9,md:0}, mb:{md:.4}, width:{xs:"130px",md:"117.4px"},height: { xs: '50.6px', md: '42.9px'}}}>
                <img src="https://masaf.ir/_next/static/media/masaf.ad4a5f49.svg" alt="logo" 
                style={{  width: '100%', height: 'auto'  }} />
              </Box>
           
           
              <Box  sx={{ mb: .4 ,display:{xs:"none",md:"flex"}}}>
                <Button sx={{
                  backgroundColor: grey[100],
                  color: grey[500],
                  border: 1,
                  borderColor: grey[300],
                  justifyContent: "start",
                  p: 3,  py: 2.2, borderRadius: 3,
                  width:"34.4rem",display:{xs:"none",md:"flex"},
                  gap:1
                }}>
                  <SearchIcon />s
                  <Typography  sx={{ color: grey[600]}}>
                    جست و جوی محتوا، سخنرانی ها و...
                  </Typography>
                </Button>
            
            
              </Box>        
         
            </Box>
    
            <Box>
            <Button sx={{
              border: 1,
              px: 2,
              fontWeight: "4px",
              borderColor: blueGrey[300],
              borderRadius: 2, mb:{xs:.5,md:.5},
            mr:{xs:.7,md:0},
              ":hover":{
                backgroundColor:grey[300]
              }
            }}>
              <PersonIcon sx={{ color: blueGrey[600] }} />
              <Typography sx={{ color: blueGrey[700], mr: .3 }}>
                ورود  |  ثبت نام
              </Typography>
            </Button>
          </Box>



        </Box>


        <Box sx={{width:"100%" ,p:.7,display:{xs:"flex",md:"none"}}}>
         <Divider sx={{
          width:"97%",borderColor:"#E0E0E0", 
          borderWidth:1.4,marginY: .9
          }} />
        </Box>
 
 
 <Box sx={{width:"100%" ,mt:.5,pl:.7 ,mb:{xs:1}}}>
                               <Button sx={{
                  backgroundColor: grey[100],
                  color: grey[500],
                  border: 1,
                  borderColor: grey[300],
                  justifyContent: "start",
                  p: 1.5,  py: 2.2, borderRadius: 3, 
                  width:{xs:"97.4%",sm:"99.8%"},display:{xs:"flex",md:"none"},
                  gap:1
                }}>
                  <SearchIcon />
                  <Typography  sx={{ color: grey[600]}}>
                    جست و جوی محتوا، سخنرانی ها و...
                  </Typography>
                </Button>
     
        </Box> 
     



        
  <Box sx={{mt:4.9 , alignItems:"center" ,gap:1.7 ,mb:.3,
   display:{xs:"none",md:"flex"}
}}>
     <Box>
            <Typography disableRipple variant="inherit"
             sx={{
              gap:.5, borderRight:1.5,borderColor:grey[300],
            pr:.8,
              display:"flex",alignItems:"center",
              color: grey[900] , fontWeight:"bold" 
              }}>
            <WindowIcon/>
           واحد ها  
           <KeyboardArrowDownIcon />
       
            </Typography>
         
    </Box>
    <Box >
            <Typography variant="body1" sx={{gap:1,
              display:"flex",alignItems:"center",
              color: grey[700]}} >
            <TextSnippetIcon sx={{color:grey[600]}}/>
            منتخب مطالب واحدها
            </Typography>
    </Box>
    <Box>
            <Typography variant="inherit" sx={{gap:1,
              display:"flex",alignItems:"center",
              color: grey[700]  }}>
            <MicNoneIcon sx={{color:grey[600]}}/>
            سخنرانی ها
            </Typography>
    </Box>
    <Box>
            <Typography variant="inherit" sx={{gap:1,
              display:"flex",alignItems:"center",
              color: grey[700]  }}>
            <PlayCircleOutlinedIcon sx={{color:grey[600]}}/>
            کلیپ ها
            </Typography>
    </Box>
    <Box>
            <Typography variant="inherit" sx={{gap:1,
              display:"flex",alignItems:"center",
              color: grey[700]  }}>
            <InsertPhotoOutlinedIcon/>
            گالری مراسم
            </Typography>
    </Box>
    <Box>
            <Typography variant="inherit" sx={{gap:1,
              display:"flex",alignItems:"center",
              color: grey[700]  }}>
            <TwitterIcon/>
            توییت ها
            </Typography>
    </Box>
    <Box>
            <Typography variant="inherit" sx={{gap:1,
              display:"flex",alignItems:"center",
              color: grey[700]  }}>
            <CampaignIcon/>
            اطلاع رسانی
            </Typography>
    </Box>
    <Box>
            <Typography variant="inherit" sx={{gap:1,
              display:"flex",alignItems:"center",
              color: grey[700]  }}>
            <PhoneInTalkIcon/>
            درباره ما و ارتباط با ما
            </Typography>
    </Box>
    <Box>
            <Typography variant="inherit" sx={{gap:1,
              display:"flex",alignItems:"center",
              color: grey[700]  }}>
            <FiberManualRecordIcon fontSize="small" sx={{color:"red"}}/>
            پخش زنده
            </Typography>
    </Box>
</Box>
      </Toolbar>
    </AppBar>

</> 
    )
}


export default Header