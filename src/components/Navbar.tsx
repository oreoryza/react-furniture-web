import React, {useState, useEffect} from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 600) {
      setBgColor("bg-[#286F6C]/[.6] backdrop-blur-xl");
    } else {
      setBgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const resetNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
    <nav className={`fixed top-0 flex justify-between items-center ${bgColor} text-white w-full py-7 lg:px-32 px-6 z-10`}>
      <h3 className="text-3xl font-bold">FurniShop</h3>
      <ul className="md:flex hidden lg:gap-16 gap-4">
        <li className="font-semibold cursor-pointer">
          <a>Home</a>
        </li>
        <li className="cursor-pointer">
          <a>About</a>
        </li>
        <li className="cursor-pointer">
          <a>Features</a>
        </li>
        <li className="cursor-pointer">
          <a>Contact</a>
        </li>
      </ul>
      <button
        onClick={handleClick}
        className="md:hidden flex flex-col justify-center w-11 items-end px-2 py-4 gap-2"
      >
        <div className="h-1 w-full bg-white"></div>
        <div className="h-1 w-4/5 bg-white"></div>
        <div className="h-1 w-full bg-white"></div>
      </button>
    </nav>
    {isOpen && 
    <ul className="fixed left-0 top-0 w-full h-full flex flex-col justify-center items-center bg-white text-black text-xl gap-6 z-20">
      <li className="font-semibold my-3">
        FurniShop
      </li>
      <li onClick={resetNavbar} className="cursor-pointer active:scale-110 duration-200">
        Home
      </li>
      <li onClick={resetNavbar} className="cursor-pointer active:scale-110 duration-200">
        About
      </li>
      <li onClick={resetNavbar} className="cursor-pointer active:scale-110 duration-200">
        Features
      </li>
      <li onClick={resetNavbar} className="cursor-pointer active:scale-110 duration-200">
        Contact
      </li>
      <button onClick={resetNavbar} className="absolute bottom-10">
        <i className="bi bi-x-lg font-bold text-xl"></i>
      </button>
    </ul>
  }
    </>
  );
};

export default Navbar;
