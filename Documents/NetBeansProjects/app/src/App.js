import logo from './logo.svg';
import {Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import QuemSomos from './components/pages/QuemSomos';
import Contato from './components/pages/Contato';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/layouts/Footer';
import './App.css';


function App() {

    return (<>
    <h1>Menu Horizontal</h1>
    <Sidebar />
    <Footer/>
    </>
            );
}

export default App;
