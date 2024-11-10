import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
//import rigoImage from "../../img/starship.jpge"

export const CardComponent = () => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={rigoImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, modi autem accusamus iste nisi alias pariatur, fugiat ipsa illo minima exercitationem sapiente rerum? Tenetur maxime eum voluptatem nisi aliquid in..</p>
                <a href="#" className="btn btn-primary">Find out More!</a>
            </div>
        </div>
    )
};

