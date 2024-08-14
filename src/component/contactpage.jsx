import '../component/style.css'
function Contact() {
    return(
<section className="container contact" id="contact">
            <div className="contact-container">
                <div className="main-title">
                    <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
                </div>
                <div className="contact-content-con">
                    <div className="left-contact">
                        <h4>Contact me here</h4>
                        <p>
                            
                        </p>
                        <div className="contact-info">
                
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>:suthersanakash18@gmail.com</span>
                                </p>
                            </div>
                            <div className="contact-item">
                                <div className="icon">
                                    <i className="fas fa-globe-africa"></i>
                                    <span>Languages</span>
                                </div>
                                <p>
                                    <span>English, Tamil</span>
                                </p>
                            </div>
                        </div>
                        <div className="contact-icons">
                            <div className="contact-icon">
                                <a href="https://www.instagram.com/__suthersan__" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/suthersan/" target="_blank">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a href="https://github.com/SUTHERSAN12" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="https://medium.com/@suthersan12" target="_blank">
                                    <i className="fab fa-medium-m"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                
                    <div className="right-contact">
                        <form action="https://formsubmit.co/sthersanakash18@gmail.com" method="post" class="contact-form">
                            <div className="input-control i-c-2">
                                <input type="text" required placeholder="YOUR NAME"></input>
                                <input type="email" required placeholder="YOUR EMAIL"></input>
                            </div>
                    
                            
                            <div className="input-control">
                                <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                            </div>
                            <div className="submit-btn">
                                <a href="" class="main-btn">
                                   Submit
                                    <span class="btn-icon"><i class="fas fa-download"></i></span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
)
};

export default Contact;
