import React, { useEffect } from "react";
import Designs from "./components/Designs";
import Blogs from "./components/Designs";
import BuySell from "./components/BuySell";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import scrollreveal from "scrollreveal";



export default function App() {
  useEffect(() => {
      const registerAnimations = () => {
          const sr = scrollreveal({
              origin: "buttom",
              distance: "80px",
              duration: 2000,
              reset: false,
          });
          sr.reveal(
              `
              nav, 
              #home, 
              #buysell1, 
              #buysell2,
              #buysell3,
              #blogs, 
              footer      
              `,
              {
                  opacity: 0,
                  interval: 500,
              }
          );
      };

      registerAnimations();
  }, []);

  window.setTimeout(() => {
      const home = document.getElementById("home");
      home.style.transform = "home";
  }, 1500);

  return(
      <div>
          <ScrollToTop />
          <Navbar />
          <Home />
          <Designs />
          <BuySell />
          <Blogs />
          <Footer />
      </div>
  );
}
