const Logo = ({ size = "md" }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  return (
    <div className="flex items-center gap-3">
      <div
        className={`${sizes[size]} rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center shadow-md`}
      >
        <span className="text-white font-bold text-xl">
          RF
        </span>
      </div>

      <div>
        <h1 className="font-heading text-2xl font-bold text-white">
          Resume<span className="text-brand-accent">Forge</span>
        </h1>

        <p className="text-xs text-slate-300">
          Forge Your Career Story
        </p>
      </div>
    </div>
  );
};

export default Logo;