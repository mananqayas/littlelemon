import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookingpage" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
