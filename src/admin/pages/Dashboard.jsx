import { useEffect, useState } from "react";
import axios from "axios";

import StatsCards from "../components/StatsCards";
import RecentProducts from "../components/RecentProducts";
import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import ProductVisitorsChart from "../components/ProductVisitorsChart";
import BrandDistributionPie from "../components/BrandDistributionPie";
import ProductsRankingChart from "../components/ProductsRankingChart";

import { IoSearchOutline } from "react-icons/io5";
import Swal from "sweetalert2/dist/sweetalert2.js";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [brandFilter, setBrandFilter] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const [brandStats, setBrandStats] = useState([]);
  const [rankingStats, setRankingStats] = useState([]);


const fetchStats = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/api/products/stats`
    );

    setBrandStats(res.data.brandChart || []);

    // 🔥 FRONTEND GROUPING (NO BACKEND CHANGE)
    const grouped = {};

    res.data.rankingChart.forEach((item) => {
      // item.name is product title, so we must infer type from products list instead
      // So better approach: use products array you already have
    });

  } catch (err) {
    console.error("Stats error:", err);
  }
};
useEffect(() => {
  const ALLOWED_TYPES = [
    "Candies",
    "Toffees",
    "Bubble Gums",
    "Chocolates",
    "Lollipops",
    "Chews",
  ];

  const typeMap = {};

  products.forEach((p) => {
    if (ALLOWED_TYPES.includes(p.type)) {
      typeMap[p.type] = (typeMap[p.type] || 0) + 1;
    }
  });

  const finalData = Object.keys(typeMap).map((type) => ({
    name: type,
    count: typeMap[type],
  }));

  setRankingStats(finalData);
}, [products]);


  useEffect(() => {
    fetchStats();
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
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(
          `${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`,
        );
        setProducts((prev) => prev.filter((p) => p._id !== id));
        fetchStats();
        Swal.fire("Deleted!", "Product has been deleted.", "success");
      }
    });
  };

  const recentProducts = [...products]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

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

  return (
    <div className="admin-layout">
      <main className="admin-main">
        <div className="admin-content">
          <div className="row mt-5">
            <div className="col-lg-12 d-flex flex-column gap-4">
              <StatsCards products={products} loading={loading} />
            </div>
          </div>
          <div className="row px-2">
            <div className="col-lg-4">
              <BrandDistributionPie data={brandStats} />
            </div>
            <div className="col-lg-8">
              <ProductsRankingChart data={rankingStats} />
            </div>
          </div>

          <RecentProducts
            title="Recent Products"
            products={recentProducts}
            loading={loading}
          />

          <div className="container">
            <div className="d-flex justify-content-between bg-white mt-5 p-3 rounded mb-2">
            <h4 className="admin-title">Products</h4>

            <div className="d-flex gap-3  align-items-center">
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
                className="btn btn-primary "
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
          </div>
        </div>

        {showModal && (
          <ProductModal
            onClose={() => setShowModal(false)}
            setProducts={setProducts}
            editProduct={editProduct}
            fetchProducts={fetchProducts}
            fetchStats={fetchStats}
          />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
