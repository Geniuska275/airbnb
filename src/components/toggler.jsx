import SwitchDemo from "./toggle";

export default function Toggler({ setTaxes }) {
  return (
    <div className="flex justify-center items-center  p-4">
      <div className="flex justify-between  items-center rounded-md border border-gray-100 p-6 gap-7 w-[600px] ">
        <div className="flex gap-2 items-center">
          <h2 className="font-bold text-black">Display Total Price</h2>
          <h2 className="text-gray-200  border-l-2 p-1">
            Include all fees,before taxes
          </h2>
        </div>
        <SwitchDemo setTaxes={setTaxes} />
      </div>
    </div>
  );
}
