import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function Footer() {
  return (
    <div className="flex justify-around items-center shadow mt-6">
      <div className="">
        <FiSearch className="text-[#b6b6b6] ma" />
        <h4 className="text-[#b6b6b6] font-Poppins">Explore</h4>
      </div>
      <div className="flex justify-center items-center">
        <AiOutlineHeart className="text-[#b6b6b6]" />
        <h4 className="text-[#b6b6b6]">Wishlist</h4>
      </div>
      <div className="flex justify-center items-center">
        <CgProfile className="text-[#b6b6b6]" />
        <h4 className="text-[#b6b6b6]">Log in</h4>
      </div>
    </div>
  );
}
