import { Redirect, Route, Switch } from 'react-router-dom';

// components

import Footer from '../components/Footers/Footer.js';
import IndexNavbar from '../components/Navbars/IndexNavbar.js';

// views

import Home from '../views/Home.js';
import Landing from '../views/Landing.js';
import Profile from '../views/Profile.js';
import FurtherTraining from 'app/views/FurtherTraining.js';
import { Box } from '@mui/material';

export default function Guest() {
  return (
    <>
      <Box className="relative w-full h-full min-h-screen">
        <IndexNavbar fixed />
        <main>
          <Box className="w-full h-full">
            <Switch>
              <Route path="/landing" exact component={Landing} />
              <Route path="/profile" exact component={Profile} />
              <Route path="/home" exact component={Home} />

              <Route path="/FurtherTraining" exact component={FurtherTraining} />

              <Redirect from="*" to="/home" />
            </Switch>
            <Footer />
          </Box>
        </main>
      </Box>
    </>
  );
}
