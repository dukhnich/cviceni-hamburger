import { useState } from 'react';
import { MenuItem } from '../../components/MenuItem';
import './style.css';

export const HomePage = () => {
  const links = ["Domů", "Naše nabídka", "Náš tým", "Blog", "Kontakt"];
  const [menuOpened, setMenuOpened] = useState(false);
  const [pageTitle, setPageTitle] = useState(links[0]);
  const toggleButton = () => setMenuOpened(!menuOpened);
  const handleSelect = (text) => {
    setPageTitle(text);
    toggleButton();
  }
  return (
    <>
      <header>
        <div className={menuOpened ? "menu" : "menu menu--closed"}>
          <button className="menu__btn" onClick={toggleButton}></button>
          <div className="menu__items">
            {links.map(text => <MenuItem text={text} key={text} onSelect={handleSelect}/>)}
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};
