import React from "react";

const RecentProducts = ({
  title = "Recent Products",
  products = [],     // ✅ DEFAULT EMPTY ARRAY
  loading = false,
  showAddButton = false,
  onAddClick
}) => {
  return (
    <div className="container-fluid pb-4">
      <div className="card p-4 shadow-sm admin-table-wrapper">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="admin-title">{title}</h5>

          {showAddButton && (
            <button className="btn btn-primary" onClick={onAddClick}>
              + Add Product
            </button>
          )}
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-muted">No products found</p>
        ) : (
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Brand Name</th>
                <th>Confectionary Type</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p) => (
                <tr key={p._id} className="align-middle">
                  <td>
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      width="70"
                      height="70"
                      style={{ objectFit: "contain", borderRadius: "6px" }}
                    />
                  </td>
                  <td>{p.title}</td>
                  <td>{p.brand}</td>
                  <td>{p.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default RecentProducts;
