import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import PortfolioDetailsPage from "./pages/PortfolioDetailsPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/portfolio-details/:route"
          element={<PortfolioDetailsPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
