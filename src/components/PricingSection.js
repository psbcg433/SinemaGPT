// ✅ FULL UPDATED CODE — PricingPlans.js

import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: "$0",
    period: "/month",
    features: [
      "Limited content library",
      "720p HD streaming",
      "1 device at a time",
      "Basic AI recommendations",
    ],
    buttonText: "Get Started Free",
    buttonVariant: "outlined",
    borderColor: "#d1d5db",
    checkColor: "#10b981",
  },
  {
    name: "Monthly",
    description: "Full access to everything",
    price: "$12.99",
    period: "/month",
    features: [
      "Full content library",
      "4K Ultra HD streaming",
      "Up to 4 devices",
      "Advanced AI recommendations",
      "Offline downloads",
    ],
    buttonText: "Start Monthly Plan",
    buttonVariant: "contained",
    borderColor: "#6366f1",
    checkColor: "#6366f1",
  },
  {
    name: "Yearly",
    description: "Best value for power users",
    price: "$8.99",
    period: "/month",
    annualPrice: "Billed annually ($107.88/year)",
    features: [
      "Everything in Monthly",
      "Priority customer support",
      "Early access to new features",
      "Exclusive content library",
      "Up to 6 devices",
    ],
    buttonText: "Start Yearly Plan",
    buttonVariant: "contained",
    borderColor: "#8b5cf6",
    checkColor: "#8b5cf6",
  },
];

function renderCard(plan, index) {
  return (
    <Card
      key={plan.name}
      sx={{
        flex: "0 0 auto",
        minWidth: { xs: 280, sm: 320, md: "auto" },
        height: 550,
        borderRadius: "20px",
        border: `2px solid ${plan.borderColor}`,
        backgroundColor: "#ffffff",
        boxShadow:
          index === 1
            ? "0 10px 25px rgba(99, 102, 241, 0.2)"
            : "0 4px 6px rgba(0, 0, 0, 0.05)",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        scrollSnapAlign: { xs: "start", md: "unset" },
      }}
    >
      {index === 1 && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: plan.borderColor,
            color: "white",
            px: 2,
            py: 0.5,
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            fontWeight: 600,
            fontSize: "0.8rem",
          }}
        >
          Most Popular
        </Box>
      )}
      {index === 2 && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            bgcolor: "#10b981",
            color: "white",
            px: 2,
            py: 0.5,
            borderBottomLeftRadius: "10px",
            borderBottomRightRadius: "10px",
            fontWeight: 600,
            fontSize: "0.8rem",
          }}
        >
          Save 30%
        </Box>
      )}
      <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 600, color: "#1f2937", mb: 1 }}>
            {plan.name}
          </Typography>
          <Typography variant="body1" sx={{ color: "#6b7280", mb: 3 }}>
            {plan.description}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "center", mb: 1 }}>
            <Typography variant="h3" sx={{ fontWeight: 800, color: "#1f2937" }}>
              {plan.price}
            </Typography>
            <Typography variant="body1" sx={{ color: "#6b7280", ml: 1 }}>
              {plan.period}
            </Typography>
          </Box>
          {plan.annualPrice && (
            <Typography variant="body2" sx={{ color: "#10b981", fontWeight: 600 }}>
              {plan.annualPrice}
            </Typography>
          )}
        </Box>
        <Box sx={{ mb: 4 }}>
          {plan.features.map((feature, i) => (
            <Box key={i} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: plan.checkColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 2,
                }}
              >
                <Typography sx={{ color: "white", fontSize: "12px" }}>✓</Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "#6b7280" }}>
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box mt="auto">
          <Button
            fullWidth
            variant={plan.buttonVariant}
            size="large"
            sx={{
              py: 1.5,
              borderRadius: "12px",
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              boxShadow: index === 1 ? "0 4px 12px rgba(99, 102, 241, 0.4)" : "none",
              backgroundColor: index === 2 ? "#8b5cf6" : undefined,
              "&:hover": {
                boxShadow: index === 1 ? "0 6px 16px rgba(99, 102, 241, 0.5)" : "none",
                transform: "translateY(-1px)",
                backgroundColor: index === 2 ? "#7c3aed" : undefined,
              },
              transition: "all 0.2s ease",
            }}
          >
            {plan.buttonText}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default function PricingPlans() {
  return (
    <Box
      id="pricing"
      sx={{
        py: 10,
        px: 2,
        background: "linear-gradient(to right, #eef2ff, #fdf2f8)",
        minHeight: "100vh",
      }}
    >
      <Container>

        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: 'center',
            marginBottom:'1em',
            color: "#1f2937",
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          Choose Your Plan
        </Typography>

        {/* Mobile scroll */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "row",
            overflowX: "auto",
            gap: 2,
            pb: 2,
            px: 1,
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {plans.map((plan, index) => renderCard(plan, index))}
        </Box>

        {/* Desktop layout */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "stretch",
            gap: 4,
            mt: 4,
          }}
        >
          {plans.map((plan, index) => renderCard(plan, index))}
        </Box>

        <Typography
          variant="body2"
          sx={{ textAlign: "center", color: "#6b7280", mt: 6 }}
        >
          All plans include a 7-day free trial. No credit card required. Cancel
          anytime. No hidden fees.
        </Typography>
      </Container>
    </Box>
  );
}
