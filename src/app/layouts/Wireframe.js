import { Redirect, Route, Switch } from 'react-router-dom';

import { Box, useTheme } from '@mui/material';

import Navbar from 'app/wireframe/navbar/Navbar';
import Footer from 'app/wireframe/footer/Footer';

import Home from 'app/wireframe/pages/Home';

import School from 'app/wireframe/pages/school/School';
import Staff from 'app/wireframe/pages/school/Staff';
import Faculty from 'app/wireframe/pages/school/Faculty';
import Students from 'app/wireframe/pages/school/Students';
import OwnWork from 'app/wireframe/pages/school/OwnWork';
import FinalProject from 'app/wireframe/pages/school/FinalProject';
import FriendsAndPartners from 'app/wireframe/pages/school/FriendsAndPartners';

import Training from 'app/wireframe/pages/training/Training';
import TrainingStructure from 'app/wireframe/pages/training/TrainingStructure';
import Auditions from 'app/wireframe/pages/training/Auditions';
import InfosForInternationalStudents from 'app/wireframe/pages/training/InfosForInternationalStudents';

import FurtherEducation from 'app/wireframe/pages/furtherEducation/FurtherEducation';

import Blog from 'app/wireframe/pages/blog/Blog';

import Contact from 'app/wireframe/pages/contact/Contact';
import Newsletter from 'app/wireframe/pages/contact/Newsletter';

export default function Wireframe() {
  const theme = useTheme();

  return (
    <>
      <Box className="relative w-full h-full min-h-screen">
        <Navbar fixed />
        <main>
          <Box
            className="w-full min-h-screen"
            sx={{ padding: '16px', background: theme.palette.background.light_1 }}
          >
            <Switch>
              <Route path="/home" exact component={Home} />

              <Route path="/school" exact component={School} />
              <Route path="/school/staff" exact component={Staff} />
              <Route path="/school/faculty" exact component={Faculty} />
              <Route path="/school/students" exact component={Students} />
              <Route path="/school/own-work" exact component={OwnWork} />
              <Route path="/school/final-projects" exact component={FinalProject} />
              <Route path="/school/fiends-and-partner" exact component={FriendsAndPartners} />

              <Route path="/training" exact component={Training} />
              <Route path="/training/training-structure" exact component={TrainingStructure} />
              <Route path="/training/auditions" exact component={Auditions} />
              <Route
                path="/training/infos-for-international-students"
                exact
                component={InfosForInternationalStudents}
              />

              <Route path="/further-education" exact component={FurtherEducation} />

              <Route path="/blog" exact component={Blog} />

              <Route path="/contact" exact component={Contact} />
              <Route path="/contact/newsletter" exact component={Newsletter} />

              <Redirect from="*" to="/home" />
            </Switch>
          </Box>
          <Footer />
        </main>
      </Box>
    </>
  );
}
