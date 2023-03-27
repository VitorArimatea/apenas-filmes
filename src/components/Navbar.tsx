import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "../index.css";
import styles from "../styles";

const Navbar = () => {
  return (
    <div>
        <nav id="navbar" className={`${styles.paddingX} py-[10px] flex items-center justify-between bg-stone-700 text-secondary`}>
          <h1 className="flex items-center justify-around w-[15%]"> 
            <BiCameraMovie />
            <Link to="/"> Apenas Filmes</Link>
          </h1>
          <form>
            <input type="text" placeholder="Buscar filme" className="bg-transparent outline-none" />
            <button type="submit">
              <BiSearchAlt2 />
            </button>
          </form>
        </nav>
    </div>
  );
};

export default Navbar;