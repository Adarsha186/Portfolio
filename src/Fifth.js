import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import React from 'react';
import './styles/fifth.css';

const Fifth = () => {
    return (
        <section className="contact-section">
            <h2>Contact Me</h2>
            <div className="contact-grid">
                <div className="contact-item">
                    <a href="https://github.com/Adarsha186" target='_blank'>
                        <FaGithub className="contact-icon" />
                        <span>GitHub</span>
                    </a>
                </div>
                <div className="contact-item">
                    <a href="https://linkedin.com/in/yemparala-adarsha" target='_blank'>
                        <FaLinkedin className="contact-icon" />
                        <span>LinkedIn</span>
                    </a>
                </div>
                <div className="contact-item">
                    <a href="mailto:yemparala.adarsha@gmail.com" target='_blank'>
                        <FaEnvelope className="contact-icon" />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Fifth;