import { Box, Skeleton } from "@mui/material"
import Grid from '@mui/material/Grid2'
const SkeletonCard = () => {
    return (
        <Box>
            <Grid container spacing={{ sm: 1, md: 5, lg: 4.5 }}>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Skeleton variant="rounded" height={388} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                    sx={{ display: { xs: "none", sm: "block" } }}
                >
                    <Skeleton variant="rounded" height={388} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                    sx={{ display: { xs: "none", sm: "none", md: "block" } }}
                >
                    <Skeleton variant="rounded" height={388} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                    sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
                >
                    <Skeleton variant="rounded" height={388} />
                </Grid>
            </Grid>

        </Box>
    )
}

export default SkeletonCard