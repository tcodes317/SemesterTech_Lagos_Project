function ResetPasswords(){
    return(
        <>
            <div className="flex items-center justify-center space-y-3 h-[100vh] w-[300px] mx-auto flex-col">
                <h1 className="text-center font-bold text-2xl">Logo</h1>
                <p className="text-center font-bold text-lg">Create new password</p>
                <p className="text-center text-sm w-[210px]">Please create a new password to secure your account</p>

                <form className="flex items-center flex-col w-full space-y-8" action="" method="POST">

                <div className="w-full">
                    <p className="font-md">Password</p>
                    <div className="flex items-center border-1 rounded-lg pr-2">
                    <input type="password" placeholder="Enter Password" className="p-2 w-full rounded-lg focus:outline-none" />
                    <i className="fa fa-eye"></i>
                    </div>
                </div>
                <div className="w-full">
                    <p className="font-md">Confirm Password</p>
                    <div className="flex items-center border-1 rounded-lg pr-2">
                    <input type="Confirm Password" placeholder="Confirm password" className="p-2 w-full rounded-lg focus:outline-none" />
                    <i className="fa fa-eye"></i>
                    </div>

                    <button className="p-2.5 text-white bg-black mt-4 w-full rounded-lg">
                        <span>Create new password</span>
                    </button>
                </div>
                </form>
            </div>
        </>
    )
}
export default ResetPasswords;