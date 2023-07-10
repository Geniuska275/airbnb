import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import air from "./airbnb.jpg";
import logo from "./logo512.png";
import b from "./b.jpeg";

export default function Carousel({
  slides,
  autoSlide = false,
  autoSlideInterval,
}) {
  const [curr, setCurr] = useState(0);
  const [show, setShow] = useState(false);
  console.log(slides);

  // const slides = [
  //   "https://plus.unsplash.com/premium_photo-1675616575244-54ab4547a929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fHJvb21zfGVufDB8fHx8MTY4ODk4NTY0NHwx&ixlib=rb-4.0.3&q=80&w=1080",
  //   "https://plus.unsplash.com/premium_photo-1675266640345-29d0e6b554c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fHJvb21zfGVufDB8fHx8MTY4ODk4NTY0NHwx&ixlib=rb-4.0.3&q=80&w=1080",
  //   "https://plus.unsplash.com/premium_photo-1675615648367-a14fc002dded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1208&q=80",
  //   "https://plus.unsplash.com/premium_photo-1675537857054-8c7e518553af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1708&q=80",
  //   "https://plus.unsplash.com/premium_photo-1675615649455-d72efb381550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzR8fHJvb21zfGVufDB8fHx8MTY4ODk4NTY0NHwx&ixlib=rb-4.0.3&q=80&w=1080",
  // ];

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div
      className="overflow-hidden relative rounded-lg shadow"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s) => (
          <img
            src={s}
            alt=".."
            // style={{ width: "100%", objectFit: "contain" }}
          />
        ))}
      </div>
      <div
        className={`${
          show
            ? "absolute inset-0 flex items-center justify-between p-4"
            : "hidden"
        }`}
      >
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/40 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-2 h-2 bg-white rounded-full cursor-pointer
              ${curr === i ? "p-1" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
