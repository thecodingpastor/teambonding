const ModalBackground = ({ close }: { close: () => void }) => {
  return (
    <div
      className="fixed z-[1] w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.3)] cursor-pointer backdrop-blur-[2px] "
      onClick={close}
    ></div>
  );
};

export default ModalBackground;
