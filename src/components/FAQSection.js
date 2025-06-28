

import { useState } from "react"
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Container,
  Box,
  Fade,
} from "@mui/material"
import {
  ExpandMore,
  Movie,
  Search,
  Favorite,
  Star,
  Group,
} from "@mui/icons-material"

const faqs = [
  {
    question: "What is SinemaGPT?",
    answer:
      "SinemaGPT is a free AI-powered movie discovery platform. It helps you find movies by browsing genres, searching specific titles, adding to watchlists and favorites, and seeing what others are watching—without streaming or subscriptions.",
    icon: <Movie sx={{ color: "#8B5CF6" }} />,
  },
  {
    question: "Is SinemaGPT completely free?",
    answer:
      "Yes, all features are completely free! You can search the database, create watchlists, mark favorites, explore similar movies, and view community trends without any cost or ads.",
    icon: <Star sx={{ color: "#8B5CF6" }} />,
  },
  {
    question: "Can I watch movies on SinemaGPT?",
    answer:
      "No. SinemaGPT is not a streaming service. It’s a movie database and discovery tool that helps you decide what to watch next based on AI-powered recommendations and community activity.",
    icon: <Search sx={{ color: "#8B5CF6" }} />,
  },
  {
    question: "How does SinemaGPT recommend movies?",
    answer:
      "SinemaGPT uses an AI engine that analyzes your saved watchlists, favorite genres, preferred directors, and browsing patterns. It also shows what's trending in the community to help you discover similar titles.",
    icon: <Group sx={{ color: "#8B5CF6" }} />,
  },
  {
    question: "What can I do with my account?",
    answer:
      "You can create personalized watchlists, mark favorite films, leave reviews, and see community activity. All your preferences help improve your future recommendations.",
    icon: <Favorite sx={{ color: "#8B5CF6" }} />,
  },
]

export default function FAQSection() {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
        py: { xs: 8, md: 12 },
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)
          `,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
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
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#94A3B8",
                fontWeight: 400,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Everything you need to know about exploring movies with SinemaGPT
            </Typography>
          </Box>
        </Fade>

        <Stack spacing={3}>
          {faqs.map((faq, index) => (
            <Fade in timeout={1000 + index * 200} key={index}>
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                sx={{
                  borderRadius: "20px !important",
                  background: "rgba(30, 41, 59, 0.6)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  "&:before": {
                    display: "none",
                  },
                  "&.Mui-expanded": {
                    margin: "12px 0",
                    boxShadow: "0 12px 40px rgba(139, 92, 246, 0.2)",
                    border: "1px solid rgba(139, 92, 246, 0.4)",
                  },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 40px rgba(139, 92, 246, 0.15)",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore
                      sx={{
                        color: "#8B5CF6",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  }
                  sx={{
                    "& .MuiAccordionSummary-content": {
                      margin: "20px 0",
                      alignItems: "center",
                    },
                    "&.Mui-expanded": {
                      "& .MuiSvgIcon-root": {
                        transform: "rotate(180deg)",
                      },
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: "12px",
                        background:
                          "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(124, 58, 237, 0.2))",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {faq.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#F1F5F9",
                        fontWeight: 600,
                        flex: 1,
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0, pb: 3, px: 3 }}>
                  <Box sx={{ ml: 7 }}>
                    <Typography
                      sx={{
                        color: "#94A3B8",
                        lineHeight: 1.7,
                        fontSize: "1rem",
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Fade>
          ))}
        </Stack>

        {/* Decorative elements */}
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            right: "-10%",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
            animation: "float 6s ease-in-out infinite",
            "@keyframes float": {
              "0%, 100%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-20px)" },
            },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "20%",
            left: "-10%",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
      </Container>
    </Box>
  )
}
