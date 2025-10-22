import Footer from "./Footer/Footer";
import Header from "./Header/Header";
<<<<<<< HEAD
// import image from "./../assets/image 1.png";
=======
import image from "./../assets/image 1.png";
import imagei from "./../assets/image 6.png";
>>>>>>> a9a8dc47d91f3af68a9110d7b6854704a54d473c

function OpportunitiesDetails(){
    return(
        <>
<<<<<<< HEAD
            <div className="relative w-[94%] mx-auto">
                <Header />
                <main>
                    {/* <section className="mt-12">
                        <div className="flex items-center space-y-6 justify-between">
                            <h1 className="text-2xl font-bold">Lagos Tech Innovation Hub</h1>
                            <button className="p-2 text-white px-5 bg-[#2D7C59]">
                                <span>Contact Investment Desk</span>
                            </button>
                        </div>
                        <div>
                            <p>A world-class technology and startup hub designed to position</p>
                            <p>Lagos as Arica's Silcon Valley.</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <h1>Lekki, Lagos STate</h1>
                                <p>Location</p>
                            </div>
                            <div>
                                <h1>$50M</h1>
                                <p>Project Value</p>
                            </div>
                            <div>
                                <h1>Pending</h1>
                                <p>Status</p>
                            </div>
                            <div>
                                <h1>2025-2030</h1>
                                <p>Project Duration</p>
                            </div>
                        </div>
                    </section> */}
                    {/* <section className="py-18">
                        <h1 className="text-2xl font-bold mb-4">Project Overview</h1>
                        <div className="flex items-center justify-between">
                            <div className="">
                                <h1 className="mb-4 font-bold">Description</h1>
                                <p>The Lagos Tech Innovation Hub will provide co-working spaces, incubation programs and high-speed infrastructure for startups in fintech, healthtech, and afritech, it amins to attract global VC's faster job creation, and accelerate Nigeria's digital economy.</p>
                                <div className="mt-8">
                                    <h1 className="font-bold text-xl">Project Owner</h1>
                                    <p>Ministry of Environment and Water Resources</p>
                                </div>
                            </div>
                            <div className="">
                                
                            </div>
                        </div>
                    </section> */}
                </main>
                {/* <Footer /> */}
=======
            <div className="w-[94%] relative mx-auto">
                <Header />
                    <main>
                        <section className="mt-12">
                            <div className="flex items-center space-y-6 justify-between">
                                <h1 className="text-3xl font-bold">Lagos Tech Innovation Hub</h1>
                                <button className="p-2 text-white px-5 bg-[#2D7C59]">
                                    <span>Contact Investment Desk</span>
                                </button>
                            </div>
                            
                            <div>
                                <p>A world-class technology and startup hub designed to position</p>
                                <p>Lagos as Arica's Silcon Valley.</p>
                            </div>

                            <div className="flex items-center w-[1100px] mt-12 mb-12 mx-auto">
                             <div className="w-full border-r-1">
                                 <h1>Lekki, Lagos STate</h1>
                                 <p>Location</p>
                             </div>
                             <div className="w-full border-r-1 px-8">
                                 <h1>$50M</h1>
                                 <p>Project Value</p>
                             </div>
                             <div className="w-full border-r-1 px-8">
                                 <h1>Pending</h1>
                                 <p>Status</p>
                             </div>
                             <div className="w-full px-8">
                                 <h1>2025-2030</h1>
                                 <p>Project Duration</p>
                             </div>
                         </div>
                        </section>
                        <section className="py-18">
                         <h1 className="text-2xl font-bold mb-4">Project Overview</h1>
                         <div className="flex items-center space-x-24 justify-between">
                             <div className="w-[1200px]">
                                 <h1 className="mb-4 font-bold">Description</h1>
                                 <p>The Lagos Tech Innovation Hub will provide co-working spaces, incubation programs and high-speed infrastructure for startups in fintech, healthtech, and afritech, it amins to attract global VC's faster job creation, and accelerate Nigeria's digital economy.</p>
                                 <div className="mt-8">
                                     <h1 className="font-bold text-xl">Project Owner</h1>
                                     <p>Ministry of Environment and Water Resources</p>
                                 </div>
                             </div>
                             <div className="w-[1500px]">
                                <div className=""> {/** Carousel */}
                                    <img src={image} alt="" className="w-[1500px]" /> {/** Carousel */}
                                </div>
                                <div className="flex items-center justify-center mt-4 space-x-6">
                                    <button className="p-1 bg-[#2D7C59] px-8"></button>
                                    <button className="p-1 border-1 px-8"></button>
                                    <button className="p-1 border-1 px-8"></button>
                                    <button className="p-1 border-1 px-8"></button>
                                </div>
                             </div>
                         </div>
                     </section>
                     <section className="my-20">
                        <div className="flex flex-col">
                            <h1 className="text-2xl font-bold mb-12">Investment Details</h1>
                            <div className="grid grid-cols-2 space-y-3">
                                <h1 className="font-bold">Category</h1>
                                <h1 className="font-bold">Details</h1>
                                <p>Estimated Cost</p>
                                <p>$50 Million</p>
                                <p>Funding Model</p>
                                <p>Public-Private Partnership (PPP)</p>
                                <p>Project Stage</p>
                                <p>Feasibility Study Completed (2024)</p>
                                <p>Investment Returns</p>
                                <p>Projected IRR: 18%</p>
                                <p>Land Availability</p>
                                <p>20 hectares allocated by Lagos State</p>
                                <p>Government Incentive</p>
                                <p>5-year corporate tax holiday + import duty relief</p>
                            </div>
                        </div>
                        </section>
                        <section>
                            <div className="">
                                <h1 className="text-3xl font-bold">Project Documents</h1>
                                <div className="relative mt-8 space-y-8">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img src={imagei} alt="" />
                                            <h1 className="font-bold mt-4">Project Prospectus PDF</h1>
                                        </div>
                                        <div>
                                            <button className="bg-[#2D7C59] p-3 px-8 text-white">
                                                <span>Download</span>
                                                <i className="fa fa-download"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img src={imagei} alt="" />
                                            <h1 className="font-bold mt-4">Feasibility Study Summary PDF</h1>
                                        </div>
                                        <div>
                                            <button className="bg-[#2D7C59] p-3 px-8 text-white">
                                                <span>Download</span>
                                                <i className="fa fa-download"></i>
                                            </button>
                                        </div>
                                    </div>

                                    
                                    
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img src={imagei} alt="" />
                                            <h1 className="font-bold mt-4">Business Model Canvas PDF</h1>
                                        </div>
                                        <div>
                                            <button className="bg-[#2D7C59] p-3 px-8 text-white">
                                                <span>Download</span>
                                                <i className="fa fa-download"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                <Footer />
>>>>>>> a9a8dc47d91f3af68a9110d7b6854704a54d473c
            </div>
        </>
    )
}

export default OpportunitiesDetails;