// import React, { useState } from "react";
// import PropTypes from "prop-types";

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Static credentials
//     const validUsername = "admin";
//     const validPassword = "1234";

//     if (username === validUsername && password === validPassword) {
//       setError("");
//       onLogin(true); // Authenticate user
//     } else {
//       setError("Invalid username or password");
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100">
//       <div className="p-6 bg-white shadow-lg rounded-lg w-80">
//         <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
//               required
//             />
//           </div>
//           {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// Login.propTypes = {
//   onLogin: PropTypes.func.isRequired,
// };

// export default Login;

import React, { useState } from "react";
import PropTypes from "prop-types";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Static credentials
    const validUsername = "admin";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
      setError("");
      onLogin(true); // Authenticate user
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-lg w-80 sm:w-96 md:w-1/3 lg:w-1/4">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
