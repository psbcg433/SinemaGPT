import {
  Box,
  Container,
  Avatar,
  Typography,
  IconButton,
  Button,
  TextField,
  useTheme,
  Fab,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Edit, PhotoCamera, Save, Cancel, Person } from "@mui/icons-material";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateUserProfileThunk,
  updateProfilePictureThunk,
  updateCoverPictureThunk,
} from "../store/userSlice/userSlice";
import MovieSection from "../components/MovieSection";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editData, setEditData] = useState({
    name: user.name || "",
    bio: user.bio || "",
  });
  const [uploading, setUploading] = useState({ profile: false, cover: false });
  const [error, setError] = useState("");

  const profileInputRef = useRef(null);
  const coverInputRef = useRef(null);

  const handleEditOpen = () => {
    setEditData({
      name: user.name || "",
      bio: user.bio || "",
    });
    setEditDialogOpen(true);
    setError("");
  };

  const handleEditClose = () => {
    setEditDialogOpen(false);
    setEditData({
      name: user.name || "",
      bio: user.bio || "",
    });
  };

  const handleSave = async () => {
    try {
      setError("");
      await dispatch(
        updateUserProfileThunk({
          name: editData.name.trim(),
          bio: editData.bio.trim(),
        })
      );
      toast.success("Profile updated successfully!");
      setEditDialogOpen(false);
    } catch (err) {
      setError("Failed to save profile. Please try again.");
      console.error("Error saving profile:", err);
    }
  };

  const handleImageUpload = async (file, type) => {
    if (!file) return;
    try {
      setUploading((prev) => ({ ...prev, [type]: true }));
      setError("");
      const fakeUrl = URL.createObjectURL(file);

      if (type === "profile") {
        await dispatch(updateProfilePictureThunk(fakeUrl));
        toast.success("Profile photo updated!");
      } else if (type === "cover") {
        await dispatch(updateCoverPictureThunk(fakeUrl));
        toast.success("Cover photo updated!");
      }
    } catch (err) {
      setError(`Failed to upload ${type} image. Please try again.`);
      console.error(err);
    } finally {
      setUploading((prev) => ({ ...prev, [type]: false }));
    }
  };

  const handleFileSelect = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      handleImageUpload(file, type);
    }
    event.target.value = "";
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: theme.palette.background.default }}>
      <Box sx={{ position: "relative", height: { xs: 200, sm: 280, md: 320 } }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            background: user.coverpic
              ? `url(${user.coverpic})`
              : isDark
              ? theme.palette.gradient.main
              : "linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <IconButton
            onClick={() => coverInputRef.current?.click()}
            disabled={uploading.cover}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
              },
            }}
          >
            {uploading.cover ? <Save /> : <PhotoCamera />}
          </IconButton>

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
            }}
          />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: { xs: -40, sm: -50 },
            left: { xs: 20, sm: 40 },
            zIndex: 2,
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Avatar
              src={user.photoURL}
              sx={{
                width: { xs: 80, sm: 100, md: 120 },
                height: { xs: 80, sm: 100, md: 120 },
                border: `4px solid ${theme.palette.background.default}`,
                backgroundColor: theme.palette.primary.main,
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              }}
            >
              {!user.photoURL && <Person fontSize="inherit" />}
            </Avatar>

            <Fab
              size="small"
              onClick={() => profileInputRef.current?.click()}
              disabled={uploading.profile}
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                width: 32,
                height: 32,
                minHeight: 32,
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              {uploading.profile ? <Save fontSize="small" /> : <PhotoCamera fontSize="small" />}
            </Fab>
          </Box>
        </Box>

        <IconButton
          onClick={handleEditOpen}
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
            backgroundColor: theme.palette.primary.main,
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          <Edit />
        </IconButton>
      </Box>

      <Container maxWidth="xl" sx={{ mt: { xs: 6, sm: 8 }, px: { xs: 2, sm: 4 } }}>
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              mb: 1,
              background: theme.palette.gradient.main,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              filter: isDark ? "drop-shadow(0 0 8px rgba(139, 92, 246, 0.3))" : "none",
            }}
          >
            {user.name || "Anonymous User"}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.9rem", sm: "1rem" },
              opacity: 0.8,
              maxWidth: 600,
              lineHeight: 1.6,
              color: theme.palette.text.secondary,
            }}
          >
            {user.bio || (
              <Box
                component="span"
                sx={{
                  fontStyle: "italic",
                  opacity: 0.6,
                  cursor: "pointer",
                  "&:hover": { opacity: 0.8 },
                }}
                onClick={handleEditOpen}
              >
                Click edit to set up your bio...
              </Box>
            )}
          </Typography>
        </Box>

        <Box sx={{ py: 4 }}>
          <MovieSection title="❤️ Favorite Movies" movies={user.favourites} loading={false} error={null} />
          <MovieSection title="📋 Watchlist" movies={user.watchlist} loading={false} error={null} />
        </Box>
      </Container>

      <Dialog
        open={editDialogOpen}
        onClose={handleEditClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { backgroundColor: theme.palette.background.paper, backgroundImage: "none" } }}
      >
        <DialogTitle
          sx={{
            background: theme.palette.gradient.main,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}
        >
          Edit Profile
        </DialogTitle>
        <DialogContent sx={{ pt: 3 }}>
          <TextField
            fullWidth
            label="Name"
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
            sx={{ mb: 3 }}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Bio"
            multiline
            rows={4}
            value={editData.bio}
            onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
            variant="outlined"
            placeholder="Tell us about yourself..."
          />
          <Button
            component="label"
            variant="outlined"
            startIcon={<PhotoCamera />}
            sx={{ mt: 2 }}
          >
            Upload Cover Photo
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => handleFileSelect(e, "cover")}
            />
          </Button>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 1 }}>
          <Button onClick={handleEditClose} startIcon={<Cancel />}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            variant="contained"
            startIcon={<Save />}
            disabled={!editData.name.trim()}
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

      <input
        type="file"
        ref={profileInputRef}
        onChange={(e) => handleFileSelect(e, "profile")}
        accept="image/*"
        style={{ display: "none" }}
      />
      <input
        type="file"
        ref={coverInputRef}
        onChange={(e) => handleFileSelect(e, "cover")}
        accept="image/*"
        style={{ display: "none" }}
      />
    </Box>
  );
};

export default ProfilePage;
