import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Features from './pages/Features';
import Docs from './pages/Docs';
import Footer from './components/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/docs" element={<Docs />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
export default App;
