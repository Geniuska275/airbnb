import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/card";
import { PiFlag } from "react-icons/pi";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="p-10">
          <div className=" flex-1 md:flex justify-evenly items-center gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className=" flex-1 md:flex justify-evenly items-center gap-6">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="fixed  bottom-5 left-[700px] gap-1 bg-black text-white rounded-full p-2 flex justify-around items-center z-10">
          <h3 className="font-bold text-white">Show map</h3>
          <PiFlag className="text-white" />
        </div>
      </div>
    </>
  );
}

export default App;
