import { Route, BrowserRouter, Routes } from "react-router-dom";
import Detail from './pages/detail/detail.componet';
import Form from './pages/form page/form.component';
import Home from "./pages/home/home.component";
import Landing from "./pages/lading page/landing.component"
import './App.css';

function App() {
  const allgames = [];
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail allgames={allgames} />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}




export default App;
