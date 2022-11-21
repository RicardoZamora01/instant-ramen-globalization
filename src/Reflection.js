import global from "./img/global-reflection.png"

const Reflection = () => {
    return (
        <div  className="card w-full bg-base-100 shadow-xl image-full font-mono">
            <figure><img src={global} alt="the world and globalization"/></figure>
            <div className="card-body">
                <h1 className="card-title text-3xl text-white" id="reflection">What does this mean?</h1>
                <h2 className="text-large pb-6 text-white">Key Takeaways</h2>
                <p className="text-white">
                    As depicted throughout the page, instant noodles help many cash-strapped impoverished individuals in maintaining 
                    their low-wage jobs. However, the issue at hand is that is that, while it helps many urban poor people 
                    stay in low-wage jobs, it does not always help them advance from a low-wage position. Furthermore, because 
                    of the aforementioned reasons, we need to be aware that instant noodles <q>not only provision 
                    capitalism; they normalize capitalism.</q><sup>*</sup> This wonderful product has given the working class a way 
                    to make ends meet in the face of adversity, however, this inexpensive grab and go meal essentially keeps the working
                    class, well, working overtime. 

                    <br /><br /><br />
                    
                    Humans are known to love fatty and salty dishes; mix the two to make a delectable instant ramen.
                    The instant noodles are also very satiating since they are fried in oil, which is energy-dense (high in carbs, which keep you full) 
                    and thus high in calories. They are also very high in sodium (1.4 grams, which is way above 50% of the recommended 2.3g daily allowance in the US).
                    The issue with this however is that high rates of sodium intake are linked to high blood pressure and increased risk of 
                    heart disease, stroke, and kidney disease.<sup>*</sup> Given this information, there is a huge health concern for the working class
                    that are likely to consume this product in a regular basis.

                    <br /><br /><br />

                    It's almost as if there are no healthy, nutritious alternatives for the working class as they face financial hardships.
                    As we discussed in class, we are eluded to think that there is another option for low-income, cashconstrained individuals,
                    but we need to question if this is true agency of choosing what to eat and which flavors satiate our palates. For many, this 
                    is one of their only options to get by. Do we have a choice, or unfortunately, has the option been chosen for us and did we
                    develop a dependancy on these meals?


                    <br /><br /><br />

                    There is no ethical mass consumption of goods under capitalism, a system where those on top of the hierarchy benefit
                    from the exploitation of the working class.

                </p>
                <sup className="text-white"><sup>*</sup> Errington, Frederick Karl, et al. <i>The Noodle Narratives: The Global Rise of an Industrial Food into the Twenty-First Century.</i> University of California Press, 2013. </sup>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
}
export default Reflection;