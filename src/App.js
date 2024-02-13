import { Fragment } from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Fragment>
      {/* <Header /> */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
