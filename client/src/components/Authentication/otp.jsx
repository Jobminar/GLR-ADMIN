import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const OTP = () => {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = (element, index) => {
    if (element.target.value.length <= 1) {
      otp[index] = element.target.value;
      setOtp([...otp]);
    }
    if (element.target.nextSibling) {
      element.target.nextSibling.focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const mobileNumber = location.state.mobileNumber;
    console.log("mobile number is ", mobileNumber);
    try {
      const response = await axios.post(
        "https://glr-be.onrender.com/user/verify-otp",
        { mobileNumber: mobileNumber, otp: otp.join("") }
      );
      console.log("OTP verification response:", response.data);
      if (response.status === 200) {
        console.log("OTP verification successful:", response.data.message);
        navigate("/"); // Navigate to '/' route
      } else {
        console.log("OTP verification failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during OTP verification:", error);
    }
  };

  return (
    <div
      className="flex flex-col justify-center px-6 py-12 lg:px-8 bg-white rounded-md shadow-md w-full max-w-md"
      style={{ borderRadius: "0.375rem" }}
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
        <svg
          className="w-10 h-10 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="124"
          height="124"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
            clipRule="evenodd"
          />
        </svg>

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Enter your OTP
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="otp"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Enter your 4-digit OTP:
            </label>
            <div className="mt-2 flex justify-between">
              {otp.map((data, index) => {
                return (
                  <input
                    key={index}
                    id={`otp_${index}`}
                    name={`otp_${index}`}
                    type="number"
                    inputMode="numeric"
                    pattern="[0-9]{1}"
                    required
                    className="block w-16 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={data}
                    onChange={(e) => handleChange(e, index)}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTP;
