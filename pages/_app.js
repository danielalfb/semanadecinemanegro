import { useEffect, useState } from 'react';
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
   const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    isClient ? (
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    ) : null
  );
};

export default App;
