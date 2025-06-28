import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  Chip,
  Stack,
  Fade,
  Zoom,
  Link as MUILink,
} from "@mui/material";
import {
  Check,
  Star,
  TrendingUp,
  Movie,
  Favorite,
  Search,
  Group,
  Support,
} from "@mui/icons-material";

const plans = [
  {
    name: "Explorer",
    description: "Start your movie discovery adventure",
    price: "₹0",
    period: "/month",
    features: [
      "Browse 100K+ movie titles",
      "Create up to 3 watchlists",
      "Mark favorites to rewatch later",
      "View community ratings",
      "Mobile-friendly access",
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
    description: "Dive deeper into movie discovery",
    price: "₹0",
    period: "/month",
    features: [
      "Access to 2M+ movie entries",
      "Advanced filtering and sorting",
      "Unlimited watchlists",
    ],
    buttonText: "Enjoy Now",
    buttonVariant: "contained",
    borderColor: "#8B5CF6",
    checkColor: "#8B5CF6",
    popular: true,
    icon: <Movie sx={{ fontSize: 24, color: "white" }} />,
  },
  {
    name: "Director",
    description: "Curate your ultimate movie world",
    price: "₹0",
    period: "/month",
    annualPrice: "100% Free. Always.",
    features: [
      "Everything in Cinephile",
      "Create custom movie collections",
      "Suggest edits to the database",
    ],
    buttonText: "Go Director",
    buttonVariant: "contained",
    borderColor: "#7C3AED",
    checkColor: "#7C3AED",
    popular: false,
    icon: <Star sx={{ fontSize: 24, color: "white" }} />,
  },
];

function renderCard(plan, index) {
  return (
    <Zoom in timeout={1000 + index * 200} key={plan.name}>
      <Box sx={{ position: "relative", overflow: "visible" }}>
        {plan.popular && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translate(-50%, -50%)",
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

        <Card
          sx={{
            flex: "0 0 auto",
            minWidth: { xs: 300, sm: 340, md: "auto" },
            height: 600,
            borderRadius: "24px",
            background: "rgba(30, 41, 59, 0.6)",
            backdropFilter: "blur(20px)",
            border: `2px solid ${plan.borderColor}`,
            boxShadow: plan.popular
              ? "0 20px 60px rgba(139, 92, 246, 0.3)"
              : "0 8px 32px rgba(0, 0, 0, 0.3)",
            transition: "border 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
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
              boxShadow: `0 12px 40px ${plan.checkColor}50`,
              border: `2px solid ${
                plan.popular ? "#8B5CF6" : plan.borderColor
              }`,
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
          <CardContent
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              pt: plan.popular ? 7 : 4,
            }}
          >
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
                  transition: "all 0.4s",
                }}
              >
                {plan.icon}
              </Box>

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: plan.popular ? "transparent" : "#F1F5F9",
                  mb: 1,
                  background: plan.popular
                    ? "linear-gradient(135deg, #F1F5F9, #8B5CF6)"
                    : "none",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                }}
              >
                {plan.name}
              </Typography>

              <Typography variant="body1" sx={{ color: "#94A3B8", mb: 3 }}>
                {plan.description}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "center",
                  mb: 1,
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    color: "#F1F5F9",
                    textShadow: plan.popular
                      ? "0 0 20px rgba(139, 92, 246, 0.5)"
                      : "none",
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
                      sx={{ color: "#94A3B8", lineHeight: 1.5 }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            <MUILink
              href="#hero"
              underline="none"
              sx={{
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                py: 2,
                borderRadius: "16px",
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                textAlign: "center",
                background:
                  plan.buttonVariant === "contained"
                    ? `linear-gradient(135deg, ${plan.checkColor}, ${plan.borderColor})`
                    : "transparent",
                border:
                  plan.buttonVariant === "outlined"
                    ? `2px solid ${plan.borderColor}`
                    : "none",
                color:
                  plan.buttonVariant === "contained" ? "white" : "#F1F5F9",
                boxShadow:
                  plan.buttonVariant === "contained"
                    ? `0 8px 32px ${plan.checkColor}40`
                    : "none",
                transition: "all 0.4s ease",
                "&:hover": {
                  background:
                    plan.buttonVariant === "contained"
                      ? `linear-gradient(135deg, ${plan.borderColor}, ${plan.checkColor})`
                      : `rgba(139, 92, 246, 0.1)`,
                  boxShadow: `0 12px 40px ${plan.checkColor}60`,
                  borderColor:
                    plan.buttonVariant === "outlined"
                      ? plan.checkColor
                      : "none",
                },
              }}
            >
              {plan.buttonText}
              <Box sx={{ ml: 1, fontSize: "1.2rem" }}>
                {plan.popular ? "🚀" : "✨"}
              </Box>
            </MUILink>
          </CardContent>
        </Card>
      </Box>
    </Zoom>
  );
}

export default function PricingSection() {
  return (
    <Box id="pricing" sx={{ py: 12, background: "#0F172A" }}>
      <Container maxWidth="lg">
        <Fade in timeout={800}>
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                background: "linear-gradient(135deg, #F1F5F9, #8B5CF6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: 700,
              }}
            >
              Choose Your Movie Journey
            </Typography>
            <Typography variant="h6" sx={{ color: "#94A3B8" }}>
              From casual browsing to film curation — your movie adventure is
              completely free
            </Typography>
          </Box>
        </Fade>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            flexDirection: "row",
            overflowX: "auto",
            gap: 3,
            pb: 3,
            px: 1,
            scrollSnapType: "x mandatory",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {plans.map((plan, index) => renderCard(plan, index))}
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 4,
            justifyContent: "center",
            mt: 6,
          }}
        >
          {plans.map((plan, index) => renderCard(plan, index))}
        </Box>
      </Container>
    </Box>
  );
}
