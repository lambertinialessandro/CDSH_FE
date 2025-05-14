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
        <Route path={`*`} element={
          <LandingLayout>
          {/* <Routes>
            </Routes> */}
            <Home />
            </LandingLayout>
        } />
      </Routes>
    </>
  );
}

export default Navigation;
