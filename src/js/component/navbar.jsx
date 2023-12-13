import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarText">
                    <span className="navbar-text text-white">
                       <strong>Start Bootstrap</strong>
                    </span>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><p class= "text-light"><strong>Home</strong></p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><p class= "text-white">About</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><p class= "text-white">Services</p></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><p class= "text-white">Contact</p></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
