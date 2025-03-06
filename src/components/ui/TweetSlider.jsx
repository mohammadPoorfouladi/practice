import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar, Box, Button, Card, CardContent, IconButton, Link, Skeleton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from '@mui/material/Grid2';
import axios from "axios";
import { useEffect, useState } from "react";
import { thirdSliders } from "../data/slidersContent";

const TweetSlider = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await axios.get('https://api.masaf.ir/api/v1/category/contentByCategory/?categoryId=3')
        setData(response.data.data)
      } catch (err) {
        setError('Error');
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  if (error) return <p>{error}</p>;


  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = thirdSliders.length;
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
      <Box sx={{ boxShadow: '0px .7px 6px rgba(147, 147, 147, 0.3)', pb: 5 }}>
        <Box sx={{ backgroundColor: "rgb(22, 32, 42)", mt: 7, py: 6, paddingBottom: 9 }}>
          <Box sx={{
            width: "100%", display: "flex",
            justifyContent: "center", mt: { xs: 7, md: 6 },
            mb: 1.9,
            mt: 1
          }}>
            <Box sx={{ width: { xs: "90.1%", md: "88.6%" } }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                  <Typography color="white" fontSize={"18.1px"} fontWeight={"bold"}>
                    توییت های استاد رائفی پور
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button sx={{
                    color: "white", border: 1,
                    borderColor: "white", px: 2.7, borderRadius: 1.5,
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

          <Box sx={{ width: { xs: "96%", md: "90%" }, display: "flex", px: { xs: 1, md: 10 } }} />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ mt: { xs: 3.6, md: 4.1 }, overflow: 'hidden', width: "90.3%" }}>
              {loading && (
                <Box>
                  <Grid container spacing={{ sm: 1, md: 5, lg: 4.5 }}>
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                      <Skeleton sx={{ backgroundColor: grey[200] }} variant="rounded" height={330} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                      sx={{ display: { xs: "none", sm: "block" } }}
                    >
                      <Skeleton sx={{ backgroundColor: grey[200] }} variant="rounded" height={330} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                    >
                      <Skeleton sx={{ backgroundColor: grey[200] }} variant="rounded" height={330} />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                      sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
                    >
                      <Skeleton sx={{ backgroundColor: grey[200] }} variant="rounded" height={330} />
                    </Grid>
                  </Grid>

                </Box>
              )}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: "center",
                  transition: 'transform 0.5s ',
                  transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
                  width: `${(totalSlides / slidesToShow) * 100}%`,
                }}
              >
                {data.map((slider) => (
                  <Card
                    key={slider.id}
                    sx={{
                      borderRadius: 1.9,
                      margin: { xs: "0 10px", md: "0 16px" },
                      backgroundColor: "rgb(2,6,23)",
                      border: 2,
                      borderColor: "rgb(15,146,233)",
                      boxShadow: "none",
                      width: { xs: '100%', sm: '50%', md: '25%' },
                      height: 327,
                      display: 'flex',
                      flexDirection: 'column',
                    }}>
                    <CardContent sx={{ p: 2.5, flexGrow: 1, overflow: 'hidden' }}>
                      <Box sx={{ display: "flex", flexDirection: "column", height: '100%', overflow: 'hidden' }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Avatar
                            alt="Avatar"
                            src="https://masaf.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitter-profile.f6c5a185.jpg&w=828&q=75"
                            sx={{ width: 56, height: 56, marginRight: 1.3 }} />
                          <Box>
                            <Typography sx={{
                              display: "flex",
                              alignItems: "center",
                              fontSize: "16px", mb: .9
                            }} color="white" fontWeight={"bold"}>
                              علی اکبر رائفی پور
                              <VerifiedIcon sx={{
                                color: "rgb(30,161,242)", ml: .5, fontSize: "18px"
                              }} />
                            </Typography>
                            <Typography sx={{
                              color: "white",
                              fontSize: "14px"
                            }}>
                              Mahdiyar۳۱۳_@
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ mt: 6.5 }}>
                          <Typography sx={{ fontSize: "16.4px" }} color="white" >
                            {slider.title}
                          </Typography>
                        </Box>
                        <Box sx={{ mt: "auto", mb: 1.5 }}>
                          <Link href="#" underline="" color="rgb(53, 160, 231)">
                            بیشتر
                          </Link>
                        </Box>
                      </Box>
                    </CardContent>
                    <Box sx={{
                      display: "flex",
                      justifyContent: "center",
                      mt: 'auto',
                      mb: 2.5
                    }}>
                      <Typography sx={{ fontSize: "12px" }} color={grey[500]}>
                        ۱۴۰۳/۱۱/۲۸
                      </Typography>
                    </Box>
                  </Card>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TweetSlider;