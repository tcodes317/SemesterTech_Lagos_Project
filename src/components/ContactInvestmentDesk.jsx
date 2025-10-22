<<<<<<< HEAD
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

import i from "./../assets/Subtract.png";
import ii from "./../assets/Icon (1).png";
import iii from "./../assets/Icon.png";
import iv from "./../assets/Icon 1.png";
import v from "./../assets/Icon (2).png";
=======
import Header from "./../components/Header/Header";
import meg from "./../assets/Subtract.png";
import phone from "./../assets/icon (1).png";
import linkedin from "./../assets/icon (2).png";
import facebook from "./../assets/icon.png";
import twitter from "./../assets/icon 1.png";
import Footer from "./../components/Footer/Footer";
>>>>>>> a9a8dc47d91f3af68a9110d7b6854704a54d473c

function ContactInvestmentDesk(){
    return(
        <>
            <div className="relative w-[94%] mx-auto">
                <Header />
<<<<<<< HEAD
                <main className="container mx-auto px-4 mt-12 mb-12">
        <section>
            <div>
                <h1 className="text-3xl font-bold mb-8">Connect with the Investment Desk</h1>
                <p className="w-[630px] mb-8">Our dedicated team is here to answer your question, guide you through opportunities, and support your investment journey in Nigeria.</p>
            </div>
        </section>
        <section>
            <div className="flex p-12 px-24 bg-[#2D7C59] justify-center rounded-lg items-center">
                <div className="flex items-center space-x-12">
                    <div className="flex p-4 bg-[#41906D] px-10 rounded-md items-center justify-center flex-col">
                        <div className="flex items-center justify-center bg-white p-2 rounded-md">
                            <img src={i} alt="" />
                        </div>
                        <p className="mt-4 text-white">support@example.com</p>
                    </div>
                    <div className="flex p-4 bg-[#41906D] rounded-md px-10 items-center justify-center flex-col">
                        <div className="flex items-center justify-center bg-white p-2 rounded-md">
                            <img src={ii} alt="" />
                        </div>
                        <p className="mt-4 text-white">+123 456 7890</p>
                    </div>
                    <div className="flex p-4 bg-[#41906D] px-10 items-center rounded-md justify-center flex-col">
                        <div className="flex items-center justify-center rounded-md space-x-4">
                            <div className="bg-white p-2 rounded-md">
                                <img src={iii} alt="" />
                            </div>
                            <div className="bg-white p-2 rounded-md">
                                <img src={iv} alt="" />
                            </div>
                            <div className="bg-white p-2 rounded-md">
                                <img src={v} alt="" />
                            </div>
                        </div>
                        <p className="mt-4 text-white">Social Media</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="my-24">
            <div className="bg-[#FAFAFA] rounded-2xl">
                <div className="mt-8 p-12">
                    <div className="grid grid-cols-2 gap-5 space-y-5">
                        <div className="flex flex-col">
                            <label for="fullname">Full Name</label>
                            <input type="text" id="fullname" placeholder="Enter your Name" className="bg-[#F4F3F3] p-3 rounded-lg" />
                        </div>
                        <div className="flex flex-col">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your Email" className="bg-[#F4F3F3] p-3 rounded-lg" />
                        </div>
                        <div className="flex flex-col">
                            <label for="phoneNumber">Phone Number</label>
                            <input type="number" id="phoneNumber" placeholder="Enter your Number" className="bg-[#F4F3F3] p-3 rounded-lg" />
                        </div>
                        <div className="flex flex-col">
                            <label for="organization">Organization/Company</label>
                            <input type="text" id="organization" placeholder="Enter your Organization/Company" className="bg-[#F4F3F3] p-3 rounded-lg" />
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <label for="message">Message</label>
                        <textarea id="message" placeholder="Enter your Message" className="w-full h-[150px] bg-[#F4F3F3] p-3 rounded-lg"></textarea>
                    </div>
                    <div className="w-full mt-4">
                        <button id="submitBtn" className="w-full p-3 text-white rounded-lg bg-[#2D7C59]">
                            <span>Submit Request</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <h1 className="text-2xl text-black font-bold mb-8">Frequently Asked Questions</h1>
            <div className="space-y-4">
                <div className="bg-[#FAFAFA] p-3">
                    <div className="w-full flex items-center justify-between cursor-pointer" onclick="toggleAccordion(this)">
                        <h1 className="font-bold">How do I get started with investing in Nigeria?</h1>
                        <div className="w-[35px] h-[35px] bg-[#2D7C59] flex items-center justify-center rounded-full">
                            <i className="fa fa-angle-up text-white"></i>
                        </div>
                    </div>
                    <div className="text-black mt-8 mb-4 hidden">
                        <p>You can start by exploring opportunities by state or sector on our portal. Once you identify a project of interest, contact the investment Desk for detailed guidance, due diligence documents, and next steps.</p>
                    </div>
                </div>
                <div className="bg-[#FAFAFA] p-3">
                    <div className="w-full flex items-center justify-between cursor-pointer" onclick="toggleAccordion(this)">
                        <h1 className="font-bold">Can I get government guarantees on my investment?</h1>
                        <div className="w-[35px] h-[35px] bg-[#2D7C59] flex items-center justify-center rounded-full">
                            <i className="fa fa-angle-up text-white"></i>
                        </div>
                    </div>
                    <div className="text-black mt-8 mb-4 hidden">
                        <p>Certain strategic projects qualify for government-backed guarantees or risk-sharing agreements, especially in infrastructure, energy, and agriculture. The investment Desk can advise you on available options.</p>
                    </div>
                </div>
                <div className="bg-[#FAFAFA] p-3">
                    <div className="w-full flex items-center justify-between cursor-pointer" onclick="toggleAccordion(this)">
                        <h1 className="font-bold">Can foreign investors own land or property in Nigeria?</h1>
                        <div className="w-[35px] h-[35px] bg-[#2D7C59] flex items-center justify-center rounded-full">
                            <i className="fa fa-angle-up text-white"></i>
                        </div>
                    </div>
                    <div className="text-black mt-8 mb-4 hidden">
                        <p>Yes, foreign investors can lease or own land and property, but regulations differ by state. Our team will connect you with the relevant state agency for clear guidance.</p>
                    </div>
                </div>
                <div className="bg-[#FAFAFA] p-3">
                    <div className="w-full flex items-center justify-between cursor-pointer" onclick="toggleAccordion(this)">
                        <h1 className="font-bold">Which sectors are currently most attractive for investment?</h1>
                        <div className="w-[35px] h-[35px] bg-[#2D7C59] flex items-center justify-center rounded-full">
                            <i className="fa fa-angle-up text-white"></i>
                        </div>
                    </div>
                    <div className="text-black mt-8 mb-4 hidden">
                        <p>Nigeria's fastest-growing sectors include:</p>
                        <ul className="list-disc pl-5">
                            <li>Agriculture & Agro-Processing</li>
                            <li>Technology & Digital Economy</li>
                            <li>Renewable Energy</li>
                            <li>Infrastructure & Real Estate</li>
                            <li>Healthcare & Pharmaceuticals</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
=======
                <main className="mt-12 mb-12">
                    <section>
                        <div className="">
                            <h1 className="text-3xl font-bold mb-8">Connect with the Investment Desk</h1>
                            <p className="w-[630px] mb-8">Our dedicated team is here to answer your question, guide you through opportunities, and support your investment journey in Nigeria.</p>
                        </div>
                    </section>
                    <section>
                        <div className="flex p-12 px-24 bg-[#2D7C59] justify-center rounded-lg items-center">
                            <div className="flex items-center space-x-12">
                                <div className="flex p-4 bg-[#41906D] px-10 rounded-md items-center justify-center flex-col">
                                    <div className="flex items-center justify-center bg-white p-2 rounded-md">
                                        <img src={meg} alt="" />
                                    </div>
                                    <p className="mt-4 text-white">support@example.com</p>
                                </div>

                                <div className="flex p-4 bg-[#41906D] rounded-md px-10 items-center justify-center flex-col">
                                    <div className="flex items-center justify-center bg-white p-2 rounded-md">
                                        <img src={phone} alt="" />
                                    </div>
                                    <p className="mt-4 text-white">+123 456 7890 </p>
                                </div>

                                
                                <div className="flex p-4 bg-[#41906D] px-10 items-center rounded-md justify-center flex-col">
                                    <div className="flex items-center justify-center rounded-md space-x-4">
                                        <img src={facebook} alt="" className="bg-white p-2 rounded-md" />
                                        <img src={twitter} alt="" className="bg-white p-2 rounded-md" />
                                        <img src={linkedin} alt="" className="bg-white p-2 rounded-md" />
                                    </div>
                                    <p className="mt-4 text-white">Social Media</p>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    <section className="my-24">
                        <div className="bg-[#FAFAFA] rounded-2xl">
                            <form action="" method="POST" className="mt-8 p-12">
                                <div className="grid grid-cols-2 gap-5 space-y-5">
                                <div className="flex flex-col">
                                    <label for="fullname">Full Name</label>
                                    <input type="text" placeholder="Enter your Name" className="bg-[#F4F3F3] p-3 rounded-lg" />
                                </div>
                                <div className="flex flex-col">
                                    <label for="email">Email</label>
                                    <input type="email" placeholder="Enter your Email" className="bg-[#F4F3F3] p-3 rounded-lg" />
                                </div>
                                <div className="flex flex-col">
                                    <label for="phoneNumber">Phone Number</label>
                                    <input type="number" placeholder="Enter your Number" className="bg-[#F4F3F3] p-3 rounded-lg" />
                                </div>
                                <div className="flex flex-col">
                                    <label for="">Organization/Company</label>
                                    <input type="text" placeholder="Enter your Organization/Company" className="bg-[#F4F3F3] p-3 rounded-lg" />
                                </div>
                                </div>
                                <div className="w-full">
                                    <label for="">Message</label>
                                    <textarea placeholder="Enter your Message" className="w-full h-[150px] bg-[#F4F3F3] p-3 rounded-lg"></textarea>
                                </div>
                                <div className="w-full mt-4 cursor">
                                    <button className="w-full p-3 text-white rounded-lg bg-[#2D7C59]">
                                        <span>Submit Request</span>
                                    </button>
                                </div>
                            </form>
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
                </main>
>>>>>>> a9a8dc47d91f3af68a9110d7b6854704a54d473c
                <Footer />
            </div>
        </>
    )
}
<<<<<<< HEAD
export default ContactInvestmentDesk;
=======

export default ContactInvestmentDesk
>>>>>>> a9a8dc47d91f3af68a9110d7b6854704a54d473c
