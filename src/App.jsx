import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Vision from "./pages/Vision";
import Mission from "./pages/Mission";
import Products from "./pages/Products";
import Besa from "./pages/Besa";
import Tajmahal from "./pages/Tajmahal";
import Hlu from "./pages/Hlu";
import SweetTime from "./pages/SweetTime";
import Dashboard from "./admin/pages/Dashboard";
import AdminProducts from "./admin/pages/AdminProducts";
import AdminLayout from "./admin/components/AdminLayout";
import AdminTable from "./admin/pages/AdminTable";
import Tea from "./pages/Tea";
import Login from "./admin/pages/Login";
import ProtectedRoute from "./admin/components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />

        {/* Brands Routes */}
        <Route path="/besa-confectionary" element={<Besa />} />
        <Route path="/tajmahal-confectionary" element={<Tajmahal />} />
        <Route path="/hlu-confectionary" element={<Hlu />} />
        <Route path="/sweetTime-confectionary" element={<SweetTime />} />
        <Route path="/tajmahal-tea" element={<Tea />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin/login" element={<Login />} />

        <Route
          path="/admin/Dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        />
        {/* <Route index element={<Dashboard />} /> */}
        <Route path="/admin/Products" element={<AdminProducts />} />
        <Route path="/admin/Table" element={<AdminTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
