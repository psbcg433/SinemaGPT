import { useRef, useState } from "react";
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
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice/authSlice";
import { auth, googleAuthProvider } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import GoogleIcon from "@mui/icons-material/Google";
import { Movie, Stars } from "@mui/icons-material";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const dispatch = useDispatch();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const toggleAuthMode = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setFormLoading(true);

    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        toast.success(`Welcome back, ${user.displayName || "movie lover"}!`);
      } else {
        const displayName = nameRef.current.value;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, {
          displayName,
          // ✅ photoURL intentionally omitted
        });
        toast.success("Account created! Start discovering amazing movies!");
      }
    } catch (error) {
      console.error("Authentication Error:", error.message);
      switch (error.code) {
        case "auth/email-already-in-use":
          toast.error("This email is already registered.");
          break;
        case "auth/invalid-email":
          toast.error("Invalid email format.");
          break;
        case "auth/weak-password":
          toast.error("Password should be at least 6 characters.");
          break;
        case "auth/user-not-found":
          toast.error("No user found with this email.");
          break;
        case "auth/wrong-password":
          toast.error("Incorrect password.");
          break;
        default:
          toast.error(error.message || "Something went wrong.");
      }
    } finally {
      setFormLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setGoogleLoading(true);
    try {
      await signInWithPopup(auth, googleAuthProvider);
      toast.success("Signed in with Google!");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      toast.error("Google sign-in failed. Please try again.");
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <Card
      sx={{
        borderRadius: "24px",
        background: "linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.98) 100%)",
        border: "1px solid rgba(139, 92, 246, 0.2)",
        boxShadow: `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 80px rgba(139, 92, 246, 0.15)`,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <CardContent sx={{ p: 0 }}>
        <Box sx={{ p: 4, pb: 2, textAlign: "center" }}>
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
            }}
          >
            <Movie sx={{ fontSize: 32, color: "white" }} />
          </Box>

          <Typography
            variant="h4"
            component="h2"
            sx={{
              mb: 1,
              fontWeight: 700,
              background: "linear-gradient(135deg, #F1F5F9, #8B5CF6)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {isLogin ? "Welcome Back" : "Join SinemaGPT"}
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
            {isLogin
              ? "Continue your movie discovery journey"
              : "Discover your next favorite movie"}
            <Stars sx={{ fontSize: 16, color: "#8B5CF6" }} />
          </Typography>
        </Box>

        <Box sx={{ px: 4, pb: 4 }} component="form" onSubmit={handleSubmit}>
          <Stack spacing={3}>
            {!isLogin && (
              <TextField
                fullWidth
                inputRef={nameRef}
                label="Full Name"
                variant="outlined"
                required
                sx={inputStyles}
              />
            )}

            <TextField
              fullWidth
              inputRef={emailRef}
              label="Email address"
              variant="outlined"
              required
              type="email"
              sx={inputStyles}
            />

            <TextField
              fullWidth
              inputRef={passwordRef}
              label="Password"
              variant="outlined"
              required
              type="password"
              sx={inputStyles}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={formLoading || googleLoading}
              sx={buttonStyles}
            >
              {formLoading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : (
                <>{isLogin ? "Sign In" : "Create Account"}</>
              )}
            </Button>
          </Stack>

          <Divider sx={{ my: 3, borderColor: "rgba(139, 92, 246, 0.2)" }}>
            <Typography variant="body2" sx={{ color: "#64748B" }}>
              or
            </Typography>
          </Divider>

          <Button
            fullWidth
            variant="outlined"
            onClick={handleGoogleAuth}
            disabled={formLoading || googleLoading}
            startIcon={
              googleLoading ? (
                <CircularProgress size={20} sx={{ color: "#F1F5F9" }} />
              ) : (
                <GoogleIcon />
              )
            }
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
              },
            }}
          >
            {googleLoading ? "Signing in..." : "Continue with Google"}
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
                },
              }}
            >
              {isLogin
                ? "New to SinemaGPT? Create account"
                : "Already have an account? Sign in"}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

const inputStyles = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "16px",
    backgroundColor: "rgba(30, 41, 59, 0.5)",
    border: "1px solid rgba(139, 92, 246, 0.2)",
    color: "#F1F5F9",
    "&:hover": {
      backgroundColor: "rgba(30, 41, 59, 0.7)",
      borderColor: "rgba(139, 92, 246, 0.4)",
    },
    "&.Mui-focused": {
      backgroundColor: "rgba(30, 41, 59, 0.8)",
      borderColor: "#8B5CF6",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#94A3B8",
    "&.Mui-focused": { color: "#8B5CF6" },
  },
};

const buttonStyles = {
  py: 1.8,
  borderRadius: "16px",
  fontSize: "1rem",
  fontWeight: 600,
  textTransform: "none",
  background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
  boxShadow: "0 8px 32px rgba(139, 92, 246, 0.4)",
  "&:hover": {
    background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
    boxShadow: "0 12px 40px rgba(139, 92, 246, 0.6)",
  },
};
