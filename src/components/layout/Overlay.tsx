import React from "react";

const Overlay = ({ close }: { close: () => void }) => {
  return (
    <div
      className="md:hide-completely fixed top-0 z-20 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.3)] cursor-pointer backdrop-blur-[2px] "
      onClick={close}
    ></div>
  );
};

export default Overlay;
