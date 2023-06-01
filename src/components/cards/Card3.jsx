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
      <div className="flex flex-col items-center text-xs py-2">
        <p className="p-2 text-secondary">{weekday}</p>
        <p className="font-bold p-2 pt-0">{day}</p>
      </div>
    );
  };

  return (
    <div className="card p-5 bg-slate-300">
      <div className="flex justify-between">
        <h4 className="text-sm text-primary font-semibold">Bounce Rate</h4>
        <p className="text-lg text-primary">
          <BsFillArrowUpRightCircleFill />
        </p>
      </div>
      <div className="flex gap-x-3 justify-center mt-12">
        <div className="w-14 border border-secondary rounded-xl">
          {formatDate(previousDate)}
        </div>
        <div className="w-14 bg-yellow-300 rounded-xl">
          {formatDate(currentDate)}
        </div>
        <div className="w-14 border border-secondary rounded-xl">
          {formatDate(nextDate)}
        </div>
      </div>
      <div className="flex items-center mt-10 py-2">
        <div className="text-5xl px-3 border-r border-secondary">23%</div>
        <div className="block pl-4">
          <p className="font-semibold text-sm pt-2">-10%</p>
          <p className="text-sm text-secondary pt-1.5">Since last day</p>
        </div>
      </div>
    </div>
  );
}

export default Card3;
