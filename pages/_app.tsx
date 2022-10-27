import Footer from '../components/layouts/Footer';
import Navbar from '../components/layouts/Navbar';
import './globals.css';
function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )

}

export default MyApp;
