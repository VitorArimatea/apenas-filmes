import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

import styles from "./styles";

function App() {
  return (
    <div className={`${styles.boxWidth}`}>
      <header >
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
