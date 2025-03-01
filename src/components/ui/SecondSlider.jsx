import { Box, Button, Card, CardContent, CardMedia, Divider, IconButton, Typography } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { grey } from "@mui/material/colors";
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { secondSliders } from "../data/slidersContent"; 
import { useEffect, useState } from "react";

const SecondSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = secondSliders.length;
  const [slidesToShow, setSlidesToShow] = useState(1); 

  const updateSlidesToShow = () => {
    if (window.innerWidth < 600) {
      setSlidesToShow(1); 
    } else if (window.innerWidth < 900) {
      setSlidesToShow(2); 
    } else if (window.innerWidth < 1200) {
      setSlidesToShow(3); 
    } else {
      setSlidesToShow(4);
    }
  };

  useEffect(() => {

    updateSlidesToShow();

    window.addEventListener('resize', updateSlidesToShow);
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const resetAfter = slidesToShow === 1 ? 1 : (slidesToShow === 2 ? 2 : (slidesToShow === 3 ? 3 : 4)); 
        if (prevIndex >= totalSlides - resetAfter) {
          return 0; 
        }
        return prevIndex + 1; 
      });
    }, 3000); 

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateSlidesToShow);
    };
  }, [totalSlides, slidesToShow]);

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1 >= totalSlides ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 < 0 ? totalSlides - 1 : prevIndex - 1));
  };

  return (
    <>
      <Box sx={{ overflow: 'hidden', width: '100%' }}>
        <Box sx={{
          width: "100%", display: "flex",
          justifyContent: "center", mt: { xs: 7, md: 7.1 },
          mb: 1.9
        }}>
          <Box sx={{ width: { xs: "90.1%", md: "88.6%" } }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box>
                <Typography color="#006064" variant="h6" fontWeight={"bold"}>
                  جدیدترین کلیپ ها
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: 1 }}>
                <Button sx={{
                  color: "#006064", border: 1, borderColor: "#006064",
                  px: 2.7, borderRadius: 1.5,
                }}>
                  <Typography variant="body1">بیشتر</Typography>
                </Button>
                <IconButton onClick={handleNext}
                  sx={{
                    color: grey[500], border: 1,
                    borderColor: grey[300],
                    width: '42.3px',
                    height: '42.3px',
                    borderRadius: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <ChevronRightIcon sx={{ fontSize: 30 }} />
                </IconButton>
                <IconButton onClick={handlePrev}
                  sx={{
                    color: grey[500], border: 1,
                    borderColor: grey[300],
                    width: '42.3px',
                    height: '42.3px',
                    borderRadius: 1.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <KeyboardArrowLeftIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ width: { xs: "96%", md: "89%" }, display: "flex", px: { xs: 1, md: 10.5 }, mt: 1.7 }}>
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
        <Box sx={{
          display: "flex",
          justifyContent: "center"
        }}>
          <Box sx={{ mt: { xs: 3.6, md: 5 }, overflow: 'hidden', width: "90.3%" }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: "center",
                transition: 'transform 0.5s ',
                transform: `translateX(-${currentIndex * (100 / (totalSlides))}%)`,
                width: `${(totalSlides / slidesToShow) * 100}%`,
              }}
            >
              {secondSliders.map((slider, index) => (
                <Card
                  key={index}
                  sx={{
                    borderRadius: 1.9,
                    margin: { xs: "0 5px", md: "0 16px" },
                    backgroundColor: grey[100],
                    border: 0.9,
                    borderColor: grey[300],
                    boxShadow: "none",
                    width: { xs: 'calc(100% - 10px)', sm: 'calc(50% - 10px)',
                       md: 'calc(33.33% - 10px)',
                       lg: 'calc(25% - 10px)' } 
                  }}
                >
                <CardMedia
                    component="img"
                    image={slider.media}
                    alt="video description"
                    sx={{ width: '100%', height: 192, objectFit: 'fill' }}
                  />
                  <CardContent sx={{ px: 1.3, height: 153 }}>
                    <Typography sx={{ display: "flex", gap: 1.3, mb: 1.7 }} variant="body2" fontWeight={"bold"}>
                      <MovieCreationIcon sx={{ color: grey[600] }} />
                      {slider.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {slider.caption}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1, mt: 10.2 }}>
                      <Box sx={{ display: "flex", gap: 7, alignItems: "center", mr: 0 }}>
                        <Typography variant="caption" sx={{ display: "flex", alignItems: "center", gap: .4 }}>
                          <CalendarMonthOutlinedIcon
                            sx={{ color: grey[600], width: "27px", height: "27px" }} />
                          ۱۴۰۳/۲/۱۲
                        </Typography>
                        <Typography variant="caption">کلیپ ها</Typography>
                      </Box>
                      <Typography variant="body2" color={grey[600]} sx={{ display: "flex", alignItems: "center", gap: 1.1, mr: .1, mb: .1 }}>
                        ۳
                        <VisibilityIcon sx={{ color: grey[600], width: "18px", height: "18px" }} />
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SecondSlider;