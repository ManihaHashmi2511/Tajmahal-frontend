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

  // 🔹 NEW: chart data states
  const [brandStats, setBrandStats] = useState([]);
  const [rankingStats, setRankingStats] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchStats();
  }, []);

  // 🔹 Fetch products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products`);
      setProducts(res.data.products || res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.brand?.toLowerCase().includes(search.toLowerCase()) ||
      product.type?.toLowerCase().includes(search.toLowerCase()),
  );

  // 🔹 Fetch dashboard stats (charts)
  const fetchStats = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products/stats`);

      setBrandStats(res.data.brandChart);
      setRankingStats(res.data.rankingChart);
    } catch (err) {
      console.error("Stats error:", err);
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
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/products/${id}`);

        setProducts((prev) => prev.filter((p) => p._id !== id));
        fetchStats(); // 🔥 refresh charts

        Swal.fire("Deleted!", "Product has been deleted.", "success");
      }
    });
  };

  const recentProducts = [...products]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  const brandFilteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchesBrand = brandFilter === "all" || product.brand === brandFilter;

    return matchesSearch && matchesBrand;
  });

  return (
    <div className="admin-layout">
      <main className="admin-main">
        <div className="admin-content">
          <div className="row mt-5 px-2">
            <div className="col-lg-12">
              <StatsCards products={products} loading={loading} />
            </div>
          </div>

          <div className="row mb-4 px-2">
            <div className="col-lg-7">
              <ProductVisitorsChart />
            </div>
            <div className="col-lg-5">
              <BrandDistributionPie data={brandStats} />
            </div>
          </div>

          <div className="row my-4 px-2">
            <div className="col-lg-12">
              <ProductsRankingChart data={rankingStats} />
            </div>
          </div>

          <RecentProducts
            title="Recent Products"
            products={recentProducts}
            loading={loading}
          />

          {/* Products Header */}
          {/* Products Header */}
          <div className="d-flex justify-content-between bg-white mt-5 p-3 rounded mb-2">
            <h4 className="admin-title">Products</h4>

            <div className="d-flex gap-3 align-items-center">
              {/* Brand Filter */}
              <select
                className="form-select"
                style={{ width: "180px" }}
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
              >
                <option value="all">All Brands</option>
                <option value="Tajmahal">Tajmahal</option>
                <option value="Sweet Times">Sweet Times</option>
                <option value="Besa">Besa</option>
                <option value="Hlu's">Hlu's</option>
              </select>

              {/* Search */}
              <div className="search-pill product-input">
                <input
                  type="search"
                  placeholder="Search product..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <IoSearchOutline />
              </div>

              {/* Add Button */}
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
            products={brandFilteredProducts}
            search={search}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>

        {showModal && (
          <ProductModal
            onClose={() => setShowModal(false)}
            setProducts={setProducts}
            editProduct={editProduct}
            fetchProducts={fetchProducts}
            fetchStats={fetchStats} // 🔥 IMPORTANT
          />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
