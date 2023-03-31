import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "../index.css";
import styles from "../styles";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    
    if(!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar" className={`${styles.paddingX} py-[10px] flex items-center justify-between bg-stone-800 text-secondary font-poppins`}>
      <h1 className="flex items-center justify-around w-[20%]"> 
      <div className="text-5xl text-emerald-400">
        <BiCameraMovie />
            </div>
            <Link to="/" className="text-emerald-500 text-xl font-semibold"> Apenas Filmes</Link>
          </h1>
          <form onSubmit={handleSubmit} className="flex items-center justify-between">
            <input type="text" placeholder="Buscar um filme" onChange={(e) => setSearch(e.target.value)} value={search} className="w-[20rem] outline-none rounded-lg p-[3px] text-primary" />
          <button type="submit" className="text-xl border-[2px] border-emerald-500 bg-emerald-500 p-[3px] ml-5 rounded-lg hover:bg-transparent duration-150">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};  

export default Navbar;