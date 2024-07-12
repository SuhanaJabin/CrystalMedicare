import { AppProps } from 'next/app';
import { useEffect } from 'react';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // Set inline styles for the body
    document.body.style.backgroundColor = '#ffffff'; // Set background color
    document.body.style.color = '#000'; // Set text color for contrast
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
