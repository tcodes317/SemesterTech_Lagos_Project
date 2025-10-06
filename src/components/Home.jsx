import { Link } from "react-router-dom";
import logo from "./../assets/Logo.png";
import flag from "./../assets/flag.png";
import flagLogo from "./../assets/flag-i.png";
import charti from "./../assets/Chart label.png";
import chartii from "./../assets/Chart label (1).png";
import chartiii from "./../assets/Chart label (2).png";
import chartiv from "./../assets/Chart label (3).png";
import chartv from "./../assets/Chart label (4).png";

function Home(){
    return(
        <>
            <div className="relative w-[96%] mx-auto">
                <header className="relative p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <div>
                            <nav className="space-x-6">
                                <Link to="/">Home</Link>
                                <Link to="/">Explore States</Link>
                                <Link to="/">Analytics</Link>
                                <Link to="/">Downloads</Link>
                                <Link to="/">Contact</Link>
                            </nav>
                        </div>
                        <div className="relative space-x-4">
                            <Link to="/signin">
                            <button className="border-2 p-2 px-6">
                                <span>Login</span>
                            </button>
                            </Link>
                            <Link to="/signup">
                            <button className="p-2 px-6 bg-[#2D7C59] text-white border-2 border-[#2D7C59]">
                                <span>Register</span>
                            </button>
                            </Link>
                        </div>
                    </div>
                </header>
                <main className="relative">
                    <section className="flex items-center justify-between my-20">
                        <div className="space-y-6">
                            <h1 className="text-5xl font-bold w-[500px]">Unlock Investment Opportunities Across Nigeria</h1>
                            <p className="text-xl w-[500px]">Discover projects, explore sectors, and connect with government agencies for seamless investment.</p>
                            <div className="flex items-center space-x-2">
                                <button className="p-2.5 border-1 bg-black text-white px-4">
                                    <span>Explore States</span>
                                </button>
                                <button className="p-2.5 border-1 ">
                                    <span>Browse Reports</span>
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative">
                                <img src={flagLogo} alt="" />
                                <img src={charti} alt="" className="absolute top-20 left-60" />
                                <img src={chartii} alt="" className="absolute top-40 right-30" />
                                <img src={chartiii} alt="" className="absolute top-40 right-30" />
                            </div>
                        </div>
                    </section>
                    <section className="flex items-center justify-between my-20 w-full">
                        <div className="w-full">
                            <h1 className="font-bold text-3xl mb-8">Featured Opportunities</h1>
                            <div className="relative space-x-5 flex items-center justify-between"> {/** card flex */}
                                <div className="relative w-full"> {/** Cards */}
                                    <img src="" alt="" className="w-full h-[300px]" />
                                    <div className="space-y-2 mt-2">
                                        <h1 className="text-xl font-bold">Lagos Tech Innovation Hub</h1>
                                        <div className="grid grid-cols-2">
                                            <div>Sector:</div>
                                            <div>Technology & Startups</div>
                                            <div>Capital Requirement</div>
                                            <div>$50M</div>
                                            <div>ROI Potential</div>
                                            <div>High</div>
                                        </div>
                                        <button className="flex items-center space-x-3">
                                            <span>View Details</span>
                                            <i className="fa fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="relative w-full"> {/** Cards */}
                                    <img src="" alt="" className="w-full h-[300px]" />
                                    <div className="space-y-2 mt-2">
                                        <h1 className="text-xl font-bold">Lagos Tech Innovation Hub</h1>
                                        <div className="grid grid-cols-2">
                                            <div>Sector:</div>
                                            <div>Technology & Startups</div>
                                            <div>Capital Requirement</div>
                                            <div>$50M</div>
                                            <div>ROI Potential</div>
                                            <div>High</div>
                                        </div>
                                        <button className="space-x-3 flex items-center">
                                            <span>View Details</span>
                                            <i className="fa fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>

                                <div className="relative w-full"> {/** Cards */}
                                    <img src="" alt="" className="w-full h-[300px]" />
                                    <div className="space-y-2 mt-2">
                                        <h1 className="text-xl font-bold">Lagos Tech Innovation Hub</h1>
                                        <div className="grid grid-cols-2">
                                            <div>Sector:</div>
                                            <div>Technology & Startups</div>
                                            <div>Capital Requirement</div>
                                            <div>$50M</div>
                                            <div>ROI Potential</div>
                                            <div>High</div>
                                        </div>
                                        <button className="flex items-center space-x-3">
                                            <span>View Details</span>
                                            <i className="fa fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="relative space-y-8 my-30">
                        <h1 className="text-3xl font-bold">Why Invest in Nigeria</h1>
                        <div className="flex items-center space-x-5">
                            <div className="bg-[#D9D9D9] relative w-[488px] h-[359px]">
                                <div className="w-[320px] absolute top-[120px] left-[32px] space-y-3">
                                <div className="bg-white w-[80px] h-[80px]"></div>
                                <p className="font-bold text-lg">Africa's Largest Economy</p>
                                <p>GDP valued at $477 Billion, leading growth hub in Africa.</p>
                                </div>
                            </div>
                            <div className="bg-[#D9D9D9] relative h-[359px] w-[790px]">
                                <div className="w-[320px] absolute top-[120px] left-[32px] space-y-3">
                                <div className="bg-white w-[80px] h-[80px]"></div>
                                <p className="font-bold text-lg">Population Advantage</p>
                                <p>200M+ people with a young, skilled, and dynamic workforce</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-5">                        
                            <div className="bg-[#D9D9D9] relative h-[359px] w-[790px]">
                                <div className="w-[320px] absolute top-[120px] space-y-3 left-[32px]">
                                <div className="bg-white w-[80px] h-[80px]"></div>
                                <p className="font-bold text-lg">Thriving Sectors</p>
                                <p>Opportunities across Agriculture, Energy, Technology, Real Estate, and more.</p>
                                </div>
                            </div>

                            <div className="bg-[#D9D9D9] relative w-[488px] h-[359px]">
                                <div className="w-[320px] absolute top-[120px] left-[32px] space-y-3">
                                <div className="bg-white w-[80px] h-[80px]"></div>
                                <p className="font-bold text-lg">Investor-Friendly Policies</p>
                                <p>Tax incentives, land access, and government-backend grants</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="relative my-20">
                        <h1 className="text-3xl font-bold w-[300px] mb-10">Here's what a past investor say</h1>
                        <div className="bg-[#D9D9D9] p-5">
                            <div className="flex items-center space-x-6">
                            <img src="" alt="" className="bg-white w-[355px] h-[295px]" />
                            <div className="flex flex-col w-[600px]">
                            <p className="w-[300px]">Nigeria is the gateway to Africa's growth story, strategically positioned as the continent's largest economy and most dynamic market. With a young population and abundant resources, opportunities here are limitless. The government is committed to fostering a business-friendly environment built on security, transparency, and profitability for every investor.</p>
                            <div>
                                <p className="font-bold">Fake Name</p>
                                <p className="font-bold">Fake Position</p>
                            </div>
                            </div>
                            <div className="border-l-1 h-[295px] relative">
                                <div className="absolute bottom-0 left-4">
                                <p className="text-xl">99.9%</p>
                                <p className="text-xl">Guranteed</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer>

                </footer>
            </div>
        </>
    )
}

export default Home;