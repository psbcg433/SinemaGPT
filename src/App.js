import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { setUser } from "./store/authSlice/authSlice";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  

 
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ displayName: user.displayName, email: user.email }));
      } else {
        dispatch(setUser(null));
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <ToastContainer position="top-center" autoClose={3000} />
      <Header scrolled={scrolled} />
      <Outlet />
      <Footer />
    </Box>
  );
}
