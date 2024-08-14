import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from "./component/mainpage"
import About from "./component/aboutpage"
import Project from './component/projectpage';
import Blog from './component/blogpage';
import Contact from './component/contactpage';
import Menu from './component/sideicon';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
    <About />
    <Project />
    <Blog />
    <Contact />
    <Menu />
  
  
</React.StrictMode>
);







