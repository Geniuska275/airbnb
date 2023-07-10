import Carousel from "./carousel";
import { AiFillStar, AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";
export default function Card({ houses, taxes }) {
  return (
    <>
      {houses.map((house, i) => (
        <div className="m-3" key={i}>
          <div className="relative">
            <Carousel
              slides={house.slides}
              autoslide={false}
              autoSlideInterval={3000}
            />
            <AiTwotoneHeart className="absolute text-gray-500 text-2xl top-7 right-9" />
            <AiOutlineHeart className="absolute text-white text-3xl top-6 right-8" />
          </div>
          <div>
            <div className="flex justify-between items-center mt-2">
              <h2 className="font-bold text-black">{house.location}</h2>
              <h2 className="flex items-center">
                <AiFillStar />
                <span>{house.rate}</span>
              </h2>
            </div>

            <h3 className=" text-gray-500">{house.distance}</h3>
            <h3 className=" text-gray-500">{house.date}</h3>

            {!taxes ? (
              <h3 className="font-bold text-black">
                {house.amount},
                <span className="text-gray-500 ml-1">{house.time}</span>
              </h3>
            ) : (
              <h3 className=" underline tracking-wide">
                <span className="font-bold text-black ">{house.taxes}</span>
                total before taxes
              </h3>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
