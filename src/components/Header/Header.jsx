import { Link } from "react-router-dom";
import logo from "./../../assets/Logo.png"

function Header(){
    return(
        <>
            <header className="relative p-6 px-0">
                    <div className="flex items-center justify-between">
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <div>
                            <nav className="space-x-6">
                                <Link to="/">Home</Link>
                                <Link to="/explore-state">Explore States</Link>
                                <Link to="/">Analytics</Link>
                                <Link to="/download">Downloads</Link>
                                <Link to="/contact">Contact</Link>
                            </nav>
                        </div>
                        <div className="relative space-x-4">
                            <Link to="/signin">
                            <button className="border-2 p-2 px-6">
                                <span>Login</span>
                            </button>
                            </Link>
                            <Link to="/signup">
                            <button className="p-2 px-6 bg-[#2D7C59] hover:bg-white hover:border-[#2D7C59] hover:text-black transition-all-linear cursor-pointer text-white border-2 border-[#2D7C59]">
                                <span>Register</span>
                            </button>
                            </Link>
                        </div>
                    </div>
                </header>
        </>
    )
}
export default Header;