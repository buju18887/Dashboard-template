import { HiDocumentDownload } from "react-icons/hi";
function Card2() {
  return (
    <div className="card bg-[url('assets/Hexagon.svg')] p-7">
      <div className="flex justify-between text-sm items-center">
        <span className="text-gray-400 border bg-tertiary border-gray-400 rounded-3xl py-2 px-4 font-semibold">
          Full report
        </span>
        <p className="text-yellow-300">/ 2023</p>
      </div>
      <div className="text-gray-400 border bg-tertiary border-gray-400 rounded-xl flex justify-between mt-36 items-center">
        <div className="text-sm font-semibold border-r border-gray-400 py-4 px-5">
          Download report
        </div>
        <a href="" className="py-4 px-5 pl-7 text-base ">
          <HiDocumentDownload />
        </a>
      </div>
    </div>
  );
}

export default Card2;
