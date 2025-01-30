// import React from "react";
// import Card from './Card'
// import { FaBox, FaShoppingCart, FaUsers } from "react-icons/fa";
// import {dataLine,dataBar} from './../assests/chartData'
// import {Line,Bar} from 'react-chartjs-2'
// import {Chart as ChartJS ,LineElement,BarElement,CategoryScale,LinearScale,PointElement} from 'chart.js'

// ChartJS.register(LineElement,BarElement,CategoryScale,LinearScale,PointElement)

// const Dashboard=()=>{
//     return(
//     <div>
//         <div className="grow p-4 bg-gray ">
//             <h2 className="text-2xl mb-4">Dashboard</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
//                 <Card icon ={<FaShoppingCart/>} title='Orders' value="100"/>
//                 <Card icon ={<FaBox/>} title='Products' value="120"/>
//                 <Card icon ={<FaUsers/>} title='Users' value="30"/>
//         </div> 
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
//             <div className="bg-white p-3 rounded-lg shadow-md dark:bg-gray-800">
//                 <h3 className="text-lg font-semibold mb-4"> Sales Data</h3>
//                 <Line data={dataLine}/>
//             </div>
//             <div className="bg-white p-3 rounded-lg shadow-md dark:bg-gray-800" >
//                 <h3 className="text-lg font-semibold mb-4">Product Data</h3>
//                 <Bar data={dataBar}/>
//             </div>
//         </div>
//     </div>
//     )
// }

// export default Dashboard


import React, { useEffect, useState } from "react";
import Card from './Card'
import { FaBox, FaShoppingCart, FaUsers } from "react-icons/fa";
import { dataLine, dataBar } from './../assests/chartData'
import { Line, Bar } from 'react-chartjs-2'
import { Chart as ChartJS, LineElement, BarElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
import axios from 'axios';

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement)

const Dashboard = () => {
    const [orders, setOrders] = useState(0);
    const [products, setProducts] = useState(0);
    const [users, setUsers] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const ordersResponse = await axios.get('https://bohogurl.org/getOrder');  // replace with your endpoint
                const productsResponse = await axios.get('https://bohogurl.org/product'); // replace with your endpoint
                const usersResponse = await axios.get('https://bohogurl.org/getUsers');  // replace with your endpoint

                setOrders(ordersResponse.data.length);  // assuming the response is an array of orders
                setProducts(productsResponse.data.length);  // assuming the response is an array of products
                setUsers(usersResponse.data.length);  // assuming the response is an array of users
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="grow p-4 bg-gray">
                <h2 className="text-2xl mb-4">Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <Card icon={<FaShoppingCart />} title='Orders' value={orders} />
                    <Card icon={<FaBox />} title='Products' value={products} />
                    <Card icon={<FaUsers />} title='Users' value={users} />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
                <div className="bg-white p-3 rounded-lg shadow-md dark:bg-gray-800">
                    <h3 className="text-lg font-semibold mb-4">Sales Data</h3>
                    <Line data={dataLine} />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-md dark:bg-gray-800">
                    <h3 className="text-lg font-semibold mb-4">Product Data</h3>
                    <Bar data={dataBar} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
