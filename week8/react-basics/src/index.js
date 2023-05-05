import React from 'react'; // this enables the project to use Hooks and other exports that React provides
import ReactDOM from 'react-dom/client';
import App from './App'; // App is an exported function from App.js


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
