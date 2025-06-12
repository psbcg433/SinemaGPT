import {
  Typography,
  Button,
  Stack,
  Box,
  Chip,
  Grid,
  Container
} from "@mui/material";
import { PlayArrow, Star } from "@mui/icons-material";
import AuthForm from "./AuthForm";

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `
          linear-gradient(45deg, rgba(153, 87, 197, 0.92) 0%, rgba(8, 5, 71, 0.95) 100%),
          url("/herosec.jpg")
        `,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: 0,
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
          zIndex: 1
        }
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          position: "relative",
          zIndex: 2
        }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Left - Hero content */}
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <Box sx={{ pr: { md: 4 } }}>
              <Chip
                label="✨ Now with AI-powered recommendations"
                sx={{
                  mb: 3,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  fontWeight: 500,
                  border: "1px solid rgba(255, 255, 255, 0.3)"
                }}
              />
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: "white",
                  mb: 3,
                  fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" }
                }}
              >
                Entertainment,{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}
                >
                  Reimagined
                </Box>
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  mb: 4,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  fontWeight: 400,
                  maxWidth: "500px"
                }}
              >
                Discover your next favorite show with AI that understands your
                taste. Stream unlimited content across all your devices.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mb: 6 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<PlayArrow />}
                  sx={{
                    borderRadius: "12px",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0 8px 24px rgba(99, 102, 241, 0.4)",
                    "&:hover": {
                      boxShadow: "0 12px 32px rgba(99, 102, 241, 0.5)",
                      transform: "translateY(-2px)"
                    },
                    transition: "all 0.3s ease"
                  }}
                >
                  Start Free Trial
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderRadius: "12px",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    "&:hover": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }
                  }}
                >
                  Watch Demo
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={4}
                sx={{ color: "rgba(255, 255, 255, 0.8)" }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: "white" }}
                  >
                    10M+
                  </Typography>
                  <Typography variant="body2" sx={{color:'white'}}>Active Users</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: "white" }}
                  >
                    50K+
                  </Typography>
                  <Typography variant="body2" sx={{color:'white'}}>Movies & Shows</Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: "white" }}
                  >
                    4.9
                  </Typography>
                  <Stack direction="row" spacing={0.5} justifyContent="center" sx={{ mt: 0.5 }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} sx={{ fontSize: 16, color: "#fbbf24" }} />
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Grid>

          {/* Right - AuthForm */}
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <AuthForm />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
