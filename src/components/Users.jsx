import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://bohogurl.org/getUsers");
        console.log(response.data);

        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const openUserModal = (user) => {
    setUserDetails(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setUserDetails(null);
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Users</h2>
      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Pincode</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.phone || "N/A"}</td>
              <td className="border p-2">{user.pincode}</td>
              <td className="border p-2">
                <button
                  onClick={() => openUserModal(user)}
                  className="bg-blue-500 text-black px-2 py-1 rounded-md mr-2"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Viewing User Details */}
      {isModalOpen && userDetails && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-md">
            <h3 className="text-xl mb-4">User Details</h3>
            <p><strong>ID:</strong> {userDetails.id}</p>
            <p><strong>Name:</strong> {userDetails.name}</p>
            <p><strong>Email:</strong> {userDetails.email}</p>
            <p><strong>Phone:</strong> {userDetails.phone || "N/A"}</p>
            <p><strong>Address:</strong> {userDetails.address || "N/A"}</p>
            <p><strong>Pincode:</strong> {userDetails.pincode}</p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
