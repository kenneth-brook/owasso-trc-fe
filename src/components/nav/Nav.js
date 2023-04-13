import React from "react";
import { Routes, Route, NavLink } from 'react-router-dom';

import Home from "../home/Home";
import SponSales from "../sponSales/SponSales";
import VolSales from "../volSales/VolSales";

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
                    <li>
                        <NavLink className="link" to="/Volunteer-Sales" activeClassName="active">
                            Volunteer<br />Sales
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sponsorship-Sales" element={<SponSales />} />
                <Route path="/Volunteer-Sales" element={<VolSales />} />
            </Routes>
        </div>
    )
}

export default Nav;