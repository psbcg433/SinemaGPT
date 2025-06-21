import { Box, Typography, Button, Container } from '@mui/material';
import { PlayArrow, Info } from '@mui/icons-material';

const BrowseHero= () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '50vh',
        minHeight: '400px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Video */}
      <Box
        component="iframe"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playlist=dQw4w9WgXcQ"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100vw',
          height: '56.25vw',
          minHeight: '100vh',
          minWidth: '177.77vh',
          transform: 'translate(-50%, -50%)',
          zIndex: -2,
          border: 'none',
          pointerEvents: 'none',
        }}
      />

      {/* Dark Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(45deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)',
          zIndex: -1,
        }}
      />

      {/* Content Overlay */}
      <Container maxWidth="md" sx={{ zIndex: 1, textAlign: 'center', color: 'white' }}>
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            fontWeight: 800,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          Inception
        </Typography>
        
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            opacity: 0.9,
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<PlayArrow />}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(99, 102, 241, 0.3)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 40px rgba(99, 102, 241, 0.4)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Watch Now
          </Button>
          
          <Button
            variant="outlined"
            size="large"
            startIcon={<Info />}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 3,
              borderColor: 'rgba(255,255,255,0.3)',
              color: 'white',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': {
                borderColor: 'rgba(255,255,255,0.5)',
                backgroundColor: 'rgba(255,255,255,0.2)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            More Info
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default BrowseHero;