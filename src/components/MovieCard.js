import { Card, CardMedia, CardContent, Typography, Button, Box, IconButton } from '@mui/material';
import { Favorite, PlaylistAdd, Info } from '@mui/icons-material';
import { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      sx={{
        width: 280,
        height: 400,
        flexShrink: 0,
        borderRadius: 3,
        overflow: 'hidden', // Keep this for the card
        cursor: 'pointer',
        position: 'relative',
        background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
        boxShadow: isHovered 
          ? '0 25px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)' 
          : '0 4px 20px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
        transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isHovered 
            ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)'
            : 'transparent',
          transition: 'all 0.4s ease',
          zIndex: 1,
          pointerEvents: 'none',
        }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <Box
        sx={{
          position: 'relative',
          height: 280,
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          height="280"
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
            height: '50%',
            background: 'linear-gradient(transparent 0%, rgba(0, 0, 0, 0.7) 100%)',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.4s ease',
            zIndex: 1,
          }}
        />
      </Box>

      {/* Content Section - Adjusted for proper button visibility */}
      <Box 
        sx={{ 
          position: 'relative',
          height: 120,
          overflow: 'visible', // Changed to visible
        }}
      >
        {/* Main Content */}
        <CardContent
          sx={{
            p: 2,
            pb: 1,
            height: '100%',
            position: 'relative',
            zIndex: 2,
            background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)',
          }}
        >
          <Typography 
            variant="h6" 
            sx={{ 
              fontSize: '1.1rem', 
              fontWeight: 700, 
              mb: 0.5, 
              lineHeight: 1.3,
              color: 'text.primary',
            }}
          >
            {movie.title}
          </Typography>
          
          <Typography 
            variant="body2" 
            sx={{ 
              fontSize: '0.85rem', 
              color: 'text.secondary',
              lineHeight: 1.4,
              opacity: 0.8,
            }}
          >
            {movie.tagline}
          </Typography>
        </CardContent>

        {/* Action Buttons - Now properly positioned */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 2,
            pt: 1.5,
            background: 'linear-gradient(transparent 0%, rgba(255, 255, 255, 0.95) 30%, rgba(255, 255, 255, 1) 100%)',
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
                fontSize: '0.8rem',
                py: 0.8,
                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 6px 16px rgba(99, 102, 241, 0.4)',
                },
                transition: 'all 0.2s ease',
              }}
            >
              Learn More
            </Button>
            
            <IconButton 
              size="small" 
              sx={{ 
                color: 'text.secondary',
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                '&:hover': { 
                  color: '#ef4444',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
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
                color: 'text.secondary',
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
                '&:hover': { 
                  color: 'primary.main',
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
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