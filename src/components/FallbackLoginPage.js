import { Box, Skeleton, Divider, Paper, Grid } from "@mui/material"

const FallbackLoginPage = () => {
  return (
    <Box sx={{ minHeight: "100vh", width: "100vw" }}>
      <Grid container sx={{ minHeight: "100vh", alignItems: "center" }}>
        {/* Left side - Text content skeleton */}
        <Grid item xs={12} md={6} sx={{ px: { xs: 3, md: 6 }, py: { xs: 4, md: 0 } }}>
          <Box>
            {/* Main heading skeleton */}
            <Skeleton variant="text" width="90%" height={60} sx={{ mb: 2 }} />
            <Skeleton variant="text" width="70%" height={60} sx={{ mb: 3 }} />

            {/* Subheading skeleton */}
            <Skeleton variant="text" width="85%" height={28} sx={{ mb: 2 }} />

            {/* Paragraph skeleton */}
            <Box sx={{ mb: 4 }}>
              <Skeleton variant="text" width="100%" height={20} sx={{ mb: 1 }} />
              <Skeleton variant="text" width="95%" height={20} sx={{ mb: 1 }} />
              <Skeleton variant="text" width="80%" height={20} sx={{ mb: 1 }} />
              <Skeleton variant="text" width="90%" height={20} />
            </Box>

            {/* Features list skeleton */}
            <Box sx={{ mb: 4 }}>
              {[1, 2, 3].map((item) => (
                <Box key={item} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Skeleton variant="circular" width={24} height={24} sx={{ mr: 2 }} />
                  <Skeleton variant="text" width="60%" height={20} />
                </Box>
              ))}
            </Box>

            {/* Stats section skeleton */}
            <Box sx={{ display: "flex", gap: 4, mb: 4 }}>
              {[1, 2, 3].map((item) => (
                <Box key={item}>
                  <Skeleton variant="text" width={60} height={40} sx={{ mb: 0.5 }} />
                  <Skeleton variant="text" width={80} height={16} />
                </Box>
              ))}
            </Box>

            {/* CTA button skeleton */}
            <Skeleton variant="rectangular" width={180} height={44} sx={{ borderRadius: 1 }} />
          </Box>
        </Grid>

        {/* Right side - Login form skeleton */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 0 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              width: "100%",
              maxWidth: 450,
            }}
          >
            {/* Header section skeleton */}
            <Box sx={{ mb: 4, textAlign: "center" }}>
              <Skeleton variant="text" width="60%" height={40} sx={{ mx: "auto" }} />
              <Skeleton variant="text" width="80%" height={24} sx={{ mx: "auto", mt: 1 }} />
            </Box>

            {/* Welcome back section skeleton */}
            <Box sx={{ mb: 3 }}>
              <Skeleton variant="text" width="40%" height={28} />
              <Skeleton variant="text" width="60%" height={20} sx={{ mt: 0.5 }} />
            </Box>

            {/* Form skeleton */}
            <Box sx={{ mb: 2 }}>
              <Skeleton variant="text" width="30%" height={20} sx={{ mb: 0.5 }} />
              <Skeleton variant="rectangular" height={40} sx={{ borderRadius: 1 }} />
            </Box>
            <Box sx={{ mb: 3 }}>
              <Skeleton variant="text" width="30%" height={20} sx={{ mb: 0.5 }} />
              <Skeleton variant="rectangular" height={40} sx={{ borderRadius: 1 }} />
            </Box>

            {/* Remember me and forgot password skeleton */}
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Skeleton variant="rectangular" width={16} height={16} sx={{ mr: 1 }} />
                <Skeleton variant="text" width={80} height={16} />
              </Box>
              <Skeleton variant="text" width={100} height={16} />
            </Box>

            {/* Button skeleton */}
            <Skeleton variant="rectangular" height={40} sx={{ borderRadius: 1, mb: 2 }} />

            {/* Divider skeleton */}
            <Box sx={{ display: "flex", alignItems: "center", my: 3 }}>
              <Divider sx={{ flexGrow: 1 }} />
              <Skeleton variant="text" width={40} height={20} sx={{ mx: 1 }} />
              <Divider sx={{ flexGrow: 1 }} />
            </Box>

            {/* Social login skeleton */}
            <Skeleton variant="rectangular" height={40} sx={{ borderRadius: 1, mb: 2 }} />

            {/* Sign up link skeleton */}
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Skeleton variant="text" width="70%" height={20} sx={{ mx: "auto" }} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FallbackLoginPage
