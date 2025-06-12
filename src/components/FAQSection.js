

import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Container,
  Box
} from "@mui/material"
import { ExpandMore } from "@mui/icons-material"

const faqs = [
  {
    question: "What is Sinemagpt?",
    answer: "Sinemagpt is an AI-powered streaming platform that offers personalized movie and TV show recommendations based on your viewing habits and preferences."
  },
  {
    question: "How much does it cost?",
    answer: "We offer flexible pricing starting at $8.99/month with a 7-day free trial. Premium plans include 4K streaming and offline downloads."
  },
  {
    question: "Can I download content for offline viewing?",
    answer: "Yes, premium subscribers can download movies and shows to watch offline on mobile devices and tablets."
  },
  {
    question: "How does the AI recommendation system work?",
    answer: "Our AI analyzes your viewing history, ratings, and preferences to suggest content you're likely to enjoy. The more you watch, the better our recommendations become."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 7-day free trial with full access to all features. No credit card required to start."
  }
]

export default function FAQSection() {
  return (
    <Box sx={{ backgroundColor: "#f9fafb", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
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
            Frequently asked questions
          </Typography>
          <Typography variant="h6" sx={{ color: "#6b7280", fontWeight: 400 }}>
            Everything you need to know about Sinemagpt
          </Typography>
        </Box>

        <Stack spacing={2}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                borderRadius: "12px !important",
                border: "1px solid #e5e7eb",
                boxShadow: "none",
                "&:before": {
                  display: "none",
                },
                "&.Mui-expanded": {
                  margin: "8px 0",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  "& .MuiAccordionSummary-content": {
                    margin: "16px 0",
                  },
                }}
              >
                <Typography variant="h6" sx={{ color: "#1f2937", fontWeight: 600 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pt: 0 }}>
                <Typography sx={{ color: "#6b7280", lineHeight: 1.6 }}>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}