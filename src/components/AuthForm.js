"use client"

import { useRef, useState } from "react"
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Stack,
  Divider,
  Box,
  CircularProgress,
  Fade,
  Zoom,
} from "@mui/material"
import { useDispatch } from "react-redux"
import { setUser } from "../store/authSlice/authSlice.js"
import { auth, googleAuthProvider } from "../utils/firebase.js"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth"
import { toast } from "react-toastify"
import GoogleIcon from "@mui/icons-material/Google"
import { Movie, Stars } from "@mui/icons-material"

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()

  const toggleAuthMode = () => setIsLogin(!isLogin)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value
    setLoading(true)

    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        dispatch(setUser({ displayName: user.displayName, email: user.email }))
        toast.success(`Welcome back, ${user.displayName || "movie lover"}!`)
      } else {
        const displayName = nameRef.current.value
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(userCredential.user, { displayName })
        dispatch(setUser({ displayName, email }))
        toast.success("Account created! Start discovering amazing movies!")
      }
    } catch (error) {
      console.error("Authentication Error:", error.message)
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered.")
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email format.")
      } else if (error.code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters.")
      } else if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email.")
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password.")
      } else {
        toast.error(error.message || "Something went wrong.")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleAuth = async () => {
    setLoading(true)
    try {
      const result = await signInWithPopup(auth, googleAuthProvider)
      const user = result.user
      dispatch(setUser({ displayName: user.displayName, email: user.email }))
      toast.success(`Welcome, ${user.displayName || "movie enthusiast"}!`)
    } catch (error) {
      console.error("Google Sign-In Error:", error.message)
      toast.error("Google sign-in failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Fade in timeout={800}>
      <Card
        sx={{
          borderRadius: "24px",
          background: "linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.98) 100%)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(139, 92, 246, 0.2)",
          boxShadow: `
            0 0 0 1px rgba(139, 92, 246, 0.1),
            0 20px 40px rgba(0, 0, 0, 0.4),
            0 0 80px rgba(139, 92, 246, 0.15)
          `,
          overflow: "hidden",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.8), transparent)",
            animation: "shimmer 3s ease-in-out infinite",
          },
          "@keyframes shimmer": {
            "0%, 100%": { opacity: 0.5 },
            "50%": { opacity: 1 },
          },
        }}
      >
        <CardContent sx={{ p: 0 }}>
          {/* Header with animated icon */}
          <Box sx={{ p: 4, pb: 2, textAlign: "center" }}>
            <Zoom in timeout={1000}>
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 3,
                  boxShadow: "0 8px 32px rgba(139, 92, 246, 0.4)",
                  animation: "float 3s ease-in-out infinite",
                  "@keyframes float": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-8px)" },
                  },
                }}
              >
                <Movie sx={{ fontSize: 32, color: "white" }} />
              </Box>
            </Zoom>

            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 1,
                color: "#F1F5F9",
                fontWeight: 700,
                background: "linear-gradient(135deg, #F1F5F9, #8B5CF6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {isLogin ? "Welcome Back" : "Join CineScope"}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#94A3B8",
                mb: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Stars sx={{ fontSize: 16, color: "#8B5CF6" }} />
              {isLogin ? "Continue your movie discovery journey" : "Discover your next favorite movie"}
              <Stars sx={{ fontSize: 16, color: "#8B5CF6" }} />
            </Typography>
          </Box>

          <Box sx={{ px: 4, pb: 4 }} component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              {!isLogin && (
                <Fade in={!isLogin} timeout={500}>
                  <TextField
                    fullWidth
                    inputRef={nameRef}
                    label="Full Name"
                    variant="outlined"
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "16px",
                        backgroundColor: "rgba(30, 41, 59, 0.5)",
                        border: "1px solid rgba(139, 92, 246, 0.2)",
                        color: "#F1F5F9",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(30, 41, 59, 0.7)",
                          borderColor: "rgba(139, 92, 246, 0.4)",
                          boxShadow: "0 0 20px rgba(139, 92, 246, 0.1)",
                        },
                        "&.Mui-focused": {
                          backgroundColor: "rgba(30, 41, 59, 0.8)",
                          borderColor: "#8B5CF6",
                          boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: "#94A3B8",
                        "&.Mui-focused": { color: "#8B5CF6" },
                      },
                    }}
                  />
                </Fade>
              )}

              <TextField
                fullWidth
                inputRef={emailRef}
                label="Email address"
                variant="outlined"
                required
                type="email"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "16px",
                    backgroundColor: "rgba(30, 41, 59, 0.5)",
                    border: "1px solid rgba(139, 92, 246, 0.2)",
                    color: "#F1F5F9",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(30, 41, 59, 0.7)",
                      borderColor: "rgba(139, 92, 246, 0.4)",
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.1)",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "rgba(30, 41, 59, 0.8)",
                      borderColor: "#8B5CF6",
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#94A3B8",
                    "&.Mui-focused": { color: "#8B5CF6" },
                  },
                }}
              />

              <TextField
                fullWidth
                inputRef={passwordRef}
                label="Password"
                variant="outlined"
                required
                type="password"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "16px",
                    backgroundColor: "rgba(30, 41, 59, 0.5)",
                    border: "1px solid rgba(139, 92, 246, 0.2)",
                    color: "#F1F5F9",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(30, 41, 59, 0.7)",
                      borderColor: "rgba(139, 92, 246, 0.4)",
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.1)",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "rgba(30, 41, 59, 0.8)",
                      borderColor: "#8B5CF6",
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#94A3B8",
                    "&.Mui-focused": { color: "#8B5CF6" },
                  },
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  py: 1.8,
                  borderRadius: "16px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  textTransform: "none",
                  background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
                  boxShadow: "0 8px 32px rgba(139, 92, 246, 0.4)",
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
                    background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
                    boxShadow: "0 12px 40px rgba(139, 92, 246, 0.6)",
                    transform: "translateY(-2px)",
                    "&::before": {
                      left: "100%",
                    },
                  },
                  "&:active": {
                    transform: "translateY(0px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: "white" }} />
                ) : (
                  <>
                    {isLogin ? "Sign In" : "Create Account"}
                    <Box
                      sx={{
                        ml: 1,
                        display: "inline-flex",
                        animation: loading ? "none" : "pulse 2s ease-in-out infinite",
                        "@keyframes pulse": {
                          "0%, 100%": { opacity: 1 },
                          "50%": { opacity: 0.5 },
                        },
                      }}
                    >
                      ✨
                    </Box>
                  </>
                )}
              </Button>
            </Stack>

            <Divider
              sx={{
                my: 3,
                "&::before, &::after": {
                  borderColor: "rgba(139, 92, 246, 0.2)",
                },
              }}
            >
              <Typography variant="body2" sx={{ color: "#64748B" }}>
                or
              </Typography>
            </Divider>

            <Button
              fullWidth
              variant="outlined"
              onClick={handleGoogleAuth}
              disabled={loading}
              startIcon={<GoogleIcon />}
              sx={{
                py: 1.8,
                borderRadius: "16px",
                fontSize: "1rem",
                fontWeight: 500,
                textTransform: "none",
                color: "#F1F5F9",
                borderColor: "rgba(139, 92, 246, 0.3)",
                backgroundColor: "rgba(30, 41, 59, 0.3)",
                "&:hover": {
                  borderColor: "rgba(139, 92, 246, 0.6)",
                  backgroundColor: "rgba(30, 41, 59, 0.6)",
                  boxShadow: "0 8px 32px rgba(139, 92, 246, 0.2)",
                  transform: "translateY(-1px)",
                },
                transition: "all 0.3s ease",
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
                  color: "#8B5CF6",
                  "&:hover": {
                    backgroundColor: "rgba(139, 92, 246, 0.1)",
                    transform: "scale(1.02)",
                  },
                  transition: "all 0.2s ease",
                }}
              >
                {isLogin ? "New to CineScope? Create account" : "Already have an account? Sign in"}
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Fade>
  )
}
