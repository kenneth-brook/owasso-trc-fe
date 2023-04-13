import therm from '../../images/Group 349.png';
import prod from '../../images/Group 350.png';

import React from "react";

function Home() {
    return (
        <div>
            <div className="homeWrap">
                <h1>Total Resource Campaign</h1>
                <p>Obitaspe lendae nobit omnissecta audi ut esti volor mint. Re nem. Ut litibusdam exceatem assima vella consento que lab ium fugitatiatur aute earum volupta spicae optationem. Mendus idusape rnatem.</p>
            </div>
            <div className="mainBody">
                <div className='therm'>
                    <img src={`${therm}`} alt="" />
                </div>
                <div className='prods'>
                    <img src={`${prod}`} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home;