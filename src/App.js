import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import Home from './components/home';
import NotFound from "./components/not-found";

const App = () => {
return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)
}
export default App