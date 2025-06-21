import { Box, TextField, Container, InputAdornment } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchSection = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: 'background.default' }}>
      <Container maxWidth="md">
        <TextField
          fullWidth
          placeholder="Search movies..."
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 3,
              backgroundColor: 'background.paper',
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'primary.light',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'primary.main',
                borderWidth: 2,
              },
            },
            '& .MuiOutlinedInput-input': {
              padding: '16px 14px',
              fontSize: '1rem',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Container>
    </Box>
  );
};

export default SearchSection;