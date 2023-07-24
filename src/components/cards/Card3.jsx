import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

function Card3() {
  const currentDate = new Date();

  const previousDate = new Date();
  previousDate.setDate(currentDate.getDate() - 1);

  const nextDate = new Date();
  nextDate.setDate(currentDate.getDate() + 1);

  const formatDate = (date) => {
    const weekday = date.toLocaleDateString(undefined, { weekday: "short" });
    const day = date.toLocaleDateString(undefined, { day: "numeric" });
    return (
      <div className="flex flex-col items-center text-sm 2xl:text-lg py-2">
        <p className="p-2 text-secondary">{weekday}</p>
        <p className="font-bold p-2 pt-0">{day}</p>
      </div>
    );
  };

  return (
    <div className="card p-5 2xl:p-12 bg-slate-300">
      <div className="wrapper flex flex-col justify-between h-full relative">
        <div className="flex items-center justify-between">
          <h4 className="text-sm 2xl:text-lg text-primary font-semibold">Bounce Rate</h4>
          <p className="text-lg text-primary">
            <BsFillArrowUpRightCircleFill className="text-4xl" />
          </p>
        </div>
        <div className="flex gap-x-3 lg:gap-[10%] justify-center">
          <div className="w-14 2xl:w-24 border border-secondary rounded-xl">
            {formatDate(previousDate)}
          </div>
          <div className="w-14 2xl:w-24 bg-yellow-300 rounded-xl">
            {formatDate(currentDate)}
          </div>
          <div className="w-14 2xl:w-24 border border-secondary rounded-xl">
            {formatDate(nextDate)}
          </div>
        </div>
        <div className="flex items-center w-full justify-center">
          <div className="text-5xl 2xl:text-7xl px-3 border-r border-secondary">23%</div>
          <div className="block pl-4">
            <p className="font-semibold text-sm 2xl:text-lg pt-2">-10%</p>
            <p className="text-sm 2xl:text-lg text-secondary pt-1.5">Since last day</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
