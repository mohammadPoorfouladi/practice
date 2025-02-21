import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
const Contents =()=>{
    return(
<Box sx={{
    width:"100%",
    py:4,
    mb:10
}}>
    <Box sx={{
        width:"100%",
        textAlign:"center"
    }}>
            <Typography fontWeight={"bold"}>
    مطالب مناسب شما
    </Typography>
    </Box>
  
  
    <Box 
    sx={{
        width:"100%",
        display:"flex",
        justifyContent:"center"
    }}
    >
   <Box sx={{
width:"90.5%",
    mt:4.7
}}>

<Box sx={{display:"flex"}}>
  <Card
                  sx={{
                    borderRadius: 3,
                    margin: { xs: "0 5px", md: "0 13px" },
                    border:1,borderColor:grey[300],
                    boxShadow:"0",
                    height:497,
                  width:405
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://cdn.masaf.ir/contents/media/coverImage/MASAF-Prof01.jpg"
                    alt="video description"
                    sx={{ width: '100%', height: 255}}
                  />
                  <CardContent sx={{ px:2.5, height: 153 }}>
                  <Typography sx={{ display: "flex",alignItems:"center", gap: 1.3, mb: 1.7 }} variant="body1" fontWeight={"bold"}>
                    <TextSnippetIcon sx={{ color: grey[400] }} />
                   ارزش صبر در انتظار است آیا میتوان به سادگی به مرحله بالایی در صبر رسید؟؟
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{pb:1}}>
                    پرسش و پاسخ مهدوی 
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1, mt: 10.2 }}>
                      <Box sx={{ display: "flex", gap: 7, alignItems: "center", mr: 0 }}>
                        <Typography variant="caption" sx={{ display: "flex", alignItems: "center", gap: .4 }}>
                          <CalendarMonthOutlinedIcon
                            sx={{ color: grey[600], width: "27px", height: "27px" }} />
                          ۱۴۰۳/۲/۱۲
                        </Typography>
                        <Typography variant="caption">مهدیاران</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    borderRadius: 3,
                    margin: { xs: "0 5px", md: "0 13px" },
                    border:1,borderColor:grey[300],
                    boxShadow:"0",
                  width:405
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://cdn.masaf.ir/contents/media/coverImage/MASAF-Prof01.jpg"
                    alt="video description"
                    sx={{ width: '100%', height: 255,}}
                  />
                  <CardContent sx={{ px:2.5, height: 153 }}>
                  <Typography sx={{ display: "flex",alignItems:"center", gap: 1.3, mb: 1.7 }} variant="body1" fontWeight={"bold"}>
                    <TextSnippetIcon sx={{ color: grey[400] }} />
                    آیا امام زمان به صدقات ما برای سلامتیِ شان و اعمال مستحبی ما به نیابت از ایشان نیاز دارند؟
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{pb:1}}  >
                    پرسش و پاسخ مهدوی 
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1, mt: 10.2 }}>
                      <Box sx={{ display: "flex", gap: 7, alignItems: "center", mr: 0 }}>
                        <Typography variant="caption" sx={{ display: "flex", alignItems: "center", gap: .4 }}>
                          <CalendarMonthOutlinedIcon
                            sx={{ color: grey[600], width: "27px", height: "27px" }} />
                          ۱۴۰۳/۲/۱۲
                        </Typography>
                        <Typography variant="caption">مهدیاران</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
                <Card
                  sx={{
                    borderRadius: 3,
                    margin: { xs: "0 5px", md: "0 13px" },
                    border:1,borderColor:grey[300],
                    boxShadow:"0",
                  width:405
                  }}>
                  <CardMedia
                    component="img"
                    image="https://cdn.masaf.ir/contents/media/coverImage/MASAF-Prof01.jpg"
                    alt="video description"
                    sx={{ width: '100%', height: 255.5,}}
                  />
                  <CardContent sx={{ px:2.5, height: 153 }}>
                    <Typography sx={{ display: "flex",alignItems:"center", gap: 1.3, mb: 1.7 }} variant="body1" fontWeight={"bold"}>
                    <TextSnippetIcon sx={{ color: grey[400] }} />
                    آیا امام زمان به صدقات ما برای سلامتیِ شان و اعمال مستحبی ما به نیابت از ایشان نیاز دارند؟
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{pb:1}}>
                    پرسش و پاسخ مهدوی 
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1, mt: 10.2 }}>
                      <Box sx={{ display: "flex", gap: 7, alignItems: "center", mr: 0 }}>
                        <Typography variant="caption" sx={{ display: "flex", alignItems: "center", gap: .4 }}>
                          <CalendarMonthOutlinedIcon
                            sx={{ color: grey[600], width: "27px", height: "27px" }} />
                          ۱۴۰۳/۲/۱۲
                        </Typography>
                        <Typography variant="caption">مهدیاران</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
           </Box> 
       </Box>     
    </Box>
</Box>
    )
}

export default Contents