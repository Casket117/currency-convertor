import { NavLink, Outlet } from "react-router-dom";

import "./header-layout.css";

const setActive = ({isActive}) => isActive ? 'link-active' : 'link';

const HeaderLayout = () => {
    return (
    <>
      <header>
            <NavLink to="/" className={setActive}>Exchange Currency</NavLink>
            <NavLink to="/exchangerates" className={setActive}>Exchange Rates</NavLink>
      </header>

      <Outlet/>

    </>
    )
}

export {HeaderLayout};