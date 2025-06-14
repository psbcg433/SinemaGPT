import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Avatar,
  Grid,
} from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { useSelector } from 'react-redux';

const demoMovies = [
  {
    title: 'Inception',
    summary: 'A mind-bending thriller by Christopher Nolan.',
    image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX700_.jpg',
  },
  {
    title: 'The Matrix',
    summary: 'Reality is not what it seems. Welcome to the Matrix.',
    image: 'https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UY3156_.jpg',
  },
  {
    title: 'Interstellar',
    summary: 'Journey through space and time to save humanity.',
    image: 'https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UY3600_.jpg',
  },
  {
    title: 'The Dark Knight',
    summary: 'The rise of Gotham’s vigilante hero, Batman.',
    image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UY2048_.jpg',
  },
];

const FeedBody = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Container maxWidth="xl" sx={{ mt: 10, mb: 6 ,p:2}}>
      {/* Welcome Card with Demo Movies */}
      <Card
        sx={{
          p: 4,
          borderRadius: 4,
          backgroundColor: '#f9fafb',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <CardContent>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="center" mb={4}>
            <Avatar
              sx={{
                bgcolor: '#6366f1',
                width: 72,
                height: 72,
                fontSize: '2rem',
              }}
            >
              <MovieIcon fontSize="large" />
            </Avatar>
            <Box>
              <Typography variant="h5" fontWeight={700} gutterBottom>
                Welcome back, {user?.displayName || 'User'}!
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Stay tuned! We’ll keep you updated with the latest movies and recommendations.
              </Typography>
            </Box>
          </Stack>

          <Grid container spacing={3}>
            {demoMovies.map((movie, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Card sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.08)' }}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={movie.image}
                    alt={movie.title}
                  />
                  <CardContent>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {movie.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {movie.summary}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        display: 'inline-block',
                        mt: 1,
                        px: 1.5,
                        py: 0.5,
                        borderRadius: '999px',
                        backgroundColor: '#ffe0b2',
                        color: '#e65100',
                        fontWeight: 600,
                      }}
                    >
                      Coming Soon
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FeedBody;