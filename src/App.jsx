import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import WorkflowSnapshot from './pages/WorkflowSnapshot';
import DocCleanup from './pages/DocCleanup';
import StaffTraining from './pages/StaffTraining';
import BehavioralOps from './pages/BehavioralOps';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/workflow-snapshot" element={<WorkflowSnapshot />} />
        <Route path="/services/documentation-cleanup" element={<DocCleanup />} />
        <Route path="/services/staff-training-kit" element={<StaffTraining />} />
        <Route path="/services/behavioral-health-ops" element={<BehavioralOps />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
