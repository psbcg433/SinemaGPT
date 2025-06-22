import { Typography, Button, Stack, Box, Chip, Grid, Container, Fade, Zoom, Slide } from "@mui/material"
import { PlayArrow, Star, Search, Movie, Favorite } from "@mui/icons-material"
import AuthForm from "./AuthForm"

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        background: `
          linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.98) 50%, rgba(15, 23, 42, 0.95) 100%),
          url("/herosec.jpg")
        `,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        zIndex: 0,
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(124, 58, 237, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: "none",
          zIndex: 1,
          animation: "shimmer 8s ease-in-out infinite",
          "@keyframes shimmer": {
            "0%, 100%": { opacity: 0.7 },
            "50%": { opacity: 1 },
          },
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="0.5" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>\')',
          pointerEvents: "none",
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Left - Hero content */}
          <Grid item xs={12} md={7} order={{ xs: 2, md: 1 }}>
            <Box sx={{ pr: { md: 4 } }}>
              <Slide in direction="right" timeout={1000}>
                <Chip
                  label="✨ AI-Powered Movie Discovery"
                  sx={{
                    mb: 4,
                    backgroundColor: "rgba(139, 92, 246, 0.2)",
                    color: "#F1F5F9",
                    fontWeight: 600,
                    border: "1px solid rgba(139, 92, 246, 0.3)",
                    backdropFilter: "blur(10px)",
                    fontSize: "0.9rem",
                    px: 2,
                    py: 0.5,
                    animation: "pulse 3s ease-in-out infinite",
                    "@keyframes pulse": {
                      "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" },
                      "50%": { transform: "scale(1.05)", boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" },
                    },
                  }}
                />
              </Slide>

              <Fade in timeout={1200}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    color: "white",
                    mb: 4,
                    fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4.5rem" },
                    fontWeight: 800,
                    lineHeight: 1.1,
                    textShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  Discover Your{" "}
                  <Box
                    component="span"
                    sx={{
                      background: "linear-gradient(135deg, #8B5CF6, #F59E0B, #8B5CF6)",
                      backgroundSize: "200% 200%",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      animation: "gradient 4s ease-in-out infinite",
                      "@keyframes gradient": {
                        "0%, 100%": { backgroundPosition: "0% 50%" },
                        "50%": { backgroundPosition: "100% 50%" },
                      },
                    }}
                  >
                    Perfect Movie
                  </Box>
                </Typography>
              </Fade>

              <Slide in direction="up" timeout={1400}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "rgba(241, 245, 249, 0.9)",
                    mb: 5,
                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                    fontWeight: 400,
                    maxWidth: "550px",
                    lineHeight: 1.6,
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Join millions of movie enthusiasts using AI to discover hidden gems, track favorites, and never run
                  out of amazing films to watch.
                </Typography>
              </Slide>

              <Fade in timeout={1600}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={3} sx={{ mb: 6 }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Search />}
                    sx={{
                      borderRadius: "16px",
                      px: 5,
                      py: 2,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      textTransform: "none",
                      background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
                      boxShadow: "0 12px 40px rgba(139, 92, 246, 0.4)",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                        transition: "left 0.5s",
                      },
                      "&:hover": {
                        background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
                        boxShadow: "0 16px 50px rgba(139, 92, 246, 0.6)",
                        transform: "translateY(-3px)",
                        "&::before": {
                          left: "100%",
                        },
                      },
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    Start Discovering
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrow />}
                    sx={{
                      borderRadius: "16px",
                      px: 5,
                      py: 2,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      textTransform: "none",
                      color: "#F1F5F9",
                      borderColor: "rgba(139, 92, 246, 0.4)",
                      backgroundColor: "rgba(139, 92, 246, 0.1)",
                      backdropFilter: "blur(10px)",
                      "&:hover": {
                        borderColor: "rgba(139, 92, 246, 0.8)",
                        backgroundColor: "rgba(139, 92, 246, 0.2)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 12px 40px rgba(139, 92, 246, 0.3)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Watch Demo
                  </Button>
                </Stack>
              </Fade>

              <Zoom in timeout={1800}>
                <Stack
                  direction="row"
                  spacing={6}
                  sx={{
                    color: "rgba(241, 245, 249, 0.9)",
                    flexWrap: "wrap",
                    gap: 4,
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        color: "#F1F5F9",
                        textShadow: "0 2px 10px rgba(139, 92, 246, 0.5)",
                        mb: 1,
                      }}
                    >
                      2M+
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#94A3B8", fontWeight: 500 }}>
                      <Movie sx={{ fontSize: 16, mr: 0.5, verticalAlign: "middle" }} />
                      Movies & Shows
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        color: "#F1F5F9",
                        textShadow: "0 2px 10px rgba(139, 92, 246, 0.5)",
                        mb: 1,
                      }}
                    >
                      500K+
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#94A3B8", fontWeight: 500 }}>
                      <Favorite sx={{ fontSize: 16, mr: 0.5, verticalAlign: "middle" }} />
                      Happy Users
                    </Typography>
                  </Box>

                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 800,
                        color: "#F1F5F9",
                        textShadow: "0 2px 10px rgba(139, 92, 246, 0.5)",
                        mb: 1,
                      }}
                    >
                      4.9
                    </Typography>
                    <Stack direction="row" spacing={0.5} justifyContent="center" sx={{ mb: 1 }}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          sx={{
                            fontSize: 18,
                            color: "#F59E0B",
                            filter: "drop-shadow(0 2px 4px rgba(245, 158, 11, 0.3))",
                            animation: `twinkle ${1 + i * 0.2}s ease-in-out infinite`,
                            "@keyframes twinkle": {
                              "0%, 100%": { opacity: 0.8, transform: "scale(1)" },
                              "50%": { opacity: 1, transform: "scale(1.1)" },
                            },
                          }}
                        />
                      ))}
                    </Stack>
                    <Typography variant="body1" sx={{ color: "#94A3B8", fontWeight: 500 }}>
                      User Rating
                    </Typography>
                  </Box>
                </Stack>
              </Zoom>
            </Box>
          </Grid>

          {/* Right - AuthForm */}
          <Grid item xs={12} md={5} order={{ xs: 1, md: 2 }}>
            <Zoom in timeout={2000}>
              <Box>
                <AuthForm />
              </Box>
            </Zoom>
          </Grid>
        </Grid>
      </Container>

      {/* Floating Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "10%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
          animation: "float 8s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
            "50%": { transform: "translateY(-30px) rotate(180deg)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "30%",
          left: "5%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%)",
          animation: "float 6s ease-in-out infinite reverse",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          right: "20%",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)",
          animation: "float 10s ease-in-out infinite",
        }}
      />
    </Box>
  )
}
