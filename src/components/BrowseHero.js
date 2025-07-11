import {
  Box,
  Typography,
  Button,
  Stack,
  Container,
  Chip,
} from "@mui/material";
import { PlayArrow, Search } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const BrowseHero = () => {
  const theme = useTheme();

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "70vh", md: "85vh" },
        minHeight: "600px",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src="https://images.unsplash.com/photo-1489599735734-79b4169c2a78?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Hero Background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `
            linear-gradient(90deg, ${theme.palette.background.default} 0%, transparent 50%, ${theme.palette.background.default}E6 100%),
            linear-gradient(0deg, ${theme.palette.background.default} 0%, transparent 40%, transparent 60%, ${theme.palette.background.default}CC 100%)
          `,
          zIndex: 1,
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 3, md: 6 },
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            color: theme.palette.text.primary,
          }}
        >
          <Chip
            label="AI-Powered Discovery"
            sx={{
              mb: 3,
              background: theme.palette.gradient.soft,
              color: theme.palette.text.primary,
              fontWeight: 600,
              fontSize: "0.875rem",
              border: `1px solid rgba(139, 92, 246, 0.3)`,
              backdropFilter: "blur(10px)",
            }}
          />
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "2.5rem",
                sm: "3.5rem",
                md: "4rem",
                lg: "4.5rem",
              },
              fontWeight: 700,
              lineHeight: 1.1,
              mb: 2,
              background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, #8B5CF6 50%, ${theme.palette.text.primary} 100%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 4px 20px rgba(0,0,0,0.5)",
            }}
          >
            Discover Your Next
            <br />
            Favorite Movie
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              fontWeight: 400,
              color: theme.palette.text.secondary,
              mb: 4,
              lineHeight: 1.5,
              maxWidth: "600px",
            }}
          >
            Explore thousands of movies with AI-powered recommendations tailored
            just for you. From trending blockbusters to hidden gems.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mb: 4 }}
          >
            <Button
              onClick={() => handleScrollTo("trending")}
              variant="contained"
              size="large"
              startIcon={<PlayArrow />}
              sx={{
                background: theme.palette.gradient.main,
                color: "white",
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "6px",
                textTransform: "none",
                minWidth: { xs: "200px", sm: "auto" },
                boxShadow: "0 4px 20px rgba(139, 92, 246, 0.4)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(139, 92, 246, 0.5)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Show Trending
            </Button>

            <Button
              onClick={() => handleScrollTo("search")}
              variant="outlined"
              size="large"
              startIcon={<Search />}
              sx={{
                borderColor: "rgba(255, 255, 255, 0.3)",
                color: theme.palette.text.primary,
                px: 4,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: "6px",
                textTransform: "none",
                minWidth: { xs: "200px", sm: "auto" },
                backgroundColor: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                "&:hover": {
                  borderColor: "#8B5CF6",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Search Movies
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "45%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "400px",
              height: "500px",
              transform: "perspective(1000px) rotateY(-15deg)",
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Action Movie Poster"
              sx={{
                position: "absolute",
                width: "260px",
                height: "390px",
                borderRadius: "12px",
                objectFit: "cover",
                top: "20px",
                right: "0px",
                transform: "rotate(8deg)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                opacity: 0.7,
                zIndex: 1,
              }}
            />

            <Box
              component="img"
              src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Sci-Fi Movie Poster"
              sx={{
                position: "absolute",
                width: "290px",
                height: "435px",
                borderRadius: "12px",
                objectFit: "cover",
                top: "10px",
                right: "50px",
                transform: "rotate(-3deg)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
                opacity: 0.85,
                zIndex: 2,
              }}
            />

            <Box
              component="img"
              src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Drama Movie Poster"
              sx={{
                position: "absolute",
                width: "320px",
                height: "480px",
                borderRadius: "12px",
                objectFit: "cover",
                top: "0px",
                right: "100px",
                transform: "rotate(2deg)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
                zIndex: 3,
                border: `2px solid rgba(139, 92, 246, 0.3)`,
              }}
            />

            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: theme.palette.gradient.glow,
                borderRadius: "50%",
                filter: "blur(40px)",
                opacity: 0.3,
                zIndex: 0,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "10%",
              right: "10%",
              width: "8px",
              height: "8px",
              background: "#8B5CF6",
              borderRadius: "50%",
              animation: "float 3s ease-in-out infinite",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "20%",
              left: "5%",
              width: "6px",
              height: "6px",
              background: "#EC4899",
              borderRadius: "50%",
              animation: "float 4s ease-in-out infinite 1s",
              boxShadow: "0 0 15px rgba(236, 72, 153, 0.6)",
            }}
          />
        </Box>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "150px",
          background: `linear-gradient(transparent, ${theme.palette.background.default})`,
          zIndex: 1,
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </Box>
  );
};

export default BrowseHero;
