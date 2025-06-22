import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7C3AED",      // Vivid purple
      light: "#A78BFA",     // Soft lilac
      dark: "#6D28D9",      // Deep violet
    },
    secondary: {
      main: "#6366F1",      // Indigo base
      light: "#C7D2FE",     // Subtle highlight
      dark: "#4F46E5",
    },
    background: {
      default: "#F9FAFB",   // Soft warm white
      paper: "#FFFFFF",     // Flat white
      alt: "#F3F4F6",       // Grayish card background (custom below)
    },
    text: {
      primary: "#1E293B",   // Charcoal blue-gray
      secondary: "#6B7280", // Neutral gray
    },
    gradient: {
      main: "linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)",
      soft: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))",
      glow: "radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, rgba(99, 102, 241, 0.1) 40%, transparent 70%)",
      searchGlow: "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.08) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 100%)",
    },
    action: {
      hover: "#F3F4F6",
      selected: "#E5E7EB",
      disabledBackground: "#E5E7EB",
    },
    // Dark mode colors
    dark: {
      background: {
        default: "#0F172A",
        paper: "#1E293B",
        alt: "#334155",
      },
      text: {
        primary: "#F1F5F9",
        secondary: "#94A3B8",
      },
      gradient: {
        main: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
        soft: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(124,58,237,0.15))",
        glow: "radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.15) 40%, transparent 70%)",
        searchGlow: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.12) 0%, rgba(124, 58, 237, 0.08) 50%, transparent 100%)",
      },
    },
  },

  typography: {
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontSize: "3.5rem",
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#4B5563",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: "#6B7280",
    },
    button: {
      fontWeight: 600,
      textTransform: "none",
      fontSize: "0.875rem",
    },
  },

  shape: {
    borderRadius: 16,
  },

  shadows: [
    "none",
    "0 1px 2px rgba(0,0,0,0.05)",
    "0 4px 6px rgba(0,0,0,0.08)",
    "0 10px 15px rgba(0,0,0,0.1)",
    "0 20px 25px rgba(0,0,0,0.12)",
    "0 25px 50px rgba(0,0,0,0.15)",
    "0 0 0 1px rgba(255,255,255,0.05), 0 1px 3px rgba(0,0,0,0.1)",
    "0 0 0 1px rgba(255,255,255,0.05), 0 4px 6px rgba(0,0,0,0.1)",
    "0 0 0 1px rgba(255,255,255,0.05), 0 10px 15px rgba(0,0,0,0.1)",
  ],

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 600,
        },
        containedPrimary: {
          background: "linear-gradient(135deg, #7C3AED, #6366F1)",
          color: "#fff",
          "&:hover": {
            background: "linear-gradient(135deg, #6D28D9, #4F46E5)",
            boxShadow: "0 6px 20px rgba(124, 58, 237, 0.3)",
          },
        },
      },
    },
  },
});

// Dark theme
export const darkTheme = createTheme({
  ...customTheme,
  palette: {
    ...customTheme.palette,
    mode: "dark",
    background: {
      default: "#0F172A",
      paper: "#1E293B",
      alt: "#334155",
    },
    text: {
      primary: "#F1F5F9",
      secondary: "#94A3B8",
    },
    gradient: {
      main: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
      soft: "linear-gradient(135deg, rgba(139,92,246,0.15), rgba(124,58,237,0.15))",
      glow: "radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, rgba(124, 58, 237, 0.15) 40%, transparent 70%)",
      searchGlow: "radial-gradient(ellipse at center, rgba(139, 92, 246, 0.12) 0%, rgba(124, 58, 237, 0.08) 50%, transparent 100%)",
    },
  },
  components: {
    ...customTheme.components,
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "#1E293B",
        },
      },
    },
  },
});