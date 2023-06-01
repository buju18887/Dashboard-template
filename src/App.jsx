import { useState } from "react";
import SideNav from "./components/SideNav";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./pages/Settings";
import Activity from "./pages/Activity";
import Schedule from "./pages/Schedule";

function App() {
  const [darkMode, SetDarkMode] = useState(false);

  const modeSet = () => {
    SetDarkMode(!darkMode);
  };
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Router>
        <SideNav modeSet={modeSet} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/activity" element={<Activity />}/>
            <Route path="/schedule" element={<Schedule />}/>
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
