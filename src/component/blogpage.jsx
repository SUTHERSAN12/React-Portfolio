import '../component/style.css'
function Blog(){
    return(
        <section class="container" id="blogs">
        <div className="blogs-content">
            <div className="main-title">
                <h2>My <span>Blogs</span><span class="bg-text">My Blogs</span></h2>
            </div>
            <div className="blogs">
                <div className="blog">
                    <img src="assets/images/websitelike.png" alt=""/>
                    <div className="blog-text">
                        <a href="https://medium.com/@suthersan12/websites-i-like-1aa97df467b0">
                        <h4>
                            Websites I likes
                        </h4>
                    </a>
                        <p>
                           
                        </p>
                    </div>
                </div>
                <div class="blog">
                    <img src="assets/images/travelimg.webp" alt=""/>
                    <div className="blog-text">
                        <a href="https://medium.com/@suthersan12/trips-and-traveling-of-myself-c3b8e52e5291">
                        <h4>
                            Trips and traveling of myself 
                        </h4>
                    </a>
                    </div>
                </div>
                <div className="blog">
                    <img src="assets/images/carrerimg.webp" alt=""/>
                    <div className="blog-text">
                        <a href="https://medium.com/@suthersan12/how-i-choose-my-career-in-engineering-f9fea6de7ddd">
                        <h4>
                            How I choose my career in Engineering
                        </h4>
                    </a>
                        <p>
                            
                        </p>
                    </div>
                </div>
              
            </div>
        </div>
    </section>
    )
};

export default Blog;
