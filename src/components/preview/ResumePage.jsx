const ResumePage = ({ children }) => {
  return (
    <div
      className="
        bg-white
        w-[210mm]
        min-h-[297mm]
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