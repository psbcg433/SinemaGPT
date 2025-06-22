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

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDark = theme.palette.mode === 'dark';

  return (
    <Card
      sx={{
        width: isMobile ? 180 : 240,
        height: isMobile ? 300 : 360,
        flexShrink: 0,
        borderRadius: 3,
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        background: isDark
          ? `linear-gradient(145deg, ${theme.palette.dark?.background?.paper || '#1E293B'} 0%, ${theme.palette.dark?.background?.alt || '#334155'} 100%)`
          : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        border: isDark 
          ? '1px solid rgba(255, 255, 255, 0.1)' 
          : '1px solid rgba(0, 0, 0, 0.08)',
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        transform: isHovered ? 'translateY(-12px) scale(1.03)' : 'translateY(0) scale(1)',
        boxShadow: isHovered 
          ? isDark 
            ? '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            : '0 20px 40px rgba(124, 58, 237, 0.2)'
          : isDark
            ? '0 4px 12px rgba(0, 0, 0, 0.3)'
            : '0 4px 12px rgba(0, 0, 0, 0.1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isHovered
            ? isDark
              ? theme.palette.dark?.gradient?.soft || 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(124,58,237,0.15))'
              : 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
            : 'transparent',
          transition: 'all 0.4s ease',
          zIndex: 1,
          pointerEvents: 'none',
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <Box
        sx={{
          position: 'relative',
          height: isMobile ? 180 : 240,
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          height={isMobile ? 180 : 240}
          image={movie.poster}
          alt={movie.title}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
            transform: isHovered ? 'scale(1.15)' : 'scale(1)',
          }}
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60%',
            background: isDark
              ? 'linear-gradient(transparent 0%, rgba(30, 41, 59, 0.9) 100%)'
              : 'linear-gradient(transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            zIndex: 1,
          }}
        />
      </Box>

      {/* Content */}
      <Box sx={{ position: 'relative', height: 120 }}>
        <CardContent
          sx={{
            p: 2,
            pb: 1,
            height: '100%',
            position: 'relative',
            zIndex: 2,
            background: isDark
              ? `linear-gradient(145deg, ${theme.palette.dark?.background?.paper || '#1E293B'} 0%, ${theme.palette.dark?.background?.alt || '#334155'} 100%)`
              : 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: isMobile ? '0.9rem' : '1rem',
              fontWeight: 700,
              mb: 0.5,
              lineHeight: 1.3,
              color: isDark ? theme.palette.dark?.text?.primary : theme.palette.text.primary,
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
              color: isDark ? theme.palette.dark?.text?.secondary : theme.palette.text.secondary,
              lineHeight: 1.4,
              opacity: 0.8,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {movie.tagline}
          </Typography>
        </CardContent>

        {/* Action Buttons */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            pt: 1.5,
            background: isDark
              ? 'linear-gradient(transparent 0%, rgba(30, 41, 59, 0.95) 30%, rgba(30, 41, 59, 1) 100%)'
              : 'linear-gradient(transparent 0%, rgba(255, 255, 255, 0.95) 30%, rgba(255, 255, 255, 1) 100%)',
            transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
            zIndex: 3,
          }}
        >
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
              variant="contained"
              size="small"
              startIcon={<Info />}
              sx={{
                flex: 1,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                fontSize: isMobile ? '0px' : '0.75rem',
                py: 0.8,
                background: isDark 
                  ? theme.palette.dark?.gradient?.main || theme.palette.gradient.main
                  : theme.palette.gradient.main,
                '& .MuiButton-startIcon': {
                  mr: isMobile ? 0 : 1,
                },
                '&:hover': {
                  background: isDark
                    ? 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)'
                    : 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  transform: 'translateY(-1px)',
                  boxShadow: isDark
                    ? '0 4px 12px rgba(139, 92, 246, 0.4)'
                    : '0 4px 12px rgba(124, 58, 237, 0.3)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              {isMobile ? '' : 'Details'}
            </Button>

            <IconButton
              size="small"
              sx={{
                color: isDark ? theme.palette.dark?.text?.secondary : theme.palette.text.secondary,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.04)',
                '&:hover': {
                  color: '#ef4444',
                  backgroundColor: 'rgba(239, 68, 68, 0.15)',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <Favorite fontSize="small" />
            </IconButton>

            <IconButton
              size="small"
              sx={{
                color: isDark ? theme.palette.dark?.text?.secondary : theme.palette.text.secondary,
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.04)',
                '&:hover': {
                  color: theme.palette.primary.main,
                  backgroundColor: isDark 
                    ? 'rgba(139, 92, 246, 0.2)' 
                    : 'rgba(99, 102, 241, 0.1)',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              <PlaylistAdd fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default MovieCard;