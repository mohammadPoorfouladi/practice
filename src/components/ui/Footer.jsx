import { Box, Button, Divider, IconButton,InputAdornment,TextField,Typography } from "@mui/material"
import { blue, grey } from "@mui/material/colors"
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer=()=>{
    return(
        <>
  <Box sx={{ overflow: 'hidden', width: '100%' }}>
    <Box sx={{overflow:"hidden",
        display:"flex",justifyContent:"center"
    }}>
    <img src="https://cdn.masaf.ir/survey/e4a53cdc-433c-4e50-b7b0-f75c66fb1af9_fo" alt="footer"
    style={{ width: "155.5%", height: "auto"}} />
    </Box>
    <Box sx={{
        width:"100%",backgroundColor:"#17202A",pb:{xs:4.1,md:9}}}>

    <Box sx={{width:"100%"}}>
<Box sx={{px:{xs:1,md:4}, display:{xs:"flex"}, flexDirection:{xs:"column",lg:"row"} , justifyContent:"space-between", pt:6.6}}>
   
    <Box>
    <Typography color="white" variant="h6" fontWeight={"bold"} sx={{mb:.7}}>
ثبت نام در خبرنامه مصاف
</Typography>
<Typography  sx={{mt:1.5}} color="white">
*شما میتوانید با وارد کردن ایمیل خود از جدید ترین اخبار سایت مصاف مطلع شوید.
</Typography>
</Box>

   <Box>
   <Box display="flex" alignItems="center" sx={{ width: '100%' ,mt:{xs:2,md:.4}}}>
      <TextField
        variant="outlined"
        placeholder="پست الکترونیکی خود را وارد کنید"
        sx={{
          borderColor: "white",
          width: '680px',
          borderRadius: 1.8,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
              borderRadius: 1.8,
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'grey',
            },
            color: 'white',
            px: .6,
            py:1.2,
            '& input': {
              padding: '0', 
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                sx={{
                  backgroundColor: "#006666",
                  py:1.1,
                  width: "131px",
                  color: "white",
                  borderRadius: 1.9,
                }}
                size="small"
              >
                ارسال خبرنامه
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </Box>
    </Box>



   </Box>
  </Box>
<Box sx={{width:"100%" ,px:{xs:2,md:4} , display:"flex",marginTop:6.9}}>
         <Divider sx={{
          width:"95.3%",borderColor:grey[700], 
}} />
</Box>


<Box sx={{px:{xs:1,md:4},mt:7.3}}>
   
    <Box sx={{display:"flex",gap:2,flexDirection:{xs:"column" ,lg:"row"}}}>


<Box>

    <Box sx={{width:{xs:"full",md:336}}}>
           <Typography variant="h5" color="white">
    درباره مصاف بدانیم
    </Typography> 
    <Typography variant="body1" sx={{
    mt:6
    }} color="white" fontSize={"18px"}>
    مطالب این وبگاه با هدف روشنگری در فتنه‌های آخرالزمانی و آشنایی مسلمانان با موضوعات و معارف مهدوی تهیه و تدوین شده است. امیدواریم که این تلاش ناچیز ما در تعجیل فرج مولایمان، مهدی موعود ارواحنا فداه، مؤثر باشد.
    </Typography>
    
<Box   sx={{
  mt:5.4,justifySelf:"center",width:500,
  display:"flex",gap:2.5
}}>
    <IconButton sx={{width:60,height:60,backgroundColor:"#1d1616",borderRadius:2}}>
    <TelegramIcon
    sx={{
      color:"white" , fontSize:"26px"
    }}/>
  </IconButton>
  <IconButton sx={{width:60,height:60,backgroundColor:"#1d1616",borderRadius:2}}>
    <TwitterIcon 
    sx={{
      color:"white" , fontSize:"26px"
    }}/>
  </IconButton>
<IconButton sx={{width:60,height:60,backgroundColor:"#1d1616",borderRadius:2}}>
<InstagramIcon  sx={{
  color:"white" , fontSize:"26px"
}}/>
</IconButton >
<IconButton sx={{width:60,height:60,backgroundColor:"#1d1616",borderRadius:2}}>
<WhatshotIcon sx={{
  color:"white" , fontSize:"26px"
}}/>
</IconButton >
<IconButton sx={{width:60,height:60,backgroundColor:"#1d1616",borderRadius:2}}>
<FacebookIcon sx={{
  color:"white" , fontSize:"26px"
}}/>
</IconButton >
<IconButton sx={{width:60,height:60,backgroundColor:"#1d1616",borderRadius:2}}>
<YouTubeIcon sx={{
  color:"white" , fontSize:"26px"
}}/>
</IconButton >
</Box>
    </Box>  

</Box>

<Box sx={{
  display:"flex",gap:{xs:6,md:22.5} ,flexDirection:{xs:"column" ,lg:"row"}
}}>

  <Box sx={{
    display:"flex",gap:14
  }}>
    <Box>
    <Typography fontWeight={"bold"} color="white">
        واحدها
    </Typography>
    <Box sx={{display:"flex" ,flexDirection:"column", gap:1.5,mt:3}}>
          <Typography color="white">   سدن پوش</Typography>
<Typography color="white">اهل بیت مدیا</Typography>
<Typography color="white">مهندسی</Typography>
<Typography color="white">نویسا</Typography>
<Typography color="white">موکب مع امام منصور</Typography>
    </Box>


   </Box>




   <Box >
    <Typography  fontWeight={"bold"} color="white">
        واحدها
    </Typography>
    <Box sx={{display:"flex" ,flexDirection:"column", gap:1.5 ,mt:3}}>
    <Typography color="white">مهدیاران</Typography>
 <Typography color="white">قندآب</Typography>
 <Typography color="white">برنا</Typography>
 <Typography color="white">بین الملل</Typography>
 <Typography color="white">نجوا</Typography>

    </Box>

   </Box>

  </Box>




<Box sx={{
  display:"flex",gap:13 ,flexDirection:{xs:"column",lg:"row"}
}}>
<Box>
    <Typography fontWeight={"bold"} color="white">
    صفحات
    </Typography>
    <Box sx={{display:"flex" ,flexDirection:"column", gap:1.5 ,mt:3}}>
       <Typography color="white">   منتخب مطالب واحدها</Typography>
 <Typography color="white">سخنرانی ها</Typography>
 <Typography color="white">کلیپ ها</Typography>
 <Typography color="white">گالری مراسم</Typography>
 <Typography color="white">توییت ها</Typography>
 <Typography color="white">اطلاع رسانی</Typography>
 <Typography color="white">نظرسنجی ها</Typography>
 <Typography color="white">دعوت از استاد</Typography>
 <Typography color="white">درباره ما و ارتباط با ما</Typography>
 <Typography color="white">پخش زنده</Typography>
    </Box>


   </Box>
<Box>
<Typography fontWeight={"bold"} color="white">
ارتباط با ما
    </Typography>

    <Box sx={{
        display:"flex"
    }}>
      <Box sx={{display:"flex",width:"100%",justifyContent:"space-between"}}>
      
               <Typography color="white" sx={{
          display:"flex",justifyContent:"center"
        }}>
   <LocalPhoneIcon/>
تلفن تماس
        </Typography>
        <Typography color="white">
        021-75098000
            </Typography>
        </Box>
 
   

    </Box>
    <Box sx={{
        display:"flex"
    }}>
      <Box sx={{display:"flex" ,justifyContent:"space-between",width:"100%"}}>
                <Typography color="white" 
        sx={{
          display:"flex",alignItems:"center"
        }}
        >
        <LocalPostOfficeIcon color="white" />
        آی دی ارتباطی شبکه های مجازی مصاف
        </Typography>
        <Typography color="white">
        @masaf
            </Typography>
      </Box>

    </Box>
</Box>
</Box>


</Box>


    </Box>
 


</Box>    <Box sx={{width:"100%" ,px:{xs:2,md:4} , display:"flex" ,marginTop:6.6}}>
         <Divider sx={{
          width:"95.3%",borderColor:grey[700], 
}} />
</Box>
<Box sx={{
px:4.6,
  display:"flex" ,
   justifyContent:"end",
  mt:8,
}}>
  <Typography sx={{
    color:"white",fontSize:"17.5px" ,
  }}>
  تمامی حقوق این وبگاه متعلق به مؤسسهٔ مصاف ایرانیان، بزرگ‌ترین جنبش سایبری کاملاً مستقل در فضای اینترنتی است.
  v.1.0.2
  </Typography>
</Box>
 </Box>
</Box>
    </>
    )
}

export default Footer