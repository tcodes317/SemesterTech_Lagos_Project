import check from "./../assets/check.png";

function verified(){
    return(
        <>
            <div className="flex flex-col w-[300px] mx-auto text-center space-y-2 justify-center h-[100vh]">
                <h1 className="text-center text-black text-2xl font-bold mb-10">Logo</h1>
                <div className="flex items-center justify-center">
                    <img src={check}  alt="" />
                    </div>
                <h1 className="text-xl font-bold">Verified</h1>
                
                <p className="w-[200px] mx-auto text-md">Your email has been verified successfully.</p>
                <button className="text-white text-center p-2 bg-black mt-4 rounded-lg">
                    <span>Continue</span>
                </button>
            </div>
        </>
    )
}

export default verified;