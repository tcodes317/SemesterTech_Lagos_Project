import Header from "./Header/Header";
import i from "./../assets/Frame 2147235220.png";
import ii from "./../assets/image 5.png";
import iii from "./../assets/image 6.png";
import iv from "./../assets/image 7.png";
import Footer from "./Footer/Footer";

function LagosState(){
    return(
        <>
            <div className="relative w-[94%] mx-auto">
                <Header />
                <main>
                    <section className="relative mt-18">
                        <div className="w-[570px] space-y-4">
                            <h1 className="text-2xl font-bold">Lagos State</h1>
                            <p className="">Lagos State, NIgeria's economic powerhouse, hosts the country's largest seaports, busiest airport, and top financial institutions. With thriving tech, entertainment, and manufacturing sectors, it contributes significantly to Nigeria's GDP. Ongoing infrastructure and transport upgrades position Lagos as a premier global investment destination.</p>
                        </div>
                    </section>
                    <section className="mt-18">
                        <div className="flex items-center justify-between"> 
                            <div className="bg-[#4A3AFF1A] w-[300px] h-[200px] pl-6 pt-6">
                                    <img src="" alt="" />
                                    <div className="space-y-5">
                                        <h3 className="text-[#4A3AFF]">$1.5 Billion</h3>
                                        <p className="text-[#4A3AFF]">2025 IGR Projection</p>
                                    </div>
                            </div>
                            
                            <div className="bg-[#FF718B1A] w-[300px] h-[200px] pl-6 pt-6">
                                <img src="" alt="" />
                                <h3>15.8 Million</h3>
                                <p>Est. Population 2025</p>
                            </div>
                                <div className="bg-[#37996B1A] w-[300px] h-[200px] pl-6 pt-6">
                                    <img src="" alt="" />
                                    <h3>$2.2 Billion</h3>
                                    <p>2025 Budget</p>
                                </div>
                                <div className="bg-[#37996B1A] w-[300px] h-[200px] pl-6 pt-6">
                                    <img src="" alt="" />
                                    <h3>$6.8 Million</h3>
                                    <p>2020 Labour Force</p>
                                </div>
                            </div>

                            <div className="flex justify-between space-x-8 mt-12">
                                <div className="w-full space-y-12">
                                    <p>Tropical Savanna</p>
                                    <p>Climate</p>
                                </div>
                                <div className="w-full space-y-12">
                                    <p>Domestic and International</p>
                                    <p>Airport</p>
                                </div>
                                <div className="w-full space-y-12">
                                    <p>Sea-port</p>
                                    <p>Port</p>
                                </div>
                                <div className="w-full space-y-5">
                                    <div>
                                        <p>Lekki Free Zone (LFZ), Lagos</p>
                                        <p>Free Zone (LFZ) & Aloro City</p>
                                        <p>Free Zone (LFZ) & Aloro City</p>
                                    </div>
                                    <div className="">
                                        <p>Special Economic Zones</p>
                                    </div>
                                </div>
                            </div>
                    </section>
                    <section>
                        <div className="mt-24">
                            <h1 className="text-3xl font-bold mb-8">Key Sectors</h1>
                            <div className="flex justify-between items-center">
                                <div className="relative space-y-4">
                                    <img src={i} alt="" />
                                    <p>Digital Technology & ICT Services</p>
                                </div>
                                <div className="space-y-4">
                                    <img src={ii} alt="" />
                                    <p>Tourism</p>
                                </div>
                                <div className="space-y-4">
                                    <img src={iii} alt="" />

                                    <p>Logistics & Transportation</p>
                                </div>
                                <div className="space-y-4">
                                    <img src={iv} alt="" />
                                    <p>Agriculture/Processing</p>
                                </div>
                            </div>
                        </div>
                    </section>
                        <section className="my-18">
                            <div className="flex justify-between space-x-12">
                                <div className="space-y-5 bg-[#FAFAFAFA] p-12">
                                    <h1 className="text-4xl font-bold">Key Policy Initiatives</h1>
                                    <ul className="space-y-5 list-disc">
                                        <li>Lagos Electricity Bill 2024 aims to create an independent and reliable Electricity market</li>
                                        <li>The lagos State Science Research and Innovation Council (LASRIC) enables the fundamental levers of the research development and innovation ecosystem</li>
                                        <li>Lagos International Financial Centre (LFC) seeks to establish Lagos as Arica's top financial hub in line with the Lagos State Development Plan (2022-2052)</li>
                                        <li>Incentives include fox breaks, free subsidies, and fast-tracked issuance of land titles</li>
                                        <li>Lekki Free Trade Zone (LFTZ) offers tax exemptions, levies, rate duty-free imports, machinery, raw materials and spare parts</li>
                                        <li>Lagos State Employment Trust Fund (LSETF), supports SMEs with funding, low-interest loans, and training</li>
                                    </ul>
                                </div>
                                <div className="space-y-5 bg-[#FAFAFAFA] p-12">
                                    <h1 className="text-3xl font-bold">Competitive Advantage</h1>
                                    <ul className="space-y-5 list-disc">
                                        <li>Lagos's Aquatic splendor and costallation makes it a hub for trade, tourism, and marine industries</li>
                                        <li>Over 20 million population provides a vast and lucrative market for businesses</li>
                                        <li>Developed ports, airports, and transport networks Ofers a large, skilled and educated workforce</li>
                                        <li>Lagos state government supports businesses through tax incentives, investment promotions, and infrastructure development</li>
                                        <li>Offers businesses easy access to captial through its strong financial sector</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    <section className="my-18">
                        <h1 className="text-3xl font-bold w-[450px] mb-12">Current Investment Opportunities In Lagos State</h1>
                        <div className="grid grid-cols-3 space-y-12">
                            <div>
                                <img src={image} alt="" />
                                <div className="mt-4">
                                    <h3 className="font-bold text-xl">Lagos Tech Innovation Hub</h3>
                                    <div className="grid grid-cols-2">
                                        <p>Sector:</p>
                                        <p>Technology & Startups</p>
                                        <p>Project Value</p>
                                        <p>$82M</p>
                                        <p>Status</p>
                                        <p>Pending</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img src={image} alt="" />
                                <div className="mt-4">
                                    <h3 className="font-bold text-xl">Lagos Tech Innovation Hub</h3>
                                    <div className="grid grid-cols-2">
                                        <p>Sector:</p>
                                        <p>Technology & Startups</p>
                                        <p>Project Value</p>
                                        <p>$82M</p>
                                        <p>Status</p>
                                        <p>Pending</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img src={image} alt="" />
                                <div className="mt-4">
                                    <h3 className="font-bold text-xl">Lagos Tech Innovation Hub</h3>
                                    <div className="grid grid-cols-2">
                                        <p>Sector:</p>
                                        <p>Technology & Startups</p>
                                        <p>Project Value</p>
                                        <p>$82M</p>
                                        <p>Status</p>
                                        <p>Pending</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img src={image} alt="" />
                                <div className="mt-4">
                                    <h3 className="font-bold text-xl">Lagos Tech Innovation Hub</h3>
                                    <div className="grid grid-cols-2">
                                        <p>Sector:</p>
                                        <p>Technology & Startups</p>
                                        <p>Project Value</p>
                                        <p>$82M</p>
                                        <p>Status</p>
                                        <p>Pending</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img src={image} alt="" />
                                <div className="mt-4">
                                    <h3 className="font-bold text-xl">Lagos Tech Innovation Hub</h3>
                                    <div className="grid grid-cols-2">
                                        <p>Sector:</p>
                                        <p>Technology & Startups</p>
                                        <p>Project Value</p>
                                        <p>$82M</p>
                                        <p>Status</p>
                                        <p>Pending</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <img src={image} alt="" />
                                <div className="mt-4">
                                    <h3 className="font-bold text-xl">Lagos Tech Innovation Hub</h3>
                                    <div className="grid grid-cols-2">
                                        <p>Sector:</p>
                                        <p>Technology & Startups</p>
                                        <p>Project Value</p>
                                        <p>$82M</p>
                                        <p>Status</p>
                                        <p>Pending</p>
                                    </div>
                                </div>
                            </div>

                            

                            
                        </div>
                    </section>
                    <section className="my-18">
                        <div className="">
                            <h1 className="font-bold text-2xl">Downloadable Reports</h1>
                            <div className="flex items-center justify-between mt-8">
                                <div className="space-y-4">
                                    <img src={iii} alt="" />
                                    <p className="font-bold">Lagos State Investment Guide (PDF)</p>
                                </div>
                                <button className="p-2 bg-[#2D7C59] px-8 border-1 text-white">
                                    <span>Download</span>
                                    <i className="fa fa-download"></i>
                                </button>
                            </div>

                            <div className="flex items-center justify-between mt-8">
                                <div className="space-y-4">
                                    <img src={iii} alt="" />
                                    <p className="font-bold">2025 Infrastructure Development Plan (PDF)</p>
                                </div>
                                <button className="p-2 bg-[#2D7C59] px-8 border-1 text-white">
                                    <span>Download</span>
                                    <i className="fa fa-download"></i>
                                </button>
                            </div>

                            <div className="flex items-center justify-between mt-8">
                                <div className="space-y-4">
                                    <img src={iii} alt="" />
                                    <p className="font-bold">Sector Report: Real Estate & Housing (PDF)</p>
                                </div>
                                <button className="p-2 bg-[#2D7C59] px-8 border-1 text-white">
                                    <span>Download</span>
                                    <i className="fa fa-download"></i>
                                </button>
                            </div>


                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}
export default LagosState;