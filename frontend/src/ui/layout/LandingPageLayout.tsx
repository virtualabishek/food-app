import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";

const LandingPageLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default LandingPageLayout;
