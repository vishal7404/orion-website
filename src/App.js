import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import React from 'react';
import Footer from './Component/Footer/Footer';
import Registeration from './Pages/Registeration/Registeration';
import ViewPage from './Pages/ViewPage/ViewPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';
function App() {
  return (
    <React.Fragment>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/login" element={<ViewPage />}></Route>
          <Route path="/register" element={<Registeration />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
