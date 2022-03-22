import React from 'react';
import { ToastContainer } from 'react-toastify';
import Calculator from './components/Calculator.jsx';
import './App.css';

function App() {
  const toastAutoCloseTime = 5000;

  return (
    <div className="container">
      <div className="calculator-border">
        <Calculator />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={toastAutoCloseTime}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
