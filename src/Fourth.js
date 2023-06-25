import React from 'react';
import './styles/fourth.css';
import { education } from './Data';

const Education = () => {
    return (
        <div className='fourth'>
            <div className="education">
                <h1 className="header">Education</h1>
                <div className="education-details">
                    {education.map((education, index) => (
                        <div className='education-item' key={index}>
                            <h2>{education.deg}</h2>
                            <h3>{education.univ}</h3>
                            <p>{education.year}</p>
                            <p>{education.grade}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Education;
