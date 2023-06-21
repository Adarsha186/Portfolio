import React from 'react';
import './styles/first.css';
//import './styles/mediaquery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navIcons } from './Data';

const First = () => {

    return (
        <div className='main'>
            <nav className="navbar navbar-expand-lg navbar-fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand mylogo" href="https://github.com/Adarsha186/Portfolio">
                        Portfolio.
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse p-2 justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            {navIcons.map((item) => (
                                <li className="nav-item px-2" key={item.name}>
                                    <a className="nav-link a1" aria-current="page" href={item.link}>
                                        <FontAwesomeIcon icon={item.icon} />
                                        <span className="navs">{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='first'>
                <div className="intro">
                    <h1>
                        Hi, I'm <article id="name">ADARSHA</article>
                    </h1>
                    <div className="para">
                        <p>
                            Self-driven Computer Science student armed with strong knowledge and experience in developing Java, Web, and
                            Machine Learning applications. Currently, looking for work opportunities.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default First;
