import LandingPage from './assets/images/landing-page.png';
import MovieApp from './assets/images/Movie-app.png';
import GalleryApp from './assets/images/Image-gallery.png'

const logotext = "HASSANAT";
const meta = {
    title: "Hassanat Bello",
    description: "I’m Hassanat Bello, Frontend Developer, based in Nigeria.",
};

const introdata = {
    title: "I’m Hassanat Bello",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I build amazing websites",
    },
    description: "Hassanat Bello is a proficient and detail-oriented Frontend Developer with 1 year of experience, creating innovative and user-friendly websites and web applications. With a deep understanding of modern web development technologies and frameworks, Hassanat is dedicated to developing visually appealing and intuitive interfaces that meet user needs and exceed client expectations.",
    your_img_url: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am a frontend developer with an immense passion and talent in the realm of web development. At the remarkable age of 17 i have showcased an exceptional grasp of modern web technologies.",
};

const skills = [{
        name: "Python",
        value: 40,
    },
    {
        name: "HTML",
        value: 95,
    },
    {
        name: "Javascript",
        value: 40,
    },
    {
        name: "React",
        value: 50,
    },
    {
        name: "CSS",
        value: 85,
    },
];

const services = [{
        title: "Responsive web design",
        description: "Creating aesthetically pleasing and functional designs that work on a variety of devices and screen sizes. This ensures a seamless user experience whether the user is accessing the site on a mobile device, tablet, or desktop.",
    },
    {
        title: " User Interface Development",
        description: "Building interactive and intuitive user interfaces using HTML, CSS, JavaScript, and other frontend technologies, allowing users to interact with web applications efficiently and effectively.",
    },
    {
        title: "Single Page Application Development",
        description: "Developing applications that load a single HTML page and dynamically update the content as the user interacts with the app. This service is essential for creating highly interactive and user-friendly web applications.",
    },
];

const dataportfolio = [{
        img: GalleryApp,
        description: "It is a smart drag and drop image gallery.",
        link: "smart-gallery-zeta.vercel.app",
    },
    {
        img: LandingPage,
        description: "Single page application",
        link: "stage-one-topaz.vercel.app",
    },
    {
        img: MovieApp,
        description: "A movie platform.",
        link: "moviebox-six.vercel.app",
    },
        
];

const contactConfig = {
    YOUR_EMAIL: "hassanatbello93@gmail.com",
    YOUR_FONE: "(234)903-4457-915",
    description: "This is my email and contact info. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Haseenarh",
    linkedin: "https://www.linkedin.com/in/hassanat-bello-199346257/",
    twitter: "https://twitter.com/HassanatBello4",
};
export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};