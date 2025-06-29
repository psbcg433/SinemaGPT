

import { useEffect } from "react"
import { useParams, useLocation } from "react-router-dom"
import {
  Box,
  Container,
  Typography,
  Stack,
  Chip,
  Card,
  CardMedia,
  Button,
  Grid,
  CardContent,
  Divider,
} from "@mui/material"

const genreMap = {
  16: "Animation",
  14: "Fantasy",
  28: "Action",
  35: "Comedy",
  10402: "Music",
  12: "Adventure",
  18: "Drama",
  27: "Horror",
  53: "Thriller",
  878: "Science Fiction",
  80: "Crime",
  9648: "Mystery",
  10749: "Romance",
  36: "History",
  10752: "War",
  37: "Western",
  99: "Documentary",
  10770: "TV Movie",
  10751: "Family",
}

const MoviePage = () => {
  const { movieId } = useParams()
  const location = useLocation()
  const movieData = location.state

  useEffect(() => {
    console.log("🎬 Movie ID from URL:", movieId)
    console.log("📦 Movie data from state:", movieData)
  }, [movieId, movieData])

  // Handle case where movie data is not available
  if (!movieData) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "#0F172A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "#F1F5F9" }}>
          Movie data not found
        </Typography>
      </Box>
    )
  }

  const movie = {
    ...movieData,
    genres: movieData.genre_ids?.map((id) => genreMap[id]).filter(Boolean) || [],
  }

  const backdropUrl = `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const releaseYear = new Date(movie.release_date).getFullYear()

  const renderStars = (rating) => {
    const normalizedRating = rating / 2
    const stars = []
    for (let i = 1; i <= 5; i++) {
      const filled = i <= Math.floor(normalizedRating)
      stars.push(
        <span
          key={i}
          style={{
            color: filled ? "#8B5CF6" : "#334155",
            fontSize: "1.5rem",
            textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
          }}
        >
          ★
        </span>,
      )
    }
    return stars
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#0F172A",
        position: "relative",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          backgroundImage: `url(${backdropUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(ellipse at center top, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              linear-gradient(135deg, rgba(15,23,42,0.4) 0%, rgba(30,41,59,0.6) 50%, rgba(15,23,42,0.9) 100%)
            `,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "200px",
            background: "linear-gradient(transparent, #0F172A)",
          },
        }}
      >
        <Container
          maxWidth=""
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            minHeight: "100vh",
            py: 8,
          }}
        >
          <Box sx={{ maxWidth: "60%", pr: 4 }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: "#F1F5F9",
                fontWeight: 900,
                fontSize: { xs: "2.5rem", md: "4rem", lg: "5rem" },
                textShadow: "3px 3px 6px rgba(0,0,0,0.8)",
                mb: 2,
                lineHeight: 1.1,
                background: "linear-gradient(135deg, #F1F5F9 0%, #8B5CF6 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {movie.title}
            </Typography>

            {movie.original_title !== movie.title && (
              <Typography
                variant="h4"
                sx={{
                  color: "#94A3B8",
                  fontStyle: "italic",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                  mb: 3,
                  fontWeight: 300,
                }}
              >
                {movie.original_title}
              </Typography>
            )}

            {/* Quick Stats */}
            <Stack spacing={3}>
              <Stack direction="row" spacing={3} alignItems="center" flexWrap="wrap">
                <Typography
                  variant="h5"
                  sx={{
                    color: "#8B5CF6",
                    fontWeight: 700,
                    textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                  }}
                >
                  {releaseYear}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ display: "flex", gap: 0.2 }}>{renderStars(movie.vote_average)}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#F1F5F9",
                      fontWeight: 700,
                      textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                    }}
                  >
                    {movie.vote_average?.toFixed(1)}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#94A3B8",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                    }}
                  >
                    ({movie.vote_count?.toLocaleString()} votes)
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
                {movie.genres.map((genre, index) => (
                  <Chip
                    key={index}
                    label={genre}
                    sx={{
                      background: "linear-gradient(135deg, rgba(139,92,246,0.9) 0%, rgba(124,58,237,0.9) 100%)",
                      color: "#F1F5F9",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      px: 1,
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(139,92,246,0.3)",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                      "&:hover": {
                        background: "linear-gradient(135deg, rgba(124,58,237,1) 0%, rgba(109,40,217,1) 100%)",
                        transform: "translateY(-1px)",
                      },
                      transition: "all 0.2s ease",
                    }}
                  />
                ))}
              </Stack>
            </Stack>

            <Typography
              variant="h6"
              sx={{
                color: "#CBD5E1",
                lineHeight: 1.6,
                maxWidth: "600px",
                textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                fontSize: { xs: "1rem", md: "1.25rem" },
                mt: 4,
              }}
            >
              {movie.overview}
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Floating Poster */}
      <Box
        sx={{
          position: "absolute",
          right: { xs: 20, md: 60, lg: 100 },
          top: { xs: "60vh", md: "50vh" },
          zIndex: 10,
          transform: "translateY(-50%)",
        }}
      >
        <Card
          sx={{
            width: { xs: 200, md: 280, lg: 320 },
            background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(124,58,237,0.2))",
            border: "2px solid rgba(139,92,246,0.4)",
            borderRadius: 3,
            overflow: "hidden",
            boxShadow: `
              0 25px 50px -12px rgba(0, 0, 0, 0.8),
              0 0 0 1px rgba(139,92,246,0.1),
              0 0 50px rgba(139,92,246,0.3)
            `,
            backdropFilter: "blur(10px)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.05) rotateY(5deg)",
              boxShadow: `
                0 35px 70px -12px rgba(0, 0, 0, 0.9),
                0 0 0 1px rgba(139,92,246,0.2),
                0 0 80px rgba(139,92,246,0.5)
              `,
            },
          }}
        >
          <CardMedia
            component="img"
            image={posterUrl}
            alt={movie.title}
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Card>
      </Box>

      {/* Action Bar */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(139,92,246,0.2)",
          py: 2,
        }}
      >
        <Container maxWidth="xl">
          <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                color: "#F1F5F9",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontSize: "1rem",
                boxShadow: "0 8px 25px rgba(139,92,246,0.4)",
                "&:hover": {
                  background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
                  boxShadow: "0 12px 35px rgba(139,92,246,0.6)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.2s ease",
              }}
            >
              ❤️ Add to Favourites
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: "rgba(139,92,246,0.5)",
                color: "#8B5CF6",
                fontWeight: 600,
                px: 3,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#8B5CF6",
                  background: "rgba(139,92,246,0.1)",
                },
              }}
            >
              + Add to Watchlist
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Main Content */}
      <Box sx={{ py: 8, background: "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)" }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box
                sx={{ display: "flex", gap: 4, alignItems: "flex-start", flexDirection: { xs: "column", lg: "row" } }}
              >
                {/* About the Movie - 3/4 ratio */}
                <Box sx={{ flex: { lg: 3 }, width: { xs: "100%", lg: "auto" } }}>
                  <Card
                    sx={{
                      background: "linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(51,65,85,0.6) 100%)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(139,92,246,0.2)",
                      borderRadius: 3,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                          color: "#F1F5F9",
                          fontWeight: 700,
                          mb: 3,
                          background: "linear-gradient(135deg, #F1F5F9 0%, #8B5CF6 100%)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        About the Movie
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: "#CBD5E1",
                          lineHeight: 1.8,
                          fontSize: "1.1rem",
                          mb: 4,
                        }}
                      >
                        {movie.overview}
                      </Typography>

                      <Divider sx={{ borderColor: "rgba(139,92,246,0.2)", my: 3 }} />

                      <Box
                        sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 3 }}
                      >
                        {[
                          { label: "Original Title", value: movie.original_title },
                          { label: "Release Date", value: new Date(movie.release_date).toLocaleDateString() },
                          { label: "Language", value: movie.original_language?.toUpperCase() },
                          { label: "Popularity", value: Math.round(movie.popularity)?.toLocaleString() },
                        ].map((item, index) => (
                          <Box key={index}>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#8B5CF6",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                fontSize: "0.75rem",
                                letterSpacing: "1px",
                                mb: 1,
                              }}
                            >
                              {item.label}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#F1F5F9",
                                fontWeight: 500,
                              }}
                            >
                              {item.value}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Box>

                {/* Movie Rating - 1/4 ratio */}
                <Box sx={{ flex: { lg: 1 }, width: { xs: "100%", lg: "auto" } }}>
                  <Card
                    sx={{
                      background: "linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(124,58,237,0.1) 100%)",
                      border: "1px solid rgba(139,92,246,0.3)",
                      borderRadius: 3,
                      backdropFilter: "blur(20px)",
                      boxShadow: "0 15px 35px rgba(139,92,246,0.2)",
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#F1F5F9",
                          fontWeight: 600,
                          mb: 3,
                          textAlign: "center",
                        }}
                      >
                        Movie Rating
                      </Typography>

                      <Box sx={{ textAlign: "center", mb: 3 }}>
                        <Typography
                          variant="h2"
                          sx={{
                            color: "#8B5CF6",
                            fontWeight: 900,
                            fontSize: "3rem",
                            lineHeight: 1,
                          }}
                        >
                          {movie.vote_average?.toFixed(1)}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#94A3B8",
                            fontWeight: 500,
                          }}
                        >
                          out of 10
                        </Typography>
                      </Box>

                      <Stack spacing={2}>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#CBD5E1",
                              mb: 1,
                            }}
                          >
                            Total Votes
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#F1F5F9",
                              fontWeight: 600,
                            }}
                          >
                            {movie.vote_count?.toLocaleString()}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            background: "linear-gradient(90deg, #8B5CF6 0%, #7C3AED 100%)",
                            height: 8,
                            borderRadius: 4,
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              height: "100%",
                              width: `${(movie.vote_average / 10) * 100}%`,
                              background: "linear-gradient(90deg, #F1F5F9 0%, #8B5CF6 100%)",
                              borderRadius: 4,
                            }}
                          />
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default MoviePage
