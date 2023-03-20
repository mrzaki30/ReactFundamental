// import logo from './logo.svg';
// import { useState } from 'react'
import './App.css';
import shoppingIcon from './assets/shopping-icon.svg';

function App() {
    return (
        <>
            <nav className="nav" >
                <img className="nav-icon" src={shoppingIcon} alt="Shopping Cart" />
                <h1 className="nav-title">Shopping Cart</h1>
            </nav>
        </>
    );
}

export default App;
