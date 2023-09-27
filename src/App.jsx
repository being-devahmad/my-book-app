import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import Context from "./components/Context";
import BookDetails from "./pages/Books/BookDetails";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </>
  );
}

export default App;
