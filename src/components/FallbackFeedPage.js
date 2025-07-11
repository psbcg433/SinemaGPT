import { Box, Skeleton, Container } from "@mui/material";

const FallbackFeedPage = () => (
  <Container maxWidth="xl" sx={{ mt: 4 }}>
    <Skeleton variant="text" width="40%" height={50} />
    <Box display="flex" gap={2} mt={2}>
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} variant="rectangular" width={240} height={360} />
      ))}
    </Box>
  </Container>
);

export default FallbackFeedPage;
