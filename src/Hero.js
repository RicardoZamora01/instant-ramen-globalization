const Hero = () => {
    const handleClick = () => {
        const element = document.getElementById('start');
        element.scrollIntoView({behavior: 'smooth'});
    }

    return ( 
        <div id="hero" data-theme = "cyberpunk" className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://images.unsplash.com/photo-1608280710846-3a5fda1582ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y3VwJTIwbm9vZGxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" className="max-w-sm rounded-lg shadow-2xl border-2 border-rose-700" alt="nissin cup noodles" />
                <div>
                    <h1 className="text-5xl font-bold text-rose-700">The Conception and Globalization of Instant Ramen</h1>
                    <p className="py-6 text-2xl text-black">
                        Welcome to my creative project for Wesleyan's course!
                        <br /> <br />
                        CEAS210-01 From Tea to Connecticut Rolls: Defining Japanese Culture Through Food.
                        <br /><br />
                        Throughout the page, we will uncover the conception of instant ramen, the global impact it has had for 
                        developing countries and low-income communities, and how it normalizes capitalism. 
                    </p>
                    <h3 className="font-bold">Developed by Ricardo Zamora, Wesleyan Class of 2023</h3>
                    <br /><br />
                    <button className="btn-custom" onClick={handleClick}>Get Started!</button>
                </div>
            </div>
        </div>
     );
}
 
export default Hero;