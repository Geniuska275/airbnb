import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function Footer() {
  return (
    <div className="flex justify-center items-center shadow mt-6 p-3 sticky bottom-0 bg-white">
      <div className="mr-[50px]">
        <FiSearch className="text-[#b6b6b6] ml-3 text-2xl " />
        <h5 className="text-[#b6b6b6] font-Poppins">Explore</h5>
      </div>
      <div className="">
        <AiOutlineHeart className="text-[#b6b6b6] ml-3 text-2xl" />
        <h4 className="text-[#b6b6b6]">Wishlist</h4>
      </div>
      <div className=" ml-[50px]">
        <CgProfile className="text-[#b6b6b6] ml-3 text-2xl" />
        <h4 className="text-[#b6b6b6]">Log in</h4>
      </div>
    </div>
  );
}
