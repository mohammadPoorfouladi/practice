import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import MicNoneIcon from '@mui/icons-material/MicNone';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Avatar, Box, Divider, Typography, useMediaQuery } from '@mui/material';
import { grey } from '@mui/material/colors';
import axios from 'axios';
import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';

const Slider = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.masaf.ir/api/v1/content/portalContentStatistics/");
        setData(response.data.data);
      } catch (error) {
        setError("Error");
      }
    };
    fetchData();
  }, []);

  if (error) return <p>{error}</p>;

  const [positionIndex, setPositionIndex] = useState(0);

  useEffect(() => {
    if (data.length < 2) return;
    const interval = setInterval(() => {
      setPositionIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);

  const isMobile = useMediaQuery('(max-width:600px)');
  const isSmall = useMediaQuery('(max-width:900px)');
  const isMedium = useMediaQuery('(max-width:1200px)');
  const isLarge = useMediaQuery('(max-width:1536px)');

  let sliderWidth;
  if (isMobile) {
    sliderWidth = '100%';
  } else if (isSmall) {
    sliderWidth = '81%';
  } else if (isMedium) {
    sliderWidth = '40%';
  } else if (isLarge) {
    sliderWidth = '34%';
  } else {
    sliderWidth = '32.5%';
  }

  const positions = [
    "center", "right1", "right", "right2", "right3", "right4", "right5",
    "right6", "right7", "right8", "right9", "right10", "left7", "left14",
    "left13", "left12", "left11", "left10", "left9", "left8", "left6",
    "left5", "left4", "left3", "left2", "left", "left1",
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
    right4: { x: "62%", scale: 0.55, zIndex: 16 },
    left4: { x: "-58%", scale: 0.6, zIndex: 16 },
    right5: { x: "68%", scale: 0.51, zIndex: 15 },
    left5: { x: "-63%", scale: 0.55, zIndex: 15 },
    right6: { x: "73%", scale: 0.47, zIndex: 14 },
    left6: { x: "-68%", scale: 0.50, zIndex: 14 },
    right7: { x: "79%", scale: 0.41, zIndex: 13 },
    left7: { x: "-68%", scale: 0.45, zIndex: 13 },
    right8: { x: "84%", scale: 0.35, zIndex: 12 },
    left8: { x: "-71.7%", scale: 0.46, zIndex: 12 },
    right9: { x: "88%", scale: 0.30, zIndex: 11 },
    left9: { x: "-76%", scale: 0.40, zIndex: 11 },
    right10: { x: "91%", scale: 0.27, zIndex: 10 },
    left10: { x: "-80%", scale: 0.35, zIndex: 10 },
    left11: { x: "-83%", scale: 0.31, zIndex: 9 },
    left12: { x: "-85%", scale: 0.28, zIndex: 8 },
    left13: { x: "-87.5%", scale: 0.24, zIndex: 7 },
    left14: { x: "-89.9%", scale: 0.20, zIndex: 6 },
  };

  return (
    <>
      <Box sx={{ backgroundColor: "rgba(250, 179, 63, 0.2)", mt: 7 }}>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", gap: .8, pt: 5.5
        }}>
          <Box
            sx={{
              width: "30%",
              background: 'linear-gradient(to right,rgba(0, 0, 0, 0),#26A69A)',
            }}
          >
            <Divider sx={{ borderWidth: 1, opacity: 0 }} />
          </Box>
          <FiberManualRecordIcon sx={{ fontSize: "11px", color: "#26A69A" }} />
          <Typography sx={{ fontSize: "22px", color: "#26A69A", ml: 2, mr: 2 }}>
            واحد های مصاف
          </Typography>
          <FiberManualRecordIcon sx={{ fontSize: "11px", color: "#26A69A" }} />
          <Box
            sx={{
              width: "30%",
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
          mt: 5.5,
          position: "relative",
          height: "276px",
          overflow: "hidden",
        }}>
          {data.map((slider, index) => (
            <motion.div
              key={slider.id}
              initial="center"
              animate={positions[(positionIndex + index) % positions.length]}
              variants={slidersVariants}
              transition={{ duration: 0.5 }}
              style={{
                width: sliderWidth,
                position: "absolute",
                backgroundColor: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                overflow: "hidden", paddingBottom: 20
              }}
            >
              <Box sx={{ px: 2 }}>
                <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                  <Avatar src={slider.image} />
                  <Typography sx={{ fontSize: "20px", color: "#333" }}>{slider.name}</Typography>
                </Box>
                <Typography sx={{
                  mt: 2, height: 20, marginBottom: 9,
                  fontSize: "14.4px", color: "#666"
                }}>{slider.description}</Typography>
                <Box style={{ display: "flex", gap: 20, mt: "auto" }}>
                  <Typography sx={{
                    color: grey[700], fontSize: "15px", display: "flex",
                    alignItems: "center"
                  }}><MicNoneIcon />۲ صدا</Typography>
                  <Typography sx={{
                    color: grey[700], fontSize: "15px", display: "flex",
                    alignItems: "center"
                  }}><TextSnippetIcon />۵ نوشته</Typography>
                  <Typography sx={{
                    color: grey[700], fontSize: "15px", display: "flex",
                    alignItems: "center"
                  }}><MovieCreationIcon />۹ کلیپ</Typography>
                  <Typography sx={{
                    color: grey[700], fontSize: "15px", display: "flex",
                    alignItems: "center"
                  }}><InsertPhotoOutlinedIcon />۷ تصویر</Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Slider