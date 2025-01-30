// import React, { useState } from "react";

// const Products = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "Laptop",
//       price: 1200,
//       image: "laptop.jpg",
//       type: "Electronics",
//       description: "High-performance laptop",
//     },
//     {
//       id: 2,
//       name: "Phone",
//       price: 800,
//       image: "phone.jpg",
//       type: "Electronics",
//       description: "Latest smartphone",
//     },
//     {
//       id: 3,
//       name: "Tablet",
//       price: 500,
//       image: "tablet.jpg",
//       type: "Electronics",
//       description: "Portable tablet for work",
//     },
//   ]);

//   const [form, setForm] = useState({
//     id: "",
//     name: "",
//     price: "",
//     image: "",
//     type: "",
//     description: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle image change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setForm((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
//     }
//   };

//   // Handle add or update product
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isEditing) {
//       // Update existing product
//       setProducts((prev) =>
//         prev.map((product) =>
//           product.id === form.id
//             ? { ...product, ...form }
//             : product
//         )
//       );
//       setIsEditing(false);
//     } else {
//       // Add new product
//       setProducts((prev) => [
//         ...prev,
//         { id: Date.now(), ...form },
//       ]);
//     }
//     setForm({
//       id: "",
//       name: "",
//       price: "",
//       image: "",
//       type: "",
//       description: "",
//     });
//     setIsModalOpen(false); // Close modal after submit
//   };

//   // Handle delete product
//   const handleDelete = (id) => {
//     setProducts((prev) => prev.filter((product) => product.id !== id));
//   };

//   // Handle edit product
//   const handleEdit = (product) => {
//     setForm(product);
//     setIsEditing(true);
//     setIsModalOpen(true);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl mb-4">Products</h2>

//       {/* Add New Product Button */}
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
//       >
//         Add New Product
//       </button>

//       {/* Product Table */}
//       <table className="table-auto w-full bg-white shadow-md rounded-lg">
//         <thead>
//           <tr>
//             <th className="border p-2">Product ID</th>
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Price</th>
//             <th className="border p-2">Image</th>
//             <th className="border p-2">Type</th>
//             <th className="border p-2">Description</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td className="border p-2">{product.id}</td>
//               <td className="border p-2">{product.name}</td>
//               <td className="border p-2">${product.price}</td>
//               <td className="border p-2">
//                 <img src={product.image} alt={product.name} className="w-20" />
//               </td>
//               <td className="border p-2">{product.type}</td>
//               <td className="border p-2">{product.description}</td>
//               <td className="border p-2">
//                 <button
//                   onClick={() => handleEdit(product)}
//                   className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(product.id)}
//                   className="bg-red-500 text-white px-2 py-1 rounded-md"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for Adding/Editing Product */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg w-96 shadow-md">
//             <h3 className="text-xl mb-4">{isEditing ? "Edit Product" : "Add Product"}</h3>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Product Name"
//                   value={form.name}
//                   onChange={handleChange}
//                   required
//                   className="border p-2 rounded-md w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="Price"
//                   value={form.price}
//                   onChange={handleChange}
//                   required
//                   className="border p-2 rounded-md w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={handleImageChange}
//                   className="border p-2 rounded-md w-full"
//                 />
//                 {form.image && (
//                   <img
//                     src={form.image}
//                     alt="Preview"
//                     className="mt-2 w-20 h-20 object-cover"
//                   />
//                 )}
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   name="type"
//                   placeholder="Product Type"
//                   value={form.type}
//                   onChange={handleChange}
//                   required
//                   className="border p-2 rounded-md w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <textarea
//                   name="description"
//                   placeholder="Product Description"
//                   value={form.description}
//                   onChange={handleChange}
//                   required
//                   className="border p-2 rounded-md w-full"
//                 />
//               </div>
//               <div className="flex gap-4">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md"
//                 >
//                   {isEditing ? "Update" : "Add"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="bg-gray-500 text-white px-4 py-2 rounded-md"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;

// import React, { useState, useEffect } from "react";
// import axios from "axios"; // Import axios

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({
//     id: "",
//     name: "",
//     price: "",
//     image: "",
//     type: "",
//     description: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Fetch products from the backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("https://bohogurl.org/product");
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Failed to fetch products", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle image change
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setForm((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
//     }
//   };

//   // Handle add or update product
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const productData = {
//       name: form.name,
//       price: form.price,
//       description: form.description,
//       type: form.type,
//       image_url: form.image, // Assuming image_url is a string representing the image URL or path
//     };

//     try {
//       if (isEditing) {
//         // Update existing product
//         const response = await axios.put(`https://bohogurl.org/product/edit/${form.id}`, productData);
//         const updatedProduct = response.data;
//         setProducts((prev) =>
//           prev.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
//         );
//       } else {
//         // Add new product
//         const response = await axios.post("https://bohogurl.org/product/add", productData);
//         const newProduct = response.data;
//         setProducts((prev) => [...prev, newProduct]);
//       }

//       setForm({
//         id: "",
//         name: "",
//         price: "",
//         image: "",
//         type: "",
//         description: "",
//       });
//       setIsModalOpen(false); // Close modal after submit
//     } catch (error) {
//       console.error("Failed to submit product", error);
//     }
//   };

//   // Handle delete product
//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.delete(`https://bohogurl.org/product/delete/${id}`);
//       if (response.status === 200) {
//         setProducts((prev) => prev.filter((product) => product.id !== id));
//       }
//     } catch (error) {
//       console.error("Failed to delete product", error);
//     }
//   };

//   // Handle edit product
//   const handleEdit = (product) => {
//     setForm(product);
//     setIsEditing(true);
//     setIsModalOpen(true);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl mb-4">Products</h2>

//       {/* Add New Product Button */}
//       <button
//         onClick={() => setIsModalOpen(true)}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
//       >
//         Add New Product
//       </button>

//       {/* Product Table */}
//       <table className="table-auto w-full bg-white shadow-md rounded-lg">
//         <thead>
//           <tr>
//             <th className="border p-2">Product ID</th>
//             <th className="border p-2">Name</th>
//             <th className="border p-2">Price</th>
//             <th className="border p-2">Image</th>
//             <th className="border p-2">Type</th>
//             <th className="border p-2">Description</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product) => (
//             <tr key={product.id}>
//               <td className="border p-2">{product.id}</td>
//               <td className="border p-2">{product.name}</td>
//               <td className="border p-2">${product.price}</td>
//               <td className="border p-2">
//                 <img src={product.image_url} alt={product.name} className="w-20" />
//               </td>
//               <td className="border p-2">{product.type}</td>
//               <td className="border p-2">{product.description}</td>
//               <td className="border p-2">
//                 <button
//                   onClick={() => handleEdit(product)}
//                   className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(product.id)}
//                   className="bg-red-500 text-white px-2 py-1 rounded-md"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modal for Adding/Editing Product */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg w-96 shadow-md">
//             <h3 className="text-xl mb-4">{isEditing ? "Edit Product" : "Add Product"}</h3>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Product Name"
//                   value={form.name}
//                   onChange={handleChange}
//                   required
//                   className="border p-2 rounded-md w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="number"
//                   name="price"
//                   placeholder="Price"
//                   value={form.price}
//                   onChange={handleChange}
//                   required
//                   className="border p-2 rounded-md w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="file"
//                   name="image"
//                   onChange={handleImageChange}
//                   className="border p-2 rounded-md w-full"
//                 />
//                 {form.image && (
//                   <img
//                     src={form.image}
//                     alt="Preview"
//                     className="mt-2 w-20 h-20 object-cover"
//                   />
//                 )}
//               </div>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   name="type"
//                   placeholder="Product Type"
//                   value={form.type}
//                   onChange={handleChange}
//                   required
//                   className="border p-2 rounded-md w-full"
//                 />
//               </div>
//               <div className="mb-4">
//                 <textarea
//                   name="description"
//                   placeholder="Product Description"
//                   value={form.description}
//                   onChange={handleChange}
//                   required
//                   className="border p-2 rounded-md w-full"
//                 />
//               </div>
//               <div className="flex gap-4">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded-md"
//                 >
//                   {isEditing ? "Update" : "Add"}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="bg-gray-500 text-white px-4 py-2 rounded-md"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Products;


import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    id: "",
    name: "",
    price: "",
    image_url: null,
    type: "",
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://bohogurl.org/product");
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm((prev) => ({ ...prev, image_url: file }));
    }
  };
  // Handle edit product
  const handleEdit = (product) => {
    setForm({
      id: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      type: product.type,
      description: product.description,
    });
    setIsEditing(true);
    setIsModalOpen(true);
  };



  // Handle add or update product
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("price", form.price);
    formData.append("description", form.description);
    formData.append("type", form.type);

    // Append image if it exists
    if (form.image_url) {
      formData.append("image_url", form.image_url);
    }

    try {
      if (isEditing) {
        // Update existing product
        const response = await axios.put(
          `https://bohogurl.org/product/edit/${form.id}`,
          formData
        );

        const updatedProduct = response.data;
        setProducts((prev) =>
          prev.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
      } else {
        // Add new product
        const response = await axios.post(
          "https://bohogurl.org/product/add",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        const newProduct = response.data;
        setProducts((prev) => [...prev, newProduct]);
      }

      // Reset form and close modal
      setForm({
        id: "",
        name: "",
        price: "",
        image_url: null,
        type: "",
        description: "",
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to submit product", error);
    }
  };



  // Handle delete product
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://bohogurl.org/product/delete/${id}`
      );
      if (response.status === 200) {
        setProducts((prev) => prev.filter((product) => product.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete product", error);
    }
  };


  return (
    <div>
      <h2 className="text-2xl mb-4">Products</h2>

      {/* Add New Product Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Add New Product
      </button>

      {/* Product Table */}
      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="border p-2">Product ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="border p-2">{product.id}</td>
              <td className="border p-2">{product.name}</td>
              <td className="border p-2">${product.price}</td>
              <td className="border p-2">
                <img
                  src={`https://bohogurl.org/${product.image_url}`}
                  alt={product.name}
                  className="w-20"
                />
              </td>
              <td className="border p-2">{product.type}</td>
              <td className="border p-2">{product.description}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(product)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded-md mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Adding/Editing Product */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-96 shadow-md">
            <h3 className="text-xl mb-4">{isEditing ? "Edit Product" : "Add Product"}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={form.price}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <input
                  type="file"
                  name="image_url"
                  onChange={handleImageChange}
                  className="border p-2 rounded-md w-full"
                />
                {form.image_url && (
                  <img
                    src={
                      typeof form.image_url === "string"
                        ? `https://bohogurl.org/${form.image_url}`
                        : URL.createObjectURL(form.image_url)
                    }
                    alt="Preview"
                    className="mt-2 w-20 h-20 object-cover"
                  />
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="type"
                  placeholder="Product Type"
                  value={form.type}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="description"
                  placeholder="Product Description"
                  value={form.description}
                  onChange={handleChange}
                  required
                  className="border p-2 rounded-md w-full"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  {isEditing ? "Update" : "Add"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
