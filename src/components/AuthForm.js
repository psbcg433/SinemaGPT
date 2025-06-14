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
import { setUser } from "../store/authSlice/authSlice.js";
import { auth, googleAuthProvider } from "../utils/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";
import GoogleIcon from "@mui/icons-material/Google";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const toggleAuthMode = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    setLoading(true);

    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        dispatch(setUser({ displayName: user.displayName, email: user.email }));
        toast.success(`Welcome back, ${user.displayName || "user"}!`);
      } else {
        const displayName = nameRef.current.value;
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName });
        dispatch(setUser({ displayName, email }));
        toast.success("Account created successfully!");
      }
    } catch (error) {
      console.error("Authentication Error:", error.message);
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email format.");
      } else if (error.code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters.");
      } else if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email.");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password.");
      } else {
        toast.error(error.message || "Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      dispatch(setUser({ displayName: user.displayName, email: user.email }));
      toast.success(`Welcome, ${user.displayName || "user"}!`);
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      toast.error("Google sign-in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
            sx={{ textAlign: "center", color: "#6b7280", mb: 3 }}
          >
            {isLogin ? "Sign in to your account" : "Create your account in seconds"}
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
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    backgroundColor: "#f9fafb",
                    "&:hover": { backgroundColor: "#f3f4f6" },
                    "&.Mui-focused": { backgroundColor: "white" },
                  },
                }}
              />
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
                  borderRadius: "12px",
                  backgroundColor: "#f9fafb",
                  "&:hover": { backgroundColor: "#f3f4f6" },
                  "&.Mui-focused": { backgroundColor: "white" },
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
                  borderRadius: "12px",
                  backgroundColor: "#f9fafb",
                  "&:hover": { backgroundColor: "#f3f4f6" },
                  "&.Mui-focused": { backgroundColor: "white" },
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
              {loading ? (
                <CircularProgress size={24} sx={{ color: "white" }} />
              ) : isLogin ? "Sign in" : "Create account"}
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
            onClick={handleGoogleAuth}
            disabled={loading}
            startIcon={<GoogleIcon />}
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
                "&:hover": { backgroundColor: "rgba(99, 102, 241, 0.04)" },
              }}
            >
              {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
