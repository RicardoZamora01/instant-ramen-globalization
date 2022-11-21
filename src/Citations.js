import './App.css';

const Citations = () => {
    const handleClick = () => {
        const element = document.getElementById('hero');
        element.scrollIntoView({behavior: 'smooth'});
    }
    return ( 
        <div data-theme = "cyberpunk" className="card lg:card-side bg-rose-50 shadow-xl">
            <div id="citations" className="card-body">
                <h1 className="card-title text-4xl pb-6 text-black">Works Cited</h1>
                <p className="px-10 pb-10 text-black text-xl font-bold">
                    "About Us - Momofuku Ando's Dream." <i>Nissin</i>, 12 Nov. 2022, <a target={"_blank"} rel="noreferrer" href="https://nissinfoods.com/our-story">https://nissinfoods.com/our-story</a>. 
                    <br /><br />
                    Arumugam, Nadia. "How Japan Learned to Love Wheat Instead of Rice." <i>Slate Magazine</i>, Slate, 2 Apr. 2012, <a target={"_blank"} rel="noreferrer" href="https://slate.com/human-interest/2012/04/wheat-in-japan-how-the-nation-learned-to-love-the-american-grain-instead-of-rice.html">https://slate.com/human-interest/2012/04/wheat-in-japan-how-the-nation-learned-to-love-the-american-grain-instead-of-rice.html</a>.
                    <br /><br />
                    Errington, Frederick Karl, et al. <i>The Noodle Narratives: The Global Rise of an Industrial Food into the Twenty-First Century.</i> University of California Press, 2013.
                    <br /><br />
                    Jeurissen, Bart. "Origins of a Legend: Maggi." <i>Grapefrute.com</i>, 29 Jan. 2021, <a target={"_blank"} rel="noreferrer" href="https://www.grapefrute.com/origins-of-a-legend-maggi/">https://www.grapefrute.com/origins-of-a-legend-maggi/</a>. 
                    <br /><br />
                    "Mexican-Style Maruchan: Japanese Food Overseas as Seen through the Success of an Instant Ramen Brand."" <i>Nippon.com</i>, 30 May 2020, <a href="https://www.nippon.com/en/column/g00287/" target={"_blank"} rel="noreferrer">https://www.nippon.com/en/column/g00287/</a>. 
                    <br /><br />
                    "Nissin History." <i>Nissin Foods Group</i>, <a target={"_blank"} rel="noreferrer" href="https://www.nissin.com/en_jp/about/history">https://www.nissin.com/en_jp/about/history</a>. 
                    <br /><br />
                    "Our Story - Sapporo Ichiban." <i>SANYO FOODS CORP. OF AMERICA</i>, <a href="https://sanyofoodsamerica.com/pages/our-story-sapporo-ichiban" target={"_blank"} rel="noreferrer">https://sanyofoodsamerica.com/pages/our-story-sapporo-ichiban</a>.
                </p>
                <button className="btn-custom" onClick={handleClick}>Back to Top</button>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>   
     );
}
 
export default Citations;