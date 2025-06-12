import { useState } from "react"
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
    Container,
} from "@mui/material"
import { Movie, Menu as MenuIcon } from "@mui/icons-material"

export default function Header({ scrolled }) {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleMenuClose = () => {
        setAnchorEl(null)
    }

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
                    py: {  md: 1 }, 
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
                    Sinemagpt
                </Typography>

                {/* Mobile Menu */}
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
                        <MenuItem onClick={handleMenuClose}>Features</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Pricing</MenuItem>
                        <MenuItem onClick={handleMenuClose}>FAQ</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Sign In</MenuItem>
                    </Menu>
                </Box>

                {/* Desktop Menu */}
                <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
                    {["Features", "Pricing", "FAQ"].map((item) => (
                        <Button
                            key={item}
                            sx={{
                                color: scrolled ? "#6b7280" : "rgba(255, 255, 255, 0.9)",
                                fontWeight: 500,
                                px: 2,
                                "&:hover": {
                                    backgroundColor: scrolled ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.1)",
                                },
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                    <Button
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
                </Stack>

            </Toolbar>
        </AppBar>
    )
}
