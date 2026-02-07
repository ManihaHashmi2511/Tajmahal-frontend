import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";

const ProductTable = ({
  products = [],
  search = "",
  onEdit = () => {},
  onDelete = () => {}
}) => {
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.brand.toLowerCase().includes(search.toLowerCase()) ||
    p.type.toLowerCase().includes(search.toLowerCase())
  );

  

  return (
    <div className="card p-4 shadow-sm">
      {/* ✅ Responsive wrapper */}
      <div className="admin-table-wrapper">
        <table className="table table-hover align-middle admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th className="hide-mobile">Brand Name</th>
              <th className="hide-mobile">Confectionary Type</th>
              <th className="text-end action-col">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No products found
                </td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="product-img"
                    />
                  </td>

                  <td>{product.title}</td>

                  <td className="hide-mobile">{product.brand}</td>

                  <td className="hide-mobile">{product.type}</td>

                  {/* ✅ Sticky Action Column */}
                  <td className="text-end action-col position-relative">
                    <div className="dropdown">
                      <button
                        className="btn btn-sm action-dot-btn"
                        data-bs-toggle="dropdown"
                      >
                        <IoEllipsisVertical size={20} />
                      </button>

                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <button
                            className="dropdown-item"
                            onClick={() => onEdit(product)}
                          >
                            Edit
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item text-danger"
                            onClick={() => onDelete(product._id)}
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
