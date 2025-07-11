"use client"

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
    window.scrollTo(0, 0)
    console.log("🎬 Movie ID from URL:", movieId)
    console.log("📦 Movie data from state:", movieData)
  }, [movieId, movieData])

  if (!movieData) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background: "#0F172A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#F1F5F9",
            fontSize: { xs: "1.5rem", md: "2.125rem" },
            textAlign: "center",
          }}
        >
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
            fontSize: "1.2rem",
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
    <Box sx={{ minHeight: "100vh", background: "#0F172A", position: "relative" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "auto", md: "100vh" },
          minHeight: { xs: "100vh", md: "auto" },
          backgroundImage: `url(${backdropUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(ellipse at center top, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              linear-gradient(135deg, rgba(15,23,42,0.6) 0%, rgba(30,41,59,0.8) 50%, rgba(15,23,42,0.95) 100%)
            `,
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: { xs: "100px", md: "200px" },
            background: "linear-gradient(transparent, #0F172A)",
          },
        }}
      >
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: { xs: "flex-start", md: "center" },
            minHeight: { xs: "100vh", md: "auto" },
            py: { xs: 4, md: 8 },
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          {/* Movie Info */}
          <Box
            sx={{
              width: { xs: "100%", lg: "60%" },
              pr: { xs: 0, lg: 4 },
              mb: { xs: 4, lg: 0 },
              pt: { xs: 8, md: 4, lg: 0 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "#F1F5F9",
                fontWeight: 900,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "4rem", xl: "5rem" },
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
                  fontSize: { xs: "1.25rem", sm: "1.5rem", md: "2rem" },
                }}
              >
                {movie.original_title}
              </Typography>
            )}

            <Stack spacing={3}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 2, sm: 3 }}
                alignItems={{ xs: "flex-start", sm: "center" }}
                flexWrap="wrap"
                sx={{ gap: { xs: 1, sm: 0 } }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#8B5CF6",
                    fontWeight: 700,
                    textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                  }}
                >
                  {releaseYear}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                  <Box sx={{ display: "flex", gap: 0.2 }}>{renderStars(movie.vote_average)}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#F1F5F9",
                      fontWeight: 700,
                      textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      fontSize: { xs: "1rem", md: "1.25rem" },
                    }}
                  >
                    {movie.vote_average?.toFixed(1)}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#94A3B8",
                      textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                      fontSize: { xs: "0.875rem", md: "1rem" },
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
                      fontSize: { xs: "0.75rem", md: "0.9rem" },
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

              <Typography
                variant="h6"
                sx={{
                  color: "#CBD5E1",
                  lineHeight: 1.6,
                  maxWidth: { xs: "100%", md: "600px" },
                  textShadow: "1px 1px 2px rgba(0,0,0,0.8)",
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1.25rem" },
                  mt: { xs: 2, md: 4 },
                }}
              >
                {movie.overview}
              </Typography>
            </Stack>
          </Box>

          {/* Poster Card */}
          <Box
            sx={{
              width: { xs: "100%", sm: "300px", lg: "auto" },
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-end" },
              alignSelf: { xs: "center", lg: "center" },
              position: { xs: "static", lg: "absolute" },
              right: { lg: 60, xl: 100 },
              top: { lg: "50%" },
              transform: { lg: "translateY(-50%)" },
              zIndex: 10,
            }}
          >
            <Card
              sx={{
                width: { xs: 250, sm: 280, md: 300, lg: 320 },
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
                  transform: { xs: "scale(1.02)", md: "scale(1.05) rotateY(5deg)" },
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
        </Container>
      </Box>

      {/* Sticky Navigation */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(15, 23, 42, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(139,92,246,0.2)",
          py: { xs: 1.5, md: 2 },
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="flex-start"
            alignItems={{ xs: "stretch", sm: "center" }}
            spacing={2}
          >
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
                color: "#F1F5F9",
                fontWeight: 600,
                px: { xs: 3, md: 4 },
                py: { xs: 1.2, md: 1.5 },
                borderRadius: 2,
                textTransform: "none",
                fontSize: { xs: "0.875rem", md: "1rem" },
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
                px: { xs: 2.5, md: 3 },
                py: { xs: 1.2, md: 1.5 },
                borderRadius: 2,
                textTransform: "none",
                fontSize: { xs: "0.875rem", md: "1rem" },
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

      {/* Content Section */}
      <Box sx={{ py: { xs: 4, md: 8 }, background: "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)" }}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  alignItems: "flex-start",
                  flexDirection: { xs: "column", lg: "row" },
                }}
              >
                {/* About Section */}
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
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                      <Typography
                        variant="h4"
                        sx={{
                          color: "#F1F5F9",
                          fontWeight: 700,
                          mb: 3,
                          fontSize: { xs: "1.5rem", md: "2.125rem" },
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
                          fontSize: { xs: "1rem", md: "1.1rem" },
                          mb: 4,
                        }}
                      >
                        {movie.overview}
                      </Typography>

                      <Divider sx={{ borderColor: "rgba(139,92,246,0.2)", my: 3 }} />

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)",
                            lg: "repeat(auto-fit, minmax(200px, 1fr))",
                          },
                          gap: 3,
                        }}
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
                                fontSize: { xs: "0.875rem", md: "1rem" },
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

                {/* Rating Section */}
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
                    <CardContent sx={{ p: { xs: 2.5, md: 3 } }}>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#F1F5F9",
                          fontWeight: 600,
                          mb: 3,
                          textAlign: "center",
                          fontSize: { xs: "1.125rem", md: "1.25rem" },
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
                            fontSize: { xs: "2.5rem", md: "3rem" },
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
                            fontSize: { xs: "0.875rem", md: "1rem" },
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
                              fontSize: { xs: "0.75rem", md: "0.875rem" },
                            }}
                          >
                            Total Votes
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              color: "#F1F5F9",
                              fontWeight: 600,
                              fontSize: { xs: "1rem", md: "1.25rem" },
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
                            width: `${(movie.vote_average / 10) * 100}%`,
                            mx: "auto",
                          }}
                        />
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
