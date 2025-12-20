import AboutUs from 'app/pages/aboutUs/AboutUs';
import Aktuelles from 'app/pages/aktuelles/Aktuelles';
import Auditions from 'app/pages/auditions/Auditions';
import Ausbildung from 'app/pages/ausbildung/Ausbildung';
import FAQ from 'app/pages/faq/FAQ';
import AGB from 'app/pages/general/AGB';
import Datenschutz from 'app/pages/general/Datenschutz';
import ErrorPage from 'app/pages/general/ErrorPage';
import Impressum from 'app/pages/general/Impressum';
import Home from 'app/pages/home/Home';
import Project from 'app/pages/projects/Project';
import StudentGroup from 'app/pages/students/StudentGroup';
import Students from 'app/pages/students/Students';
import Team from 'app/pages/team/Team';
import TeamMember from 'app/pages/team/TeamMember';
import TicketShop from 'app/pages/ticketShop/TicketShop';
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

          <Route path={'/projects/:projectUrlId'} element={<Project />} />

          <Route path={'/ausbildung'} element={<Ausbildung />} />

          <Route path={'/auditions'} element={<Auditions />} />

          <Route path={'/aktuelles'} element={<Aktuelles />} />

          <Route path={'/faq'} element={<FAQ />} />

          <Route path={'/datenschutz'} element={<Datenschutz />} />
          <Route path={'/impressum'} element={<Impressum />} />
          <Route path={'/agb'} element={<AGB />} />

          <Route path={'/ticketshop'} element={<TicketShop />} />
          <Route path={'/error'} element={<ErrorPage />} />

          {/* <Route path={'/*'} element={<Navigate to="/" replace />} /> */}
        </Routes>
      </LandingLayout>
    </>
  );
}

export default Navigation;
