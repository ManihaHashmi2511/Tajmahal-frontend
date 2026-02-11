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
  const [brandFilter, setBrandFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

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

  useEffect(() => {
    setCurrentPage(1);
  }, [search, brandFilter]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/products`,
      );
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

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      ?.toLowerCase()
      .includes(search.toLowerCase());
    const matchesBrand = brandFilter === "all" || product.brand === brandFilter;
    return matchesSearch && matchesBrand;
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const paginatedProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // 🔥 SMART PAGINATION LOGIC
  const getPaginationNumbers = () => {
    const pages = [];
    const delta = 1;

    pages.push(1);

    let left = currentPage - delta;
    let right = currentPage + delta;

    if (left > 2) pages.push("...");
    for (let i = Math.max(2, left); i <= Math.min(totalPages - 1, right); i++) {
      pages.push(i);
    }

    if (right < totalPages - 1) pages.push("...");
    if (totalPages > 1) pages.push(totalPages);

    return pages;
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
              products={filteredProducts}
              toggleSidebar={toggleSidebar}
              isSidebarOpen={isSidebarOpen}
            />
            <div className="remain admin-content">
              <div className="container-fluid my-5 ">
                <div className="conatiner my-5">
                  <RecentProducts
                    title="Recent Products"
                    products={recentProducts}
                    loading={loading}
                  />
                </div>
                <div className="container my-5">
                  <div className="d-flex justify-content-between bg-white mt-5 p-3 rounded mb-2">
                    <h4 className="admin-title">Products</h4>

                    <div className="d-flex gap-3 align-items-center">
                      <select
                        className="form-select product-select"
                        value={brandFilter}
                        onChange={(e) => setBrandFilter(e.target.value)}
                      >
                        <option value="all">All Brands</option>
                        <option value="Tajmahal">Tajmahal</option>
                        <option value="Sweet Times">Sweet Times</option>
                        <option value="Besa">Besa</option>
                        <option value="Hlu's">Hlu's</option>
                      </select>

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
                    products={paginatedProducts}
                    search={search}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />

                  {/* 🔥 SMART PAGINATION UI */}
                  <div className="d-flex justify-content-center my-4">
                    <div className="pagination">
                      {getPaginationNumbers().map((page, i) =>
                        page === "..." ? (
                          <span key={i} className="page-dots">
                            ...
                          </span>
                        ) : (
                          <button
                            key={i}
                            onClick={() => setCurrentPage(page)}
                            className={`page-btn ${
                              currentPage === page ? "active" : ""
                            }`}
                          >
                            {page}
                          </button>
                        ),
                      )}
                    </div>
                  </div>
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
