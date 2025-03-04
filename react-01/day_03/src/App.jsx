import "./App.css";
import ParentComponent from "./components/ParentComponent";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import LandingPage from "./pages/landing/LandingPage";

function App() {
  return (
    <div className="">
      <Header />
      <LandingPage />
      <ParentComponent />
      <Footer />
    </div>
  );
}

export default App;
