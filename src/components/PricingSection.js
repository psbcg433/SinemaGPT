import { Box, Button, Card, CardContent, Container, Typography, Chip, Stack, Fade, Zoom } from "@mui/material"
import { Check, Star, TrendingUp, Movie, Favorite, Search, Group, Support } from "@mui/icons-material"

const plans = [
  {
    name: "Explorer",
    description: "Perfect for casual movie lovers",
    price: "$0",
    period: "/month",
    features: [
      "Browse 100K+ movies",
      "Basic AI recommendations",
      "Create 3 watchlists",
      "Community reviews",
      "Mobile app access",
    ],
    buttonText: "Start Free",
    buttonVariant: "outlined",
    borderColor: "rgba(139, 92, 246, 0.3)",
    checkColor: "#10B981",
    popular: false,
    icon: <Search sx={{ fontSize: 24, color: "white" }} />,
  },
  {
    name: "Cinephile",
    description: "For serious movie enthusiasts",
    price: "$9.99",
    period: "/month",
    features: [
      "Access to 2M+ movies & shows",
      "Advanced AI recommendations",
      "Unlimited watchlists",
      "Priority customer support",
      "Exclusive reviews & ratings",
      "Social features & following",
      "Advanced search filters",
    ],
    buttonText: "Go Premium",
    buttonVariant: "contained",
    borderColor: "#8B5CF6",
    checkColor: "#8B5CF6",
    popular: true,
    icon: <Movie sx={{ fontSize: 24, color: "white" }} />,
  },
  {
    name: "Director",
    description: "Ultimate movie discovery experience",
    price: "$19.99",
    period: "/month",
    annualPrice: "Save 30% with annual billing",
    features: [
      "Everything in Cinephile",
      "Early access to new features",
      "Personal movie curator",
      "Custom recommendation engine",
      "API access for developers",
      "White-label solutions",
      "24/7 priority support",
      "Exclusive industry insights",
    ],
    buttonText: "Go Director",
    buttonVariant: "contained",
    borderColor: "#7C3AED",
    checkColor: "#7C3AED",
    popular: false,
    icon: <Star sx={{ fontSize: 24, color: "white" }} />,
  },
]

