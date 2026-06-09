import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PokemonProvider } from './context/PokemonContext';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <PokemonProvider>
            <App />
        </PokemonProvider>
    </BrowserRouter>


);
