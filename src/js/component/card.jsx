import React from "react";

const Card = (props) => {
    return (
        <div class="row d-flex justify-content-center">
            <div class="col-11">
            <div className="card" style={{ "width": "18rem;" }}>
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text text-center">{props.description}</p>
                    <a href={props.buttonUrl} className="btn btn-primary btn-block">
                        {props.buttonLabel}
                    </a>
                </div> 
            </div>
            </div>
        </div>
    );
};

export default Card;