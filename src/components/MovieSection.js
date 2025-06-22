import {
  Box,
  Typography,
  Container,
  IconButton,
  useTheme,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieSection = ({ title, movies }) => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const [showNavButtons, setShowNavButtons] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const isDark = theme.palette.mode === 'dark';

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
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        mb: 6,
        position: "relative",
        // Add padding to prevent clipping of hover effects
        py: 2,
      }}
      onMouseEnter={() => setShowNavButtons(true)}
      onMouseLeave={() => setShowNavButtons(false)}
    >
      {/* Navigation Buttons */}
      {showNavButtons && canScrollLeft && (
        <IconButton
          onClick={() => scroll("left")}
          sx={{
            position: "absolute",
            left: 8,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10, // Increased z-index
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
          }}
        >
          <ChevronLeft fontSize="medium" />
        </IconButton>
      )}

      {showNavButtons && canScrollRight && (
        <IconButton
          onClick={() => scroll("right")}
          sx={{
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10, // Increased z-index
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
          }}
        >
          <ChevronRight fontSize="medium" />
        </IconButton>
      )}

      <Container 
        maxWidth="xl" 
        sx={{ 
          position: "relative", 
          px: "2em",
          // Remove any overflow hidden that might clip hover effects
          overflow: "visible",
        }}
      >
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

        {/* Wrapper for scroll container with proper overflow handling */}
        <Box
          sx={{
            position: "relative",
            // Add padding to accommodate hover effects
            pt: 2,
            pb: 4,
            mx: -2, // Negative margin to counteract padding
            px: 2,
            // Allow overflow on Y-axis for hover effects
            overflowY: "visible",
            overflowX: "hidden",
          }}
        >
          <Box
            ref={containerRef}
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              overflowY: "visible", // Critical: Allow vertical overflow for hover effects
              pb: 2,
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": { display: "none" },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              cursor: "grab",
              "&:active": { cursor: "grabbing" },
              // Ensure cards can expand beyond container bounds
              position: "relative",
            }}
            onScroll={checkScrollPosition}
            onMouseDown={(e) => {
              const container = containerRef.current;
              if (!container) return;
              const startX = e.pageX - container.offsetLeft;
              const scrollLeft = container.scrollLeft;
              container.style.cursor = "grabbing";
              container.style.userSelect = "none";

              const mouseMove = (e) => {
                const x = e.pageX - container.offsetLeft;
                const walk = (x - startX) * 2;
                container.scrollLeft = scrollLeft - walk;
              };

              const mouseUp = () => {
                container.style.cursor = "grab";
                container.style.userSelect = "auto";
                document.removeEventListener("mousemove", mouseMove);
                document.removeEventListener("mouseup", mouseUp);
              };

              document.addEventListener("mousemove", mouseMove);
              document.addEventListener("mouseup", mouseUp);
            }}
            onTouchStart={(e) => {
              const container = containerRef.current;
              if (!container) return;
              const startX = e.touches[0].pageX - container.offsetLeft;
              const scrollLeft = container.scrollLeft;

              const touchMove = (e) => {
                const x = e.touches[0].pageX - container.offsetLeft;
                const walk = (x - startX) * 2;
                container.scrollLeft = scrollLeft - walk;
              };

              const touchEnd = () => {
                document.removeEventListener("touchmove", touchMove);
                document.removeEventListener("touchend", touchEnd);
              };

              document.addEventListener("touchmove", touchMove);
              document.addEventListener("touchend", touchEnd);
            }}
          >
            {movies.map((movie, index) => (
              <Box
                key={index}
                sx={{
                  // Ensure each card wrapper allows overflow
                  position: "relative",
                  flexShrink: 0,
                  // Add z-index to ensure proper stacking
                  zIndex: 1,
                  "&:hover": {
                    zIndex: 5, // Bring hovered card to front
                  },
                }}
              >
                <MovieCard movie={movie} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MovieSection;