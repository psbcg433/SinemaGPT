import { Box, Typography, Container, IconButton, useTheme } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useRef, useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MovieSection = ({ title, movies }) => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const [showNavButtons, setShowNavButtons] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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
    container?.addEventListener('scroll', checkScrollPosition);
    
    return () => {
      container?.removeEventListener('scroll', checkScrollPosition);
    };
  }, [movies]);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box 
      sx={{ 
        mb: 4, 
        position: 'relative',
      }}
      onMouseEnter={() => setShowNavButtons(true)}
      onMouseLeave={() => setShowNavButtons(false)}
    >
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: 600,
            color: theme.palette.text.primary,
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
          }}
        >
          {title}
        </Typography>
        
        {/* Navigation Buttons */}
        {showNavButtons && canScrollLeft && (
          <IconButton
            onClick={() => scroll('left')}
            sx={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.primary.main,
              boxShadow: theme.shadows[4],
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.background.paper,
              }
            }}
          >
            <ChevronLeft fontSize="large" />
          </IconButton>
        )}

        {showNavButtons && canScrollRight && (
          <IconButton
            onClick={() => scroll('right')}
            sx={{
              position: 'absolute',
              right: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 2,
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.primary.main,
              boxShadow: theme.shadows[4],
              '&:hover': {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.background.paper,
              }
            }}
          >
            <ChevronRight fontSize="large" />
          </IconButton>
        )}

        {/* Movie Cards Container */}
        <Box
          ref={containerRef}
          sx={{
            display: 'flex',
            gap: 3,
            overflowX: 'auto',
            overflowY: 'hidden',
            pb: 2,
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            cursor: 'grab',
            '&:active': {
              cursor: 'grabbing',
            },
          }}
          onScroll={checkScrollPosition}
          onMouseDown={(e) => {
            const container = containerRef.current;
            if (!container) return;
            
            const startX = e.pageX - container.offsetLeft;
            const scrollLeft = container.scrollLeft;
            container.style.cursor = 'grabbing';
            container.style.userSelect = 'none';
            
            const mouseMove = (e) => {
              const x = e.pageX - container.offsetLeft;
              const walk = (x - startX) * 2;
              container.scrollLeft = scrollLeft - walk;
            };
            
            const mouseUp = () => {
              container.style.cursor = 'grab';
              container.style.userSelect = 'auto';
              document.removeEventListener('mousemove', mouseMove);
              document.removeEventListener('mouseup', mouseUp);
            };
            
            document.addEventListener('mousemove', mouseMove);
            document.addEventListener('mouseup', mouseUp);
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
              document.removeEventListener('touchmove', touchMove);
              document.removeEventListener('touchend', touchEnd);
            };
            
            document.addEventListener('touchmove', touchMove);
            document.addEventListener('touchend', touchEnd);
          }}
        >
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MovieSection;