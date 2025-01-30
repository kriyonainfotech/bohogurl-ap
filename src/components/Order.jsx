import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://bohogurl.org/getOrder');
        setOrders(response.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const formatCurrency = (value) => {
    return `₹${value.toLocaleString()}`;
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">All Orders</h2>
      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Order Total</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.email}</td>
              <td className="border p-2">{order.phone}</td>
              <td className="border p-2">{order.shipppingAdd}, {order.shipCity}, {order.shipState} - {order.shipZipcode}</td>
              <td className="border p-2">{formatCurrency(order.orderTotal)}</td>
              <td className="border p-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded-md mr-2"
                  onClick={() => handleViewDetails(order)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 className="text-xl mb-4">Order Details</h3>
            <p><strong>Order ID:</strong> {selectedOrder._id}</p>
            <p><strong>Email:</strong> {selectedOrder.email}</p>
            <p><strong>Phone:</strong> {selectedOrder.phone}</p>
            <p><strong>Shipping Address:</strong> {selectedOrder.shipppingAdd}, {selectedOrder.shipCity}, {selectedOrder.shipState} - {selectedOrder.shipZipcode}</p>
            <p><strong>Order Total:</strong> {formatCurrency(selectedOrder.orderTotal)}</p>
            <p><strong>Items:</strong></p>
            <ul>
              {selectedOrder.items && selectedOrder.items.length > 0 ? (
                selectedOrder.items.map((item, index) => (
                  <li key={index}>
                    {item.name} x {item.quantity} - {formatCurrency(item.price * item.quantity)}
                  </li>
                ))) : (<li>No items available</li>
              )}
            </ul>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
