import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './assets/css/basepage.css';
import useZoomScale from "./hooks/useZoomScale";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProtectedRoute from './components/ProtectedRoute';
import CyberThreats from "./modules/threats/CyberThreats";
import Passwords from "./modules/passwords/Passwords";
import EmailDefence from "./modules/Module-Email/EmailDefence";
import CyberIntro from "./modules/Intro/CyberIntro";
import SafeBrowsing from "./modules/SafeBrowsing/SafeBrowsing";

export default function App() {
  useZoomScale();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="module/cybersecurity-intro" element={<ProtectedRoute><CyberIntro /></ProtectedRoute>} />
            <Route path="module/cyberthreats" element={<ProtectedRoute><CyberThreats /></ProtectedRoute>} />
            <Route path="module/passwords" element={<ProtectedRoute><Passwords /></ProtectedRoute>} />
            <Route path="module/emaildefence" element={<ProtectedRoute><EmailDefence /></ProtectedRoute>} />
            <Route path="module/safebrowsing" element={<ProtectedRoute><SafeBrowsing /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
