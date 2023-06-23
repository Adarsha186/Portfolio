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

export { icons, navIcons };