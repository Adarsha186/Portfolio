import React from 'react'
import './styles/third.css';

const Third = () => {
    const projects = [
        {
            title: "Automatic Solar Tracking System",
            desc: "The project is a solar-powered appliance prototype that maximizes sunlight exposure using Light Dependent Resistors and a servo motor to adjust the solar panel. It utilizes C# programming and Raspberry Pi implementation for optimal solar efficiency.",
            link: "https://github.com/Adarsha186"
        },
        {
            title: "Employee Management System",
            desc: "This Java Swing application utilizes Java Ant, Swing, and JDBC libraries to perform CRUD operations on an employee database, which is MySQL-based.",
            link: "https://github.com/Adarsha186/Employee-Management-System"
        },
        {
            title: "Sorting Using Spring",
            desc: "As my first hands on experience in Java Spring Framework, I developed a program that implements sorting algorithms utilizing Spring's dependency injection. I learned about Inversion of Control (IoC) and the ApplicationContext and added relevant annotations such as @Component or @Service, for instantiation and wiring of these components.",
            link: "https://github.com/Adarsha186/Sorting_App_Launcher"
        },
        {
            title: "Disease Spread Prediction",
            desc: "The project aims to predict weekly dengue cases in the city. Through analysis and imputation of 548 missing values out of 1456 rows, the skew was reduced, resulting in 81% prediction accuracy.",
            link: "https://github.com/Adarsha186/projects"
        },
        {
            title: "Graduate School Finder",
            desc: "The capstone project implements a recommendation system for university selection, considering GPA, GRE, IELTS/TOEFL scores, research background, SOPs, and LORs. Achieved a prediction accuracy of 83.75% using Python, and deployed as web and Android applications with Android Studio and Java.",
            link: "https://github.com/Adarsha186/Capstone-Web-App"
        }
    ]
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