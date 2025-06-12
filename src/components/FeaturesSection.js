
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Container
} from "@mui/material"
import { SmartToy, Speed, Devices } from "@mui/icons-material"

const features = [
  {
    icon: <SmartToy sx={{ fontSize: 28, color: "white" }} />,
    title: "Smart Recommendations",
    description: "Our AI learns your preferences and suggests content you'll love, making discovery effortless and personalized.",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)"
  },
  {
    icon: <Speed sx={{ fontSize: 28, color: "white" }} />,
    title: "Ultra-Fast Streaming",
    description: "Enjoy buffer-free streaming with our optimized CDN, delivering 4K quality even on slower connections.",
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)"
  },
  {
    icon: <Devices sx={{ fontSize: 28, color: "white" }} />,
    title: "Cross-Platform Access",
    description: "Stream seamlessly across all your devices with automatic sync and offline downloads for mobile.",
    gradient: "linear-gradient(135deg, #6366f1, #4f46e5)"
  }
]

export default function FeaturesSection() {
  return (
    <Box sx={{ backgroundColor: "white", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              color: "#1f2937",
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Why choose Sinemagpt?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#6b7280",
              maxWidth: "600px",
              mx: "auto",
              fontWeight: 400,
            }}
          >
            Experience the future of streaming with features designed for the modern viewer
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "16px",
                  border: "1px solid #f3f4f6",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.1)",
                    borderColor: "#e5e7eb",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "12px",
                      background: feature.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ mb: 2, color: "#1f2937", fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#6b7280", lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}