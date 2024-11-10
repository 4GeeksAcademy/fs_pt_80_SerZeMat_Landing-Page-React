import React from "react";
import "../../styles/jumbotron.css";

export const Jumbo = () => {
    return (
        <div className="container jumbotron__text m-3">
            <div className="jumbotron p-3">
                <h1 className="display-3 text-left">A warm welcome!</h1>
                <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam in ad dolorum itaque? Adipisci dolorem beatae, saepe, officia tenetur dicta harum voluptatum distinctio voluptas necessitatibus odit minima. Consectetur, consequuntur impedit!</p>
                <div className="my-4">
                    <p className="lead">
                        <a className="btn btn-primary btn-lg align-left" href="#" role="button">Call to action!</a>
                    </p>
                </div>    
            </div>
        </div>
    )
};