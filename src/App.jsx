import './App.css';
import MainPage from './components/pagecatalog/MainPage/MainPage';
import Catalog from './components/pagecatalog/Catalog';
import Header from './Header/Header';
import Contacts from './components/Contacts/Contacts';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Reviews from './components/reviews/Reviews';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={500}
                classNames="fade"
            >
                <Routes location={location}>
                    <Route path="/Coaxis" element={<MainPage />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/reviews" element={<Reviews />} />
                    
                </Routes>
            </CSSTransition>
        </TransitionGroup>
    );
}

function App() {
    return (
        <Router>
            <Header />
            <AnimatedRoutes />
        </Router>
    );
}

export default App;
