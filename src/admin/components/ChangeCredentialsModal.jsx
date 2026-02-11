import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { IoIosArrowRoundBack, IoMdClose } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

const ChangeCredentialsModal = ({ onClose }) => {
  const [step, setStep] = useState(1);

  const [oldEmail, setOldEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const token = sessionStorage.getItem("adminToken");

  const verifyOld = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/verify`,
        { email: oldEmail, password: oldPassword },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      setStep(2);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Incorrect Credentials",
        text: "Please verify your current email and password.",
      });
    }
  };

  const updateCredentials = async () => {
    try {
      await axios.put(
        `${import.meta.env.VITE_API_BASE_URL}/api/admin/update`,
        { newEmail, newPassword },
        { headers: { Authorization: `Bearer ${token}` } },
      );

      Swal.fire({
        icon: "success",
        title: "Credentials Updated Successfully",
        text: "Your credentials have been updated.",
      });

      sessionStorage.removeItem("adminToken");

      setTimeout(() => {
        window.location.href = "/admin/login";
      }, 1500);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: "Failed to update credentials.",
      });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card slide-in">
        {step === 1 ? (
          <div className="login-container2">
            <div className="login-card2">
              <div className="d-flex justify-content-between mb-3">
                <h4>Verify Current Credentials</h4>
                <span>
                  <IoMdClose className="fs-4" style={{cursor:'pointer'}} onClick={onClose} />
                </span>
              </div>

              <div className="d-flex flex-column gap-1 mb-2">
                <label className="fs-6 fw-medium">Current Email</label>
                <input
                  placeholder="Enter Email"
                  value={oldEmail}
                  onChange={(e) => setOldEmail(e.target.value)}
                />
              </div>

              <div className="d-flex flex-column gap-1 mb-2">
                <label className="fs-6 fw-medium">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>

              <button className="next-button mt-2" onClick={verifyOld}>
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="login-container2">
            <div className="login-card2">
              <div className="d-flex justify-content-between mb-4">
                <span>
                  <IoArrowBack className="fs-4" style={{cursor:'pointer'}} onClick={() => setStep(1)} />
                </span>
                <h4>Update Credentials</h4>
              </div>

              <div className="d-flex flex-column gap-1 mb-2">
                <label className="fs-6 fw-medium">New Email</label>
                <input
                  placeholder="Enter New Email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </div>
              <div className="d-flex flex-column gap-1 mb-2">
                <label className="fs-6 fw-medium">New Password</label>
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <button className="next-button" onClick={updateCredentials}>
                Confirm
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangeCredentialsModal;
