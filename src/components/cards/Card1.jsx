import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BsFillSquareFill } from "react-icons/bs";

ChartJS.register(ArcElement, Tooltip, Legend);

function Card1() {
  const data = {
    datasets: [
      {
        data: [12, 19],
        backgroundColor: ["#121417", "#768692"],
        borderColor: ["#121417", "#768692"],
        borderWidth: 0.2,
        borderRadius: 20,
        width: 0.2,
      },
    ],
  };

  const options = {
    plugins: {
      doughnutlabel: {
        labels: [
          {
            text: "12k",
            font: {
              size: 18,
            },
            position: "chartCenter",
          },
        ],
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
    spacing: 5,
    cutout: "80%",
    maintainAspectRatio: false,
  };

  return (
    <div className="card bg-yellow-300 p-5">
      <div className="flex justify-between items-center">
        <h4 className="font-semibold text-primary text-sm">Website traffic</h4>
        <span className="text-gray-700 text-xs font-light">More</span>
      </div>
      <div className="pt-2 h-2/3">
        <Doughnut data={data} options={options} className="mx-auto h-1/2" />
      </div>
      <div className="text-xs">
        <div className="flex justify-between items-center p-2 border-b border-b-gray-500">
          <div className="flex gap-2 items-center">
            <p className="text-primary">
              <BsFillSquareFill />
            </p>
            <p>Social Media</p>
          </div>
          <p>78%</p>
        </div>
        <div className="flex justify-between items-center p-2">
          <div className="flex gap-2 items-center">
            <p className="text-secondary">
              <BsFillSquareFill />
            </p>
            <p>Organic marketing</p>
          </div>
          <p>22%</p>
        </div>
      </div>
    </div>
  );
}

export default Card1;
