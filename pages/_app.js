import "../styles/globals.css";
import React, { useState, useEffect } from "react";

import { AuthProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
