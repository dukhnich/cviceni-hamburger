import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem';
import './style.css';

export const HomePage = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleButton = () => setMenuOpened(!menuOpened);
  const links = ["Domů", "Naše nabídka", "Náš tým", "Blog", "Kontakt"];
  return (
    <>
      <header>
        <div className={menuOpened ? "menu" : "menu menu--closed"}>
          <button className="menu__btn" onClick={toggleButton}></button>
          <div className="menu__items">
            {links.map(text => <MenuItem text={text} key={text} onSelect={toggleButton}/>)}
          </div>
        </div>
      </header>
      <main>
        <h1>Domů</h1>
      </main>
    </>
  );
};
