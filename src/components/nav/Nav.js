import React from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Home from "../home/Home";
import SponSales from "../sponSales/SponSales";

function Nav() {
    return (
        <div className="nav">
            <nav>
                <ul>
                    <li>
                        <Link className="link" to="/" activeClassName="active">
                            TRC Home
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/Sponsorship-Sales" activeClassName="active">
                            Sponsorship Sales
                        </Link>
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