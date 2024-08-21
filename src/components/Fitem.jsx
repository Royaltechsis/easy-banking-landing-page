import React from "react";

function Fitem({image, title, desc}) {
    <>
        <div className="item">
            <img src={image} alt="" srcset="" />
            <h3 className="feature-title">{title}</h3>
            <p className="feature-desc">{desc}</p>
        </div>
    </>
}

export default Fitem;