function renderCard(plan, index) {
  return (
    <Zoom in timeout={1000 + index * 200} key={plan.name}>
      <Card
        sx={{
          flex: "0 0 auto",
          minWidth: { xs: 300, sm: 340, md: "auto" },
          height: 600,
          borderRadius: "24px",
          background: "rgba(30, 41, 59, 0.6)",
          backdropFilter: "blur(20px)",
          border: `2px solid ${plan.borderColor}`,
          boxShadow: plan.popular ? "0 20px 60px rgba(139, 92, 246, 0.3)" : "0 8px 32px rgba(0, 0, 0, 0.3)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          scrollSnapAlign: { xs: "start", md: "unset" },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: `linear-gradient(90deg, ${plan.checkColor}, ${plan.borderColor})`,
            opacity: plan.popular ? 1 : 0,
            transition: "opacity 0.3s ease",
          },
          "&:hover": {
            transform: "translateY(-8px) scale(1.02)",
            boxShadow: `0 25px 80px rgba(139, 92, 246, 0.4)`,
            border: `2px solid ${plan.popular ? "#8B5CF6" : plan.borderColor}`,
            "&::before": {
              opacity: 1,
            },
            "& .plan-icon": {
              transform: "scale(1.1) rotate(5deg)",
              boxShadow: `0 12px 40px ${plan.checkColor}40`,
            },
          },
        }}
      >
        {plan.popular && (
          <Box
            sx={{
              position: "absolute",
              top: 20,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 2,
            }}
          >
            <Chip
              label="Most Popular"
              sx={{
                background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
                color: "white",
                fontWeight: 600,
                fontSize: "0.8rem",
                boxShadow: "0 8px 32px rgba(139, 92, 246, 0.4)",
                animation: "pulse 3s ease-in-out infinite",
                "@keyframes pulse": {
                  "0%, 100%": { transform: "scale(1)" },
                  "50%": { transform: "scale(1.05)" },
                },
              }}
              icon={<TrendingUp sx={{ color: "white !important" }} />}
            />
          </Box>
        )}

        <CardContent sx={{ p: 4, display: "flex", flexDirection: "column", flexGrow: 1, pt: plan.popular ? 7 : 4 }}>
          {/* Plan Header */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Box
              className="plan-icon"
              sx={{
                width: 64,
                height: 64,
                borderRadius: "16px",
                background: `linear-gradient(135deg, ${plan.checkColor}, ${plan.borderColor})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 3,
                boxShadow: `0 8px 32px ${plan.checkColor}30`,
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {plan.icon}
            </Box>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#F1F5F9",
                mb: 1,
                background: plan.popular ? "linear-gradient(135deg, #F1F5F9, #8B5CF6)" : "none",
                backgroundClip: plan.popular ? "text" : "none",
                WebkitBackgroundClip: plan.popular ? "text" : "none",
                color: plan.popular ? "transparent" : "#F1F5F9",
              }}
            >
              {plan.name}
            </Typography>

            <Typography variant="body1" sx={{ color: "#94A3B8", mb: 3 }}>
              {plan.description}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "center", mb: 1 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  color: "#F1F5F9",
                  textShadow: plan.popular ? "0 0 20px rgba(139, 92, 246, 0.5)" : "none",
                }}
              >
                {plan.price}
              </Typography>
              <Typography variant="h6" sx={{ color: "#94A3B8", ml: 1 }}>
                {plan.period}
              </Typography>
            </Box>

            {plan.annualPrice && (
              <Typography
                variant="body2"
                sx={{
                  color: "#10B981",
                  fontWeight: 600,
                  background: "rgba(16, 185, 129, 0.1)",
                  px: 2,
                  py: 0.5,
                  borderRadius: "12px",
                  display: "inline-block",
                }}
              >
                {plan.annualPrice}
              </Typography>
            )}
          </Box>

          {/* Features List */}
          <Box sx={{ mb: 4, flex: 1 }}>
            <Stack spacing={2}>
              {plan.features.map((feature, i) => (
                <Box key={i} sx={{ display: "flex", alignItems: "center" }}>
                  <Box
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${plan.checkColor}, ${plan.borderColor})`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 3,
                      flexShrink: 0,
                      boxShadow: `0 4px 12px ${plan.checkColor}30`,
                    }}
                  >
                    <Check sx={{ fontSize: 14, color: "white" }} />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#94A3B8",
                      lineHeight: 1.5,
                    }}
                  >
                    {feature}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* CTA Button */}
          <Button
            fullWidth
            variant={plan.buttonVariant}
            size="large"
            sx={{
              py: 2,
              borderRadius: "16px",
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              background:
                plan.buttonVariant === "contained"
                  ? `linear-gradient(135deg, ${plan.checkColor}, ${plan.borderColor})`
                  : "transparent",
              border: plan.buttonVariant === "outlined" ? `2px solid ${plan.borderColor}` : "none",
              color: plan.buttonVariant === "contained" ? "white" : "#F1F5F9",
              boxShadow: plan.buttonVariant === "contained" ? `0 8px 32px ${plan.checkColor}40` : "none",
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
                background:
                  plan.buttonVariant === "contained"
                    ? `linear-gradient(135deg, ${plan.borderColor}, ${plan.checkColor})`
                    : `rgba(139, 92, 246, 0.1)`,
                boxShadow: `0 12px 40px ${plan.checkColor}60`,
                transform: "translateY(-2px)",
                borderColor: plan.buttonVariant === "outlined" ? plan.checkColor : "none",
                "&::before": {
                  left: "100%",
                },
              },
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {plan.buttonText}
            <Box sx={{ ml: 1, fontSize: "1.2rem" }}>{plan.popular ? "🚀" : "✨"}</Box>
          </Button>
        </CardContent>
      </Card>
    </Zoom>
  )
}

export default function PricingSection() {
  return (
    <Box
      id="pricing"
      sx={{
        py: 12,
        px: 2,
        background: "linear-gradient(180deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
        minHeight: "100vh",
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
            radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)
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
              Choose Your Movie Journey
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#94A3B8",
                fontWeight: 400,
                maxWidth: "600px",
                mx: "auto",
                mb: 4,
              }}
            >
              From casual browsing to professional curation - find the perfect plan for your movie discovery needs
            </Typography>
            <Stack direction="row" spacing={1} justifyContent="center">
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
            </Stack>
          </Box>
        </Fade>

        {/* Mobile scroll */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "row",
            overflowX: "auto",
            gap: 3,
            pb: 3,
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
            mt: 6,
          }}
        >
          {plans.map((plan, index) => renderCard(plan, index))}
        </Box>

        <Fade in timeout={2000}>
          <Box sx={{ textAlign: "center", mt: 8 }}>
            <Typography
              variant="body1"
              sx={{
                color: "#64748B",
                mb: 3,
                fontSize: "1rem",
              }}
            >
              All plans include a 14-day free trial • No credit card required • Cancel anytime
            </Typography>
            <Stack direction="row" spacing={4} justifyContent="center" sx={{ flexWrap: "wrap", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Support sx={{ color: "#8B5CF6", fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                  24/7 Support
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Group sx={{ color: "#8B5CF6", fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                  Active Community
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Favorite sx={{ color: "#8B5CF6", fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: "#94A3B8" }}>
                  No Hidden Fees
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Fade>
      </Container>

      {/* Floating decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: "20%",
          right: "5%",
          width: "120px",
          height: "120px",
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
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%)",
          animation: "float 6s ease-in-out infinite reverse",
        }}
      />
    </Box>
  )
}
