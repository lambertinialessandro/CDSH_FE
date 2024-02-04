import { Redirect, Route, Switch } from 'react-router-dom';

// components

import Footer from '../components/Footers/Footer.js';
import IndexNavbar from '../components/Navbars/IndexNavbar.js';

// views

import Home from '../views/Home.js';
import Landing from '../views/Landing.js';
import Profile from '../views/Profile.js';

export default function Guest() {
  return (
    <>
      <div className="relative w-full h-full min-h-screen">
        <IndexNavbar fixed />
        <main>
          <div className=" w-full  h-full">
            <Switch>
              <Route path="/landing" exact component={Landing} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/home" exact component={Home} />
              <Redirect from="*" to="/home" />
            </Switch>
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
}
