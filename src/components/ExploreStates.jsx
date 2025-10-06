import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import flagii from "./../assets/flag-ii.png";

function ExploreState(){
    return(
        <>
            <div className="relative w-[94%] mx-auto">
                <Header />
                <main className="my-12 mt-18">
                    <section className="space-y-8">
                        <h1 className="text-3xl font-bold w-[400px]">Explore Investment Opportunities by State</h1>
                        <p className="text-lg w-[550px]">Select any state on the map or from the list to see sector-specific projects, resources, and government incentives available.</p>

                        <div className="border-1 flex items-center">
                            <i className="fa fa-search"></i>
                            <input type="search" className="p-2 w-full focus:outline-none" placeholder="Search by State Name" />
                        </div>
                    </section>
                    <section>
                        <div className="mt-8">
                            <h1 className="font-bold text-xl">Filter by sector</h1>

                            <div className="mt-2">
                                <button className="p-2 border-1">
                                    <span>Agriculture</span>
                                </button>
                                <button className="p-2 border-1">
                                    <span>Energy</span>
                                </button>
                                <button className="p-2 border-1">
                                    <span>Tech</span>
                                </button>
                                <button className="p-2 border-1">
                                    <span>Real Estate</span>
                                </button>
                                <button className="p-2 border-1">
                                    <span>Infrastducture</span>
                                </button>
                                <button className="p-2 border-1">
                                    <span>Healthcare</span>
                                </button>
                            </div>

                            <div className="mt-14">
                                <img src={flagii} alt="" />
                            </div>
                        </div>
                    </section>
                    <section className="space-y-4 mt-24">
                        <h1 className="text-2xl mb-4 font-bold">Investment Opportunities by State</h1>

                        <div className="overflow-y-scroll h-[300px]">
                        <table className="w-full overflow-y-scroll">
                            <tr className="font-bold space-x-5">
                                <td>State</td>
                                <td>No. of Projects</td>
                                <td>Key Sectors</td>
                                <td>GDP (Est.)</td>
                                <td>Action</td>
                            </tr>
                            <tr>
                                <td>Lagos</td>
                                <td>10</td>
                                <td>Tech. Finance, Real Estate</td>
                                <td>$33B</td>
                                <td>View State</td>
                            </tr>
                            <tr>
                                <td>Lagos</td>
                                <td>10</td>
                                <td>Tech. Finance, Real Estate</td>
                                <td>$33B</td>
                                <td>View State</td>
                            </tr>
                            <tr>
                                <td>Lagos</td>
                                <td>10</td>
                                <td>Tech. Finance, Real Estate</td>
                                <td>$33B</td>
                                <td>View State</td>
                            </tr>
                            <tr>
                                <td>Lagos</td>
                                <td>10</td>
                                <td>Tech. Finance, Real Estate</td>
                                <td>$33B</td>
                                <td>View State</td>
                            </tr>
                            <tr>
                                <td>Lagos</td>
                                <td>10</td>
                                <td>Tech. Finance, Real Estate</td>
                                <td>$33B</td>
                                <td>View State</td>
                            </tr>
                            <tr>
                                <td>Lagos</td>
                                <td>10</td>
                                <td>Tech. Finance, Real Estate</td>
                                <td>$33B</td>
                                <td>View State</td>
                            </tr>
                            <tr>
                                <td>Lagos</td>
                                <td>10</td>
                                <td>Tech. Finance, Real Estate</td>
                                <td>$33B</td>
                                <td>View State</td>
                            </tr>
                            <tr>
                                <td>Lagos</td>
                                <td>10</td>
                                <td>Tech. Finance, Real Estate</td>
                                <td>$33B</td>
                                <td>View State</td>
                            </tr>
                            <tr>
                                <td>Lagos</td>
                                <td>10</td>
                                <td>Tech. Finance, Real Estate</td>
                                <td>$33B</td>
                                <td>View State</td>
                            </tr>
                            <tr>
                                <td>Lagos</td>
                                <td>10</td>
                                <td>Tech. Finance, Real Estate</td>
                                <td>$33B</td>
                                <td>View State</td>
                            </tr>
                            <tr>
                                <td>Lagos</td>
                                <td>10</td>
                                <td>Tech. Finance, Real Estate</td>
                                <td>$33B</td>
                                <td>View State</td>
                            </tr>
                            <tr>
                                <td>Lagos</td>
                                <td>10</td>
                                <td>Tech. Finance, Real Estate</td>
                                <td>$33B</td>
                                <td>View State</td>
                            </tr>
                            
                            <tr>
                                <td>Lagos</td>
                                <td>10</td>
                                <td>Tech. Finance, Real Estate</td>
                                <td>$33B</td>
                                <td>View State</td>
                            </tr>
                            
                            <tr>
                                <td>Lagos</td>
                                <td>10</td>
                                <td>Tech. Finance, Real Estate</td>
                                <td>$33B</td>
                                <td>View State</td>
                            </tr>
                        </table>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}
export default ExploreState;