import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { GoogleLogin } from "@react-oauth/google";

export default function AuthPage() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendOtp = async () => {
    setLoading(true);
    setError("");

    try {
      await api.post("/api/auth/otp/send", { contact });
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/api/auth/otp/verify", {
        contact,
        otp,
        name
      });

      localStorage.setItem("accessToken", res.data.accessToken);

      if (res.data.isNewUser) {
        navigate("/complete-profile");
      } else {
        navigate("/");
      }

    } catch (err) {
      setError(err.response?.data?.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const res = await api.post("/api/auth/google", {
        idToken: credentialResponse.credential
      });

      localStorage.setItem("accessToken", res.data.accessToken);

      if (res.data.isNewUser) {
        navigate("/complete-profile");
      } else {
        navigate("/");
      }

    } catch (err) {
      setError("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-md p-6">

        <h2 className="text-2xl font-semibold text-center">FONEST</h2>
        <p className="text-sm text-center text-gray-500 mt-1">
          Login or Create Account
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-2 mt-3 rounded">
            {error}
          </div>
        )}

        {step === 1 && (
          <>
            <input
              type="text"
              placeholder="Enter phone or email"
              className="w-full border rounded-lg p-3 mt-6 focus:outline-none focus:ring-2 focus:ring-black"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />

            <button
              onClick={handleSendOtp}
              disabled={loading}
              className="w-full bg-black text-white p-3 rounded-lg mt-4"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <input
              type="text"
              placeholder="Your Name (first time only)"
              className="w-full border rounded-lg p-3 mt-6"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter 6 digit OTP"
              className="w-full border rounded-lg p-3 mt-3"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button
              onClick={handleVerifyOtp}
              disabled={loading}
              className="w-full bg-black text-white p-3 rounded-lg mt-4"
            >
              {loading ? "Verifying..." : "Verify & Login"}
            </button>

            <button
              onClick={() => setStep(1)}
              className="w-full text-sm text-gray-500 mt-3"
            >
              Change phone/email
            </button>
          </>
        )}

        <div className="mt-6">
          <div className="flex items-center my-4">
            <div className="flex-grow border-t"></div>
            <span className="px-3 text-sm text-gray-400">OR</span>
            <div className="flex-grow border-t"></div>
          </div>

          <GoogleLogin onSuccess={handleGoogleSuccess} />
        </div>

      </div>
    </div>
  );
}
