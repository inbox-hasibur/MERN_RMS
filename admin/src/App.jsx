import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000"; // Corrected the variable name to 'url'

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content" style={{ display: 'flex' }}>
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} /> {/* Fixed variable name */}
          <Route path="/list" element={<List url={url} />} /> {/* Fixed variable name */}
          <Route path="/orders" element={<Orders url={url} />} /> {/* Fixed variable name */}
        </Routes>
      </div>
    </div>
  );
};

export default App;