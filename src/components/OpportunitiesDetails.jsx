import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import image from "./../assets/image 1.png";

function OpportunitiesDetails(){
    return(
        <>
            <div className="w-[94%] relative mx-auto">
                <Header />
                    <main>
                        <section className="mt-12">
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
                    </main>
                <Footer />
            </div>
        </>
    )
}

export default OpportunitiesDetails;