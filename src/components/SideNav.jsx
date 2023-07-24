import {
  MdAssignment,
  MdCalendarMonth,
  MdClose,
  MdDashboard,
  MdLabelImportant,
  MdOutlineSettings,
} from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

function SideNav({ show, modeSet, toggleSideNav }) {
  const [activeBtn, SetActiveBtn] = useState([0]);
  const navBtnActive = "bg-gray-900 rounded-xl dark:text-gray-300";

  const onClickActive = (index) => {
    SetActiveBtn([index]);
  };

  const isBtnActive = (index) => activeBtn[0] === index;

  return (
    <div className="relative">
      <div onClick={toggleSideNav} className={`${!show ? 'fixed lg:hidden inset-0 z-10 bg-primary/70' : ''}`}></div>
      <div
        className={` ${
          !show
            ? "relative z-50 flex-shrink-0 overflow-x-hidden h-full"
            : ""
        }`}
      >
        <div className="fixed overflow-x-hidden left-0 w-56 bg-primary h-full pt-7 text-gray-300 font-light border-r-2 border-slate-800 dark:border-slate-500 dark:bg-gray-100 dark:text-primary">
          <div className="font-bold flex justify-between w-full px-5 lg:justify-center items-center text-xl pb-8">
            <span className="flex items-center">
              <MdLabelImportant className="text-yellow-300 text-2xl" />
              <h1>LOGO</h1>
            </span>
            <div className="cursor-pointer lg:hidden" onClick={toggleSideNav}>
            <MdClose className="text-lg text-yellow-300"/>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="/profile.png"
              alt="profile picture"
              width={"120px"}
              height={"120px"}
              className="pb-2"
            />
            <h5 className="text-sm font-bold pb-1">Chris Coner</h5>
            <span className="cursor-pointer border border-gray-300 dark:border-primary rounded-xl text-xs w-10 pl-2">
              Edit
            </span>
          </div>
          <div className="mt-10 flex flex-col justify-center mx-auto px-5">
            <Link
              to="/"
              className={`nav-btn ${isBtnActive(0) ? navBtnActive : ""}`}
              onClick={() => onClickActive(0)}
            >
              {" "}
              <div className="text-lg">
                <MdDashboard />
              </div>{" "}
              Dashboard
            </Link>
            <Link
              to="/activity"
              className={`nav-btn ${isBtnActive(1) ? navBtnActive : ""}`}
              onClick={() => onClickActive(1)}
            >
              {" "}
              <div className="text-lg">
                <MdAssignment />
              </div>{" "}
              Activity
            </Link>
            <Link
              to="/schedule"
              className={`nav-btn ${isBtnActive(2) ? navBtnActive : ""}`}
              onClick={() => onClickActive(2)}
            >
              {" "}
              <div className="text-lg">
                <MdCalendarMonth />
              </div>{" "}
              Schedule
            </Link>
            <Link
              to="/settings"
              className={`nav-btn ${isBtnActive(3) ? navBtnActive : ""}`}
              onClick={() => onClickActive(3)}
            >
              {" "}
              <div className="text-lg">
                <MdOutlineSettings />
              </div>{" "}
              Settings
            </Link>
          </div>
          <div className="flex gap-x-2  absolute bottom-10 w-full justify-center items-center">
            <p className="text-xs font-semibold">Dark</p>
            <div className="space-x-3">
              <label className="relative inline-flex cursor-pointer items-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  onClick={() => modeSet()}
                />
                <div className="h-6 w-11 rounded-full border border-gray-300 bg-yellow-300 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-gray-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-1 peer-focus:ring-transparent peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50"></div>
              </label>
            </div>
            <p className="text-xs font-semibold">Light</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
