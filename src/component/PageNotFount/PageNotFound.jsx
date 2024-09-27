import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const PageNotFound = ({ children }) => {
  const navigate = useNavigate();
  const [countDown, setCountDown] = useState(5);
  document.title = "Page Not Found";

  useEffect(() => {
    if (countDown < 1) {
      navigate("/");
    }
    const timeout = setTimeout(() => {
      setCountDown((c) => c - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [countDown, navigate]);

  return (
    <div className="md:pt-header_height w-[100%] lg:w-full max-w-[975px] mx-auto my-0 p-0 mt-10">
      <div className="h-[50vh] flex justify-center items-center flex-col ">
        <h1>404</h1>
        <p>
          {children}. Redirecting you back to <Link to="/">home page</Link> in{" "}
          {countDown}
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
