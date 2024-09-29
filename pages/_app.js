import "../styles/globals.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/navBar";
import { AuthProvider } from "../context";
import Footer from "./components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}

export default MyApp;
