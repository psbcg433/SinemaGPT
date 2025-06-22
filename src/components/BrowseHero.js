import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { Movie, Search, TrendingUp, PlayArrow, Star } from "@mui/icons-material";

const BrowseHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: { xs: "600px", md: "800px" },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      {/* Background Video */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/3134589/3134589-uhd_2560_1440_24fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </Box>

      {/* Enhanced Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, rgba(11,23,42,0.85) 0%, rgba(15,23,42,0.9) 100%)
          `,
          zIndex: 1,
        }}
      />

      {/* Decorative SVG Elements */}
      {/* Top Left Film Strip */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "5%",
          zIndex: 1,
          opacity: 0.1,
          animation: "float 8s ease-in-out infinite",
          transform: "rotate(-15deg)",
        }}
      >
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
          <rect x="0" y="0" width="120" height="80" fill="url(#filmGradient)" rx="4"/>
          <rect x="5" y="5" width="8" height="8" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="5" y="17" width="8" height="8" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="5" y="29" width="8" height="8" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="5" y="41" width="8" height="8" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="5" y="53" width="8" height="8" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="5" y="65" width="8" height="8" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="107" y="5" width="8" height="8" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="107" y="17" width="8" height="8" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="107" y="29" width="8" height="8" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="107" y="41" width="8" height="8" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="107" y="53" width="8" height="8" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="107" y="65" width="8" height="8" fill="rgba(255,255,255,0.3)" rx="2"/>
          <defs>
            <linearGradient id="filmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
            </linearGradient>
          </defs>
        </svg>
      </Box>

      {/* Top Right Camera */}
      <Box
        sx={{
          position: "absolute",
          top: "15%",
          right: "8%",
          zIndex: 1,
          opacity: 0.08,
          animation: "pulse 4s ease-in-out infinite",
          transform: "rotate(10deg)",
        }}
      >
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
          <rect x="10" y="20" width="80" height="50" fill="url(#cameraGradient)" rx="8"/>
          <circle cx="50" cy="45" r="15" fill="rgba(255,255,255,0.2)"/>
          <circle cx="50" cy="45" r="10" fill="rgba(255,255,255,0.1)"/>
          <rect x="20" y="10" width="20" height="15" fill="rgba(255,255,255,0.15)" rx="3"/>
          <circle cx="75" cy="30" r="3" fill="rgba(255,255,255,0.3)"/>
          <defs>
            <linearGradient id="cameraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
            </linearGradient>
          </defs>
        </svg>
      </Box>

      {/* Bottom Left Popcorn */}
      <Box
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "10%",
          zIndex: 1,
          opacity: 0.06,
          animation: "bounce 6s ease-in-out infinite",
          transform: "rotate(-20deg)",
        }}
      >
        <svg width="80" height="100" viewBox="0 0 80 100" fill="none">
          <path d="M15 40 L65 40 L60 90 L20 90 Z" fill="url(#popcornGradient)" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
          <circle cx="25" cy="35" r="4" fill="rgba(255,255,255,0.3)"/>
          <circle cx="35" cy="30" r="5" fill="rgba(255,255,255,0.25)"/>
          <circle cx="45" cy="32" r="4" fill="rgba(255,255,255,0.3)"/>
          <circle cx="55" cy="28" r="5" fill="rgba(255,255,255,0.25)"/>
          <circle cx="30" cy="25" r="3" fill="rgba(255,255,255,0.35)"/>
          <circle cx="50" cy="25" r="4" fill="rgba(255,255,255,0.3)"/>
          <defs>
            <linearGradient id="popcornGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(236, 72, 153, 0.2)" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.2)" />
            </linearGradient>
          </defs>
        </svg>
      </Box>

      {/* Bottom Right Film Reel */}
      <Box
        sx={{
          position: "absolute",
          bottom: "15%",
          right: "5%",
          zIndex: 1,
          opacity: 0.07,
          animation: "spin 20s linear infinite",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="55" fill="url(#reelGradient)" stroke="rgba(255,255,255,0.1)" strokeWidth="2"/>
          <circle cx="60" cy="60" r="15" fill="rgba(255,255,255,0.1)"/>
          <circle cx="60" cy="60" r="8" fill="rgba(0,0,0,0.3)"/>
          <circle cx="35" cy="35" r="8" fill="rgba(255,255,255,0.1)"/>
          <circle cx="85" cy="35" r="8" fill="rgba(255,255,255,0.1)"/>
          <circle cx="85" cy="85" r="8" fill="rgba(255,255,255,0.1)"/>
          <circle cx="35" cy="85" r="8" fill="rgba(255,255,255,0.1)"/>
          <circle cx="60" cy="25" r="6" fill="rgba(255,255,255,0.08)"/>
          <circle cx="95" cy="60" r="6" fill="rgba(255,255,255,0.08)"/>
          <circle cx="60" cy="95" r="6" fill="rgba(255,255,255,0.08)"/>
          <circle cx="25" cy="60" r="6" fill="rgba(255,255,255,0.08)"/>
          <defs>
            <linearGradient id="reelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.2)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.2)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.2)" />
            </linearGradient>
          </defs>
        </svg>
      </Box>

      {/* Floating Particles */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          "&::before": {
            content: '""',
            position: "absolute",
            top: "30%",
            left: "15%",
            width: "4px",
            height: "4px",
            background: "rgba(165, 180, 252, 0.6)",
            borderRadius: "50%",
            animation: "twinkle 3s ease-in-out infinite",
            boxShadow: "0 0 10px rgba(165, 180, 252, 0.8)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            top: "60%",
            right: "20%",
            width: "3px",
            height: "3px",
            background: "rgba(236, 72, 153, 0.6)",
            borderRadius: "50%",
            animation: "twinkle 4s ease-in-out infinite 1s",
            boxShadow: "0 0 8px rgba(236, 72, 153, 0.8)",
          },
        }}
      />

      {/* Additional Floating Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "25%",
          right: "30%",
          width: "2px",
          height: "2px",
          background: "rgba(139, 92, 246, 0.7)",
          borderRadius: "50%",
          animation: "twinkle 2.5s ease-in-out infinite 0.5s",
          boxShadow: "0 0 6px rgba(139, 92, 246, 0.9)",
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          bottom: "40%",
          left: "25%",
          width: "3px",
          height: "3px",
          background: "rgba(99, 102, 241, 0.6)",
          borderRadius: "50%",
          animation: "twinkle 3.5s ease-in-out infinite 2s",
          boxShadow: "0 0 8px rgba(99, 102, 241, 0.8)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          px: { xs: 2, sm: 4 },
        }}
      >
        {/* Animated Badge */}
        <Box
          sx={{
            mb: 3,
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 3,
            py: 1,
            background: "linear-gradient(45deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15))",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "50px",
            animation: "glow 3s ease-in-out infinite",
          }}
        >
          <Star sx={{ fontSize: "1rem", color: "#fbbf24", animation: "pulse 2s ease-in-out infinite" }} />
          <Typography
            variant="caption"
            sx={{
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#e2e8f0",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            AI-Powered Discovery
          </Typography>
        </Box>

        {/* Movie Icon with Enhanced Animation */}
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              p: 2,
              borderRadius: "50%",
              background: "linear-gradient(45deg, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)",
              backdropFilter: "blur(15px)",
              border: "2px solid rgba(255, 255, 255, 0.1)",
              animation: "iconFloat 4s ease-in-out infinite",
              boxShadow: "0 8px 32px rgba(99, 102, 241, 0.3)",
            }}
          >
            <Movie sx={{ 
              fontSize: { xs: "2rem", md: "3rem" }, 
              color: "#a5b4fc",
              filter: "drop-shadow(0 0 10px rgba(165, 180, 252, 0.5))"
            }} />
          </Box>
        </Box>

        {/* Main Title with Enhanced Effects */}
        <Typography 
          variant="h1" 
          sx={{
            mb: 3,
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem", lg: "5rem" },
            background: "linear-gradient(45deg, #fff 20%, #a5b4fc 40%, #c084fc 60%, #fff 80%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: 900,
            lineHeight: 1.1,
            textShadow: "0 4px 16px rgba(0,0,0,0.5)",
            animation: "shimmer 3s ease-in-out infinite, textGlow 4s ease-in-out infinite",
            backgroundSize: "200% 200%",
            filter: "drop-shadow(0 0 20px rgba(165, 180, 252, 0.3))",
          }}
        >
          Welcome to SinemaGPT
        </Typography>
        
        {/* Subtitle with Typewriter Effect */}
        <Typography 
          variant="h4" 
          sx={{
            mb: 5,
            fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
            maxWidth: "900px",
            mx: "auto",
            fontWeight: 400,
            color: "#e2e8f0",
            textShadow: "0 2px 8px rgba(0,0,0,0.7)",
            lineHeight: 1.4,
            opacity: 0.9,
            animation: "fadeInUp 1s ease-out 0.5s both",
          }}
        >
          The ultimate movie database powered by AI. Discover, explore, and find your next favorite film with intelligent recommendations.
        </Typography>

        {/* Enhanced Action Buttons */}
        <Stack 
          direction={{ xs: "column", sm: "row" }} 
          spacing={{ xs: 2, sm: 3 }}
          justifyContent="center"
          alignItems="center"
          sx={{ animation: "fadeInUp 1s ease-out 1s both" }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<TrendingUp sx={{ fontSize: "1.5rem" }} />}
            sx={{
              background: "linear-gradient(45deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)",
              color: "white",
              px: { xs: 4, sm: 6 },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: "1rem", sm: "1.1rem" },
              fontWeight: 700,
              borderRadius: "50px",
              textTransform: "none",
              boxShadow: "0 8px 32px rgba(99, 102, 241, 0.4)",
              position: "relative",
              overflow: "hidden",
              minWidth: { xs: "250px", sm: "auto" },
              "&:hover": {
                background: "linear-gradient(45deg, #4F46E5 0%, #7C3AED 50%, #DB2777 100%)",
                boxShadow: "0 12px 40px rgba(99, 102, 241, 0.6)",
                transform: "translateY(-3px) scale(1.02)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                transition: "left 0.6s",
              },
              "&:hover::before": {
                left: "100%",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "50px",
                padding: "2px",
                background: "linear-gradient(45deg, #6366F1, #8B5CF6, #EC4899)",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                opacity: 0,
                transition: "opacity 0.3s",
              },
              "&:hover::after": {
                opacity: 0.7,
              },
              transition: "all 0.3s ease",
            }}
          >
            Browse Trending Movies
          </Button>

          <Button
            variant="outlined"
            size="large"
            startIcon={<Search sx={{ fontSize: "1.5rem" }} />}
            sx={{
              borderWidth: "2px",
              borderColor: "rgba(255,255,255,0.3)",
              color: "white",
              px: { xs: 4, sm: 6 },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: "1rem", sm: "1.1rem" },
              fontWeight: 700,
              borderRadius: "50px",
              textTransform: "none",
              backdropFilter: "blur(12px)",
              backgroundColor: "rgba(15, 23, 42, 0.3)",
              minWidth: { xs: "250px", sm: "auto" },
              position: "relative",
              overflow: "hidden",
              "&:hover": {
                borderColor: "#a5b4fc",
                backgroundColor: "rgba(165, 180, 252, 0.15)",
                color: "#a5b4fc",
                transform: "translateY(-3px) scale(1.02)",
                boxShadow: "0 8px 32px rgba(165, 180, 252, 0.3)",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(165, 180, 252, 0.2), transparent)",
                transition: "left 0.6s",
              },
              "&:hover::before": {
                left: "100%",
              },
              transition: "all 0.3s ease",
            }}
          >
            Find Your Perfect Movie
          </Button>
        </Stack>

        {/* Enhanced Scroll Indicator */}
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            opacity: 0.6,
            animation: "fadeInUp 1s ease-out 1.5s both, bounce 2s ease-in-out 2s infinite",
          }}
        >
          <Box
            sx={{
              width: "24px",
              height: "40px",
              border: "2px solid rgba(255,255,255,0.4)",
              borderRadius: "12px",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "6px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "4px",
                height: "8px",
                background: "rgba(165, 180, 252, 0.8)",
                borderRadius: "2px",
                animation: "scrollDot 2s ease-in-out infinite",
              },
            }}
          />
          <Typography
            variant="caption"
            sx={{
              fontSize: "0.75rem",
              color: "#cbd5e1",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
          >
            Scroll to explore
          </Typography>
        </Box>
      </Container>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-15deg); }
          50% { transform: translateY(-20px) rotate(-15deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.08; transform: scale(1) rotate(10deg); }
          50% { opacity: 0.15; transform: scale(1.05) rotate(10deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0px) rotate(-20deg); }
          50% { transform: translateY(-15px) rotate(-20deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.3); }
          50% { box-shadow: 0 0 30px rgba(139, 92, 246, 0.5); }
        }
        @keyframes iconFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes textGlow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(165, 180, 252, 0.3)); }
          50% { filter: drop-shadow(0 0 30px rgba(165, 180, 252, 0.6)); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollDot {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          50% { opacity: 0.3; transform: translateX(-50%) translateY(12px); }
          100% { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </Box>
  );
};

export default BrowseHero;