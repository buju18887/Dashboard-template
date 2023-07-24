import { HiDocumentDownload } from "react-icons/hi";
function Card2() {
  return (
    <div className="card bg-[url('assets/Hexagon.svg')] p-7 2xl:p-12">
      <div className="wrapper h-full relative">
        <div className="flex justify-between text-sm items-center">
          <span className="text-gray-400 border bg-tertiary border-gray-400 rounded-3xl py-2 px-4 font-semibold">
            Full report
          </span>
          <p className="text-yellow-300">/ 2023</p>
        </div>
        <div className="text-gray-400 p-0 border absolute bottom-0 w-full bg-tertiary border-gray-400 rounded-xl flex justify-between items-center">
          <div className="text-sm  lg:text-base 2xl:text-lg font-semibold w-[80%] border-r border-gray-400 py-4 px-5">
            Download report
          </div>
          <div className="w-[20%] flex justify-center items-center">
          <a href="" className=" ">
            <HiDocumentDownload className="text-4xl"/>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
