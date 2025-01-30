// import React,{useState} from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import Orders from "./components/Order";
// import Products from "./components/Product";
// import Users from "./components/Users";
// import Login from "./components/Login";

// const App = () => {
//       const [isAuthenticated, setIsAuthenticated] = useState(false);
//       const handleLogin = (status) => {
//             setIsAuthenticated(status);
//             };


//   return (
//     <Router>
//       <div className="flex">
//         <Sidebar />
//         <div className="ml-16 md:ml-64 p-4 grow">
//           <Routes>
//           <Route 
//           path="/" 
//           element={
//             isAuthenticated ? (
//               <Navigate to="/dashboard" />
//             ) : (
//               <Login onLogin={handleLogin} />
//             )
//           }
//         />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/orders" element={<Orders />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/users" element={<Users />} />

//             {/* Add other routes here */}
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Order";
import Products from "./components/Product";
import Users from "./components/Users";
import Login from "./components/Login";
import Navbar from "./components/Navbar"; // Import Navbar

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (status) => {
    setIsAuthenticated(status);
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Set authentication to false
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        {isAuthenticated && <Navbar onLogout={handleLogout} />} {/* Show Navbar only if authenticated */}

        <div className="flex flex-grow">
          {/* Sidebar */}
          {isAuthenticated && <Sidebar />}

          <div className="ml-16 md:ml-64 p-4 grow">
            <Routes>
              <Route
                path="/"
                element={
                  isAuthenticated ? (
                    <Navigate to="/dashboard" />
                  ) : (
                    <Login onLogin={handleLogin} />
                  )
                }
              />
              <Route
                path="/dashboard"
                element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
              />
              <Route
                path="/orders"
                element={isAuthenticated ? <Orders /> : <Navigate to="/" />}
              />
              <Route
                path="/products"
                element={isAuthenticated ? <Products /> : <Navigate to="/" />}
              />
              <Route
                path="/users"
                element={isAuthenticated ? <Users /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
