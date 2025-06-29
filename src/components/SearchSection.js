// src/components/SearchSection.js
import {
  Box,
  TextField,
  Container,
  InputAdornment,
  Button,
  Paper,
  useTheme,
  useMediaQuery,
  Tooltip,
  Typography,
} from "@mui/material";
import { Search, AutoAwesome, Explore } from "@mui/icons-material";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchWithGPT, searchNormally } from "../utils/helpers";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [gptSearchEnabled, setGptSearchEnabled] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDark = theme.palette.mode === "dark";
  const dispatch = useDispatch();

  const gptExamples = [
    "Funny Indian movies",
    "Underrated thrillers",
    "Action-packed Bollywood hits",
    "AI-generated horror movies",
  ];
  const normalExamples = [
    "Search for a movie name",
    "Iron Man",
    "Interstellar",
    "Shutter Island",
  ];
  const placeholderIndex = useRef(0);
  const charIndex = useRef(0);
  const typingTimeout = useRef(null);
  const deleting = useRef(false);

  useEffect(() => {
    const examples = gptSearchEnabled ? gptExamples : normalExamples;

    const type = () => {
      const current = examples[placeholderIndex.current];
      if (!deleting.current) {
        if (charIndex.current <= current.length) {
          setPlaceholder(current.slice(0, charIndex.current));
          charIndex.current += 1;
        } else {
          deleting.current = true;
          typingTimeout.current = setTimeout(type, 1200);
          return;
        }
      } else {
        if (charIndex.current > 0) {
          charIndex.current -= 1;
          setPlaceholder(current.slice(0, charIndex.current));
        } else {
          deleting.current = false;
          placeholderIndex.current =
            (placeholderIndex.current + 1) % examples.length;
        }
      }
      typingTimeout.current = setTimeout(type, 100);
    };

    typingTimeout.current = setTimeout(type, 300);
    return () => clearTimeout(typingTimeout.current);
  }, [gptSearchEnabled]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    if (gptSearchEnabled) {
      await searchWithGPT(searchQuery, dispatch);
    } else {
      await searchNormally(searchQuery, dispatch);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        px: 2,
        py: 6,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120%",
          height: "120%",
          background: isDark
            ? theme.palette.dark?.gradient?.searchGlow ||
              theme.palette.gradient.searchGlow
            : theme.palette.gradient.searchGlow,
          borderRadius: "50%",
          zIndex: 0,
          opacity: 0.6,
        },
      }}
    >
      <Container
        maxWidth="md"
        disableGutters
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              mb: 2,
            }}
          >
            <Explore
              sx={{
                fontSize: "2rem",
                color: theme.palette.primary.main,
                filter: "drop-shadow(0 0 8px rgba(124, 58, 237, 0.3))",
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
                background: isDark
                  ? theme.palette.dark?.gradient?.main ||
                    theme.palette.gradient.main
                  : theme.palette.gradient.main,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textAlign: "center",
                letterSpacing: "-0.02em",
              }}
            >
              Discover Your Next Favorite
            </Typography>
          </Box>
          <Typography
            variant="h6"
            sx={{
              color: isDark
                ? theme.palette.dark?.text?.secondary ||
                  theme.palette.text.secondary
                : theme.palette.text.secondary,
              fontWeight: 400,
              fontSize: { xs: "1rem", sm: "1.1rem" },
              opacity: 0.8,
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.5,
            }}
          >
            Search through millions of movies with AI-powered recommendations
          </Typography>
        </Box>

        {/* Search Bar */}
        <Paper
          elevation={isDark ? 0 : 4}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: "32px",
            p: 0.5,
            boxShadow: isDark
              ? "0 0 0 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.3)"
              : "0px 8px 32px rgba(124, 58, 237, 0.15)",
            background: isDark
              ? `linear-gradient(135deg, ${
                  theme.palette.dark?.background?.paper || "#1E293B"
                }90, ${theme.palette.dark?.background?.alt || "#334155"}50)`
              : `linear-gradient(135deg, ${theme.palette.primary.light}08, ${theme.palette.secondary.light}08)`,
            backdropFilter: "blur(12px)",
            overflow: "hidden",
            border: isDark ? "1px solid rgba(255,255,255,0.1)" : "none",
          }}
        >
          <TextField
            fullWidth
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder || "Search..."}
            variant="outlined"
            sx={{
              minWidth: isMobile ? "50%" : "auto",
              "& .MuiOutlinedInput-root": {
                borderRadius: "32px 0 0 32px",
                backgroundColor: isDark
                  ? theme.palette.dark?.background?.paper ||
                    theme.palette.background.paper
                  : theme.palette.background.default,
                fontSize: "1rem",
                height: 56,
                color: isDark
                  ? theme.palette.dark?.text?.primary
                  : theme.palette.text.primary,
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.primary.main,
                  borderWidth: "2px",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: theme.palette.primary.light,
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderRightColor: "transparent",
                borderColor: isDark
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.1)",
              },
              "& .MuiOutlinedInput-input": {
                padding: "14px 12px",
                "&::placeholder": {
                  color: isDark
                    ? theme.palette.dark?.text?.secondary
                    : theme.palette.text.secondary,
                  opacity: 0.7,
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search
                    sx={{
                      color: isDark
                        ? theme.palette.dark?.text?.secondary
                        : "text.secondary",
                      opacity: 0.7,
                    }}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" sx={{ mr: 1 }}>
                  <Tooltip
                    title="Enable GPT"
                    arrow
                    disableHoverListener={!isMobile}
                  >
                    <Button
                      onClick={() => setGptSearchEnabled(!gptSearchEnabled)}
                      startIcon={<AutoAwesome />}
                      sx={{
                        textTransform: "none",
                        borderRadius: 5,
                        px: isMobile ? 1.5 : 2,
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        height: 34,
                        minWidth: 0,
                        backgroundColor: gptSearchEnabled
                          ? theme.palette.primary.main
                          : isDark
                          ? "rgba(255,255,255,0.1)"
                          : theme.palette.action.hover,
                        color: gptSearchEnabled
                          ? theme.palette.common.white
                          : isDark
                          ? theme.palette.dark?.text?.secondary
                          : theme.palette.text.secondary,
                        "&:hover": {
                          backgroundColor: gptSearchEnabled
                            ? theme.palette.primary.dark
                            : isDark
                            ? "rgba(255,255,255,0.15)"
                            : theme.palette.action.selected,
                          transform: "scale(1.05)",
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      {!isMobile &&
                        (gptSearchEnabled ? "GPT On" : "Enable GPT")}
                    </Button>
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            size="large"
            onClick={handleSearch}
            sx={{
              borderRadius: "0 32px 32px 0",
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,
              px: isMobile ? 2 : 4,
              height: 56,
              fontFamily: "inherit",
              ml: "-1px",
              boxShadow: "none",
              background: isDark
                ? theme.palette.dark?.gradient?.main ||
                  theme.palette.gradient.main
                : theme.palette.gradient.main,
              minWidth: isMobile ? 0 : "auto",
              "&:hover": {
                boxShadow: isDark
                  ? "0 4px 20px rgba(139, 92, 246, 0.4)"
                  : "0 4px 20px rgba(124, 58, 237, 0.3)",
                background: isDark
                  ? "linear-gradient(135deg, #7C3AED, #6D28D9)"
                  : "linear-gradient(135deg, #6D28D9, #4F46E5)",
                transform: "scale(1.02)",
              },
              transition: "all 0.2s ease",
            }}
          >
            {isMobile ? <Search sx={{ color: "#fff" }} /> : "Search"}
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default SearchSection;
