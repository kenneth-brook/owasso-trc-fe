import React from "react";
import { Routes, Route, NavLink } from 'react-router-dom';

import Home from "../home/Home";
import SponSales from "../sponSales/SponSales";

function Nav() {
    return (
        <div className="nav">
            <nav>
                <ul>
                    <li>
                        <NavLink className="link" to="/" activeClassName="active">
                            TRC<br />Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/Sponsorship-Sales" activeClassName="active">
                            Sponsorship<br />Sales
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sponsorship-Sales" element={<SponSales />} />
            </Routes>
        </div>
    )
}

export default Nav;