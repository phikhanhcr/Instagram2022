import React, { useEffect, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import Loading from './component/Loading/Loading';
import useAuthentication from './customHooks/useAuthentication';
import useNotify from './customHooks/useNotify';
import RouteComponent from './routes/RouteComponent';

function App() {
  useEffect(() => {
    document.title = "Instagram"
  }, [])

  const { isLoading, initialize, isInitialized } = useAuthentication();
  const { initializeNotify } = useNotify()
  useEffect(() => {
    initialize();
  }, [initialize])

  useEffect(() => {
    initializeNotify();
  }, [initializeNotify])

  return (
    <>
      {
        isInitialized && (
          <>
            {
              isLoading ? <Loading /> : ""
            }
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
            <Suspense fallback={
              <Loading />
            }>
              <RouteComponent />
            </Suspense>
          </>)
      }
    </>

  );
}

export default App;
