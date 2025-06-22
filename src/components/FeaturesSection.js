import { Typography, Grid, Card, CardContent, Box, Container, Fade, Zoom } from "@mui/material"
import { Psychology, Search, Favorite, TrendingUp, Group, Star } from "@mui/icons-material"

const features = [
  {
    icon: <Psychology sx={{ fontSize: 32, color: "white" }} />,
    title: "AI-Powered Recommendations",
    description:
      "Our advanced machine learning algorithms analyze your preferences, ratings, and viewing patterns to suggest movies you'll absolutely love.",
    gradient: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
    delay: 0,
  },
  {
    icon: <Search sx={{ fontSize: 32, color: "white" }} />,
    title: "Advanced Search & Filters",
    description:
      "Find exactly what you're looking for with powerful search tools, genre filters, year ranges, ratings, and more sophisticated discovery options.",
    gradient: "linear-gradient(135deg, #7C3AED, #6D28D9)",
    delay: 200,
  },
  {
    icon: <Favorite sx={{ fontSize: 32, color: "white" }} />,
    title: "Personal Watchlists",
    description:
      "Create unlimited custom watchlists, track movies you've seen, rate your favorites, and organize your cinematic journey your way.",
    gradient: "linear-gradient(135deg, #6D28D9, #5B21B6)",
    delay: 400,
  },
  {
    icon: <TrendingUp sx={{ fontSize: 32, color: "white" }} />,
    title: "Trending & Popular",
    description:
      "Stay up-to-date with what's trending now, discover rising gems, and explore the most popular movies across different genres and regions.",
    gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
    delay: 600,
  },
  {
    icon: <Group sx={{ fontSize: 32, color: "white" }} />,
    title: "Social Discovery",
    description:
      "Connect with fellow movie enthusiasts, follow friends' recommendations, share reviews, and discover films through your network.",
    gradient: "linear-gradient(135deg, #7C3AED, #8B5CF6)",
    delay: 800,
  },
  {
    icon: <Star sx={{ fontSize: 32, color: "white" }} />,
    title: "Expert Reviews & Ratings",
    description:
      "Access professional critic reviews, user ratings, detailed movie information, cast details, and comprehensive film analysis.",
    gradient: "linear-gradient(135deg, #6D28D9, #7C3AED)",
    delay: 1000,
  },
]

export default function FeaturesSection() {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #1E293B 0%, #0F172A 50%, #1E293B 100%)",
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Fade in timeout={800}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 2,
                background: "linear-gradient(135deg, #F1F5F9, #8B5CF6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 700,
              }}
            >
              Why Choose CineScope?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#94A3B8",
                maxWidth: "600px",
                mx: "auto",
                fontWeight: 400,
                mb: 2,
              }}
            >
              Discover the future of movie recommendations with features designed for true cinema lovers
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 4 }}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  sx={{
                    color: "#8B5CF6",
                    fontSize: 20,
                    animation: `twinkle ${1 + i * 0.2}s ease-in-out infinite`,
                    "@keyframes twinkle": {
                      "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
                      "50%": { opacity: 1, transform: "scale(1.2)" },
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
        </Fade>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Zoom in timeout={1000 + feature.delay}>
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: "24px",
                    background: "rgba(30, 41, 59, 0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(139, 92, 246, 0.2)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: feature.gradient,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    },
                    "&:hover": {
                      transform: "translateY(-8px) scale(1.02)",
                      boxShadow: "0 20px 60px rgba(139, 92, 246, 0.3)",
                      border: "1px solid rgba(139, 92, 246, 0.4)",
                      "&::before": {
                        opacity: 1,
                      },
                      "& .feature-icon": {
                        transform: "scale(1.1) rotate(5deg)",
                        boxShadow: "0 12px 40px rgba(139, 92, 246, 0.4)",
                      },
                      "& .feature-title": {
                        color: "#8B5CF6",
                      },
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
                    <Box
                      className="feature-icon"
                      sx={{
                        width: 72,
                        height: 72,
                        borderRadius: "20px",
                        background: feature.gradient,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 3,
                        boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          width: "100%",
                          height: "100%",
                          borderRadius: "20px",
                          background: feature.gradient,
                          opacity: 0.3,
                          transform: "translate(-50%, -50%) scale(1.5)",
                          animation: "pulse 3s ease-in-out infinite",
                          "@keyframes pulse": {
                            "0%, 100%": { opacity: 0.3, transform: "translate(-50%, -50%) scale(1.5)" },
                            "50%": { opacity: 0.1, transform: "translate(-50%, -50%) scale(2)" },
                          },
                        },
                      }}
                    >
                      {feature.icon}
                    </Box>

                    <Typography
                      className="feature-title"
                      variant="h5"
                      component="h3"
                      sx={{
                        mb: 2,
                        color: "#F1F5F9",
                        fontWeight: 600,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#94A3B8",
                        lineHeight: 1.7,
                        flex: 1,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>

        {/* Floating decorative elements */}
        <Box
          sx={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "100px",
            height: "100px",
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
            bottom: "15%",
            left: "3%",
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%)",
            animation: "float 6s ease-in-out infinite reverse",
          }}
        />
      </Container>
    </Box>
  )
}
