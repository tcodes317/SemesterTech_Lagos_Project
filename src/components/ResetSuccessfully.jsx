function ResetSuccessfully(){
    return(
        <>
            <div className="relative">
                <div className="flex items-center flex-col h-[100vh] space-y-2 w-[300px] mx-auto justify-center">
                    <h1 className="text-center text-black font-bold text-3xl">Logo</h1>
                    <p className="font-bold">Password Reset Successfully!</p>
                    <p className="text-center text-md">To Log in to your account, click the Sign in Button and sign in with your new password.</p>

                    <button className="p-2.5 w-full bg-black text-white mt-4 rounded-lg">
                        <span>Sign In</span>
                    </button>
                </div>
            </div>
        </>
    )
}
export default ResetSuccessfully;