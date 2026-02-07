import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiZoomIn } from "react-icons/fi";

export default function ProductTabSection({ brand, enablePagination = false }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Pagination states
  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(1);

  // 1️⃣ Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/products`);
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // 2️⃣ Filter by brand (VERY IMPORTANT)
  const brandProducts = brand
    ? products.filter((p) => p.brand === brand)
    : products;

  // 3️⃣ Filter by type (USED BY TABS)
  const filterByType = (type) => {
    if (type === "ALL") return brandProducts;
    return brandProducts.filter((p) => p.type === type);
  };

  // 4️⃣ Explicit variables (for clarity & future use)
  const candies = filterByType("Candies");
  const chocolates = filterByType("Chocolates");
  const toffees = filterByType("Toffees");
  const lollipops = filterByType("Lollipops");
  const chews = filterByType("Chews");
  const bubbleGums = filterByType("Bubble Gums");
  const ChewToffees = filterByType("Chews & Toffees");
  const compressedCandies = filterByType("Others");
  const sticks = filterByType("CC Sticks");

  // 5️⃣ Tabs config (UI stays same)
  const tabs = [
    {
      id: "tab-1",
      type: "ALL",
      icon: "icons8-candy-100 (1).png",
      label: "All Products",
    },
    {
      id: "tab-2",
      type: "Candies" || "Others",
      icon: "icons8-candy-90.png",
      label: "Candies",
    },
    {
      id: "tab-3",
      type: "Bubble Gums",
      icon: "icon-bubbleGum.png",
      label: "Bubble Gums",
    },
    {
      id: "tab-4",
      type: "Chocolates",
      icon: "icons8-chocolate-96.png",
      label: "Chocolates",
    },
    {
      id: "tab-5",
      type: "Lollipops",
      icon: "icons8-lollipop-90.png",
      label: "Lollipops",
    },
    {
      id: "tab-6",
      type: "Chews",
      icon: "icon-chew.png",
      label: "Chews",
    },
    {
      id: "tab-7",
      type: "Toffees" || "Chews & Toffees",
      icon: "icons8-candy2-90.png",
      label: "Toffees",
    },
  ];

  const getColumnClass = (type) => {
    switch (type) {
      case "Candies":
      case "Toffees":
        return "col-md-3 col-lg-3";

      case "Others":
      case "Chews & Toffees":
        return "col-lg-8";

      case "Lollipops":
        return "col-lg-4";

      case "Chocolates":
        return "col-lg-4";

      case "Bubble Gums":
        return "col-lg-4";

      case "Chews":
        return "col-lg-4";

      case "CC Sticks":
        return "col-lg-2";
    }
  };

  // 6️⃣ Pagination helper
  const paginateProducts = (list) => {
    if (!enablePagination) return list;

    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return list.slice(start, end);
  };

  return (
    <>
      <div className="container-fluid event position-relative pt-5 pb-6">
        <img
          src="/images/wave-040.png"
          alt=""
          className="wavyTopImg"
        />

        <div className="container">
          <div className="text-center wow" data-wow-delay="0.1s">
            <img
              src="/images/can-2.png"
              style={{ height: "96px", width: "140px" }}
            />
            <p className="fs-3 fw-bold crumText mt-2 fst-italic textPrimary">
              Variety Of Products
            </p>
            <h1 className="display-5 mb-5">We Have Multi Flavoured Products</h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="tab-className text-center">
          <div className="container-xxl">
            <ul className="nav nav-pills d-flex flex-wrap justify-content-center mb-5">
              {tabs.map((tab, index) => (
                <li className="service-item" key={tab.id}>
                  <a
                    className={index === 0 ? "active" : ""}
                    data-bs-toggle="pill"
                    href={`#${tab.id}`}
                  >
                    <div className="service-img mx-auto">
                      <img
                        className="rounded-circle w-100 h-100 bg-light p-3"
                        src={`/images/${tab.icon}`}
                        alt={tab.label}
                      />
                    </div>
                  </a>
                  <h5 className="mt-5">{tab.label}</h5>
                </li>
              ))}
            </ul>
          </div>

          {/* Tab Content */}
          <div className="container">
            <div className="tab-content pb-5">
              {tabs.map((tab, index) => {
                const filteredProducts = filterByType(tab.type);
                const finalProducts = paginateProducts(filteredProducts);
                const totalPages = Math.ceil(
                  filteredProducts.length / ITEMS_PER_PAGE,
                );

                return (
                  <div
                    key={tab.id}
                    id={tab.id}
                    className={`tab-pane fade p-0 ${
                      index === 0 ? "show active" : ""
                    }`}
                  >
                    {loading ? (
                      <p className="text-center mt-4">Loading...</p>
                    ) : finalProducts.length === 0 ? (
                      <h4 className="text-center my-5">No product found</h4>
                    ) : (
                      <>
                        <div className="row justify-content-evenly my-5">
                          {finalProducts.map((product) => (
                            <div
                              key={product._id}
                              className={`${getColumnClass(product.type)} mb-5`}
                            >
                              <div className="event-img position-relative">
                                <img
                                  src={product.imageUrl}
                                  alt={product.title}
                                  className="img-fluid rounded w-100"
                                />
                                <div
                                  className="event-overlay d-flex"
                                  onClick={() =>
                                    setSelectedImage(product.imageUrl)
                                  }
                                >
                                  <FiZoomIn className="m-auto icon" />
                                </div>
                              </div>
                              <h4 className="mt-3 text-center">
                                {product.title}
                              </h4>
                            </div>
                          ))}
                        </div>

                        {/* ✅ PAGINATION UI (ONLY MAIN PAGE) */}
                        {enablePagination && totalPages > 1 && (
                          <div className="d-flex justify-content-center flex-wrap pb-lg-3 gap-2 mb-4">
                            {Array.from({ length: totalPages }).map((_, i) => (
                              <button
                                key={i}
                                className={`btn ${
                                  currentPage === i + 1
                                    ? "btn-info text-white "
                                    : "btn-outline-info "
                                }`}
                                onClick={() => setCurrentPage(i + 1)}
                              >
                                {i + 1}
                              </button>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {selectedImage && (
            <div className="image-modal" onClick={() => setSelectedImage(null)}>
              <div
                className="image-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <span
                  className="close-btn"
                  onClick={() => setSelectedImage(null)}
                >
                  &times;
                </span>

                <img src={selectedImage} alt="Zoomed Product" />
              </div>
            </div>
          )}
        </div>

        <img
          src="/images/header-bg-2.png"
          alt=""
          className="whiteHeaderImg"
        />
      </div>
    </>
  );
}
