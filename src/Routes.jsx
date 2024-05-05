import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                {/* Depois do path adicionar o element={} para indicar para onde sera redirecionado */}
                <Route path='/' element={<Home />} />
            </Routes>
        </Router>
    );
};