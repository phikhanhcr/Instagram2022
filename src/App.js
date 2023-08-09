import React, { useEffect, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import Loading from "./component/Loading/Loading";
import useAuthentication from "./customHooks/useAuthentication";
import RouteComponent from "./routes/RouteComponent";

function App() {
  useEffect(() => {
    document.title = "Instagram";
  }, []);

  const { isLoading, initialize, isInitialized } = useAuthentication();
  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <>
      {isInitialized && (
        <>
          {isLoading ? <Loading /> : ""}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            limit={2}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover={false}
          />
          <Suspense fallback={<Loading />}>
            <RouteComponent />
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;
