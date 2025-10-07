import Footer from "./Footer/Footer";
import Header from "./Header/Header";


function NigeriaInvestment(){
    return(
        <>
            <div className="relative w-[94%] mx-auto">
                <Header />
                <main>
                    <sector className="my-12">
                        <h1>Nigeria Investment Insights</h1>
                        <p>Explore real-time trends, opportunities, and sector performance across all 36 state FCT</p>
                    
                        <div className="flex items-center justify-center space-x-8">
                            <select>
                                <option>Year</option>
                            </select>
                            <select>
                                <option>Sector</option>
                            </select>
                            <select>
                                <option>State</option>
                            </select>
                        </div>

                        <div className="flex items-center space-x-4 justify-between">
                            <div className="border-1">
                                <p>Total Opportunities</p>
                                <h1>2,340</h1>
                            </div>
                            <div className="border-1">
                                <p>Total Estimated Value</p>
                                <h1>$18.6B</h1>
                            </div>
                            <div className="border-1">
                                <p>States Represented</p>
                                <h1>36 States + FCT</h1>
                            </div>
                            <div className="">
                                <p>Average Investment Size</p>
                                <h1>$7.9M</h1>
                            </div>
                        </div>
                    </sector>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default NigeriaInvestment;