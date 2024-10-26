import { headerLogo } from "../assets/images/";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>

        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li
              key={item.label}
              className="font-montserrat leading-normal text-lg text-slate-gray"
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <button className="mr-2">Sign In / Explore Now</button>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25}></img>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
