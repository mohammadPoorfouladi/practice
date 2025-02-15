import { AppBar, Box, Button,Toolbar, Typography } from "@mui/material"
import { grey,blueGrey} from "@mui/material/colors"
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


const Header=()=>{

    return(
       <>
<AppBar position="static" sx={{ backgroundColor: 'white', borderBottom: 1.5, 
  borderColor: grey[200],px: 1, py: 3 }} elevation={0} >
      <Toolbar sx={{mt: 2.6,}}>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: '100%' }}>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box>
                <img src="https://masaf.ir/_next/static/media/masaf.ad4a5f49.svg" alt="logo" 
                style={{ height: '42.9px', mt: .5 }} />
              </Box>
              <Box  sx={{ mb: .4 }}>
                <Button sx={{
                  backgroundColor: grey[100],
                  color: grey[500],
                  border: 1,
                  borderColor: grey[300],
                  justifyContent: "start",
                  p: 3,
                  borderRadius: 3,
                  py: 2.2,
                  width:"34.4rem",
                  gap:1
                }}>
                  <SearchIcon />
                  <Typography  sx={{ color: grey[600]}}>
                    جست و جوی محتوا، سخنرانی ها و...
                  </Typography>
                </Button>
              </Box>
            </Box>

<Box sx={{mt:4.9 ,display:"flex", alignItems:"center" ,gap:1.7 ,mb:.3}}>
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
    <Box>
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

          </Box>
          <Box>
            <Button sx={{
              border: 1,
              px: 2,
              fontWeight: "4px",
              borderColor: blueGrey[300],
              borderRadius: 2,
              mt: 1.4,
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
      </Toolbar>
    </AppBar>

</> 
    )
}


export default Header