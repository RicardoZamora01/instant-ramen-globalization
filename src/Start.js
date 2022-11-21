import nissin from "./img/nissin-original-ramen.jpeg"
import ramenSalesYear from "./img/ramen-sales-year.png"
import ramenSalesDecade from "./img/ramen-sales-decade.png"


const Start = () => {
    return ( 
        <div data-theme = "cyberpunk" className="card lg:card-side bg-rose-50 shadow-xl">
            <figure><img className="h-fit w-fit" src={nissin} alt="Nissin Chickin Ramen"/></figure>
            <div className="card-body">
                <h1 className="card-title text-3xl" id="start">1958: The Birth of Instant Ramen</h1>
                <p className="">
                    After World-War 2, post-war Japan faced harsh adversity with widespread famine and their worst harvest season in years.
                    As Japan was approaching the brink of mass-starvation, the U.S. emergency aid provided wheat. From the surplus of this 
                    grain, gyoza, and ramen became more popular as "stamina food". 
                    <br /><br />
                    Momofuku Ando questioned why the surplus wheat flour wasn't used to make more accessible noodles that are easy to prepare, 
                    which in turn, could be the solution to Japan's hunger problem.

                    In 1957, Ando set himself five objectives to create the meal that will solve Japan's critical hunger problem.
                    <br /><br /> 
                    <strong>First</strong>,the noodles should be tasty and palatable. 
                    <br />
                    <strong>Second</strong>,they should keep for a long period of time and be easy to store in the kitchen. 
                    <br />
                    <strong>Third</strong>,they should be easy to prepare.
                    <br />
                    <strong>Fourth</strong>,the product should be inexpensive. 
                    <br />
                    <strong>Fifth</strong>,the noodles should be safe and sanitary since they were for human consumption.
                    <br /><br />

                    After a strenuous year of experimenting, Ando realized that his solution was to fry the noodles in order to extract their moisture. 
                    This way, they can be stored for long periods of time and rehyrdrated with water.
                    
                    Thus, in 1958 the world's first instant ramen was introduced as Chickin Ramen and Ando renamed his company to Nissin.
                </p>
                <div className="card-actions justify-end pt-10">
                    <label htmlFor="my-modal-3" className="btn-custom modal-button" data-modal-toggle="my-modal-3">Learn More!</label>
                </div>
            </div>

            {/* The modal popup */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h3 className="text-xl font-bold text-center py-2">Instant Ramen Noodle Sales In Japan <br />(1 Year)</h3>
                    <img src={ramenSalesYear} alt="graph of ramen sales after year-mark" />
                    <p className="py-4">
                        In this image, we can clearly see the instant success of Nissin instant ramen. 
                        In just a year, Nissin was able to reach 13 million in sales in servings.
                        This was simply the beginning for Nissin's success at solving hunger for the starving people.

                    </p>
                </div>
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle bg-white text-black hover:text-white hover:bg-red-600 absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold text-center py-4">Instant Ramen Noodle Sales in Japan <br />(10 Years)</h3>
                    <img src={ramenSalesDecade} alt="graph of ramen sales after decade-mark" />
                    <p className="py-10">
                        In merely a decade, Nissin was estimated to accrue 3.5 billion of sales in servings of instant ramen.
                        As competitors were rising in the instant ramen market, Nissin remained at the top of sales.
                    </p>
                </div>
            </div>
        </div>      
    );
}

export default Start;