import Logo from "../common/Logo";
import Button from "../common/Button";

const Header = () => {
  return (
    <header className="bg-brand-primary shadow-md">
      
      <div className="rf-container h-20 flex items-center justify-between">
        
        <Logo />

      </div>

    </header>
  );
};

export default Header;