import {
  MdAssignment,
  MdCalendarMonth,
  MdDashboard,
  MdLabelImportant,
  MdOutlineSettings,
} from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

function SideNav({ show, modeSet }) {
  const [activeBtn, SetActiveBtn] = useState([]);
  const navBtnActive = "bg-gray-900 rounded-xl dark:text-gray-300";

  const onClickActive = (index) => {
    SetActiveBtn([index]);
  };

  const isBtnActive = (index) => activeBtn[0] === index;

  return (
    <div
      className={`md:block ${
        show
          ? "block z-10 flex-shrink-0 overflow-x-hidden h-full md:hidden"
          : "hidden"
      }`}
    >
      <div className="fixed flex-shrink-0 overflow-x-hidden left-0 w-56 bg-primary h-full p-5 pt-7 text-gray-300 font-light border-r-2 border-slate-800 dark:border-slate-500 dark:bg-gray-400 dark:text-primary">
        <div className="font-bold flex justify-items-center items-center gap-x-1 text-xl pb-8 ml-10">
          <span className="text-yellow-300 text-2xl">
            <MdLabelImportant />
          </span>
          <h1>LOGO</h1>
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
        <div className="flex gap-x-2 mt-52 justify-center items-center">
          <p className="text-xs font-semibold">Dark</p>
          <div className="space-x-3">
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                className="peer sr-only"
                onClick={() => modeSet()}
              />
              <div className="h-6 w-11 rounded-full border border-gray-300 bg-yellow-300 after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] hover:bg-gray-200 peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-yellow-300 peer-disabled:cursor-not-allowed peer-disabled:bg-gray-100 peer-disabled:after:bg-gray-50"></div>
            </label>
          </div>
          <p className="text-xs font-semibold">Light</p>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
