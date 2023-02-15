import React from 'react';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './Routes';
import { DivApp } from './Styles/appStyle';


function App() {



  return (
    <DivApp className="App">
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </DivApp>
  )
}

export default App
