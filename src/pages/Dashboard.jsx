import Card1 from "../components/cards/Card1";
import Card2 from "../components/cards/Card2";
import Card3 from "../components/cards/Card3";
import Card4 from "../components/cards/Card4";
import Card5 from "../components/cards/Card5";
import Card6 from "../components/cards/Card6";

function Dashboard() {
  return (
    <div className="h-full dark:bg-gray-100 pb-10">
      <div className="px-10 pt-3 justify-center items-center mx-auto gap-5 lg:gap-10 md:pt-0 grid md:grid-cols-2 lg:grid-cols-3 lg:ml-56 ">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card6 />
      </div>
    </div>
  );
}

export default Dashboard;
