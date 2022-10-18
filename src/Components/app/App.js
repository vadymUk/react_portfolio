import Aside from "../aside/Aside";
import Menu from "../menu/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Promo from "../pages/Promo";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import Skills from "../pages/Skills";
import Price from "../pages/Price";
import Contacts from "../pages/Contacts";
import Page404 from "../pages/404";

function App() {
    return (
        <>
            <Router basename='/react_portfolio'>
                <Aside />
                <Menu />
                <Routes>
                    <Route
                        path='/'
                        element={<Promo />}
                    />
                    <Route
                        path='/about'
                        element={<About />}
                    />
                    <Route
                        path='/portfolio'
                        element={<Portfolio />}
                    />
                    <Route
                        path='/resume'
                        element={<Resume />}
                    />
                    <Route
                        path='/skills'
                        element={<Skills />}
                    />
                    <Route
                        path='/price'
                        element={<Price />}
                    />
                    <Route
                        path='/contacts'
                        element={<Contacts />}
                    />
                    <Route
                        path='*'
                        element={<Page404 />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
