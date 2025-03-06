import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { Box, Button, Card, CardContent, CardMedia, Skeleton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from '@mui/material/Grid2';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Contents = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get("https://api.masaf.ir/api/v1/content/randContent/");
                setData(response.data.data);
            } catch (error) {
                setError("Error");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (error) return <p>{error}</p>;

    return (
        <Box sx={{
            width: "100%",
            py: 4,
            opacity: "30",
            pb: 4.9,
            background: `linear-gradient(to top, ${grey[50]}, rgba(255, 255, 255, 0))`
        }}>
            <Box sx={{
                width: "100%",
                textAlign: "center"
            }}>
                <Typography fontWeight={"bold"}>
                    مطالب مناسب شما
                </Typography>
            </Box>

            <Box sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
            }}>
                <Box sx={{
                    width: "90.5%",
                    mt: 4.7
                }}>
                    <Grid container spacing={2}>
                        {loading ? (
                            Array.from(new Array(3)).map((_, index) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                    <Card sx={{
                                        borderRadius: 3,
                                        border: 1,
                                        borderColor: grey[300],
                                        boxShadow: "0",
                                        height: 497,
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>
                                        <Skeleton variant="rectangular" width="100%" height={255} />
                                        <CardContent sx={{
                                            px: 1.5, flexGrow: 1, display: "flex",
                                            flexDirection: "column", justifyContent: "space-between"
                                        }}>
                                            <Skeleton variant="text" width="80%" height={20} />
                                            <Skeleton variant="text" width="100%" height={20} />
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))
                        ) : (
                            data.map((info) => (
                                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={info.id}>
                                    <Card sx={{
                                        borderRadius: 3,
                                        border: 1,
                                        borderColor: grey[300],
                                        boxShadow: "0",
                                        height: 497,
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column"
                                    }}>
                                        <CardMedia
                                            component="img"
                                            image={info.coverImage}
                                            alt="video description"
                                            sx={{ width: '100%', height: 255 }}
                                        />
                                        <CardContent sx={{ px: 1.5, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                            <Box>
                                                <Typography sx={{ display: "flex", alignItems: "center", gap: 1.3, mb: 1.7 }} variant="body2" fontWeight={"bold"}>
                                                    <TextSnippetIcon sx={{ color: grey[400] }} />
                                                    {info.title}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ pb: 1 }}>
                                                    {info.summary}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
                                                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                                                    <Typography variant="caption" sx={{ display: "flex", alignItems: "center", gap: .4 }}>
                                                        <CalendarMonthOutlinedIcon sx={{ color: grey[600], width: "27px", height: "27px" }} />
                                                        {info.occurrenceAt.date}
                                                    </Typography>
                                                    <Box sx={{ display: "flex", gap: 1 }}>
                                                        <Button
                                                            sx={{
                                                                width: 20,
                                                                height: 20,
                                                                padding: 0,
                                                                boxShadow: 0,
                                                                minWidth: 'auto',
                                                                '&:hover': {
                                                                    boxShadow: 0
                                                                },
                                                            }}
                                                            variant="contained">
                                                            <img src={info.portal.image} alt="Icon" style={{ width: '100%', height: '100%' }} />
                                                        </Button>
                                                        <Typography sx={{ fontSize: "12px" }}>{info.portal.name}</Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))
                        )}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Contents