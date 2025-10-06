import { Link } from "react-router-dom";
import logo from "./../../assets/Logo.png";

function Footer(){
    return(
        <>
            
                <footer className="relative p-14 px-0">
                    <div className="flex items-center justify-between">
                        <img src={logo} alt="" />
                        <div>
                            <h2>Quick Link</h2>
                            <nav className="space-x-3">
                                <Link to="/">Explore States</Link>
                                <Link to="/">Downloads</Link>
                                <Link to="/">Contact</Link>
                            </nav>
                        </div>
                        <div className="space-y-2">
                            <h3>Contact info</h3>
                            <p>Example@nia.gov.ng | +234 xxx xxx xxxx</p>
                            <div className="flex items-center space-x-4">
                                <div className="w-[30px] h-[30px] bg-[#E1FEE5] flex items-center justify-center">
                                    <i className="fab fa-facebook text-[#2D7C59]"></i>
                                </div>
                                <div className="w-[30px] h-[30px] text-white bg-[#E1FEE5] flex items-center justify-center">
                                <i className="fab fa-twitter text-[#2D7C59]"></i>
                                </div>
                                <div className="w-[30px] h-[30px] bg-[#E1FEE5] text-white flex items-center justify-center">
                                <i className="fab fa-linkedin text-[#2D7C59]"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
        </>
    )
}
export default Footer;