import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import AppContent from "./AppContent.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
}

export default App;
