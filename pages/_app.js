import "../styles/globals.css";
import { AuthProvider } from "./context";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      {/* <iframe
        className="iframe"
        width="387"
        height="600"
        src="https://chatbot.pmkisan.gov.in/Home/Index"
        title="Ask Nandi"
      ></iframe> */}
    </AuthProvider>
  );
}

export default MyApp;
