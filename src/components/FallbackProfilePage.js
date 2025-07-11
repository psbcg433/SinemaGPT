import { Box, Skeleton, Avatar } from "@mui/material";

const FallbackProfilePage = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mt: 6, px: 4 }}>
    <Skeleton variant="circular">
      <Avatar sx={{ width: 80, height: 80 }} />
    </Skeleton>
    <Box>
      <Skeleton width={180} height={30} />
      <Skeleton width={120} height={20} sx={{ mt: 1 }} />
    </Box>
  </Box>
);

export default FallbackProfilePage;
