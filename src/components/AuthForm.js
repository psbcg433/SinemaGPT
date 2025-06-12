"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Stack,
  Divider,
  Box
} from "@mui/material"

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)

  const toggleAuthMode = () => {
    setIsLogin(!isLogin)
  }

  return (
    <Card
      sx={{
        borderRadius: "20px",
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
        background: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        overflow: "hidden",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Box sx={{ p: 4, pb: 2 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              mb: 1,
              textAlign: "center",
              color: "#1f2937",
              fontWeight: 700,
            }}
          >
            {isLogin ? "Welcome back" : "Get started today"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#6b7280",
              mb: 3,
            }}
          >
            {isLogin ? "Sign in to your account" : "Create your account in seconds"}
          </Typography>
        </Box>

        <Box sx={{ px: 4, pb: 4 }}>
          <Stack spacing={3}>
            {!isLogin && (
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    backgroundColor: "#f9fafb",
                    "&:hover": {
                      backgroundColor: "#f3f4f6",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "white",
                    },
                  },
                }}
              />
            )}
            <TextField
              fullWidth
              label="Email address"
              variant="outlined"
              required
              type="email"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "#f9fafb",
                  "&:hover": {
                    backgroundColor: "#f3f4f6",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "white",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              required
              type="password"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  backgroundColor: "#f9fafb",
                  "&:hover": {
                    backgroundColor: "#f3f4f6",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "white",
                  },
                },
              }}
            />
            <Button
              fullWidth
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "0 4px 12px rgba(99, 102, 241, 0.4)",
                "&:hover": {
                  boxShadow: "0 6px 16px rgba(99, 102, 241, 0.5)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.2s ease",
              }}
            >
              {isLogin ? "Sign in" : "Create account"}
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: "#9ca3af" }}>
              or
            </Typography>
          </Divider>

          <Button
            fullWidth
            variant="outlined"
            sx={{
              py: 1.5,
              borderRadius: "12px",
              fontSize: "1rem",
              fontWeight: 500,
              textTransform: "none",
              color: "#6b7280",
              borderColor: "#d1d5db",
              "&:hover": {
                borderColor: "#9ca3af",
                backgroundColor: "#f9fafb",
              },
            }}
          >
            Continue with Google
          </Button>

          <Box sx={{ textAlign: "center", mt: 3 }}>
            <Button
              onClick={toggleAuthMode}
              sx={{
                textTransform: "none",
                fontWeight: 500,
                color: "#6366f1",
                "&:hover": {
                  backgroundColor: "rgba(99, 102, 241, 0.04)",
                },
              }}
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}