import { faFlask, faDatabase, faGraduationCap, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as JavaIcon } from './icons/java.svg';
import { ReactComponent as PythonIcon } from './icons/python.svg';
import { ReactComponent as HtmlIcon } from './icons/html.svg';
import { ReactComponent as CssIcon } from './icons/css.svg';
import { ReactComponent as BootstrapIcon } from './icons/bootstrap.svg';
import { ReactComponent as JsIcon } from './icons/js.svg';
import { ReactComponent as MySqlIcon } from './icons/mysql.svg';
import { ReactComponent as ReactIcon } from './icons/react.svg';
import { ReactComponent as NodeJsIcon } from './icons/nodejs.svg';
import { ReactComponent as ScssIcon } from './icons/scss.svg';
import { ReactComponent as SpringIcon } from './icons/spring.svg';
import { ReactComponent as GitIcon } from './icons/git.svg';

const navIcons = [
    {
        link: '#',
        name: 'Projects',
        icon: faFlask,
    },
    {
        link: '#',
        name: 'Skills',
        icon: faDatabase,
    },
    {
        link: '#',
        name: 'Education',
        icon: faGraduationCap,
    },
    {
        link: '#',
        name: 'Contact',
        icon: faAddressCard,
    },
];

const education = [
    {
        deg: 'Master of Science, Computer Science',
        univ: 'California State University, East Bay',
        year: '2024',
        grade: '3.85/4'
    }, {
        deg: 'Bachelor of Technology, Computer Science and Engineering',
        univ: 'Vellore Institute of Technology, Amaravati, India',
        year: '2022',
        grade: '8.88/4'
    }
];

const icons = [
    { icon: <JavaIcon />, name: 'Java' },
    { icon: <PythonIcon />, name: 'Python' },
    { icon: <HtmlIcon />, name: 'HTML' },
    { icon: <CssIcon />, name: 'CSS' },
    { icon: <BootstrapIcon />, name: 'Bootstrap' },
    { icon: <ScssIcon />, name: 'SCSS' },
    { icon: <JsIcon />, name: 'JavaScript' },
    { icon: <ReactIcon />, name: 'React.js' },
    { icon: <NodeJsIcon />, name: 'Node.js' },
    { icon: <MySqlIcon />, name: 'MySQL' },
    { icon: <SpringIcon />, name: 'Spring' },
    { icon: <GitIcon />, name: 'Git' },
];

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
];

export { icons, navIcons, projects, education };