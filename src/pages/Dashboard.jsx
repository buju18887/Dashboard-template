import { useState } from "react";
import TopNav from "../components/TopNav";
import Card1 from "../components/cards/Card1";
import Card2 from "../components/cards/Card2";
import Card3 from "../components/cards/Card3";
import Card4 from "../components/cards/Card4";
import Card5 from "../components/cards/Card5";
import Card6 from "../components/cards/Card6";
import SideNav from "../components/SideNav";

function Dashboard() {
  const [sideNavVisible, SetSideNavVisible] = useState(false)
  const [show, SetShow] = useState(false)

  const toggleSideNav = () => {
    SetSideNavVisible(!sideNavVisible)
    SetShow(!show)
  }
  return (
    <>
      <TopNav toggleSideNav={toggleSideNav}/>
      {sideNavVisible && <SideNav show={show}/>}
      <div className="px-10 pt-3 h-full md:py-0 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-14 md:ml-56 dark:bg-gray-400">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
      </div>
    </>
  );
}

export default Dashboard;
