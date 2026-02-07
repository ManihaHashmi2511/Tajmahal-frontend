import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";


const ProductModal = ({ onClose, setProducts, editProduct, fetchStats }) => {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);

  // 🔹 If edit, prefill fields
  useEffect(() => {
    if (editProduct) {
      setTitle(editProduct.title);
      setBrand(editProduct.brand);
      setType(editProduct.type);
    }
  }, [editProduct]);

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("brand", brand);
    formData.append("type", type);

    if (image) {
      formData.append("image", image);
    }

    let res;

    if (editProduct) {
      res = await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/products/${editProduct._id}`,
        formData
      );

      setProducts((prev) =>
        prev.map((p) =>
          p._id === editProduct._id ? res.data.product : p
        )
      );
    } else {
      res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/products`,
        formData
      );

      setProducts((prev) => [res.data.product, ...prev]);
    }

    // 🔥 THIS is the magic
    await fetchStats();

    onClose();
  } catch (error) {
    console.error("SUBMIT ERROR:", error);
  }
};


  return (
    <div
      className="modal fade show d-block"
      style={{ background: "#00000080" }}
    >
      <div className="modal-dialog">
        <div className="modal-content p-4">
          <h5 className="my-3 admin-title">
            {editProduct ? "Edit Product" : "Add Product"}
          </h5>

          <form onSubmit={handleSubmit}>
            <input
              className="form-control mb-3 custom-input" 
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <select
              className="form-control custom-select mb-3"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            >
              <option value="">— Select Brand —</option>
              <option>Besa</option>
              <option>Sweet Times</option>
              <option>Hlu's</option>
              <option>Tajmahal</option>
            </select>

            <select
              className="form-control custom-select mb-3"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="">— Select Confectionary Type —</option>
              <option>Candies</option>
              <option>Bubble Gums</option>
              <option>Chocolates</option>
              <option>Toffees</option>
              <option>Lollipops</option>
              <option>CC Sticks</option>
              <option>Chews</option>
              <option>Chews & Toffees</option>
              <option>Others</option>
            </select>

            <input
              type="file"
              className="form-control mb-3"
              onChange={(e) => setImage(e.target.files[0])}
            />

            <div className="d-flex justify-content-end gap-2">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
