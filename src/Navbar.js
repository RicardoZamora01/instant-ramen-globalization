import ramenMeme from "./img/meme.jpg"

const Navbar = () => {
    return ( 
        <div data-theme = "cyberpunk" className="navbar bg-rose-700 text-primary-content">
            <label htmlFor="my-modal-5" className="btn rounded-full btn-ghost normal-case text-xl text-white" data-modal-toggle="my-modal-5">From Nissin to Maruchan and Beyond...</label>
            <div className="flex justify-end flex-1 px-2">
                <div className="flex items-stretch">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn text-white">Sections</label>
                        <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                            <li><button onClick={() => document.getElementById("start").scrollIntoView({behavior: "smooth"})} className="active:bg-white">The Conception</button></li> 
                            <li><button onClick={() => document.getElementById("companies").scrollIntoView({behavior: "smooth"})} className="active:bg-white">New Companies in the Market</button></li>
                            <li><button onClick={() => document.getElementById("globalization").scrollIntoView({behavior: "smooth"})} className="active:bg-white">Globalization</button></li>
                            <li><button onClick={() => document.getElementById("reflection").scrollIntoView({behavior: "smooth"})} className="active:bg-white">Reflection</button></li>
                            <li><button onClick={() => document.getElementById("citations").scrollIntoView({behavior: "smooth"})} className="active:bg-white">Citations</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* The modal popup */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-5" className="btn btn-sm btn-circle bg-white text-black hover:text-white hover:bg-red-600 absolute right-2 top-2">✕</label>
                    <h3 className="text-2xl font-bold text-center py-2">You have found my Easter Egg!</h3>
                    <p className="text-center pb-3">Here is a instant ramen meme :) </p>
                    <img src={ramenMeme} alt="instant ramen meme" />
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;