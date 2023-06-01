import ReactApexChart from "react-apexcharts";
import { MdBarChart } from "react-icons/md";

function Card4() {
  const series = [
    {
      name: "Series 1",
      data: [45, 52, 38, 45, 19, 23, 2],
    },
  ];

  const options = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      colors: ["#fde047"],
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
      colors: ["#fde047"],
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
  };

  return (
    <div className="card bg-tertiary p-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2 items-center">
          <div className="bg-primary rounded-lg">
            <p className="text-yellow-300 text-lg p-1">
              <MdBarChart />
            </p>
          </div>
          <h4 className="text-sm font-semibold text-gray-400">ROI</h4>
        </div>
        <p className="text-xs text-gray-600">Details</p>
      </div>
      <div className="block mt-10 mb-0">
        <h1 className="text-5xl text-gray-400">283%</h1>
        <p className="text-sm text-gray-600">Return on Investment</p>
      </div>
      <div className="mt-0 -z-10">
        <ReactApexChart
          type="area"
          options={options}
          series={series}
          height={135}
        />
      </div>
    </div>
  );
}

export default Card4;
