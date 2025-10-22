import { Link } from "react-router-dom";

function SignIn(){
    return(
        <>
            <div className="flex items-center flex-col justify-center h-[100vh] w-[300px] overflow-x-hidden mx-auto">
                <h1 className="text-center text-black font-bold text-3xl py-2">Logo</h1>
                <h3 className="font-bold text-xl py-3">Welcome Back, Sign In</h3>
                <form action="" method="POST" className="w-full mt-4 space-y-2">
                    <div className="flex flex-col space-y-2">
                        <p>Email address</p>
                        <input className="border-2 p-2 rounded-md" type="text" placeholder="Enter your email address" required />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <p>Password</p>
                        <input className="border-2 p-2 rounded-md w-full" type="email" placeholder="***************" required />
                    </div>  
                    <div className="text-right font-bold">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <button className="text-center bg-green-900 hover:text-black hover:border-2 hover:border-black border-2 border-green-900 mt-6 text-white p-2 w-full rounded-md hover:bg-white hover:cursor-pointer">
                        <span>Sign In</span>
                    </button>
                </form>
                <div className="mt-8">
                    <p>Don't have an account? 
                        <Link className="ml-1 text-black font-bold" to="/signup">Sign Up</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
export default SignIn;