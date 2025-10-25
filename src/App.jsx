import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import AppContent from "./AppContent.jsx";
import { CartProvider } from "./context/CartContext.jsx";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
