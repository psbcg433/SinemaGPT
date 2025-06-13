import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Box,
  Avatar,
  Link as MUILink,
} from "@mui/material";
import { Movie, Menu as MenuIcon } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../store/authSlice/authSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

export default function Header({ scrolled }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [avatarAnchorEl, setAvatarAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAvatarClick = (event) => {
    setAvatarAnchorEl(event.currentTarget);
  };

  const handleAvatarMenuClose = () => {
    setAvatarAnchorEl(null);
  };

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logoutUser());
    handleAvatarMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 1px 3px rgba(0, 0, 0, 0.1)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0, 0, 0, 0.05)" : "none",
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          px: { xs: 2, sm: 4, md: 6 },
          py: { md: 1 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 800,
            letterSpacing: "-0.01em",
            display: "flex",
            alignItems: "center",
            color: scrolled ? "#1f2937" : "white",
          }}
        >
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
          SinemaGPT
        </Typography>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            edge="end"
            sx={{ color: scrolled ? "#1f2937" : "white" }}
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            {!user && (
              <>
                <MenuItem component="a" href="#features" onClick={handleMenuClose}>Features</MenuItem>
                <MenuItem component="a" href="#pricing" onClick={handleMenuClose}>Pricing</MenuItem>
                <MenuItem component="a" href="#faq" onClick={handleMenuClose}>FAQ</MenuItem>
                <MenuItem component="a" href="#hero" onClick={handleMenuClose}>Sign In</MenuItem>
              </>
            )}
            {user && (
              <>
                <MenuItem disabled>Hello, {user.displayName || "User"}</MenuItem>
                <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </>
            )}
          </Menu>
        </Box>

        <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
          {!user ? (
            <>
              {[
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <MUILink
                  key={link.label}
                  href={link.href}
                  underline="none"
                  sx={{
                    color: scrolled ? "#6b7280" : "rgba(255, 255, 255, 0.9)",
                    fontWeight: 500,
                    px: 2,
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                </MUILink>
              ))}
              <Button
                href="#hero"
                variant="contained"
                sx={{
                  ml: 2,
                  borderRadius: "8px",
                  px: 3,
                  py: 1,
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
                Sign In
              </Button>
            </>
          ) : (
            <>
              <IconButton onClick={handleAvatarClick}>
                <Avatar
                  src="https://i.pravatar.cc/40"
                  alt={user.displayName || "User"}
                  sx={{ width: 36, height: 36 }}
                />
              </IconButton>
              <Menu
                anchorEl={avatarAnchorEl}
                open={Boolean(avatarAnchorEl)}
                onClose={handleAvatarMenuClose}
              >
                <MenuItem disabled>{user.displayName || "User"}</MenuItem>
                <MenuItem onClick={handleAvatarMenuClose}>Settings</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
