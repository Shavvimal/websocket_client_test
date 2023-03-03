import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home, Lost } from "./pages";

import AOS from "aos";
import "./styles/style.scss";

const trackDownloadEvent = (pageTitle) => {
  gtag("event", "page_navigation", {
    page_title: pageTitle,
  });
};

function App() {
  const location = useLocation();
  // const TRACKING_ID = "G-7T0KPJ138G";

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    trackDownloadEvent(String(location.pathname));
    // ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Lost />} />
      </Routes>
    </>
  );
}

export default App;
