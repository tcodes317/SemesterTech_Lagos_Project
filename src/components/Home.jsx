import { Link } from "react-router-dom";
import logo from "./../assets/Logo.png";
import flag from "./../assets/flag.png";
import flagLogo from "./../assets/flag-i.png";
import charti from "./../assets/Chart label.png";
import chartii from "./../assets/Chart label (1).png";
import chartiii from "./../assets/Chart label (2).png";
import chartiv from "./../assets/Chart label (3).png";
import chartv from "./../assets/Chart label (4).png";
import bg from "./../assets/image 1.png";
import clip from "./../assets/Frame 2147235231.png";
import clipii from "./../assets/Frame 2147235231 (1).png";
import clipiii from "./../assets/Frame 2147235231 (2).png";
import clipiv from "./../assets/Frame 2147235231 (3).png";
import nam from "./../assets/name.png";
import image3 from "./../assets/image 3.png";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

function Home(){
    return(
        <>
            <div className="relative w-[94%] mx-auto">
                <Header />
                <main className="relative">
                    <section className="flex items-center justify-between my-20">
                        <div className="space-y-6">
                            <h1 className="text-5xl font-bold w-[500px]">Unlock Investment Opportunities Across Nigeria</h1>
                            <p className="text-xl w-[500px]">Discover projects, explore sectors, and connect with government agencies for seamless investment.</p>
                            <div className="flex items-center space-x-2">
                                <button className="p-2.5 border-1 bg-[#2D7C59] hover:bg-[#fff] hover:text-[#2D7C59] transition-all-linear cursor-pointer text-white px-4">
                                    <span>Explore States</span>
                                </button>
                                <button className="p-2.5 border-1 ">
                                    <span>Browse Reports</span>
                                </button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="relative">
                                <img src={flag} alt="" />
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
                                    <img src={bg} alt="" className="w-full h-[300px]" />
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
                                    <img src={bg} alt="" className="w-full h-[300px]" />
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
                                    <img src={bg} alt="" className="w-full h-[300px]" />
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
                            <div className="bg-[#4A3AFF1A] relative w-[488px] h-[359px]">
                                <div className="w-[320px] absolute top-[120px] left-[32px] space-y-3">
                                <img className="w-[80px] h-[80px]" src={clip} alt="" />
                                <p className="font-bold text-lg">Africa's Largest Economy</p>
                                <p>GDP valued at $477 Billion, leading growth hub in Africa.</p>
                                </div>
                            </div>
                            <div className="bg-[#37996B1A] relative h-[359px] w-[790px]">
                                <div className="w-[320px] absolute top-[120px] left-[32px] space-y-3">
                                <img src={clipii} alt="" className="w-[80px] h-[80px]" />
                                <p className="font-bold text-lg">Population Advantage</p>
                                <p>200M+ people with a young, skilled, and dynamic workforce</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-5">                        
                            <div className="bg-[#FF718B1A] relative h-[359px] w-[790px]">
                                <div className="w-[320px] absolute top-[120px] space-y-3 left-[32px]">
                                <img src={clipiii} alt="" className="w-[80px] h-[80px]" />
                                <p className="font-bold text-lg">Thriving Sectors</p>
                                <p>Opportunities across Agriculture, Energy, Technology, Real Estate, and more.</p>
                                </div>
                            </div>

                            <div className="bg-[#155CC61A] relative w-[488px] h-[359px]">
                                <div className="w-[320px] absolute top-[120px] left-[32px] space-y-3">
                                <img src={clipiv} alt="" className="w-[80px] h-[80px]" />
                                <p className="font-bold text-lg">Investor-Friendly Policies</p>
                                <p>Tax incentives, land access, and government-backend grants</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="relative my-20">
                        <h1 className="text-3xl font-bold w-[300px] mb-10">Here's what a past investor say</h1>
                        <div className="bg-[#E1FEE5] p-5">
                            <div className="flex items-center space-x-6">
                            <img src={nam} alt="" className="object-contain w-[355px] h-[295px]" />
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
                    <section>
                        <h1 className="text-2xl text-black font-bold mb-8">Frequently Asked Questions</h1>

                        <div className="space-y-4">
                        <div className="bg-[#FAFAFA] p-3">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="font-bold">How do I get started with investing in Nigeria?</h1>
                                <div className=" w-[35px] block h-[35px] bg-[#2D7C59] flex items-center justify-center rounded-full">
                                <i className="fa fa-angle-up text-white"></i>
                                </div>
                            </div>
                            <div className="flex items-center justify-center text-black mt-8 mb-4">
                                <p className="">You can start by exploring opportunities by state or sector on our portal. Once you identify a project of interest, contact the investment Desk for detailed guidance, due diligence documents, and next steps.</p>
                            </div>
                        </div>

                        <div className="bg-[#FAFAFA] p-3">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="font-bold">Can I get government gurantees on my investment?</h1>
                                <div className=" w-[35px] block h-[35px] bg-[#2D7C59] flex items-center justify-center rounded-full">
                                <i className="fa fa-angle-up text-white"></i>
                                </div>
                            </div>
                            <div className="flex items-center justify-center text-black mt-8 mb-4">
                                <p className="">Certain strategic project qualify for government-backed guarantees or risk-sharing agreements, especially in infrastructure, energy, and agriculture. The investment Desk can advise you an available options.</p>
                            </div>
                        </div>

                        <div className="bg-[#FAFAFA] p-3">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="font-bold">Can foreign investors own land or property in Nigeria?</h1>
                                <div className=" w-[35px] block h-[35px] bg-[#2D7C59] flex items-center justify-center rounded-full">
                                <i className="fa fa-angle-up text-white"></i>
                                </div>
                            </div>
                            <div className="text-black mt-8 mb-4">
                                <p className="">Yes, foreign investors can lease or own land and property, but regulations differ by state. Our team will connect you with the relevant state agency for clear guidance.</p>
                            </div>
                        </div>

                        
                        <div className="bg-[#FAFAFA] p-3">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="font-bold">Which sectors are currently most attractive for investment?</h1>
                                <div className=" w-[35px] block h-[35px] bg-[#2D7C59] flex items-center justify-center rounded-full">
                                <i className="fa fa-angle-up text-white"></i>
                                </div>
                            </div>
                            <div className="text-black mt-8 mb-4">
                                <p className="">Nigeria's fastest-growing sectors include:</p>
                                <ul>
                                    <li>Agriculture & Agro-Processing</li>
                                    <li>Technology & Digital Economy</li>
                                    <li>Technology & Digital Economy</li>
                                    <li>Renewable Energy</li>
                                    <li>Infrastructure & Real Estate</li>
                                    <li>Healthcare & Pharmaceuticals</li>
                                </ul>
                            </div>
                        </div>

                        

                    
                        </div>
                    </section>
                    <section>
                        <div className="flex bg-linear-to-r from-[#E1FEE5] to-[#fff] items-center justify-between">
                            <div className=" pl-12">
                                <h1 className="text-2xl font-bold">Ready to Invest?</h1>
                                <p className="">Start with a State that matches your goals.</p>
                                <button className="bg-[#2D7C59] mt-12 px-5 p-2.5 text-white">
                                    <span>Browse All Opportunities</span>
                                </button>
                            </div>
                            <div className="">
                                <img src={image3} alt="" />
                            </div>
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    )
}

export default Home;