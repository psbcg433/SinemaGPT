"use client"

import { useState, useEffect } from "react"
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
  Badge,
  Tooltip,
  Fade,
} from "@mui/material"
import {
  Movie,
  Menu as MenuIcon,
  Search,
  Favorite,
  Notifications,
  Settings,
  Person,
  ExitToApp,
} from "@mui/icons-material"
import { useSelector, useDispatch } from "react-redux"
import { logoutUser } from "../store/authSlice/authSlice"
import { signOut } from "firebase/auth"
import { auth } from "../utils/firebase"

export default function Header({ scrolled }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const [avatarAnchorEl, setAvatarAnchorEl] = useState(null)
  const [isVisible, setIsVisible] = useState(true)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleAvatarClick = (event) => {
    setAvatarAnchorEl(event.currentTarget)
  }

  const handleAvatarMenuClose = () => {
    setAvatarAnchorEl(null)
  }

  const handleLogout = async () => {
    await signOut(auth)
    dispatch(logoutUser())
    handleAvatarMenuClose()
  }

  return (
    <Fade in={isVisible} timeout={300}>
      <AppBar
        position="fixed"
        sx={{
          background: scrolled
            ? "rgba(15, 23, 42, 0.95)"
            : "linear-gradient(135deg, rgba(15, 23, 42, 0.1) 0%, rgba(30, 41, 59, 0.1) 100%)",
          backdropFilter: "blur(20px)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          boxShadow: scrolled ? "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(139, 92, 246, 0.1)" : "none",
          borderBottom: scrolled ? "1px solid rgba(139, 92, 246, 0.2)" : "1px solid rgba(255, 255, 255, 0.1)",
          transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            px: { xs: 1, sm: 2, md: 4, lg: 6 },
            py: { md: 1 },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "72px",
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "12px",
                background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 2,
                boxShadow: "0 8px 32px rgba(139, 92, 246, 0.4)",
                animation: "glow 3s ease-in-out infinite",
                "@keyframes glow": {
                  "0%, 100%": { boxShadow: "0 8px 32px rgba(139, 92, 246, 0.4)" },
                  "50%": { boxShadow: "0 8px 32px rgba(139, 92, 246, 0.7)" },
                },
              }}
            >
              <Movie sx={{ fontSize: 24, color: "white" }} />
            </Box>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 800,
                letterSpacing: "-0.01em",
                background: "linear-gradient(135deg, #F1F5F9, #8B5CF6)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              CineScope
            </Typography>
          </Box>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              edge="end"
              sx={{
                color: "#F1F5F9",
                backgroundColor: "rgba(139, 92, 246, 0.1)",
                border: "1px solid rgba(139, 92, 246, 0.2)",
                "&:hover": {
                  backgroundColor: "rgba(139, 92, 246, 0.2)",
                  transform: "scale(1.05)",
                },
                transition: "all 0.3s ease",
              }}
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  background: "rgba(30, 41, 59, 0.95)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  borderRadius: "16px",
                  mt: 1,
                },
              }}
            >
              {!user && (
                <>
                  <MenuItem component="a" href="#features" onClick={handleMenuClose} sx={{ color: "#F1F5F9" }}>
                    Discover
                  </MenuItem>
                  <MenuItem component="a" href="#pricing" onClick={handleMenuClose} sx={{ color: "#F1F5F9" }}>
                    Pricing
                  </MenuItem>
                  <MenuItem component="a" href="#faq" onClick={handleMenuClose} sx={{ color: "#F1F5F9" }}>
                    FAQ
                  </MenuItem>
                  <MenuItem component="a" href="#hero" onClick={handleMenuClose} sx={{ color: "#F1F5F9" }}>
                    Sign In
                  </MenuItem>
                </>
              )}
              {user && (
                <>
                  <MenuItem disabled sx={{ color: "#8B5CF6" }}>
                    Hello, {user.displayName || "Movie Lover"}
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose} sx={{ color: "#F1F5F9" }}>
                    My Watchlist
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose} sx={{ color: "#F1F5F9" }}>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleLogout} sx={{ color: "#F1F5F9" }}>
                    Logout
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>

          {/* Desktop Navigation */}
          <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
            {!user ? (
              <>
                {[
                  { label: "Discover", href: "#features" },
                  { label: "Trending", href: "#pricing" },
                  { label: "FAQ", href: "#faq" },
                ].map((link) => (
                  <MUILink
                    key={link.label}
                    href={link.href}
                    underline="none"
                    sx={{
                      color: "#94A3B8",
                      fontWeight: 500,
                      px: 3,
                      py: 1,
                      borderRadius: "12px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#8B5CF6",
                        backgroundColor: "rgba(139, 92, 246, 0.1)",
                        transform: "translateY(-1px)",
                      },
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
                    borderRadius: "12px",
                    px: 4,
                    py: 1.2,
                    fontWeight: 600,
                    textTransform: "none",
                    background: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
                    boxShadow: "0 8px 32px rgba(139, 92, 246, 0.4)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #7C3AED, #6D28D9)",
                      boxShadow: "0 12px 40px rgba(139, 92, 246, 0.6)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Get Started ✨
                </Button>
              </>
            ) : (
              <>
                {/* User Navigation Icons - More Compact */}
                <Stack direction="row" spacing={0.5} sx={{ mr: 1 }}>
                  <Tooltip title="Search Movies">
                    <IconButton
                      size="small"
                      sx={{
                        color: "#94A3B8",
                        backgroundColor: "rgba(139, 92, 246, 0.1)",
                        border: "1px solid rgba(139, 92, 246, 0.2)",
                        width: 36,
                        height: 36,
                        "&:hover": {
                          color: "#8B5CF6",
                          backgroundColor: "rgba(139, 92, 246, 0.2)",
                          transform: "scale(1.05)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Search sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="My Watchlist">
                    <IconButton
                      size="small"
                      sx={{
                        color: "#94A3B8",
                        backgroundColor: "rgba(139, 92, 246, 0.1)",
                        border: "1px solid rgba(139, 92, 246, 0.2)",
                        width: 36,
                        height: 36,
                        "&:hover": {
                          color: "#8B5CF6",
                          backgroundColor: "rgba(139, 92, 246, 0.2)",
                          transform: "scale(1.05)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Badge
                        badgeContent={3}
                        color="secondary"
                        sx={{ "& .MuiBadge-badge": { fontSize: "0.6rem", minWidth: 16, height: 16 } }}
                      >
                        <Favorite sx={{ fontSize: 18 }} />
                      </Badge>
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Notifications">
                    <IconButton
                      size="small"
                      sx={{
                        color: "#94A3B8",
                        backgroundColor: "rgba(139, 92, 246, 0.1)",
                        border: "1px solid rgba(139, 92, 246, 0.2)",
                        width: 36,
                        height: 36,
                        "&:hover": {
                          color: "#8B5CF6",
                          backgroundColor: "rgba(139, 92, 246, 0.2)",
                          transform: "scale(1.05)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      <Badge
                        badgeContent={2}
                        color="error"
                        sx={{ "& .MuiBadge-badge": { fontSize: "0.6rem", minWidth: 16, height: 16 } }}
                      >
                        <Notifications sx={{ fontSize: 18 }} />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                </Stack>

                {/* User Avatar - Smaller */}
                <Tooltip title="Account">
                  <IconButton onClick={handleAvatarClick} sx={{ p: 0.5 }}>
                    <Avatar
                      src="https://i.pravatar.cc/32"
                      alt={user.displayName || "User"}
                      sx={{
                        width: 32,
                        height: 32,
                        border: "2px solid rgba(139, 92, 246, 0.3)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          border: "2px solid rgba(139, 92, 246, 0.6)",
                          transform: "scale(1.05)",
                          boxShadow: "0 4px 16px rgba(139, 92, 246, 0.3)",
                        },
                      }}
                    />
                  </IconButton>
                </Tooltip>

                <Menu
                  anchorEl={avatarAnchorEl}
                  open={Boolean(avatarAnchorEl)}
                  onClose={handleAvatarMenuClose}
                  PaperProps={{
                    sx: {
                      background: "rgba(30, 41, 59, 0.95)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(139, 92, 246, 0.2)",
                      borderRadius: "16px",
                      mt: 1,
                      minWidth: "200px",
                    },
                  }}
                >
                  <MenuItem disabled sx={{ color: "#8B5CF6", fontWeight: 600 }}>
                    <Person sx={{ mr: 1, fontSize: 18 }} />
                    {user.displayName || "Movie Lover"}
                  </MenuItem>
                  <MenuItem onClick={handleAvatarMenuClose} sx={{ color: "#F1F5F9" }}>
                    <Favorite sx={{ mr: 1, fontSize: 18 }} />
                    My Watchlist
                  </MenuItem>
                  <MenuItem onClick={handleAvatarMenuClose} sx={{ color: "#F1F5F9" }}>
                    <Settings sx={{ mr: 1, fontSize: 18 }} />
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleLogout} sx={{ color: "#F1F5F9" }}>
                    <ExitToApp sx={{ mr: 1, fontSize: 18 }} />
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </Fade>
  )
}
