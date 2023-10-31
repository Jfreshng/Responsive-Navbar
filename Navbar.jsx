import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    return ( 
        <div className="text-white">
            <nav className="flex flex-col md:flex-row md:w-full md:justify-between md:py-5 h-[100vh] w-[60vw] md:h-fit bg-gray-900 md:bg-transparent">
                <h1 className="text-3xl font-bold text-[#00df9a] flex px-4 md:px-4 pt-4 pb-12 md:pt-0">NAVBAR</h1>
                <ul className={`flex flex-col md:flex-row text-xl space-y-10 px-4 md:px-0 md:space-y-0 uppercase md:first-letter:uppercase mx-2 md:mx-0 ${!nav ? 'flex-col':'hidden md:flex'}`}>
                    <li className="md:px-4 border-b border-gray-600 md:border-none">Home</li>
                    <li className="md:px-4 border-b border-gray-600 md:border-none">Company</li>
                    <li className="md:px-4 border-b border-gray-600 md:border-none">Resources</li>
                    <li className="md:px-4 border-b border-gray-600 md:border-none">About</li>
                </ul>

                <div onClick={handleNav} className="md:hidden absolute top-5 right-5">
                    {!nav ? <AiOutlineMenu className="text-2xl"/> : <AiOutlineClose className="text-2xl"/>}
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;