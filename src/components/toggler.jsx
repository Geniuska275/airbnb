import SwitchDemo from "./toggle";

export default function Toggler({ setTaxes }) {
  return (
    <div className="flex justify-center items-center  p-4">
      <div className="flex justify-between  items-center rounded-lg border border-gray-200 p-6 gap-7 w-[300px] md:w-[600px] ">
        <div className=" md:flex gap-2 md:items-center">
          <h2 className="font-bold text-black">Display Total Price</h2>
          <h2 className="font-bold text-[#b6b6b6] md:border-l-2 md:p-1">
            Include all fees,before taxes
          </h2>
        </div>
        <SwitchDemo setTaxes={setTaxes} />
      </div>
    </div>
  );
}
