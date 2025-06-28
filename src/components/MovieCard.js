import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { Favorite, PlaylistAdd, Info } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDark = theme.palette.mode === 'dark';
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/movie/${movie.id}`, { state: movie });
  };

  return (
    <Card
      sx={{
        width: isMobile ? 180 : 240,
        height: isMobile ? 300 : 360,
        flexShrink: 0,
        borderRadius: 1.5, // Less rounded corners
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        background: isDark
          ? `linear-gradient(145deg, ${theme.palette.dark?.background?.paper || '#1E293B'} 0%, ${theme.palette.dark?.background?.alt || '#334155'} 100%)`
          : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        border: isDark
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : '1px solid rgba(0, 0, 0, 0.08)',
        transition: 'all 0.4s ease',
        transform: isHovered ? 'translateY(-12px) scale(1.03)' : 'none',
        boxShadow: isHovered
          ? isDark
            ? '0 20px 40px rgba(0, 0, 0, 0.4)'
            : '0 20px 40px rgba(124, 58, 237, 0.2)'
          : isDark
            ? '0 4px 12px rgba(0, 0, 0, 0.3)'
            : '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box sx={{ position: 'relative', height: isMobile ? 180 : 240, overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height={isMobile ? 180 : 240}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          sx={{
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.15)' : 'scale(1)',
            transition: 'transform 0.4s ease',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '60%',
            background: isDark
              ? 'linear-gradient(transparent, rgba(30, 41, 59, 0.9))'
              : 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      </Box>

      <Box sx={{ position: 'relative', height: 120 }}>
        <CardContent sx={{ zIndex: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: isMobile ? '0.9rem' : '1rem',
              lineHeight: 1.3,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {movie.title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontSize: '0.75rem',
              opacity: 0.8,
              lineHeight: 1.4,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {movie.overview}
          </Typography>
        </CardContent>

        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            background: isDark
              ? 'linear-gradient(transparent 0%, rgba(30, 41, 59, 0.95) 30%)'
              : 'linear-gradient(transparent 0%, rgba(255,255,255,0.95) 30%)',
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.3s ease',
            zIndex: 3,
          }}
        >
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }}>
            <Button
              onClick={handleDetailsClick}
              variant="contained"
              size="small"
              startIcon={<Info />}
              sx={{ flex: 1, textTransform: 'none', borderRadius: 2 }}
            >
              Details
            </Button>

            <IconButton size="small"><Favorite /></IconButton>
            <IconButton size="small"><PlaylistAdd /></IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default MovieCard;
