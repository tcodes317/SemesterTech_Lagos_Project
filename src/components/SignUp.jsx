import { Link } from "react-router-dom";

function SignUp(){
    return(
        <>
            <div className="flex items-center flex-col justify-center h-[100vh] w-[300px] overflow-x-hidden mx-auto">
                <h1 className="text-center text-[#2D7C59] font-bold text-3xl py-2">Logo</h1>
                <h3 className="font-bold text-xl py-3 mb-5">Register a new vendor account</h3>
                <form action="" method="POST" className="w-full space-y-2">
                    <div className="flex flex-col space-y-2">
                        <p>Full Name</p>
                        <input className="border-2 p-2 rounded-md" type="text" placeholder="Enter your first name and last name" required />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p>Email Address</p>
                        <input className="border-2 p-2 rounded-md w-full" type="email" placeholder="Enter your email address" required />
                    </div>
                    <div className="space-y-2">
                        <p>Password</p>
                        <div className="border-2 rounded-lg border-black flex items-center">
                            <input type="password" placeholder="**************" className="p-2 focus:outline-none rounded-md w-full" required />
                            <i className="fa fa-eye mr-2"></i>
                        </div>
                    </div>
                    <div className=" items-center space-x-1 space-y-2">
                        <div className="flex items-center space-x-1.5">
                        <button className="text-xs flex items-center space-x-2 border-2 p-1.5 rounded-full">
                            <i className="fa fa-times"></i>
                            <span>Uppercase</span>
                        </button>
                        <button className="text-xs flex items-center space-x-2 border-2 p-1.5 rounded-full">
                            <i className="fa fa-times"></i>
                            <span>Lowercase</span>
                        </button>
                        <button className="text-xs flex items-center space-x-2 border-2 p-1.5 rounded-full">
                            <i className="fa fa-times"></i>
                            <span>Number</span>
                        </button>
                        </div>
                        <div>
                            <div className="flex items-center space-x-1.5">
                        <button className="text-xs flex items-center space-x-2 border-2 p-1.5 rounded-full">
                            <i className="fa fa-times"></i>
                            <span>8 Characters</span>
                        </button>
                        <button className="text-xs flex items-center space-x-2 border-2 p-1.5 rounded-full">
                            <i className="fa fa-times"></i>
                            <span>Special Character</span>
                        </button>
                        </div>
                        </div>
                    </div>
                    <button className="text-center bg-[#2D7C59] mt-6 text-white p-2 w-full rounded-md hover:bg-green-900 hover:cursor-pointer">
                        <span>Continue</span>
                    </button>
                </form>
                <div className="mt-8">
                    <p>If you already have an account, 
                        <Link className="ml-1 text-black font-bold" to="/signin">Login</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
export default SignUp;