import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./page/Home";
import SsePage from "./page/Sse";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sse">SSE</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SSE" element={<SsePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRoute;
