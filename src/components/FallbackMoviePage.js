import { Skeleton, Container } from "@mui/material";

const FallbackMoviePage = () => (
  <Container maxWidth="lg" sx={{ mt: 6 }}>
    <Skeleton variant="rectangular" width="100%" height={480} />
    <Skeleton width="60%" height={40} sx={{ mt: 3 }} />
    <Skeleton width="40%" height={30} sx={{ mt: 2 }} />
  </Container>
);

export default FallbackMoviePage;
