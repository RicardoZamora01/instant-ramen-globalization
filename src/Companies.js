import maruchanImg from "./img/maruchan.png"
import sanyoFoodsImg from "./img/sanyo.jpeg"
import maggiNoodles from "./img/maggi-noodles.jpg"

const Companies = () => {
    const companies = [
        {name: "Maruchan", image: maruchanImg, 
        story: "Maruchan's parent company, Toyo Suisan was founded in 1953 by Kazuo Mori. Toyo Suisan was primarily a small, frozen fish distributorship in Tokyo. In 1961, Toyo Suisan branched out to the instant ramen noodle business. They had the goal of creating a convenient, high quality, and affordable noodles for people of the world. After gaining popularity in Japan, Toyo Suisan looked to challenge the new market overseas. Thus, in 1977 Maruchan, Inc. started manufacturing ramen from Irvine, CA."
        },

        {name: "Sanyo Foods", image: sanyoFoodsImg, story: 
            "Fuji Seimen (Sanyo Foods) was established in Gunma, Japan in 1953 by Fumio Ida and Takeshi Ida. They previously ran a Japanese sake distribution business and eventually expanded to sell instant noodles. Takeshi Ida, traveled around Japan eating ramen in search of the perfect bowl. The original Soy Sauce Flavor Sapporo Ichiban was born out of Ida's obsession with a soy sauce soup in Ramen Alley in Sapporo. In 1961, they renamed their establishment to Sanyo Foods and began manufacturing instant noodles."
        },
        {name: "Nestlé's Maggi Instant Noodles", image: maggiNoodles, story:
            "The MAGGI brand was founded in Switzerland, 1884, by a Swiss entrepreneur Julius Maggi. He had a vision: to make good-tasting and nutritious food accessible to busy, working families. One of his well—known inventions was a powdered pea and bean soup, to provide nutritious, easy to prepare food for busy women who worked in factories and didn't have time to prepare healthy meals. The Maggi soups and seasoning business was later acquired in 1947 by Nestlé. Meanwhile, in Bangladesh, Singapore, New Zealand, and Malaysia, Maggi is known for their instant noodles."
        }
    ]
    return (
        <div data-theme="cyberpunk">
            <h1 className="card-title text-3xl pt-6 ml-6" id="companies">New Instant Ramen Companies in the Market</h1>
            <section className="grid md:grid-cols-3 gap-10 px-5 p-8 mx-auto">
                {companies.map((company) => {
                return (
                    <div className="border-2 hover:shadow-2xl rounded-lg border-rose-700 flex flex-col content-center overflow-hidden justify-between">
                        <div>
                            <img
                            src={company.image}
                            alt={company.name}
                            className="object-cover w-full h-72"
                            />
                            <h1 className="text-xl pt-4 px-2 font-bold">{company.name}</h1>
                            <p className="py-4 px-2">{company.story}</p>
                        </div>
                    </div>
                );
            })}
            </section>
        </div>
     );
}
 
export default Companies;