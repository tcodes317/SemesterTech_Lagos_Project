import Header from "./../components/Header/Header.jsx";
import Footer from "./../components/Footer/Footer.jsx";
import iii from "./../assets/image 6.png";



function Download(){
    return(
        <>
            <div className="relative w-[94%] mx-auto">
                <Header />
                <main className="mb-18">
                    <section className="space-y-8">
                        <h1 className="text-3xl font-bold w-[400px]">Downloads</h1>
                        <p className="text-lg w-[550px]">Access all reports across different sector and investment Guides</p>

                        <div className="border-1 flex items-center">
                            <i className="fa fa-search"></i>
                            <input type="search" className="p-2 w-full focus:outline-none" placeholder="Search by State Name" />
                        </div>
                    </section>

                    
                                        <section>
                                            <div className="mt-8">
                                                <h1 className="font-bold text-xl">Filter by sector</h1>
                    
                                                <div className="mt-2">
                                                    <button className="p-2 px-8 border-1">
                                                        <span>All</span>
                                                    </button>
                                                    <button className="p-2 border-1">
                                                        <span>Investment Reports</span>
                                                    </button>
                                                    <button className="p-2 border-1">
                                                        <span>Sector Insights</span>
                                                    </button>
                                                    <button className="p-2 border-1">
                                                        <span>Government Guides</span>
                                                    </button>
                                                    <button className="p-2 border-1">
                                                        <span>Brochures</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </section>
                                        <section>
                                            <div className="flex items-center justify-between mt-8">
                                                <div className="space-y-4">
                                                    <img src={iii} alt="" />
                                                    <p className="font-bold">Nigeria Investment Report 2025</p>
                                                    <p>An overview of investment opportunities</p>
                                                </div>
                                                <button className="p-2 bg-[#2D7C59] px-8 border-1 text-white">
                                                    <span>Download</span>
                                                    <i className="fa fa-download"></i>
                                                </button>
                                            </div>

                                            
                                            <div className="flex items-center justify-between mt-8">
                                                <div className="space-y-4">
                                                    <img src={iii} alt="" />
                                                    <p className="font-bold">Agriculture Sector Insights</p>
                                                    <p>In depth analysis of the agriculture sector, highlighting opportunities and challenge</p>
                                                </div>
                                                <button className="p-2 bg-[#2D7C59] px-8 border-1 text-white">
                                                    <span>Download</span>
                                                    <i className="fa fa-download"></i>
                                                </button>
                                            </div>

                                            
                                            <div className="flex items-center justify-between mt-8">
                                                <div className="space-y-4">
                                                    <img src={iii} alt="" />
                                                    <p className="font-bold">Nigeria Investment Report 2025</p>
                                                    <p>An overview of the investment opportunities</p>
                                                </div>
                                                <button className="p-2 bg-[#2D7C59] px-8 border-1 text-white">
                                                    <span>Download</span>
                                                    <i className="fa fa-download"></i>
                                                </button>
                                            </div>

                                            
                                            <div className="flex items-center justify-between mt-8">
                                                <div className="space-y-4">
                                                    <img src={iii} alt="" />
                                                    <p className="font-bold">Agriculture Sector Insights</p>
                                                    <p>In depth analysis of the Agriculture sector, highlighting opportunities and challenge</p>
                                                </div>
                                                <button className="p-2 bg-[#2D7C59] px-8 border-1 text-white">
                                                    <span>Download</span>
                                                    <i className="fa fa-download"></i>
                                                </button>
                                            </div>

                                            
                                            <div className="flex items-center justify-between mt-8">
                                                <div className="space-y-4">
                                                    <img src={iii} alt="" />
                                                    <p className="font-bold">Agriculture Sector Insights</p>
                                                    <p>In depth analysis of the agriculture, highlighting opportunities and challenge</p>
                                                </div>
                                                <button className="p-2 bg-[#2D7C59] px-8 border-1 text-white">
                                                    <span>Download</span>
                                                    <i className="fa fa-download"></i>
                                                </button>
                                            </div>
                                        </section>
                                        <section className="flex items-center justify-between my-12">
                                            <div className="flex items-center">
                                                <p>Showing 1-8 from 100</p>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <button className="p-2 border-1 rounded-lg">
                                                    <i className="fa fa-angle-left"></i>
                                                </button>
                                                <button className="p-2 border-1 bg-[#2D7C59] text-white rounded-lg px-3">
                                                    <span>1</span>
                                                </button>
                                                <button className="p-2 border-1 rounded-lg px-3">
                                                    <span>2</span>
                                                </button>
                                                
                                                <button className="p-2 border-1 rounded-lg px-3">
                                                    <span>3</span>
                                                </button>
                                                
                                                <button className="p-2 border-1 rounded-lg px-3">
                                                    <span>4</span>
                                                </button>
                                                
                                                <button className="p-2 border-1 rounded-lg px-3">
                                                    <span>5</span>
                                                </button>
                                                
                                                <button className="p-2 border-1 rounded-lg">
                                                    <span>...</span>
                                                </button>
                                                <button className="p-2 border-1 rounded-lg">
                                                    <i className="fa fa-angle-right"></i>
                                                </button>
                                            </div>
                                        </section>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Download;