import aws from './aws.png'
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import postgresql from './postgresql.png'
import firebase from './firebase.png';
import git from './git.png';
import javascript from './javascript.png';
import react from './react.png';
import nextjs from './nextjs.png';
import tailwind from './tailwind.png';
import typescript from './typescript.png';
import mongodb from './mongodb.png';
import java from './Java.png';
import html from './html.png';
import css from './css.png';
import flutter from './flutter.png';
import springboot from './springboot.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import github from './github.png';
import api from './api.png';
import micro from './micro.png';
import pic from './picc.png';

export const assets = {
    code_icon,
    code_icon_dark,
    aws,
    postgresql,
    firebase,
    git,
    mongodb,
    javascript,
    react,
    typescript,
    nextjs,
    tailwind,
    java,
    html,
    css,
    springboot,
    flutter,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    right_arrow_bold,
    right_arrow_bold_dark,
    github,
    api,
    micro,
    pic
};

export const workData = [
    {
        title: 'Queue-wise',
        description: 'Queue-wise is a powerful queue management application designed to streamline customer flow and reduce wait times. It enables businesses to manage queues efficiently while providing users with real-time updates and seamless navigation through queues',
        techStack: 'frontend, nextjs, TailwindCss, framer',
        link: 'https://queue-wise.com/',
        bgImage: '/queue.png',
    },
    {
        title: 'FoodExpress',
        description: 'FoodExpress is a modern food delivery application that simplifies the ordering process while providing users with a personalized experience. FoodExpress allows users customize their meals with add-ons, and place orders effortlessly. Upon successful order placement, a detailed receipt is generated, ensuring transparency and accuracy.',
        techStack: 'flutter, dart, firebase',
        github: 'https://github.com/Nzubechuk/FoodDeliveryApp',
        bgImage: '/food.png',
    },
    {
        title: 'Defi',
        description: 'DeFi is a sleek and responsive landing page designed for decentralized finance (DeFi) platforms. It provides a seamless user experience, showcasing key features, real-time analytics, and secure financial solutions.',
        techStack: 'frontend, react, css',
        link: 'https://defi-psi-indol.vercel.app/',
        github: 'https://github.com/Nzubechuk/defi',
        bgImage: '/defi.png',
    },
    {
        title: 'WeatherWise',
        description: 'WeatherWise is a sleek and intuitive weather application that provides real-time weather updates for any city worldwide. Using the OpenWeather API, it delivers accurate temperature readings along with the current time and date, helping users stay informed about local weather conditions at a glance.',
        techStack: 'react, api, axios',
        link: 'https://axios-app-drab.vercel.app/',
        github: 'https://github.com/Nzubechuk/axios',
        bgImage: '/axios.png',
    },
    {
        title: 'SmartStock',
        description: 'SmartStock is a robust Java-based inventory management application designed to streamline product tracking and sales. With integrated QR code generation and scanning, businesses can efficiently manage their inventory, reduce errors, and accelerate sales processing.',
        techStack: 'Java, springboot, postgresql, RestApi',
        github: 'https://github.com/Nzubechuk/flip',
        bgImage: '/inventory.jpg',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { 
        icon: assets.code_icon, 
        iconDark: assets.code_icon_dark, 
        title: 'Languages', 
        description: [
            { name: 'Html', image: assets.html }, 
            { name: 'CSS', image: assets.css }, 
            { name: 'Javascript', image: assets.javascript }, 
            { name: 'React Js', image: assets.react }, 
            { name: 'Next Js', image: assets.nextjs }, 
            { name: 'Typescript', image: assets.typescript }, 
            { name: 'Java', image: assets.java }, 
            { name: 'Spring boot', image: assets.springboot }, 
            { name: 'Flutter', image: assets.flutter }, 
            { name: 'TailwindCss', image: assets.tailwind },
            {name: 'Microservices', image: assets.micro},
            {name: 'RestAPIs', image: assets.api},
        ]
    },
    // { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Tech in Computer Science' },
    // { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
   { image: assets.aws,},
   {name: 'Firebase', image: assets.firebase}, 
   {name: 'Mongodb', image: assets.mongodb}, 
   {name: 'Postgresql', image: assets.postgresql}, 
   {name: 'Git', image: assets.git}
];