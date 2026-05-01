import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PokemonDetail from "./pages/pokemonDetail";
import Favorites from "./pages/Favorites";
import Form from "./pages/Form";
import { Toaster } from "react-hot-toast";
import NotFound404 from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
