import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import { IoSearchOutline } from "react-icons/io5";
import Swal from "sweetalert2/dist/sweetalert2.js";
import RecentProducts from "../components/RecentProducts";

export default function AdminTable() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // 🔹 Search
  const [search, setSearch] = useState("");

  // 🔹 Add click
  const handleAddProduct = () => {
    setEditProduct(null);
    setShowModal(true);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products`);
      setProducts(res.data.products || res.data);
    } catch (err) {
      console.error("Fetch products error", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Edit click
  const handleEdit = (product) => {
    setEditProduct(product);
    setShowModal(true);
  };

  // 🔹 Delete click
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`);
        setProducts((prev) => prev.filter((p) => p._id !== id));
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
      }
    });
  };
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const recentProducts = [...products]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  return (
    <div className="admin-wrapper">
      <div className="main-content">
        <div className="flex-container">
          <div className="side">
            <Sidebar isOpen={isSidebarOpen} />
          </div>
          <div className={`main-content ${isSidebarOpen ? "" : "full"}`}>
            <AdminNavbar
              search={search}
              setSearch={setSearch}
              toggleSidebar={toggleSidebar}
              isSidebarOpen={isSidebarOpen}
            />
            <div className="remain admin-content">
              <div className="container-fluid mt-5 ">
                <div className="container my-5">
                  <RecentProducts
                    title="Recent Products"
                    products={recentProducts}
                    loading={loading}
                  />
                </div>
                <div className="container">
                  <div className="d-flex justify-content-between bg-white p-3 rounded mb-3">
                    <h4 className="admin-title">Products</h4>

                    <div className="d-flex gap-3">
                      <div className="search-pill product-input">
                        <input
                          type="search"
                          placeholder="Search product..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                        />
                        <IoSearchOutline />
                      </div>

                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          setEditProduct(null);
                          setShowModal(true);
                        }}
                      >
                        + Add Product
                      </button>
                    </div>
                  </div>

                  <ProductTable
                    products={products}
                    search={search}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />

                  {showModal && (
                    <ProductModal
                      onClose={() => setShowModal(false)}
                      setProducts={setProducts}
                      editProduct={editProduct}
                      fetchProducts={fetchProducts}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
