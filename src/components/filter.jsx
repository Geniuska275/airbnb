import { BiSearch } from "react-icons/bi";

export default function Filter() {
  return (
    <div className="flex justify-center  items-center sticky top-0 p-2 z-10 md:hidden ">
      <div className="flex items-center justify-between shadow-md rounded-full bg-white p-3 w-[350px]">
        <div className="flex items-center">
          <BiSearch className="text-black font-bold" />
          <div className="ml-3">
            <h2>Anywhere</h2>
            <h2 className="text-[#b6b6b6]">Any week . Add guests</h2>
          </div>
        </div>
        <BiSearch className="text-black font-bold" />
      </div>
    </div>
  );
}
