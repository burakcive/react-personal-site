import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Jumbo from './components/Jumbo';
import './App.css';
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <div>
        <NavBar></NavBar>
        <Jumbo></Jumbo>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/blogpost/:id" component={BlogPost} />
            <Route component={NotFound} />
          </Switch>
        </Layout>

        <div style={{ height: "30px", backgroundColor: "#3962ac" }} class="footer fixed-bottom">test</div>

      </div>
    </Router>
  );
}

export default App;
