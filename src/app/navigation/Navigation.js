import Home from 'app/pages/home/Home';
import LandingLayout from 'app/shared-components/layout/LandingLayout';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';

function Navigation() {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/*`} element={
          <LandingLayout>
          {/* <Routes>
            </Routes> */}
            <Home />
            </LandingLayout>
        } />
        <Route path="*" element={<Navigate to={process.env.PUBLIC_URL} />} />
      </Routes>
    </>
  );
}

export default Navigation;
