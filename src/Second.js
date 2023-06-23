import React from 'react';
import './styles/second.css';
import { icons } from './Data';

const Second = () => {
    return (
        <div className="second">
            <div className="skills">
                <h1 className="header">
                    <strong>Technical Skills</strong>
                </h1>
                <div className="logos grid text-center">
                    {icons.map((item, index) => (
                        <section className="ls" key={index}>
                            {React.cloneElement(item.icon, { className: 'svg' })}
                            <span>{item.name}</span>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Second;
