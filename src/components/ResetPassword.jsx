function ResetPassword(){
    return(
        <>
            <div className="flex items-center space-y-4 justify-center w-[320px] mx-auto flex-col h-[100vh]">
                <h1 className="font-bold text-2xl">Logo</h1>
                <p className="font-bold text-lg">Reset Password</p>
                <p className="text-center">A verification codewill be sent to your email to reset your password.</p>

                <form action="" method="POST" className="w-full">
                    <div className="space-y-2 mb-4">
                        <p>Email address</p>
                        <input type="email" placeholder="Enter your email address" className="p-2 border-2 rounded-lg w-full" />
                    </div>
                    <button className="p-2.5 bg-black w-full text-white rounded-lg">
                        <span>Send Veification Code</span>
                    </button>
                    
                    <button className="p-2.5 space-x-3 mt-4 w-full text-black rounded-lg">
                        <i className="fa fa-arrow-left"></i>
                        <span>Back</span>
                    </button>
                </form>
            </div>
        </>
    )
}
export default ResetPassword;