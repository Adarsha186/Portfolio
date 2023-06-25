import React from 'react'
import './styles/third.css';
import { projects } from './Data';

const Third = () => {
    return (
        <div className="third">
            <div className="projects">
                <h1 className="header"><strong>Projects</strong></h1>
                <div className="project-grid">
                    {projects.map((item, index) => (
                        <div className='project' key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <a href={item.link} target="_blank" className="btn btn-primary">View on GitHub</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Third