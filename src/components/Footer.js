

import {
  Typography,
  Grid,
  Stack,
  Divider,
  IconButton,
  Container,
  Box
} from "@mui/material"
import { Movie, Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material"

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "API"]
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers"]
  },
  {
    title: "Support",
    links: ["Help Center", "Contact", "Status"]
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookies"]
  }
]

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1f2937",
        color: "white",
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                }}
              >
                <Movie sx={{ fontSize: 20, color: "white" }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Sinemagpt
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#9ca3af", mb: 3 }}>
              The future of entertainment, powered by AI. Stream smarter, not harder.
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton sx={{ color: "#9ca3af", "&:hover": { color: "white" } }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "#9ca3af", "&:hover": { color: "white" } }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "#9ca3af", "&:hover": { color: "white" } }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "#9ca3af", "&:hover": { color: "white" } }}>
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {footerLinks.map((section, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                    {section.title}
                  </Typography>
                  <Stack spacing={1}>
                    {section.links.map((link, i) => (
                      <Typography key={i} variant="body2" sx={{ color: "#9ca3af" }}>
                        {link}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, borderColor: "#374151" }} />
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#9ca3af" }}>
            © {new Date().getFullYear()} Sinemagpt. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}