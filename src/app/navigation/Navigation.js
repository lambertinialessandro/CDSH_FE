import AboutUs from 'app/pages/aboutUs/AboutUs';
import Home from 'app/pages/home/Home';
import Students from 'app/pages/students/Students';
import Team from 'app/pages/team/Team';
import TeamMember from 'app/pages/team/TeamMember';
import Test from 'app/pages/test/Test';
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
        <Route
          path={`*`}
          element={
            <LandingLayout>
              <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/about_us'} element={<AboutUs />} />
                <Route path={'/students'} element={<Students />} />

                <Route path={'/team'} element={<Team />} />
                <Route path={'/team/:memberUrlName'} element={<TeamMember />} />

                <Route path={'/test'} element={<Test />} />
              </Routes>
            </LandingLayout>
          }
        />
      </Routes>
    </>
  );
}

export default Navigation;
