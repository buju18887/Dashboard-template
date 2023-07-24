import { useState } from "react";
import SideNav from "./components/SideNav";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Activity from "./pages/Activity";
import Schedule from "./pages/Schedule";
import TopNav from "./components/TopNav";

function App() {
  const [darkMode, SetDarkMode] = useState(false);
  const [sideNavVisible, SetSideNavVisible] = useState(true);
  const [show, SetShow] = useState(false);

  const toggleSideNav = () => {
    SetSideNavVisible(!sideNavVisible);
    SetShow(!show);
  };

  const modeSet = () => {
    SetDarkMode(!darkMode);
  };
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Router>
          {sideNavVisible && (
            <SideNav show={show} modeSet={modeSet} toggleSideNav={toggleSideNav} />
          )}
          <TopNav toggleSideNav={toggleSideNav} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
