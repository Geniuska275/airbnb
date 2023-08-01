import React ,{useState}from 'react'

import Card from "../components/card";
import ButtonPills from "../components/button";
import { PiFlag } from "react-icons/pi";
import DefaultCarousel from "../components/carousel";
import StaticCarousel from "../components/carousel";
import Navigation from "../components/navigation";
import Toggler from "../components/toggler";
import Footer from "../components/Footer";
import Filter from "../components/filter";
import { useDiscount } from "aigbojie-discount";
import Header from '../components/Header';

function Home() {
    const [taxes, setTaxes] = useState(true);
  

  const houses = [
    {
      slides: [
        "https://plus.unsplash.com/premium_photo-1675615648367-a14fc002dded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1208&q=80",
        "https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1708&q=80",
        "https://plus.unsplash.com/premium_photo-1675615648367-a14fc002dded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1208&q=80",
        "https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1708&q=80",
        // "https://plus.unsplash.com/premium_photo-1675616575244-54ab4547a929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fHJvb21zfGVufDB8fHx8MTY4ODk4NTY0NHwx&ixlib=rb-4.0.3&q=80&w=1080",
        // "https://plus.unsplash.com/premium_photo-1675266640345-29d0e6b554c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fHJvb21zfGVufDB8fHx8MTY4ODk4NTY0NHwx&ixlib=rb-4.0.3&q=80&w=1080",
      ],
      location: "Nigeria,Lagos",
      distance: "5,400 Kilometers away",
      date: "jul 17-24",
      amount: "$670",
      taxes: "$550",

      time: "Night",
      rate: "4.6",
    },
    {
      slides: [
        "https://plus.unsplash.com/premium_photo-1675615648367-a14fc002dded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1208&q=80",
        "https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1708&q=80",
        "https://plus.unsplash.com/premium_photo-1675615648367-a14fc002dded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1208&q=80",
        "https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1708&q=80",
        // "https://plus.unsplash.com/premium_photo-1675266640345-29d0e6b554c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fHJvb21zfGVufDB8fHx8MTY4ODk4NTY0NHwx&ixlib=rb-4.0.3&q=80&w=1080",
        // "https://plus.unsplash.com/premium_photo-1671228941097-7c1eb7adc4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mjd8fHJvb21zfGVufDB8fHx8MTY4ODk4NTY0NHwx&ixlib=rb-4.0.3&q=80&w=1080",
      ],
      location: "Oyo State,ibadan",
      distance: "9,400 Kilometers away",
      date: "jul 17-24",
      taxes: "$730",

      amount: "$820",
      time: "Night",
      rate: "5.8",
    },
    {
      slides: [
        "https://plus.unsplash.com/premium_photo-1675615648367-a14fc002dded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1208&q=80",
        "https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1708&q=80",
        "https://plus.unsplash.com/premium_photo-1675615648367-a14fc002dded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1208&q=80",
        "https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1708&q=80",
      ],
      location: "Edo state,benin",
      distance: "5,700 Kilometers away",
      date: "jul 17-24",
      taxes: "$560",

      amount: "$680",
      time: "Night",
      rate: "4.9",
    },
    {
      slides: [
        //   "https://plus.unsplash.com/premium_photo-1675616575244-54ab4547a929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fHJvb21zfGVufDB8fHx8MTY4ODk4NTY0NHwx&ixlib=rb-4.0.3&q=80&w=1080",
        //   "https://plus.unsplash.com/premium_photo-1675266640345-29d0e6b554c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fHJvb21zfGVufDB8fHx8MTY4ODk4NTY0NHwx&ixlib=rb-4.0.3&q=80&w=1080",
        "https://plus.unsplash.com/premium_photo-1675615648367-a14fc002dded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1208&q=80",
        "https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1708&q=80",
        "https://plus.unsplash.com/premium_photo-1675615648367-a14fc002dded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1208&q=80",
        "https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1708&q=80",
        // "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      ],
      location: "Abuja",
      distance: "5,400 Kilometers away",
      date: "jul 17-24",
      taxes: "$200",

      amount: "$250",
      time: "Night",
      rate: "5.7",
    },]
  return (
      <div>
        <Header/>
        <Filter />
        <Toggler setTaxes={setTaxes} />
        <div className="p-10">
          <div className=" flex-1 md:flex justify-evenly items-center gap-6">
        <Card houses={houses} taxes={taxes} /> 
          </div>
          <div className=" flex-1 md:flex justify-evenly items-center gap-6">
            <Card houses={houses} taxes={taxes} />
          </div>
        </div>

        <div className=" fixed bottom-2 flex justify-center items-center">
          <div className=" bg-black text-white rounded-full p-2 flex justify-around items-center ">
            <h3 className="font-bold text-white">Show map</h3>
            <PiFlag className="text-white" />
          </div>
        </div>
        <Footer />
      </div> 
  )
}

export default Home