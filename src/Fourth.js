import React from 'react';
import './styles/fourth.css';

const Education = () => {
    return (
        <div className='fourth'>
            <div className="education">
                <h1 className="header">Education</h1>
                <div className="education-details">
                    <div className="education-item">
                        <h2>Master of Science, Computer Science</h2>
                        <h3>California State University, East Bay</h3>
                        <p>2024</p>
                        <p>CGPA: 3.85/4</p>
                    </div>
                    <div className="education-item">
                        <h2>Bachelor of Technology, Computer Science and Engineering</h2>
                        <h3>Vellore Institute of Technology, Amaravati, India</h3>
                        <p>2022</p>
                        <p>CGPA: 8.88/10</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
