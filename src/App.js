import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import ProjectGallery from './components/pages/ProjectGallery';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="ProjectGallery" element={<ProjectGallery />} />
          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

