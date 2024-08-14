import '../component/style.css'
function Project(){
    return(
        <section className="container" id="portfolio">
        <div className="main-title">
            <h2>My <span>Projects</span><span className="bg-text">My Work</span></h2>
        </div>
        <div className="project">
            <div className="project-item">
    
                <h2> projects</h2>
                <div className="image">
                    <img src="assets/images/Screenshot (63).png" alt=""/>
                </div>
                <div className="hover-items">
                    <h3>Project Source</h3>
                    <div className="icons">
                        <a href="https://github.com/SUTHERSAN12/clone-website" class="icon">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://mindlusterclone.netlify.app/homepage" class="icon">
                            <i className="far fa-file"></i>
                        </a>
                        
                    </div>
                </div>
            </div>
            <div className="project-item">
                <div className="image">
                    <h2>Fuel cost calculator</h2>
                    <img src="assets/images/Screenshot (62).png" alt=""/>
                </div>
                <div className="hover-items">
                    <h3>Project Source</h3>
                    <div className="icons">
                        <a href="https://github.com/SUTHERSAN12/Fuel-cost-calculator" class="icon">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://fuel-cost-finder.netlify.app/" class="icon">
                            <i className="far fa-file"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="project-item">
                <div className="image">
                    <h2>Figma design</h2>
                    <img src="assets/images/Screenshot (61).png" alt=""/>
                </div>
                <div className="hover-items">
                    <h3>Project Source</h3>
                    <div className="icons">
                        <a href="https://www.figma.com/file/GAgbdetBEAiihrrbegSyvh/website-design-Task-1?type=design&node-id=0-1&mode=design" class="icon">
                            <i className="far fa-file"></i>
                        </a>
                        
                    </div>
                </div>
            </div>
            
                           
         </div>
    
    </section>
    )
};

export default Project;
