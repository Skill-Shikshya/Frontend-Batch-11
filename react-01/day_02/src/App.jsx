import React, { Fragment } from "react";
import "./MyApp.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <>
      <Header />
      <LandingPage />
      <Footer />
    </>
  );
}

export default App;
