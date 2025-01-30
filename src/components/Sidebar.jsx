// import React from "react";
// import { FaBox, FaShoppingCart, FaTachometerAlt, FaUsers, FaUser } from 'react-icons/fa';
// // import { useNavigate } from "react-router-dom";



// const Sidebar=()=>{
//     return <div className='bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300
//    dark:border-gray-600 dark:bg-gray-900 dark:text-white' >
//         <h1 className="text-2x1 font-bold hidden md:block mt-4 text-center italic">Jwellery Shop</h1>
//         <ul className="flex flex-col mt-5 text-xl ">
//             <li className="flex items-center py-3 px-2 space-x-4 hover-rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
//                 <FaTachometerAlt/>
//                 <span className="hidden md:inline ">Dashboard</span>
//             </li>
//             <li className="flex items-center py-3 px-2 space-x-4 hover-rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
//                 <FaShoppingCart/>
//                 <span className="hidden md:inline ">Orders</span>
//             </li>
//             <li className="flex items-center py-3 px-2 space-x-4 hover-rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
//                 <FaUsers/>
//                 <span className="hidden md:inline ">Customers</span>
//             </li>
//             <li className="flex items-center py-3 px-2 space-x-4 hover-rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
//                 <FaUser/>
//                 <span className="hidden md:inline ">Users</span>
//             </li>
//             <li className="flex items-center py-3 px-2 space-x-4 hover-rounded hover:cursor-pointer hover:bg-blue-600 hover:text-white">
//                 <FaBox/>
//                 <span className="hidden md:inline ">Products</span>
//             </li>
           
//         </ul>
//     </div>
// }

// export default Sidebar

import React from "react";
import { FaBox, FaShoppingCart, FaTachometerAlt, FaUsers, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { name: "Orders", icon: <FaShoppingCart />, path: "/orders" },
    { name: "Customers", icon: <FaUsers />, path: "/customers" },
    { name: "Users", icon: <FaUser />, path: "/users" },
    { name: "Products", icon: <FaBox />, path: "/products" },
  ];

  return (
    <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold hidden md:block mt-4 text-center italic">Jwellery Shop</h1>
      <ul className="flex flex-col mt-5 text-xl">
        {menuItems.map((item) => (
          <li key={item.name} className="mb-2">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center py-3 px-2 space-x-4 rounded-md transition duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-600 hover:text-white"
                }`
              }
            >
              {item.icon}
              <span className="hidden md:inline">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
