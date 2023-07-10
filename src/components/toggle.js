import React from "react";
import * as Switch from "@radix-ui/react-switch";

const SwitchDemo = ({ setTaxes }) => (
  <form>
    <div
      className="flex items-center"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Switch.Root
        className="w-[42px] h-[25px] bg-gray-400 rounded-full relative shadow-[0_0_6px]  focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
        id="airplane-mode"
        // style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
        onClick={() => setTaxes((prev) => !prev)}
      >
        <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
      </Switch.Root>
    </div>
  </form>
);

export default SwitchDemo;
