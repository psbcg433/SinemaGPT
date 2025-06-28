import { Typography, Grid, Stack, Divider, IconButton, Container, Box, Link } from "@mui/material"
import {
  Movie,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  GitHub,
  YouTube,
  Email,
  LocationOn,
  Phone,
} from "@mui/icons-material"

const footerLinks = [
  {
    title: "Discover",
    links: [
      { name: "Browse Movies", href: "#" },
      { name: "Top Rated", href: "#" },
      { name: "New Releases", href: "#" },
      { name: "Trending Now", href: "#" },
    ],
  },
  {
    title: "Features",
    links: [
      { name: "AI Recommendations", href: "#" },
      { name: "Watchlists", href: "#" },
      { name: "Reviews", href: "#" },
      { name: "Social Features", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Discussion Forums", href: "#" },
      { name: "Movie Clubs", href: "#" },
      { name: "User Reviews", href: "#" },
      { name: "Recommendations", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Bug Reports", href: "#" },
      { name: "Feature Requests", href: "#" },
    ],
  },
]

const socialLinks = [
  { icon: <Facebook />, href: "#", label: "Facebook" },
  { icon: <Twitter />, href: "#", label: "Twitter" },
  { icon: <Instagram />, href: "#", label: "Instagram" },
  { icon: <LinkedIn />, href: "#", label: "LinkedIn" },
  { icon: <GitHub />, href: "#", label: "GitHub" },
  { icon: <YouTube />, href: "#", label: "YouTube" },
]

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #0F172A 0%, #020617 100%)",
        color: "white",
        py: 8,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.05) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 3,
                    boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)",
                    animation: "glow 3s ease-in-out infinite",
                    "@keyframes glow": {
                      "0%, 100%": { boxShadow: "0 8px 32px rgba(139, 92, 246, 0.3)" },
                      "50%": { boxShadow: "0 8px 32px rgba(139, 92, 246, 0.6)" },
                    },
                  }}
                >
                  <Movie sx={{ fontSize: 24, color: "white" }} />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #F1F5F9, #8B5CF6)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  SinemaGPT
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: "#94A3B8",
                  mb: 4,
                  lineHeight: 1.6,
                  maxWidth: "300px",
                }}
              >
                Discover your next favorite movie with AI-powered recommendations. Join millions of movie lovers in the
                ultimate cinematic journey.
              </Typography>

              {/* Contact Info */}
              <Stack spacing={2} sx={{ mb: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Email sx={{ color: "#8B5CF6", fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                    hello@sinemagpt.com
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Phone sx={{ color: "#8B5CF6", fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                    +91 0987654321
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <LocationOn sx={{ color: "#8B5CF6", fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                    West Bengal, India
                  </Typography>
                </Box>
              </Stack>

              {/* Social Links */}
              <Stack direction="row" spacing={1}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    sx={{
                      color: "#64748B",
                      backgroundColor: "rgba(30, 41, 59, 0.5)",
                      border: "1px solid rgba(139, 92, 246, 0.2)",
                      "&:hover": {
                        color: "#8B5CF6",
                        backgroundColor: "rgba(139, 92, 246, 0.1)",
                        borderColor: "rgba(139, 92, 246, 0.4)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 8px 25px rgba(139, 92, 246, 0.2)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Box>
          </Grid>

          {/* Links Sections */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {footerLinks.map((section, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 3,
                      fontWeight: 600,
                      color: "#F1F5F9",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-8px",
                        left: 0,
                        width: "30px",
                        height: "2px",
                        background: "linear-gradient(90deg, #8B5CF6, #7C3AED)",
                        borderRadius: "1px",
                      },
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Stack spacing={2}>
                    {section.links.map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        underline="none"
                        sx={{
                          color: "#94A3B8",
                          fontSize: "0.875rem",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            color: "#8B5CF6",
                            transform: "translateX(4px)",
                          },
                        }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider
          sx={{
            my: 6,
            borderColor: "rgba(139, 92, 246, 0.2)",
            "&::before": {
              background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.5), transparent)",
            },
          }}
        />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="body2" sx={{ color: "#64748B" }}>
            © {new Date().getFullYear()} SinemaGPT. All rights reserved. Made with ❤️ by Prashnik.
          </Typography>

          <Stack direction="row" spacing={3}>
            <Link
              href="#"
              underline="none"
              sx={{ color: "#64748B", fontSize: "0.875rem", "&:hover": { color: "#8B5CF6" } }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{ color: "#64748B", fontSize: "0.875rem", "&:hover": { color: "#8B5CF6" } }}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{ color: "#64748B", fontSize: "0.875rem", "&:hover": { color: "#8B5CF6" } }}
            >
              Cookie Policy
            </Link>
          </Stack>
        </Box>
      </Container>

      {/* Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          bottom: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          animation: "float 10s ease-in-out infinite",
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-20px)" },
          },
        }}
      />
    </Box>
  )
}
