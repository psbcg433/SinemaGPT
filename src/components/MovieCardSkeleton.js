import { Skeleton, Card, CardContent, Box } from "@mui/material";

const MovieCardSkeleton = () => {
  return (
    <Card
      sx={{
        width: { xs: 180, sm: 240 },
        height: { xs: 300, sm: 360 },
        borderRadius: 1.5,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <Skeleton variant="rectangular" width="100%" height={240} />
      <CardContent>
        <Skeleton variant="text" width="80%" height={20} />
        <Skeleton variant="text" width="90%" height={15} />
        <Skeleton variant="text" width="70%" height={15} />
      </CardContent>
    </Card>
  );
};

export default MovieCardSkeleton;
