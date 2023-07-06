import React from "react";

export default function Card() {
  return (
    <div className="m-3">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1687360440613-7e002b7261da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60"
          alt="woman"
          className="rounded-md"
        />
      </div>
      <div>
        <h2 className="font-bold text-black">Marbela,spain</h2>
        <h3 className=" text-gray-500">4,6787 Kilometers away</h3>
        <h3 className=" text-gray-500">Jul 17-24</h3>

        <h3 className="font-bold text-black">
          $5,678,<span className="text-gray-500 ml-1">night</span>
        </h3>
      </div>
    </div>
  );
}
