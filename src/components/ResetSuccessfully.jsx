import { Link } from "react-router-dom";

function ResetSuccessfully(){
    return(
        <>
            <div className="relative">
                <div className="flex items-center flex-col h-[100vh] space-y-2 w-[300px] mx-auto justify-center">
                    <h1 className="text-center text-black font-bold text-3xl mb-8">Logo</h1>
                    <p className="font-bold">Password Reset Successfully!</p>
                    <p className="text-center text-md">To Log in to your account, click the Sign in Button and sign in with your new password.</p>

                    <Link to="/signin" className="p-2.5 text-center w-full bg-green-900 hover:bg-white hover:text-black hover:cursor-pointer hover:border-2 hover:border-black border-2 text-white mt-4 rounded-lg">
                    <button className="">
                        <span>Sign In</span>
                    </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default ResetSuccessfully;