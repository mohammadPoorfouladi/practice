import MicNoneIcon from '@mui/icons-material/MicNone';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import React, { useEffect, useState } from 'react';
import { color, motion } from "framer-motion";
import { Avatar, Box,Divider, Typography } from '@mui/material';
import { blue, green, grey, orange, pink, purple, yellow } from '@mui/material/colors';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const LastSlider = () => {
  const [positionIndex, setPositionIndex] = useState(0);

  const sliders = [
    { title: "موسیقی", caption: "موسیقی" ,photo:"https://cdn.masaf.ir/portal/media/image/2023-10-23_15.42.46.jpg",color:grey[400]},
    { title: "سدن پوش", caption : "سدن پوش" ,photo:"https://cdn.masaf.ir/portal/media/image/2023-10-23_15.34.20.jpg",color:"white" },
    { title: "استدیو", caption: "استدیو" ,photo:"https://cdn.masaf.ir/portal/media/image/2023-10-23_15.22.57.jpg" ,color:"white" },
    { title: "اقتصاد", caption: "اقصتاد" ,photo:"https://cdn.masaf.ir/portal/media/image/Eghtesad.jpg" , color:blue[800]},
    { title: "آرما", caption: "آرما" , photo:"https://cdn.masaf.ir/portal/media/image/2023-10-25_15.39.14.jpg", color:orange[400] },
    { title: "نجوا", caption: "نجوا", photo:"https://cdn.masaf.ir/portal/media/image/2023-10-31_14.20.28.jpg",color:"red" },
    { title: "سلامت", caption: "سلامت", photo:"https://cdn.masaf.ir/portal/media/image/4.jpg" ,color:green[200]},
    { title: "نویسا", caption: "نویسا" ,photo:"https://cdn.masaf.ir/portal/media/image/2023-10-25_15.57f.59.jpg" , color:pink[200] },
    { title:"امنیت غذایی",  caption:"امنیت غذایی" , photo:"https://cdn.masaf.ir/portal/media/image/2023-10-25_15.49.44.jpg" ,color:"white" },
    { title: "بین الملل", caption:"بین الملل" , photo:"https://cdn.masaf.ir/portal/media/image/ENG_Eng_nLcV8iK.jpg" ,color:"white" },
    { title: "نشر", caption:"نشر" , photo:"https://cdn.masaf.ir/portal/media/image/P_Nashr.jpg" ,color:grey[500]},
    { title: "قند عسل", caption:"کودک" , photo:"https://cdn.masaf.ir/portal/media/image/کودک.jpg" , color:yellow[700]},
    { title: "مدرسه مصاف", caption:"مدرسه مصاف" , photo:"https://cdn.masaf.ir/portal/media/image/Picsart_24-11-26_17-28-43-120.jpg",color:"white" },
    { title: "مهندسی", caption:"مهندسی" , photo:"https://cdn.masaf.ir/portal/media/image/2100567811_-408792649-1.png.jpeg" ,color:green[700]},
    { title: "قندآب", caption:"قندآب" , photo:"https://cdn.masaf.ir/portal/media/image/Ghandab.jpg" ,color:"pink"},
    { title: "محیط زیست", caption:"محیط زیست" , photo:"https://cdn.masaf.ir/portal/media/image/2023-10-25_22.26.23.jpg",color:"white" },
    { title: "مهر مهدوی", caption:"مهر مهدوی" , photo:"https://cdn.masaf.ir/portal/media/image/2023-10-25_15.52.56.jpg",color:"white" },
    { title: "مهندسی", caption:"مهندسی" , photo:"https://cdn.masaf.ir/portal/media/image/2100567811_-408792649-1.png.jpeg" , color:grey[800]},
    { title: "مهدیاران", caption:"مهدیاران" , photo:"https://cdn.masaf.ir/portal/media/image/Mahdiaran.jpg" , color:"skyblue"},
    { title: "اهل بیت مدیا", caption:"اهل بیت مدیا" , photo:"https://cdn.masaf.ir/portal/media/image/2023-10-25_15.54.58.jpg",color:"white" },
    { title: "واحد نوجوان موسسه مصاف", caption:"برنا" , photo:"https://cdn.masaf.ir/portal/media/image/Borna.jpg" ,color:purple[400]},
];
useEffect(() => {
  const interval = setInterval(() => {
    setPositionIndex((prevIndex) => (prevIndex + 1) % sliders.length);
  }, 3000)

  return () => clearInterval(interval);
}, [sliders.length])

const positions = [
"center",                                   
"right1", 
"right",                   
"right2",
"right3",  
"right4", 
"right5",
"right6", 
"right7", 
"right8", 
"right9", 
"left7",
"left9",
"left8",
"left6",
"left5",
"left4",
"left3",
"left2" ,  
"left",
"left1",
];

const slidersVariants = {
  center: { x: "0%", scale: 1, zIndex: 21 },
  right1: { x: "17%", scale: 0.9, zIndex: 20 },
  right: { x: "32%", scale: 0.8, zIndex: 19 },
  left: { x: "-31%", scale: 0.9, zIndex: 19 },
  left1: { x: "-18%", scale: 1, zIndex: 20 },
  right2: { x: "44%", scale: 0.7, zIndex: 18 }, 
  left2: { x: "-41%", scale: 0.8, zIndex: 18 },
  right3: { x: "55%", scale: 0.6, zIndex: 17 }, 
  left3: { x: "-50%", scale: 0.7, zIndex: 17 },
  right4: { x: "62%", scale: 0.55, zIndex: 16 } ,
  left4: { x: "-58%", scale: 0.6, zIndex: 16 } ,
  right5: { x: "68%", scale: 0.51, zIndex: 15 } ,
  left5: { x: "-63%", scale: 0.55, zIndex: 15 } ,
  right6: { x: "73%", scale: 0.47, zIndex: 14 } ,
  left6: { x: "-68%", scale: 0.50, zIndex: 14 },
  right7: { x: "79%", scale: 0.41, zIndex: 13 } ,
  left7: { x: "-68%", scale: 0.45, zIndex: 13 } ,
  right8: { x: "84%", scale: 0.35, zIndex: 12 } ,
  left8: { x: "-71.7%", scale: 0.46, zIndex: 12 } ,
  right9: { x: "88%", scale: 0.30, zIndex: 11 } ,
  left9: { x: "-76%", scale: 0.40, zIndex: 11 }
};

  return (
    <>
    <Box sx={{  backgroundColor: "rgba(250, 179, 63, 0.2)" , mt:7}}>

    <Box sx={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",gap:.8,pt:5.5
    }}>
  
    <Box 
            sx={{
              width: "30%" ,
              background: 'linear-gradient(to right,rgba(0, 0, 0, 0),#26A69A)',
            }}
          >
            <Divider sx={{ borderWidth: 1, opacity: 0 }} />
          </Box>
          <FiberManualRecordIcon sx={{
            fontSize:"11px", color:"#26A69A"
          }}/>
          <Typography sx={{
            fontSize:"22px" , color:"#26A69A" , ml:2
 ,mr:2         }}>
          واحد های مصاف
          </Typography>
          <FiberManualRecordIcon  sx={{
            fontSize:"11px", color:"#26A69A"
          }}/>
          <Box
            sx={{
              width: "30%" ,
              height: 1,
              background: 'linear-gradient(to right,#26A69A,rgba(0, 0, 0, 0))',
            }}
          >
            <Divider sx={{ borderWidth: 1, opacity: 0 }} />
          </Box>
    </Box>
     
      <Box sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mt:5.5,
        position: "relative",
        height: "276px",
        overflow: "hidden",
      }}>
        {sliders.map((slider, index) => (
          <motion.div
            key={index}
            initial="center"
            animate={positions[(positionIndex + index) % positions.length]}
            variants={slidersVariants}
            transition={{ duration: 0.5 }}
            style={{
              width: '32.5%',
              position: "absolute",
              backgroundColor: "#fff",
              borderRadius: "10px",
              border: `1px solid ${slider.color}`,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",paddingBottom:20
            }}
          >
            <Box 
            sx={{px:2}}
            >
                         <Box sx={{display:"flex", gap:1 ,mt:2}}>
                          <Avatar src={slider.photo} />
            <Typography sx={{
              fontSize: "20px",
              color: "#333",
            }}>{slider.title}</Typography>
            </Box>

            <Typography sx={{
              mt:2,
              marginBottom: 9,
              fontSize: "16px",
              color: "#666",
               
            }}>{slider.caption}</Typography>
            <Box style={{
              display:"flex" ,gap:20
            }}>
              <Typography sx={{
              color:grey[700],fontSize:"15px",
                      display:"flex",
              alignItems:"center"
              }}><MicNoneIcon/>۲ صدا
              </Typography>
              <Typography sx={{
              color:grey[700],fontSize:"15px",
                      display:"flex",
              alignItems:"center"
              }}><TextSnippetIcon/>۵ نوشته</Typography>
              <Typography sx={{
              color:grey[700],fontSize:"15px",
                      display:"flex",
              alignItems:"center"
              }}><MovieCreationIcon/>۹ کلیپ</Typography>
              <Typography sx={{
              color:grey[700],fontSize:"15px",
                      display:"flex",
              alignItems:"center"
              }}><InsertPhotoOutlinedIcon/>۷ تصویر</Typography>
            </Box> 
            </Box>

          </motion.div>
        ))}
      </Box>
      </Box> 
       </>
  );
};

export default LastSlider







