import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div className="relative">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successfully!
          </h2>
          <p >Your order has been successfully placed</p>
          <button
            onClick={() => (window.location.href = "/")}
            className=" absolute right-30 p-2 m-5 bg-green-600 text-white font-bold rounded-lg hover:scale-110"
          >
            GO HOME
          </button>
        </div>
      )}
    </div>
  );
};
export default Success;
