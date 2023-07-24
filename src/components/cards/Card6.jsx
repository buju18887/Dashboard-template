import ReactApexChart from "react-apexcharts";

function Card6() {
  const chartSeries = [
    {
      data: [30, 40, 70, 55],
    },
  ];

  const chartOptions = {
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        borderRadius: 5,
        colors: {
          backgroundBarColors: ["#fff"],
          backgroundBarOpacity: 0.2,
          backgroundBarRadius: 5,
        },
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },

    markers: {
      colors: ["#768692"],
    },
    xaxis: {
      categories: ["50-100", "100-250", "250-500", ">500"],
      labels: {
        colors: ["#768692"],
      },
      axisBorder: {
        color: "#fff",
        show: true,
      },
      axisTicks: {
        color: "#fff",
        show: false,
      },
    },
    yaxis: {
      show: true,
    },
    fill: {
      opacity: 1,
      colors: ["#fde047"],
    },
    responsive: [
      {
        breakpoint: 1499,
        options: {},
      },
    ],
  };

  return (
    <div className="card bg-tertiary p-5">
      <div className="text-sm 2xl:text-base h-[10%] font-semibold text-secondary">
        Customer churn rate
      </div>
      <div className="h-[90%]">
        <ReactApexChart
          type="bar"
          height={'100%'}
          series={chartSeries}
          options={chartOptions}
        />
      </div>
    </div>
  );
}

export default Card6;
