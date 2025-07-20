import AboutUs from 'app/pages/aboutUs/AboutUs';
import Auditions from 'app/pages/auditions/Auditions';
import Ausbildung from 'app/pages/ausbildung/Ausbildung';
import Home from 'app/pages/home/Home';
import StudentGroup from 'app/pages/students/StudentGroup';
import Students from 'app/pages/students/Students';
import Team from 'app/pages/team/Team';
import TeamMember from 'app/pages/team/TeamMember';
import Test from 'app/pages/test/Test';
import LandingLayout from 'app/shared-components/layout/LandingLayout';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Route, Routes } from 'react-router-dom';

/* 
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}
 */

function Navigation() {
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <LandingLayout>
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about_us'} element={<AboutUs />} />

          <Route path={'/team'} element={<Team />} />
          <Route path={'/team/:memberUrlName'} element={<TeamMember />} />

          <Route path={'/students'} element={<Students />} />
          <Route path={'/students/:studentUrlName'} element={<StudentGroup />} />

          <Route path={'/ausbildung'} element={<Ausbildung />} />

          <Route path={'/auditions'} element={<Auditions />} />

          <Route path={'/test'} element={<Test />} />

          {/* <Route path={'/*'} element={<Navigate to="/" replace />} /> */}
        </Routes>
      </LandingLayout>
    </>
  );
}

export default Navigation;
