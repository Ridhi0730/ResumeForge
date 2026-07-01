const ResumePage = ({ children }) => {
  return (
    <div
      className="
        bg-white
        w-[794px]
        min-h-[1123px]
        shadow-2xl

        px-12
        py-10
        text-black
        rounded-sm
      "
    >
      {children}
    </div>
  );
};

export default ResumePage;