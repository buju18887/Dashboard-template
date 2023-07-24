import { BiSearchAlt } from "react-icons/bi";
import { MdNotificationsNone, MdViewStream } from "react-icons/md";

function TopNav({ toggleSideNav }) {
  return (
    <div className="flex mx-auto justify-center py-5 px-2 md:px-10 gap-x-5 md:justify-between lg:ml-56 bg-tertiary md:bg-primary md:dark:bg-gray-100">
      <div className="hidden  lg:block items-center">
        <h1 className="text-sm text-gray-400 dark:text-primary py-1 lg:text-xl">
          Statistics
        </h1>
      </div>
      <div
        onClick={toggleSideNav}
        className="text-gray-300 flex items-center md:dark:text-primary  cursor-pointer lg:hidden hover:border-yellow-300 hover:text-yellow-300"
      >
        <span className="p-1 md:p-3 border border-gray-300 md:dark:border-primary rounded-md">
          <MdViewStream />
        </span>
      </div>
      <div className="flex items-center gap-x-1 md:ml-5">
        <span className="text-gray-400 text-xl cursor-pointer md:dark:text-primary">
          <BiSearchAlt />
        </span>
        <input
          type="search"
          placeholder="Search something..."
          className="search"
        />
      </div>
      <div className="flex items-center gap-x-4">
        <button className="bg-yellow-300 font-semibold text-sm text-primary px-2 py-1 rounded-md cursor-pointer md:px-4 md:py-3">
          Upgrade
        </button>
        <span className="text-gray-300 md:dark:text-primary p-1 border border-gray-300 md:dark:border-primary rounded-md cursor-pointer md:p-3 hover:border-yellow-300 hover:text-yellow-300">
          <MdNotificationsNone />
        </span>
      </div>
    </div>
  );
}

export default TopNav;
