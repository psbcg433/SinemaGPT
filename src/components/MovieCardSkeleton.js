import {
  Box,
  Typography,
  Container,
  IconButton,
  useTheme,
  Alert,
  useMediaQuery,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

const MovieSection = ({ title, movies = [], loading, error }) => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const [showNavButtons, setShowNavButtons] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const isDark = theme.palette.mode === "dark";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = containerRef.current;
    container?.addEventListener("scroll", checkScrollPosition);
    return () => {
      container?.removeEventListener("scroll", checkScrollPosition);
    };
  }, [movies]);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ mb: 6, position: "relative", py: 2 }}
         onMouseEnter={() => setShowNavButtons(true)}
         onMouseLeave={() => setShowNavButtons(false)}>
      
      {/* Scroll Buttons */}
      {!isMobile && showNavButtons && canScrollLeft && (
        <IconButton onClick={() => scroll("left")} sx={scrollButtonStyle(theme, isDark, "left")}>
          <ChevronLeft fontSize="medium" />
        </IconButton>
      )}
      {!isMobile && showNavButtons && canScrollRight && (
        <IconButton onClick={() => scroll("right")} sx={scrollButtonStyle(theme, isDark, "right")}>
          <ChevronRight fontSize="medium" />
        </IconButton>
      )}

      <Container maxWidth="xl" sx={{ position: "relative", px: "2em", overflow: "visible" }}>
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: 700,
            fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
            background: isDark
              ? theme.palette.dark?.gradient?.main || theme.palette.gradient.main
              : theme.palette.gradient.main,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
            filter: isDark ? 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.3))' : 'none',
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            position: "relative",
            pt: 2,
            pb: 4,
            mx: -2,
            px: 2,
            overflowY: "visible",
            overflowX: "hidden",
          }}
        >
          {/* Scrollable area */}
          <Box
            ref={containerRef}
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              overflowY: "visible",
              pb: 2,
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              cursor: "grab",
              "&:active": { cursor: "grabbing" },
              position: "relative",
            }}
          >
            {/* ⏳ Loading Shimmer */}
            {loading &&
              [...Array(5)].map((_, idx) => (
                <Box key={idx} sx={{ flexShrink: 0 }}>
                  <MovieCardSkeleton />
                </Box>
              ))}

            {/* ❌ Error Message */}
            {!loading && error && (
              <Box sx={{ minWidth: "100%" }}>
                <Alert severity="error">{error}</Alert>
              </Box>
            )}

            {/* 🎬 Movie List */}
            {!loading && !error && movies.length > 0 &&
              movies.map((movie) => (
                <Box key={movie.id || movie.title} sx={{ flexShrink: 0 }}>
                  <MovieCard movie={movie} />
                </Box>
              ))}

            {/* 💤 Empty Result Fallback */}
            {!loading && !error && movies.length === 0 && (
              <Box sx={{ minWidth: "100%" }}>
                <Alert severity="info">No movies available in this section.</Alert>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MovieSection;

// ⬇️ Utility function for scroll button styles
const scrollButtonStyle = (theme, isDark, position) => ({
  position: "absolute",
  [position]: 8,
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 10,
  backgroundColor: isDark
    ? theme.palette.dark?.background?.paper || theme.palette.background.paper
    : theme.palette.background.paper,
  color: theme.palette.primary.main,
  boxShadow: isDark
    ? '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
    : theme.shadows[3],
  width: 40,
  height: 40,
  backdropFilter: 'blur(8px)',
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: isDark ? theme.palette.dark?.background?.paper : theme.palette.background.paper,
    transform: "translateY(-50%) scale(1.1)",
  },
  transition: 'all 0.2s ease',
});
